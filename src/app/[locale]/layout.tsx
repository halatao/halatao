import { notFound } from "next/navigation";
import { Manrope, Source_Serif_4 } from "next/font/google";

import "@/app/globals.css";
import { AnalyticsNoScript, AnalyticsScripts } from "@/components/AnalyticsScripts";
import { localeDefinitions } from "@/content/taxonomies/locales";

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const definition = localeDefinitions.find((entry) => entry.code === locale);

  if (!definition) {
    notFound();
  }

  return (
    <html
      className={`${sans.variable} ${serif.variable}`}
      data-scroll-behavior="smooth"
      lang={definition.code}
    >
      <body>
        <AnalyticsScripts />
        <AnalyticsNoScript />
        {children}
      </body>
    </html>
  );
}
