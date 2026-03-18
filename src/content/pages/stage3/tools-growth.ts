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
];
