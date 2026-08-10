import { definePage } from "@/content/builders";
import type { ContentPage } from "@/content/types";

export const auditPages: ContentPage[] = [
  definePage({
    translationKey: "automation-audit",
    translationAvailability: "optional",
    stage: 1,
    locale: "cs",
    pageType: "inquiry",
    slug: "audit-automatizace",
    segments: ["audit-automatizace"],
    title: "Posouzení možností automatizace | Ondřej Halata",
    breadcrumbLabel: "Posouzení možností automatizace",
    description: "Popište proces, který firmu zdržuje. Prověřím, zda dává smysl automatizace, jednodušší úprava workflow nebo propojení stávajících systémů.",
    primaryQuery: "audit automatizace",
    intent: "transactional",
    hero: {
      eyebrow: "Úvodní posouzení automatizace",
      title: "Zjistěte, co má smysl automatizovat jako první.",
      subtitle: "Popište opakovanou práci, používané systémy a místo, kde se proces nejčastěji zdržuje. Ozvu se s prvním technickým pohledem a doporučením dalšího kroku.",
      primaryCta: { label: "Popsat současný proces", href: "#automation-audit-form" },
    },
    intro: [
      "Nejdřív ověřím, zda je problém skutečně vhodný pro automatizaci a kde má změna největší provozní dopad.",
      "Samostatnou placenou analýzu doporučím pouze tehdy, když je potřeba projít více systémů, datových pravidel nebo důležitých výjimek.",
    ],
    sections: [
      {
        title: "Krátké úvodní ověření zdarma",
        body: ["Projdeme cíl, používané nástroje a největší omezení. Pokud lze rovnou připravit realizační návrh, není nutné prodávat samostatný audit."],
      },
      {
        title: "Samostatná analýza jen v případě potřeby",
        body: ["U procesu s více systémy, nejasnými pravidly nebo důležitými výjimkami navrhnu placenou analýzu v předem potvrzeném rozsahu. Obvykle 1 500 až 4 000 Kč."],
      },
      {
        title: "Konkrétní výstup",
        body: ["Dostanete doporučení první etapy, její rozsah, rizika a orientační cenu realizace. Pokud automatizace nedává smysl, řeknu to bez tlaku na další projekt."],
      },
      {
        title: "Co popsat ve formuláři",
        body: ["Stačí praktický kontext. Technickou dokumentaci můžete doplnit později."],
        bullets: [
          "co se dnes dělá ručně",
          "jak často se proces opakuje",
          "které systémy nebo tabulky se používají",
          "co se stane při chybě nebo zpoždění",
          "kdo proces provádí a kdo kontroluje výsledek",
          "zda už existuje API nebo technická dokumentace",
        ],
      },
    ],
    faq: [],
    related: ["service-automations-and-integrations", "guide-how-to-automate-request-processing", "problem-system-integrations", "inquiry"],
    priorityLinks: [
      { label: "Automatizace a propojení systémů", href: "/cs/sluzby/automatizace-a-integrace/" },
    ],
    fit: {
      for: ["opakovaná ruční práce", "přepisování dat mezi systémy", "procesy s dohledáváním a kontrolou výjimek"],
      notFor: ["automatizace bez přístupu k procesu a datům", "požadavek na náhradu odpovědnosti člověka nekontrolovanou AI"],
    },
    cta: {
      label: "Odeslat popis procesu",
      href: "#automation-audit-form",
      note: "Projdu uvedené informace a ozvu se s doporučením dalšího kroku.",
    },
    seo: {
      title: "Posouzení možností automatizace | Ondřej Halata",
      description: "Popište proces, který firmu zdržuje. Prověřím, zda dává smysl automatizace, jednodušší úprava workflow nebo propojení stávajících systémů.",
    },
    schema: {},
    indexable: false,
    follow: true,
  }),
];
