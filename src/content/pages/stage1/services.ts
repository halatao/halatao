// Generated content: commercial service pages. Safe to edit manually.

import { buildInquiryHref, buildSecondaryCta, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale, PageSection } from "@/content/types";

type ServiceSeed = {
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
  situationsLead: string;
  situations: string[];
  deliveryLead: string;
  delivery: string[];
  processLead: string;
  resultsLead: string;
  results: string[];
  faq: FAQItem[];
  related: string[];
  fitFor: string[];
  fitNot: string[];
};

const copy = {
  cs: {
    eyebrow: "Služba",
    primary: "Popsat projekt",
    sectionSituations: "Kdy tato služba dává smysl",
    sectionDelivery: "Co typicky řeším a dodávám",
    sectionProcess: "Jak spolupráce probíhá",
    sectionResults: "Jaký výsledek má spolupráce přinést",
  },
  en: {
    eyebrow: "Service",
    primary: "Discuss your project",
    sectionSituations: "Where this service is the right fit",
    sectionDelivery: "What I typically handle and deliver",
    sectionProcess: "How the work is run",
    sectionResults: "What the engagement should achieve",
  },
} as const;

function makeSections(locale: Locale, seed: ServiceSeed): PageSection[] {
  const labels = copy[locale];
  return [
    {
      title: labels.sectionSituations,
      body: [seed.situationsLead],
      bullets: seed.situations,
    },
    {
      title: labels.sectionDelivery,
      body: [seed.deliveryLead],
      bullets: seed.delivery,
    },
    {
      title: labels.sectionProcess,
      body: [seed.processLead],
    },
    {
      title: labels.sectionResults,
      body: [seed.resultsLead],
      bullets: seed.results,
    },
  ];
}

function service(seed: ServiceSeed): ContentPage {
  const labels = copy[seed.locale];
  const base = seed.locale === "cs" ? "/cs/sluzby" : "/en/services";
  return definePage({
    translationKey: seed.translationKey,
    stage: 1,
    locale: seed.locale,
    pageType: "service",
    slug: seed.slug,
    segments: [seed.locale === "cs" ? "sluzby" : "services", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "commercial",
    hero: {
      eyebrow: labels.eyebrow,
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: labels.primary,
        href: buildInquiryHref(seed.locale),
      },
      secondaryCta: buildSecondaryCta(seed.locale),
    },
    intro: seed.intro,
    sections: makeSections(seed.locale, seed),
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.fitFor,
      notFor: seed.fitNot,
    },
    cta:
      seed.locale === "cs"
        ? {
            label: "Popsat projekt",
            href: "/cs/popsat-projekt",
            note: `Napište stručně situaci, cílový výsledek a omezení projektu. Ozvu se s návrhem dalšího kroku.`,
          }
        : {
            label: "Discuss your project",
            href: "/en/discuss-your-project",
            note: "Share the business context, expected outcome, and current constraints. I will tell you whether the project is a fit.",
          },
    seo: {
      title: seed.title,
      description: seed.description,
      image:
        seed.locale === "cs" && seed.translationKey === "service-automations-and-integrations"
          ? "https://i.ibb.co/Vp5SXxhw/New-Project.png"
          : undefined,
    },
    schema: {
      includeService: true,
      includeFaq: true,
    },
    indexable: true,
  });
}

