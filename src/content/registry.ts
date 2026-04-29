// Safe to edit manually: central content registry and lookup helpers.

import { corePages } from "@/content/pages/stage1/core";
import { stage1HubPages } from "@/content/pages/stage1/hubs";
import { problemPages } from "@/content/pages/stage1/problems";
import { growthProblemPages } from "@/content/pages/stage1/problems-growth";
import { servicePages } from "@/content/pages/stage1/services";
import { caseStudyPages } from "@/content/pages/stage2/case-studies";
import { comparisonPages } from "@/content/pages/stage2/comparisons";
import { guidePages } from "@/content/pages/stage2/guides";
import { demandGuidePages } from "@/content/pages/stage2/guides-demand";
import { growthGuidePages } from "@/content/pages/stage2/guides-growth";
import { stage2HubPages } from "@/content/pages/stage2/hubs";
import { useCasePages } from "@/content/pages/stage2/use-cases";
import { growthUseCasePages } from "@/content/pages/stage2/use-cases-growth";
import { advancedGuidePages } from "@/content/pages/stage3/advanced-guides";
import { stage3HubPages } from "@/content/pages/stage3/hubs";
import { locationPages } from "@/content/pages/stage3/locations";
import { technologyPages } from "@/content/pages/stage3/technologies";
import { toolPages } from "@/content/pages/stage3/tools";
import { growthToolPages } from "@/content/pages/stage3/tools-growth";
import type { ContentPage, Locale, PageType } from "@/content/types";
import { validateContentPages } from "@/lib/content-validation";
import { buildLocalizedPath, buildPagePath } from "@/lib/routing";

const allPages = [
  ...corePages,
  ...stage1HubPages,
  ...servicePages,
  ...problemPages,
  ...growthProblemPages,
  ...stage2HubPages,
  ...comparisonPages,
  ...useCasePages,
  ...growthUseCasePages,
  ...caseStudyPages,
  ...guidePages,
  ...growthGuidePages,
  ...demandGuidePages,
  ...stage3HubPages,
  ...advancedGuidePages,
  ...technologyPages,
  ...toolPages,
  ...growthToolPages,
  ...locationPages,
] satisfies ContentPage[];

validateContentPages(allPages);

const byId = new Map(allPages.map((page) => [page.id, page] as const));
const byPath = new Map(allPages.map((page) => [buildPagePath(page), page] as const));
const byTranslationKey = new Map<string, ContentPage[]>();

for (const page of allPages) {
  const group = byTranslationKey.get(page.translationKey) ?? [];
  group.push(page);
  byTranslationKey.set(page.translationKey, group);
}

export function getAllPages() {
  return allPages;
}

export function getIndexablePages() {
  return allPages.filter((page) => page.indexable);
}

export function getLocaleHome(locale: Locale) {
  return allPages.find((page) => page.translationKey === "home" && page.locale === locale) ?? null;
}

export function getPageByPath(locale: Locale, segments: string[]) {
  return byPath.get(buildLocalizedPath(locale, segments)) ?? null;
}

export function findPage(locale: Locale, segments: string[]) {
  const path = segments.length === 0 ? `/${locale}` : `/${locale}/${segments.join("/")}`;
  return byPath.get(path) ?? null;
}

export function getRelatedPages(page: ContentPage) {
  return page.related
    .map((key) => getLocalizedPage(key, page.locale) ?? getAnyPageByTranslationKey(key))
    .filter((value): value is ContentPage => Boolean(value));
}

export function getLocalizedPage(translationKey: string, locale: Locale) {
  return (byTranslationKey.get(translationKey) ?? []).find((page) => page.locale === locale) ?? null;
}

export function getAlternatePage(page: ContentPage, targetLocale: Locale) {
  return (byTranslationKey.get(page.translationKey) ?? []).find((candidate) => candidate.locale === targetLocale) ?? null;
}

export function getAnyPageByTranslationKey(translationKey: string) {
  return (byTranslationKey.get(translationKey) ?? [])[0] ?? null;
}

export function getAlternatePages(page: ContentPage) {
  return (byTranslationKey.get(page.translationKey) ?? []).filter(
    (candidate) => candidate.id !== page.id,
  );
}

export function getPagesByType(pageType: PageType) {
  return allPages.filter((page) => page.pageType === pageType);
}

export function getSectionChildren(page: ContentPage) {
  if (page.pageType !== "hub" || page.segments.length === 0) {
    return [];
  }

  return allPages
    .filter(
      (candidate) =>
        candidate.locale === page.locale &&
        candidate.pageType !== "hub" &&
        candidate.segments.length > 1 &&
        candidate.segments[0] === page.segments[0],
    )
    .sort((left, right) => left.h1.localeCompare(right.h1, page.locale));
}

export function getStaticRouteParams() {
  return allPages.map((page) => ({
    locale: page.locale,
    slug: page.segments,
  }));
}

export function getMigrationSummary() {
  const countsByType = allPages.reduce<Record<string, number>>((acc, page) => {
    acc[page.pageType] = (acc[page.pageType] ?? 0) + 1;
    return acc;
  }, {});

  const countsByLocale = allPages.reduce<Record<string, number>>((acc, page) => {
    acc[page.locale] = (acc[page.locale] ?? 0) + 1;
    return acc;
  }, {});

  return {
    totalPages: allPages.length,
    countsByType,
    countsByLocale,
    legacyMapping: [
      { from: "index.html", to: "/" },
      { from: "cz/index.html", to: "/cs" },
      { from: "en/index.html", to: "/en" },
      { from: "automatizace/index.html", to: "/cs/sluzby/automatizace-a-integrace" },
      { from: "automatizace/dekuji.html", to: "/cs/popsat-projekt/dekuji" },
      { from: "robots.txt", to: "/robots.txt" },
      { from: "sitemap.xml", to: "/sitemap.xml" },
    ],
  };
}

