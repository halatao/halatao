import {
  canonicalOrigin,
  expandSeoRedirectRules,
  originPolicy,
  pathPolicy,
} from "../config/seo-redirects";

const probeName = "seo_redirect_probe";
const probeValue = "halatao-p0";
const timeoutMs = Number.parseInt(process.env.SEO_EDGE_TIMEOUT_MS ?? "15000", 10);
const concurrency = Number.parseInt(process.env.SEO_EDGE_CONCURRENCY ?? "6", 10);
const dryRun = process.argv.includes("--dry-run");

type Failure = { request: string; message: string };

function withProbe(url: URL) {
  url.searchParams.set(probeName, probeValue);
  return url;
}

function expectedLocation(path: string) {
  return withProbe(new URL(path, canonicalOrigin)).toString();
}

function readAttribute(tag: string, name: string) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return match?.[1] ?? match?.[2] ?? match?.[3] ?? null;
}

function readCanonical(html: string) {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = match[0];
    const rel = readAttribute(tag, "rel")?.toLowerCase().split(/\s+/) ?? [];
    if (rel.includes("canonical")) return readAttribute(tag, "href");
  }
  return null;
}

async function request(url: string) {
  return fetch(url, {
    redirect: "manual",
    signal: AbortSignal.timeout(timeoutMs),
    headers: { "user-agent": "halatao-seo-edge-acceptance/1.0" },
  });
}

async function runWithConcurrency<T>(items: readonly T[], task: (item: T) => Promise<void>) {
  let cursor = 0;
  const workers = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      await task(items[index]);
    }
  });
  await Promise.all(workers);
}

async function main() {
  const rules = expandSeoRedirectRules();

  if (dryRun) {
    console.log(
      `Dry run: ${rules.length} path redirects, ${originPolicy.redirectOrigins.length} non-canonical origins, ` +
        `${pathPolicy.systemFiles.length} declared system files. No HTTP requests sent.`,
    );
    process.exit(0);
  }

  if (!process.argv.includes("--run") && process.env.SEO_EDGE_TEST_CONFIRM !== "production-edge-active") {
    console.error(
      "Refusing network tests. Set SEO_EDGE_TEST_CONFIRM=production-edge-active only after the real edge layer is deployed.",
    );
    process.exit(2);
  }

  const failures: Failure[] = [];
  const verifiedTargets = new Set<string>();

  await runWithConcurrency(rules, async (rule) => {
    const source = withProbe(new URL(rule.source, canonicalOrigin)).toString();
    const expected = expectedLocation(rule.target);

    try {
      const response = await request(source);
      const location = response.headers.get("location");

      if (response.status !== rule.status) {
        failures.push({ request: source, message: `expected ${rule.status}, received ${response.status}` });
      }
      if (location !== expected) {
        failures.push({ request: source, message: `expected absolute Location '${expected}', received '${location}'` });
      }
      if (location) {
        const redirected = new URL(location);
        if (redirected.searchParams.get(probeName) !== probeValue) {
          failures.push({ request: source, message: "query string was not preserved in Location" });
        }
      }
    } catch (error) {
      failures.push({ request: source, message: error instanceof Error ? error.message : String(error) });
    }
  });

  for (const rule of rules) verifiedTargets.add(rule.target);

  await runWithConcurrency([...verifiedTargets], async (targetPath) => {
    const target = expectedLocation(targetPath);
    try {
      const response = await request(target);
      if (response.status !== 200) {
        failures.push({ request: target, message: `final target expected 200, received ${response.status}` });
        return;
      }
      if (response.headers.has("location")) {
        failures.push({ request: target, message: `final target returned a second Location '${response.headers.get("location")}'` });
      }

      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("text/html")) {
        const canonical = readCanonical(await response.text());
        const expectedCanonical = new URL(targetPath, canonicalOrigin).toString();
        if (canonical !== expectedCanonical) {
          failures.push({ request: target, message: `expected self-canonical '${expectedCanonical}', received '${canonical}'` });
        }
      }
    } catch (error) {
      failures.push({ request: target, message: error instanceof Error ? error.message : String(error) });
    }
  });

  const compositionPaths = ["/", "/en/services", "/en/services/index.html"] as const;
  const targetBySource = new Map(rules.map((rule) => [rule.source, rule.target] as const));

  for (const origin of originPolicy.redirectOrigins) {
    for (const sourcePath of compositionPaths) {
      const targetPath = targetBySource.get(sourcePath) ?? sourcePath;
      const source = withProbe(new URL(sourcePath, origin)).toString();
      const expected = expectedLocation(targetPath);
      try {
        const response = await request(source);
        if (![301, 308].includes(response.status)) {
          failures.push({ request: source, message: `expected permanent first-hop 301/308, received ${response.status}` });
        }
        if (response.headers.get("location") !== expected) {
          failures.push({
            request: source,
            message: `origin and path normalization must be one hop to '${expected}', received '${response.headers.get("location")}'`,
          });
        }
      } catch (error) {
        failures.push({ request: source, message: error instanceof Error ? error.message : String(error) });
      }
    }

    const fileSource = withProbe(new URL("/robots.txt", origin)).toString();
    const fileTarget = expectedLocation("/robots.txt");
    try {
      const response = await request(fileSource);
      if (![301, 308].includes(response.status)) {
        failures.push({ request: fileSource, message: `expected permanent origin redirect, received ${response.status}` });
      }
      if (response.headers.get("location") !== fileTarget) {
        failures.push({
          request: fileSource,
          message: `file origin normalization must keep the file path and redirect to '${fileTarget}'`,
        });
      }
    } catch (error) {
      failures.push({ request: fileSource, message: error instanceof Error ? error.message : String(error) });
    }
  }

  for (const filePath of ["/robots.txt", "/sitemap.xml", "/llms.txt", "/icon.svg"] as const) {
    const canonicalFile = withProbe(new URL(filePath, canonicalOrigin)).toString();
    try {
      const response = await request(canonicalFile);
      if (response.status !== 200) {
        failures.push({ request: canonicalFile, message: `canonical file expected 200, received ${response.status}` });
      }
      if (response.headers.has("location")) {
        failures.push({ request: canonicalFile, message: "canonical file must not redirect or gain a trailing slash" });
      }
    } catch (error) {
      failures.push({ request: canonicalFile, message: error instanceof Error ? error.message : String(error) });
    }
  }

  if (failures.length > 0) {
    console.error(`Edge redirect acceptance failed with ${failures.length} error(s):`);
    for (const failure of failures) console.error(`- ${failure.request}: ${failure.message}`);
    process.exit(1);
  }

  console.log(
    `Edge redirect acceptance passed for ${rules.length} manifest redirects, ${verifiedTargets.size} final targets, ` +
      `${originPolicy.redirectOrigins.length * compositionPaths.length} combined origin/path cases, ` +
      `${originPolicy.redirectOrigins.length} file-origin cases, and 4 canonical file endpoints.`,
  );
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
