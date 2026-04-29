import type { MetadataRoute } from "next";

import { getIndexablePages } from "@/content/registry";
import { absoluteUrl, buildPagePath } from "@/lib/routing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getIndexablePages().map((page) => ({
    url: absoluteUrl(buildPagePath(page)),
    changeFrequency: "monthly" as const,
    priority: page.pageType === "home" ? 1 : 0.8,
  }));
}
