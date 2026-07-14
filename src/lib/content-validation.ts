// Schema/SEO utility: validation helpers for route integrity, content quality, and launch readiness.

import type { ContentPage, Locale, PageType } from "@/content/types";
import { footerNavigation, homepageFeaturePaths, primaryNavigation } from "@/lib/navigation";
import {
  buildPagePath,
  getBreadcrumbItems,
  getSectionLabel,
  normalizeInternalHref,
} from "@/lib/routing";

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
    page.breadcrumbLabel,
    page.description,
    page.primaryQuery,
    page.hero.eyebrow,
    page.hero.title,
    page.hero.subtitle,
    page.hero.primaryCta.label,
    page.hero.secondaryCta?.label,
    ...page.intro,
    ...page.sections.flatMap((section) => [section.title, ...section.body, ...(section.bullets ?? [])]),
    ...(page.workflow
      ? [
          page.workflow.title,
          page.workflow.description,
          page.workflow.exceptionNote,
          ...page.workflow.steps.flatMap((step) => [step.title, step.description, step.owner]),
        ]
      : []),
    ...(page.workAsset
      ? [
          page.workAsset.title,
          page.workAsset.description,
          page.workAsset.example.title,
          page.workAsset.example.body,
          page.workAsset.completionNote,
          ...page.workAsset.groups.flatMap((group) => [group.title, ...group.items]),
        ]
      : []),
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

function getInternalTarget(href: string) {
  if (href.startsWith("#") || !href.startsWith("/")) {
    return null;
  }

  const [pathWithQuery] = href.split("#", 1);
  const [path] = pathWithQuery.split("?", 1);
  return normalizeInternalHref(path);
}

function getRenderedLinkTargets(
  page: ContentPage,
  pagesByTranslationKey: Map<string, ContentPage[]>,
  pages: ContentPage[],
) {
  const targets: string[] = [];
  const addHref = (href: string | undefined) => {
    if (!href) return;
    const target = getInternalTarget(href);
    if (target) targets.push(target);
  };
  const isStandalone =
    page.locale === "cs" &&
    (page.translationKey === "service-automations-and-integrations" || page.translationKey === "thank-you");

  if (!isStandalone) {
    for (const link of [...primaryNavigation[page.locale], ...footerNavigation[page.locale]]) {
      addHref(link.href);
    }
  }

  if (page.pageType !== "home" && page.translationKey !== "service-automations-and-integrations") {
    for (const item of getBreadcrumbItems(page).slice(0, -1)) {
      addHref(item.href);
    }
  }

  if (page.pageType === "home") {
    addHref(page.cta.href);
    addHref(page.hero.secondaryCta?.href);
    for (const href of homepageFeaturePaths[page.locale]) addHref(href);
    return targets;
  }

  if (page.translationKey === "service-automations-and-integrations" && page.locale === "cs") {
    for (const link of page.priorityLinks ?? []) addHref(link.href);
    return targets;
  }

  addHref(page.hero.primaryCta.href);
  addHref(page.hero.secondaryCta?.href);

  if (page.pageType === "hub") {
    addHref(page.cta.href);
    for (const child of pages.filter(
      (candidate) =>
        candidate.locale === page.locale &&
        candidate.pageType !== "hub" &&
        candidate.segments.length > 1 &&
        candidate.segments[0] === page.segments[0],
    )) {
      addHref(buildPagePath(child));
    }
    if (page.translationKey === "hub-locations") {
      for (const relatedKey of page.related) {
        const target = (pagesByTranslationKey.get(relatedKey) ?? []).find(
          (candidate) => candidate.locale === page.locale,
        );
        if (target) addHref(buildPagePath(target));
      }
    }
    return targets;
  }

  if (page.pageType === "inquiry") {
    return targets;
  }

  addHref(page.cta.href);
  for (const link of page.priorityLinks ?? []) addHref(link.href);
  for (const relatedKey of page.related) {
    const group = pagesByTranslationKey.get(relatedKey) ?? [];
    const target = group.find((candidate) => candidate.locale === page.locale) ?? group[0];
    if (target) addHref(buildPagePath(target));
  }

  return targets;
}

