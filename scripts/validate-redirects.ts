import { existsSync } from "node:fs";
import { resolve } from "node:path";

import {
  canonicalOrigin,
  expandSeoRedirectRules,
  nonRegistryHtmlRoutes,
  seoRedirectManifest,
  type ExpandedSeoRedirectRule,
  type SeoRedirectManifest,
} from "../config/seo-redirects";
import { getAllPages } from "../src/content/registry";
import { buildPagePath } from "../src/lib/routing";

type RouteInventoryItem = {
  indexable: boolean;
  source: string;
};

function isAssetOrSystemPath(path: string, manifest: SeoRedirectManifest) {
  if ((manifest.pathPolicy.systemFiles as readonly string[]).includes(path)) {
    return true;
  }

  if (manifest.pathPolicy.assetPrefixes.some((prefix) => path.startsWith(prefix))) {
    return true;
  }

  const finalSegment = path.split("/").filter(Boolean).at(-1) ?? "";
  const extension = finalSegment.match(/\.([a-z0-9]+)$/i)?.[1]?.toLowerCase();

  return Boolean(
    extension &&
      extension !== "html" &&
      (manifest.pathPolicy.assetExtensions as readonly string[]).includes(extension),
  );
}

function validatePathSyntax(path: string, label: string, errors: string[]) {
  if (!path.startsWith("/")) {
    errors.push(`${label} '${path}' must be an origin-relative path.`);
  }

  if (path.includes("?") || path.includes("#")) {
    errors.push(`${label} '${path}' must not embed a query string or fragment.`);
  }

  if (path !== "/" && path.includes("//")) {
    errors.push(`${label} '${path}' contains an empty path segment.`);
  }

  if (path.includes("..")) {
    errors.push(`${label} '${path}' must not contain parent-directory traversal.`);
  }
}

function findRedirectCycles(rules: readonly ExpandedSeoRedirectRule[]) {
  const targetBySource = new Map<string, string>(
    rules.map((rule) => [rule.source, rule.target] as const),
  );
  const cycles = new Set<string>();

  for (const startingSource of targetBySource.keys()) {
    const path: string[] = [];
    const positionBySource = new Map<string, number>();
    let current: string | undefined = startingSource;

    while (current && targetBySource.has(current)) {
      const previousPosition = positionBySource.get(current);
      if (previousPosition !== undefined) {
        const cycle = [...path.slice(previousPosition), current];
        cycles.add(cycle.join(" -> "));
        break;
      }

      positionBySource.set(current, path.length);
      path.push(current);
      current = targetBySource.get(current);
    }
  }

  return [...cycles];
}

function buildRouteInventory(errors: string[]) {
  const inventory = new Map<string, RouteInventoryItem>();

  for (const page of getAllPages()) {
    const path = buildPagePath(page);
    if (inventory.has(path)) {
      errors.push(`Route inventory contains duplicate canonical path '${path}'.`);
    }
    inventory.set(path, { indexable: page.indexable, source: page.id });
  }

  for (const route of nonRegistryHtmlRoutes) {
    if (!existsSync(resolve(process.cwd(), route.sourceFile))) {
      errors.push(
        `Non-registry redirect target '${route.path}' declares missing source file '${route.sourceFile}'.`,
      );
    }
    if (inventory.has(route.path)) {
      errors.push(`Non-registry redirect target '${route.path}' collides with the content registry.`);
    }
    inventory.set(route.path, { indexable: route.indexable, source: route.sourceFile });
  }

  return inventory;
}

