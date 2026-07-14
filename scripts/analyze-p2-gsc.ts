import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { canonicalOrigin, expandSeoRedirectRules } from "../config/seo-redirects";
import { getAllPages } from "../src/content/registry";
import { buildPagePath } from "../src/lib/routing";

type CsvRow = Record<string, string>;

type PageAggregate = {
  canonicalUrl: string;
  clicks: number;
  impressions: number;
  weightedPosition: number;
  sourceUrls: Set<string>;
};

function parseArguments() {
  const values = new Map<string, string[]>();
  for (let index = 2; index < process.argv.length; index += 2) {
    const key = process.argv[index];
    const value = process.argv[index + 1];
    if (!key?.startsWith("--") || !value) {
      throw new Error(`Invalid argument near '${key ?? "end of command"}'.`);
    }
    values.set(key, [...(values.get(key) ?? []), value]);
  }

  const performanceDir = values.get("--performance-dir")?.[0];
  const coverageValidDir = values.get("--coverage-valid-dir")?.[0];
  const drilldownDirs = values.get("--coverage-drilldown-dir") ?? [];
  if (!performanceDir || !coverageValidDir || drilldownDirs.length === 0) {
    throw new Error(
      "Required: --performance-dir, --coverage-valid-dir and at least one --coverage-drilldown-dir.",
    );
  }

  return { performanceDir, coverageValidDir, drilldownDirs };
}

