// Schema/SEO utility: validation helpers for route integrity, content quality, and launch readiness.

import type { ContentPage, PageType } from "@/content/types";
import { buildPagePath, getSectionLabel } from "@/lib/routing";

const minimumSectionsByType: Record<PageType, number> = {
  home: 4,
  hub: 3,
  service: 4,
  problem: 3,
  comparison: 4,
  use_case: 3,
  case_study: 3,
  guide: 3,
  technology: 3,
  tool: 3,
  location: 3,
  process: 3,
  inquiry: 3,
};

const minimumRelatedByType: Partial<Record<PageType, number>> = {
  home: 4,
  hub: 3,
  service: 4,
  problem: 4,
  comparison: 4,
  use_case: 4,
  case_study: 4,
  guide: 4,
  tool: 4,
  process: 4,
  inquiry: 4,
};

const suspiciousEncodingMarkers = [
  "Ãƒ",
  "Ã…",
  "Ã„",
  "Ã†",
  "Å",
  "Ã",
  "Ä",
  "Æ",
  "â€™",
  "â€œ",
  "â€",
  "\uFFFD",
];

const genericCtaLabels = new Set([
  "Learn more",
  "Read more",
  "More",
  "More info",
  "Zjistit více",
  "Více",
  "Kontakt",
  "Contact",
  "Click here",
  "Submit",
  "Odeslat",
]);

function findSuspiciousEncoding(value: string) {
  return suspiciousEncodingMarkers.find((marker) => value.includes(marker)) ?? null;
}

function collectPageStrings(page: ContentPage) {
  return [
    page.title,
    page.h1,
    page.description,
    page.primaryQuery,
    page.hero.eyebrow,
    page.hero.title,
    page.hero.subtitle,
    page.hero.primaryCta.label,
    page.hero.secondaryCta?.label,
    ...page.intro,
    ...page.sections.flatMap((section) => [section.title, ...section.body, ...(section.bullets ?? [])]),
    ...page.faq.flatMap((item) => [item.question, item.answer]),
    ...page.fit.for,
    ...page.fit.notFor,
    page.cta.label,
    page.cta.note,
    page.note,
  ].filter((value): value is string => Boolean(value));
}

function ensureUniqueWithinLocale(
  pages: ContentPage[],
  selector: (page: ContentPage) => string,
  label: string,
) {
  const seen = new Map<string, string>();

  for (const page of pages) {
    const value = selector(page).trim();
    const key = `${page.locale}::${value}`;
    const previous = seen.get(key);

    if (previous) {
      throw new Error(`Duplicate ${label} for locale '${page.locale}': '${value}' appears on ${previous} and ${page.id}.`);
    }

    seen.set(key, page.id);
  }
}

function ensureProofShape(page: ContentPage) {
  if (page.pageType === "service") {
    if (page.fit.for.length < 3 || page.fit.notFor.length < 2) {
      throw new Error(`Service page ${page.id} needs clearer fit / not-fit framing for launch quality.`);
    }
  }

  if (page.pageType === "problem") {
    if (page.fit.for.length < 2 || page.fit.notFor.length < 2) {
      throw new Error(`Problem page ${page.id} needs stronger fit / not-fit framing for buyer intent.`);
    }

    const bulletCount = page.sections.reduce((sum, section) => sum + (section.bullets?.length ?? 0), 0);
    if (bulletCount < 6) {
      throw new Error(`Problem page ${page.id} needs stronger proof-like detail. Add more concrete symptoms, scenarios, or outcomes.`);
    }
  }
}

function ensureRelatedCoverage(page: ContentPage) {
  const minimum = minimumRelatedByType[page.pageType];
  if (minimum && page.related.length < minimum) {
    throw new Error(`Page ${page.id} has weak related-link coverage. Expected at least ${minimum} related links for a ${page.pageType} page.`);
  }
}

function ensureCtaQuality(page: ContentPage) {
  const labels = [page.hero.primaryCta.label, page.hero.secondaryCta?.label, page.cta.label].filter(
    (value): value is string => Boolean(value),
  );

  for (const label of labels) {
    if (genericCtaLabels.has(label.trim())) {
      throw new Error(`Page ${page.id} uses a CTA label that is too generic for launch: '${label}'.`);
    }
  }
}

