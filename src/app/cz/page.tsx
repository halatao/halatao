import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.halatao.cz/cs/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LegacyCzHomeFallback() {
  return (
    <main>
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/cs/');" }} />
      <p>
        Stránka se přesunula na <Link href="/cs/">/cs/</Link>.
      </p>
    </main>
  );
}
