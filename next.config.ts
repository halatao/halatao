import type { NextConfig } from "next";
import { resolve } from "node:path";

const isStaticExport = process.env.STATIC_EXPORT === "true";

async function buildNonStaticRedirects() {
  // Keep the content-backed manifest out of the static config-loading path.
  // Next.js' config transpiler does not resolve the application's @/* aliases
  // in transitive config imports, while the static deployment does not consume
  // redirects at all.
  const { require: tsxRequire } = await import("tsx/cjs/api");
  const { expandSeoRedirectRules } = tsxRequire(
    "./config/seo-redirects.ts",
    resolve(process.cwd(), "next.config.ts"),
  ) as typeof import("./config/seo-redirects");

  return expandSeoRedirectRules().map((rule) => {
    if (rule.query !== "preserve") {
      throw new Error(
        `Next.js redirect integration cannot safely implement query policy '${rule.query}' for '${rule.source}'.`,
      );
    }

    if (rule.status === 301) {
      return {
        source: rule.source,
        destination: rule.target,
        statusCode: 301 as const,
      };
    }

    return {
      source: rule.source,
      destination: rule.target,
      permanent: true,
    };
  });
}

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      trailingSlash: true,
    }
  : {
      trailingSlash: true,
      async redirects() {
        // This adapter is useful only for a future server-backed Next.js
        // deployment. GitHub Pages receives the static branch above and does
        // not emit or execute these redirects.
        return buildNonStaticRedirects();
      },
    };

export default nextConfig;
