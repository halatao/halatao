// Generated content: stage 3 section hub pages. Safe to edit manually.

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
    stage: 3,
    locale: seed.locale,
    pageType: "hub",
    slug: seed.slug,
    segments: [seed.segment],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.h1,
    intent: "research",
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
        title: isCs ? "Co v sekci najdete" : "What this section covers",
        body: [seed.overview],
      },
      {
        title: isCs ? "Komu tato sekce nejvíc pomůže" : "Who this section helps most",
        body: [
          isCs
            ? "Tato sekce slouží jako podpůrná autoritativní vrstva pro buyery a týmy, které potřebují lépe rozhodovat o technologiích, šablonách nebo lokálním kontextu."
            : "This section works as a supporting authority layer for buyers and teams that need better decisions around technology, templates, or local commercial context.",
        ],
        bullets: seed.fit,
      },
      {
        title: isCs ? "Jak z ní pokračovat dál" : "How to continue from here",
        body: [
          isCs
            ? "Vyberte child page nejbližší aktuálnímu rozhodnutí a potom pokračujte na související službu, srovnání nebo inquiry."
            : "Open the child page closest to the current decision and then continue into the relevant service, comparison, or inquiry path.",
        ],
        bullets: seed.decision,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.fit,
      notFor: isCs ? ["čtení bez návaznosti na reálné software rozhodnutí"] : ["reading with no connection to a real software decision"],
    },
    cta: isCs
      ? {
          label: "Probrat zadání",
          href: "/cs/popsat-projekt",
          note: "Pokud už řešíte konkrétní projekt, navrhnu další krok podle vašeho kontextu a priorit.",
        }
      : {
          label: "Discuss your project",
          href: "/en/discuss-your-project",
          note: "If this section connects to a live project, I can help frame the next step against your context.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const stage3HubPages: ContentPage[] = [
  hub({
    translationKey: "hub-technology",
    locale: "cs",
    slug: "technologie",
    segment: "technologie",
    title: "Technologie pro business aplikace, portály a interní systémy | Halatao",
    h1: "Technologické stránky pro business aplikace a interní systémy",
    description: "Přehled technologických stránek pro Next.js, TypeScript, API integrace a PostgreSQL v business aplikacích a interních systémech.",
    heroTitle: "Technologie vysvětlené podle projektového fitu, ne podle trendového seznamu",
    heroSubtitle: "Sekce pro chvíli, kdy buyer nebo tým potřebuje rozumět tomu, proč konkrétní stack nebo integrační přístup dává smysl právě pro jejich projekt.",
    intro: [
      "Technologické stránky nejsou katalog nástrojů. Jsou psané jako rozhodovací obsah pro chvilku, kdy je potřeba vysvětlit vhodnost stacku nebo přístupu v business jazyce.",
      "Najdete tu témata kolem Next.js, TypeScriptu, API integrací a PostgreSQL v kontextu business aplikací, portálů a interních systémů.",
    ],
    overview: "Každá child page popisuje, kdy je technologie silný fit, na co si dát pozor a jaký typ byznys projektu z ní obvykle získá největší hodnotu.",
    fit: [
      "buyer chce porozumět technologické volbě v obchodním jazyce",
      "interní tým potřebuje srovnat architektonické rozhodnutí s provozní realitou",
      "projekt řeší integrace, dlouhodobou udržitelnost nebo stack pro business aplikaci",
    ],
    decision: [
      "otevřete technologii, která je součástí aktuálního rozhodnutí",
      "pokračujte na související comparison page nebo service page",
      "pokud potřebujete doporučení pro vlastní kontext, přejděte na inquiry",
    ],
    faq: [
      { question: "Jsou tyto stránky psané i pro netechnické buyery?", answer: "Ano. Cílem je vysvětlit technologické rozhodnutí přes delivery dopad, provoz a udržitelnost." },
      { question: "Vedou technologické stránky zpět na služby?", answer: "Ano. Každá child page je propojená s komerčním kontextem, kde daná technologie typicky dává smysl." },
      { question: "Mají smysl i pro takeover projekty?", answer: "Ano. Hlavně ve chvíli, kdy je potřeba posoudit vhodnost současného stacku nebo integrační vrstvy." },
    ],
    related: [
      "technology-nextjs-for-business-applications",
      "technology-typescript-for-large-web-projects",
      "technology-api-integrations",
      "technology-postgresql-for-internal-tools",
    ],
  }),
  hub({
    translationKey: "hub-technology",
    locale: "en",
    slug: "technology",
    segment: "technology",
    title: "Technology decisions for business apps, portals, and internal tools | Halatao",
    h1: "Technology decision pages for business applications and internal systems",
    description: "Overview of technology pages covering Next.js, TypeScript, API integrations, and PostgreSQL in the context of business software and internal tools.",
    heroTitle: "Technology explained through project fit rather than trend chasing",
    heroSubtitle: "Useful when a buyer or team needs to understand why a stack choice or integration approach is commercially sensible for the project at hand.",
    intro: [
      "These pages are not a tool catalogue. They are decision content for the moment when a team needs to justify a stack or integration direction in business terms.",
      "The section covers Next.js, TypeScript, API integrations, and PostgreSQL in the context of business applications, portals, and internal systems.",
    ],
    overview: "Each child page explains where the technology is strong, what to watch out for, and which type of business project benefits most from it.",
    fit: [
      "buyers who need technology translated into business terms",
      "internal teams validating an architecture direction",
      "projects focused on integrations, maintainability, or long-term stack choices",
    ],
    decision: [
      "open the technology page tied to the current decision",
      "follow into the relevant comparison or service page",
      "move to inquiry if you need advice grounded in your actual project context",
    ],
    faq: [
      { question: "Are these pages only for technical readers?", answer: "No. They are written to help commercial and delivery stakeholders understand stack decisions too." },
      { question: "Do they connect back to services?", answer: "Yes. Every technology page links into the commercial context where it is most relevant." },
      { question: "Are they useful in inherited-app situations?", answer: "Yes. They can help frame whether the current stack still supports the product well." },
    ],
    related: [
      "technology-nextjs-for-business-applications",
      "technology-typescript-for-large-web-projects",
      "technology-api-integrations",
      "technology-postgresql-for-internal-tools",
    ],
  }),
  hub({
    translationKey: "hub-templates",
    locale: "cs",
    slug: "sablony",
    segment: "sablony",
    title: "Šablony a checklisty pro zadání aplikace, takeover a automatizace | Halatao",
    h1: "Šablony a checklisty, které zkracují cestu k lepšímu prvnímu rozhodnutí",
    description: "Přehled šablon a checklistů pro brief webové aplikace, takeover, interní systémy, API integrace a discovery automatizací.",
    heroTitle: "Praktické šablony pro chvíli, kdy projekt potřebuje řád dřív než chaos",
    heroSubtitle: "Sekce obsahuje použitelné pracovní podklady pro scoping, takeover, interní systémy a automatizační projekty. Ne administrativu pro administrativu.",
    intro: [
      "Tyto stránky slouží jako pracovní pomůcky pro první rozhodnutí. Pomáhají buyerovi a týmu ujasnit si klíčové otázky ještě před implementací nebo takeoverem.",
      "Najdete tu brief pro webovou aplikaci, takeover checklist, API checklist, scope worksheet pro interní systém i discovery checklist pro automatizace.",
    ],
    overview: "Každá child page vysvětluje, co má dokument pokrýt, jak ho použít v praxi a jaký typ rozhodnutí by měl zlepšit.",
    fit: [
      "příprava na první call nebo scoping workshop",
      "převzetí existující aplikace nebo rozdělaného projektu",
      "interní systém nebo automatizace s více neznámými a výjimkami",
    ],
    decision: [
      "vyberte asset podle typu projektu nebo nejistoty",
      "použijte ho jako interní pracovní podklad, ne jako finální PDF pro šuplík",
      "pokud chcete pomoc i s realizací, přejděte na inquiry",
    ],
    faq: [
      { question: "Nahrazují šablony projektový návrh nebo architekturu?", answer: "Ne. Pomáhají zlepšit vstupní rámec, ale nenahrazují audit, architekturu ani detailní scope." },
      { question: "Jsou užitečné i bez technického týmu?", answer: "Ano. Jsou psané tak, aby pomohly i business buyerovi zlepšit kvalitu prvního zadání." },
      { question: "Vedou tyto stránky i na komerční další krok?", answer: "Ano. Každý asset odkazuje na související službu, guide nebo inquiry flow." },
    ],
    related: [
      "tool-web-app-project-brief-template",
      "tool-app-takeover-checklist",
      "tool-api-integration-checklist",
      "tool-internal-tool-scope-worksheet",
      "tool-automation-discovery-checklist",
    ],
  }),
  hub({
    translationKey: "hub-templates",
    locale: "en",
    slug: "templates",
    segment: "templates",
    title: "Templates and checklists for scoping, takeover, and automation work | Halatao",
    h1: "Templates and checklists that shorten the path to a better first project decision",
    description: "Overview of practical templates for web app briefs, app takeover, API integrations, internal tool scoping, and automation discovery.",
    heroTitle: "Practical templates for getting structure around the project before confusion spreads",
    heroSubtitle: "This section gathers useful working assets for scoping, takeover, internal tooling, and automation projects. The goal is clarity, not paperwork.",
    intro: [
      "These pages provide practical working inputs for early project decisions. They help buyers and teams organise the right questions before implementation or takeover begins.",
      "The section includes a web app brief template, app takeover checklist, API checklist, internal tool scope worksheet, and automation discovery checklist.",
    ],
    overview: "Each child page explains what the asset should cover, how to use it, and what type of decision quality it should improve.",
    fit: [
      "preparing for an intro call or scoping session",
      "taking over an inherited application or incomplete project",
      "internal tool and automation work with several unknowns",
    ],
    decision: [
      "choose the asset closest to the project situation",
      "use it as a working input, not a decorative document",
      "move to inquiry when you want help turning it into delivery",
    ],
    faq: [
      { question: "Do these templates replace architecture or project planning?", answer: "No. They improve the quality of the starting frame but do not replace deeper technical and delivery work." },
      { question: "Are they useful without an internal engineering team?", answer: "Yes. They help business-side buyers ask better questions and reduce blind spots early." },
      { question: "Do they link into commercial next steps?", answer: "Yes. Every page connects back to the relevant services, guides, and inquiry path." },
    ],
    related: [
      "tool-web-app-project-brief-template",
      "tool-app-takeover-checklist",
      "tool-api-integration-checklist",
      "tool-internal-tool-scope-worksheet",
      "tool-automation-discovery-checklist",
    ],
  }),
];
