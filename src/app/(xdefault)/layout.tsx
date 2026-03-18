import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";

import "@/app/globals.css";
import { AnalyticsNoScript, AnalyticsScripts } from "@/components/AnalyticsScripts";
import { buildRootMetadata } from "@/lib/metadata";

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
});

export const metadata: Metadata = buildRootMetadata();

export default function XDefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${sans.variable} ${serif.variable}`} lang="en">
      <body>
        <AnalyticsScripts />
        <AnalyticsNoScript />
        {children}
      </body>
    </html>
  );
}
