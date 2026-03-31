// Generated content: representative case studies. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type CaseStudySeed = {
  translationKey: string;
  locale: Locale;
  slug: string;
  title: string;
  h1: string;
  description: string;
  primaryQuery: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  situation: string[];
  approach: string[];
  outcome: string[];
  faq: FAQItem[];
  related: string[];
};

function caseStudy(seed: CaseStudySeed): ContentPage {
  const isCs = seed.locale === "cs";

  return definePage({
    translationKey: seed.translationKey,
    stage: 2,
    locale: seed.locale,
    pageType: "case_study",
    slug: seed.slug,
    segments: [isCs ? "pripadovky" : "case-studies", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "commercial",
    hero: {
      eyebrow: isCs ? "Případovka" : "Case study",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: isCs ? "Popsat podobný projekt" : "Discuss a similar project",
        href: buildInquiryHref(seed.locale),
      },
    },
    intro: seed.intro,
    sections: [
      {
        title: isCs ? "Výchozí situace" : "Starting situation",
        body: [
          isCs
            ? "Jde o reprezentativní anonymizovaný scénář založený na reálných typech projektu a problému, ne o marketingově přikrášlenou referenci."
            : "This is a representative anonymised scenario based on real project patterns, not an inflated marketing story.",
        ],
        bullets: seed.situation,
      },
      {
        title: isCs ? "Zvolený přístup" : "How the work was approached",
        body: [
          isCs
            ? "První krok nebyl maximalistický scope, ale orientace v riziku, prioritách a realistickém rozsahu první etapy."
            : "The first step was not a maximalist scope. It was understanding risk, priorities, and the right size of the first delivery phase.",
        ],
        bullets: seed.approach,
      },
      {
        title: isCs ? "Co se změnilo" : "What changed",
        body: [
          isCs
            ? "Smyslem případovky není předstírat přesná čísla. Důležité je ukázat typ změny, kterou podobný projekt klientovi přinese."
            : "The point is not to fake exact numbers. It is to show the kind of change a similar project can create.",
        ],
        bullets: seed.outcome,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.outcome,
      notFor: isCs ? ["hledání nafouknutých marketingových metrik"] : ["inflated vanity-metric storytelling"],
    },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
    note: isCs ? "Reprezentativní anonymizovaný scénář bez vymyšlených klientských čísel." : "Representative anonymised scenario with no invented client metrics.",
  });
}

export const caseStudyPages: ContentPage[] = [
  caseStudy({
    translationKey: "case-study-existing-app-takeover",
    locale: "cs",
    slug: "prevzeti-existujici-aplikace",
    title: "Převzetí existující aplikace | Bc. Ondřej Halata (halatao.cz)",
    h1: "Případovka: převzetí existující aplikace a stabilizace dalšího vývoje",
    description: "Anonymizovaná případovka takeover projektu, kde bylo potřeba převzít existující aplikaci, zmapovat rizika a vrátit projektu další směr.",
    primaryQuery: "převzetí existující aplikace případovka",
    heroTitle: "Aplikace fungovala. Každá další změna ale byla riziko.",
    heroSubtitle: "Typický takeover scénář po změně dodavatele nebo po období bez technického vedení.",
    intro: [
      "Projekt běžel v produkci, ale tým se bál zásahu do důležitých částí. Release proces byl křehký a roadmapa se zpomalovala.",
      "Klient nepotřeboval heroický rewrite. Potřeboval pochopit, co je skutečné riziko a jak navázat další vývoj bez zbytečného chaosu.",
    ],
    situation: [
      "běžící aplikace bez silné dokumentace",
      "nejistota kolem nasazení a závislostí",
      "zpomalující roadmapa",
      "vysoká opatrnost při každé změně",
    ],
    approach: [
      "rychlá orientace v architektuře a release flow",
      "mapování kritických míst a priorit",
      "stabilizace vybraných oblastí před dalším rozvojem",
      "návrh postupného backlogu místo velkého přepisu",
    ],
    outcome: [
      "lepší rozhodování o rizicích",
      "rychlejší navázání dalšího vývoje",
      "menší tlak na rewrite",
      "jasnější odpovědnost a technický směr",
    ],
    faq: [
      { question: "Je takeover vždy delší auditní projekt?", answer: "Ne. Někdy stačí krátká, ale dobře vedená úvodní fáze, která rychle ukáže hlavní rizika a priority." },
      { question: "Musí se hned měnit celá architektura?", answer: "Většinou ne. U běžících aplikací bývá lepší řešit nejdřív kritická místa a schopnost bezpečně doručovat další změny." },
      { question: "Je takový projekt vhodný i pro interní tým klienta?", answer: "Ano. Takeover může probíhat společně s interním týmem a pomoct mu získat rychlejší kontrolu nad systémem." },
    ],
    related: ["service-existing-app-takeover", "problem-app-takeover", "problem-modernize-legacy-app", "guide-how-to-take-over-an-existing-app-safely", "guide-how-to-run-app-takeover-audit", "comparison-rewrite-vs-incremental-app-improvement", "inquiry"],
  }),
  caseStudy({
    translationKey: "case-study-internal-tool-for-operations",
    locale: "cs",
    slug: "interni-nastroj-pro-operativu",
    title: "Interní nástroj pro operativu | Bc. Ondřej Halata (halatao.cz)",
    h1: "Případovka: interní nástroj pro operativu místo tabulek a ruční koordinace",
    description: "Anonymizovaná případovka interního nástroje pro operativu, který nahradil roztříštěný proces mezi tabulkami, e-maily a ruční kontrolou.",
    primaryQuery: "interní nástroj pro operativu případovka",
    heroTitle: "Operativa rostla rychleji než nástroje, které ji držely pohromadě",
    heroSubtitle: "Typický scénář, kdy tabulky a ruční domluva přestanou stačit více lidem a více stavům procesu.",
    intro: [
      "Tým potřeboval lépe řídit opakovanou administrativní agendu a mít jasný přehled o tom, kdo co řeší a v jakém stavu se případ nachází.",
      "Cílem nebylo postavit obrovský systém, ale vytvořit první funkční verzi, která odlehčí nejslabšímu místu provozu.",
    ],
    situation: [
      "stav práce rozptýlený v několika nástrojích",
      "ruční přepisování a kontroly",
      "nejasná odpovědnost mezi rolemi",
      "slabý reporting nad operativou",
    ],
    approach: [
      "pojmenování klíčového workflow",
      "návrh rolí, stavů a hlavních obrazovek",
      "dodání první užitečné etapy místo velkého scope",
      "příprava systému na další automatizaci",
    ],
    outcome: [
      "rychlejší práce týmu",
      "nižší chybovost",
      "lepší dohled nad stavem případu",
      "silnější základ pro reporting a další moduly",
    ],
    faq: [
      { question: "Musí interní nástroj vznikat celý najednou?", answer: "Nemusí. U těchto projektů bývá silnější menší první etapa s reálným provozním přínosem." },
      { question: "Lze navázat na stávající data a procesy?", answer: "Ano. Právě návaznost na reálný provoz bývá pro úspěch důležitější než samotná technologie." },
      { question: "Dá se z takového projektu postupně udělat širší interní systém?", answer: "Ano. Pokud je první verze navržená rozumně, může se stát základem pro další rozvoj." },
    ],
    related: ["service-internal-tools-development", "problem-internal-tool", "problem-replace-spreadsheets-in-process", "use-case-internal-admin-system", "use-case-service-team-ops-system", "guide-how-to-scope-a-custom-web-application", "inquiry"],
  }),
  caseStudy({
    translationKey: "case-study-multi-system-integration",
    locale: "cs",
    slug: "integrace-nekolika-systemu",
    title: "Integrace několika systémů | Bc. Ondřej Halata (halatao.cz)",
    h1: "Případovka: integrace několika systémů a omezení ruční práce",
    description: "Anonymizovaná případovka integračního projektu, kde bylo potřeba zlepšit tok dat mezi více systémy a snížit ruční koordinaci.",
    primaryQuery: "integrace několika systémů případovka",
    heroTitle: "Data procházela lidmi, protože systémy spolu mluvily jen částečně",
    heroSubtitle: "Typický scénář, kdy firma ztrácí čas na přepisování, kontrolu stavu a ruční skládání informací z více míst.",
    intro: [
      "Projekt začínal jako problém s integrací, ale rychle se ukázalo, že část problému je i v procesu a v tom, kde vznikají výjimky.",
      "Řešení proto muselo spojit technické napojení systémů s praktičtějším řízením workflow a kontrolních kroků.",
    ],
    situation: [
      "několik systémů s nejasným tokem dat",
      "ruční přenos informací mezi lidmi",
      "časté kontroly stavu",
      "reporting závislý na manuálním sběru dat",
    ],
    approach: [
      "mapování zdrojových systémů a výjimek",
      "určení prioritních integračních bodů",
      "postupná realizace s kontrolou dopadu",
      "doplnění podpůrného workflow tam, kde samotná integrace nestačila",
    ],
    outcome: [
      "méně ruční práce",
      "lepší návaznost dat",
      "menší provozní zpoždění",
      "silnější podklad pro další automatizaci",
    ],
    faq: [
      { question: "Stačí na podobný projekt jen technická integrace?", answer: "Ne vždy. Často je potřeba upravit i workflow a způsob práce s výjimkami." },
      { question: "Dá se podobný projekt dělat po částech?", answer: "Ano. U integračních projektů bývá etapové řešení nejpraktičtější." },
      { question: "Má smysl nejdřív audit?", answer: "Ano. Bez pochopení toku dat a dopadu chyb je snadné automatizovat špatné místo." },
    ],
    related: ["service-automations-and-integrations", "problem-system-integrations", "use-case-workflow-automation-tools", "tool-api-integration-checklist", "inquiry"],
  }),
  caseStudy({
    translationKey: "case-study-existing-app-takeover",
    locale: "en",
    slug: "existing-app-takeover",
    title: "Existing app takeover case study | Bc. Ondřej Halata (halatao.cz)",
    h1: "Case study: existing app takeover and delivery stabilisation",
    description: "An anonymised case-study scenario showing how an existing app takeover can reduce delivery risk and restore a practical roadmap.",
    primaryQuery: "existing app takeover case study",
    heroTitle: "The product was live, but every change felt risky",
    heroSubtitle: "A representative takeover situation after a vendor change or a period without strong technical ownership.",
    intro: [
      "The application was in production, but the team had limited confidence in touching important parts of it. Release flow was fragile and roadmap progress was slowing down.",
      "The buyer did not need a dramatic rewrite. The buyer needed clarity on real risk and a safer way to continue.",
    ],
    situation: [
      "live product with weak documentation",
      "uncertain deployment and dependency picture",
      "roadmap slowed by technical fear",
      "too much caution around routine changes",
    ],
    approach: [
      "fast orientation in architecture and release flow",
      "mapping critical areas and priorities",
      "stabilising selected parts before broader work",
      "creating an incremental improvement backlog",
    ],
    outcome: [
      "clearer risk picture",
      "faster continuation of development",
      "less rewrite pressure",
      "stronger technical direction",
    ],
    faq: [
      { question: "Does app takeover always require a long audit phase?", answer: "No. A focused first phase can often surface the main risks and priorities quickly." },
      { question: "Do you need to redesign the whole architecture immediately?", answer: "Usually not. For running apps, it is often better to secure the risky parts and improve delivery confidence first." },
      { question: "Can this work alongside the client’s internal team?", answer: "Yes. That is often the best way to rebuild control over the system quickly." },
    ],
    related: ["service-existing-app-takeover", "problem-app-takeover", "problem-modernize-legacy-app", "guide-how-to-take-over-an-existing-app-safely", "guide-how-to-run-app-takeover-audit", "comparison-rewrite-vs-incremental-app-improvement", "inquiry"],
  }),
  caseStudy({
    translationKey: "case-study-internal-tool-for-operations",
    locale: "en",
    slug: "internal-tool-for-operations",
    title: "Internal tool for operations case study | Bc. Ondřej Halata (halatao.cz)",
    h1: "Case study: an internal operations tool replacing spreadsheets and coordination overhead",
    description: "An anonymised case-study scenario showing how an internal tool can replace fragmented operational workflows and improve visibility.",
    primaryQuery: "internal tool for operations case study",
    heroTitle: "Operations were growing faster than the tooling around them",
    heroSubtitle: "A common scenario where spreadsheets and manual coordination stop scaling across several users and case states.",
    intro: [
      "The team needed a better way to handle repeated operational work and keep a reliable view of who was doing what and what state each item was in.",
      "The goal was not a massive system from day one. It was a first useful release that improved the weakest part of the workflow.",
    ],
    situation: [
      "state scattered across several tools",
      "manual checks and data copying",
      "unclear ownership between roles",
      "limited operational reporting",
    ],
    approach: [
      "identify the core workflow",
      "design roles, states, and key screens",
      "deliver a useful first phase rather than a giant scope",
      "prepare the system for future automation",
    ],
    outcome: [
      "faster team operation",
      "lower error rate",
      "better traceability of work",
      "stronger base for reporting and next modules",
    ],
    faq: [
      { question: "Does an internal tool need to be delivered all at once?", answer: "No. These projects usually benefit from a smaller first phase with clear operational value." },
      { question: "Can it build on existing data and processes?", answer: "Yes. Alignment with real operations matters more than technology fashion." },
      { question: "Can this grow into a broader internal system over time?", answer: "Yes. With a sound first version, the tool can become the base for wider process support." },
    ],
    related: ["service-internal-tools-development", "problem-internal-tool", "problem-replace-spreadsheets-in-process", "use-case-internal-admin-system", "use-case-service-team-ops-system", "guide-how-to-scope-a-custom-web-application", "inquiry"],
  }),
  caseStudy({
    translationKey: "case-study-multi-system-integration",
    locale: "en",
    slug: "multi-system-integration",
    title: "Multi-system integration case study | Bc. Ondřej Halata (halatao.cz)",
    h1: "Case study: connecting several systems and reducing manual coordination",
    description: "An anonymised case-study scenario showing how a multi-system integration project can reduce manual work and improve data flow across business operations.",
    primaryQuery: "multi-system integration case study",
    heroTitle: "Data was travelling through people because systems only talked halfway",
    heroSubtitle: "A representative scenario where the company was losing time to re-entry, manual checks, and fragmented information across several systems.",
    intro: [
      "The project started as an integration issue, but it quickly became clear that part of the problem was also process design and how exceptions were handled.",
      "The solution therefore needed both technical integration work and more usable process control around it.",
    ],
    situation: [
      "several systems with weak data continuity",
      "manual transfer of information",
      "frequent status checks",
      "reporting dependent on manual data gathering",
    ],
    approach: [
      "map source systems and exception paths",
      "prioritise the most valuable integration points",
      "deliver in stages with visible impact",
      "add supporting workflow where pure integration was not enough",
    ],
    outcome: [
      "less manual work",
      "better data continuity",
      "fewer operational delays",
      "stronger basis for future automation",
    ],
    faq: [
      { question: "Is technical integration alone enough for this type of project?", answer: "Not always. Many projects also need workflow changes and better handling of exceptions." },
      { question: "Can this be delivered in stages?", answer: "Yes. That is often the most practical way to reduce risk and prove value early." },
      { question: "Does it make sense to start with a diagnostic phase?", answer: "Yes. Without understanding the data flow and failure impact, it is easy to automate the wrong thing." },
    ],
    related: ["service-automations-and-integrations", "guide-how-to-run-automation-discovery", "problem-system-integrations", "use-case-workflow-automation-tools", "tool-api-integration-checklist", "inquiry"],
  }),
];
