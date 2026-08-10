import Link from "next/link";

import type { LinkRecord, Locale } from "@/content/types";
import { siteConfig } from "@/lib/site";

type FooterGroup = {
  title: string;
  links: LinkRecord[];
};

const footerGroups: Record<Locale, FooterGroup[]> = {
  cs: [
    {
      title: "Co dodávám",
      links: [
        { href: "/cs/sluzby/tvorba-webovych-stranek/", label: "Webové stránky" },
        { href: "/cs/sluzby/vyvoj-webovych-aplikaci-na-miru/", label: "Aplikace a systémy" },
        { href: "/cs/sluzby/automatizace-a-integrace/", label: "Automatizace" },
      ],
    },
    {
      title: "O mně a spolupráci",
      links: [
        { href: "/cs/reference/", label: "Reference" },
        { href: "/cs/o-mne/", label: "O mně" },
        { href: "/cs/jak-spoluprace-probiha/", label: "Jak spolupráce probíhá" },
        { href: "/cs/kontakt/", label: "Kontakt" },
      ],
    },
    {
      title: "Příklady a návody",
      links: [
        { href: "/cs/problemy/", label: "Problémy" },
        { href: "/cs/priklady/", label: "Příklady" },
        { href: "/cs/pripadovky/", label: "Případovky" },
        { href: "/cs/pruvodce/", label: "Průvodce" },
        { href: "/cs/srovnani/", label: "Srovnání" },
        { href: "/cs/technologie/", label: "Technologie" },
        { href: "/cs/sablony/", label: "Šablony" },
        { href: "/cs/lokality/", label: "Lokality" },
      ],
    },
  ],
  en: [
    {
      title: "Services",
      links: [
        { href: "/en/services/company-website-development/", label: "Company websites" },
        { href: "/en/services/custom-web-application-development/", label: "Custom applications" },
        { href: "/en/services/automations-and-integrations/", label: "Automations" },
      ],
    },
    {
      title: "Working together",
      links: [
        { href: "/en/references/", label: "References" },
        { href: "/en/how-project-delivery-works/", label: "How delivery works" },
        { href: "/en/discuss-your-project/", label: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/en/problems/", label: "Problems" },
        { href: "/en/use-cases/", label: "Use cases" },
        { href: "/en/case-studies/", label: "Case studies" },
        { href: "/en/guides/", label: "Guides" },
        { href: "/en/comparisons/", label: "Comparisons" },
        { href: "/en/technology/", label: "Technology" },
        { href: "/en/templates/", label: "Templates" },
      ],
    },
  ],
};

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        {footerGroups[locale].map((group) => (
          <nav aria-label={group.title} className="footer-column" key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
        ))}
      </div>
      <div className="shell footer-bottom">
        <div className="footer-brand"><span>{siteConfig.displayName}</span> &copy; 2026</div>
        <div className="footer-socials">
          <Link href={siteConfig.linkedIn} target="_blank">
            LinkedIn
          </Link>
          <Link href={siteConfig.github} target="_blank">
            GitHub
          </Link>
          <span className="sr-only">
            {locale === "cs"
              ? "Firemní weby, aplikace a automatizace."
              : "Company websites, custom applications, and automations."}
          </span>
        </div>
      </div>
    </footer>
  );
}
