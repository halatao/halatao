export type ServicePricingOption = {
  title: string;
  price: string;
  description: string;
};

export type ServicePricing = {
  summary: string;
  options: readonly ServicePricingOption[];
  note: {
    title: string;
    text: string;
  };
};

export const primaryServicePricingKeys = [
  "service-company-websites",
  "service-custom-web-app-development",
  "service-automations-and-integrations",
] as const;

export const servicePricing = {
  "service-company-websites": {
    summary: "od 6 900 Kč",
    options: [
      {
        title: "Jednostránkový web",
        price: "od 6 900 Kč",
        description: "Jedna stránka, mobilní verze, formulář, základní SEO, napojení domény a jednoduchá správa obsahu.",
      },
      {
        title: "Vícestránkový firemní web",
        price: "od 10 900 Kč",
        description: "Samostatné stránky hlavního obsahu, formuláře, technické SEO a správa vybraných částí.",
      },
      {
        title: "Katalog nebo vlastní funkce",
        price: "od 14 900 Kč",
        description: "Kategorie a detail produktů či služeb, rozsáhlejší obsahová struktura nebo vlastní funkce webu.",
      },
    ],
    note: {
      title: "Rozšíření na míru",
      text: "Kalkulačky, integrace a další vlastní logika se naceňují podle konkrétního rozsahu.",
    },
  },
  "service-custom-web-app-development": {
    summary: "od 14 900 Kč",
    options: [
      {
        title: "Menší interní nástroj",
        price: "od 14 900 Kč",
        description: "Jeden jasně vymezený proces, základní datový model a omezený počet obrazovek.",
      },
      {
        title: "Standardní webová aplikace",
        price: "od 20 000 Kč",
        description: "Uživatelé, navazující data, workflow, backend, administrace a nasazení první použitelné etapy.",
      },
      {
        title: "Komplexní aplikace",
        price: "od 40 tis. Kč",
        description: "Více rolí, integrace, migrace, offline režim nebo vyšší provozní a bezpečnostní nároky.",
      },
    ],
    note: {
      title: "Potvrzení rozsahu",
      text: "Před zahájením vždy potvrdím funkce, hranice etapy a pevnou cenu konkrétní dodávky.",
    },
  },
  "service-automations-and-integrations": {
    summary: "od 9 900 Kč",
    options: [
      {
        title: "Analýza a návrh řešení",
        price: "1 500–4 000 Kč",
        description: "Rozbor procesu, používaných systémů, dat, výjimek a doporučení vhodného řešení.",
      },
      {
        title: "Automatizace nebo konektor",
        price: "od 9 900 Kč",
        description: "Jeden konkrétní proces nebo spolehlivý přenos dat mezi dvěma systémy.",
      },
      {
        title: "Správa a monitoring",
        price: "od 19 900 Kč",
        description: "Konfigurace, přehled běhu, chybové logy, opakování přenosu a jednoduché webové rozhraní.",
      },
    ],
    note: {
      title: "Úvodní konzultace",
      text: "Krátké ověření procesu a smyslu automatizace je zdarma. Rozsáhlejší řešení nacením podle počtu systémů a provozních požadavků.",
    },
  },
} as const satisfies Record<(typeof primaryServicePricingKeys)[number], ServicePricing>;

export function getServicePricing(translationKey: string): ServicePricing | undefined {
  return servicePricing[translationKey as keyof typeof servicePricing];
}
