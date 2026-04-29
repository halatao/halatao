// Generated content: Czech location pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem } from "@/content/types";

type LocationSeed = {
  translationKey: string;
  slug: string;
  cityNominative: string;
  cityLocative: string;
  cityAccusative: string;
  title: string;
  h1: string;
  description: string;
  primaryQuery: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  localContext: string;
  scenarios: string[];
  deliverables: string[];
  followUp: string[];
  process: string[];
  faq: FAQItem[];
  related: string[];
};

function location(seed: LocationSeed): ContentPage {
  return definePage({
    translationKey: seed.translationKey,
    stage: 3,
    locale: "cs",
    pageType: "location",
    slug: seed.slug,
    segments: ["lokality", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "commercial",
    hero: {
      eyebrow: "Lokalita",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: { label: "Popsat projekt", href: buildInquiryHref("cs") },
    },
    intro: seed.intro,
    sections: [
      {
        title: `Pro jaké firmy v ${seed.cityLocative} to dává smysl`,
        body: [seed.localContext],
        bullets: seed.scenarios,
      },
      {
        title: "Co může být výstupem první etapy",
        body: [
          "První etapa má přinést konkrétní posun, ne velký projekt bez jistoty. Obvykle jde o zmapování procesu, návrh řešení a dodání části, která má měřitelný provozní dopad.",
        ],
        bullets: seed.deliverables,
      },
      {
        title: "S čím lze navázat",
        body: [
          `Po první etapě lze pokračovat podle toho, co je pro firmu v ${seed.cityLocative} nejdůležitější: další rozvoj aplikace, automatizace procesů, integrace, reporting nebo stabilizace existujícího systému.`,
        ],
        bullets: seed.followUp,
      },
      {
        title: "Jak spolupráce probíhá",
        body: [
          `Spolupráce s firmami v ${seed.cityLocative} může probíhat vzdáleně, případně s osobním workshopem podle povahy projektu. Důležitější než adresa je rychlé pochopení procesu, rizik a první smysluplné etapy.`,
        ],
        bullets: seed.process,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.scenarios,
      notFor: ["obecný adresář firem bez konkrétního projektového kontextu"],
    },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const locationPages: ContentPage[] = [
  location({
    translationKey: "location-praha",
    slug: "praha",
    cityNominative: "Praha",
    cityLocative: "Praze",
    cityAccusative: "Prahu",
    title: "Vývoj webových aplikací Praha | Takeover, portály a interní systémy",
    h1: "Vývoj webových aplikací na míru pro firmy v Praze",
    description: "Vývoj webových aplikací, klientských portálů, interních systémů, takeover projektů a automatizací pro firmy v Praze.",
    primaryQuery: "vývoj webových aplikací Praha",
    heroTitle: "Vývoj webových aplikací, portálů a interních systémů pro firmy v Praze",
    heroSubtitle: "Pomáhám pražským firmám a týmům navrhnout, převzít nebo rozvíjet webovou aplikaci, klientský portál, interní systém nebo automatizaci důležitého procesu.",
    intro: [
      "Praha má silné produktové, B2B i provozní týmy, které často řeší kombinaci klientských portálů, interních systémů, integrací a navázání na existující aplikace.",
      "Spolupráce dává smysl tam, kde aplikace přímo ovlivňuje provoz firmy a je potřeba zkušenější technické vedení, takeover nebo vývoj řešení na míru.",
    ],
    localContext: "Nejčastěji jde o firmy, které už mají existující produkt, interní workflow nebo více systémů a potřebují je stabilizovat, propojit nebo posunout bez zbytečného přepisování všeho od začátku.",
    scenarios: [
      "klientský nebo partnerský portál pro B2B provoz",
      "takeover existující aplikace po původním dodavateli",
      "interní systém pro tým, který přerostl SaaS nebo Excel",
      "automatizace ruční práce mezi CRM, ERP, e-shopem a interními nástroji",
      "seniorní kontraktní zapojení do existujícího vývojového týmu",
    ],
    deliverables: [
      "návrh první verze webové aplikace nebo portálu",
      "audit a stabilizační plán pro převzetí aplikace",
      "rozpad interního systému podle rolí, dat a workflow",
      "prioritizace integrací a automatizací podle dopadu",
    ],
    followUp: [
      "vývoj webové aplikace na míru",
      "převzetí a stabilizace existující aplikace",
      "klientský portál nebo partnerský portál",
      "interní systém a reporting pro provozní tým",
      "kontraktní spolupráce uvnitř existujícího týmu",
    ],
    process: [
      "úvodní call nad situací, cílem a riziky",
      "workshop nebo technické mapování podle potřeby",
      "návrh první etapy s realistickým rozsahem",
      "postupná realizace a průběžné rozhodování nad skutečným dopadem",
    ],
    faq: [
      { question: "Je možné spolupracovat i plně remote?", answer: "Ano. Většina spolupráce může běžet vzdáleně. Osobní setkání dává smysl hlavně u workshopu, takeoveru nebo důležitých projektových milníků." },
      { question: "Děláte i takeover projektů v Praze?", answer: "Ano. Takeover a stabilizace existujících aplikací po původním dodavateli je častý typ spolupráce." },
      { question: "Je potřeba mít připravené detailní zadání?", answer: "Ne. Pro začátek stačí kontext, popis problému a očekávaný výsledek. První etapa se dá navrhnout společně." },
    ],
    related: ["service-custom-web-app-development", "service-existing-app-takeover", "service-internal-tools-development", "contract-support"],
  }),
  location({
    translationKey: "location-brno",
    slug: "brno",
    cityNominative: "Brno",
    cityLocative: "Brně",
    cityAccusative: "Brno",
    title: "Vývoj webových aplikací Brno | Interní systémy a aplikace na míru",
    h1: "Vývoj webových aplikací a interních systémů pro firmy v Brně",
    description: "Vývoj webových aplikací na míru, interních systémů, takeover projektů a automatizací pro firmy a týmy v Brně.",
    primaryQuery: "vývoj webových aplikací Brno",
    heroTitle: "Vývoj webových aplikací a interních systémů pro firmy v Brně",
    heroSubtitle: "Pomáhám firmám a týmům v Brně navrhnout nebo převzít webovou aplikaci, interní systém, API integraci, dashboard nebo automatizaci provozního workflow.",
    intro: [
      "Brněnské firmy často řeší kombinaci produktového vývoje, interní operativy a napojení více systémů. To je prostředí, kde dává smysl vývoj na míru, interní systém nebo bezpečný takeover existující aplikace.",
      "Důležitý je praktický přístup: rychle se zorientovat v procesu, rizicích a technickém stavu a navrhnout první etapu, která přinese reálný provozní přínos.",
    ],
    localContext: "Typický fit jsou produktové firmy, interní týmy a provozy, kde tabulky, e-maily nebo sada nespojených nástrojů začínají brzdit delivery, reporting nebo každodenní práci lidí.",
    scenarios: [
      "vývoj webové aplikace na míru pro produktový nebo interní tým",
      "interní systém místo tabulek, e-mailů a ruční operativy",
      "napojení více nástrojů přes API",
      "takeover existující aplikace po změně dodavatele",
      "dashboard nebo reporting pro provozní rozhodování",
    ],
    deliverables: [
      "technický návrh webové aplikace nebo interního systému",
      "MVP rozsah první použitelné verze",
      "audit existující aplikace, prostředí a release procesu",
      "návrh API integrací, datového toku a reportingu",
    ],
    followUp: [
      "vývoj aplikace na míru",
      "interní systém pro operativu nebo administrativu",
      "automatizace a integrace přes API",
      "dashboard pro management nebo provoz",
      "stabilizace a převzetí aplikace",
    ],
    process: [
      "úvodní zmapování procesu, rolí a technických omezení",
      "návrh první etapy podle dopadu a rizik",
      "realizace v menších krocích s průběžnou zpětnou vazbou",
      "navázání rozvojem, stabilizací nebo integracemi podle priorit",
    ],
    faq: [
      { question: "Řešíte i menší první etapy nebo jen velké projekty?", answer: "Ano. Často je nejlepší začít menší etapou, která ověří fit, sníží nejistotu a přinese první hodnotu do provozu." },
      { question: "Je možné navázat na existující vývojový tým v Brně?", answer: "Ano. Kontraktní spolupráce uvnitř existujícího týmu je běžný model, hlavně u takeoveru, architektury nebo konkrétního workstreamu." },
      { question: "Pomůžete i s interním systémem z tabulek a e-mailu?", answer: "Ano. Náhrada tabulek, e-mailů a ruční operativy interním systémem je typický scénář pro vývoj na míru." },
    ],
    related: ["service-internal-tools-development", "use-case-internal-admin-system", "service-custom-web-app-development", "inquiry"],
  }),
  location({
    translationKey: "location-ostrava",
    slug: "ostrava",
    cityNominative: "Ostrava",
    cityLocative: "Ostravě",
    cityAccusative: "Ostravu",
    title: "Automatizace procesů a interní systémy Ostrava | Bc. Ondřej Halata",
    h1: "Automatizace procesů a interní systémy pro firmy v Ostravě",
    description: "Vývoj interních systémů, automatizace procesů, reporting a převzetí existujících aplikací pro firmy v Ostravě a Moravskoslezském kraji.",
    primaryQuery: "automatizace procesů Ostrava",
    heroTitle: "Automatizace procesů, interní systémy a reporting pro firmy v Ostravě",
    heroSubtitle: "Pomáhám firmám v Ostravě a Moravskoslezském kraji nahradit ruční práci, Excel, e-maily a starší interní aplikace použitelným systémem nebo automatizací.",
    intro: [
      "Ostrava a Moravskoslezský kraj mají silné provozní firmy, kde software často přímo zasahuje do obchodu, realizace, servisu, výroby, administrativy a reportingu.",
      "Spolupráce dává smysl tam, kde provoz drží Excel, e-maily, starší interní aplikace nebo ruční přepisování dat mezi nástroji a firma potřebuje bezpečný technický posun.",
    ],
    localContext: "Typicky jde o firmy s provozními procesy, kde se informace předávají mezi obchodem, realizací, servisem, výrobou a administrativou. Cílem bývá lepší evidence zakázek, reporting, integrace nebo stabilizace starší aplikace.",
    scenarios: [
      "evidence poptávek, nabídek a zakázek místo Excelu a e-mailů",
      "dashboard pro management nad daty z více systémů",
      "automatizace ručního přepisování dat mezi nástroji",
      "převzetí a stabilizace starší interní aplikace",
      "interní systém pro servisní nebo provozní tým",
    ],
    deliverables: [
      "mapa provozního procesu a největších ručních ztrát",
      "návrh interního systému pro evidenci zakázek nebo servisní workflow",
      "první automatizace přepisu dat nebo napojení přes API",
      "dashboard nad daty z více systémů",
      "takeover audit starší interní aplikace",
    ],
    followUp: [
      "interní systém pro obchod, realizaci nebo servis",
      "automatizace procesů a integrace nástrojů",
      "reporting a dashboard pro management",
      "převzetí a stabilizace existující aplikace",
      "další rozvoj podle provozního přínosu",
    ],
    process: [
      "pojmenování ručních kroků, přepisů a úzkých míst v procesu",
      "prioritizace první etapy podle času, chybovosti a dopadu",
      "návrh dat, rolí, workflow a integračních vazeb",
      "postupná realizace bez zbytečně velkého projektu na začátku",
    ],
    faq: [
      { question: "Je možné řešit projekt lokálně i remote?", answer: "Ano. Obě varianty jsou možné podle potřeby projektu a týmu. U provozních procesů někdy dává smysl úvodní workshop nad reálným workflow." },
      { question: "Má smysl ozvat se i se starší interní aplikací?", answer: "Ano. Převzetí a stabilizace starší aplikace je často lepší první krok než unáhlený rewrite." },
      { question: "Je služba vhodná i pro výrobní nebo provozní firmu?", answer: "Ano. Právě firmy s provozním workflow, servisem, výrobou, zakázkami a více systémy často z interního systému nebo automatizace těží nejvíc." },
    ],
    related: ["service-existing-app-takeover", "service-automations-and-integrations", "service-internal-tools-development", "contract-support"],
  }),
];