export function validateContentPages(pages: ContentPage[]) {
  const seenIds = new Set<string>();
  const seenPaths = new Set<string>();
  const translationKeys = new Set(pages.map((page) => page.translationKey));
  const groups = new Map<string, ContentPage[]>();
  const inboundByKey = new Map<string, number>();
  const hubSegments = new Set(
    pages
      .filter((page) => page.pageType === "hub")
      .map((page) => `${page.locale}:${page.segments[0]}`),
  );

  for (const page of pages) {
    if (seenIds.has(page.id)) {
      throw new Error(`Duplicate page id detected: ${page.id}`);
    }
    seenIds.add(page.id);

    const pathKey = buildPagePath(page);
    if (seenPaths.has(pathKey)) {
      throw new Error(`Duplicate route path detected: ${pathKey}`);
    }
    seenPaths.add(pathKey);

    if (page.description.trim().length < 90) {
      throw new Error(`Page ${page.id} has a meta description that is too short for launch quality.`);
    }

    if (page.sections.length < minimumSectionsByType[page.pageType]) {
      throw new Error(`Page ${page.id} must have at least ${minimumSectionsByType[page.pageType]} sections.`);
    }

    if (page.intro.length < 2) {
      throw new Error(`Page ${page.id} must have at least 2 intro paragraphs.`);
    }

    if (page.related.length === 0) {
      throw new Error(`Page ${page.id} must include related links.`);
    }

    if (page.indexable && page.faq.length < 3 && page.pageType !== "inquiry") {
      throw new Error(`Page ${page.id} must have at least 3 FAQ entries.`);
    }

    if (page.segments.length > 1 && !getSectionLabel(page.locale, page.segments[0])) {
      throw new Error(`Page ${page.id} is missing a breadcrumb label for section '${page.segments[0]}'.`);
    }

    ensureProofShape(page);
    ensureRelatedCoverage(page);
    ensureCtaQuality(page);

    for (const value of collectPageStrings(page)) {
      const marker = findSuspiciousEncoding(value);
      if (marker) {
        throw new Error(`Page ${page.id} contains suspicious encoding marker '${marker}' in launch content.`);
      }
    }

    if (page.translationKey === "thank-you" && page.indexable) {
      throw new Error(`Thank-you page ${page.id} must not be indexable.`);
    }

    const currentGroup = groups.get(page.translationKey) ?? [];
    currentGroup.push(page);
    groups.set(page.translationKey, currentGroup);

    for (const relatedKey of page.related) {
      inboundByKey.set(relatedKey, (inboundByKey.get(relatedKey) ?? 0) + 1);
    }
  }

  ensureUniqueWithinLocale(pages, (page) => page.title, "title");
  ensureUniqueWithinLocale(pages, (page) => page.h1, "H1");
  ensureUniqueWithinLocale(pages, (page) => page.description, "meta description");

  for (const page of pages) {
    for (const relatedKey of page.related) {
      if (!translationKeys.has(relatedKey)) {
        throw new Error(`Page ${page.id} references missing related key: ${relatedKey}`);
      }
    }
  }

  for (const [translationKey, group] of groups) {
    const requiresLocalePair = !group.some((page) => page.pageType === "location");

    if (requiresLocalePair) {
      const locales = new Set(group.map((page) => page.locale));
      if (!locales.has("cs") || !locales.has("en")) {
        throw new Error(`Translation key '${translationKey}' is missing a Czech or English counterpart.`);
      }
    }
  }

  for (const page of pages.filter((entry) => entry.pageType === "hub")) {
    const children = pages.filter(
      (candidate) =>
        candidate.locale === page.locale &&
        candidate.pageType !== "hub" &&
        candidate.segments.length > 1 &&
        candidate.segments[0] === page.segments[0],
    );

    if (children.length === 0) {
      throw new Error(`Hub page ${page.id} has no child pages.`);
    }
  }

  for (const page of pages) {
    if (page.pageType === "home" || page.pageType === "hub" || page.pageType === "location" || !page.indexable) {
      continue;
    }

    const linkedFromHub =
      page.segments.length > 1 && hubSegments.has(`${page.locale}:${page.segments[0]}`);
    const inboundLinks = inboundByKey.get(page.translationKey) ?? 0;

    if (!linkedFromHub && inboundLinks === 0) {
      throw new Error(`Page ${page.id} is orphaned. It is neither linked from related content nor covered by a section hub.`);
    }
  }
}
