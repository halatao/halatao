import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const redirectRules = [
  {
    source: "/index.html",
    destination: "/",
    permanent: true,
  },
  {
    source: "/cz",
    destination: "/cs",
    permanent: true,
  },
  {
    source: "/cz/",
    destination: "/cs",
    permanent: true,
  },
  {
    source: "/cz/index.html",
    destination: "/cs",
    permanent: true,
  },
  {
    source: "/cz/:path*",
    destination: "/cs/:path*",
    permanent: true,
  },
  {
    source: "/en/index.html",
    destination: "/en",
    permanent: true,
  },
  {
    source: "/automatizace",
    destination: "/cs/sluzby/automatizace-a-integrace",
    permanent: true,
  },
  {
    source: "/automatizace/",
    destination: "/cs/sluzby/automatizace-a-integrace",
    permanent: true,
  },
  {
    source: "/automatizace/index.html",
    destination: "/cs/sluzby/automatizace-a-integrace",
    permanent: true,
  },
  {
    source: "/automatizace/dekuji.html",
    destination: "/cs/popsat-projekt/dekuji",
    permanent: true,
  },
];

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
    }
  : {
      async redirects() {
        return redirectRules;
      },
    };

export default nextConfig;
