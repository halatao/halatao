import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

import { expandSeoRedirectRules, nonRegistryHtmlRoutes } from "../config/seo-redirects";
import { getAllPages } from "../src/content/registry";
import type { ContentPage, Locale } from "../src/content/types";
import { absoluteUrl, buildPagePath } from "../src/lib/routing";
import { siteConfig } from "../src/lib/site";

const outputDirectory = path.resolve(process.cwd(), "out");

const legalRoutes = nonRegistryHtmlRoutes.map((route) => route.path);
const systemEndpoints = new Set(["/robots.txt", "/sitemap.xml", "/llms.txt"]);
const requiredLocationRoutes = [
  "/cs/lokality/",
  "/cs/lokality/praha/",
  "/cs/lokality/brno/",
  "/cs/lokality/ostrava/",
] as const;
const removedLoserRoutes = [
  "/cs/priklady/workflow-poptavka-nabidka-realizace/",
  "/en/use-cases/request-offer-delivery-workflow/",
  "/cs/problemy/poptavky-nabidky-a-realizace-v-tabulkach-a-emailu/",
  "/en/problems/requests-offers-and-delivery-in-spreadsheets/",
  "/cs/sluzby/system-pro-rizeni-poptavek-nabidek-a-realizace/",
  "/en/services/request-offer-delivery-system/",
] as const;

const errors: string[] = [];

function reportError(message: string) {
  errors.push(message);
}

function decodeHtmlEntities(value: string) {
  const namedEntities: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: "\u00a0",
    quot: '"',
  };

  return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, encoded: string) => {
    if (encoded.startsWith("#x") || encoded.startsWith("#X")) {
      const codePoint = Number.parseInt(encoded.slice(2), 16);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
    }

    if (encoded.startsWith("#")) {
      const codePoint = Number.parseInt(encoded.slice(1), 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity;
    }

    return namedEntities[encoded.toLowerCase()] ?? entity;
  });
}

