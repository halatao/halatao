import { notFound, redirect } from "next/navigation";

import { findPage, getStaticRouteParams } from "@/content/registry";

export const dynamicParams = false;

type LegacyUnprefixedPageProps = {
  params: Promise<{ slug: string[] }>;
};

export function generateStaticParams() {
  return getStaticRouteParams()
    .filter((item) => item.locale === "cs" && item.slug.length > 0)
    .map((item) => ({ slug: item.slug }));
}

export default async function LegacyUnprefixedPageRedirect({ params }: LegacyUnprefixedPageProps) {
  const { slug } = await params;
  const page = findPage("cs", slug);

  if (!page) {
    notFound();
  }

  redirect(`/cs/${slug.join("/")}`);
}
