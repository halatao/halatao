import { redirect } from "next/navigation";

import { getStaticRouteParams } from "@/content/registry";

export const dynamicParams = false;

type LegacyCzPageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateStaticParams() {
  return getStaticRouteParams()
    .filter((item) => item.locale === "cs" && item.slug.length > 0)
    .map((item) => ({ slug: item.slug }));
}

export default async function LegacyCzPageRedirect({ params }: LegacyCzPageProps) {
  const { slug } = await params;
  redirect(`/cs/${slug.join("/")}`);
}
