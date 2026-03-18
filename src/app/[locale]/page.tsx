import { notFound } from "next/navigation";

import { getLocaleHome } from "@/content/registry";
import { PageRenderer } from "@/components/PageRenderer";
import { SchemaScripts } from "@/components/SchemaScripts";
import { SiteFrame } from "@/components/SiteFrame";
import { buildMetadataForPage } from "@/lib/metadata";
import { getPageSchemas } from "@/lib/schema";

export function generateStaticParams() {
  return [{ locale: "cs" }, { locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: "cs" | "en" }> }) {
  const { locale } = await params;
  const page = getLocaleHome(locale);

  if (!page) {
    return {};
  }

  return buildMetadataForPage(page);
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: "cs" | "en" }> }) {
  const { locale } = await params;
  const page = getLocaleHome(locale);

  if (!page) {
    notFound();
  }

  return (
    <SiteFrame locale={locale} page={page}>
      <SchemaScripts schemas={getPageSchemas(page)} />
      <PageRenderer page={page} />
    </SiteFrame>
  );
}
