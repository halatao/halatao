import type { MetadataRoute } from "next";

import { getIndexablePages } from "@/content/registry";
import { absoluteUrl, buildPagePath } from "@/lib/routing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentPages = getIndexablePages().map((page) => ({
    url: absoluteUrl(buildPagePath(page)),
    changeFrequency: "monthly" as const,
    priority: page.pageType === "home" ? 1 : 0.8,
  }));

  return [
    ...contentPages,
    {
      url: absoluteUrl("/privacy-policy/"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/data-deletion/"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
