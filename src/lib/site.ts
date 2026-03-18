// Safe to edit manually: shared site configuration and business constants.

import type { Locale } from "@/content/types";

export const siteConfig = {
  name: "Bc. Ondřej Halata (halatao.cz)",
  legalName: "Bc. Ondřej Halata",
  displayName: "Bc. Ondřej Halata",
  siteUrl: "https://www.halatao.cz",
  email: "ondrej@halatao.cz",
  phone: "+420602690920",
  phoneDisplay: "+420 602 690 920",
  linkedIn: "https://www.linkedin.com/in/halatao/",
  github: "https://github.com/halatao/",
  calendly: "https://calendly.com/ondrej-halata/30min",
  cookiebotId: "c016eaf8-a8fe-4cfe-9693-727411d95ca8",
  gtmId: "GTM-M63V79JM",
  gaMeasurementId: "G-GYSMGC2M4V",
  ogImage: "/og/halatao-social.svg",
  locales: ["cs", "en"] as Locale[],
  availableLanguages: ["cs", "en"],
  serviceAreaCountry: "Czech Republic",
  serviceAreaRegions: ["Prague", "South Moravian Region", "Moravian-Silesian Region"],
  serviceAreaCities: [
    "Prague",
    "Brno",
    "Ostrava",
    "Plzen",
    "Olomouc",
    "Liberec",
    "Hradec Kralove",
    "Pardubice",
    "Ceske Budejovice",
    "Usti nad Labem",
    "Zlin",
  ],
};

export const localeLabels: Record<Locale, string> = {
  cs: "Čeština",
  en: "English",
};



