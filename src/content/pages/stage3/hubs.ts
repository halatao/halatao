// Generated content: stage 3 section hub pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type HubSeed = {
  translationKey: string;
  locale: Locale;
  slug: string;
  segment: string;
  title: string;
  breadcrumbLabel: string;
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
    breadcrumbLabel: seed.breadcrumbLabel,
    description: seed.description,
    primaryQuery: seed.breadcrumbLabel,
    intent: "research",
    hero: {
      eyebrow: isCs ? "Přehled sekce" : "Section overview",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: isCs ? "Popsat situaci" : "Describe situation",
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
            ? "Tato sekce nabízí praktické podklady pro rozhodování o technologiích, přípravě projektu a použitelných pracovních šablonách."
            : "This section provides practical guidance for technology decisions, project preparation, and useful working templates.",
        ],
        bullets: seed.fit,
      },
      {
        title: isCs ? "Jak z ní pokračovat dál" : "How to continue from here",
        body: [
          isCs
            ? "Vyberte téma nejbližší aktuálnímu rozhodnutí a potom pokračujte na související službu, srovnání nebo popis projektu."
            : "Choose the topic closest to the current decision and then continue to the relevant service, comparison, or project discussion.",
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
          href: "/cs/kontakt",
          note: "Pokud už řešíte konkrétní projekt, navrhnu další krok podle vašeho kontextu a priorit.",
        }
      : {
          label: "Describe situation",
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
    title: "Technologie pro business aplikace a interní systémy",
    breadcrumbLabel: "Technologické stránky pro business aplikace a interní systémy",
    description: "Přehled technologických stránek pro Next.js, TypeScript, API integrace a PostgreSQL v business aplikacích a interních systémech.",
    heroTitle: "Technologie vysvětlené podle projektového fitu, ne podle trendového seznamu",
    heroSubtitle: "Sekce pro chvíli, kdy firma nebo tým potřebuje rozumět tomu, proč konkrétní stack nebo integrační přístup dává smysl právě pro jejich projekt.",
    intro: [
      "Technologické stránky nejsou katalog nástrojů. Jsou psané jako rozhodovací obsah pro chvilku, kdy je potřeba vysvětlit vhodnost stacku nebo přístupu v business jazyce.",
      "Najdete tu témata kolem Next.js, TypeScriptu, API integrací a PostgreSQL v kontextu business aplikací, portálů a interních systémů.",
    ],
    overview: "U každé technologie zjistíte, kdy je vhodná, na co si dát pozor a jaký typ projektu z ní obvykle získá největší hodnotu.",
    fit: [
      "vedení chce porozumět technologické volbě v obchodním jazyce",
      "interní tým potřebuje srovnat architektonické rozhodnutí s provozní realitou",
      "projekt řeší integrace, dlouhodobou udržitelnost nebo stack pro business aplikaci",
    ],
    decision: [
      "otevřete technologii, která je součástí aktuálního rozhodnutí",
      "pokračujte na související praktické srovnání nebo službu",
      "pokud potřebujete doporučení pro vlastní kontext, popište projekt",
    ],
    faq: [
      { question: "Jsou tato témata psaná i pro netechnické role?", answer: "Ano. Cílem je vysvětlit technologické rozhodnutí přes dopad na realizaci, provoz a udržitelnost." },
      { question: "Vedou technologická témata zpět na služby?", answer: "Ano. Každé je propojené s praktickým kontextem, ve kterém daná technologie typicky dává smysl." },
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
    title: "Technology decisions for business apps",
    breadcrumbLabel: "Technology decision pages for business applications and internal systems",
    description: "Overview of technology pages covering Next.js, TypeScript, API integrations, and PostgreSQL in the context of business software and internal tools.",
    heroTitle: "Technology explained through project fit rather than trend chasing",
    heroSubtitle: "Useful when a company or team needs to understand why a stack choice or integration approach is commercially sensible for the project at hand.",
    intro: [
      "These pages are not a tool catalogue. They are decision content for the moment when a team needs to justify a stack or integration direction in business terms.",
      "The section covers Next.js, TypeScript, API integrations, and PostgreSQL in the context of business applications, portals, and internal systems.",
    ],
    overview: "Each technology topic explains where the approach is strong, what to watch out for, and which type of business project benefits most from it.",
    fit: [
      "decision-makers who need technology translated into business terms",
      "internal teams validating an architecture direction",
      "projects focused on integrations, maintainability, or long-term stack choices",
    ],
    decision: [
      "open the technology page tied to the current decision",
      "continue to the relevant practical comparison or service",
      "describe the project if you need advice grounded in its actual context",
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
    title: "Šablony a checklisty pro aplikace, takeover a automatizace",
    breadcrumbLabel: "Šablony a checklisty, které zkracují cestu k lepšímu prvnímu rozhodnutí",
    description: "Přehled šablon a checklistů pro brief webové aplikace, takeover, interní systémy, API integrace a discovery automatizací.",
    heroTitle: "Praktické šablony pro chvíli, kdy projekt potřebuje řád dřív než chaos",
    heroSubtitle: "Sekce obsahuje použitelné pracovní podklady pro scoping, takeover, interní systémy a automatizační projekty. Ne administrativu pro administrativu.",
    intro: [
      "Tyto stránky slouží jako pracovní pomůcky pro první rozhodnutí. Pomáhají zadavatelům a týmům ujasnit si klíčové otázky ještě před implementací nebo převzetím aplikace.",
      "Najdete tu brief pro webovou aplikaci, takeover checklist, API checklist, scope worksheet pro interní systém i discovery checklist pro automatizace.",
    ],
    overview: "U každé šablony nebo checklistu zjistíte, co má podklad pokrýt, jak ho použít v praxi a jaké rozhodnutí by měl usnadnit.",
    fit: [
      "příprava na úvodní schůzku nebo scoping workshop",
      "převzetí existující aplikace nebo rozdělaného projektu",
      "interní systém nebo automatizace s více neznámými a výjimkami",
    ],
    decision: [
      "vyberte asset podle typu projektu nebo nejistoty",
      "použijte ho jako interní pracovní podklad, ne jako finální PDF pro šuplík",
      "pokud chcete pomoc i s realizací, popište vlastní projekt",
    ],
    faq: [
      { question: "Nahrazují šablony projektový návrh nebo architekturu?", answer: "Ne. Pomáhají zlepšit vstupní rámec, ale nenahrazují audit, architekturu ani detailní scope." },
      { question: "Jsou užitečné i bez technického týmu?", answer: "Ano. Jsou psané tak, aby pomohly i netechnickému zadavateli zlepšit kvalitu prvního zadání." },
      { question: "Vedou tyto podklady i na další praktický krok?", answer: "Ano. Každý odkazuje na související službu, průvodce nebo možnost popsat vlastní projekt." },
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
    title: "Templates for scoping, takeover, and automation",
    breadcrumbLabel: "Templates and checklists that shorten the path to a better first project decision",
    description: "Overview of practical templates for web app briefs, app takeover, API integrations, internal tool scoping, and automation discovery.",
    heroTitle: "Practical templates for getting structure around the project before confusion spreads",
    heroSubtitle: "This section gathers useful working assets for scoping, takeover, internal tooling, and automation projects. The goal is clarity, not paperwork.",
    intro: [
      "These pages provide practical working inputs for early project decisions. They help decision-makers and teams organise the right questions before implementation or takeover begins.",
      "The section includes a web app brief template, app takeover checklist, API checklist, internal tool scope worksheet, and automation discovery checklist.",
    ],
    overview: "Each template or checklist explains what the asset should cover, how to use it, and which decision it should improve.",
    fit: [
      "preparing for an intro call or scoping session",
      "taking over an inherited application or incomplete project",
      "internal tool and automation work with several unknowns",
    ],
    decision: [
      "choose the asset closest to the project situation",
      "use it as a working input, not a decorative document",
      "describe the project when you want help turning the preparation into delivery",
    ],
    faq: [
      { question: "Do these templates replace architecture or project planning?", answer: "No. They improve the quality of the starting frame but do not replace deeper technical and delivery work." },
      { question: "Are they useful without an internal engineering team?", answer: "Yes. They help business decision-makers ask better questions and reduce blind spots early." },
      { question: "Do they link to practical next steps?", answer: "Yes. Every asset connects to relevant services, guides, and a way to describe the project." },
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
