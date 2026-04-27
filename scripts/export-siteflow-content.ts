import fs from "node:fs";
import path from "node:path";

import { getAllPages } from "../src/content/registry";
import type { ContentPage, PageSection } from "../src/content/types";

type SiteflowBlock = {
  id: string;
  type: string;
  variant?: string;
  theme?: string;
  spacing?: string;
  props: Record<string, unknown>;
};

function fileNameForPage(page: ContentPage) {
  if (page.pageType === "home") return "home.json";

  return `${page.id.replace(/[^a-z0-9._-]+/gi, "-")}.json`;
}

function textBlockForSection(section: PageSection, index: number): SiteflowBlock {
  return {
    id: `section-${index + 1}`,
    type: section.bullets?.length ? "features" : "text",
    variant: "section",
    theme: "light",
    spacing: "md",
    props: {
      heading: section.title,
      body: section.body.join("\n\n"),
      items: section.bullets,
    },
  };
}

function blocksForPage(page: ContentPage): SiteflowBlock[] {
  const blocks: SiteflowBlock[] = [
    {
      id: "legacy-page",
      type: "text",
      variant: "legacy-data",
      theme: "light",
      spacing: "sm",
      props: {
        contentModel: "legacy-content-page.v1",
        page,
      },
    },
    {
      id: "hero",
      type: "hero",
      variant: page.pageType,
      theme: "light",
      spacing: "lg",
      props: {
        eyebrow: page.hero.eyebrow,
        heading: page.hero.title,
        body: page.hero.subtitle,
        ctaLabel: page.hero.primaryCta.label,
        ctaHref: page.hero.primaryCta.href,
        secondaryCtaLabel: page.hero.secondaryCta?.label,
        secondaryCtaHref: page.hero.secondaryCta?.href,
      },
    },
  ];

  if (page.intro.length > 0) {
    blocks.push({
      id: "intro",
      type: "text",
      variant: "intro",
      theme: "muted",
      spacing: "md",
      props: {
        body: page.intro.join("\n\n"),
      },
    });
  }

  blocks.push(...page.sections.map(textBlockForSection));

  if (page.faq.length > 0) {
    blocks.push({
      id: "faq",
      type: "faq",
      variant: "default",
      theme: "muted",
      spacing: "md",
      props: {
        items: page.faq,
      },
    });
  }

  blocks.push({
    id: "cta",
    type: "cta",
    variant: "default",
    theme: "accent",
    spacing: "md",
    props: {
      heading: page.locale === "cs" ? "Máte podobnou situaci?" : "Have a similar situation?",
      body: page.cta.note,
      ctaLabel: page.cta.label,
      ctaHref: page.cta.href,
    },
  });

  return blocks;
}

const pages = getAllPages();
const root = path.join(process.cwd(), "content", "pages");

function siteflowSlugForPage(page: ContentPage) {
  return page.segments.length === 0 ? "/" : `/${page.segments.join("/")}`;
}

function siteflowDescriptionForPage(page: ContentPage) {
  if (page.seo.description.length <= 160) return page.seo.description;

  return `${page.seo.description.slice(0, 157).trimEnd()}...`;
}

function siteflowTitleForPage(page: ContentPage) {
  if (page.seo.title.length <= 70) return page.seo.title;

  return `${page.seo.title.slice(0, 67).trimEnd()}...`;
}

for (const page of pages) {
  const dir = path.join(root, page.locale);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, fileNameForPage(page)),
    `${JSON.stringify(
      {
        id: page.id,
        locale: page.locale,
        slug: siteflowSlugForPage(page),
        title: page.title,
        seo: {
          ...page.seo,
          title: siteflowTitleForPage(page),
          description: siteflowDescriptionForPage(page),
          indexable: page.indexable,
        },
        sections: blocksForPage(page),
      },
      null,
      2,
    )}\n`,
  );
}

console.log(`Exported ${pages.length} Siteflow page JSON files.`);