function ensureInternalGraph(pages: ContentPage[], groups: Map<string, ContentPage[]>) {
  const pageByPath = new Map(pages.map((page) => [buildPagePath(page), page] as const));
  const adjacency = new Map<string, Set<string>>();

  for (const page of pages) {
    const sourcePath = buildPagePath(page);
    const targets = getRenderedLinkTargets(page, groups, pages);
    const edges = new Set<string>();

    for (const targetPath of targets) {
      const targetPage = pageByPath.get(targetPath);
      if (!targetPage) {
        throw new Error(`Page ${page.id} renders an internal link to missing canonical route: ${targetPath}`);
      }

      if (targetPage.locale === page.locale && targetPage.indexable) {
        edges.add(targetPath);
      }
    }

    adjacency.set(sourcePath, edges);
  }

  for (const locale of ["cs", "en"] satisfies Locale[]) {
    const home = pages.find(
      (page) => page.locale === locale && page.pageType === "home" && page.segments.length === 0,
    );
    if (!home) throw new Error(`Missing ${locale.toUpperCase()} locale homepage.`);

    const homePath = buildPagePath(home);
    const distances = new Map([[homePath, 0]]);
    const queue = [homePath];

    while (queue.length > 0) {
      const source = queue.shift()!;
      const distance = distances.get(source)!;
      for (const target of adjacency.get(source) ?? []) {
        if (!distances.has(target)) {
          distances.set(target, distance + 1);
          queue.push(target);
        }
      }
    }

    for (const page of pages.filter((candidate) => candidate.locale === locale && candidate.indexable)) {
      const path = buildPagePath(page);
      const distance = distances.get(path);
      if (distance === undefined) {
        throw new Error(`Indexable page ${page.id} is orphaned from ${homePath}.`);
      }
      if (distance > 3) {
        throw new Error(`Indexable page ${page.id} is ${distance} internal steps from ${homePath}; maximum is 3.`);
      }
    }
  }
}

export function validateContentPages(pages: ContentPage[]) {
  const seenIds = new Set<string>();
  const seenPaths = new Set<string>();
  const translationKeys = new Set(pages.map((page) => page.translationKey));
  const groups = new Map<string, ContentPage[]>();

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

    if (!page.hero.title.trim()) {
      throw new Error(`Page ${page.id} has an empty rendered H1.`);
    }

    if (!page.breadcrumbLabel.trim()) {
      throw new Error(`Page ${page.id} has an empty breadcrumb label.`);
    }

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

    if (page.workflow && page.workflow.steps.length < 3) {
      throw new Error(`Page ${page.id} workflow must contain at least 3 useful steps.`);
    }

    if (page.workAsset) {
      if (page.pageType !== "tool") {
        throw new Error(`Page ${page.id} exposes a work asset outside the tool page type.`);
      }
      if (page.workAsset.groups.length < 2 || page.workAsset.groups.some((group) => group.items.length < 3)) {
        throw new Error(`Page ${page.id} work asset must contain at least 2 groups with 3 items each.`);
      }
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

  }

  ensureUniqueWithinLocale(pages, (page) => page.title, "title");
  ensureUniqueWithinLocale(pages, (page) => page.hero.title, "rendered H1");
  ensureUniqueWithinLocale(pages, (page) => page.description, "meta description");

  for (const page of pages) {
    for (const relatedKey of page.related) {
      if (!translationKeys.has(relatedKey)) {
        throw new Error(`Page ${page.id} references missing related key: ${relatedKey}`);
      }

      const hasLocalizedTarget = (groups.get(relatedKey) ?? []).some(
        (candidate) => candidate.locale === page.locale,
      );
      if (!hasLocalizedTarget) {
        throw new Error(`Page ${page.id} references related key '${relatedKey}' without a ${page.locale} target.`);
      }
    }

    for (const item of getBreadcrumbItems(page).slice(0, -1)) {
      if (!seenPaths.has(item.href)) {
        throw new Error(`Page ${page.id} has a breadcrumb parent that does not exist: ${item.href}`);
      }
    }
  }

  for (const [translationKey, group] of groups) {
    const policies = new Set(group.map((page) => page.translationAvailability));
    if (policies.size !== 1) {
      throw new Error(`Translation key '${translationKey}' mixes translation availability policies.`);
    }

    const policy = group[0].translationAvailability;
    const locales = new Set(group.map((page) => page.locale));
    if (policy === "required" && (!locales.has("cs") || !locales.has("en"))) {
      throw new Error(`Translation key '${translationKey}' is missing a required Czech or English counterpart.`);
    }
    if (policy === "unavailable" && group.length !== 1) {
      throw new Error(`Translation key '${translationKey}' is unavailable for translation but has multiple locales.`);
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

  ensureInternalGraph(pages, groups);
}
