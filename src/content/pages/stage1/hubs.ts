// Generated content: stage 1 section hub pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type HubSeed = {
  translationKey: string;
  locale: Locale;
  slug: string;
  segment: string;
  title: string;
  h1: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  overview: string;
  fit: string[];
  decision: string[];
  faq: FAQItem[];
  related: string[];
};

function hub(seed: HubSeed): ContentPage {
  const isCs = seed.locale === "cs";

  return definePage({
    translationKey: seed.translationKey,
    stage: 1,
    locale: seed.locale,
    pageType: "hub",
    slug: seed.slug,
    segments: [seed.segment],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.h1,
    intent: "commercial",
    hero: {
      eyebrow: isCs ? "Přehled sekce" : "Section overview",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: isCs ? "Popsat projekt" : "Discuss your project",
        href: buildInquiryHref(seed.locale),
      },
    },
    intro: seed.intro,
    sections: [
      {
        title: isCs ? "Co v sekci najdete" : "What you will find here",
        body: [seed.overview],
      },
      {
        title: isCs ? "Kdy začít právě tady" : "When to start here",
        body: [
          isCs
            ? "Tato sekce funguje jako komerční rozcestník. Pomůže vám vybrat správný typ spolupráce podle projektové situace, ne podle náhodného technologického štítku."
            : "This section works as a commercial starting point. It helps you choose the right collaboration model based on the actual project situation rather than a loose technology label.",
        ],
        bullets: seed.fit,
      },
      {
        title: isCs ? "Jak pokračovat dál" : "How to continue",
        body: [
          isCs
            ? "Nejlepší další krok je otevřít stránku nejbližší aktuální situaci a odtud pokračovat do souvisejícího problému, srovnání nebo inquiry flow."
            : "The best next move is to open the page closest to your current situation and then continue into the linked problem, comparison, or inquiry path.",
        ],
        bullets: seed.decision,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.fit,
      notFor: isCs ? ["pasivní procházení bez konkrétní projektové otázky"] : ["passive browsing with no concrete project question"],
    },
    cta: isCs
      ? {
          label: "Nezávazně probrat spolupráci",
          href: "/cs/popsat-projekt",
          note: "Stačí stručně popsat projektovou situaci, cíl a omezení. Navrhnu rozumný další krok.",
        }
      : {
          label: "Explore the project fit",
          href: "/en/discuss-your-project",
          note: "A short summary of the current situation and target outcome is enough to suggest the next step.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const stage1HubPages: ContentPage[] = [
  hub({
    translationKey: "hub-services",
    locale: "cs",
    slug: "sluzby",
    segment: "sluzby",
    title: "Služby pro webové aplikace, takeover a interní systémy | Bc. Ondřej Halata",
    h1: "Služby pro firmy, které potřebují dodat, převzít nebo zlepšit důležitou aplikaci",
    description: "Přehled hlavních služeb: vývoj webových aplikací na míru, převzetí existující aplikace, interní systémy, systémy pro poptávky, nabídky a realizaci zakázek, automatizace, integrace a kontraktní spolupráce.",
    heroTitle: "Vyberte službu podle projektové situace, ne podle buzzwordu",
    heroSubtitle: "Sekce pro firmy a týmy, které řeší nový vývoj, takeover, interní systém, automatizace nebo potřebu seniorní kontraktní kapacity.",
    intro: [
      "Tato sekce je hlavní komerční vstup pro buyery, kteří už vědí, že řeší software projekt nebo delivery problém s reálným dopadem na firmu.",
      "Najdete tu služby pro nový vývoj, převzetí existující aplikace, interní nástroje, systémy pro poptávky, nabídky a realizaci, automatizace a integrace i přímou kontraktní spolupráci uvnitř týmu.",
    ],
    overview: "Každá child page vysvětluje, kdy daná služba dává smysl, jaké typy zadání mívají dobrý fit, co typicky dodávám a jak vypadá rozumný další krok.",
    fit: [
      "nový software pro důležitý proces",
      "běžící aplikace po dodavateli nebo bez ownershipu",
      "interní workflow a reporting, které už neudrží tabulky",
      "manuální práce a přepisování mezi několika systémy",
      "projekt, kterému chybí seniorní technický ownership",
    ],
    decision: [
      "začněte službou nejbližší aktuální situaci",
      "pokračujte na související problem page nebo comparison page",
      "pokud už je fit jasný, přejděte rovnou na popis projektu",
    ],
    faq: [
      { question: "Jak vybrat správnou službu?", answer: "Podle hlavního tlaku v projektu: nový build, takeover, interní systém, automatizace nebo doplnění seniorní kapacity do týmu." },
      { question: "Lze služby kombinovat?", answer: "Ano. Běžná kombinace je takeover a navazující rozvoj, interní systém s integracemi nebo kontraktní podpora uvnitř existujícího týmu." },
      { question: "Je kontraktní spolupráce součástí stejné nabídky?", answer: "Ano. Jde o samostatný model zapojení pro týmy, které potřebují seniorní delivery podporu bez plně agenturního setupu." },
    ],
    related: [
      "service-custom-web-app-development",
      "service-existing-app-takeover",
      "service-internal-tools-development",
      "service-request-offer-delivery-system",
      "service-automations-and-integrations",
      "contract-support",
    ],
  }),
  hub({
    translationKey: "hub-services",
    locale: "en",
    slug: "services",
    segment: "services",
    title: "Services for custom apps, takeover, internal tools, and contract support | Bc. Ondřej Halata",
    h1: "Services for companies that need to build, take over, or improve important software",
    description: "Overview of custom web application development, existing app takeover, internal tools, request-offer-delivery systems, automations, integrations, and senior contract development support.",
    heroTitle: "Choose the service by the delivery situation, not the buzzword",
    heroSubtitle: "A commercial overview for companies facing new product delivery, inherited-app risk, internal-tool needs, automation pressure, or the need for senior contract capacity.",
    intro: [
      "This section is the main commercial entry point for buyers who already know they have a real software delivery problem or a project with operational weight.",
      "It covers greenfield delivery, existing app takeover, internal tooling, systems for requests, offers, and delivery jobs, automations and integrations, and senior contract support inside an existing team.",
    ],
    overview: "Each child page explains where the service fits, which kinds of projects are a strong match, what the work typically includes, and what the next sensible step should be.",
    fit: [
      "new business-critical software",
      "running applications after a supplier or team change",
      "internal workflows that outgrew spreadsheets and inboxes",
      "manual cross-system work slowing operations down",
      "projects missing senior technical ownership",
    ],
    decision: [
      "start with the service closest to the current situation",
      "follow into the linked problem or comparison pages",
      "move to inquiry once the project fit is clear enough to discuss",
    ],
    faq: [
      { question: "How should I choose the right service page?", answer: "Start with the strongest source of delivery pressure: new build, inherited app, internal tool, automation, or embedded senior contract support." },
      { question: "Can several service models combine?", answer: "Yes. Takeover often leads into structured improvement, internal tools often overlap with integrations, and contract support can complement both." },
      { question: "Is contract support part of the same offer?", answer: "Yes. It is a defined delivery model for teams that need direct senior capacity inside their existing setup." },
    ],
    related: [
      "service-custom-web-app-development",
      "service-existing-app-takeover",
      "service-internal-tools-development",
      "service-request-offer-delivery-system",
      "service-automations-and-integrations",
      "contract-support",
    ],
  }),
  hub({
    translationKey: "hub-problems",
    locale: "cs",
    slug: "problemy",
    segment: "problemy",
    title: "Projektové problémy: takeover, interní systém, integrace a rescue | Bc. Ondřej Halata",
    h1: "Typické projektové situace, které firmy řeší dřív než konkrétní technologii",
    description: "Přehled problémových stránek pro takeover aplikace, interní systém, integrace, záchranu rozdělaného projektu, pomalou aplikaci nebo potřebu seniorní kapacity.",
    heroTitle: "Začněte podle problému, ne podle technologie",
    heroSubtitle: "Sekce pro chvíli, kdy ještě není jasné, jaký model spolupráce nebo řešení bude správný, ale tlak v projektu už je zřejmý.",
    intro: [
      "Problem pages pomáhají buyerovi nejdřív pojmenovat situaci a riziko, teprve potom vybírat konkrétní službu nebo technický směr.",
      "Najdete tu běžné situace kolem převzetí aplikace, interního systému, integrací, chybějící seniorní kapacity, klientského portálu i záchrany rozdělaného projektu.",
    ],
    overview: "Každá child page popisuje typické symptomy, proč je rizikové nic nedělat, jak poznat dobrý fit a jaký první krok obvykle dává smysl.",
    fit: [
      "situace, kde je nejprve potřeba srovnat problém",
      "projekty s nejasným delivery modelem",
      "firmy řešící kombinaci technického a provozního tlaku",
      "buyery, kteří potřebují lepší rámec před budgetem nebo scopem",
    ],
    decision: [
      "otevřete problém nejbližší aktuální realitě",
      "z něj pokračujte na odpovídající service page nebo guide",
      "pokud je situace dost konkrétní, přejděte na popis projektu",
    ],
    faq: [
      { question: "Je lepší začít problémovou nebo službovou stránkou?", answer: "Pokud si nejste jistí správným modelem spolupráce, problémová stránka bývá lepší start než služba." },
      { question: "Jsou tyto stránky jen SEO rozcestník?", answer: "Ne. Jsou psané jako rozhodovací obsah pro reálné delivery situace a vedou dál na konkrétní komerční další krok." },
      { question: "Vedou problémové stránky i na služby a inquiry?", answer: "Ano. Každá je propojená s nejbližší službou, relevantním průvodcem a inquiry flow." },
    ],
    related: [
      "problem-app-takeover",
      "problem-rescue-incomplete-project",
      "problem-slow-hard-to-maintain-app",
      "problem-senior-contract-capacity",
      "problem-client-portal",
      "problem-requests-offers-delivery-in-spreadsheets",
    ],
  }),
  hub({
    translationKey: "hub-problems",
    locale: "en",
    slug: "problems",
    segment: "problems",
    title: "Project problems: inherited apps, internal tools, integrations, and rescue work | Bc. Ondřej Halata",
    h1: "Project situations that usually matter before the technology choice",
    description: "Overview of problem pages covering inherited app takeover, internal tools, integrations, stalled projects, weak performance, and the need for senior contract capacity.",
    heroTitle: "Start from the problem shape, not the implementation label",
    heroSubtitle: "Useful when the delivery model is still unclear but the pressure inside the project is already real.",
    intro: [
      "These pages help buyers describe the situation and risk first, and only then choose the right service or technical direction.",
      "The section covers inherited applications, internal tools, integrations, missing senior capacity, client portals, slow products, and incomplete projects that need to be rescued.",
    ],
    overview: "Each child page explains the main symptoms, the cost of leaving the situation alone, what a strong fit looks like, and which next step usually makes sense.",
    fit: [
      "teams that need to frame the problem before choosing a supplier model",
      "projects where the delivery path is still unclear",
      "buyers dealing with both technical and operational pressure",
      "companies trying to improve the decision frame before budget or scope",
    ],
    decision: [
      "open the problem page closest to current reality",
      "follow into the linked service or guide pages",
      "move to inquiry when the situation is concrete enough to discuss directly",
    ],
    faq: [
      { question: "Should I start here or on the services section?", answer: "Start here when the problem is clearer than the preferred delivery model." },
      { question: "Are these pages only an SEO index?", answer: "No. They are written as real decision support for delivery buyers and connect directly to the commercial next step." },
      { question: "Do the problem pages lead into services and inquiry?", answer: "Yes. Each one is wired into the relevant service, guide, and inquiry flow." },
    ],
    related: [
      "problem-app-takeover",
      "problem-rescue-incomplete-project",
      "problem-slow-hard-to-maintain-app",
      "problem-senior-contract-capacity",
      "problem-client-portal",
      "problem-requests-offers-delivery-in-spreadsheets",
    ],
  }),
];
