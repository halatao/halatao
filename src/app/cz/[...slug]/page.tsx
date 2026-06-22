import type { Metadata } from "next";
import Link from "next/link";

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

export async function generateMetadata({ params }: LegacyCzPageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    alternates: {
      canonical: `https://www.halatao.cz/cs/${slug.join("/")}/`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function LegacyCzPageFallback({ params }: LegacyCzPageProps) {
  const { slug } = await params;
  const target = `/cs/${slug.join("/")}/`;

  return (
    <main>
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace(${JSON.stringify(target)});` }} />
      <p>
        Stránka se přesunula na <Link href={target}>{target}</Link>.
      </p>
    </main>
  );
}
