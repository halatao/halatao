import fs from "node:fs";
import path from "node:path";

import type { ContentPage, Locale } from "@/content/types";
import type { CmsPage } from "./types";

const contentRoot = path.join(process.cwd(), "content");
const pagesRoot = path.join(contentRoot, "pages");

function normalizeCmsPage(value: unknown): CmsPage | undefined {
  if (!value || typeof value !== "object") return undefined;

  const page = value as Partial<CmsPage> & { blocks?: CmsPage["sections"]; segments?: string[] };
  const sections = Array.isArray(page.blocks) ? page.blocks : page.sections;

  if (!page.id || !page.locale || !page.slug || !page.title || !page.seo || !Array.isArray(sections)) {
    return undefined;
  }

  return {
    ...page,
    sections,
  } as CmsPage;
}

function matchesCmsSlug(page: CmsPage & { segments?: string[] }, slug: string) {
  if (page.slug === slug) return true;
  if (!Array.isArray(page.segments)) return false;

  const pathSlug = page.segments.length === 0 ? "/" : `/${page.segments.join("/")}`;
  return pathSlug === slug;
}

export function loadPage(locale: string, slug = "/"): CmsPage | undefined {
  const pagesDir = path.join(pagesRoot, locale);
  if (!fs.existsSync(pagesDir)) return undefined;

  for (const fileName of fs.readdirSync(pagesDir)) {
    if (!fileName.endsWith(".json")) continue;
    const page = normalizeCmsPage(JSON.parse(fs.readFileSync(path.join(pagesDir, fileName), "utf8")));
    if (page && matchesCmsSlug(page, slug)) return page;
  }

  return undefined;
}

function isLocale(value: string): value is Locale {
  return value === "cs" || value === "en";
}

function isContentPage(value: unknown): value is ContentPage {
  if (!value || typeof value !== "object") return false;
  const page = value as Partial<ContentPage>;

  return Boolean(
    page.id &&
      page.translationKey &&
      page.locale &&
      isLocale(page.locale) &&
      page.pageType &&
      page.hero &&
      page.seo &&
      Array.isArray(page.segments) &&
      Array.isArray(page.sections) &&
      Array.isArray(page.intro) &&
      Array.isArray(page.faq) &&
      Array.isArray(page.related),
  );
}

function getLegacyContentPage(value: unknown): ContentPage | undefined {
  if (!value || typeof value !== "object") return undefined;

  const page = value as Partial<CmsPage>;
  const legacyBlock = page.sections?.find((block) => block.id === "legacy-page");
  const legacyPage = legacyBlock?.props.page;

  return isContentPage(legacyPage) ? legacyPage : undefined;
}

export function loadSiteflowContentPages(): ContentPage[] {
  if (!fs.existsSync(pagesRoot)) return [];

  const pages: ContentPage[] = [];

  for (const locale of fs.readdirSync(pagesRoot).sort()) {
    const localeDir = path.join(pagesRoot, locale);
    if (!fs.statSync(localeDir).isDirectory()) continue;

    for (const fileName of fs.readdirSync(localeDir).sort()) {
      if (!fileName.endsWith(".json")) continue;

      const filePath = path.join(localeDir, fileName);
      const page = JSON.parse(fs.readFileSync(filePath, "utf8")) as unknown;

      const legacyPage = getLegacyContentPage(page);

      if (legacyPage) {
        pages.push(legacyPage);
      } else if (isContentPage(page)) {
        pages.push(page);
      }
    }
  }

  return pages;
}

export function loadSiteConfig<T = unknown>(): T {
  return JSON.parse(fs.readFileSync(path.join(contentRoot, "site.json"), "utf8")) as T;
}

export function loadNavigation<T = unknown>(): T {
  return JSON.parse(fs.readFileSync(path.join(contentRoot, "navigation.json"), "utf8")) as T;
}
