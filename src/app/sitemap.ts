import type { MetadataRoute } from "next";

import { getIndexablePages } from "@/content/registry";
import { absoluteUrl, buildPagePath } from "@/lib/routing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = getIndexablePages().map((page) => ({
    url: absoluteUrl(buildPagePath(page)),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.pageType === "home" ? 1 : 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...pages,
  ];
}