export const servicePages: ContentPage[] = [
  service({
    translationKey: "service-custom-web-app-development",
    locale: "cs",
    slug: "vyvoj-webovych-aplikaci-na-miru",
    title: "Vývoj webové aplikace na míru | Firemní aplikace, portály a workflow",
    h1: "Vývoj webové aplikace na míru pro firmy",
    description: "Navrhuji a vyvíjím webové aplikace na míru pro firmy, které potřebují vlastní workflow, klientský portál, interní systém nebo napojení na další systémy.",
    primaryQuery: "vývoj webové aplikace na míru",
    heroTitle: "Webová aplikace na míru pro firmy, kterým hotový software nestačí",
    heroSubtitle: "Nejčastěji pro klientské portály, interní systémy, operativní workflow a aplikace s více rolemi, daty a integracemi.",
    intro: [
      "Vývoj webové aplikace na míru dává smysl ve chvíli, kdy firma potřebuje vlastní workflow, role, schvalování nebo napojení na další systémy a hotový nástroj už vytváří víc omezení než hodnoty.",
      "Nejde jen o napsání funkcí. Důležitý je návrh dat, oprávnění, hranic systému a provozu tak, aby šla aplikace bezpečně rozvíjet i za rok nebo dva bez drahých obcházek.",
      "Pomohu od zadání přes návrh MVP až po realizaci a další rozvoj. Pokud už máte tým, mohu navázat i uvnitř rozpracovaného produktu.",
    ],
    situationsLead: "Silný fit bývá tam, kde aplikace řeší provozně důležitý proces a firma potřebuje systém podle vlastní reality, ne další obcházení omezení hotového nástroje.",
    situations: ["klientský portál nebo extranet", "interní administrace a operativa", "workflow a schvalování", "dashboardy a reporting nad vlastními daty"],
    deliveryLead: "Součástí typicky není jen frontend. Řeším i backendovou logiku, datový model, integrace, release proces a technická rozhodnutí pro další etapy.",
    delivery: ["technický návrh a rozpad MVP", "full-stack vývoj a průběžné nasazování", "napojení API a externích služeb", "stabilizace výkonu, chyb a provozu"],
    processLead: "Na začátku potřebujeme pochopit problém, současný proces a priority první verze. Pak preferuji menší iterace a rozhodování nad konkrétním softwarem, ne nad nekonečným backlogem.",
    resultsLead: "Výsledkem má být použitelný systém, který pomáhá byznysu, drží technicky pohromadě a dá se bezpečně rozšiřovat.",
    results: ["méně provozních obcházek a ruční práce", "větší jistota dalšího rozvoje", "lepší práce s rolemi a daty", "jasnější architektura než u ad hoc řešení"],
    faq: [
      { question: "Kolik detailů musíme mít připravených před startem?", answer: "Stačí popsat problém, současný proces a cílový výsledek. Kompletní specifikace nebývá na začátku nutná." },
      { question: "Umíte navázat i na existující tým?", answer: "Ano. Mohu dodat ucelenou část řešení samostatně nebo doplnit interní tým jako seniorní kontraktor." },
      { question: "Je možné začít jen MVP verzí?", answer: "Ano. U větších projektů je to často nejlepší cesta, jak ověřit priority a dostat první hodnotu do provozu bez zbytečného přeplnění scope." },
      { question: "Pomůžete i po spuštění?", answer: "Ano. Běžná spolupráce zahrnuje další rozvoj, technické dluhy, opravy i rozhodování o dalším směru." },
    ],
    related: ["comparison-custom-vs-saas", "guide-how-to-scope-a-custom-web-application", "use-case-b2b-client-portal", "use-case-b2b-partner-portal", "problem-client-portal", "problem-internal-tool", "inquiry"],
    fitFor: ["firmy s vlastním workflow a více rolemi", "projekty, kde SaaS nástroj vytváří zbytečné kompromisy", "týmy, které chtějí aplikaci dlouhodobě rozvíjet"],
    fitNot: ["jednoduché prezentační weby", "jednorázové microsites bez logiky", "projekty řízené jen nejnižší cenou bez ownershipu"],
  }),
  service({
    translationKey: "service-existing-app-takeover",
    locale: "cs",
    slug: "prevzeti-a-rozvoj-existujici-aplikace",
    title: "Převzetí a rozvoj existující aplikace | Audit, stabilizace a takeover",
    h1: "Převzetí a rozvoj existující aplikace",
    description: "Pomohu bezpečně převzít existující nebo rozpracovanou aplikaci, zmapovat technická a provozní rizika, stabilizovat kritická místa a navázat dalším vývojem.",
    primaryQuery: "převzetí a rozvoj existující aplikace",
    heroTitle: "Převzetí aplikace bez chaosu a unáhleného rewritu",
    heroSubtitle: "Pro situace po změně dodavatele, odchodu vývojáře nebo u systému, který běží, ale další změny jsou riskantní.",
    intro: [
      "Firmy často potřebují převzít aplikaci po původním dodavateli, odcházejícím vývojáři nebo po období, kdy se systém rozvíjel bez jasného technického vedení.",
      "Největší problém nebývá jen v kódu, ale v nejistotě, co je bezpečné měnit, kde už hrozí dopad do provozu a jak rychle vrátit projektu důvěryhodný další krok.",
      "První krok proto není velké přepisování. Nejdřív je potřeba zmapovat architekturu, závislosti, nasazení, data a skutečný dopad známých problémů.",
    ],
    situationsLead: "Tato služba dává smysl, když aplikace běží nebo je rozpracovaná, ale firma potřebuje znovu získat kontrolu nad technickým směrem a riziky.",
    situations: ["handover po původním dodavateli", "rozpracovaný produkt bez technického vedení", "provozované řešení s nejasnými riziky", "aplikace, která zpomaluje další roadmapu"],
    deliveryLead: "V úvodní fázi řeším orientaci v systému, audit kritických míst, revizi release procesu a návrh priorit, které mají reálný provozní dopad.",
    delivery: ["zmapování kódu a závislostí", "audit provozních rizik", "revize prostředí a deploymentu", "prioritizace stabilizačních a rozvojových kroků"],
    processLead: "Po úvodním mapování vznikne realistický backlog: co řešit hned kvůli stabilitě, co kvůli rychlosti dalšího vývoje a co vůbec nepřepisovat.",
    resultsLead: "Cílem je bezpečné převzetí, menší rozhodovací nejistota a rozumný další postup bez zbytečných technických gest.",
    results: ["jasnější přehled o rizicích a prioritách", "rychlejší orientace v systému", "menší tlak na rewrite jako první reflex", "stabilnější základ pro další vývoj"],
    faq: [
      { question: "Můžete převzít i aplikaci bez dokumentace?", answer: "Ano. To je běžná situace, jen je potřeba počítat s úvodní fází mapování přes kód, infrastrukturu a znalost lidí uvnitř firmy." },
      { question: "Co když je aplikace technicky zastaralá?", answer: "Zastaralost sama o sobě neznamená nutný rewrite. Důležité je, jaké konkrétní problémy způsobuje provozu, bezpečnosti nebo rychlosti dalšího vývoje." },
      { question: "Přebíráte i odpovědnost za další vývoj?", answer: "Ano. Lze navázat jednorázovou stabilizací i dlouhodobější spoluprací podle rozsahu a potřeb týmu." },
      { question: "Dokážete spolupracovat s interním týmem?", answer: "Ano. U takeover projektů je to často klíčové, protože interní znalost procesu a technické mapování se musí spojit." },
    ],
    related: ["problem-app-takeover", "problem-modernize-legacy-app", "problem-rescue-incomplete-project", "guide-how-to-take-over-an-existing-app-safely", "guide-how-to-run-app-takeover-audit", "guide-how-to-decide-app-needs-rewrite", "tool-release-stabilization-checklist", "inquiry"],
    fitFor: ["běžící aplikace po původním dodavateli", "rozpracované projekty bez technického vedení", "systémy, které potřebují stabilizaci před dalším růstem"],
    fitNot: ["projekty bez přístupu do repozitářů a infrastruktury", "čistě kosmetické redesigny", "okamžitý rewrite bez auditu a priorit"],
  }),
  service({
    translationKey: "service-internal-tools-development",
    locale: "cs",
    slug: "interni-systemy-na-miru",
    title: "Interní systém na míru | Workflow, reporting a nahrazení Excelu",
    h1: "Interní systém na míru pro operativu, workflow a reporting",
    description: "Vyvíjím interní systémy na míru pro firmy, které potřebují nahradit Excel, ruční operativu nebo nepřehlednou kombinaci více nástrojů.",
    primaryQuery: "interní systém na míru",
    heroTitle: "Interní systém na míru místo Excelu, e-mailů a ruční koordinace",
    heroSubtitle: "Pro operativu, administrativu, reporting a schvalovací procesy, které už nefungují ve sdílených tabulkách ani v poslepované sadě nástrojů.",
    intro: [
      "Interní systém na míru má smysl tam, kde se opakuje ruční práce, přepisují se data, ztrácí se odpovědnost mezi odděleními nebo vedení nevidí aktuální stav bez ručně skládaných reportů.",
      "Dobře navržený interní nástroj neslouží jako technologická hračka. Má zrychlit práci lidí, omezit chybovost a dát firmě lepší kontrolu nad důležitým procesem.",
      "Často není potřeba obrovský projekt, ale první verze, která nahradí Excel, e-maily a ruční operativu v nejslabším místě provozu a vytvoří základ pro další etapy.",
    ],
    situationsLead: "Silný fit bývá tam, kde sdílené tabulky, e-maily a několik nespojených nástrojů už přestávají být únosné.",
    situations: ["interní administrace a backoffice", "workflow a schvalování", "evidence případů, úkolů nebo zakázek", "reporting a manažerské přehledy"],
    deliveryLead: "Řeším návrh dat, role uživatelů, klíčové obrazovky, vazby na další systémy i to, jak má první verze opravdu pomoci denní práci.",
    delivery: ["procesní návrh a rozpad scope", "full-stack interní systém", "migrace nebo napojení dat", "postupné rozšiřování podle reálného provozu"],
    processLead: "Nejčastěji začneme procesním rozsahem, prioritami a první etapou, která má řešit skutečný provozní problém místo nekonečného sběru požadavků.",
    resultsLead: "Výsledek má ulevit operativě, zpřehlednit odpovědnosti a umožnit firmě pracovat s daty i workflow pod vlastní kontrolou.",
    results: ["méně přepisování a ruční koordinace", "nižší chybovost", "lepší dohledatelnost stavu práce", "pevnější základ pro reporting a další automatizaci"],
    faq: [
      { question: "Není levnější koupit hotový interní nástroj?", answer: "Někdy ano. Pokud ale potřebujete vlastní logiku, více oddělení, specifické role nebo integrace, bývá vlastní systém dlouhodobě praktičtější." },
      { question: "Musí být interní systém velký projekt?", answer: "Nemusí. Často dává smysl začít jednou oblastí, která firmu brzdí nejvíc, a teprve potom přidávat další moduly." },
      { question: "Pomůžete i s převodem z tabulek nebo starých nástrojů?", answer: "Ano. Součástí může být migrace dat, napojení na stávající systémy i postupný přechod bez tvrdého vypnutí starého řešení." },
      { question: "Dá se interní systém spojit s reportingem?", answer: "Ano. Reporting dává největší smysl tam, kde stojí na kvalitních datech z každodenního provozu." },
    ],
    related: ["comparison-custom-vs-saas", "comparison-internal-tool-vs-spreadsheets", "problem-internal-tool", "problem-replace-spreadsheets-in-process", "use-case-internal-admin-system", "use-case-service-team-ops-system", "tool-excel-to-internal-tool-migration-checklist", "inquiry"],
    fitFor: ["firmy, kterým nestačí sdílené tabulky a e-maily", "provozy s více rolemi a odpovědnostmi", "týmy, které chtějí lepší dohled nad operativou"],
    fitNot: ["jednoduchá evidence pro jednoho uživatele", "projekty bez vlastníka procesu na straně klienta", "nákup hotového SaaS bez potřeby přizpůsobení"],
  }),
  service({
    translationKey: "service-automations-and-integrations",
    locale: "cs",
    slug: "automatizace-a-integrace",
    title: "Automatizace procesů a integrace systémů | API, workflow a data",
    h1: "Automatizace procesů a integrace systémů ve firmě",
    description: "Pomohu firmám omezit ruční práci, přepisování dat a nejasný tok informací pomocí automatizace procesů, API integrací a úprav workflow.",
    primaryQuery: "automatizace procesů ve firmě",
    heroTitle: "Automatizace procesů a integrace systémů bez další vrstvy chaosu",
    heroSubtitle: "Pro firmy, kde se data přepisují mezi ERP, CRM, e-shopem, tabulkami a interními nástroji a důležité workflow stojí na ruční koordinaci.",
    intro: [
      "Automatizace procesů dává největší smysl tam, kde firma opakovaně ztrácí čas na ručních krocích mezi několika systémy. Typicky jde o přepisování dat, kontrolu stavů, ruční spouštění návazných akcí nebo reporty z více zdrojů.",
      "První krok ale není automatizovat všechno. Nejdřív je potřeba pochopit, kde vzniká největší ztráta, kde se data rozbíjejí a které zásahy opravdu zlepší provoz místo přidání další vrstvy chaosu.",
      "Pomohu navrhnout menší první etapu, která zlepší provozní návaznost mezi systémy a ověří, kde dávají integrace a automatizace největší smysl.",
    ],
    situationsLead: "Tato služba dává smysl, když mezi systémy vzniká opakovaná ruční práce, která brzdí kapacitu lidí a vytváří chybovost.",
    situations: ["přepisování mezi ERP, CRM, e-shopem a tabulkami", "ruční kontrola plateb, termínů nebo stavů", "reporty skládané z více zdrojů", "schvalování bez jednotných pravidel", "API napojení mezi firemními systémy"],
    deliveryLead: "Neřeším jen integraci přes API. Často je potřeba upravit i interní workflow, datový model a způsob, jakým se s informacemi v procesu pracuje.",
    delivery: ["diagnostika a prioritizace automatizací", "návrh integrační vrstvy", "implementace konkrétních automatizací", "další rozvoj podle provozního přínosu"],
    processLead: "Nejdřív řešíme proces a data, ne konkrétní nástroj. Teprve potom dává smysl rozhodnout, co automatizovat, co ponechat lidem a kde je potřeba systém doplnit.",
    resultsLead: "Dobrý výsledek není co nejvíc automatických kroků, ale přehledný tok dat a menší závislost firmy na ruční koordinaci.",
    results: ["úspora času na opakovaných úkolech", "méně chyb při přepisování", "lepší návaznost mezi systémy", "jasnější podklad pro další investice do provozu"],
    faq: [
      { question: "Je vhodné automatizovat i menší firmu?", answer: "Ano, pokud se opakuje dost ruční práce nebo je provoz závislý na několika lidech. Rozhodující není velikost firmy, ale dopad procesu." },
      { question: "Řešíte pouze integrace přes API?", answer: "Ne. API je jen jedna část. Často je potřeba upravit i interní workflow, datový model nebo způsob práce lidí." },
      { question: "Umíte navázat i realizací po auditu?", answer: "Ano. Mohu dodat návrh, technickou realizaci i další rozvoj. Není nutné hledat jiného dodavatele pro samotnou implementaci." },
      { question: "Co když je problém spíš v procesu než v technologii?", answer: "I to je užitečný výstup. Lepší je pojmenovat procesní problém včas, než investovat do automatizace, která nic podstatného nezlepší." },
    ],
    related: ["problem-system-integrations", "problem-replace-spreadsheets-in-process", "guide-how-to-run-automation-discovery", "use-case-workflow-app-for-teams", "use-case-service-team-ops-system", "tool-api-integration-checklist", "tool-automation-discovery-checklist", "inquiry"],
    fitFor: ["firmy s více systémy a ručním přepisováním", "procesy závislé na ruční kontrole a dohledávání", "projekty, kde se má nejdřív zmapovat přínos automatizace"],
    fitNot: ["automatizace bez znalosti procesu a dopadu", "jednorázové skripty bez provozní odpovědnosti", "projekty postavené jen na nákupu no-code licence bez integrací"],
  }),
  service({
    translationKey: "service-custom-web-app-development",
    locale: "en",
    slug: "custom-web-application-development",
    title: "Custom web application development | Bc. Ondřej Halata (halatao.cz)",
    h1: "Custom web application development for business-critical workflows",
    description: "I design and build custom web applications for companies that need tailored workflows, internal logic, integrations, and room for long-term growth.",
    primaryQuery: "custom web application development",
    heroTitle: "Custom software when off-the-shelf tools create more friction than value",
    heroSubtitle: "Best fit for portals, internal systems, operational apps, and workflows that depend on company-specific rules, data, and integrations.",
    intro: [
      "Custom development makes sense when a company needs software shaped around its real process instead of shaping the process around a generic tool.",
      "The work is not only about shipping features. The important part is getting the structure right: data model, permissions, integration boundaries, maintainability, and an application that can grow without constant rework.",
      "I can help from scoping and architecture through delivery and ongoing improvement, or join an existing team as a senior contractor on a defined workstream.",
    ],
    situationsLead: "The strongest fit is a process with multiple roles, approvals, domain-specific rules, internal reporting, or a need to combine data from several systems into one operating view.",
    situations: ["client portals and partner extranets", "internal operations systems", "workflow and approvals", "dashboards and reporting interfaces"],
    deliveryLead: "This usually includes architecture, full-stack implementation, integration work, release discipline, and the technical choices needed for long-term operation.",
    delivery: ["solution design and phased scope", "full-stack delivery with iterative releases", "API and third-party integrations", "performance and operational hardening"],
    processLead: "We start by defining the business situation, current constraints, and the first valuable release. Then we deliver in smaller steps so decisions stay tied to real usage and real priorities.",
    resultsLead: "The outcome should be a production system that supports the business, stays maintainable, and gives the buyer confidence in future phases.",
    results: ["less manual work around the product", "more predictable future development", "clearer permission and data structure", "better long-term ownership than a patchwork stack"],
    faq: [
      { question: "Do we need a full specification before starting?", answer: "No. A clear business problem, the current workflow, and the intended outcome are enough to start discovery and shape a realistic first phase." },
      { question: "Can you work inside an existing team?", answer: "Yes. I can deliver independently or plug into an existing product or engineering team as a senior contract developer with ownership of a defined area." },
      { question: "Can we start with an MVP?", answer: "Yes. For larger initiatives, a well-scoped MVP is often the safest way to validate priorities without overbuilding the first release." },
      { question: "Do you stay involved after launch?", answer: "Yes. Ongoing support can cover improvements, bug fixing, technical debt reduction, performance work, and structured next-phase planning." },
    ],
    related: ["problem-client-portal", "comparison-custom-vs-saas", "use-case-b2b-client-portal", "use-case-b2b-partner-portal", "case-study-internal-tool-for-operations", "inquiry"],
    fitFor: ["companies with workflow-heavy business processes", "teams that need tailored software instead of forced SaaS compromises", "buyers planning for long-term product ownership"],
    fitNot: ["basic marketing sites", "one-off microsites with no application logic", "projects driven only by lowest-cost bidding"],
  }),
  service({
    translationKey: "service-existing-app-takeover",
    locale: "en",
    slug: "existing-app-takeover",
    title: "Existing app takeover | Bc. Ondřej Halata (halatao.cz)",
    h1: "Existing app takeover and structured improvement",
    description: "I take over existing or partially delivered web applications, reduce delivery risk, stabilise the stack, and create a realistic path for ongoing improvement.",
    primaryQuery: "existing app takeover",
    heroTitle: "Take over the app without betting the business on a rewrite",
    heroSubtitle: "Useful when a supplier changed, a product is stuck, or the codebase works just well enough to be risky to touch.",
    intro: [
      "Many teams need help after a vendor handover, an unfinished delivery, or a period where the application kept moving without strong technical ownership.",
      "The hardest part is rarely the code alone. It is the uncertainty around what can change safely and what might break operations.",
      "That is why the first step is not a dramatic rebuild. The right first move is to map dependencies, release flow, operational risk, and the real business pressure around the system.",
    ],
    situationsLead: "This service is valuable when the system is already important to the business but future delivery feels risky, opaque, or overly dependent on inherited knowledge.",
    situations: ["vendor or team handover", "unfinished delivery with no technical lead", "running app with unclear operational risk", "product roadmap blocked by technical uncertainty"],
    deliveryLead: "The first phase focuses on codebase orientation, deployment review, risk mapping, and a prioritised plan grounded in business impact rather than technical aesthetics.",
    delivery: ["codebase and dependency review", "deployment and environment assessment", "risk mapping for critical workflows", "stabilisation priorities based on impact"],
    processLead: "Once the system is mapped, we can define what needs immediate protection, what should be improved incrementally, and whether any bigger rewrite is actually justified.",
    resultsLead: "The main outcome is decision confidence: you understand the risk, the practical next steps, and the technical cost of different delivery paths.",
    results: ["clearer technical picture", "less rewrite pressure by default", "faster onboarding into the inherited stack", "safer basis for ongoing product work"],
    faq: [
      { question: "Can you take over an app with little or no documentation?", answer: "Yes. That is common. It requires a structured discovery phase based on the codebase, infrastructure, release flow, and people who know the business process." },
      { question: "Does an older stack automatically mean we should rebuild?", answer: "No. The right question is what concrete risk or delivery friction the current stack creates. Age alone is not a business case for a rewrite." },
      { question: "Can you continue with ongoing development after the audit?", answer: "Yes. I can stay on for stabilisation and delivery, or support an internal team with architecture, implementation, and technical direction." },
      { question: "Can you work alongside internal staff?", answer: "Yes. Existing-app takeovers work best when technical discovery and internal process knowledge are combined." },
    ],
    related: ["problem-app-takeover", "problem-modernize-legacy-app", "comparison-rewrite-vs-incremental-app-improvement", "guide-how-to-run-app-takeover-audit", "guide-how-to-decide-app-needs-rewrite", "tool-release-stabilization-checklist", "inquiry"],
    fitFor: ["running applications after a vendor or team change", "unfinished products that need structure and technical ownership", "systems that need stabilisation before bigger roadmap work"],
    fitNot: ["projects with no access to infrastructure or source code", "pure visual redesigns without technical ownership", "rewrite-first mandates with no discovery phase"],
  }),
  service({
    translationKey: "service-internal-tools-development",
    locale: "en",
    slug: "internal-tools-development",
    title: "Internal tools development | Bc. Ondřej Halata (halatao.cz)",
    h1: "Internal tools development for operations, approvals, and reporting",
    description: "I build internal tools for teams that need to replace spreadsheets, fragmented admin work, and slow manual coordination with a system built around real operations.",
    primaryQuery: "internal tools development",
    heroTitle: "Internal tools that match how the company actually works",
    heroSubtitle: "A strong fit for operations-heavy teams, admin workflows, approvals, dashboards, and processes that no longer belong in spreadsheets and inboxes.",
    intro: [
      "Internal tools become necessary when repeated manual work, spreadsheet handoffs, and disconnected admin tools start slowing down operations.",
      "The cost is not only time. It also shows up as poor visibility, inconsistent data, and work that depends on specific people remembering specific steps.",
      "That can start as a focused first release around one painful workflow rather than a giant programme with unclear payback.",
    ],
    situationsLead: "The strongest fit is a business process handled by several people or teams where visibility, responsibility, and data quality are currently weak.",
    situations: ["backoffice administration", "workflow and approvals", "internal case or order tracking", "management reporting views"],
    deliveryLead: "I usually work on process framing, data structure, roles, key workflows, and the first release that already improves real day-to-day operations.",
    delivery: ["process and scope design", "full-stack internal tool delivery", "data migration or system integration", "phased rollout based on operational value"],
    processLead: "We define the process scope, the important roles, and the first meaningful release. That first release should solve a real operational problem, not sit in discovery for months.",
    resultsLead: "A strong internal tool reduces manual coordination, improves accountability, and gives the company a system it can evolve under its own priorities.",
    results: ["less spreadsheet and inbox dependency", "lower error rate", "better work-in-progress visibility", "cleaner foundation for reporting and automation"],
    faq: [
      { question: "Would an off-the-shelf admin product be cheaper?", answer: "Sometimes, yes. But if the process, data, roles, or integration needs are specific enough, a custom internal tool is often the cleaner long-term choice." },
      { question: "Does an internal tool have to be a large programme?", answer: "No. It is often smarter to start with one workflow or one department and expand once the first release proves useful." },
      { question: "Can you help migrate from spreadsheets or old tools?", answer: "Yes. That can include staged migration, data import, and integration work so the new tool supports the transition instead of disrupting it." },
      { question: "Can internal tools include dashboards and reporting?", answer: "Yes. Reporting is often most valuable when it sits on top of better operational data collected through the tool itself." },
    ],
    related: ["problem-internal-tool", "problem-replace-spreadsheets-in-process", "comparison-internal-tool-vs-spreadsheets", "use-case-internal-approval-system", "tool-excel-to-internal-tool-migration-checklist", "inquiry"],
    fitFor: ["operations-heavy teams replacing spreadsheets and inboxes", "companies with multi-role internal workflows", "buyers who want a long-term internal system instead of patchwork tooling"],
    fitNot: ["single-user micro tools", "projects without a clear process owner on the client side", "simple SaaS purchases with no tailoring requirement"],
  }),
  service({
    translationKey: "service-automations-and-integrations",
    locale: "en",
    slug: "automations-and-integrations",
    title: "Automations and integrations | Bc. Ondřej Halata (halatao.cz)",
    h1: "Automations and integrations for messy business workflows",
    description: "I help companies reduce manual work, connect disconnected systems, and design practical automations that improve operations instead of adding another layer of chaos.",
    primaryQuery: "automations and integrations",
    heroTitle: "Connect the systems and remove the repetitive manual work",
    heroSubtitle: "Useful when teams are re-entering data, checking statuses by hand, building reports from multiple sources, or relying on people to keep workflows moving manually.",
    intro: [
      "Automation creates the most value when a company is repeatedly losing time on manual handoffs between systems.",
      "The symptoms are usually visible in re-entered data, email-based approvals, manual checks, exception handling, or reporting stitched together from multiple tools.",
      "The first step is to understand which losses matter most, where the data breaks, and what should remain under human control.",
    ],
    situationsLead: "The strongest signals are repeated work, fragmented system ownership, and business processes that slow down because information has to be found, copied, or verified manually.",
    situations: ["ERP, CRM, ecommerce, and spreadsheet handoffs", "manual status or payment checks", "reporting across disconnected tools", "approval chains with no consistent rules"],
    deliveryLead: "The work can include the analysis, the integration design, and the implementation itself. API work is only one part of the picture; process and data structure matter just as much.",
    delivery: ["automation diagnostic and prioritisation", "integration layer design", "implementation of focused automations", "iterative follow-up based on operational value"],
    processLead: "The focus is the process and the data model, not a fashionable automation platform. If the underlying flow is unclear, automation only spreads the confusion faster.",
    resultsLead: "The right outcome is not maximum automation. It is a cleaner flow of data, less avoidable manual work, and better control over the process.",
    results: ["time saved on repetitive work", "fewer transfer mistakes", "better system-to-system continuity", "clearer case for future investment"],
    faq: [
      { question: "Is automation relevant for smaller companies too?", answer: "Yes. Company size matters less than repetition, friction, and dependency on manual coordination." },
      { question: "Do you only handle API integrations?", answer: "No. API work is part of it, but many useful automation projects also require workflow changes, better data structure, or a supporting internal interface." },
      { question: "Can you implement the changes after the review?", answer: "Yes. I can stay involved from the initial mapping stage through delivery and follow-up improvement work." },
      { question: "What if the real problem is a broken process, not missing automation?", answer: "That is still a useful outcome. It is better to identify a process issue early than to spend money automating something that will remain inefficient." },
    ],
    related: ["problem-system-integrations", "guide-how-to-run-automation-discovery", "use-case-workflow-app-for-teams", "use-case-service-team-ops-system", "tool-automation-discovery-checklist", "inquiry"],
    fitFor: ["companies with manual cross-system work", "teams relying on repetitive status checks or spreadsheet transfers", "buyers who want practical automation, not tooling theatre"],
    fitNot: ["automation with no process ownership", "throwaway scripts with no operational accountability", "no-code licence purchases with no integration strategy"],
  }),
  service({
    translationKey: "service-ai-automation-and-integrations",
    locale: "cs",
    slug: "ai-automatizace-a-integrace",
    title: "AI automatizace procesů a integrace pro firmy | Bc. Ondřej Halata (halatao.cz)",
    h1: "AI automatizace procesů a integrace pro firmy",
    description:
      "Pomohu firmám využít AI tam, kde navazuje na reálný proces, interní systém nebo integraci mezi nástroji a dokáže snížit ruční práci, chybovost nebo čas ztracený dohledáváním informací.",
    primaryQuery: "ai automatizace procesů",
    heroTitle: "AI automatizace procesů bez další vrstvy chaosu",
    heroSubtitle:
      "Pro firmy, kde se data přepisují mezi systémy, operativa stojí na lidech a AI má smysl jen tam, kde reálně šetří čas nebo snižuje chybovost.",
    intro: [
      "AI dává smysl ve chvíli, kdy navazuje na existující procesy, systémy a data. Ne jako izolovaný nástroj, ale jako vrstva nad tím, co už ve firmě běží.",
      "Typicky jde o situace, kdy se opakují stejné kroky nad daty, lidé ručně třídí nebo kontrolují informace a důležitá rozhodnutí stojí na dohledávání v dokumentech, e-mailech nebo více systémech najednou.",
      "Cílem není nasadit AI za každou cenu. Cílem je odstranit zbytečnou práci, zkrátit průchod procesem a navrhnout řešení, které dává provozně smysl.",
    ],
    situationsLead: "Tato služba dává smysl tam, kde už firma má opakovaný proces, ale ruční práce kolem textů, dokumentů nebo příchozí agendy zbytečně zatěžuje lidi.",
    situations: [
      "ruční třídění e-mailů, požadavků nebo formulářů",
      "dohledávání informací v interních dokumentech a poznámkách",
      "opakované přepisování nebo kontrola dat mezi systémy",
      "workflow, kde AI může doplnit interní systém nebo integraci",
    ],
    deliveryLead: "AI nedávám do firmy jako samostatnou atrakci. Nejčastěji jde o rozšíření automatizace, interního systému nebo integrační vrstvy mezi nástroji.",
    delivery: [
      "návrh vhodného AI use case nad konkrétním procesem",
      "napojení AI na interní systém, dokumenty nebo příchozí agendu",
      "integrace do workflow a návazných automatizací",
      "ověření první verze a následné ladění podle provozu",
    ],
    processLead: "Nejdřív řešíme proces, vstupy a kvalitu dat. Teprve potom dává smysl rozhodnout, jestli je AI opravdu správná vrstva a jak ji zapojit bez zbytečné složitosti.",
    resultsLead: "Dobrý výsledek není mít AI v procesu za každou cenu, ale méně ruční práce, rychlejší dohledání informací a lepší provozní návaznost.",
    results: [
      "méně rutinní ruční práce v opakovaných krocích",
      "rychlejší práce s dokumenty, texty a požadavky",
      "lepší návaznost mezi lidmi, systémem a automatizací",
      "jasnější rozhodnutí, kde AI dává smysl i do dalšího rozvoje",
    ],
    faq: [
      { question: "Je AI vhodná pro každý firemní proces?", answer: "Ne. Nejlépe funguje tam, kde je proces aspoň částečně stabilní, opakovaný a kde má firma rozumně dostupná data nebo dokumenty." },
      { question: "Musí se kvůli tomu měnit celý interní systém?", answer: "Nemusí. Často je lepší navázat na existující systém nebo workflow a doplnit jen konkrétní AI vrstvu tam, kde dává největší smysl." },
      { question: "Je to použitelné i pro menší firmu?", answer: "Ano, pokud se opakují stejné typy požadavků, práce s dokumenty nebo ruční administrativa, která už začíná brzdit kapacitu lidí." },
    ],
    related: [
      "service-automations-and-integrations",
      "service-internal-tools-development",
      "problem-ai-in-business-process",
      "guide-when-ai-integration-makes-sense",
      "use-case-ai-internal-documents",
      "use-case-ai-intake-triage",
      "inquiry",
    ],
    fitFor: [
      "firmy s opakovanou administrativní nebo textovou agendou",
      "procesy, kde AI dává smysl jako vrstva nad systémem nebo workflow",
      "buyery, kteří chtějí praktické využití AI místo hype implementace",
    ],
    fitNot: [
      "AI projekt bez jasného use case a ownera procesu",
      "snaha nahradit nevyřešený chaos dalším nástrojem",
      "experiment bez návaznosti na provozní potřebu firmy",
    ],
  }),
  service({
    translationKey: "service-ai-automation-and-integrations",
    locale: "en",
    slug: "ai-automation-and-integrations",
    title: "AI process automation and integrations for companies | Bc. Ondřej Halata (halatao.cz)",
    h1: "AI process automation and integrations for companies",
    description:
      "I help companies use AI where it builds on a real process, internal system, or system integration and can reduce manual work, error rate, or time lost to repetitive document and information handling.",
    primaryQuery: "ai process automation",
    heroTitle: "AI process automation without adding another layer of chaos",
    heroSubtitle:
      "For companies where data moves manually between systems, operations depend on people, and AI only makes sense when it saves time or reduces operational friction.",
    intro: [
      "AI makes sense when it builds on existing processes, systems, and data. Not as an isolated tool, but as a practical layer on top of how the company already operates.",
      "Typical situations include repeated work on text and data, manual sorting of incoming requests, and teams losing time because they have to search for answers across documents, emails, and several systems.",
      "The goal is not to deploy AI for its own sake. The goal is to remove unnecessary work, shorten the process, and design an operating layer that holds up in real delivery.",
    ],
    situationsLead: "This service is a strong fit where the company already has a repeated process, but manual work around text, documents, or incoming requests is consuming too much team capacity.",
    situations: [
      "manual triage of emails, requests, or form submissions",
      "searching for answers across internal documents and notes",
      "repeated validation or transfer of data between systems",
      "workflow where AI can extend an internal system or integration layer",
    ],
    deliveryLead: "I do not position AI as a standalone gimmick. In most cases it works best as an extension of automation, internal tooling, or the integration layer between systems.",
    delivery: [
      "selection of the right AI use case for a specific process",
      "AI integration with internal tools, documents, or intake workflows",
      "implementation inside the broader workflow and follow-up automation",
      "first-release validation and iterative refinement based on live usage",
    ],
    processLead: "The first step is the process, the inputs, and the quality of data. Only then does it make sense to decide whether AI is the right layer and how to add it without unnecessary complexity.",
    resultsLead: "The best result is not 'having AI in the process'. It is less manual work, faster access to information, and stronger operational continuity.",
    results: [
      "less routine manual work in repeated steps",
      "faster handling of documents, text, and incoming requests",
      "better connection between people, systems, and automation",
      "clearer understanding of where AI is worth expanding further",
    ],
    faq: [
      { question: "Is AI a good fit for every business process?", answer: "No. It works best where the process is at least somewhat stable, repeated, and supported by usable data or documents." },
      { question: "Do we need to rebuild the whole internal system?", answer: "No. In many cases the smarter route is to extend the current workflow or system with a focused AI layer where it creates the highest practical value." },
      { question: "Is this useful for smaller companies too?", answer: "Yes, especially when the same request types, document work, or administrative tasks already consume too much team time." },
    ],
    related: [
      "service-automations-and-integrations",
      "service-internal-tools-development",
      "problem-ai-in-business-process",
      "guide-when-ai-integration-makes-sense",
      "use-case-ai-internal-documents",
      "use-case-ai-intake-triage",
      "inquiry",
    ],
    fitFor: [
      "companies with recurring text-heavy or admin-heavy operations",
      "processes where AI extends an internal tool or workflow",
      "buyers who want practical AI, not theatre",
    ],
    fitNot: [
      "AI projects with no use case or process owner",
      "trying to hide process chaos behind another tool",
      "experiments with no operational link to the business",
    ],
  }),
];
