// Schema/SEO utility: page metadata and hreflang helpers.

import type { Metadata } from "next";

import type { ContentPage } from "@/content/types";
import { getAlternatePages } from "@/content/registry";
import { absoluteUrl, buildPagePath } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

export function buildMetadataForPage(page: ContentPage): Metadata {
  const canonicalPath = buildPagePath(page);
  const shareImage = page.seo.image ?? siteConfig.ogImage;
  const alternates = Object.fromEntries(
    getAlternatePages(page).map((alternate) => [alternate.locale, absoluteUrl(buildPagePath(alternate))]),
  );

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: page.seo.title,
    description: page.seo.description,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages: {
        ...alternates,
        "x-default": absoluteUrl("/"),
      },
    },
    robots: page.indexable ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: "website",
      locale: page.locale === "cs" ? "cs_CZ" : "en_US",
      title: page.seo.title,
      description: page.seo.description,
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      images: [
        {
          url: shareImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      images: [shareImage],
    },
  };
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: `${siteConfig.name} | Custom web applications, takeover, internal tools, and automations`,
    description:
      `Bilingual landing page for ${siteConfig.name}. Choose Czech or English and explore custom web application work, existing app takeover, internal tools, and automations.`,
    alternates: {
      canonical: absoluteUrl("/"),
      languages: {
        cs: absoluteUrl("/cs"),
        en: absoluteUrl("/en"),
        "x-default": absoluteUrl("/"),
      },
    },
    openGraph: {
      type: "website",
      url: absoluteUrl("/"),
      siteName: siteConfig.name,
      title: siteConfig.name,
      description:
        "Independent software partner for custom web applications, app takeover, internal tools, automations, and contract support.",
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description:
        "Independent software partner for custom web applications, app takeover, internal tools, automations, and contract support.",
      images: [siteConfig.ogImage],
    },
  };
}

