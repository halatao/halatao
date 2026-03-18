// Safe to edit manually: repo-native optimization model for manual GSC-driven iteration.

import type { Locale, PageType, SearchIntent } from "@/content/types";

export type ClusterGroup =
  | "service_intent"
  | "problem_intent"
  | "comparison_intent"
  | "guide_intent"
  | "use_case_intent"
  | "technology_intent";

export type QueryClusterId =
  | "custom_web_application_development"
  | "internal_tools_development"
  | "existing_app_takeover"
  | "automations_and_integrations"
  | "contract_development_support"
  | "slow_app"
  | "hard_to_maintain_app"
  | "app_takeover_problem"
  | "rescue_incomplete_project"
  | "senior_contract_capacity"
  | "client_portal_problem"
  | "custom_vs_saas"
  | "contractor_vs_agency"
  | "nextjs_vs_spa"
  | "rewrite_vs_incremental"
  | "internal_tool_vs_saas"
  | "estimate_project"
  | "scope_custom_development"
  | "assess_project_fit"
  | "take_over_app"
  | "plan_mvp"
  | "client_portal_use_case"
  | "internal_system_use_case"
  | "reporting_dashboard_use_case"
  | "workflow_app_use_case"
  | "b2b_portal_use_case"
  | "approval_system_use_case"
  | "nextjs_business_apps"
  | "typescript_large_projects"
  | "api_integrations"
  | "postgresql_internal_tools";

export type OptimizationPriority =
  | "HIGH_PRIORITY_MONEY"
  | "HIGH_PRIORITY_SUPPORT"
  | "MEDIUM_CLUSTER_EXPANSION"
  | "LOW_PRIORITY_EXPERIMENT"
  | "MERGE_OR_PRUNE";

export type TargetAction =
  | "REWRITE_EXISTING"
  | "EXPAND_EXISTING"
  | "CREATE_NEW_PAGE"
  | "MERGE_WITH_STRONGER_PAGE"
  | "MERGE_INTO_HUB"
  | "NOINDEX_REVIEW"
  | "KEEP_MONITORING";

export type CandidateType =
  | "rewrite"
  | "expand"
  | "new_page"
  | "consolidate";

export type ContentStatus =
  | "core"
  | "winner"
  | "needs_rewrite"
  | "needs_expansion"
  | "watchlist"
  | "consolidation_review"
  | "noindex_review";

export type ReviewReason =
  | "MANUAL_BASELINE"
  | "HIGH_IMPRESSIONS_LOW_CTR"
  | "RISING_IMPRESSIONS_NEEDS_BETTER_INTRO"
  | "RISING_CLICKS_LOW_CONVERSION"
  | "QUERY_INTENT_MISMATCH"
  | "QUERY_CLUSTER_EXPANDING"
  | "SUPPORTING_PAGE_THIN"
  | "OVERLAPPING_CONTENT"
  | "LOW_VALUE_BROAD_TRAFFIC"
  | "HUB_SUPPORT_GAP";

export type LocaleEmphasis =
  | "cs_primary"
  | "en_selective"
  | "both";

export interface ManualGscQueryRow {
  locale: Locale;
  query: string;
  pagePath?: string;
  impressions?: number;
  clicks?: number;
  ctr?: number;
  position?: number;
  exportedAt?: string;
  sourceSheet?: string;
  notes?: string;
}

export interface QueryClusterDefinition {
  id: QueryClusterId;
  label: string;
  clusterGroup: ClusterGroup;
  intent: SearchIntent;
  priority: OptimizationPriority;
  preferredPageType: PageType;
  preferredLocaleEmphasis: LocaleEmphasis;
  queryPatterns: string[];
  risingImpressionsLowClicksAction: string;
  risingClicksLowConversionsAction: string;
}

export interface ContentAuditNote {
  pagePath?: string;
  translationKey?: string;
  locale: Locale;
  contentStatus: ContentStatus;
  optimizationPriority: OptimizationPriority;
  lastReviewedAt?: string;
  reviewReason: ReviewReason;
  queryCluster?: QueryClusterId;
  expansionCandidate: boolean;
  pruneCandidate: boolean;
  targetAction: TargetAction;
  notes: string[];
}

export interface OpportunityScoreInput {
  kind: "existing_page" | "query_opportunity";
  locale: Locale;
  clusterId?: QueryClusterId;
  currentPageType?: PageType;
  businessIntentFit: number;
  positioningFit: number;
  conversionLikelihood: number;
  trafficUpside: number;
  contentGapSeverity: number;
  existingPageStrength: number;
  internalLinkSupportPotential: number;
  localePriority: number;
  newPageJustification: number;
}

export interface OpportunityScoreBreakdown {
  businessIntentFit: number;
  positioningFit: number;
  conversionLikelihood: number;
  trafficUpside: number;
  contentGapSeverity: number;
  existingPageStrength: number;
  internalLinkSupportPotential: number;
  localePriority: number;
  newPageJustification: number;
  total: number;
}

export interface ScoredOpportunity {
  score: OpportunityScoreBreakdown;
  priority: OptimizationPriority;
  recommendedAction: TargetAction;
}

export interface QueryClusterMatch {
  cluster: QueryClusterDefinition;
  confidence: number;
  matchedPatterns: string[];
}

export interface QueryToPageMapping {
  query: string;
  locale: Locale;
  cluster: QueryClusterDefinition | null;
  currentPagePath?: string;
  suggestedPagePath?: string;
  suggestedPageType?: PageType;
  confidence: number;
  targetAction: TargetAction;
  rationale: string[];
}

export interface IterationPhase {
  label: string;
  dayRange: string;
  primaryGoal: string;
  focusAreas: string[];
  actionRules: string[];
  guardrails: string[];
}

export interface ContentOpportunityCandidate {
  id: string;
  candidateType: CandidateType;
  locale: Locale | "both";
  clusterId: QueryClusterId;
  priority: OptimizationPriority;
  targetAction: TargetAction;
  currentPath?: string;
  proposedPath?: string;
  proposedPageType?: PageType;
  rationale: string;
  triggerSignals: string[];
  supportingLinks: string[];
}
