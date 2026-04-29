// Safe to edit manually: shared site configuration and business constants.

import type { Locale } from "@/content/types";

export const siteConfig = {
  name: "Bc. Ondřej Halata",
  domain: "halatao.cz",
  legalName: "Bc. Ondřej Halata",
  displayName: "Bc. Ondřej Halata",
  shortDisplayName: "Bc. Ondřej Halata",
  siteUrl: "https://www.halatao.cz",
  email: "ondrej@halatao.cz",
  phone: "+420602690920",
  phoneDisplay: "+420 602 690 920",
  linkedIn: "https://www.linkedin.com/in/halatao/",
  github: "https://github.com/halatao/",
  googleBusinessProfile: "https://maps.app.goo.gl/dscbmEB87C6r8dyb8",
  firmyCz: "https://www.firmy.cz/detail/13679468-bc-ondrej-halata-ostrava-moravska-ostrava.html",
  naVolneNoze: "https://navolnenoze.cz/prezentace/ondrej-halata/",
  webtrh: "https://webtrh.cz/profil/ondrej-halata/",
  sameAs: [
    "https://www.linkedin.com/in/halatao/",
    "https://github.com/halatao/",
    "https://maps.app.goo.gl/dscbmEB87C6r8dyb8",
    "https://www.firmy.cz/detail/13679468-bc-ondrej-halata-ostrava-moravska-ostrava.html",
    "https://navolnenoze.cz/prezentace/ondrej-halata/",
    "https://webtrh.cz/profil/ondrej-halata/",
  ],
  calendly: "https://calendly.com/ondrej-halata/30min",
  cookiebotId: "c016eaf8-a8fe-4cfe-9693-727411d95ca8",
  gtmId: "GTM-M63V79JM",
  gaMeasurementId: "G-81431TQEDR",
  ogImage: "/og/halatao-social.svg",
  ogImageAlt: "Bc. Ondřej Halata - webové aplikace na míru, takeover a automatizace pro firmy",
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



