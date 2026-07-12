import { getAllPages } from "../src/content/registry";
import { buildPagePath } from "../src/lib/routing";

export const canonicalOrigin = "https://www.halatao.cz" as const;

export const originPolicy = {
  canonicalProtocol: "https:" as const,
  canonicalHost: "www.halatao.cz" as const,
  redirectOrigins: [
    "http://halatao.cz",
    "http://www.halatao.cz",
    "https://halatao.cz",
  ] as const,
  absoluteLocation: true as const,
  composeOriginAndPathRedirectInOneHop: true as const,
  normalizeOriginForFiles: true as const,
} as const;

export const pathPolicy = {
  canonicalizeOnlyKnownHtmlRoutes: true as const,
  htmlTrailingSlash: true as const,
  removeIndexHtml: true as const,
  realFileHandling: "never-add-trailing-slash" as const,
  systemFiles: [
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/apple-icon",
    "/icon.svg",
  ] as const,
  assetPrefixes: ["/_next/", "/og/", "/images/", "/fonts/", "/assets/", "/api/"] as const,
  assetExtensions: [
    "css",
    "js",
    "mjs",
    "map",
    "png",
    "jpg",
    "jpeg",
    "webp",
    "avif",
    "gif",
    "svg",
    "ico",
    "woff",
    "woff2",
    "ttf",
    "otf",
    "eot",
    "xml",
    "txt",
    "json",
    "pdf",
    "zip",
  ] as const,
} as const;

export type RedirectCategory = "legacy" | "canonicalization" | "content-merge";
export type RedirectStatus = 301 | 308;
export type RedirectQueryPolicy =
  | { query: "preserve" }
  | { query: "drop"; queryReason: string };

type RedirectRuleBase = {
  category: RedirectCategory;
  reason: string;
  status: RedirectStatus;
  allowNonIndexableTarget?: boolean;
  nonIndexableTargetReason?: string;
} & RedirectQueryPolicy;

export type ExactSeoRedirectRule = RedirectRuleBase & {
  kind: "exact";
  source: `/${string}`;
  target: `/${string}`;
};

/**
 * A constrained prefix rule. Only explicitly enumerated suffixes match, so a
 * provider integration cannot turn an unknown legacy path into an unknown
 * canonical target. `expandSeoRedirectRules` converts it to exact rules.
 */
export type PrefixSeoRedirectRule = RedirectRuleBase & {
  kind: "prefix";
  sourcePrefix: `/${string}/`;
  targetPrefix: `/${string}/`;
  allowedSuffixes: readonly string[];
};

export type SeoRedirectRule = ExactSeoRedirectRule | PrefixSeoRedirectRule;

export type SeoRedirectManifest = {
  version: 1;
  canonicalOrigin: typeof canonicalOrigin;
  originPolicy: typeof originPolicy;
  pathPolicy: typeof pathPolicy;
  htmlTrailingSlash: true;
  defaultStatus: 308;
  defaultQueryPolicy: "preserve";
  rules: readonly SeoRedirectRule[];
};

export type ExpandedSeoRedirectRule = Omit<ExactSeoRedirectRule, "kind"> & {
  kind: "exact";
  expandedFromPrefix: boolean;
};

export const nonRegistryHtmlRoutes = [
  {
    path: "/privacy-policy/",
    indexable: true,
    sourceFile: "src/app/(legal)/privacy-policy/page.tsx",
  },
  {
    path: "/data-deletion/",
    indexable: true,
    sourceFile: "src/app/(legal)/data-deletion/page.tsx",
  },
] as const;

type ExactRuleOptions = {
  status?: RedirectStatus;
  allowNonIndexableTarget?: boolean;
  nonIndexableTargetReason?: string;
  query?: RedirectQueryPolicy["query"];
  queryReason?: string;
};

function exactRedirect(
  source: `/${string}`,
  target: `/${string}`,
  category: RedirectCategory,
  reason: string,
  options: ExactRuleOptions = {},
): ExactSeoRedirectRule {
  const queryPolicy: RedirectQueryPolicy =
    options.query === "drop"
      ? {
          query: "drop",
          queryReason: options.queryReason ?? "",
        }
      : { query: "preserve" };

  return {
    kind: "exact",
    source,
    target,
    category,
    reason,
    status: options.status ?? 308,
    ...queryPolicy,
    ...(options.allowNonIndexableTarget
      ? {
          allowNonIndexableTarget: true,
          nonIndexableTargetReason: options.nonIndexableTargetReason,
        }
      : {}),
  };
}

function canonicalAliases(path: `/${string}/`) {
  return [
    path.slice(0, -1) as `/${string}`,
    `${path}index.html` as `/${string}`,
  ] as const;
}