function normalizeText(value: string) {
  return decodeHtmlEntities(
    value
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<br\s*\/?\s*>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .normalize("NFC")
    .replace(/\s+/gu, " ")
    .trim();
}

function getTags(html: string, tagName: string) {
  return html.match(new RegExp(`<${tagName}\\b[^>]*>`, "gi")) ?? [];
}

function parseAttributes(tag: string) {
  const attributes = new Map<string, string>();
  const attributePattern = /([^\s=<>/"']+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

  for (const match of tag.matchAll(attributePattern)) {
    const name = match[1].toLowerCase();
    const value = match[2] ?? match[3] ?? match[4] ?? "";
    attributes.set(name, decodeHtmlEntities(value));
  }

  return attributes;
}

function relIncludes(attributes: Map<string, string>, expected: string) {
  return (attributes.get("rel") ?? "")
    .toLowerCase()
    .split(/\s+/)
    .includes(expected);
}

function routeOutputDirectory(route: string) {
  if (route === "/") {
    return outputDirectory;
  }

  const segments = route.replace(/^\/+|\/+$/g, "").split("/");
  return path.join(outputDirectory, ...segments);
}

function routeOutputFile(route: string) {
  return path.join(routeOutputDirectory(route), "index.html");
}

function readOutputRoute(route: string) {
  const file = routeOutputFile(route);

  if (!existsSync(file)) {
    reportError(`Missing generated HTML for ${route}: ${path.relative(process.cwd(), file)}`);
    return null;
  }

  return readFileSync(file, "utf8");
}

function validateCanonical(route: string, html: string, canonicalRoute = route) {
  const canonicalLinks = getTags(html, "link")
    .map(parseAttributes)
    .filter((attributes) => relIncludes(attributes, "canonical"));
  const expectedCanonical = absoluteUrl(canonicalRoute);

  if (canonicalLinks.length !== 1) {
    reportError(`${route} must contain exactly one canonical link; found ${canonicalLinks.length}.`);
    return;
  }

  const canonical = canonicalLinks[0].get("href");
  if (canonical !== expectedCanonical) {
    reportError(`${route} canonical is '${canonical ?? "(missing href)"}', expected '${expectedCanonical}'.`);
  }

  if (!canonical) {
    return;
  }

  try {
    const canonicalUrl = new URL(canonical);
    if (canonicalUrl.origin !== siteConfig.siteUrl) {
      reportError(`${route} canonical must use ${siteConfig.siteUrl}; found '${canonicalUrl.origin}'.`);
    }
    if (canonicalUrl.pathname !== "/" && !canonicalUrl.pathname.endsWith("/")) {
      reportError(`${route} canonical is missing the required trailing slash: '${canonical}'.`);
    }
    if (canonicalUrl.search || canonicalUrl.hash) {
      reportError(`${route} canonical must not contain a query string or fragment: '${canonical}'.`);
    }
  } catch {
    reportError(`${route} has an invalid canonical URL: '${canonical}'.`);
  }
}

function validateRobots(route: string, html: string, indexable: boolean) {
  const robotsTags = getTags(html, "meta")
    .map(parseAttributes)
    .filter((attributes) => attributes.get("name")?.toLowerCase() === "robots");

  if (robotsTags.length !== 1) {
    reportError(`${route} must contain exactly one robots meta tag; found ${robotsTags.length}.`);
    return;
  }

  const directives = new Set(
    (robotsTags[0].get("content") ?? "")
      .toLowerCase()
      .split(/[\s,]+/)
      .filter(Boolean),
  );

  if (indexable) {
    if (!directives.has("index") || directives.has("noindex")) {
      reportError(`${route} is indexable in the registry but rendered robots directives are '${[...directives].join(", ")}'.`);
    }
    if (!directives.has("follow") || directives.has("nofollow")) {
      reportError(`${route} is indexable but does not render an explicit index,follow policy.`);
    }
  } else if (!directives.has("noindex") || directives.has("index")) {
    reportError(`${route} is non-indexable in the registry but rendered robots directives are '${[...directives].join(", ")}'.`);
  }
}

function validateHtmlLanguage(route: string, html: string, expectedLocale: Locale) {
  const htmlTags = getTags(html, "html");
  if (htmlTags.length !== 1) {
    reportError(`${route} must contain exactly one <html> element; found ${htmlTags.length}.`);
    return;
  }

  const actualLocale = parseAttributes(htmlTags[0]).get("lang");
  if (actualLocale !== expectedLocale) {
    reportError(`${route} renders html lang='${actualLocale ?? "(missing)"}', expected '${expectedLocale}'.`);
  }
}

function validateH1(route: string, html: string, expectedText?: string) {
  const openingTags = getTags(html, "h1");
  const h1Match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/i);

  if (openingTags.length !== 1 || !h1Match) {
    reportError(`${route} must contain exactly one complete <h1>; found ${openingTags.length} opening tag(s).`);
    return;
  }

  const actualText = normalizeText(h1Match[1]);
  if (!actualText) {
    reportError(`${route} renders an empty H1.`);
    return;
  }

  if (expectedText !== undefined && actualText !== normalizeText(expectedText)) {
    reportError(`${route} renders H1 '${actualText}', expected page.hero.title '${normalizeText(expectedText)}'.`);
  }
}

function validateMainLandmark(route: string, html: string) {
  const mainTags = getTags(html, "main");
  if (mainTags.length !== 1) {
    reportError(`${route} must contain exactly one <main> landmark; found ${mainTags.length}.`);
  }
}

function validateJsonLdSyntax(route: string, html: string) {
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)].filter((match) => {
    const attributes = parseAttributes(`<script${match[1]}>`);
    return attributes.get("type")?.toLowerCase() === "application/ld+json";
  });

  for (const [index, script] of scripts.entries()) {
    try {
      JSON.parse(script[2]);
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      reportError(`${route} contains invalid JSON-LD in block ${index + 1}: ${detail}.`);
    }
  }
}

