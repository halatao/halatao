import { notFound } from "next/navigation";

import { findPage, getStaticRouteParams } from "@/content/registry";
import { PageRenderer } from "@/components/PageRenderer";
import { SchemaScripts } from "@/components/SchemaScripts";
import { SiteFrame } from "@/components/SiteFrame";
import { buildMetadataForPage } from "@/lib/metadata";
import { getPageSchemas } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return getStaticRouteParams().filter((item) => item.slug.length > 0);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: "cs" | "en"; slug: string[] }> }) {
  const { locale, slug } = await params;
  const page = findPage(locale, slug);

  if (!page) {
    return {};
  }

  return buildMetadataForPage(page);
}

export default async function LocalizedContentPage({
  params,
}: {
  params: Promise<{ locale: "cs" | "en"; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  const page = findPage(locale, slug);

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
