// Generated content: stage 2 section hub pages. Safe to edit manually.

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
    stage: 2,
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
        title: isCs ? "Co v sekci najdete" : "What this section covers",
        body: [seed.overview],
      },
      {
        title: isCs ? "Kdy je tato sekce nejužitečnější" : "When this section is most useful",
        body: [
          isCs
            ? "Tato sekce pomáhá buyerovi udělat lepší rozhodnutí dřív, než se projekt zbytečně rozběhne špatným směrem."
            : "This section helps a buyer make a better decision before the project gathers momentum in the wrong direction.",
        ],
        bullets: seed.fit,
      },
      {
        title: isCs ? "Jak navázat dál" : "How to continue",
        body: [
          isCs
            ? "Začněte child page nejbližší aktuálnímu rozhodnutí a pak pokračujte na související service page, case study nebo inquiry."
            : "Start with the child page closest to the current decision and then continue to the relevant service, case study, or inquiry path.",
        ],
        bullets: seed.decision,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.fit,
      notFor: isCs ? ["pasivní čtení bez návaznosti na reálný projekt"] : ["passive reading with no live project context"],
    },
    cta: isCs
      ? {
          label: "Popsat projekt",
          href: "/cs/popsat-projekt",
          note: "Pokud už řešíte podobné rozhodnutí v reálném projektu, stačí krátký kontext a navrhnu další krok.",
        }
      : {
          label: "Discuss your project",
          href: "/en/discuss-your-project",
          note: "If this section matches a live project decision, a short summary is enough to continue.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const stage2HubPages: ContentPage[] = [
  hub({
    translationKey: "hub-comparisons",
    locale: "cs",
    slug: "srovnani",
    segment: "srovnani",
    title: "Srovnání pro software rozhodnutí a výběr modelu spolupráce | Halatao",
    h1: "Srovnání pro chvíli, kdy potřebujete udělat rozumné dodavatelské nebo produktové rozhodnutí",
    description: "Přehled srovnávacích stránek pro build vs buy, kontraktor vs agentura, Next.js vs SPA a rewrite vs postupný rozvoj aplikace.",
    heroTitle: "Rozhodovací stránky pro chvíli, kdy nestačí obecný názor z internetu",
    heroSubtitle: "Sekce pro buyery, kteří potřebují porovnat dvě realistické varianty a pochopit jejich dopad na delivery, náklady a provoz.",
    intro: [
      "Comparison pages jsou psané pro reálná obchodní a delivery rozhodnutí, ne pro technologické flamewary.",
      "Pomáhají tam, kde je potřeba udělat build-vs-buy rozhodnutí, vybrat model spolupráce, zhodnotit architektonický směr nebo rozhodnout mezi rewrite a postupným rozvojem.",
    ],
    overview: "Každá child page dává přímou odpověď, kdy je silnější varianta A, kdy varianta B, a podle čeho má buyer rozhodovat v reálném kontextu projektu.",
    fit: [
      "výběr mezi SaaS a vývojem na míru",
      "volba kontraktora nebo agentury",
      "rozhodnutí o architektuře business aplikace",
      "posouzení rewrite vs inkrementálního rozvoje",
    ],
    decision: [
      "otevřete srovnání, které dnes blokuje rozhodnutí",
      "použijte ho jako rámec pro interní debatu nebo budget",
      "po rozhodnutí pokračujte na service page nebo inquiry",
    ],
    faq: [
      { question: "Jsou srovnání neutrální za každou cenu?", answer: "Ne. Jsou praktická a poctivě říkají, kdy která varianta dává větší smysl." },
      { question: "Mají smysl i pro netechnický management?", answer: "Ano. Jazyk je vedený hlavně přes provozní dopad, risk a economics, ne přes framework tribalismus." },
      { question: "Vedou srovnání na další komerční krok?", answer: "Ano. Každá stránka vede na odpovídající služby, case studies nebo inquiry flow." },
    ],
    related: [
      "comparison-custom-vs-saas",
      "comparison-contractor-vs-agency",
      "comparison-rewrite-vs-incremental-app-improvement",
      "comparison-nextjs-vs-spa",
    ],
  }),
  hub({
    translationKey: "hub-comparisons",
    locale: "en",
    slug: "comparisons",
    segment: "comparisons",
    title: "Comparisons for software buying and delivery decisions | Halatao",
    h1: "Comparison pages for buyers making a real software decision",
    description: "Decision pages covering custom vs SaaS, contract developer vs agency, Next.js vs SPA, and rewrite vs incremental improvement.",
    heroTitle: "Decision support when generic internet advice is not enough",
    heroSubtitle: "For buyers who need to compare two realistic paths and understand the impact on delivery, cost, and operations.",
    intro: [
      "These pages are written for practical buying and delivery decisions rather than technical culture-war traffic.",
      "They help with build-vs-buy choices, supplier model evaluation, architecture direction, and the question of rewrite versus incremental improvement.",
    ],
    overview: "Each child page gives a direct answer, shows where option A is stronger, where option B is stronger, and which criteria should shape the decision in a live project.",
    fit: [
      "build-vs-buy decisions",
      "agency vs contract model evaluation",
      "architecture direction for a business application",
      "rewrite vs stabilisation decisions",
    ],
    decision: [
      "open the comparison closest to the blocked decision",
      "use it as a frame for internal alignment or budget discussion",
      "continue into the relevant service or inquiry path once direction is clearer",
    ],
    faq: [
      { question: "Are the comparison pages neutral at all costs?", answer: "No. They are practical and explicit about where each option is stronger." },
      { question: "Are they useful for non-technical buyers too?", answer: "Yes. The framing is built around operational impact, risk, and economics rather than framework tribalism." },
      { question: "Do they connect to commercial next steps?", answer: "Yes. Every page links onward to the relevant services, supporting content, and inquiry flow." },
    ],
    related: [
      "comparison-custom-vs-saas",
      "comparison-contractor-vs-agency",
      "comparison-rewrite-vs-incremental-app-improvement",
      "comparison-nextjs-vs-spa",
    ],
  }),
  hub({
    translationKey: "hub-use-cases",
    locale: "cs",
    slug: "priklady",
    segment: "priklady",
    title: "Příklady řešení: portály, interní systémy, dashboardy a workflow | Halatao",
    h1: "Příklady typů aplikací, které dávají ve firmách největší smysl",
    description: "Přehled use-case stránek pro klientské portály, interní systémy, dashboardy, schvalovací workflow a další typické business aplikace.",
    heroTitle: "Příklady řešení jako rozhodovací pomůcka, ne galerie screenshotů",
    heroSubtitle: "Sekce pro firmy, které vědí, že potřebují systém, ale chtějí si lépe představit jeho správný tvar a první rozsah.",
    intro: [
      "Use cases pomáhají buyerovi představit si typ řešení bez vymýšlení falešných referencí nebo přepálených claims.",
      "Jsou nejužitečnější ve chvíli, kdy firma potřebuje systém, ale chce si ujasnit vhodný model aplikace, scope a návaznost na interní proces.",
    ],
    overview: "Najdete tu klientské portály, interní administrace, dashboardy, workflow aplikace i další reprezentativní scénáře podle problému, který mají řešit.",
    fit: [
      "buyer hledá vhodný tvar řešení",
      "tým potřebuje interně srovnat scope nového systému",
      "firma si chce ujasnit, jaký typ aplikace bude nejlepší první krok",
    ],
    decision: [
      "otevřete use case nejbližší cílovému workflow",
      "pokračujte na odpovídající service page nebo case study",
      "pokud už je řešení dost konkrétní, přejděte na inquiry",
    ],
    faq: [
      { question: "Jsou use-case stránky konkrétní reference?", answer: "Ne. Jsou to reprezentativní modely typických řešení, které pomáhají buyerovi ujasnit scope a fit." },
      { question: "Mohu podle use case rovnou poptat projekt?", answer: "Ano. Use cases jsou psané tak, aby fungovaly jako most mezi úvodní představou a konkrétním zadáním." },
      { question: "Vedou use cases i na komerční další krok?", answer: "Ano. Každý use case odkazuje na relevantní služby a inquiry flow." },
    ],
    related: [
      "use-case-b2b-client-portal",
      "use-case-internal-admin-system",
      "use-case-management-dashboard",
      "use-case-workflow-app-for-teams",
      "use-case-workflow-automation-tools",
    ],
  }),
  hub({
    translationKey: "hub-use-cases",
    locale: "en",
    slug: "use-cases",
    segment: "use-cases",
    title: "Use cases: portals, internal systems, dashboards, and workflow apps | Halatao",
    h1: "Use cases for the kinds of business applications companies actually buy",
    description: "Overview of use-case pages for client portals, internal tools, dashboards, approval systems, and workflow apps for business operations.",
    heroTitle: "Representative solution shapes instead of fake product theatre",
    heroSubtitle: "Useful when the company knows it needs a system but wants to clarify the right application shape before detailed scoping.",
    intro: [
      "Use-case pages help buyers picture the type of system they need without pretending to be named client showcases.",
      "They are most useful when a team is clear on the problem but still wants to define the right model of application, first scope, and business fit.",
    ],
    overview: "The section covers client portals, internal admin systems, dashboards, approval systems, and workflow applications built around common business needs.",
    fit: [
      "buyers exploring the right solution shape",
      "teams aligning internally on the likely scope of a new system",
      "companies comparing several types of business application before delivery starts",
    ],
    decision: [
      "open the use case closest to the target workflow",
      "continue to the relevant service or case-study page",
      "move to inquiry when the project shape is concrete enough to discuss",
    ],
    faq: [
      { question: "Are these pages tied to named client work?", answer: "No. They are representative solution patterns designed to help with scoping and buying decisions." },
      { question: "Can they support internal alignment?", answer: "Yes. That is one of their main purposes." },
      { question: "Do they connect into commercial next steps?", answer: "Yes. Every use case is linked back to relevant services and inquiry paths." },
    ],
    related: [
      "use-case-b2b-client-portal",
      "use-case-internal-admin-system",
      "use-case-management-dashboard",
      "use-case-workflow-app-for-teams",
      "use-case-workflow-automation-tools",
    ],
  }),
  hub({
    translationKey: "hub-case-studies",
    locale: "cs",
    slug: "pripadovky",
    segment: "pripadovky",
    title: "Případovky a anonymizované scénáře software projektů | Halatao",
    h1: "Případovky a anonymizované scénáře podobných projektů",
    description: "Anonymizované případovky pro takeover aplikace, interní nástroj pro operativu a integraci více systémů bez vymyšlených metrik.",
    heroTitle: "Případovky bez nafouknutých čísel a portfolio divadla",
    heroSubtitle: "Sekce ukazuje reprezentativní scénáře podobných projektů, jejich výchozí situaci, zvolený přístup a typ změny, kterou mohou přinést.",
    intro: [
      "Případovky jsou záměrně anonymizované a nesnaží se nahrazovat poctivou argumentaci vymyšlenými výsledky nebo marketingovou nadsázkou.",
      "Jsou nejcennější ve chvíli, kdy si buyer potřebuje ověřit, jak může podobný projekt vypadat v realistickém rámci a bez přikrášlení.",
    ],
    overview: "Najdete tu scénáře pro takeover existující aplikace, interní nástroj pro operativu a integraci několika systémů s velkým podílem ruční práce.",
    fit: [
      "ověření podobného typu projektu bez fake proof layeru",
      "interní sdílení realistického delivery scénáře",
      "buyer chce vidět, jak vypadá rozumný postup u podobné situace",
    ],
    decision: [
      "otevřete scénář nejbližší vaší situaci",
      "navazující service page nebo guide použijte pro konkrétní rozhodnutí",
      "pokud je scénář blízko vašemu projektu, pokračujte na inquiry",
    ],
    faq: [
      { question: "Proč nejsou uvedená přesná čísla a jména klientů?", answer: "Nechci vymýšlet metriky ani porušovat důvěrnost. Důležitější je typ problému, přístup a forma změny." },
      { question: "Jsou případovky založené na reálných projektech?", answer: "Ano, ale v anonymizované a zobecněné podobě." },
      { question: "Vedou případovky i na komerční další krok?", answer: "Ano. Každá odkazuje na relevantní službu, problem page nebo inquiry flow." },
    ],
    related: [
      "case-study-existing-app-takeover",
      "case-study-internal-tool-for-operations",
      "case-study-multi-system-integration",
    ],
  }),
  hub({
    translationKey: "hub-case-studies",
    locale: "en",
    slug: "case-studies",
    segment: "case-studies",
    title: "Case studies and anonymised delivery scenarios | Halatao",
    h1: "Case studies built as representative scenarios, not inflated references",
    description: "Anonymised case studies for inherited-app takeover, internal operations tooling, and multi-system integration without invented proof metrics.",
    heroTitle: "Case studies without invented numbers or portfolio theatre",
    heroSubtitle: "This section shows the type of project situation, the delivery approach chosen, and the kind of change similar work can create.",
    intro: [
      "These case studies are intentionally anonymised and representative. They are designed to be useful rather than decorative.",
      "They help when a buyer wants to see how similar situations are usually handled in practice without inflated proof claims.",
    ],
    overview: "The section covers inherited-app takeover, internal operations tooling, and multi-system integration scenarios with honest framing.",
    fit: [
      "buyers validating a similar project pattern",
      "teams who need a realistic delivery narrative internally",
      "companies that want proof framing without fake metrics",
    ],
    decision: [
      "open the case study closest to your situation",
      "use the linked service or guide page for the commercial next step",
      "move to inquiry when the scenario feels close enough to discuss concretely",
    ],
    faq: [
      { question: "Why are there no exact performance or revenue numbers?", answer: "Because the goal is honesty. The pages focus on real project shape, not invented precision." },
      { question: "Are these grounded in real work?", answer: "Yes, but presented in anonymised and representative form." },
      { question: "Do they connect into commercial next steps?", answer: "Yes. Every page links onward to the relevant service and inquiry path." },
    ],
    related: [
      "case-study-existing-app-takeover",
      "case-study-internal-tool-for-operations",
      "case-study-multi-system-integration",
    ],
  }),
  hub({
    translationKey: "hub-guides",
    locale: "cs",
    slug: "pruvodce",
    segment: "pruvodce",
    title: "Průvodce pro zadání, takeover a software rozhodnutí | Halatao",
    h1: "Průvodce pro firmy, které si chtějí lépe srovnat projekt před realizací",
    description: "Průvodci pro zadání webové aplikace, bezpečné převzetí aplikace, nacenění takeoveru, interní systém vs SaaS a potřebu seniorní kontraktní kapacity.",
    heroTitle: "Průvodce pro rozhodnutí před projektem, ne generický dev blog",
    heroSubtitle: "Sekce pro buyery, kteří si chtějí lépe srovnat scope, takeover, build-vs-buy nebo otázku externí seniorní kapacity ještě před realizací.",
    intro: [
      "Guide pages pomáhají buyerovi udělat lepší první rozhodnutí a zkrátit cestu k rozumnému dalšímu kroku.",
      "Najdete tu průvodce pro zadání aplikace, takeover, pricing takeoveru, interní systém místo SaaS i posouzení potřeby seniorní kontraktní kapacity.",
    ],
    overview: "Obsah je strukturovaný kolem přímé odpovědi, doporučeného postupu, častých chyb a formy výsledku, který má podobné rozhodnutí přinést.",
    fit: [
      "firmy ve fázi před prvním větším rozhodnutím",
      "týmy, které si chtějí srovnat scope nebo takeover",
      "buyery, kteří chtějí zlepšit kvalitu zadání a méně střílet naslepo",
    ],
    decision: [
      "otevřete průvodce podle toho, co je právě nejasné",
      "pokračujte na související service page nebo tool page",
      "jakmile je rozhodnutí dost konkrétní, přejděte na inquiry",
    ],
    faq: [
      { question: "Jsou průvodci určené i pro netechnické zadavatele?", answer: "Ano. Jsou psané hlavně pro business a delivery rozhodnutí, ne pro čistě technické publikum." },
      { question: "Mají průvodci návaznost na komerční stránky?", answer: "Ano. Každý je propojený s relevantní službou, comparison page nebo tool page." },
      { question: "Mají smysl i u urgentních takeover situací?", answer: "Ano, hlavně takeover průvodci. Pomohou rychleji srovnat priority a formu první etapy." },
    ],
    related: [
      "guide-how-to-scope-a-custom-web-application",
      "guide-how-to-take-over-an-existing-app-safely",
      "guide-how-to-price-an-app-takeover",
      "guide-when-internal-tool-better-than-saas",
      "guide-when-project-needs-senior-contract-support",
    ],
  }),
  hub({
    translationKey: "hub-guides",
    locale: "en",
    slug: "guides",
    segment: "guides",
    title: "Guides for scoping, takeover, and software buying decisions | Halatao",
    h1: "Guides for companies clarifying a project before delivery starts",
    description: "Guides for scoping a custom web app, taking over an existing app safely, pricing takeover work, SaaS vs internal tooling, and deciding on senior contract support.",
    heroTitle: "Guides for pre-project clarity, not generic developer-blog traffic",
    heroSubtitle: "For buyers trying to clarify scope, takeover, build-vs-buy, or the need for senior contract capacity before delivery starts.",
    intro: [
      "These guide pages are designed to improve the quality of early project decisions and reduce avoidable delivery confusion.",
      "The section covers project scoping, inherited-app takeover, takeover pricing, internal tool vs SaaS, and the question of senior contract support.",
    ],
    overview: "Each guide is organised around a direct answer, a recommended approach, common mistakes, and the kind of decision result the guide should create.",
    fit: [
      "buyers preparing the first serious delivery phase",
      "teams clarifying scope or takeover decisions",
      "companies pressure-testing build-vs-buy or staffing choices",
    ],
    decision: [
      "open the guide that matches the current uncertainty",
      "continue into the linked service or template pages",
      "move to inquiry once the decision is concrete enough to discuss directly",
    ],
    faq: [
      { question: "Are these guides aimed only at technical teams?", answer: "No. They are written for commercial and delivery-side readers as much as for engineers." },
      { question: "Do they connect back to the services?", answer: "Yes. Every guide is linked to the most relevant commercial path." },
      { question: "Are they useful in urgent situations?", answer: "Yes, especially for inherited-app takeover and takeover pricing decisions." },
    ],
    related: [
      "guide-how-to-scope-a-custom-web-application",
      "guide-how-to-take-over-an-existing-app-safely",
      "guide-how-to-price-an-app-takeover",
      "guide-when-internal-tool-better-than-saas",
      "guide-when-project-needs-senior-contract-support",
    ],
  }),
];
