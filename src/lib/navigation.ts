import type { LinkRecord, Locale } from "@/content/types";

export const primaryNavigation: Record<Locale, LinkRecord[]> = {
  cs: [
    { href: "/cs/sluzby/tvorba-webovych-stranek/", label: "Webové stránky" },
    { href: "/cs/sluzby/vyvoj-webovych-aplikaci-na-miru/", label: "Aplikace a systémy" },
    { href: "/cs/sluzby/automatizace-a-integrace/", label: "Automatizace" },
    { href: "/cs/reference/", label: "Reference" },
  ],
  en: [
    { href: "/en/services/company-website-development/", label: "Company websites" },
    { href: "/en/services/custom-web-application-development/", label: "Custom applications" },
    { href: "/en/services/automations-and-integrations/", label: "Automations" },
    { href: "/en/references/", label: "References" },
  ],
};

export const footerNavigation: Record<Locale, LinkRecord[]> = {
  cs: [
    { href: "/cs/sluzby/", label: "Služby" },
    { href: "/cs/reference/", label: "Reference" },
    { href: "/cs/o-mne/", label: "O mně" },
    { href: "/cs/kontakt/", label: "Kontakt" },
    { href: "/cs/problemy/", label: "Problémy" },
    { href: "/cs/priklady/", label: "Příklady" },
    { href: "/cs/pripadovky/", label: "Případovky" },
    { href: "/cs/pruvodce/", label: "Průvodce" },
    { href: "/cs/srovnani/", label: "Srovnání" },
    { href: "/cs/technologie/", label: "Technologie" },
    { href: "/cs/sablony/", label: "Šablony" },
    { href: "/cs/lokality/", label: "Lokality" },
  ],
  en: [
    { href: "/en/services/", label: "Services" },
    { href: "/en/problems/", label: "Problems" },
    { href: "/en/use-cases/", label: "Use cases" },
    { href: "/en/case-studies/", label: "Case studies" },
    { href: "/en/guides/", label: "Guides" },
    { href: "/en/comparisons/", label: "Comparisons" },
    { href: "/en/technology/", label: "Technology" },
    { href: "/en/templates/", label: "Templates" },
  ],
};

export const homepageFeaturePaths: Record<Locale, string[]> = {
  cs: [
    "/cs/sluzby/tvorba-webovych-stranek/",
    "/cs/sluzby/vyvoj-webovych-aplikaci-na-miru/",
    "/cs/sluzby/automatizace-a-integrace/",
  ],
  en: [
    "/en/services/company-website-development/",
    "/en/services/custom-web-application-development/",
    "/en/services/automations-and-integrations/",
  ],
};
