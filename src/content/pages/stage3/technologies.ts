// Generated content: technology decision pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type TechSeed = {
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
  reasons: string[];
  cautions: string[];
  fit: string[];
  faq: FAQItem[];
  related: string[];
};

function technology(seed: TechSeed): ContentPage {
  const isCs = seed.locale === "cs";
  return definePage({
    translationKey: seed.translationKey,
    stage: 3,
    locale: seed.locale,
    pageType: "technology",
    slug: seed.slug,
    segments: [isCs ? "technologie" : "technology", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "decision",
    hero: {
      eyebrow: isCs ? "Technologie" : "Technology",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: { label: isCs ? "Probrat podobný projekt" : "Discuss a similar project", href: buildInquiryHref(seed.locale) },
    },
    intro: seed.intro,
    sections: [
      { title: isCs ? "Kde tato technologie dává smysl" : "Where this technology is a strong fit", body: [isCs ? "Technologie má dávat smysl projektu, ne jen preferenci vývojáře." : "Technology should fit the product and delivery reality, not just developer preference."], bullets: seed.reasons },
      { title: isCs ? "Na co si dát pozor" : "What to be careful about", body: [isCs ? "Silné stránky technologie se snadno ztratí, pokud je nasazená do špatného kontextu nebo bez rozumné architektury." : "A technology’s strengths disappear quickly when it is used in the wrong context or without a sound architecture."], bullets: seed.cautions },
      { title: isCs ? "Typický fit pro business projekt" : "Typical fit for a business project", body: [isCs ? "Volba technologie by měla zlepšit rychlost delivery, dlouhodobou udržitelnost a provozní jistotu." : "The choice should support delivery speed, maintainability, and operational confidence over time."], bullets: seed.fit },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.fit, notFor: seed.cautions },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const technologyPages: ContentPage[] = [
  technology({
    translationKey: "technology-nextjs-for-business-applications",
    locale: "cs",
    slug: "nextjs-pro-byznys-aplikace",
    title: "Next.js pro byznys aplikace | Bc. Ondřej Halata",
    h1: "Next.js pro byznys aplikace, portály a obsahově silné weby",
    description: "Kdy dává Next.js smysl pro byznys aplikace, klientské portály a kombinaci aplikační a obsahové vrstvy.",
    primaryQuery: "nextjs pro byznys aplikace",
    heroTitle: "Next.js je praktický nástroj, ne módní nálepka",
    heroSubtitle: "Silný je tam, kde potřebujete kombinovat obsah, SEO, rychlé načítání a aplikační logiku v jednom rozumném stacku.",
    intro: ["Next.js je vhodný pro projekty, které nejsou čistě interní nástroj bez indexace. Často pomáhá tam, kde se potkává obsah, obchodní stránka a aplikace.", "U business projektu je výhodné, že lze kombinovat statické generování, serverové renderování i aplikační části bez několika oddělených stacků."],
    reasons: ["marketingové a obsahové stránky vedle aplikace", "SEO nebo AI discovery požadavky", "rychlejší první načtení a lepší UX", "jednotný routing a sdílená architektura"],
    cautions: ["použití tam, kde stačí jednoduchá SPA", "přehnaná složitost bez jasného důvodu", "slabá práce s datovými hranicemi"],
    fit: ["firemní web s komerčními landing pages", "klientský portál", "business aplikace s obsahem a SEO", "projekt, kde je důležitá statika i dynamika"],
    faq: [
      { question: "Je Next.js vhodný i pro interní systémy?", answer: "Ano, ale ne vždy je to nutné. Důležité je, zda projekt využije jeho výhody." },
      { question: "Pomůže Next.js automaticky výkonu?", answer: "Ne automaticky. Výsledný výkon závisí i na architektuře, datech a implementaci." },
      { question: "Je to dobrá volba pro nový firemní web i aplikaci v jednom?", answer: "Ano, právě tam bývá velmi silný." },
    ],
    related: ["comparison-nextjs-vs-spa", "service-custom-web-app-development", "home", "inquiry"],
  }),
  technology({
    translationKey: "technology-typescript-for-large-web-projects",
    locale: "cs",
    slug: "typescript-pro-vetsi-projekty",
    title: "TypeScript pro větší projekty | Bc. Ondřej Halata",
    h1: "TypeScript pro větší webové projekty a dlouhodobý rozvoj",
    description: "Kdy a proč dává TypeScript smysl ve větších webových projektech, interních systémech a týmech s delším horizontem vývoje.",
    primaryQuery: "typescript pro větší projekty",
    heroTitle: "TypeScript není samoúčelná přísnost. Je to nástroj na snížení zmatku.",
    heroSubtitle: "Největší přínos má tam, kde systém roste, zapojuje se více lidí a chyby v datech nebo rozhraních jsou drahé.",
    intro: ["Ve větších projektech bývá problém méně v syntaxi a více v tom, že nikdo přesně neví, co kam teče a co očekává.", "TypeScript pomáhá vytvářet pevnější hranice mezi částmi systému a snižuje množství chyb, které se jinak ukážou až v provozu."],
    reasons: ["větší tým nebo delší horizont vývoje", "složitější data a integrační rozhraní", "časté refaktory a rozvoj", "potřeba bezpečnějších změn"],
    cautions: ["přílišná typová byrokracie bez hodnoty", "slabá disciplína kolem sdílených typů", "mylná představa, že typy vyřeší architekturu"],
    fit: ["větší webová aplikace", "interní systém s více moduly", "produkt s více integracemi", "týmová spolupráce nad jedním kódem"],
    faq: [
      { question: "Je TypeScript nutný i pro menší projekt?", answer: "Ne vždy. Nejvíc pomáhá tam, kde je vyšší komplexita nebo delší životnost systému." },
      { question: "Není TypeScript pomalejší na vývoj?", answer: "Krátkodobě může přidat disciplínu navíc, ale u větších projektů se to často vrátí v jistotě a menší chybovosti." },
      { question: "Řeší TypeScript i kvalitu návrhu?", answer: "Ne sám o sobě. Je to podpůrný nástroj, ne náhrada za architekturu." },
    ],
    related: ["guide-how-to-stabilize-a-slow-business-app", "service-existing-app-takeover", "contract-support", "comparison-rewrite-vs-incremental-app-improvement"],
  }),
  technology({
    translationKey: "technology-api-integrations",
    locale: "cs",
    slug: "api-integrace",
    title: "API integrace pro firmy | Bc. Ondřej Halata",
    h1: "API integrace pro firemní systémy, workflow a portály",
    description: "Kdy dávají API integrace smysl, co je potřeba pohlídat a jak se vyhnout křehkému propojení systémů bez provozní logiky.",
    primaryQuery: "api integrace",
    heroTitle: "API integrace není jen spojení dvou endpointů",
    heroSubtitle: "Je to způsob, jak bezpečně udržet tok dat, stavy a odpovědnost mezi systémy, které mají různou logiku i spolehlivost.",
    intro: ["Dobrá API integrace se nepozná podle množství endpointů, ale podle toho, že data proudí spolehlivě a výjimky jsou zvládnutelné.", "U firemních procesů bývá stejně důležité řešit validace, retry logiku, monitoring a to, kdo vidí problém, když se tok přeruší."],
    reasons: ["propojení ERP, CRM, e-shopu a interního systému", "synchronizace důležitých dat", "automatizace návazných kroků", "sjednocení podkladů pro reporting"],
    cautions: ["integrace bez řešení výjimek", "přímé vazby bez kontroly a monitoringu", "podcenění mapování dat a ownershipu"],
    fit: ["více systémů s ručním přepisováním", "workflow závislé na několika datech", "portály a interní nástroje s návaznostmi"],
    faq: [
      { question: "Stačí API dokumentace pro úspěšnou integraci?", answer: "Ne. Je potřeba rozumět i procesu, datům, chybovým stavům a provozní realitě." },
      { question: "Lze dělat integrace po částech?", answer: "Ano. U většiny projektů je to rozumnější než velký integrační skok naráz." },
      { question: "Co když některý systém není na integraci ideální?", answer: "I to je běžné. Pak je potřeba upravit návrh, doplnit workflow nebo zvolit odolnější integrační vrstvu." },
    ],
    related: ["service-automations-and-integrations", "tool-api-integration-checklist", "use-case-workflow-automation-tools", "case-study-multi-system-integration"],
  }),
  technology({
    translationKey: "technology-postgresql-for-internal-tools",
    locale: "cs",
    slug: "postgresql-pro-interni-systemy",
    title: "PostgreSQL pro interní systémy | Bc. Ondřej Halata",
    h1: "PostgreSQL pro interní systémy a business aplikace",
    description: "Kdy dává PostgreSQL smysl pro interní systémy, workflow aplikace a větší business weby se strukturovanými daty.",
    primaryQuery: "postgresql pro interní systémy",
    heroTitle: "Databáze je provozní základ, ne technická poznámka pod čarou",
    heroSubtitle: "U interních systémů a workflow aplikací je důležitá spolehlivost, práce s relacemi a možnost rozumného růstu datového modelu.",
    intro: ["PostgreSQL bývá silná volba tam, kde aplikace pracuje s relacemi, historií změn, složitějším filtrováním a dlouhodobým růstem systému.", "Nejde jen o výkon. Důležitá je i predikovatelnost, kvalita dotazování a schopnost držet data v rozumném pořádku."],
    reasons: ["relační data a workflow stavy", "složitější reporting a filtrování", "potřeba konzistence a historie", "dlouhodobý rozvoj interního systému"],
    cautions: ["špatný návrh datového modelu", "používání databáze bez promyšlených indexů a dotazů", "ignorování migrační disciplíny"],
    fit: ["interní systém na míru", "admin rozhraní s datovou logikou", "business aplikace s více moduly", "portál s historií a návazností dat"],
    faq: [
      { question: "Je PostgreSQL vhodná i pro menší aplikace?", answer: "Ano, pokud pracují s relačními daty a mají růstový potenciál." },
      { question: "Řeší databáze sama výkon?", answer: "Ne. Databáze je jen část. Důležitý je i návrh modelu, dotazů a celé aplikace." },
      { question: "Má smysl ji použít i bez komplexního BI?", answer: "Ano. Přínos je i v samotné kvalitě a struktuře dat pro běžný provoz." },
    ],
    related: ["service-internal-tools-development", "use-case-internal-admin-system", "use-case-reporting-dashboard", "guide-how-to-estimate-a-custom-web-app"],
  }),
  technology({
    translationKey: "technology-nextjs-for-business-applications",
    locale: "en",
    slug: "nextjs-for-business-applications",
    title: "Next.js for business applications | Bc. Ondřej Halata",
    h1: "Next.js for business applications, portals, and content-driven products",
    description: "Where Next.js makes sense for business applications, client portals, and products combining application logic with commercial content and discoverability.",
    primaryQuery: "nextjs for business applications",
    heroTitle: "Next.js is a practical tool, not a trend badge",
    heroSubtitle: "It is strongest where content, SEO, first-load quality, and application logic need to coexist in one coherent stack.",
    intro: ["Next.js is a strong choice for projects that are more than a purely internal tool with no discoverability requirements.", "For many business products it helps combine commercial pages, documentation, and application flows without splitting the stack unnecessarily."],
    reasons: ["commercial pages and product experience in one app", "SEO or AI discovery requirements", "better first-load experience", "shared routing and architecture across content and app layers"],
    cautions: ["using it where a simple SPA would do", "adding complexity with no product benefit", "weak data boundaries and rendering discipline"],
    fit: ["business websites with commercial landing pages", "client portals", "business apps with content and discovery needs", "products that benefit from both static and dynamic rendering"],
    faq: [
      { question: "Is Next.js useful for internal systems too?", answer: "Yes, but it is not always necessary. The key question is whether the project benefits from what it offers." },
      { question: "Does Next.js automatically improve performance?", answer: "No. Final performance still depends on data flow, architecture, and implementation quality." },
      { question: "Is it a good choice for a company website and app in one stack?", answer: "Yes. That is one of the contexts where it is often especially practical." },
    ],
    related: ["comparison-nextjs-vs-spa", "service-custom-web-app-development", "home", "inquiry"],
  }),
  technology({
    translationKey: "technology-typescript-for-large-web-projects",
    locale: "en",
    slug: "typescript-for-large-web-projects",
    title: "TypeScript for large web projects | Bc. Ondřej Halata",
    h1: "TypeScript for larger web projects and long-term product work",
    description: "Why TypeScript is often worth using in larger web projects, internal systems, and products with multiple contributors or complex integrations.",
    primaryQuery: "typescript for large web projects",
    heroTitle: "TypeScript is not strictness for its own sake",
    heroSubtitle: "Its real value appears when systems grow, several people work in the codebase, and data or interface mistakes become expensive.",
    intro: ["In larger projects the problem is rarely syntax. It is uncertainty about what flows where and what each part of the system expects.", "TypeScript helps create clearer boundaries across the codebase and reduces the class of mistakes that would otherwise appear only at runtime."],
    reasons: ["larger teams or longer product life", "more complex data and integration boundaries", "frequent refactoring and continued development", "need for safer changes"],
    cautions: ["type bureaucracy with no payoff", "weak shared-type discipline", "believing types replace architecture"],
    fit: ["larger web applications", "modular internal systems", "products with several integrations", "team-based ownership of one codebase"],
    faq: [
      { question: "Is TypeScript necessary for small projects too?", answer: "Not always. Its value grows with complexity, collaboration, and long-term maintenance needs." },
      { question: "Does TypeScript slow development down?", answer: "It can add discipline in the short term, but in larger projects that is often paid back through lower error rates and safer change." },
      { question: "Does TypeScript guarantee good architecture?", answer: "No. It is a support tool, not a substitute for sound design." },
    ],
    related: ["guide-how-to-stabilize-a-slow-business-app", "service-existing-app-takeover", "contract-support", "comparison-rewrite-vs-incremental-app-improvement"],
  }),
  technology({
    translationKey: "technology-api-integrations",
    locale: "en",
    slug: "api-integrations",
    title: "API integrations for business systems | Bc. Ondřej Halata",
    h1: "API integrations for business systems, workflows, and portals",
    description: "Where API integrations make sense, what matters beyond endpoint mapping, and how to avoid fragile system-to-system links with no operational safety.",
    primaryQuery: "api integrations",
    heroTitle: "API integration is more than connecting two endpoints",
    heroSubtitle: "It is about keeping data, state, and responsibility aligned across systems with different behaviour and reliability.",
    intro: ["A good integration is not defined by endpoint count. It is defined by reliable data flow and manageable exceptions.", "In business workflows, validation, retries, monitoring, and visibility into failure states matter as much as the integration call itself."],
    reasons: ["connecting ERP, CRM, ecommerce, and internal tools", "keeping important data in sync", "automating downstream process steps", "improving reporting inputs across systems"],
    cautions: ["integration with no exception handling", "direct links with no control or monitoring", "underestimating mapping and data ownership"],
    fit: ["several systems with manual re-entry", "workflow depending on shared data", "portals and internal tools with external dependencies"],
    faq: [
      { question: "Is API documentation enough for a successful integration project?", answer: "No. The process, the data model, failure states, and operational context matter just as much." },
      { question: "Can integrations be delivered in stages?", answer: "Yes. That is usually safer and more practical than a single large integration jump." },
      { question: "What if one of the systems is awkward to integrate with?", answer: "That is common. It often means adjusting the design, adding a supporting layer, or making workflow changes around the limitation." },
    ],
    related: ["service-automations-and-integrations", "tool-api-integration-checklist", "use-case-workflow-automation-tools", "case-study-multi-system-integration"],
  }),
  technology({
    translationKey: "technology-postgresql-for-internal-tools",
    locale: "en",
    slug: "postgresql-for-internal-tools",
    title: "PostgreSQL for internal tools | Bc. Ondřej Halata",
    h1: "PostgreSQL for internal tools and business web applications",
    description: "Why PostgreSQL is often a strong choice for internal systems, workflow applications, and business software with structured relational data.",
    primaryQuery: "postgresql for internal tools",
    heroTitle: "The database is an operational foundation, not a footnote",
    heroSubtitle: "In internal systems and workflow-heavy apps, reliability, relational structure, and room for data growth matter more than trend-driven database choices.",
    intro: ["PostgreSQL is often a strong choice where applications rely on relationships, state history, structured querying, and long-term data model growth.", "Its value is not only performance. It is also about predictability, strong querying, and a cleaner basis for application logic."],
    reasons: ["relational data and workflow states", "reporting and filtered views", "need for consistency and history", "long-term growth of an internal system"],
    cautions: ["poor data modelling", "weak index and query discipline", "ignoring migration hygiene"],
    fit: ["custom internal systems", "admin interfaces with real data logic", "multi-module business applications", "portals with history and relational data"],
    faq: [
      { question: "Is PostgreSQL suitable for smaller applications too?", answer: "Yes, especially if they work with relational data and may need to grow in complexity over time." },
      { question: "Does the database solve performance by itself?", answer: "No. Data model, queries, caching, and application design still matter." },
      { question: "Does it make sense without a full BI setup?", answer: "Yes. Much of the value is in having stronger operational data structure in the product itself." },
    ],
    related: ["service-internal-tools-development", "use-case-internal-admin-system", "use-case-reporting-dashboard", "guide-how-to-estimate-a-custom-web-app"],
  }),
];

