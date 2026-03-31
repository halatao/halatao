// Generated content: use-case pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type UseCaseSeed = {
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
  problems: string[];
  scope: string[];
  outcomes: string[];
  faq: FAQItem[];
  related: string[];
};

function defineUseCasePage(seed: UseCaseSeed): ContentPage {
  const isCs = seed.locale === "cs";
  return definePage({
    translationKey: seed.translationKey,
    stage: 2,
    locale: seed.locale,
    pageType: "use_case",
    slug: seed.slug,
    segments: [isCs ? "priklady" : "use-cases", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "commercial",
    hero: {
      eyebrow: isCs ? "Příklad použití" : "Use case",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: { label: isCs ? "Popsat podobný projekt" : "Discuss a similar project", href: buildInquiryHref(seed.locale) },
    },
    intro: seed.intro,
    sections: [
      { title: isCs ? "Jaký problém tento typ aplikace řeší" : "What problem this type of app solves", body: [isCs ? "Use case dává smysl tam, kde je potřeba převést důležitý proces do přehledného systému s jasnou rolí uživatelů a dat." : "This use case works when an important process needs to move into a clearer system with explicit roles, states, and data ownership."], bullets: seed.problems },
      { title: isCs ? "Co bývá součástí řešení" : "What the solution usually includes", body: [isCs ? "Konkrétní scope se liší podle firmy, ale základ bývá podobný: role, workflow, přehled stavu, oprávnění a napojení na další systémy." : "The exact scope varies by company, but the recurring core is similar: roles, workflow, visibility, permissions, and integrations."], bullets: seed.scope },
      { title: isCs ? "Jaký výsledek by měl systém přinést" : "What the system should improve", body: [isCs ? "Smyslem není jen digitalizovat starý chaos. Důležité je zjednodušit práci lidí, zpřehlednit odpovědnosti a zlepšit kontrolu nad procesem." : "The goal is not to digitise old chaos. The point is to make work clearer, responsibilities sharper, and the process easier to control."], bullets: seed.outcomes },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.outcomes, notFor: isCs ? ["pouhé přenesení chaosu do nové obrazovky"] : ["moving the same chaos into a new UI"] },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const useCasePages: ContentPage[] = [
  defineUseCasePage({
    translationKey: "use-case-client-portal",
    locale: "cs",
    slug: "klientsky-portal",
    title: "Klientský portál na míru | Bc. Ondřej Halata (halatao.cz)",
    h1: "Klientský portál na míru pro komunikaci, data a samoobsluhu",
    description: "Příklad klientského portálu na míru pro firmy, které chtějí zpřehlednit komunikaci se zákazníky, jejich dokumenty, stav služeb a samoobslužné úkony.",
    primaryQuery: "klientský portál na míru",
    heroTitle: "Klientský portál místo roztříštěné komunikace",
    heroSubtitle: "Pro firmy, které chtějí koncovým zákazníkům nebo klientům nabídnout jedno místo pro informace, dokumenty, stavy a další kroky.",
    intro: ["Klientský portál dává smysl tam, kde se opakuje komunikace se zákazníkem kolem stavu služby, dokumentů, objednávek nebo požadavků.", "Místo e-mailových vláken a ručního posílání informací může mít klient jedno přehledné rozhraní s historií, přístupy a návaznými kroky bez závislosti na manuální obsluze týmu."],
    problems: ["opakované dotazy na stav zakázky nebo požadavku", "ruční posílání dokumentů", "nepřehledná historie komunikace", "potřeba samoobslužných kroků pro klienta"],
    scope: ["uživatelské účty a role", "přehled stavu a historie", "dokumenty, notifikace a akce", "napojení na interní systém nebo CRM"],
    outcomes: ["méně ruční klientské podpory", "lepší dostupnost informací pro klienta", "větší důvěryhodnost procesu", "pevnější základ pro další rozvoj služeb"],
    faq: [
      { question: "Je klientský portál vhodný i pro menší firmu?", answer: "Ano, pokud se opakují stejné dotazy, dokumenty nebo úkony a portál může odlehčit obsluhu." },
      { question: "Musí být portál rozsáhlý od začátku?", answer: "Nemusí. Často stačí menší první verze zaměřená na nejčastější interakce." },
      { question: "Lze portál napojit na stávající aplikaci?", answer: "Ano. U většiny projektů je napojení na existující data nebo interní proces klíčové." },
      { question: "Je potřeba i administrace pro interní tým?", answer: "Velmi často ano. Klientský portál obvykle dává smysl jen s rozumným backoffice zázemím." },
    ],
    related: ["service-custom-web-app-development", "comparison-custom-vs-saas", "guide-how-to-scope-a-custom-web-application", "inquiry"],
  }),
  defineUseCasePage({
    translationKey: "use-case-internal-admin-system",
    locale: "cs",
    slug: "interni-admin-system",
    title: "Interní admin systém na míru | Bc. Ondřej Halata (halatao.cz)",
    h1: "Interní admin systém pro operativu a správu agendy",
    description: "Příklad interního admin systému pro firmy, které potřebují lépe řídit operativu, stavy případů, role a každodenní administrativu.",
    primaryQuery: "interní admin systém",
    heroTitle: "Jeden pracovní nástroj místo několika polofunkčních",
    heroSubtitle: "Interní admin systém je vhodný tam, kde tým potřebuje pracovat nad stejnými daty a současný stav je rozpadlý mezi tabulky, e-maily a staré nástroje.",
    intro: [
      "Admin systém často vzniká jako reakce na rostoucí operativu. Tým má více lidí, více případů a víc pravidel, ale stále pracuje v kombinaci tabulek, starých formulářů a ručních kontrol.",
      "Dobře navržené interní rozhraní má zjednodušit práci, zpřehlednit odpovědnost a dát vedení lepší přehled o stavu.",
    ],
    problems: ["nejasný stav zakázek nebo případů", "ruční přepisování a kontrola", "rozdílné informace podle toho, kdo se dívá", "obtížné zaškolení nových lidí"],
    scope: ["role a oprávnění", "seznamy, detail případu a workflow", "filtry, auditní stopa a notifikace", "napojení na další interní nebo externí systémy"],
    outcomes: ["rychlejší operativa", "nižší chybovost", "lepší dohledatelnost práce", "připravenost na další automatizaci"],
    faq: [
      { question: "Není admin systém jen hezčí tabulka?", answer: "Neměl by být. Dobrý admin systém řeší i workflow, role, validace a návaznost na další procesy." },
      { question: "Má smysl redesignovat starou administraci nebo stavět novou?", answer: "Záleží na technickém stavu a business prioritě. Někdy stačí postupné zlepšení, jindy je lepší nový modul." },
      { question: "Musí mít admin systém reporting?", answer: "Ne vždy, ale pokud z něj vedení potřebuje dělat rozhodnutí, reporting bývá důležitou součástí." },
      { question: "Dá se spouštět po částech?", answer: "Ano. U interních nástrojů bývá etapové nasazení často nejbezpečnější." },
    ],
    related: ["service-internal-tools-development", "case-study-internal-tool-for-operations", "problem-internal-tool", "location-brno"],
  }),
  defineUseCasePage({
    translationKey: "use-case-reporting-dashboard",
    locale: "cs",
    slug: "reporting-dashboard",
    title: "Reporting dashboard na míru | Bc. Ondřej Halata (halatao.cz)",
    h1: "Reporting dashboard na míru pro vedení i operativu",
    description: "Příklad reporting dashboardu na míru pro firmy, které potřebují sjednotit data z více zdrojů a zjednodušit rozhodování.",
    primaryQuery: "reporting dashboard na míru",
    heroTitle: "Přehled nad daty, která dnes žijí v několika systémech",
    heroSubtitle: "Dashboard dává smysl ve chvíli, kdy rozhodování stojí na ručně skládaných reportech a neaktuálních exportech.",
    intro: [
      "Reporting dashboard není jen vizualizace. Je to způsob, jak sjednotit klíčová data a dát různým rolím přehled, který opravdu používají.",
      "Hodnota dashboardu stojí na kvalitě zdrojových dat a na tom, že čísla odpovídají reálnému provozu, ne jen hezkému grafu.",
    ],
    problems: ["reporty se skládají ručně", "čísla v různých systémech si odporují", "vedení nemá aktuální přehled", "operativa nevidí problémy včas"],
    scope: ["sjednocení datových zdrojů", "role a pohledy podle uživatele", "klíčové metriky a alerty", "napojení na interní systém nebo BI vrstvu"],
    outcomes: ["rychlejší rozhodování", "menší závislost na ručním reportingu", "lepší včasná reakce na problémy", "větší důvěra v data"],
    faq: [
      { question: "Není lepší pořídit hotové BI?", answer: "Někdy ano. Pokud ale potřebujete specifické workflow, role nebo návaznost na vlastní aplikaci, dává custom dashboard větší smysl." },
      { question: "Musí se nejdřív řešit datová kvalita?", answer: "Ano, alespoň v klíčových oblastech. Bez toho dashboard jen vizualizuje chaos." },
      { question: "Je dashboard jen pro management?", answer: "Ne. Často je velmi užitečný i pro operativní role, které potřebují vidět aktuální stav nebo výjimky." },
      { question: "Lze dashboard napojit na existující interní systém?", answer: "Ano. To bývá častý a velmi praktický scénář." },
    ],
    related: ["service-internal-tools-development", "service-automations-and-integrations", "technology-api-integrations", "guide-how-to-estimate-a-custom-web-app"],
  }),
  defineUseCasePage({
    translationKey: "use-case-workflow-automation-tools",
    locale: "cs",
    slug: "workflow-automatizace",
    title: "Workflow automatizace ve firmě | Bc. Ondřej Halata (halatao.cz)",
    h1: "Workflow automatizace a nástroje pro opakované procesy",
    description: "Příklad workflow automatizace pro firmy, které chtějí snížit ruční práci, lépe řídit schvalování a zrychlit návazné kroky mezi systémy.",
    primaryQuery: "workflow automatizace",
    heroTitle: "Proces, který už nemusí stát na ručním hlídání",
    heroSubtitle: "Pro opakované firemní workflow, kde se schvaluje, přepisuje, kontroluje a dohledává víc, než je zdravé.",
    intro: [
      "Workflow automatizace je vhodná tam, kde se opakují stejné kroky, rozhodovací pravidla a návaznosti mezi lidmi a systémy.",
      "Nejde jen o automatické spouštění. Důležité je vědět, co má být plně automatické, co má zůstat pod kontrolou lidí a jak řešit výjimky.",
    ],
    problems: ["pomalé schvalovací řetězce", "ruční přepisování mezi systémy", "zpoždění kvůli nejasnému vlastníkovi kroku", "složitá dohledatelnost, kde se proces zasekl"],
    scope: ["workflow pravidla a stavy", "notifikace a eskalace", "integrace na zdrojové systémy", "kontrolní rozhraní pro výjimky a audit"],
    outcomes: ["rychlejší průchod procesem", "menší ruční koordinace", "lepší dohled nad výjimkami", "vyšší spolehlivost opakované agendy"],
    faq: [
      { question: "Je workflow automatizace vhodná i bez velkého ERP?", answer: "Ano. Důležitější než velikost systému je opakovanost procesu a množství ruční koordinace." },
      { question: "Lze zachovat ruční schválení tam, kde je potřeba?", answer: "Ano. Smyslem není automatizovat všechno, ale rozlišit pravidla a výjimky." },
      { question: "Co když dnes proces není dobře popsaný?", answer: "To je běžné. První krok je proces zmapovat a teprve potom automatizovat." },
      { question: "Může být výsledkem i menší interní nástroj?", answer: "Ano. Často je potřeba workflow podpořit i jednoduchým interním rozhraním pro lidi." },
    ],
    related: ["service-automations-and-integrations", "guide-how-to-run-automation-discovery", "problem-system-integrations", "case-study-multi-system-integration", "use-case-service-team-ops-system", "tool-api-integration-checklist"],
  }),
  defineUseCasePage({
    translationKey: "use-case-client-portal",
    locale: "en",
    slug: "client-portal-development",
    title: "Client portal development | Bc. Ondřej Halata (halatao.cz)",
    h1: "Client portal development for communication, visibility, and self-service",
    description: "A client portal use case for companies that want one place for customer communication, customer documents, status tracking, and self-service actions.",
    primaryQuery: "client portal development",
    heroTitle: "A client portal instead of fragmented communication",
    heroSubtitle: "Useful when end customers or clients need a clearer place for status, documents, messages, and next steps.",
    intro: [
      "A client portal makes sense when the same communication with customers repeats around case status, documents, service progress, or self-service actions.",
      "Instead of email threads and manual updates, customers can use one structured interface with history, access control, and clearer next steps.",
    ],
    problems: ["repeated customer status questions", "manual document sharing", "poor communication history", "need for customer self-service actions"],
    scope: ["accounts and permissions", "status and history views", "documents, actions, and notifications", "integration with CRM or internal systems"],
    outcomes: ["less manual support load", "better customer visibility", "more credible service delivery", "cleaner foundation for future service development"],
    faq: [
      { question: "Is a client portal relevant for a smaller company?", answer: "Yes, if the same customer requests and updates keep repeating and the portal can reduce support overhead." },
      { question: "Does the portal need to be large from day one?", answer: "No. A focused first version around the most common interactions is often the best start." },
      { question: "Can it connect to an existing app?", answer: "Yes. In most cases the portal is only valuable if it connects to existing data and workflow." },
      { question: "Do we also need an internal admin side?", answer: "Usually yes. A useful client portal normally depends on a sensible internal backoffice layer too." },
    ],
    related: ["service-custom-web-app-development", "comparison-custom-vs-saas", "guide-how-to-scope-a-custom-web-application", "inquiry"],
  }),
  defineUseCasePage({
    translationKey: "use-case-internal-admin-system",
    locale: "en",
    slug: "internal-admin-system",
    title: "Internal admin system development | Bc. Ondřej Halata (halatao.cz)",
    h1: "Internal admin system for operations and process control",
    description: "An internal admin system use case for companies that need better operational control, clearer states, role-based work, and structured daily administration.",
    primaryQuery: "internal admin system",
    heroTitle: "One working system instead of several half-working ones",
    heroSubtitle: "A strong fit when the team needs a shared operational view and the current setup is fragmented across spreadsheets, email, and old tooling.",
    intro: [
      "Internal admin systems usually appear when operations grow faster than the tools supporting them.",
      "The goal is not prettier forms. It is faster work, clearer ownership, and a more reliable operating model for the team.",
    ],
    problems: ["unclear case or order status", "manual checks and copying", "different answers depending on who looks", "hard onboarding for new team members"],
    scope: ["roles and permissions", "lists, case detail, and workflow", "filters, audit trail, and notifications", "integration with other internal or external systems"],
    outcomes: ["faster operations", "lower error rate", "better traceability", "readiness for further automation"],
    faq: [
      { question: "Is an admin system just a nicer spreadsheet?", answer: "It should not be. A useful admin system also handles workflow, permissions, validation, and process continuity." },
      { question: "Should we redesign the old admin or build a new one?", answer: "That depends on the technical state and business priority. Sometimes incremental improvement is enough. Sometimes a new module is cleaner." },
      { question: "Does the system need reporting?", answer: "Not always, but it often matters if operational or management decisions depend on the data." },
      { question: "Can it be rolled out in stages?", answer: "Yes. Phased rollout is often the safest path for internal operational tools." },
    ],
    related: ["service-internal-tools-development", "case-study-internal-tool-for-operations", "problem-internal-tool", "comparison-custom-vs-saas"],
  }),
  defineUseCasePage({
    translationKey: "use-case-reporting-dashboard",
    locale: "en",
    slug: "reporting-dashboard-development",
    title: "Reporting dashboard development | Bc. Ondřej Halata (halatao.cz)",
    h1: "Reporting dashboard development for management and operations",
    description: "A reporting dashboard use case for companies that need to unify data from several systems and make decisions with a more reliable operational view.",
    primaryQuery: "reporting dashboard development",
    heroTitle: "A usable view across data that currently lives in several systems",
    heroSubtitle: "Useful when decisions rely on manually assembled reports and outdated exports.",
    intro: [
      "A reporting dashboard is not just visualisation. It is a way to unify important data and give different roles a view they can actually act on.",
      "Its value depends on source data quality and on whether the dashboard reflects real operations rather than producing nice-looking but weak numbers.",
    ],
    problems: ["manual reporting work", "conflicting numbers across tools", "lack of current management visibility", "operations discovering problems too late"],
    scope: ["data source unification", "role-based views", "key metrics and alerts", "connection to internal systems or BI layers"],
    outcomes: ["faster decisions", "less manual reporting dependency", "earlier visibility into problems", "higher trust in data"],
    faq: [
      { question: "Would an off-the-shelf BI tool be better?", answer: "Sometimes. But if the dashboard needs workflow context, role-specific behaviour, or close integration with your product, a custom solution can be the better fit." },
      { question: "Do we need to clean up the data first?", answer: "Yes, at least in the critical areas. Otherwise the dashboard only visualises existing confusion." },
      { question: "Is this only for management?", answer: "No. Operational teams often benefit just as much from timely visibility and exception monitoring." },
      { question: "Can it connect to an existing internal system?", answer: "Yes. That is a common and very practical implementation pattern." },
    ],
    related: ["service-internal-tools-development", "service-automations-and-integrations", "technology-api-integrations", "guide-how-to-estimate-a-custom-web-app"],
  }),
  defineUseCasePage({
    translationKey: "use-case-workflow-automation-tools",
    locale: "en",
    slug: "workflow-automation-tools",
    title: "Workflow automation tools | Bc. Ondřej Halata (halatao.cz)",
    h1: "Workflow automation tools for repeatable business processes",
    description: "A workflow automation use case for companies that need to reduce manual work, improve approvals, and move recurring processes faster across systems and teams.",
    primaryQuery: "workflow automation tools",
    heroTitle: "A process that no longer depends on people manually keeping it alive",
    heroSubtitle: "Useful for repeatable workflows with approvals, checks, data transfers, and too much coordination by hand.",
    intro: [
      "Workflow automation is valuable when the same steps, decisions, and handoffs repeat across people and systems.",
      "The goal is not automation for its own sake. The important part is defining what should be automated, what should stay human, and how exceptions are handled.",
    ],
    problems: ["slow approval chains", "manual cross-system re-entry", "delays caused by unclear ownership", "poor visibility into where the process is stuck"],
    scope: ["workflow rules and states", "notifications and escalations", "integration with source systems", "control interface for exceptions and audit"],
    outcomes: ["faster process throughput", "less manual coordination", "better handling of exceptions", "more reliable repeatable operations"],
    faq: [
      { question: "Is workflow automation relevant without a large ERP?", answer: "Yes. Repetition and coordination cost matter more than the size of the system landscape." },
      { question: "Can some approvals stay manual?", answer: "Yes. The point is to separate rules from exceptions, not automate everything blindly." },
      { question: "What if the current process is poorly documented?", answer: "That is common. The first step is to map it well enough to automate the parts that genuinely make sense." },
      { question: "Can the result include a small internal tool too?", answer: "Yes. Many automation projects also need a supporting interface for people handling oversight and exceptions." },
    ],
    related: ["service-automations-and-integrations", "guide-how-to-run-automation-discovery", "problem-system-integrations", "case-study-multi-system-integration", "use-case-service-team-ops-system", "tool-api-integration-checklist"],
  }),
];
