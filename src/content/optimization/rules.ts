// Safe to edit manually: practical iteration rules and query-to-page mapping helpers.

import { getAllPages } from "@/content/registry";
import { normalizeSearchText, tokenizeSearchText, evaluateManualSignal } from "@/content/optimization/scoring";
import { QUERY_CLUSTERS } from "@/content/optimization/opportunities";
import type {
  IterationPhase,
  LocaleEmphasis,
  ManualGscQueryRow,
  QueryClusterDefinition,
  QueryClusterMatch,
  QueryToPageMapping,
  TargetAction,
} from "@/content/optimization/types";
import type { ContentPage, Locale, PageType } from "@/content/types";
import { buildPagePath } from "@/lib/routing";

export const LOCALE_PRIORITY_RULES = {
  cs: {
    emphasis: "primary" as const,
    summary: "Czech is the main growth market. Expand broader use-case, problem, and guide coverage here first.",
    guardrails: [
      "Prefer Czech for most new problem/use-case/guide coverage.",
      "Allow broader business-process language if it still maps back to custom projects or contract delivery.",
      "Keep strong routing from Czech support pages into money pages and inquiry.",
    ],
  },
  en: {
    emphasis: "selective" as const,
    summary: "English stays narrower, more premium, and more explicitly tied to project/contract intent.",
    guardrails: [
      "Do not expand generic developer-blog or job-adjacent content in English.",
      "Create new English pages only when the query cluster clearly matches project delivery, takeover, internal tooling, or contract support.",
      "Prefer fewer stronger English pages over wide but shallow coverage.",
    ],
  },
};

export const NINETY_DAY_PHASES: IterationPhase[] = [
  {
    label: "Days 1-30",
    dayRange: "1-30",
    primaryGoal: "Tune existing money pages before creating more surface area.",
    focusAreas: [
      "homepage, primary services, top problems, top comparison, inquiry pages",
      "title/meta/H1 tuning",
      "answer-first intro and CTA sharpening",
      "FAQ additions based on real query language",
      "internal linking adjustments toward commercial pages",
    ],
    actionRules: [
      "Rewrite before you expand if the page already matches the cluster.",
      "Fix CTR and query-intent mismatch before creating new pages.",
      "Use supporting pages to feed service pages, not to compete with them.",
    ],
    guardrails: [
      "Do not create broad English pages in month one.",
      "Do not expand technology pages before money pages are reviewed.",
      "Do not chase generic dev traffic.",
    ],
  },
  {
    label: "Days 31-60",
    dayRange: "31-60",
    primaryGoal: "Expand winners and create the minimum viable new pages where clusters prove demand.",
    focusAreas: [
      "winners expansion",
      "supporting sections and query-cluster FAQs",
      "new problem, comparison, and guide pages with clear commercial fit",
      "pruning or holding weak pages that do not earn more scope",
    ],
    actionRules: [
      "Expand existing winners before creating adjacent variants.",
      "Create a new page only when the query cluster does not fit an existing strong page well enough.",
      "If two pages compete for the same cluster, keep one stronger commercial winner.",
    ],
    guardrails: [
      "English expansion must remain premium and selective.",
      "Do not add new pages without a clear internal-link home.",
      "Do not generate thin pages just because impressions exist.",
    ],
  },
  {
    label: "Days 61-90",
    dayRange: "61-90",
    primaryGoal: "Consolidate the cluster map and reinforce what is already winning.",
    focusAreas: [
      "content consolidation and overlap cleanup",
      "noindex/merge decisions",
      "hub strengthening",
      "utility asset expansion",
      "high-performing cluster reinforcement",
    ],
    actionRules: [
      "Merge or noindex weak overlapping pages instead of letting them drift.",
      "Strengthen hubs where several child pages already rank.",
      "Add templates/checklists only when they support a proven cluster.",
    ],
    guardrails: [
      "Do not keep broad low-conversion English pages live out of optimism.",
      "Do not noindex pages that still serve a clear commercial assist role.",
      "Use noindex only after checking overlap, links, and actual signal.",
    ],
  },
];

export const DECISION_RULES = {
  rewrite: "Use when the page already targets the right cluster, but CTR or query-to-page match is weak.",
  expand: "Use when the page is already close to the cluster and impressions/clicks suggest deeper supporting sections could win more terms.",
  create: "Use when the cluster is commercially relevant and cannot be served well by an existing page without blurring intent.",
  merge: "Use when two pages cover the same query family and one clearly offers the stronger commercial path.",
  noindex: "Use only when the page is low-value, overlapping, broad, and not assisting stronger commercial pages.",
  keep: "Use when the query signal is still too small or too mixed to justify a content change yet.",
};

function localeMatches(
  locale: Locale,
  emphasis: LocaleEmphasis,
) {
  return emphasis === "both" || (emphasis === "cs_primary" && locale === "cs") || (emphasis === "en_selective" && locale === "en");
}

function scoreClusterAgainstQuery(
  query: string,
  locale: Locale,
  cluster: QueryClusterDefinition,
) {
  if (!localeMatches(locale, cluster.preferredLocaleEmphasis)) {
    return { score: 0, matchedPatterns: [] as string[] };
  }

  const normalizedQuery = normalizeSearchText(query);
  const queryTokens = new Set(tokenizeSearchText(query));
  const matchedPatterns: string[] = [];
  let score = 0;

  for (const pattern of cluster.queryPatterns) {
    const normalizedPattern = normalizeSearchText(pattern);
    const patternTokens = tokenizeSearchText(pattern);

    if (normalizedQuery.includes(normalizedPattern)) {
      score += 4;
      matchedPatterns.push(pattern);
      continue;
    }

    const overlap = patternTokens.filter((token) => queryTokens.has(token)).length;
    if (overlap >= Math.max(2, Math.ceil(patternTokens.length / 2))) {
      score += overlap;
      matchedPatterns.push(pattern);
    }
  }

  return { score, matchedPatterns };
}

