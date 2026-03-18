import { NextResponse } from "next/server";

import { getIndexablePages } from "@/content/registry";
import { buildPagePath } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const topPages = getIndexablePages()
    .slice(0, 20)
    .map((page) => `- ${siteConfig.siteUrl}${buildPagePath(page)} :: ${page.h1}`)
    .join("\n");

  const content = [
    `# ${siteConfig.name}`,
    `${siteConfig.name} is an independent software partner focused on custom web applications, existing app takeover, internal tools, automations, integrations, and contract development support.`,
    "",
    "## Audience",
    "Business buyers, product teams, and companies evaluating commercial software delivery help. This is not a job-seeking portfolio.",
    "",
    "## Priority pages",
    topPages,
    "",
    "## Contact",
    `Email: ${siteConfig.email}`,
    `Phone: ${siteConfig.phoneDisplay}`,
  ].join("\n");

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
