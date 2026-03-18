// Generated content: Czech location pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem } from "@/content/types";

type LocationSeed = {
  translationKey: string;
  slug: string;
  city: string;
  title: string;
  h1: string;
  description: string;
  intro: string[];
  fit: string[];
  services: string[];
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
    primaryQuery: `${seed.city} vývoj webových aplikací`,
    intent: "commercial",
    hero: {
      eyebrow: "Lokalita",
      title: `Vývoj webových aplikací a interních systému pro ${seed.city}`,
      subtitle: "Spolupráce muže probíhat na dálku i osobne podle potreby projektu. Duležitejší než adresa je schopnost rychle se zorientovat v problému a dodat bezpecný další krok.",
      primaryCta: { label: "Popsat projekt", href: buildInquiryHref("cs") },
    },
    intro: seed.intro,
    sections: [
      { title: `Kdy dává spolupráce v ${seed.city} smysl`, body: ["Nejde o lokální SEO stránku bez obsahu. Stránka je urcená firmám, které hledají partnera pro konkrétní projektovou situaci: nový vývoj, takeover, interní systém nebo automatizaci."], bullets: seed.fit },
      { title: "S cím lze navázat", body: ["Typicky jde o webové aplikace na míru, prevzetí existujících aplikací, interní nástroje, automatizace a externí kontraktní spolupráci na projektu."], bullets: seed.services },
      { title: "Jak spolupráce probíhá", body: ["Úvodní cást lze rešit vzdálene. Pokud dává smysl osobní setkání nebo workshop, lze ho domluvit podle povahy projektu."], bullets: ["úvodní call nebo workshop", "návrh první etapy", "prubežná realizace v menších krocích"] },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.fit, notFor: ["obecný adresár firem bez projektového kontextu"] },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const locationPages: ContentPage[] = [
  location({
    translationKey: "location-praha",
    slug: "praha",
    city: "Prahu",
    title: "Vývoj webových aplikací Praha | Bc. Ondřej Halata (halatao.cz)",
    h1: "Vývoj webových aplikací na míru pro firmy v Praze",
    description: "Vývoj webových aplikací na míru, takeover existujících aplikací, interní systémy a automatizace pro firmy v Praze.",
    intro: ["Praha má silné produktové i provozní týmy, které casto reší složitejší kombinaci interních systému, klientských portálu a navázání na existující aplikace.", "Spolupráce dává smysl tam, kde je potreba zkušenejší technické vedení, takeover nebo vývoj rešení na míru pro duležitý proces."],
    fit: ["produktové a interní týmy", "takeover existující aplikace", "interní systémy a portály", "automatizace napojená na více nástroju"],
    services: ["vývoj webových aplikací na míru", "prevzetí existující aplikace", "interní systémy na míru", "automatizace a integrace", "externí kontraktní spolupráce"],
    faq: [
      { question: "Je možné spolupracovat i plne remote?", answer: "Ano. Vetšina spolupráce muže bežet vzdálene. Osobní setkání dává smysl hlavne u workshopu nebo kritických milníku." },
      { question: "Deláte i takeover projektu v Praze?", answer: "Ano. Práve takeover a stabilizace existujících aplikací je silný typ spolupráce." },
      { question: "Je potreba mít pripravené detailní zadání?", answer: "Ne. Pro zacátek stací kontext, problém a ocekávaný výsledek." },
    ],
    related: ["service-custom-web-app-development", "service-existing-app-takeover", "service-internal-tools-development", "contract-support"],
  }),
  location({
    translationKey: "location-brno",
    slug: "brno",
    city: "Brno",
    title: "Vývoj webových aplikací Brno | Bc. Ondřej Halata (halatao.cz)",
    h1: "Vývoj webových aplikací a interních systému pro firmy v Brne",
    description: "Vývoj webových aplikací, interních systému, takeover projektu a automatizací pro firmy a týmy v Brne.",
    intro: ["Brnenské firmy casto reší kombinaci interní operativy, produktového vývoje a napojení více systému. To je presne prostredí, kde dává smysl vývoj na míru nebo takeover existující aplikace.", "Duležitý je praktický prístup: rychle se zorientovat v problému a navrhnout první etapu, která má reálný provozní prínos."],
    fit: ["interní nástroje a admin systémy", "produktové aplikace v rustu", "potreba lepšího delivery a takeoveru", "workflow a reporting"],
    services: ["interní systémy na míru", "vývoj aplikací na míru", "automatizace a integrace", "externí kontraktní spolupráce", "stabilizace a prevzetí aplikací"],
    faq: [
      { question: "Rešíte i menší první etapy nebo jen velké projekty?", answer: "Ano. Casto zacínáme práve menší etapou, která overí fit a prinese první hodnotu." },
      { question: "Je možné navázat na existující vývojový tým v Brne?", answer: "Ano. Kontraktní spolupráce uvnitr existujícího týmu je bežný model." },
      { question: "Pomužete i s interním systémem z tabulek a e-mailu?", answer: "Ano. To je velmi typický scénár pro interní nástroj na míru." },
    ],
    related: ["service-internal-tools-development", "use-case-internal-admin-system", "service-custom-web-app-development", "inquiry"],
  }),
  location({
    translationKey: "location-ostrava",
    slug: "ostrava",
    city: "Ostravu",
    title: "Vývoj webových aplikací Ostrava | Bc. Ondřej Halata (halatao.cz)",
    h1: "Vývoj webových aplikací, takeover a automatizace pro firmy v Ostrave",
    description: "Vývoj webových aplikací na míru, interních systému, takeover projektu a automatizací pro firmy v Ostrave a okolí.",
    intro: ["Ostrava a okolí jsou silné v provozních firmách, interních procesech a systémech, které potrebují víc než jen standardní SaaS bez prizpusobení.", "Spolupráce dává smysl tam, kde je potreba rešit konkrétní byznys problém pres software: aplikaci, interní nástroj, integrace nebo takeover existujícího rešení."],
    fit: ["firmy s provozne duležitým workflow", "potreba prevzít a zlepšit existující aplikaci", "automatizace mezi více systémy", "interní nástroje pro operativu a reporting"],
    services: ["vývoj webových aplikací na míru", "prevzetí a rozvoj existujících aplikací", "automatizace a integrace", "interní systémy", "kontraktní spolupráce"],
    faq: [
      { question: "Je možné rešit projekt lokálne i remote?", answer: "Ano. Obe varianty jsou možné podle potreby projektu a týmu." },
      { question: "Má smysl ozvat se i s rozpracovanou aplikací?", answer: "Ano. Takeover nebo stabilizace rozpracovaného projektu je castá situace." },
      { question: "Je služba vhodná i pro výrobní nebo provozní firmu?", answer: "Ano. Práve firmy s interním workflow a více systémy casto z custom software teží nejvíc." },
    ],
    related: ["service-existing-app-takeover", "service-automations-and-integrations", "service-internal-tools-development", "contract-support"],
  }),
];