export function resolveQueryCluster(
  query: string,
  locale: Locale,
): QueryClusterMatch | null {
  let bestMatch: QueryClusterMatch | null = null;

  for (const cluster of QUERY_CLUSTERS) {
    const { score, matchedPatterns } = scoreClusterAgainstQuery(query, locale, cluster);

    if (score === 0) {
      continue;
    }

    const confidence = Math.min(1, score / 8);
    if (!bestMatch || confidence > bestMatch.confidence) {
      bestMatch = {
        cluster,
        confidence,
        matchedPatterns,
      };
    }
  }

  return bestMatch;
}

function scorePageForCluster(
  page: ContentPage,
  query: string,
  cluster: QueryClusterDefinition,
) {
  const pageText = normalizeSearchText(
    [page.title, page.h1, page.description, page.primaryQuery, ...page.segments].join(" "),
  );
  const queryTokens = tokenizeSearchText(query);
  const overlap = queryTokens.filter((token) => pageText.includes(token)).length;
  const pageTypeBonus = page.pageType === cluster.preferredPageType ? 3 : page.pageType === "hub" ? 1 : 0;

  return overlap + pageTypeBonus;
}

function inferTargetAction(
  row: ManualGscQueryRow,
  clusterMatch: QueryClusterMatch | null,
  currentPage: ContentPage | undefined,
  suggestedPage: ContentPage | undefined,
): TargetAction {
  const signal = evaluateManualSignal(row);

  if (!clusterMatch) {
    return "KEEP_MONITORING";
  }

  if (!suggestedPage) {
    return clusterMatch.cluster.priority === "HIGH_PRIORITY_MONEY" || clusterMatch.cluster.priority === "HIGH_PRIORITY_SUPPORT"
      ? "CREATE_NEW_PAGE"
      : "KEEP_MONITORING";
  }

  if (currentPage && suggestedPage.id === currentPage.id) {
    if (signal.ctrProblem) {
      return "REWRITE_EXISTING";
    }

    if (signal.risingQuery || signal.conversionRisk) {
      return "EXPAND_EXISTING";
    }

    return "KEEP_MONITORING";
  }

  if (currentPage && suggestedPage.id !== currentPage.id) {
    return "MERGE_WITH_STRONGER_PAGE";
  }

  return "EXPAND_EXISTING";
}

export function mapQueryToPage(row: ManualGscQueryRow): QueryToPageMapping {
  const clusterMatch = resolveQueryCluster(row.query, row.locale);
  const allPages = getAllPages().filter((page) => page.locale === row.locale && page.indexable);
  const currentPage = row.pagePath
    ? allPages.find((page) => buildPagePath(page) === row.pagePath)
    : undefined;

  let suggestedPage: ContentPage | undefined;
  let confidence = 0;

  if (clusterMatch) {
    const ranked = allPages
      .map((page) => ({
        page,
        score: scorePageForCluster(page, row.query, clusterMatch.cluster),
      }))
      .sort((left, right) => right.score - left.score);

    if (ranked[0] && ranked[0].score >= 3) {
      suggestedPage = ranked[0].page;
      confidence = Math.min(1, ranked[0].score / 8);
    } else {
      confidence = clusterMatch.confidence;
    }
  }

  const targetAction = inferTargetAction(row, clusterMatch, currentPage, suggestedPage);
  const rationale: string[] = [];

  if (!clusterMatch) {
    rationale.push("No strong cluster match yet. Keep monitoring until the query family becomes clearer.");
  } else {
    rationale.push(`Matched cluster: ${clusterMatch.cluster.label}.`);
    rationale.push(`Preferred page type: ${clusterMatch.cluster.preferredPageType}.`);
  }

  if (currentPage) {
    rationale.push(`Current page: ${currentPage.h1}.`);
  }

  if (suggestedPage) {
    rationale.push(`Best existing page match: ${suggestedPage.h1}.`);
  } else if (clusterMatch) {
    rationale.push("No existing page is a strong enough fit, so a new page may be justified if the signal continues.");
  }

  if (targetAction === "REWRITE_EXISTING") {
    rationale.push("Use the current page and improve CTR/query match first.");
  } else if (targetAction === "EXPAND_EXISTING") {
    rationale.push("Existing page fit is acceptable; add sections, FAQ, and linking before creating another page.");
  } else if (targetAction === "CREATE_NEW_PAGE") {
    rationale.push("Cluster fit is commercially relevant but the current page map is still too weak or too broad.");
  } else if (targetAction === "MERGE_WITH_STRONGER_PAGE") {
    rationale.push("Another existing page is a cleaner fit; avoid creating overlap.");
  }

  return {
    query: row.query,
    locale: row.locale,
    cluster: clusterMatch?.cluster ?? null,
    currentPagePath: row.pagePath,
    suggestedPagePath: suggestedPage ? buildPagePath(suggestedPage) : undefined,
    suggestedPageType: clusterMatch?.cluster.preferredPageType,
    confidence,
    targetAction,
    rationale,
  };
}
