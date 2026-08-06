export const editorialHubKeys = new Set([
  "hub-services",
  "hub-problems",
  "hub-comparisons",
  "hub-use-cases",
  "hub-case-studies",
  "hub-guides",
  "hub-technology",
  "hub-templates",
]);

export const advancedGuideKeys = new Set([
  "guide-how-to-run-app-takeover-audit",
  "guide-how-to-decide-app-needs-rewrite",
  "guide-how-to-run-automation-discovery",
  "guide-how-to-estimate-a-custom-web-app",
  "guide-how-to-plan-an-mvp-web-application",
  "guide-how-to-stabilize-a-slow-business-app",
]);

export const audienceCopyKeys = new Set([
  "problem-ai-in-business-process",
  "problem-rescue-incomplete-project",
  "guide-how-to-price-an-app-takeover",
  "guide-when-ai-integration-makes-sense",
  "guide-when-internal-tool-better-than-saas",
  "guide-when-process-automation-pays-off",
  "service-ai-automation-and-integrations",
]);

export const internalEditorialCopyPatterns = [
  /\bbuyer[a-z]*\b/i,
  /\bchild pages?\b/i,
  /\bservice pages?\b/i,
  /\bcomparison pages?\b/i,
  /\bproblem pages?\b/i,
  /\bguide pages?\b/i,
  /\btool pages?\b/i,
  /\binquiry\b/i,
  /\bfake proof layer\b/i,
];

export const buyerTerminologyPattern = /\bbuyer[a-z]*\b/i;

export const internalContentKeyPattern = /^(?:(?:service|use-case|problem|comparison|guide|tool|case-study|technology|location|hub)-[a-z0-9-]+|inquiry|contract-support)$/;