function htmlPathVariants(path: `/${string}/`) {
  return [
    path.slice(0, -1) as `/${string}`,
    path,
    `${path}index.html` as `/${string}`,
  ] as const;
}

const nonIndexableTargetReasons = new Map<string, string>([
  [
    "/cs/popsat-projekt/dekuji/",
    "Canonical path normalization and the historical automation thank-you URL must still reach the intentional noindex thank-you page.",
  ],
  [
    "/en/discuss-your-project/thank-you/",
    "Canonical path normalization must still reach the intentional noindex English thank-you page.",
  ],
]);

function targetOptions(target: string, indexable: boolean): ExactRuleOptions {
  if (indexable) {
    return {};
  }

  const reason = nonIndexableTargetReasons.get(target);
  if (!reason) {
    throw new Error(`Missing redirect justification for non-indexable target '${target}'.`);
  }

  return {
    allowNonIndexableTarget: true,
    nonIndexableTargetReason: reason,
  };
}

const rootRules: ExactSeoRedirectRule[] = [
  exactRedirect(
    "/",
    "/cs/",
    "canonicalization",
    "Use the Czech homepage as the single default homepage; the static root remains only a noindex fallback until edge activation.",
  ),
  exactRedirect(
    "/index.html",
    "/cs/",
    "canonicalization",
    "Remove the root index filename and resolve directly to the default Czech homepage in one hop.",
  ),
];

const activePages = getAllPages()
  .map((page) => ({
    locale: page.locale,
    path: buildPagePath(page) as `/${string}/`,
    indexable: page.indexable,
  }))
  .sort((left, right) => left.path.localeCompare(right.path));

const activeRouteCanonicalizationRules: ExactSeoRedirectRule[] = [
  ...activePages.flatMap((page) =>
    canonicalAliases(page.path).map((source) =>
      exactRedirect(
        source,
        page.path,
        "canonicalization",
        "Normalize an active HTML route to its trailing-slash canonical path.",
        targetOptions(page.path, page.indexable),
      ),
    ),
  ),
  ...nonRegistryHtmlRoutes.flatMap((route) =>
    canonicalAliases(route.path).map((source) =>
      exactRedirect(
        source,
        route.path,
        "canonicalization",
        "Normalize an active non-registry HTML route to its trailing-slash canonical path.",
      ),
    ),
  ),
];

const legacyCzRules: ExactSeoRedirectRule[] = activePages
  .filter((page) => page.locale === "cs")
  .flatMap((page) => {
    const suffix = page.path.slice("/cs/".length);
    const legacyPath = (suffix ? `/cz/${suffix}` : "/cz/") as `/${string}/`;

    return htmlPathVariants(legacyPath).map((source) =>
      exactRedirect(
        source,
        page.path,
        "legacy",
        "Map an explicitly inventoried legacy Czech locale route directly to its active /cs/ counterpart.",
        targetOptions(page.path, page.indexable),
      ),
    );
  });

type HistoricalHtmlRoute = {
  source: `/${string}/`;
  target: `/${string}/`;
  category: RedirectCategory;
  reason: string;
};