export function validateRedirectManifest(manifest: SeoRedirectManifest = seoRedirectManifest) {
  const errors: string[] = [];

  if (manifest.version !== 1) {
    errors.push(`Unsupported redirect manifest version '${manifest.version}'.`);
  }
  if (manifest.canonicalOrigin !== canonicalOrigin) {
    errors.push(
      `Redirect manifest canonical origin '${manifest.canonicalOrigin}' does not match '${canonicalOrigin}'.`,
    );
  }
  if (!manifest.htmlTrailingSlash) {
    errors.push("Redirect manifest must retain the trailing-slash HTML URL policy.");
  }
  if (manifest.defaultQueryPolicy !== "preserve") {
    errors.push("Redirect manifest must preserve query strings by default.");
  }

  const reconstructedCanonicalOrigin =
    `${manifest.originPolicy.canonicalProtocol}//${manifest.originPolicy.canonicalHost}`;
  if (reconstructedCanonicalOrigin !== manifest.canonicalOrigin) {
    errors.push(
      `Origin policy resolves to '${reconstructedCanonicalOrigin}' instead of '${manifest.canonicalOrigin}'.`,
    );
  }
  if (!manifest.originPolicy.absoluteLocation) {
    errors.push("Origin redirects must emit an absolute Location URL.");
  }
  if (!manifest.originPolicy.composeOriginAndPathRedirectInOneHop) {
    errors.push("Origin and path canonicalization must be composed into one redirect hop.");
  }
  if (!manifest.originPolicy.normalizeOriginForFiles) {
    errors.push("HTTPS/www origin normalization must also cover real files without changing their paths.");
  }

  const expectedRedirectOrigins = new Set([
    "http://halatao.cz",
    "http://www.halatao.cz",
    "https://halatao.cz",
  ]);
  const declaredRedirectOrigins = new Set<string>();
  for (const origin of manifest.originPolicy.redirectOrigins) {
    if (declaredRedirectOrigins.has(origin)) {
      errors.push(`Origin policy contains duplicate redirect origin '${origin}'.`);
    }
    declaredRedirectOrigins.add(origin);

    try {
      const parsed = new URL(origin);
      if (parsed.origin !== origin || parsed.pathname !== "/" || parsed.search || parsed.hash) {
        errors.push(`Redirect origin '${origin}' must contain only protocol and host.`);
      }
    } catch {
      errors.push(`Redirect origin '${origin}' is not a valid absolute origin.`);
    }
  }
  for (const expectedOrigin of expectedRedirectOrigins) {
    if (!declaredRedirectOrigins.has(expectedOrigin)) {
      errors.push(`Origin policy is missing required legacy origin '${expectedOrigin}'.`);
    }
  }
  if (declaredRedirectOrigins.has(manifest.canonicalOrigin)) {
    errors.push("Canonical origin must not redirect to itself.");
  }

  if (!manifest.pathPolicy.canonicalizeOnlyKnownHtmlRoutes) {
    errors.push("Path policy must not guess targets for unknown HTML routes.");
  }
  if (!manifest.pathPolicy.htmlTrailingSlash || !manifest.pathPolicy.removeIndexHtml) {
    errors.push("Path policy must canonicalize known HTML routes to slash URLs without index.html.");
  }
  if (manifest.pathPolicy.realFileHandling !== "never-add-trailing-slash") {
    errors.push("Path policy must never append a trailing slash to real files.");
  }
  for (const requiredSystemFile of ["/robots.txt", "/sitemap.xml", "/llms.txt"]) {
    if (!(manifest.pathPolicy.systemFiles as readonly string[]).includes(requiredSystemFile)) {
      errors.push(`Path policy is missing required system-file exclusion '${requiredSystemFile}'.`);
    }
  }

  const rawExactSources = new Set(
    manifest.rules.filter((rule) => rule.kind === "exact").map((rule) => rule.source),
  );

  for (const [index, rule] of manifest.rules.entries()) {
    const ruleLabel = `Redirect rule #${index + 1}`;

    if (!rule.reason.trim()) {
      errors.push(`${ruleLabel} has no reason.`);
    }
    if (rule.status !== 301 && rule.status !== 308) {
      errors.push(`${ruleLabel} has unsupported permanent status '${rule.status}'.`);
    }
    if (rule.query === "drop" && !rule.queryReason.trim()) {
      errors.push(`${ruleLabel} drops query strings without an explicit reason.`);
    }
    if (rule.allowNonIndexableTarget && !rule.nonIndexableTargetReason?.trim()) {
      errors.push(`${ruleLabel} allows a non-indexable target without an explicit justification.`);
    }

    if (rule.kind === "exact") {
      validatePathSyntax(rule.source, `${ruleLabel} source`, errors);
      validatePathSyntax(rule.target, `${ruleLabel} target`, errors);
      continue;
    }

    validatePathSyntax(rule.sourcePrefix, `${ruleLabel} source prefix`, errors);
    validatePathSyntax(rule.targetPrefix, `${ruleLabel} target prefix`, errors);

    if (!rule.sourcePrefix.endsWith("/") || !rule.targetPrefix.endsWith("/")) {
      errors.push(`${ruleLabel} prefix paths must end with '/'.`);
    }
    if (rule.allowedSuffixes.length === 0) {
      errors.push(`${ruleLabel} prefix rule has no explicitly allowed suffixes.`);
    }

    const seenSuffixes = new Set<string>();
    for (const suffix of rule.allowedSuffixes) {
      if (!suffix || suffix.startsWith("/") || suffix.includes("?") || suffix.includes("#") || suffix.includes("..")) {
        errors.push(`${ruleLabel} contains unsafe allowed suffix '${suffix}'.`);
      }
      if (seenSuffixes.has(suffix)) {
        errors.push(`${ruleLabel} contains duplicate allowed suffix '${suffix}'.`);
      }
      seenSuffixes.add(suffix);

      const expandedSource = `${rule.sourcePrefix}${suffix}`;
      if (rawExactSources.has(expandedSource as `/${string}`)) {
        errors.push(
          `${ruleLabel} prefix expansion '${expandedSource}' collides with an exact redirect source.`,
        );
      }
    }
  }

  const expandedRules = expandSeoRedirectRules(manifest);
  const routeInventory = buildRouteInventory(errors);
  const rulesBySource = new Map<string, ExpandedSeoRedirectRule[]>();

  for (const rule of expandedRules) {
    const groupedRules = rulesBySource.get(rule.source) ?? [];
    groupedRules.push(rule);
    rulesBySource.set(rule.source, groupedRules);

    validatePathSyntax(rule.source, "Redirect source", errors);
    validatePathSyntax(rule.target, "Redirect target", errors);

    if (rule.source === rule.target) {
      errors.push(`Redirect source '${rule.source}' is identical to its target.`);
    }
    if (isAssetOrSystemPath(rule.source, manifest)) {
      errors.push(`Redirect source '${rule.source}' accidentally targets a system endpoint or static asset.`);
    }
    if (isAssetOrSystemPath(rule.target, manifest)) {
      errors.push(`Redirect target '${rule.target}' must be an active canonical HTML route, not a file or asset.`);
    }
    if (!rule.target.endsWith("/")) {
      errors.push(`Redirect target '${rule.target}' does not use the canonical trailing slash.`);
    }
    if (routeInventory.has(rule.source)) {
      errors.push(
        `Redirect source '${rule.source}' is still an active canonical route (${routeInventory.get(rule.source)?.source}).`,
      );
    }

    const target = routeInventory.get(rule.target);
    if (!target) {
      errors.push(`Redirect target '${rule.target}' does not exist in the active route inventory.`);
    } else if (!target.indexable) {
      if (!rule.allowNonIndexableTarget) {
        errors.push(
          `Redirect target '${rule.target}' is non-indexable and the rule has no explicit exception.`,
        );
      } else if (!rule.nonIndexableTargetReason?.trim()) {
        errors.push(
          `Redirect target '${rule.target}' is non-indexable but its exception has no justification.`,
        );
      }
    }
  }

  for (const [source, rules] of rulesBySource) {
    if (rules.length > 1) {
      errors.push(
        `Duplicate redirect source '${source}' appears ${rules.length} times (including expanded prefix rules).`,
      );
    }
  }

  const redirectSources = new Set(rulesBySource.keys());
  for (const rule of expandedRules) {
    if (redirectSources.has(rule.target)) {
      errors.push(
        `Redirect chain: '${rule.source}' targets redirect source '${rule.target}' instead of a final canonical route.`,
      );
    }
  }

  for (const cycle of findRedirectCycles(expandedRules)) {
    errors.push(`Redirect loop: ${cycle}.`);
  }

  return {
    errors,
    expandedRules,
    routeInventory,
  };
}

const result = validateRedirectManifest();
const shouldPrint = process.argv.includes("--print");

if (shouldPrint) {
  console.log(JSON.stringify(result.expandedRules, null, 2));
}

if (result.errors.length > 0) {
  console.error(`Redirect validation failed with ${result.errors.length} error(s):`);
  for (const error of result.errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
} else if (!shouldPrint) {
  const counts = result.expandedRules.reduce<Record<string, number>>((accumulator, rule) => {
    accumulator[rule.category] = (accumulator[rule.category] ?? 0) + 1;
    return accumulator;
  }, {});

  console.log(
    `Redirect validation passed: ${result.expandedRules.length} exact rules; ` +
      `${counts.canonicalization ?? 0} canonicalization, ${counts.legacy ?? 0} legacy, ` +
      `${counts["content-merge"] ?? 0} content merge.`,
  );
}