const explicitLocationRedirectPattern =
  /(?:window|document)\s*\.\s*location\s*(?:=|\.\s*(?:href\s*=|(?:replace|assign)\s*\())/i;
const genericLocationRedirectPattern = /location\s*\.\s*(?:href\s*=|(?:replace|assign)\s*\()/i;

function validateClientRedirectGuard() {
  const forbiddenSamples = [
    'window.location = "/cs/"',
    'window.location.href = "/cs/"',
    'document.location.assign("/cs/")',
    'document.location.replace("/cs/")',
  ];
  for (const sample of forbiddenSamples) {
    if (!explicitLocationRedirectPattern.test(sample)) {
      reportError(`Client redirect guard does not detect '${sample}'.`);
    }
  }
}

function validateP2ContentArtifacts(page: ContentPage, route: string, html: string) {
  const renderedText = normalizeText(html);

  if (page.workflow) {
    const workflowLists = getTags(html, "ol")
      .map(parseAttributes)
      .filter((attributes) => (attributes.get("class") ?? "").split(/\s+/).includes("workflow-steps"));
    if (workflowLists.length !== 1) {
      reportError(`${route} must render one ordered workflow diagram; found ${workflowLists.length}.`);
    }
    for (const step of page.workflow.steps) {
      if (!renderedText.includes(normalizeText(step.title))) {
        reportError(`${route} is missing workflow step '${step.title}' in generated HTML.`);
      }
    }
  }

  if (page.workAsset) {
    const expectedItems = page.workAsset.groups.reduce((total, group) => total + group.items.length, 0);
    const checkboxes = getTags(html, "input")
      .map(parseAttributes)
      .filter((attributes) => attributes.get("type") === "checkbox" && attributes.get("data-tool-id") === page.translationKey);
    if (checkboxes.length !== expectedItems) {
      reportError(`${route} renders ${checkboxes.length} work-asset checkboxes; expected ${expectedItems}.`);
    }
  }
}

type HreflangMap = Map<string, string>;

function readHreflangMap(route: string, html: string) {
  const result: HreflangMap = new Map();
  const alternateLinks = getTags(html, "link")
    .map(parseAttributes)
    .filter((attributes) => relIncludes(attributes, "alternate") && attributes.has("hreflang"));

  for (const attributes of alternateLinks) {
    const language = (attributes.get("hreflang") ?? "").toLowerCase();
    const href = attributes.get("href") ?? "";

    if (!language || !href) {
      reportError(`${route} contains a hreflang link without both hreflang and href.`);
      continue;
    }
    if (result.has(language)) {
      reportError(`${route} contains duplicate hreflang '${language}'.`);
      continue;
    }

    result.set(language, href);
  }

  return result;
}

function expectedHreflangs(
  page: ContentPage,
  pagesByTranslationKey: Map<string, ContentPage[]>,
) {
  const cluster = pagesByTranslationKey.get(page.translationKey) ?? [];
  const csPage = cluster.find((candidate) => candidate.locale === "cs");
  const enPage = cluster.find((candidate) => candidate.locale === "en");

  if (!page.indexable || !csPage?.indexable || !enPage?.indexable) {
    return new Map<string, string>();
  }

  return new Map<string, string>([
    ["cs", absoluteUrl(buildPagePath(csPage))],
    ["en", absoluteUrl(buildPagePath(enPage))],
    ["x-default", absoluteUrl(buildPagePath(csPage))],
  ]);
}

function validateHreflangSet(
  route: string,
  actual: HreflangMap,
  expected: HreflangMap,
  canonicalRoutes: Set<string>,
  redirectSources: Set<string>,
) {
  for (const [language, expectedHref] of expected) {
    const actualHref = actual.get(language);
    if (actualHref !== expectedHref) {
      reportError(`${route} hreflang '${language}' is '${actualHref ?? "(missing)"}', expected '${expectedHref}'.`);
    }
  }

  for (const [language, href] of actual) {
    if (!expected.has(language)) {
      reportError(`${route} has unexpected hreflang '${language}' -> '${href}'.`);
    }

    try {
      const target = new URL(href);
      if (target.origin !== siteConfig.siteUrl) {
        reportError(`${route} hreflang '${language}' uses a non-canonical origin: '${href}'.`);
      }
      if (!canonicalRoutes.has(target.pathname)) {
        reportError(`${route} hreflang '${language}' targets a missing/non-canonical route: '${href}'.`);
      }
      if (redirectSources.has(target.pathname)) {
        reportError(`${route} hreflang '${language}' targets redirect source '${target.pathname}'.`);
      }
      if (target.pathname !== "/" && !target.pathname.endsWith("/")) {
        reportError(`${route} hreflang '${language}' target is missing a trailing slash: '${href}'.`);
      }
      if (target.search || target.hash) {
        reportError(`${route} hreflang '${language}' must not contain a query string or fragment: '${href}'.`);
      }
    } catch {
      reportError(`${route} hreflang '${language}' has an invalid URL: '${href}'.`);
    }
  }
}

function resolveInternalAnchor(
  sourceRoute: string,
  rawHref: string,
  canonicalRoutes: Set<string>,
  redirectSources: Set<string>,
) {
  const href = decodeHtmlEntities(rawHref.trim());
  if (!href) {
    reportError(`${sourceRoute} contains an anchor with an empty href.`);
    return null;
  }

  if (/^(mailto|tel):/i.test(href)) {
    return null;
  }

  let target: URL;
  try {
    target = new URL(href, `${siteConfig.siteUrl}${sourceRoute}`);
  } catch {
    reportError(`${sourceRoute} contains an invalid anchor href '${href}'.`);
    return null;
  }

  if (target.protocol !== "http:" && target.protocol !== "https:") {
    return null;
  }

  const isHalataoHost = target.hostname === siteConfig.domain || target.hostname === `www.${siteConfig.domain}`;
  if (!isHalataoHost) {
    return null;
  }

  const explicitNetworkUrl = /^(?:https?:)?\/\//i.test(href);
  if (explicitNetworkUrl && target.origin !== siteConfig.siteUrl) {
    reportError(`${sourceRoute} links to a non-canonical Halatao origin '${href}'.`);
  }
  if (href.startsWith("//")) {
    reportError(`${sourceRoute} uses a protocol-relative internal link '${href}'.`);
  }

  const targetPath = target.pathname;
  if (redirectSources.has(targetPath)) {
    reportError(`${sourceRoute} links to redirect source '${targetPath}' via '${href}'.`);
  }

  if (targetPath.endsWith(".html")) {
    reportError(`${sourceRoute} links to an HTML file variant instead of a canonical slash URL: '${href}'.`);
    return targetPath;
  }

  if (canonicalRoutes.has(targetPath)) {
    if (targetPath !== "/" && !targetPath.endsWith("/")) {
      reportError(`${sourceRoute} links to an HTML route without a trailing slash: '${href}'.`);
    }
    return targetPath;
  }

  if (targetPath !== "/" && canonicalRoutes.has(`${targetPath}/`)) {
    reportError(`${sourceRoute} links to '${href}' without the canonical trailing slash.`);
    return targetPath;
  }

  let decodedTargetPath = targetPath;
  try {
    decodedTargetPath = decodeURIComponent(targetPath);
  } catch {
    reportError(`${sourceRoute} contains an internal href with invalid percent-encoding: '${href}'.`);
  }

  const assetPath = path.resolve(outputDirectory, `.${decodedTargetPath}`);
  const isWithinOutput = assetPath === outputDirectory || assetPath.startsWith(`${outputDirectory}${path.sep}`);
  const isGeneratedFile = isWithinOutput && existsSync(assetPath) && statSync(assetPath).isFile();

  if (systemEndpoints.has(targetPath) || isGeneratedFile) {
    if (targetPath.endsWith("/")) {
      reportError(`${sourceRoute} links to a real file with an invalid trailing slash: '${href}'.`);
    }
    if (!isGeneratedFile) {
      reportError(`${sourceRoute} links to expected system/file endpoint '${targetPath}', but it is absent from out/.`);
    }
    return targetPath;
  }

  reportError(`${sourceRoute} links to missing or non-canonical internal target '${href}'.`);
  return targetPath;
}

function validateAnchors(
  route: string,
  html: string,
  canonicalRoutes: Set<string>,
  redirectSources: Set<string>,
) {
  const targets = new Set<string>();

  for (const tag of getTags(html, "a")) {
    const href = parseAttributes(tag).get("href");
    if (href === undefined) {
      reportError(`${route} contains an anchor without href.`);
      continue;
    }

    const target = resolveInternalAnchor(route, href, canonicalRoutes, redirectSources);
    if (target) {
      targets.add(target);
    }
  }

  return targets;
}

function validateRootFallback(
  canonicalRoutes: Set<string>,
  redirectSources: Set<string>,
) {
  const route = "/";
  const html = readOutputRoute(route);
  if (!html) {
    return;
  }

  validateCanonical(route, html, "/cs/");
  validateRobots(route, html, false);
  validateH1(route, html);

  const robotsTags = getTags(html, "meta")
    .map(parseAttributes)
    .filter((attributes) => attributes.get("name")?.toLowerCase() === "robots");
  if (robotsTags.length === 1) {
    const directives = new Set(
      (robotsTags[0].get("content") ?? "")
        .toLowerCase()
        .split(/[\s,]+/)
        .filter(Boolean),
    );
    if (!directives.has("follow") || directives.has("nofollow")) {
      reportError(`/ static fallback must render noindex,follow; found '${[...directives].join(", ")}'.`);
    }
  }

  const anchorTargets = validateAnchors(route, html, canonicalRoutes, redirectSources);
  for (const expectedTarget of ["/cs/", "/en/"]) {
    if (!anchorTargets.has(expectedTarget)) {
      reportError(`/ static fallback must contain a normal HTML link to '${expectedTarget}'.`);
    }
  }

  const refreshTags = getTags(html, "meta")
    .map(parseAttributes)
    .filter((attributes) => attributes.get("http-equiv")?.toLowerCase() === "refresh");
  if (refreshTags.length > 0) {
    reportError("/ static fallback must not use a meta-refresh redirect.");
  }

  const inlineForbiddenPatterns = [
    { label: "navigator language detection", pattern: /navigator\s*\.\s*languages?/i },
    { label: "Accept-Language detection", pattern: /accept-language/i },
    { label: "window/document.location redirect", pattern: explicitLocationRedirectPattern },
    { label: "router.replace redirect", pattern: /router\s*\.\s*replace/i },
  ];

  for (const forbidden of inlineForbiddenPatterns) {
    if (forbidden.pattern.test(html)) {
      reportError(`/ static fallback contains forbidden automatic ${forbidden.label}.`);
    }
  }

  for (const scriptTag of getTags(html, "script")) {
    const source = parseAttributes(scriptTag).get("src");
    if (!source?.startsWith("/")) {
      continue;
    }

    const scriptPath = path.resolve(outputDirectory, `.${source.split(/[?#]/, 1)[0]}`);
    if (!scriptPath.startsWith(`${outputDirectory}${path.sep}`) || !existsSync(scriptPath)) {
      continue;
    }

    const script = readFileSync(scriptPath, "utf8");
    if (/navigator\s*\.\s*languages?/i.test(script) || /accept-language/i.test(script)) {
      reportError(`/ static fallback loads '${source}' with automatic language detection.`);
    }

    const containsLocaleTargets = script.includes("/cs/") || script.includes("/en/");
    const containsClientRedirect =
      explicitLocationRedirectPattern.test(script) ||
      genericLocationRedirectPattern.test(script) ||
      (/useRouter/.test(script) && /\.replace\s*\(/.test(script));
    if (containsLocaleTargets && containsClientRedirect) {
      reportError(`/ static fallback loads '${source}' with a client-side locale redirect.`);
    }
  }
}

function parseSitemap(xml: string) {
  return [...xml.matchAll(/<loc\b[^>]*>([\s\S]*?)<\/loc\s*>/gi)].map((match) =>
    decodeHtmlEntities(match[1].trim()),
  );
}

function validateRobotsFile() {
  const robotsFile = path.join(outputDirectory, "robots.txt");
  if (!existsSync(robotsFile)) {
    reportError("Missing generated out/robots.txt.");
    return;
  }

  const robots = readFileSync(robotsFile, "utf8");
  const expectedSitemap = `Sitemap: ${siteConfig.siteUrl}/sitemap.xml`;
  if (!robots.includes(expectedSitemap)) {
    reportError(`robots.txt must contain '${expectedSitemap}'.`);
  }
  if (/^Host:\s*https?:\/\//im.test(robots)) {
    reportError("robots.txt Host directive must not contain a URL scheme.");
  }
}

function validateSitemap(expectedUrls: Set<string>) {
  const sitemapFile = path.join(outputDirectory, "sitemap.xml");
  if (!existsSync(sitemapFile)) {
    reportError("Missing generated out/sitemap.xml.");
    return new Set<string>();
  }

  const sitemapUrls = parseSitemap(readFileSync(sitemapFile, "utf8"));
  const actualUrls = new Set<string>();

  for (const url of sitemapUrls) {
    if (actualUrls.has(url)) {
      reportError(`Sitemap contains duplicate URL '${url}'.`);
    }
    actualUrls.add(url);

    try {
      const parsed = new URL(url);
      if (parsed.origin !== siteConfig.siteUrl) {
        reportError(`Sitemap URL uses a non-canonical origin: '${url}'.`);
      }
      if (parsed.pathname !== "/" && !parsed.pathname.endsWith("/")) {
        reportError(`Sitemap HTML URL is missing a trailing slash: '${url}'.`);
      }
      if (parsed.search || parsed.hash) {
        reportError(`Sitemap URL must not contain a query string or fragment: '${url}'.`);
      }
    } catch {
      reportError(`Sitemap contains invalid URL '${url}'.`);
    }
  }

  for (const expected of expectedUrls) {
    if (!actualUrls.has(expected)) {
      reportError(`Sitemap is missing expected canonical URL '${expected}'.`);
    }
  }
  for (const actual of actualUrls) {
    if (!expectedUrls.has(actual)) {
      reportError(`Sitemap contains unexpected, redirected, removed, or non-indexable URL '${actual}'.`);
    }
  }

  return actualUrls;
}

function validateHreflangReciprocity(
  pages: ContentPage[],
  actualByRoute: Map<string, HreflangMap>,
) {
  const routeByAbsoluteUrl = new Map(pages.map((page) => [absoluteUrl(buildPagePath(page)), buildPagePath(page)]));

  for (const page of pages) {
    const route = buildPagePath(page);
    const actual = actualByRoute.get(route);
    if (!actual) {
      continue;
    }

    for (const language of ["cs", "en"] as const) {
      const alternateUrl = actual.get(language);
      if (!alternateUrl) {
        continue;
      }

      const alternateRoute = routeByAbsoluteUrl.get(alternateUrl);
      const reciprocal = alternateRoute ? actualByRoute.get(alternateRoute)?.get(page.locale) : undefined;
      if (reciprocal !== absoluteUrl(route)) {
        reportError(
          `${route} hreflang '${language}' is not reciprocal; '${alternateRoute ?? alternateUrl}' links back to '${reciprocal ?? "(missing)"}'.`,
        );
      }
    }
  }
}

function validateGraphReachability(
  pages: ContentPage[],
  graph: Map<string, Set<string>>,
) {
  const pageByRoute = new Map(pages.map((page) => [buildPagePath(page), page]));

  for (const locale of ["cs", "en"] as const) {
    const root = `/${locale}/`;
    const localePages = pages.filter((page) => page.locale === locale && page.indexable);
    const localeRoutes = new Set(localePages.map(buildPagePath));
    const distances = new Map<string, number>([[root, 0]]);
    const queue = [root];

    while (queue.length > 0) {
      const current = queue.shift();
      if (!current) {
        continue;
      }
      const nextDistance = (distances.get(current) ?? 0) + 1;

      for (const target of graph.get(current) ?? []) {
        if (!localeRoutes.has(target) || distances.has(target)) {
          continue;
        }
        distances.set(target, nextDistance);
        queue.push(target);
      }
    }

    const inbound = new Map<string, number>();
    for (const [source, targets] of graph) {
      if (!localeRoutes.has(source)) {
        continue;
      }
      for (const target of targets) {
        if (target !== source && localeRoutes.has(target)) {
          inbound.set(target, (inbound.get(target) ?? 0) + 1);
        }
      }
    }

    for (const page of localePages) {
      const route = buildPagePath(page);
      if (route === root) {
        continue;
      }

      const inboundCount = inbound.get(route) ?? 0;
      if (inboundCount === 0) {
        reportError(`${route} is orphaned in rendered HTML (zero same-locale inbound links).`);
      }

      const distance = distances.get(route);
      if (distance === undefined) {
        reportError(`${route} is not reachable from ${root} through rendered same-locale internal links.`);
      } else if (distance > 3) {
        reportError(`${route} is ${distance} internal steps from ${root}; expected at most 3.`);
      }
    }

    if (!pageByRoute.has(root)) {
      reportError(`Missing locale homepage in registry: ${root}.`);
    }
  }
}

if (!existsSync(outputDirectory)) {
  console.error("SEO output validation failed: out/ does not exist. Run the static build first.");
  process.exit(1);
}

const pages = getAllPages();
const pageByRoute = new Map(pages.map((page) => [buildPagePath(page), page]));
const pagesByTranslationKey = new Map<string, ContentPage[]>();
for (const page of pages) {
  const cluster = pagesByTranslationKey.get(page.translationKey) ?? [];
  cluster.push(page);
  pagesByTranslationKey.set(page.translationKey, cluster);
}

const redirectSources = new Set(expandSeoRedirectRules().map((rule) => rule.source));
const contentRoutes = new Set(pageByRoute.keys());
const canonicalRoutes = new Set<string>([...contentRoutes, ...legalRoutes]);
const expectedSitemapUrls = new Set([
  ...pages.filter((page) => page.indexable).map((page) => absoluteUrl(buildPagePath(page))),
  ...legalRoutes.map(absoluteUrl),
]);
const sitemapUrls = validateSitemap(expectedSitemapUrls);
validateRobotsFile();
validateClientRedirectGuard();

validateRootFallback(canonicalRoutes, redirectSources);

const actualHreflangsByRoute = new Map<string, HreflangMap>();
const graph = new Map<string, Set<string>>();

for (const page of pages) {
  const route = buildPagePath(page);
  const html = readOutputRoute(route);
  if (!html) {
    continue;
  }

  validateCanonical(route, html);
  validateRobots(route, html, page.indexable);
  validateHtmlLanguage(route, html, page.locale);
  validateH1(route, html, page.hero.title);
  validateMainLandmark(route, html);
  validateJsonLdSyntax(route, html);
  validateP2ContentArtifacts(page, route, html);

  const actualHreflangs = readHreflangMap(route, html);
  const expectedAlternates = expectedHreflangs(page, pagesByTranslationKey);
  validateHreflangSet(route, actualHreflangs, expectedAlternates, canonicalRoutes, redirectSources);
  actualHreflangsByRoute.set(route, actualHreflangs);

  graph.set(route, validateAnchors(route, html, canonicalRoutes, redirectSources));
}

for (const route of legalRoutes) {
  const html = readOutputRoute(route);
  if (!html) {
    continue;
  }

  validateCanonical(route, html);
  validateRobots(route, html, true);
  validateH1(route, html);
  validateJsonLdSyntax(route, html);
  validateAnchors(route, html, canonicalRoutes, redirectSources);
}

for (const route of requiredLocationRoutes) {
  const page = pageByRoute.get(route);
  if (!page || !page.indexable) {
    reportError(`Required indexable location route is missing from the registry: ${route}.`);
  }
  if (!existsSync(routeOutputFile(route))) {
    reportError(`Required location route is missing from static output: ${route}.`);
  }
}

for (const route of removedLoserRoutes) {
  if (pageByRoute.has(route)) {
    reportError(`Removed loser route is still present in the content registry: ${route}.`);
  }
  if (existsSync(routeOutputDirectory(route))) {
    reportError(`Removed loser route still has generated output: ${route}.`);
  }
  if (sitemapUrls.has(absoluteUrl(route))) {
    reportError(`Removed loser route is still present in sitemap.xml: ${route}.`);
  }
  if (!redirectSources.has(route)) {
    reportError(`Removed loser route is missing from the redirect manifest: ${route}.`);
  }
}

validateHreflangReciprocity(pages, actualHreflangsByRoute);
validateGraphReachability(pages, graph);

if (errors.length > 0) {
  console.error(`SEO output validation failed with ${errors.length} error(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Validated SEO output for ${pages.length} content routes, ${legalRoutes.length} legal routes, ${expectedSitemapUrls.size} sitemap URLs, and ${redirectSources.size} redirect sources.`,
);
