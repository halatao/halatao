import Link from "next/link";

import { AutomationAuditForm } from "@/components/AutomationAuditForm";
import type { FAQItem, LinkRecord, Locale } from "@/content/types";

type AutomationAuditLandingProps = {
  locale?: Locale;
  priorityLinks?: LinkRecord[];
  faq?: FAQItem[];
};

function AutomationPriorityLinks({ locale = "cs", links }: { locale?: Locale; links?: LinkRecord[] }) {
  if (!links?.length) return null;
  const heading = locale === "cs" ? "Doporučený další krok" : "Recommended next step";

  return (
    <section className="automation-section automation-section-white">
      <div className="automation-shell">
        <div className="content-card related-section">
          <h2>{heading}</h2>
          <div className="link-grid">
            {links.map((link) => (
              <Link className="link-card" href={link.href} key={link.href}>
                <strong>{link.label}</strong>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AutomationAuditLanding({ locale = "cs", priorityLinks, faq }: AutomationAuditLandingProps) {
  return (
    <div className="automation-page">
      <section className="automation-hero">
        <div className="automation-shell automation-shell-narrow automation-center">
          <span className="automation-badge">Audit automatizace firemních procesů</span>
          <h1>
            Kde firmu brzdí <span>ruční práce</span>
            <br />
            Excel a nepřipojené systémy?
          </h1>
          <p className="automation-lead">
            Zmapuji ruční práci, Excel, nepřipojené systémy a zpracování poptávek tak, aby vznikla první realistická etapa bez zbytečně velkého projektu.
          </p>
          <p className="automation-copy">Pomohu vám tyto ztráty rychle zmapovat, spočítat jejich dopad a navrhnout konkrétní kroky, které má smysl automatizovat.</p>
          <p className="automation-highlight">
            Výsledkem je jasný plán dalšího postupu.
            <br />
            Ne další projekt bez směru.
          </p>
          <Link href="#cta" className="automation-button">
            Chci zjistit, jestli se u nás automatizace vyplatí
          </Link>
        </div>
      </section>

      <section className="automation-section automation-section-soft">
        <div className="automation-shell">
          <h2>Jak vypadá neefektivita v praxi</h2>
          <div className="automation-two-col">
            <div className="automation-card">
              <h3>Na první pohled drobnosti</h3>
              <ul>
                <li>• Přepisování dat mezi systémy nebo Excelem</li>
                <li>• Hledání zachycených informací</li>
                <li>• Ruční kontroly stavů, plateb nebo termínů</li>
                <li>• Schvalování a e-maily bez pravidel</li>
                <li>• Ručně skládáné reporty</li>
              </ul>
            </div>

            <div className="automation-card">
              <h3>Ve skutečnosti to znamená</h3>
              <ul>
                <li>• Časté přerušování práce</li>
                <li>• Zbytečná rozhodnutí navíc</li>
                <li>• Hodiny práce každý měsíc</li>
                <li>• Klíčové lidi jako úzké hrdlo</li>
              </ul>
            </div>
          </div>

          <p className="automation-section-note">
            Tyto drobnosti se sčítají každý den.
            <br />
            Firma pak brzdí sama sebe, aniž by bylo jasné proč.
          </p>
        </div>
      </section>

      <section className="automation-principle">
        <div className="automation-shell automation-shell-principle automation-center">
          <p>
            Jak firma roste, ruční procesy se násobí.
            <br />
            Ne proto, že by lidé byli pomalí.
            <br />
            Chybí systém pro opakující se práci.
          </p>
        </div>
      </section>

      <section className="automation-section automation-section-white">
        <div className="automation-shell automation-shell-mid">
          <h2>Jak k řešení přistupuji</h2>
          <div className="automation-two-col automation-two-col-approach">
            <div className="automation-approach-copy">
              <p className="automation-approach-lead">Nejdřív řešíme problém, ne technologii.</p>
              <p>Nejprve zjistíme, kde vzniká ruční práce, proč vzniká a kolik firmu stojí. Teprve potom dává smysl rozhodnout, jaký typ automatizace nebo systému je vhodný.</p>
              <p>Pokud dává smysl řešení realizovat, mohu navázat i samotnou implementací nebo technickým vedením projektu.</p>
              <p className="automation-approach-note">
                Často stačí několik cílených zásahů
                <br />
                a firma si uvolní desítky hodin měsíčně.
              </p>
            </div>

            <div className="automation-card automation-card-soft">
              <ul>
                <li>• Opakování převést na automat</li>
                <li>• Pravidla převést do systému</li>
                <li>• Data sjednotit na jedno místo</li>
                <li>• Výjimky nechat na lidech</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="automation-section automation-section-soft">
        <div className="automation-shell automation-shell-mid">
          <h2>Co získáte z automatizačního auditu</h2>
          <div className="automation-card automation-card-large">
            <ul>
              <li>• Přehled míst, kde vzniká nejvíc ruční práce</li>
              <li>• Prioritu, co řešit hned a co zatím ne</li>
              <li>• Návrh konkrétního dalšího postupu</li>
              <li>• Doporučení nástrojů tam, kde mají skutečný přínos</li>
            </ul>

            <p>
              Výstupem je přehledný podklad pro rozhodnutí.
              <br />
              Můžete podle něj rovnou jednat.
            </p>
          </div>
        </div>
      </section>

      <AutomationPriorityLinks locale={locale} links={priorityLinks} />

      {faq?.length ? (
        <section className="automation-section automation-section-soft">
          <div className="automation-shell automation-shell-mid">
            <div className="content-card faq-section">
              <h2>FAQ</h2>
              <div className="faq-list">
                {faq.map((item) => (
                  <details key={item.question}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="cta" className="automation-cta">
        <div className="automation-shell automation-shell-principle automation-center">
          <h2>Úvodní konzultace bez závazku</h2>
          <p>
            Napište pár informací o situaci ve firmě.
            <br />
            Ozvu se a doporučím další krok.
          </p>

          <div className="automation-form-wrap">
            <AutomationAuditForm />
          </div>
        </div>
      </section>

      <footer className="automation-footer">© Bc. Ondřej Halata</footer>
    </div>
  );
}