const historicalHtmlRoutes: readonly HistoricalHtmlRoute[] = [
  {
    source: "/cs/lokace/",
    target: "/cs/lokality/",
    category: "legacy",
    reason: "Replace the former Czech location taxonomy name with the canonical location hub.",
  },
  ...["praha", "brno", "ostrava"].map((slug) => ({
    source: `/cs/lokace/${slug}/` as `/${string}/`,
    target: `/cs/lokality/${slug}/` as `/${string}/`,
    category: "legacy" as const,
    reason: "Replace a known former Czech location route with its existing canonical city page.",
  })),
  {
    source: "/automatizace/",
    target: "/cs/sluzby/automatizace-a-integrace/",
    category: "legacy",
    reason: "Move the former standalone automation landing page to the canonical Czech service page.",
  },
  {
    source: "/en/templates/internal-tool-scope-worksheet-2/",
    target: "/en/templates/internal-tool-scope-worksheet/",
    category: "legacy",
    reason: "Resolve a reported GSC duplicate-suffix 404 to the existing template.",
  },
  {
    source: "/cs/pruvodce/jak-nacenit-prevzeti-aplikace-2/",
    target: "/cs/pruvodce/jak-nacenit-prevzeti-aplikace/",
    category: "legacy",
    reason: "Resolve a reported GSC duplicate-suffix 404 to the existing guide.",
  },
  {
    source: "/cs/technologie-1/",
    target: "/cs/technologie/",
    category: "legacy",
    reason: "Resolve a reported GSC duplicate-suffix 404 to the existing technology hub.",
  },
  {
    source: "/en/services-1/",
    target: "/en/services/",
    category: "legacy",
    reason: "Resolve a reported GSC duplicate-suffix 404 to the existing services hub.",
  },
  {
    source: "/en/templates/release-process-stabilization-checklist-2/",
    target: "/en/templates/release-process-stabilization-checklist/",
    category: "legacy",
    reason: "Resolve a reported GSC duplicate-suffix 404 to the existing template.",
  },
  {
    source: "/cs/problemy/potrebujeme-klientsky-portal-2/",
    target: "/cs/problemy/potrebujeme-klientsky-portal/",
    category: "legacy",
    reason: "Resolve a reported GSC duplicate-suffix 404 to the existing problem page.",
  },
  {
    source: "/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat-2/",
    target: "/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat/",
    category: "legacy",
    reason: "Resolve a reported GSC duplicate-suffix 404 to the existing guide.",
  },
  {
    source: "/cs/priklady/workflow-poptavka-nabidka-realizace/",
    target: "/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/",
    category: "content-merge",
    reason: "Consolidate the duplicate Czech request-offer-delivery use case into the intent owner.",
  },
  {
    source: "/en/use-cases/request-offer-delivery-workflow/",
    target: "/en/use-cases/system-for-requests-offers-and-delivery/",
    category: "content-merge",
    reason: "Consolidate the duplicate English request-offer-delivery use case into the intent owner.",
  },
  {
    source: "/cs/problemy/poptavky-nabidky-a-realizace-v-tabulkach-a-emailu/",
    target: "/cs/problemy/poptavky-nabidky-a-realizace-v-excelu-a-emailu/",
    category: "content-merge",
    reason: "Consolidate the duplicate Czech spreadsheets-and-email problem page into the pain-intent owner.",
  },
  {
    source: "/en/problems/requests-offers-and-delivery-in-spreadsheets/",
    target: "/en/problems/requests-offers-and-delivery-in-spreadsheets-and-email/",
    category: "content-merge",
    reason: "Consolidate the duplicate English spreadsheets problem page into the pain-intent owner.",
  },
  {
    source: "/cs/sluzby/system-pro-rizeni-poptavek-nabidek-a-realizace/",
    target: "/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/",
    category: "content-merge",
    reason: "Consolidate the duplicate Czech request-offer-delivery service into the transactional intent owner.",
  },
  {
    source: "/en/services/request-offer-delivery-system/",
    target: "/en/services/sales-offers-and-job-tracking-system/",
    category: "content-merge",
    reason: "Consolidate the duplicate English request-offer-delivery service into the transactional intent owner.",
  },
];

const historicalHtmlRules = historicalHtmlRoutes.flatMap((route) =>
  htmlPathVariants(route.source).map((source) =>
    exactRedirect(source, route.target, route.category, route.reason),
  ),
);

const fileLikeLegacyRules: ExactSeoRedirectRule[] = [
  exactRedirect(
    "/automatizace/dekuji.html",
    "/cs/popsat-projekt/dekuji/",
    "legacy",
    "Move the historical automation form completion URL to the intentional noindex thank-you page.",
    targetOptions("/cs/popsat-projekt/dekuji/", false),
  ),
];

export const seoRedirectManifest: SeoRedirectManifest = {
  version: 1,
  canonicalOrigin,
  originPolicy,
  pathPolicy,
  htmlTrailingSlash: true,
  defaultStatus: 308,
  defaultQueryPolicy: "preserve",
  rules: [
    ...rootRules,
    ...activeRouteCanonicalizationRules,
    ...legacyCzRules,
    ...historicalHtmlRules,
    ...fileLikeLegacyRules,
  ],
};

export function expandSeoRedirectRules(
  manifest: SeoRedirectManifest = seoRedirectManifest,
): readonly ExpandedSeoRedirectRule[] {
  return manifest.rules.flatMap((rule): ExpandedSeoRedirectRule[] => {
    if (rule.kind === "exact") {
      return [{ ...rule, expandedFromPrefix: false }];
    }

    return rule.allowedSuffixes.map((suffix) => ({
      kind: "exact" as const,
      source: `${rule.sourcePrefix}${suffix}` as `/${string}`,
      target: `${rule.targetPrefix}${suffix}` as `/${string}`,
      category: rule.category,
      reason: rule.reason,
      status: rule.status,
      query: rule.query,
      ...(rule.query === "drop" ? { queryReason: rule.queryReason } : {}),
      ...(rule.allowNonIndexableTarget
        ? {
            allowNonIndexableTarget: true,
            nonIndexableTargetReason: rule.nonIndexableTargetReason,
          }
        : {}),
      expandedFromPrefix: true,
    }));
  });
}
