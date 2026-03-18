// Safe to edit manually: locale-aware path and breadcrumb helpers.

import type { ContentPage, LinkRecord, Locale } from "@/content/types";
import { siteConfig } from "@/lib/site";

const sectionLabels: Record<Locale, Record<string, string>> = {
  cs: {
    sluzby: "Služby",
    problemy: "Problémy",
    srovnani: "Srovnání",
    priklady: "Příklady",
    pripadovky: "Případovky",
    pruvodce: "Průvodce",
    technologie: "Technologie",
    sablony: "Šablony",
    lokality: "Lokality",
    "popsat-projekt": "Popsat projekt",
  },
  en: {
    services: "Services",
    problems: "Problems",
    comparisons: "Comparisons",
    "use-cases": "Use cases",
    "case-studies": "Case studies",
    guides: "Guides",
    technology: "Technology",
    templates: "Templates",
    locations: "Locations",
    "discuss-your-project": "Discuss your project",
  },
};

export function buildLocalizedPath(locale: Locale, segments: string[] = []) {
  const base = `/${locale}`;
  return segments.length === 0 ? base : `${base}/${segments.join("/")}`;
}

export function buildPagePath(page: ContentPage) {
  return buildLocalizedPath(page.locale, page.segments);
}

export function absoluteUrl(path: string) {
  return `${siteConfig.siteUrl}${path}`;
}

export function getSectionLabel(locale: Locale, segment: string) {
  return sectionLabels[locale][segment] ?? null;
}

export function getBreadcrumbItems(page: ContentPage): LinkRecord[] {
  const home: LinkRecord = {
    label: page.locale === "cs" ? "Domů" : "Home",
    href: buildLocalizedPath(page.locale),
  };

  if (page.pageType === "home") {
    return [home];
  }

  if (page.segments.length === 0) {
    return [home, { label: page.h1, href: buildPagePath(page) }];
  }

  const sectionSegment = page.segments[0];
  const sectionLabel = getSectionLabel(page.locale, sectionSegment);

  if (!sectionLabel && page.segments.length > 1) {
    throw new Error(`Missing breadcrumb label for section '${sectionSegment}' in locale '${page.locale}'.`);
  }

  if (!sectionLabel) {
    return [home, { label: page.h1, href: buildPagePath(page) }];
  }

  const items = [home, { label: sectionLabel, href: buildLocalizedPath(page.locale, [sectionSegment]) }];

  if (page.pageType === "hub") {
    return items;
  }

  return [...items, { label: page.h1, href: buildPagePath(page) }];
}
