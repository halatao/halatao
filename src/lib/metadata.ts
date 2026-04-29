// Schema/SEO utility: page metadata and hreflang helpers.

import type { Metadata } from "next";

import type { ContentPage } from "@/content/types";
import { getAlternatePages } from "@/content/registry";
import { absoluteUrl, buildPagePath } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

function metadataIcons() {
  return {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon" }],
  };
}

export function buildMetadataForPage(page: ContentPage): Metadata {
  const canonicalPath = buildPagePath(page);
  const shareImage = page.seo.image ?? siteConfig.ogImage;
  const alternatePages = Object.fromEntries(
    getAlternatePages(page).map((alternate) => [alternate.locale, absoluteUrl(buildPagePath(alternate))]),
  );
  const alternates = {
    [page.locale]: absoluteUrl(canonicalPath),
    ...alternatePages,
  };

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: page.seo.title,
    description: page.seo.description,
    icons: metadataIcons(),
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
      siteName: siteConfig.shortDisplayName,
      images: [
        {
          url: shareImage,
          width: 1200,
          height: 630,
          alt: page.locale === "cs"
            ? siteConfig.ogImageAlt
            : "Bc. Ondřej Halata - custom web apps, takeover, and automations for companies",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo.title,
      description: page.seo.description,
      site: siteConfig.shortDisplayName,
      images: [shareImage],
    },
  };
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: "Webové aplikace na míru, takeover a automatizace | Bc. Ondřej Halata",
    description:
      "Vývoj webových aplikací na míru, převzetí existujících aplikací, interní systémy a automatizace procesů pro firmy.",
    icons: metadataIcons(),
    alternates: {
      canonical: absoluteUrl("/"),
      languages: {
        "x-default": absoluteUrl("/"),
        cs: absoluteUrl("/cs"),
        en: absoluteUrl("/en"),
      },
    },
    openGraph: {
      type: "website",
      url: absoluteUrl("/"),
      siteName: siteConfig.shortDisplayName,
      title: "Webové aplikace na míru, takeover a automatizace | Bc. Ondřej Halata",
      description:
        "Vývoj webových aplikací na míru, převzetí existujících aplikací, interní systémy a automatizace procesů pro firmy.",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Webové aplikace na míru, takeover a automatizace | Bc. Ondřej Halata",
      description:
        "Vývoj webových aplikací na míru, převzetí existujících aplikací, interní systémy a automatizace procesů pro firmy.",
      site: siteConfig.shortDisplayName,
      images: [siteConfig.ogImage],
    },
  };
}

