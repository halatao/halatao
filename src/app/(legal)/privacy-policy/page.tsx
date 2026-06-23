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
  title: "Zásady zpracování osobních údajů | Halatao",
  description:
    "Informace o tom, jak web halatao.cz zpracovává osobní údaje, kontaktní údaje, poptávky a data související s marketingovými nástroji.",
  alternates: {
    canonical: "/privacy-policy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Osobní údaje"
      title="Zásady zpracování osobních údajů"
      subtitle="Tato stránka popisuje, jak web halatao.cz a související služby pracují s osobními údaji."
    >
      <LegalSection title="Správce údajů">
        <p>Správcem osobních údajů je:</p>
        <ContactDetails />
      </LegalSection>

      <LegalSection title="Jaké údaje můžeme zpracovávat">
        <p>Můžeme zpracovávat zejména tyto údaje:</p>
        <ul className="bullet-list">
          <li>jméno a příjmení,</li>
          <li>e-mailovou adresu,</li>
          <li>telefonní číslo, pokud jej uvedete,</li>
          <li>název firmy nebo projektu,</li>
          <li>informace uvedené v kontaktním nebo poptávkovém formuláři,</li>
          <li>obsah e-mailové komunikace,</li>
          <li>
            technické údaje související s provozem webu, například IP adresu, typ zařízení, prohlížeč nebo základní
            analytická data,
          </li>
          <li>údaje potřebné pro vyhodnocení marketingových kampaní.</li>
        </ul>
      </LegalSection>

      <LegalSection title="K čemu údaje používáme">
        <p>Osobní údaje používáme zejména pro:</p>
        <ul className="bullet-list">
          <li>odpověď na poptávku,</li>
          <li>domluvu konzultace nebo spolupráce,</li>
          <li>posouzení situace související s webem, softwarem, IT službami nebo dokumentací,</li>
          <li>běžnou obchodní komunikaci,</li>
          <li>správu a zlepšování webu,</li>
          <li>základní analytiku a měření výkonu marketingových kampaní,</li>
          <li>splnění zákonných povinností, pokud vzniknou.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Kontaktní formuláře a poptávky">
        <p>
          Pokud odešlete kontaktní nebo poptávkový formulář, zpracujeme údaje, které do formuláře uvedete. Tyto údaje
          používáme k tomu, abychom mohli odpovědět, upřesnit požadavek a případně navázat obchodní komunikaci.
        </p>
      </LegalSection>

      <LegalSection title="Analytika a marketing">
        <p>
          Web může používat analytické a marketingové nástroje, například pro měření návštěvnosti, vyhodnocení kampaní
          nebo zlepšení obsahu webu.
        </p>
        <p>
          Tyto nástroje mohou pracovat s technickými údaji, například informacemi o zařízení, prohlížeči, návštěvě webu
          nebo interakci s reklamou.
        </p>
        {siteConfig.cookiebotId ? (
          <p>
            Pokud web používá cookies nebo podobné technologie vyžadující souhlas, nastavení souhlasů se řídí cookie
            lištou dostupnou na webu.
          </p>
        ) : null}
      </LegalSection>

      <LegalSection title="Meta / Facebook aplikace MCP">
        <p>
          Aplikace MCP slouží pouze pro správu vlastních reklam přes Meta Marketing API. Používá se k vytváření, správě
          a vyhodnocování reklamních kampaní.
        </p>
        <p>
          Aplikace není určena pro veřejné přihlašování uživatelů, neslouží jako Facebook Login pro návštěvníky webu a
          sama o sobě nesbírá osobní údaje návštěvníků přes přihlášení k Facebooku.
        </p>
        <p>Pokud přes Meta nástroje vzniknou reklamní nebo analytická data, používají se pouze pro správu a vyhodnocení reklam.</p>
      </LegalSection>

      <LegalSection title="Sdílení údajů s třetími stranami">
        <p>Osobní údaje neprodáváme třetím stranám.</p>
        <p>Údaje mohou být zpracovávány službami, které používáme pro:</p>
        <ul className="bullet-list">
          <li>provoz webu,</li>
          <li>hosting,</li>
          <li>e-mailovou komunikaci,</li>
          <li>analytiku,</li>
          <li>marketingové kampaně,</li>
          <li>správu formulářů,</li>
          <li>účetní nebo zákonné povinnosti, pokud vzniknou.</li>
        </ul>
        <p>Služby třetích stran zpracovávají údaje podle svých vlastních podmínek a zásad ochrany osobních údajů.</p>
      </LegalSection>

      <LegalSection title="Doba uchování">
        <p>
          Údaje uchováváme po dobu nezbytnou pro vyřízení poptávky, obchodní komunikaci a případné splnění zákonných
          povinností.
        </p>
        <p>
          Pokud požádáte o výmaz údajů, vymažeme je, pokud nám v tom nebrání zákonná povinnost nebo oprávněný důvod k
          jejich dalšímu uchování.
        </p>
      </LegalSection>

      <LegalSection title="Vaše práva">
        <p>Máte právo požádat o:</p>
        <ul className="bullet-list">
          <li>informaci, jaké údaje o vás zpracováváme,</li>
          <li>opravu nepřesných údajů,</li>
          <li>omezení zpracování,</li>
          <li>výmaz údajů,</li>
          <li>námitku proti zpracování,</li>
          <li>přenositelnost údajů, pokud je použitelná.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Žádost o výmaz údajů">
        <p>
          O výmaz údajů můžete požádat e-mailem na kontaktní adresu{" "}
          <a href={`mailto:${legalContact.email}`}>{legalContact.email}</a>.
        </p>
        <p>Do předmětu e-mailu uveďte: Žádost o výmaz údajů</p>
        <p>Do zprávy uveďte e-mail nebo jiné údaje, podle kterých můžeme vaši žádost dohledat.</p>
        <p>
          Detailní pokyny jsou uvedeny také na stránce{" "}
          <Link href="/data-deletion/">Pokyny pro výmaz dat</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>Pro dotazy ke zpracování osobních údajů použijte níže uvedené kontaktní údaje.</p>
        <ContactDetails showPhone />
      </LegalSection>

      <LegalSection title="Aktualizace zásad">
        <p>Tyto zásady mohou být aktualizovány podle změn webu, služeb nebo používaných nástrojů.</p>
        <p>Poslední aktualizace: {legalLastUpdated}</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
