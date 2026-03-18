// Generated content: additional high-intent use-case pages. Safe to edit manually.

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
  scenarios: string[];
  includes: string[];
  outcomes: string[];
  faq: FAQItem[];
  related: string[];
  fitFor: string[];
  fitNot: string[];
};

function useCase(seed: UseCaseSeed): ContentPage {
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
      eyebrow: isCs ? "Příklad řešení" : "Use case",
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
        title: isCs ? "Kdy tento typ řešení dává smysl" : "When this type of solution makes sense",
        body: [
          isCs
            ? "Use case není šablona pro každou firmu. Je to reprezentativní model situace, kde dává podobný systém jasný obchodní a provozní smysl."
            : "This is not a universal template. It is a representative model of situations where a similar system makes clear commercial and operational sense.",
        ],
        bullets: seed.scenarios,
      },
      {
        title: isCs ? "Co bývá součástí řešení" : "What the solution usually includes",
        body: [
          isCs
            ? "Konkrétní scope se liší podle firmy, ale opakují se podobné role, workflow, datové vazby a místa, kde je potřeba jasná odpovědnost."
            : "The exact scope varies by company, but similar patterns repeat around roles, workflow, data boundaries, and ownership.",
        ],
        bullets: seed.includes,
      },
      {
        title: isCs ? "Jaký výsledek by měl systém přinést" : "What the system should improve",
        body: [
          isCs
            ? "Smyslem není jen nahradit starý nástroj novým. Důležité je zjednodušit práci lidí, zpřehlednit stav a snížit zbytečné ruční zásahy."
            : "The point is not merely replacing one tool with another. The important part is reducing friction, clarifying state, and lowering avoidable manual work.",
        ],
        bullets: seed.outcomes,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.fitFor, notFor: seed.fitNot },
    cta: isCs
      ? {
          label: "Probrat podobné zadání",
          href: "/cs/popsat-projekt",
          note: "Stačí krátce popsat proces, role a co dnes nefunguje. Navrhnu rozumný další krok.",
        }
      : {
          label: "Explore the project fit",
          href: "/en/discuss-your-project",
          note: "A short summary of the workflow, users, and current friction is enough to assess the fit.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const growthUseCasePages: ContentPage[] = [
  useCase({
    translationKey: "use-case-b2b-client-portal",
    locale: "cs",
    slug: "b2b-klientsky-portal",
    title: "B2B klientský portál na míru | Halatao",
    h1: "B2B klientský portál pro zakázky, dokumenty a samoobsluhu",
    description: "Příklad B2B klientského portálu na míru pro firmy, které chtějí sjednotit komunikaci, dokumenty, stavy zakázek a samoobslužné kroky partnerů nebo klientů.",
    primaryQuery: "B2B klientský portál na míru",
    heroTitle: "Jeden portál místo e-mailových vláken a ručního posílání informací",
    heroSubtitle: "Vhodné pro B2B služby a provozy, kde klienti opakovaně řeší stav zakázky, dokumenty, požadavky nebo další kroky.",
    intro: [
      "B2B klientský portál dává smysl ve chvíli, kdy firma obsluhuje opakované klientské interakce a nechce je dál držet v e-mailech, sdílených složkách a ruční podpoře.",
      "Silná první verze obvykle nezačíná širokým seznamem funkcí, ale několika klíčovými scénáři s největším dopadem na klientský servis i interní operativu.",
    ],
    scenarios: [
      "klienti opakovaně žádají stav zakázky nebo služby",
      "dokumenty a přílohy se posílají ručně",
      "firma potřebuje bezpečnější samoobslužné úkony pro klienta",
      "obchodní nebo operativní tým tráví moc času podporou opakujících se dotazů",
    ],
    includes: [
      "uživatelské účty, role a přístupy",
      "přehled stavu, historie a dalších kroků",
      "správu dokumentů, notifikace a akce",
      "napojení na interní systém, CRM nebo fakturační tok",
    ],
    outcomes: [
      "méně ruční klientské podpory",
      "lepší dostupnost informací pro klienta",
      "důvěryhodnější servisní proces",
      "pevnější základ pro další digitální služby",
    ],
    faq: [
      { question: "Musí být portál rozsáhlý od začátku?", answer: "Nemusí. U B2B portálů bývá nejlepší začít několika nejčastějšími klientskými scénáři." },
      { question: "Lze portál napojit na stávající interní systém?", answer: "Ano. Právě návaznost na interní data a workflow je pro podobný projekt klíčová." },
      { question: "Je portál vhodný i bez interní administrace?", answer: "Většinou ne. Dobře fungující portál bývá navázaný na rozumné backoffice rozhraní." },
    ],
    related: ["service-custom-web-app-development", "problem-client-portal", "comparison-custom-vs-saas", "inquiry"],
    fitFor: ["B2B firmy s opakovanou klientskou komunikací", "služby a provozy s dokumenty, stavy a samoobsluhou", "týmy, které chtějí snížit support overhead"],
    fitNot: ["jednorázová prezentační microsite", "portál bez návaznosti na interní data", "projekty bez jasného provozního use case"],
  }),
  useCase({
    translationKey: "use-case-internal-approval-system",
    locale: "cs",
    slug: "interni-schvalovaci-system",
    title: "Interní schvalovací systém na míru | Halatao",
    h1: "Interní schvalovací systém pro více rolí a jasná pravidla",
    description: "Příklad interního schvalovacího systému na míru pro firmy, kde se žádosti, výjimky nebo objednávky schvalují přes e-maily, tabulky a ruční dohledávání stavu.",
    primaryQuery: "interní schvalovací systém",
    heroTitle: "Schvalování, které už nemusí stát na ručním hlídání a přeposílání",
    heroSubtitle: "Pro firmy, kde schvalovací proces ovlivňuje finance, provoz nebo odpovědnost mezi týmy.",
    intro: [
      "Schvalovací systém je typický use case tam, kde je potřeba hlídat role, pravidla, výjimky a auditní stopu a současný stav stojí na e-mailech a manuálních připomínkách.",
      "Dobře navržené řešení má zkrátit průchod procesem, zpřehlednit odpovědnost a zlepšit kontrolu nad tím, kde se schválení zaseklo.",
    ],
    scenarios: [
      "schvalování objednávek, výdajů nebo žádostí",
      "více úrovní oprávnění a výjimek",
      "nutnost auditní stopy a dohledatelnosti",
      "ruční připomínání a eskalace mezi týmy",
    ],
    includes: [
      "workflow stavy a schvalovací pravidla",
      "role, oprávnění a historie kroků",
      "notifikace, připomínky a eskalace",
      "napojení na ERP, účetnictví nebo interní agendu",
    ],
    outcomes: [
      "rychlejší průchod schvalovacím procesem",
      "menší množství ruční koordinace",
      "lepší auditní stopa a odpovědnost",
      "nižší provozní chybovost",
    ],
    faq: [
      { question: "Lze zachovat ruční schválení tam, kde je potřeba?", answer: "Ano. Smyslem není vše bezhlavě automatizovat, ale oddělit pravidla od výjimek." },
      { question: "Je to vhodné i pro menší firmu?", answer: "Ano, pokud schvalování reálně zpomaluje provoz nebo vytváří finanční a procesní riziko." },
      { question: "Dá se systém nasadit po částech?", answer: "Ano. Často dává smysl začít jedním typem žádosti nebo jedním oddělením." },
    ],
    related: ["service-internal-tools-development", "service-automations-and-integrations", "problem-internal-tool", "inquiry"],
    fitFor: ["firmy s více rolemi a schvalovací logikou", "procesy s auditní stopou a výjimkami", "týmy, které chtějí snížit ruční dohled nad stavem"],
    fitNot: ["jednoduchý proces bez rolí a pravidel", "firma bez ownera schvalovacího workflow", "nákup hotového formuláře bez integrací"],
  }),
  useCase({
    translationKey: "use-case-management-dashboard",
    locale: "cs",
    slug: "dashboard-pro-management",
    title: "Dashboard pro management na míru | Halatao",
    h1: "Dashboard pro management nad daty z více systémů",
    description: "Příklad management dashboardu na míru pro firmy, které potřebují spojit data z více zdrojů a zlepšit rozhodování bez ručně skládaných reportů.",
    primaryQuery: "dashboard pro management",
    heroTitle: "Přehled pro vedení, který nestojí na ručně lepených exportech",
    heroSubtitle: "Vhodné tam, kde management potřebuje rychle vidět stav firmy, výjimky a trendy nad několika systémy.",
    intro: [
      "Management dashboard dává smysl ve chvíli, kdy se zásadní rozhodnutí opírají o neaktuální exporty, ručně spojovaná čísla nebo reporting závislý na konkrétních lidech.",
      "Smyslem dashboardu není jen hezký graf. Důležité je, aby čísla měla jasný původ, dávala smysl v provozním kontextu a šla bezpečně interpretovat.",
    ],
    scenarios: [
      "vedení skládá reporty z více systémů",
      "čísla se mezi nástroji rozcházejí",
      "chybí včasná viditelnost do výjimek a problémů",
      "operativa a management pracují s jinou verzí reality",
    ],
    includes: [
      "sjednocení klíčových datových zdrojů",
      "role a pohledy podle typu uživatele",
      "přehled KPI, trendů a varování",
      "napojení na interní aplikaci nebo BI vrstvu",
    ],
    outcomes: [
      "rychlejší a jistější rozhodování",
      "méně ručního reportingu",
      "lepší důvěra v data",
      "včasnější reakce na provozní výjimky",
    ],
    faq: [
      { question: "Není lepší koupit hotové BI?", answer: "Někdy ano. Pokud ale dashboard potřebuje specifické role, workflow nebo vazbu na vlastní aplikaci, dává custom řešení větší smysl." },
      { question: "Musí se nejdřív vyčistit data?", answer: "Aspoň v klíčových oblastech ano. Jinak dashboard jen vizualizuje stávající chaos." },
      { question: "Je dashboard jen pro vedení?", answer: "Ne vždy. Často je praktický i pro operativní role, které potřebují včas vidět odchylky a výjimky." },
    ],
    related: ["service-internal-tools-development", "use-case-reporting-dashboard", "service-automations-and-integrations", "inquiry"],
    fitFor: ["firmy s daty rozptýlenými v několika systémech", "management, který dnes spoléhá na ruční reporting", "týmy, které potřebují jednotnější pohled na stav firmy"],
    fitNot: ["dashboard bez důvěryhodného zdroje dat", "jednorázový reporting bez provozního dopadu", "projekty bez ownera na straně businessu"],
  }),
  useCase({
    translationKey: "use-case-workflow-app-for-teams",
    locale: "cs",
    slug: "workflow-aplikace-pro-tym",
    title: "Workflow aplikace pro tým | Halatao",
    h1: "Workflow aplikace pro tým a opakované provozní procesy",
    description: "Příklad workflow aplikace pro tým, který potřebuje řídit opakovaný proces, role, stavy a návazné kroky bez ruční koordinace přes tabulky a chaty.",
    primaryQuery: "workflow aplikace pro tým",
    heroTitle: "Jeden pracovní tok místo přeposílání, tabulek a ručního dohledávání",
    heroSubtitle: "Pro týmy, kde se stejný proces opakuje stále dokola a dnes je příliš závislý na ruční koordinaci.",
    intro: [
      "Workflow aplikace bývá správný typ řešení tam, kde proces není jen evidence dat, ale sled navazujících kroků mezi více rolemi, výjimkami a termíny.",
      "Dobře navržená workflow aplikace pomáhá zpřehlednit odpovědnost, zkrátit průchod procesem a omezit počet míst, kde se práce ztrácí nebo zasekává.",
    ],
    scenarios: [
      "opakované procesy s více rolemi a stavy",
      "ruční předávání práce mezi lidmi nebo odděleními",
      "nízká dohledatelnost, kde se proces zasekl",
      "potřeba napojení na další interní nebo externí systémy",
    ],
    includes: [
      "workflow stavy, pravidla a oprávnění",
      "detail položky, historie a auditní stopu",
      "notifikace, termíny a výjimky",
      "napojení na CRM, ERP nebo další interní nástroje",
    ],
    outcomes: [
      "vyšší průchodnost procesu",
      "nižší závislost na ruční koordinaci",
      "lepší dohled nad výjimkami a zpožděním",
      "pevnější základ pro další automatizaci",
    ],
    faq: [
      { question: "Je workflow aplikace totéž co interní admin?", answer: "Ne úplně. Workflow aplikace bývá více postavená kolem stavů, pravidel a průchodu procesem." },
      { question: "Dá se spustit jen pro jednu část procesu?", answer: "Ano. To bývá často nejrozumnější první krok." },
      { question: "Lze kombinovat workflow aplikaci a automatizace?", answer: "Ano. V praxi se tyto dvě vrstvy často doplňují." },
    ],
    related: ["service-internal-tools-development", "service-automations-and-integrations", "use-case-workflow-automation-tools", "inquiry"],
    fitFor: ["týmy s opakovaným multi-step procesem", "provozy s více rolemi a výjimkami", "firmy, které chtějí zkrátit průchod a zlepšit dohled"],
    fitNot: ["jednoduchý seznam úkolů bez workflow", "proces bez jasných stavů a odpovědností", "projekty bez ochoty popsat skutečný provoz"],
  }),
  useCase({
    translationKey: "use-case-b2b-client-portal",
    locale: "en",
    slug: "b2b-client-portal",
    title: "B2B client portal development | Halatao",
    h1: "B2B client portal for orders, documents, and self-service",
    description: "A B2B client portal use case for companies that want one place for client communication, documents, order status, and self-service actions.",
    primaryQuery: "B2B client portal development",
    heroTitle: "One portal instead of email threads and manual updates",
    heroSubtitle: "Useful for B2B services and operations where clients repeatedly need status updates, documents, requests, or guided next steps.",
    intro: [
      "A B2B client portal makes sense when the company keeps repeating the same communication and support work around service delivery, documents, or account actions.",
      "The strongest first version usually focuses on the few client scenarios with the highest operational impact rather than trying to digitise everything at once.",
    ],
    scenarios: [
      "clients repeatedly ask for status updates",
      "documents and attachments are shared manually",
      "self-service actions would reduce support load",
      "internal teams spend too much time answering the same questions",
    ],
    includes: [
      "accounts, roles, and access control",
      "status views, history, and next-step guidance",
      "documents, notifications, and actions",
      "integration with internal systems, CRM, or billing flow",
    ],
    outcomes: [
      "lower manual support overhead",
      "better client-side visibility",
      "more credible service delivery",
      "a stronger base for future digital services",
    ],
    faq: [
      { question: "Does the portal need to be large from the start?", answer: "No. A narrower first version focused on the most repeated client interactions is often the better move." },
      { question: "Can it connect to an existing internal system?", answer: "Yes. In most cases the portal is only valuable if it is grounded in internal workflow and data." },
      { question: "Do we also need an admin side?", answer: "Usually yes. A useful portal normally depends on a sensible internal operating layer as well." },
    ],
    related: ["service-custom-web-app-development", "problem-client-portal", "comparison-custom-vs-saas", "inquiry"],
    fitFor: ["B2B companies with repeated client communication", "services with document and status handling", "teams that want to reduce support cost through self-service"],
    fitNot: ["one-off brochure sites", "a portal with no internal data connection", "projects with no operational use case behind them"],
  }),
  useCase({
    translationKey: "use-case-internal-approval-system",
    locale: "en",
    slug: "internal-approval-system",
    title: "Internal approval system | Halatao",
    h1: "Internal approval system for multi-step business processes",
    description: "An internal approval system use case for companies where requests, purchases, exceptions, or approvals still move through email, spreadsheets, and manual chasing.",
    primaryQuery: "internal approval system",
    heroTitle: "Approvals that no longer depend on manual chasing and forwarding",
    heroSubtitle: "Useful when approval flow affects cost, compliance, or operational speed across several people and teams.",
    intro: [
      "Approval systems are a strong fit when the process depends on roles, rules, exceptions, and traceability, but the current reality lives in inboxes and manual reminders.",
      "A good implementation should shorten cycle time, clarify ownership, and make it obvious where the process is blocked and why.",
    ],
    scenarios: [
      "approval of purchases, expenses, or requests",
      "several approval layers and exception rules",
      "need for traceability and audit history",
      "manual reminders and escalation across teams",
    ],
    includes: [
      "workflow states and approval logic",
      "roles, permissions, and action history",
      "notifications, reminders, and escalation",
      "integration with ERP, finance, or internal operations systems",
    ],
    outcomes: [
      "faster approval throughput",
      "less manual coordination",
      "clearer accountability and audit trail",
      "lower operational error rate",
    ],
    faq: [
      { question: "Can some approvals stay manual?", answer: "Yes. The point is not blind automation but separating the rules from the exceptions." },
      { question: "Is this relevant for a smaller company too?", answer: "Yes, if approval flow is already creating financial or operational drag." },
      { question: "Can it be rolled out in stages?", answer: "Yes. Starting with one request type or one team is often the safer path." },
    ],
    related: ["service-internal-tools-development", "service-automations-and-integrations", "problem-internal-tool", "inquiry"],
    fitFor: ["companies with repeated approval logic", "multi-role workflows with audit needs", "teams trying to reduce manual follow-up and delays"],
    fitNot: ["simple single-step approval flows", "buyers with no process owner", "form tools with no integration or rules"],
  }),
  useCase({
    translationKey: "use-case-management-dashboard",
    locale: "en",
    slug: "management-dashboard",
    title: "Management dashboard development | Halatao",
    h1: "Management dashboard across several business systems",
    description: "A management dashboard use case for companies that need a more reliable operational and leadership view across several systems.",
    primaryQuery: "management dashboard development",
    heroTitle: "A leadership dashboard that does not rely on manually stitched exports",
    heroSubtitle: "Useful when management decisions depend on fragmented reports, conflicting numbers, or late visibility into operational issues.",
    intro: [
      "A management dashboard is valuable when important decisions rely on reports assembled by hand or on data that is always one step behind reality.",
      "The value is not the chart itself. It is confidence in where the numbers come from and whether they reflect the live business well enough to act on.",
    ],
    scenarios: [
      "leadership reporting assembled from several tools",
      "conflicting numbers across systems",
      "poor visibility into exceptions or delays",
      "operations and management using different versions of reality",
    ],
    includes: [
      "unification of the key data sources",
      "role-based views and access",
      "KPIs, trends, and alerts",
      "integration with internal tooling or BI layers",
    ],
    outcomes: [
      "faster and more confident decisions",
      "less manual reporting work",
      "higher trust in operational data",
      "earlier visibility into issues",
    ],
    faq: [
      { question: "Would off-the-shelf BI be better?", answer: "Sometimes. But when the dashboard needs product-specific roles, workflow context, or close integration with your internal system, custom work can be the better fit." },
      { question: "Do we need cleaner data first?", answer: "At least in the critical areas, yes. Otherwise the dashboard simply visualises the existing confusion." },
      { question: "Is this only for leadership?", answer: "Not always. Operational teams often benefit just as much from timely visibility and exception monitoring." },
    ],
    related: ["service-internal-tools-development", "use-case-reporting-dashboard", "service-automations-and-integrations", "inquiry"],
    fitFor: ["companies with several fragmented data sources", "leadership teams relying on manual reporting", "teams that need a more shared view of business state"],
    fitNot: ["dashboards with no reliable data source", "one-off reporting with no operational value", "projects with no business owner for the numbers"],
  }),
  useCase({
    translationKey: "use-case-workflow-app-for-teams",
    locale: "en",
    slug: "workflow-app-for-teams",
    title: "Workflow app for teams | Halatao",
    h1: "Workflow app for teams running repeatable operations",
    description: "A workflow app use case for teams that need to manage repeatable processes, states, and responsibilities without relying on spreadsheet and chat coordination.",
    primaryQuery: "workflow app for teams",
    heroTitle: "One operating flow instead of forwarding work by hand",
    heroSubtitle: "A strong fit where the same process repeats across several people, states, deadlines, and exception paths.",
    intro: [
      "A workflow app is often the right shape when the process is more than data entry. It is a chain of steps, responsibilities, exceptions, and deadlines that needs clearer control.",
      "The right result is a more reliable process with less manual chasing, better visibility, and cleaner handoffs across the team.",
    ],
    scenarios: [
      "repeatable processes with several roles and states",
      "manual handover between people or departments",
      "low visibility into where work is stuck",
      "need to connect the process to other internal or external systems",
    ],
    includes: [
      "workflow states, rules, and permissions",
      "item detail, history, and audit trail",
      "notifications, deadlines, and exceptions",
      "integration with CRM, ERP, or internal tools",
    ],
    outcomes: [
      "higher process throughput",
      "less manual coordination dependency",
      "better visibility into delays and exceptions",
      "stronger base for further automation",
    ],
    faq: [
      { question: "Is a workflow app the same as an internal admin system?", answer: "Not exactly. A workflow app is more explicitly built around states, handoffs, and process flow." },
      { question: "Can this start with only one part of the process?", answer: "Yes. That is often the most sensible first step." },
      { question: "Can it combine with automation work?", answer: "Yes. In practice the application and automation layers often reinforce each other." },
    ],
    related: ["service-internal-tools-development", "service-automations-and-integrations", "use-case-workflow-automation-tools", "inquiry"],
    fitFor: ["teams with repeatable multi-step operations", "business processes with several roles and exception paths", "buyers trying to shorten cycle time and improve control"],
    fitNot: ["simple task lists with no workflow logic", "processes with no clear states or ownership", "projects with no willingness to describe the real operating model"],
  }),
];
