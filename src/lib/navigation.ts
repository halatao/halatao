import type { LinkRecord, Locale } from "@/content/types";

export const primaryNavigation: Record<Locale, LinkRecord[]> = {
  cs: [
    { href: "/cs/#about", label: "O mně" },
    { href: "/cs/sluzby/", label: "Služby" },
    { href: "/cs/#references", label: "Reference" },
    { href: "/cs/sluzby/automatizace-a-integrace/", label: "Automatizace" },
    { href: "/cs/#contact", label: "Kontakt" },
  ],
  en: [
    { href: "/en/#about", label: "About" },
    { href: "/en/services/", label: "Services" },
    { href: "/en/#references", label: "References" },
    { href: "/en/services/automations-and-integrations/", label: "Automations" },
    { href: "/en/#contact", label: "Contact" },
  ],
};

export const footerNavigation: Record<Locale, LinkRecord[]> = {
  cs: [
    { href: "/cs/sluzby/", label: "Služby" },
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
    "/cs/sluzby/vyvoj-webovych-aplikaci-na-miru/",
    "/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace/",
    "/cs/sluzby/automatizace-a-integrace/",
    "/cs/spoluprace-na-kontrakt/",
  ],
  en: [
    "/en/services/custom-web-application-development/",
    "/en/services/existing-app-takeover/",
    "/en/services/automations-and-integrations/",
    "/en/contract-development-support/",
  ],
};
