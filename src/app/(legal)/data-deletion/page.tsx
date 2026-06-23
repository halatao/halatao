import type { Metadata } from "next";
import Link from "next/link";

import {
  ContactDetails,
  legalContact,
  legalLastUpdated,
  LegalPageLayout,
  LegalSection,
} from "@/components/LegalPageLayout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Pokyny pro výmaz dat | Halatao",
  description:
    "Pokyny, jak požádat o výmaz osobních údajů souvisejících s webem halatao.cz, kontaktními formuláři nebo Meta aplikací MCP.",
  alternates: {
    canonical: "/data-deletion/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataDeletionPage() {
  return (
    <LegalPageLayout
      eyebrow="Výmaz údajů"
      title="Pokyny pro výmaz dat"
      subtitle="Tato stránka popisuje, jak můžete požádat o výmaz osobních údajů souvisejících s webem halatao.cz, kontaktními formuláři, obchodní komunikací nebo aplikací MCP používanou pro správu reklam přes Meta Marketing API."
    >
      <LegalSection title="Jak požádat o výmaz údajů">
        <p>
          O výmaz osobních údajů můžete požádat e-mailem na kontaktní adresu{" "}
          <a href={`mailto:${legalContact.email}`}>{legalContact.email}</a>.
        </p>
        <p>Do předmětu e-mailu uveďte: Žádost o výmaz údajů</p>
        <p>Do zprávy uveďte:</p>
        <ul className="bullet-list">
          <li>jméno a příjmení, pokud jste je dříve uvedli,</li>
          <li>e-mailovou adresu, které se žádost týká,</li>
          <li>případně název firmy nebo projektu,</li>
          <li>stručnou informaci, že žádáte o výmaz údajů.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Co se stane po odeslání žádosti">
        <p>Po přijetí žádosti:</p>
        <ol className="step-list">
          <li>ověříme, zda k uvedeným údajům evidujeme osobní data,</li>
          <li>vymažeme údaje, které již nepotřebujeme,</li>
          <li>informujeme vás o vyřízení žádosti,</li>
          <li>pokud některé údaje nemůžeme vymazat z důvodu zákonné povinnosti, vysvětlíme důvod.</li>
        </ol>
        <p>Žádost bude zpracována bez zbytečného odkladu.</p>
      </LegalSection>

      <LegalSection title="Výmaz údajů souvisejících s Meta aplikací MCP">
        <p>Aplikace MCP slouží pouze pro správu vlastních reklam přes Meta Marketing API.</p>
        <p>Aplikace není určena pro veřejné přihlašování uživatelů a neslouží jako Facebook Login pro návštěvníky webu.</p>
        <p>
          Pokud chcete požádat o výmaz údajů, které by mohly souviset s komunikací, formulářem, reklamní kampaní nebo
          interakcí s webem halatao.cz, postupujte podle pokynů výše.
        </p>
      </LegalSection>

      <LegalSection title="Odebrání aplikace v Meta / Facebook nastavení">
        <p>
          Pokud jste aplikaci viděli ve svém Facebook nebo Meta účtu, můžete ji odebrat také ve svém nastavení
          Meta/Facebook účtu v části aplikací a business integrací.
        </p>
        <p>I po odebrání aplikace můžete požádat o výmaz souvisejících údajů e-mailem podle pokynů na této stránce.</p>
      </LegalSection>

      <LegalSection title="Odkaz na zásady zpracování osobních údajů">
        <p>
          Podrobnější informace o zpracování osobních údajů najdete na stránce{" "}
          <Link href="/privacy-policy/">Zásady zpracování osobních údajů</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <ContactDetails showPhone />
        <p>Poslední aktualizace: {legalLastUpdated}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
