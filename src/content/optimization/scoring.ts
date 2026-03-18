// Safe to edit manually: scoring helpers for manual GSC-driven content iteration.

import type {
  ManualGscQueryRow,
  OpportunityScoreBreakdown,
  OpportunityScoreInput,
  OptimizationPriority,
  ScoredOpportunity,
  TargetAction,
} from "@/content/optimization/types";
import type { Locale } from "@/content/types";

const SCORE_WEIGHTS = {
  businessIntentFit: 14,
  positioningFit: 10,
  conversionLikelihood: 16,
  trafficUpside: 12,
  contentGapSeverity: 12,
  existingPageStrength: 10,
  internalLinkSupportPotential: 8,
  localePriority: 8,
  newPageJustification: 10,
} as const;

const LOW_CTR_THRESHOLD = 0.025;
const STRONG_IMPRESSIONS_THRESHOLD = 80;
const RISING_QUERY_THRESHOLD = 40;
const GOOD_CLICK_SIGNAL = 12;

function clampFive(value: number) {
  return Math.max(0, Math.min(5, value));
}

function weighted(value: number, weight: number) {
  return Math.round((clampFive(value) / 5) * weight * 10) / 10;
}

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s/-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function tokenizeSearchText(value: string) {
  return normalizeSearchText(value)
    .split(" ")
    .map((token) => token.trim())
    .filter(Boolean);
}

export function getLocalePriorityScore(locale: Locale) {
  return locale === "cs" ? 5 : 3;
}

export function evaluateManualSignal(row: ManualGscQueryRow) {
  const impressions = row.impressions ?? 0;
  const clicks = row.clicks ?? 0;
  const ctr = row.ctr ?? 0;
  const position = row.position ?? 0;

  const ctrProblem =
    impressions >= STRONG_IMPRESSIONS_THRESHOLD &&
    ctr > 0 &&
    ctr < LOW_CTR_THRESHOLD;

  const risingQuery =
    impressions >= RISING_QUERY_THRESHOLD &&
    clicks < GOOD_CLICK_SIGNAL;

  const conversionRisk =
    clicks >= GOOD_CLICK_SIGNAL &&
    position > 0 &&
    position <= 15;

  const trafficUpside =
    impressions >= 500 ? 5 :
    impressions >= 250 ? 4 :
    impressions >= 100 ? 3 :
    impressions >= 40 ? 2 :
    impressions > 0 ? 1 : 0;

  return {
    ctrProblem,
    risingQuery,
    conversionRisk,
    trafficUpside,
    impressions,
    clicks,
    ctr,
    position,
  };
}

export function buildOpportunityScore(input: OpportunityScoreInput): OpportunityScoreBreakdown {
  const breakdown = {
    businessIntentFit: weighted(input.businessIntentFit, SCORE_WEIGHTS.businessIntentFit),
    positioningFit: weighted(input.positioningFit, SCORE_WEIGHTS.positioningFit),
    conversionLikelihood: weighted(input.conversionLikelihood, SCORE_WEIGHTS.conversionLikelihood),
    trafficUpside: weighted(input.trafficUpside, SCORE_WEIGHTS.trafficUpside),
    contentGapSeverity: weighted(input.contentGapSeverity, SCORE_WEIGHTS.contentGapSeverity),
    existingPageStrength: weighted(input.existingPageStrength, SCORE_WEIGHTS.existingPageStrength),
    internalLinkSupportPotential: weighted(
      input.internalLinkSupportPotential,
      SCORE_WEIGHTS.internalLinkSupportPotential,
    ),
    localePriority: weighted(input.localePriority, SCORE_WEIGHTS.localePriority),
    newPageJustification: weighted(input.newPageJustification, SCORE_WEIGHTS.newPageJustification),
    total: 0,
  } satisfies OpportunityScoreBreakdown;

  breakdown.total = Math.round(
    (
      breakdown.businessIntentFit +
      breakdown.positioningFit +
      breakdown.conversionLikelihood +
      breakdown.trafficUpside +
      breakdown.contentGapSeverity +
      breakdown.existingPageStrength +
      breakdown.internalLinkSupportPotential +
      breakdown.localePriority +
      breakdown.newPageJustification
    ) * 10,
  ) / 10;

  return breakdown;
}

