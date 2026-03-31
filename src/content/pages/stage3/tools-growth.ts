// Generated content: additional utility templates for scoping and automation discovery. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type ToolSeed = {
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
  includes: string[];
  usage: string[];
  outcomes: string[];
  faq: FAQItem[];
  related: string[];
  fitFor: string[];
  fitNot: string[];
};

function tool(seed: ToolSeed): ContentPage {
  const isCs = seed.locale === "cs";

  return definePage({
    translationKey: seed.translationKey,
    stage: 3,
    locale: seed.locale,
    pageType: "tool",
    slug: seed.slug,
    segments: [isCs ? "sablony" : "templates", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "transactional",
    hero: {
      eyebrow: isCs ? "Šablona / checklist" : "Template / checklist",
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
        title: isCs ? "Co má asset pokrýt" : "What the asset should cover",
        body: [
          isCs
            ? "Cílem není vytvářet administrativu pro administrativu. Smyslem je rychle odhalit slepá místa a zlepšit kvalitu prvního rozhodnutí."
            : "The point is not paperwork for its own sake. The value is revealing blind spots early and improving the first serious project decision.",
        ],
        bullets: seed.includes,
      },
      {
        title: isCs ? "Jak ho použít v praxi" : "How to use it in practice",
        body: [
          isCs
            ? "Asset má fungovat jako pracovní pomůcka před scopem, discovery nebo úvodním hovorem. Ne jako finální dokument pro archiv."
            : "The asset should work as a practical tool before scoping, discovery, or an intro call rather than as a final document for its own sake.",
        ],
        bullets: seed.usage,
      },
      {
        title: isCs ? "Jaký výsledek by měl přinést" : "What result it should create",
        body: [
          isCs
            ? "Dobře použitá šablona zkrátí cestu k prvnímu rozumnému kroku a sníží riziko špatně položeného projektu."
            : "When used well, the template shortens the path to the first sensible next step and reduces the risk of starting the project on weak assumptions.",
        ],
        bullets: seed.outcomes,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.fitFor, notFor: seed.fitNot },
    cta: isCs
      ? {
          label: "Probrat zadání",
          href: "/cs/popsat-projekt",
          note: "Pokud podobný asset potřebujete převést do reálného projektu, stačí krátký kontext a navrhnu další krok.",
        }
      : {
          label: "Discuss your project",
          href: "/en/discuss-your-project",
          note: "If you want help turning this into an actual delivery plan, a short context summary is enough.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const growthToolPages: ContentPage[] = [
  tool({
    translationKey: "tool-excel-to-internal-tool-migration-checklist",
    locale: "cs",
    slug: "checklist-migrace-z-excelu-do-interniho-systemu",
    title: "Checklist migrace z Excelu do interniho systemu | Bc. Ondrej Halata (halatao.cz)",
    h1: "Checklist: co si pripravit pred migraci z Excelu do interniho systemu",
    description: "Prakticky checklist pro firmy, ktere chteji prevest dulezity proces z Excelu do interniho systemu a potrebuji si srovnat data, workflow, role a hranice prvni etapy.",
    primaryQuery: "migrace z excelu do interniho systemu",
    heroTitle: "Migrace z Excelu neni kopirovani tabulky do nove obrazovky",
    heroSubtitle: "Pracovni checklist pro firmy, ktere chteji prevest dulezity proces z tabulek do interniho systemu bez ztraty reality provozu a bez zbytecneho prescopovani.",
    intro: [
      "Prechod z Excelu do interniho systemu byva slaby ve chvili, kdy se firma snazi jen prepsat stavajici tabulku do noveho UI bez pochopeni workflow, vyjimek a odpovednosti.",
      "Tento checklist pomaha oddelit, co je skutecne potreba prevest, jaka data maji smysl, kde vznikaji problemy a co ma resit prvni verze systemu.",
    ],
    includes: [
      "hlavni workflow, role a odpovednosti v procesu",
      "zdrojova data, duplicity a rucni prepisy",
      "vyjimky, schvalovani a navaznosti na dalsi nastroje",
      "hranice prvni etapy a co zatim neprevadet",
    ],
    usage: [
      "pred scopingem interniho systemu",
      "pri rozhodovani, co prevest z tabulek jako prvni",
      "jako podklad pro workshop nebo prvni odhad",
    ],
    outcomes: [
      "realistictejsi prvni scope interniho systemu",
      "mensi riziko, ze se do systemu prenese stavajici chaos",
      "lepsi rozhodnuti o prioritach prvni etapy",
      "silnejsi zaklad pro migraci dat i dalsi rozvoj procesu",
    ],
    faq: [
      { question: "Musime prevest vsechny tabulky najednou?", answer: "Nemusite. Casto je lepsi zacit jednim klicovym workflow a teprve potom pridavat dalsi casti procesu." },
      { question: "Ma smysl resit i kvalitu dat pred migraci?", answer: "Ano. Pokud se do noveho systemu prenese neprehledna nebo duplicitni data bez kontroly, chaos se jen presune jinam." },
      { question: "Nahradi checklist detailni analyzu a navrh?", answer: "Ne. Je to pracovni vstup, ktery pomuze zlepsit kvalitu nasledneho scope, priorit a technickeho navrhu." },
    ],
    related: ["service-internal-tools-development", "problem-replace-spreadsheets-in-process", "tool-internal-tool-scope-worksheet", "inquiry"],
    fitFor: ["firmy prevadejici dulezity proces z tabulek do systemu", "tymy, ktere chteji zuzit prvni etapu migrace", "projekty s vice rolemi, daty a navaznostmi na dalsi nastroje"],
    fitNot: ["jednoducha tabulka bez workflow a bez provozniho dopadu", "projekty bez ownera procesu", "snaha jen mechanicky prekreslit tabulku bez zmeny prace"],
  }),
  tool({
    translationKey: "tool-release-stabilization-checklist",
    locale: "cs",
    slug: "checklist-stabilizace-release-procesu-aplikace",
    title: "Checklist stabilizace release procesu aplikace | Bc. Ondrej Halata (halatao.cz)",
    h1: "Checklist pro stabilizaci release procesu aplikace pred dalsim rozvojem",
    description: "Prakticky checklist pro firmy, ktere chteji stabilizovat release proces aplikace, snizit riziko nasazeni a ziskat jistejsi zaklad pro dalsi vyvoj.",
    primaryQuery: "stabilizace release procesu aplikace",
    heroTitle: "Nejvetsi release problem casto neni v deploy scriptu, ale v nejistote kolem celeho procesu",
    heroSubtitle: "Pracovni checklist pro tymy, ktere chteji snizit riziko nasazeni, zprehlednit ownership a odstranit slaba mista driv, nez zacne dalsi kriticka etapa vyvoje.",
    intro: [
      "Krehky release proces nebyva jen technicky detail. Promita se do pomalejsiho delivery, vyssi opatrnosti pri zmenach a mensi duvery v to, ze dalsi krok neprinese novy incident.",
      "Checklist pomaha rychle projit, kde release stoji na improvizaci, slabych pristupech, chybejicim monitoringu nebo na znalosti jednoho cloveka.",
    ],
    includes: [
      "prehled release kroku, ownershipu a schvalovani",
      "pristupy, prostredi, rollback a provozni zavislosti",
      "monitoring, logovani a overeni po nasazeni",
      "mista, kde release dnes stoji na rucni improvizaci nebo skryte znalosti",
    ],
    usage: [
      "pred takeoverem nebo stabilizacni etapou aplikace",
      "pri revizi release procesu pred dulezitym releasem",
      "jako podklad pro audit provoznich a delivery rizik",
    ],
    outcomes: [
      "lepsi prehled o release slabinach a ownershipu",
      "nizsi riziko nasazeni a regresi",
      "rychlejsi orientace pri takeoveru nebo stabilizaci",
      "pevnejsi zaklad pro dalsi delivery etapy",
    ],
    faq: [
      { question: "Je checklist uzitecny i kdyz release funguje, jen je pomaly?", answer: "Ano. Pomaly release byva casto signal, ze proces stoji na prilis velke opatrnosti, rucnich krocich nebo nejasnem ownershipu." },
      { question: "Pomuze i bez plne automatizovaneho deploye?", answer: "Ano. Smyslem je nejdriv pochopit slaba mista a rizika. Automatizace release je az dalsi krok, ne jediny cil." },
      { question: "Je to vhodne i pri prevzeti cizi aplikace?", answer: "Ano. Prave takeover je casta situace, kdy je potreba release proces rychle zmapovat a stabilizovat driv, nez zacne vetsi rozvoj." },
    ],
    related: ["service-existing-app-takeover", "guide-how-to-take-over-an-existing-app-safely", "comparison-rewrite-vs-incremental-app-improvement", "inquiry"],
    fitFor: ["tymy s krehkym nebo pomalym release procesem", "firmy pred takeoverem nebo stabilizacni etapou aplikace", "projekty, kde release riziko brzdi dalsi zmeny"],
    fitNot: ["projekty bez pristupu k provoznimu prostredi a ownerum release procesu", "ciste teoreticke zlepsovani bez vazby na realne nasazovani", "situace, kde je problem jen v prioritach backlogu, ne v release modelu"],
  }),
  tool({
    translationKey: "tool-internal-tool-scope-worksheet",
    locale: "cs",
    slug: "scope-worksheet-pro-interni-system",
    title: "Scope worksheet pro interní systém | Bc. Ondřej Halata (halatao.cz)",
    h1: "Scope worksheet pro interní systém na míru",
    description: "Praktický scope worksheet pro interní systém: proces, role, stavy, výjimky, data a hranice první verze bez zbytečného přestřelení zadání.",
    primaryQuery: "scope worksheet pro interní systém",
    heroTitle: "Interní systém se zadává lépe, když nejdřív popíšete proces, ne seznam obrazovek",
    heroSubtitle: "Pracovní šablona pro firmy, které potřebují srovnat role, workflow, výjimky a hranice první etapy interního systému.",
    intro: [
      "Scope worksheet pomáhá převést rozptýlený interní proces do uchopitelného zadání. Hodí se ve chvíli, kdy firma ví, že potřebuje vlastní systém, ale nechce sklouznout k nekonečnému wish listu.",
      "Nejdůležitější část není seznam funkcí. Důležité je ujasnit si, kdo v procesu pracuje, jaké jsou stavy, kde vznikají výjimky a co má řešit první verze.",
    ],
    includes: [
      "hlavní role a odpovědnosti",
      "klíčové workflow a stavy",
      "výjimky, schválení a návaznosti",
      "datové zdroje a hranici první etapy",
    ],
    usage: [
      "před scope workshopem",
      "při interním sladění businessu a delivery",
      "jako podklad pro první odhad a architektonický návrh",
    ],
    outcomes: [
      "realističtější první scope",
      "méně přestřelených očekávání",
      "lepší debata o prioritách první verze",
      "silnější základ pro interní systém nebo workflow aplikaci",
    ],
    faq: [
      { question: "Je worksheet vhodný i bez interního IT týmu?", answer: "Ano. Pomůže hlavně business ownerům a operativě srovnat zadání dřív, než se připojí technická strana." },
      { question: "Nahradí worksheet detailní analýzu?", answer: "Ne. Je to pracovní vstup, který zlepší kvalitu následného scope a rozhodování." },
      { question: "Má smysl i pro menší první etapu?", answer: "Ano. Právě u menší první etapy pomáhá dobře oddělit must-have od zbytku." },
    ],
    related: ["service-internal-tools-development", "problem-internal-tool", "guide-when-internal-tool-better-than-saas", "inquiry"],
    fitFor: ["firmy zadávající interní systém poprvé", "týmy, které chtějí zúžit první verzi", "projekty s více rolemi a workflow"],
    fitNot: ["jednoduchá evidence bez procesní logiky", "zadání bez business ownera", "asset pro čistě designový návrh bez provozního kontextu"],
  }),
  tool({
    translationKey: "tool-automation-discovery-checklist",
    locale: "cs",
    slug: "discovery-checklist-pro-automatizace",
    title: "Discovery checklist pro automatizace | Bc. Ondřej Halata (halatao.cz)",
    h1: "Discovery checklist pro automatizace a workflow integrace",
    description: "Praktický checklist pro discovery fázi automatizací: proces, výjimky, ownership, datové zdroje a provozní dopad před startem integračního projektu.",
    primaryQuery: "discovery checklist pro automatizace",
    heroTitle: "Než začnete automatizovat, potřebujete rozumět procesu, výjimkám a ownershipu",
    heroSubtitle: "Pracovní checklist pro firmy, které chtějí odlišit smysluplnou automatizaci od drahé digitalizace chaosu.",
    intro: [
      "Automatizace bez discovery fáze často jen zrychlí špatně nastavený proces. Tento checklist pomáhá zmapovat, kde automatizace opravdu dává smysl a kde je problém spíš v ownershipu nebo workflow.",
      "Je užitečný hlavně tam, kde mezi systémy vznikají ruční kroky, výjimky a závislost na konkrétních lidech, ale firma ještě nemá jasnou prioritu prvního zásahu.",
    ],
    includes: [
      "mapu procesu a ručních kroků",
      "výjimky, schválení a chybové stavy",
      "zdrojová data, ownership a odpovědnosti",
      "dopad automatizace na provoz a další systémy",
    ],
    usage: [
      "před integračním nebo automatizačním discovery",
      "při prioritizaci automatizačních příležitostí",
      "jako podklad pro první workshop nebo audit",
    ],
    outcomes: [
      "lepší výběr prvního automatizačního zásahu",
      "méně rizika, že automatizace obejde skutečný problém",
      "jasnější návaznost mezi procesem a technickým řešením",
      "lepší podklad pro následnou implementaci",
    ],
    faq: [
      { question: "Není to totéž jako API checklist?", answer: "Ne úplně. Tady je větší důraz na proces, výjimky a business ownership ještě před technickým návrhem integrace." },
      { question: "Je checklist použitelný i bez technického týmu?", answer: "Ano. Pomůže pojmenovat důležité otázky ještě před tím, než se začne řešit konkrétní technické řešení." },
      { question: "Lze na checklist navázat implementací?", answer: "Ano. Discovery checklist může plynule přejít do návrhu priorit a realizace prvních automatizací." },
    ],
    related: ["service-automations-and-integrations", "problem-system-integrations", "tool-api-integration-checklist", "inquiry"],
    fitFor: ["firmy s ručním workflow mezi více systémy", "týmy, které chtějí prioritizovat automatizace podle dopadu", "projekty s více výjimkami a ownership otázkami"],
    fitNot: ["jednoduchá jednorázová integrace bez procesu", "projekty řešené čistě nákupem no-code licence", "situace bez přístupu k lidem, kteří proces skutečně dělají"],
  }),
  tool({
    translationKey: "tool-internal-tool-scope-worksheet",
    locale: "en",
    slug: "internal-tool-scope-worksheet",
    title: "Internal tool scope worksheet | Bc. Ondřej Halata (halatao.cz)",
    h1: "Internal tool scope worksheet for custom operations software",
    description: "A practical scope worksheet for internal tools covering workflow, roles, states, exceptions, data sources, and the boundary of the first release.",
    primaryQuery: "internal tool scope worksheet",
    heroTitle: "Internal tools are scoped better when you start with the process, not a screen list",
    heroSubtitle: "A working template for companies that need to clarify roles, workflow, exception paths, and the first delivery boundary for an internal system.",
    intro: [
      "This worksheet helps turn a scattered internal process into a workable project frame. It is useful when the company knows it needs an internal tool but wants to avoid drifting into a giant wish list.",
      "The important part is not the feature catalogue. It is clarifying who does what, which states matter, where exceptions appear, and what the first release must actually solve.",
    ],
    includes: [
      "main roles and responsibility boundaries",
      "core workflow and process states",
      "exceptions, approvals, and handoffs",
      "data sources and the first-release boundary",
    ],
    usage: [
      "before a scoping workshop",
      "for internal alignment between business and delivery",
      "as input to the first estimate and technical framing",
    ],
    outcomes: [
      "a more realistic first scope",
      "less overscoping pressure",
      "better conversations about first-release priorities",
      "a stronger base for an internal tool or workflow app",
    ],
    faq: [
      { question: "Is it useful without an internal engineering team?", answer: "Yes. It is especially useful for business owners and operations stakeholders shaping the brief before technical work starts." },
      { question: "Does the worksheet replace deeper analysis?", answer: "No. It is a working input that improves the quality of the later scoping and decision work." },
      { question: "Is it still useful for a smaller first phase?", answer: "Yes. That is exactly where the worksheet helps separate must-haves from the rest." },
    ],
    related: ["service-internal-tools-development", "problem-internal-tool", "guide-when-internal-tool-better-than-saas", "inquiry"],
    fitFor: ["companies scoping an internal tool for the first time", "teams trying to narrow the first version", "projects with several roles and workflow states"],
    fitNot: ["simple record-keeping with no process logic", "projects with no business owner", "design-only work with no operational context"],
  }),
  tool({
    translationKey: "tool-automation-discovery-checklist",
    locale: "en",
    slug: "automation-discovery-checklist",
    title: "Automation discovery checklist | Bc. Ondřej Halata (halatao.cz)",
    h1: "Automation discovery checklist for workflow and integration projects",
    description: "A practical checklist for automation discovery covering process flow, exception paths, ownership, source data, and operational impact before implementation begins.",
    primaryQuery: "automation discovery checklist",
    heroTitle: "Before automating, understand the process, the exceptions, and the ownership",
    heroSubtitle: "A working checklist for companies trying to distinguish useful automation from expensive digitalised chaos.",
    intro: [
      "Automation without discovery often just accelerates a broken process. This checklist helps map where automation is actually useful and where the real issue is process design or ownership.",
      "It is most valuable when several systems, manual steps, and exception paths are already creating delivery friction, but the first priority is still unclear.",
    ],
    includes: [
      "the actual process map and manual steps",
      "exceptions, approvals, and failure states",
      "source data, ownership, and accountability",
      "the operational impact of each automation opportunity",
    ],
    usage: [
      "before an automation or integration discovery phase",
      "when prioritising automation opportunities",
      "as input to the first workshop or diagnostic review",
    ],
    outcomes: [
      "a better choice of the first automation target",
      "less risk of automating the wrong problem",
      "clearer connection between process reality and technical delivery",
      "a stronger base for implementation planning",
    ],
    faq: [
      { question: "Is this the same as an API checklist?", answer: "Not exactly. This one puts more weight on process, exceptions, and business ownership before the technical integration design starts." },
      { question: "Is it useful without an internal technical team?", answer: "Yes. It helps the business side clarify the important questions before moving into technical solution mode." },
      { question: "Can implementation follow directly from the checklist?", answer: "Yes. The checklist can lead straight into prioritisation and delivery of the first automation steps." },
    ],
    related: ["service-automations-and-integrations", "problem-system-integrations", "tool-api-integration-checklist", "inquiry"],
    fitFor: ["companies with manual cross-system workflow", "teams trying to prioritise automation by business impact", "projects with several exception and ownership questions"],
    fitNot: ["simple one-off integrations with no process complexity", "projects treated only as a no-code licence purchase", "situations with no access to the people who actually run the process"],
  }),
  tool({
    translationKey: "tool-excel-to-internal-tool-migration-checklist",
    locale: "en",
    slug: "checklist-for-migrating-from-spreadsheets-to-an-internal-tool",
    title: "Checklist for migrating from spreadsheets to an internal tool | Bc. Ondrej Halata (halatao.cz)",
    h1: "Checklist: what to prepare before moving from spreadsheets to an internal tool",
    description: "A practical checklist for companies moving an important process out of spreadsheets into an internal tool, covering data, workflow, ownership, and first-phase boundaries.",
    primaryQuery: "migrating from spreadsheets to an internal tool",
    heroTitle: "Spreadsheet migration is not just copying rows into a new screen",
    heroSubtitle: "A working checklist for teams moving an important workflow from spreadsheets into an internal tool without overscoping the first phase.",
    intro: [
      "Spreadsheet migration usually goes wrong when the company simply tries to redraw the existing sheet in a new UI without understanding workflow, exceptions, and ownership.",
      "This checklist helps separate what actually needs to move, which data is meaningful, where the real problems sit, and what the first version should solve.",
    ],
    includes: [
      "core workflow, roles, and ownership boundaries",
      "source data, duplication, and manual re-entry points",
      "exceptions, approvals, and links to other tools",
      "the first-phase boundary and what should stay out for now",
    ],
    usage: [
      "before internal-tool scoping",
      "when deciding what to migrate from spreadsheets first",
      "as input for a workshop or first estimate",
    ],
    outcomes: [
      "a more realistic first scope",
      "less risk of moving the current chaos into the system",
      "better prioritisation of the first phase",
      "a stronger base for data migration and future workflow improvement",
    ],
    faq: [
      { question: "Do we need to migrate every spreadsheet at once?", answer: "No. It is often better to start with one critical workflow and then expand from there." },
      { question: "Should we address data quality before migration?", answer: "Yes. If poor or duplicated data is moved into the new system without review, the same problem simply appears in a new place." },
      { question: "Does the checklist replace deeper analysis and solution design?", answer: "No. It is a working input that improves the quality of later scoping, prioritisation, and technical design." },
    ],
    related: ["service-internal-tools-development", "problem-replace-spreadsheets-in-process", "tool-internal-tool-scope-worksheet", "inquiry"],
    fitFor: ["companies moving an important process out of spreadsheets", "teams trying to narrow the first migration phase", "projects with several roles, data sources, and system dependencies"],
    fitNot: ["simple spreadsheet use with no workflow impact", "projects with no process owner", "attempts to mechanically redraw a spreadsheet without changing how the work is done"],
  }),
  tool({
    translationKey: "tool-release-stabilization-checklist",
    locale: "en",
    slug: "release-process-stabilization-checklist",
    title: "Release process stabilisation checklist | Bc. Ondrej Halata (halatao.cz)",
    h1: "Checklist for stabilising an application release process before further growth",
    description: "A practical checklist for companies that want to stabilise their application release process, lower deployment risk, and create a stronger base for future delivery.",
    primaryQuery: "release process stabilization checklist",
    heroTitle: "The biggest release problem is rarely just the deploy script",
    heroSubtitle: "A working checklist for teams trying to lower deployment risk, clarify ownership, and remove weak points before the next critical delivery phase.",
    intro: [
      "A fragile release process is not just a technical detail. It shows up as slower delivery, higher anxiety around change, and less confidence that the next release will land cleanly.",
      "This checklist helps teams quickly review where release still depends on improvisation, weak access setup, missing monitoring, or knowledge concentrated in one person.",
    ],
    includes: [
      "release steps, ownership, and approval flow",
      "access, environments, rollback, and operational dependencies",
      "monitoring, logging, and post-release verification",
      "points where release still relies on manual improvisation or hidden knowledge",
    ],
    usage: [
      "before an app takeover or stabilisation phase",
      "when reviewing release process before an important launch",
      "as input to an operational and delivery risk audit",
    ],
    outcomes: [
      "better visibility into release weaknesses and ownership",
      "lower deployment and regression risk",
      "faster orientation during takeover or stabilisation",
      "a stronger base for future delivery work",
    ],
    faq: [
      { question: "Is this useful even if release works but feels slow?", answer: "Yes. Slow release is often a sign of too much manual caution, unclear ownership, or weak confidence in the process." },
      { question: "Does this help even without fully automated deploys?", answer: "Yes. The goal is to understand weak points and risk first. Automation is a later move, not the only one." },
      { question: "Is this relevant during app takeover?", answer: "Yes. Takeover is exactly when teams often need a fast map of release risk before larger delivery work begins." },
    ],
    related: ["service-existing-app-takeover", "guide-how-to-take-over-an-existing-app-safely", "comparison-rewrite-vs-incremental-app-improvement", "inquiry"],
    fitFor: ["teams with fragile or slow release process", "companies before a takeover or stabilisation phase", "projects where release risk is already slowing change"],
    fitNot: ["projects with no access to the real release environment and owners", "purely theoretical improvement work detached from real deployment", "situations where the problem is only backlog priority, not release itself"],
  }),
];
