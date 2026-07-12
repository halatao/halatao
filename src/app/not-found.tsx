import Link from "next/link";
import { Manrope, Source_Serif_4 } from "next/font/google";

import "@/app/globals.css";
import { AnalyticsNoScript, AnalyticsScripts } from "@/components/AnalyticsScripts";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
});

export default function NotFound() {
  return (
    <html className={`${sans.variable} ${serif.variable}`} lang="cs">
      <body>
        <AnalyticsScripts />
        <AnalyticsNoScript />
        <SiteHeader locale="cs" />
        <main className="page-shell">
          <div className="page-stack page-stack-generic">
            <section className="hero-panel">
              <div className="hero-inner">
                <p className="eyebrow">404</p>
                <h1>Stránka nebyla nalezena</h1>
                <p className="hero-copy">
                  Odkaz může být neaktuální nebo se stránka přesunula při migraci webu. Pokračujte přes hlavní vstupy
                  níže.
                </p>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/cs/">
                    Hlavní stránka
                  </Link>
                  <Link className="button button-secondary" href="/cs/sluzby/">
                    Přehled služeb
                  </Link>
                  <Link className="button button-secondary" href="/en/">
                    English
                  </Link>
                </div>
              </div>
            </section>
            <section className="band-section">
              <div className="band-shell">
                <div className="content-card">
                  <h2>Kam pokračovat</h2>
                  <div className="section-copy">
                    <p>
                      Pokud jste hledali konkrétní službu nebo článek, nejrychlejší cesta je přes český rozcestník
                      služeb. Pro poptávku nebo technický kontext můžete rovnou popsat situaci.
                    </p>
                    <div className="hero-actions">
                      <Link className="button button-secondary" href="/cs/popsat-projekt/">
                        Popsat situaci
                      </Link>
                      <Link className="button button-secondary" href="/en/services/">
                        Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <SiteFooter locale="cs" />
      </body>
    </html>
  );
}