function parseCsv(input: string): CsvRow[] {
  const records: string[][] = [];
  let record: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];
    if (quoted) {
      if (character === '"' && input[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') quoted = true;
    else if (character === ",") {
      record.push(field);
      field = "";
    } else if (character === "\n") {
      record.push(field.replace(/\r$/, ""));
      records.push(record);
      record = [];
      field = "";
    } else field += character;
  }

  if (field || record.length > 0) {
    record.push(field.replace(/\r$/, ""));
    records.push(record);
  }

  const headers = records.shift() ?? [];
  return records
    .filter((values) => values.some(Boolean))
    .map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function csvCell(value: string | number | boolean) {
  const stringValue = String(value);
  return /[",\r\n]/.test(stringValue) ? `"${stringValue.replaceAll('"', '""')}"` : stringValue;
}

function serializeCsv(headers: readonly string[], rows: readonly Record<string, string | number | boolean>[]) {
  return `${[
    headers.map(csvCell).join(","),
    ...rows.map((row) => headers.map((header) => csvCell(row[header] ?? "")).join(",")),
  ].join("\n")}\n`;
}

const targetBySource = new Map<string, string>(
  expandSeoRedirectRules().map((rule) => [rule.source, rule.target]),
);
const routeInventory = new Map(
  getAllPages().map((page) => [
    buildPagePath(page),
    { locale: page.locale, pageType: page.pageType, indexable: page.indexable },
  ]),
);

function normalizeUrl(input: string) {
  const url = new URL(input, canonicalOrigin);
  const isSiteHost = url.hostname === "halatao.cz" || url.hostname === "www.halatao.cz";
  url.protocol = "https:";
  if (isSiteHost) {
    url.hostname = "www.halatao.cz";
  }
  url.search = "";
  url.hash = "";

  let path = url.pathname;
  const redirectTarget = isSiteHost ? targetBySource.get(path) : undefined;
  if (redirectTarget) path = redirectTarget;
  else {
    const finalSegment = path.split("/").filter(Boolean).at(-1) ?? "";
    if (path !== "/" && !path.endsWith("/") && !finalSegment.includes(".")) path += "/";
  }

  return new URL(path, isSiteHost ? canonicalOrigin : url.origin).toString();
}

function getCurrentRoute(normalizedUrl: string) {
  const url = new URL(normalizedUrl);
  return url.origin === canonicalOrigin ? routeInventory.get(url.pathname) : undefined;
}

function parsePercent(value: string) {
  return Number.parseFloat(value.replace("%", "")) || 0;
}

async function readCsv(path: string) {
  return parseCsv(await readFile(path, "utf8"));
}

async function readCoverageIssue(directory: string) {
  const metadata = await readCsv(resolve(directory, "Metadata.csv"));
  return metadata.find((row) => row.Služba === "Problém")?.Hodnota ?? "Valid";
}

async function main() {
  const { performanceDir, coverageValidDir, drilldownDirs } = parseArguments();
  const outputDirectory = resolve(process.cwd(), "analysis/p2");
  await mkdir(outputDirectory, { recursive: true });

  const pageRows = await readCsv(resolve(performanceDir, "Stránky.csv"));
  const pageAggregates = new Map<string, PageAggregate>();
  for (const row of pageRows) {
    const sourceUrl = row["Nejvýznamnější stránky"];
    const canonicalUrl = normalizeUrl(sourceUrl);
    const clicks = Number.parseInt(row.Prokliky, 10) || 0;
    const impressions = Number.parseInt(row.Zobrazení, 10) || 0;
    const position = Number.parseFloat(row.Pozice) || 0;
    const aggregate = pageAggregates.get(canonicalUrl) ?? {
      canonicalUrl,
      clicks: 0,
      impressions: 0,
      weightedPosition: 0,
      sourceUrls: new Set<string>(),
    };
    aggregate.clicks += clicks;
    aggregate.impressions += impressions;
    aggregate.weightedPosition += position * impressions;
    aggregate.sourceUrls.add(sourceUrl);
    pageAggregates.set(canonicalUrl, aggregate);
  }

  const normalizedPages = [...pageAggregates.values()]
    .sort((left, right) => right.impressions - left.impressions)
    .map((aggregate) => {
      const normalizedUrl = new URL(aggregate.canonicalUrl);
      const path = normalizedUrl.pathname;
      const route = getCurrentRoute(aggregate.canonicalUrl);
      return {
        canonical_url: aggregate.canonicalUrl,
        locale: route?.locale ?? (normalizedUrl.origin === canonicalOrigin ? (path.startsWith("/en/") ? "en" : "cs") : "external"),
        page_type: route?.pageType ?? (path === "/cs/" || path === "/en/" ? "home" : "unknown"),
        clicks: aggregate.clicks,
        impressions: aggregate.impressions,
        ctr_percent: aggregate.impressions ? ((aggregate.clicks / aggregate.impressions) * 100).toFixed(2) : "0.00",
        average_position: aggregate.impressions
          ? (aggregate.weightedPosition / aggregate.impressions).toFixed(2)
          : "0.00",
        source_url_count: aggregate.sourceUrls.size,
        source_urls: [...aggregate.sourceUrls].sort().join(" | "),
      };
    });

  const queryRows = await readCsv(resolve(performanceDir, "Dotazy.csv"));
  const normalizedQueries = queryRows
    .map((row) => ({
      query: row["Nejčastější dotazy"].replace(/\s+/g, " ").trim(),
      clicks: Number.parseInt(row.Prokliky, 10) || 0,
      impressions: Number.parseInt(row.Zobrazení, 10) || 0,
      ctr_percent: parsePercent(row.CTR).toFixed(2),
      average_position: (Number.parseFloat(row.Pozice) || 0).toFixed(2),
    }))
    .sort((left, right) => right.impressions - left.impressions);

  const coverageSources = [
    { directory: coverageValidDir, issue: "Valid" },
    ...(await Promise.all(
      drilldownDirs.map(async (directory) => ({ directory, issue: await readCoverageIssue(directory) })),
    )),
  ];
  const coverageRows: Record<string, string | number | boolean>[] = [];
  for (const source of coverageSources) {
    for (const row of await readCsv(resolve(source.directory, "Tabulka.csv"))) {
      const normalizedUrl = normalizeUrl(row.URL);
      const route = getCurrentRoute(normalizedUrl);
      const sourceHost = new URL(row.URL, canonicalOrigin).hostname;
      const isExternalSubdomain = sourceHost !== "halatao.cz" && sourceHost !== "www.halatao.cz";
      if (isExternalSubdomain && (new URL(normalizedUrl).origin === canonicalOrigin || route)) {
        throw new Error(`External subdomain '${row.URL}' was incorrectly mapped into the main-site registry.`);
      }
      coverageRows.push({
        source_url: row.URL,
        normalized_url: normalizedUrl,
        last_crawled: row["Naposledy procházeno"],
        exported_state: source.issue,
        current_registry_route: Boolean(route),
        current_indexable: route?.indexable ?? false,
      });
    }
  }

  await writeFile(
    resolve(outputDirectory, "normalized-pages.csv"),
    serializeCsv(Object.keys(normalizedPages[0]), normalizedPages),
  );
  await writeFile(
    resolve(outputDirectory, "normalized-queries.csv"),
    serializeCsv(Object.keys(normalizedQueries[0]), normalizedQueries),
  );
  await writeFile(
    resolve(outputDirectory, "coverage-normalized.csv"),
    serializeCsv(
      [
        "source_url",
        "normalized_url",
        "last_crawled",
        "exported_state",
        "current_registry_route",
        "current_indexable",
      ],
      coverageRows,
    ),
  );

  console.log(
    `Wrote ${normalizedPages.length} normalized pages, ${normalizedQueries.length} queries and ${coverageRows.length} coverage rows to analysis/p2.`,
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
