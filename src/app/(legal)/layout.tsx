import { Manrope, Source_Serif_4 } from "next/font/google";

import "@/app/globals.css";
import { AnalyticsNoScript, AnalyticsScripts } from "@/components/AnalyticsScripts";

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
});

export default function LegalRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${sans.variable} ${serif.variable}`} lang="cs">
      <body>
        <AnalyticsScripts />
        <AnalyticsNoScript />
        {children}
      </body>
    </html>
  );
}