export function getPriorityFromScore(
  total: number,
  businessIntentFit: number,
  conversionLikelihood: number,
  recommendedAction?: TargetAction,
): OptimizationPriority {
  if (recommendedAction === "MERGE_WITH_STRONGER_PAGE" || recommendedAction === "MERGE_INTO_HUB" || recommendedAction === "NOINDEX_REVIEW") {
    return "MERGE_OR_PRUNE";
  }

  if (total >= 80 && businessIntentFit >= 4 && conversionLikelihood >= 4) {
    return "HIGH_PRIORITY_MONEY";
  }

  if (total >= 68) {
    return "HIGH_PRIORITY_SUPPORT";
  }

  if (total >= 52) {
    return "MEDIUM_CLUSTER_EXPANSION";
  }

  return "LOW_PRIORITY_EXPERIMENT";
}

export function getRecommendedAction(input: OpportunityScoreInput): TargetAction {
  if (
    input.businessIntentFit <= 2 &&
    input.positioningFit <= 2 &&
    input.trafficUpside <= 2 &&
    input.existingPageStrength <= 2
  ) {
    return "NOINDEX_REVIEW";
  }

  if (
    input.newPageJustification >= 4 &&
    input.contentGapSeverity >= 4 &&
    input.existingPageStrength <= 3
  ) {
    return "CREATE_NEW_PAGE";
  }

  if (
    input.existingPageStrength >= 4 &&
    input.contentGapSeverity >= 4
  ) {
    return "EXPAND_EXISTING";
  }

  if (
    input.existingPageStrength >= 3 &&
    input.businessIntentFit >= 4 &&
    input.trafficUpside >= 3
  ) {
    return "REWRITE_EXISTING";
  }

  if (input.businessIntentFit <= 2 && input.positioningFit <= 2) {
    return "MERGE_WITH_STRONGER_PAGE";
  }

  return "KEEP_MONITORING";
}

export function scoreOpportunity(input: OpportunityScoreInput): ScoredOpportunity {
  const recommendedAction = getRecommendedAction(input);
  const score = buildOpportunityScore(input);
  const priority = getPriorityFromScore(
    score.total,
    input.businessIntentFit,
    input.conversionLikelihood,
    recommendedAction,
  );

  return {
    score,
    priority,
    recommendedAction,
  };
}

export function scoreManualQueryRow(
  row: ManualGscQueryRow,
  input: Omit<OpportunityScoreInput, "kind" | "locale" | "localePriority" | "trafficUpside">,
): ScoredOpportunity {
  const signal = evaluateManualSignal(row);

  return scoreOpportunity({
    ...input,
    kind: "query_opportunity",
    locale: row.locale,
    localePriority: getLocalePriorityScore(row.locale),
    trafficUpside: signal.trafficUpside,
  });
}

export function summarizeSignalForNotes(row: ManualGscQueryRow) {
  const signal = evaluateManualSignal(row);
  const notes: string[] = [];

  if (signal.ctrProblem) {
    notes.push("High impressions with weak CTR: start with title/meta/H1 and answer-first intro.");
  }

  if (signal.risingQuery) {
    notes.push("Relevant impressions are rising: strengthen FAQ, subheads, and internal links before creating a new page.");
  }

  if (signal.conversionRisk) {
    notes.push("Clicks are already coming in: review CTA clarity, fit / not-fit framing, and commercial linking.");
  }

  if (notes.length === 0) {
    notes.push("Keep monitoring until the query gathers clearer manual signal from GSC.");
  }

  return notes;
}
