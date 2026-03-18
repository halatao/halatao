import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { RootChooser } from "@/components/RootChooser";

const isStaticExport = process.env.STATIC_EXPORT === "true";

function localeFromReferer(referer: string | null) {
  if (!referer) return null;

  try {
    const { pathname } = new URL(referer);

    if (pathname === "/cs" || pathname.startsWith("/cs/")) {
      return "cs";
    }

    if (pathname === "/en" || pathname.startsWith("/en/")) {
      return "en";
    }
  } catch {
    return null;
  }

  return null;
}

function localeFromAcceptLanguage(acceptLanguage: string | null) {
  if (!acceptLanguage) {
    return "cs";
  }

  const normalized = acceptLanguage.toLowerCase();

  if (normalized.includes("cs")) {
    return "cs";
  }

  if (normalized.includes("en")) {
    return "en";
  }

  return "cs";
}

export default async function RootPage() {
  if (isStaticExport) {
    return <RootChooser />;
  }

  const headerStore = await headers();
  const refererLocale = localeFromReferer(headerStore.get("referer"));
  const targetLocale = refererLocale ?? localeFromAcceptLanguage(headerStore.get("accept-language"));

  redirect(targetLocale === "en" ? "/en" : "/cs");
}
