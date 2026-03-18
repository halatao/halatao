import Link from "next/link";

import { getAlternatePage } from "@/content/registry";
import type { ContentPage, Locale } from "@/content/types";
import { buildPagePath } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

export function SiteHeader({ locale, currentPage }: { locale: Locale; currentPage?: ContentPage }) {
  const home = `/${locale}`;
  const targetLocale = locale === "cs" ? "en" : "cs";
  const alternatePage = currentPage ? getAlternatePage(currentPage, targetLocale) : null;
  const localeHref = alternatePage ? buildPagePath(alternatePage) : `/${targetLocale}`;
  const navItems =
    locale === "cs"
      ? [
          { href: `${home}#about`, label: "O m\u011b" },
          { href: `${home}#services`, label: "Slu\u017eby" },
          { href: `${home}#references`, label: "Reference" },
          { href: "/cs/sluzby/automatizace-a-integrace", label: "Automatizace" },
          { href: `${home}#contact`, label: "Kontakt" },
        ]
      : [
          { href: `${home}#about`, label: "About" },
          { href: `${home}#services`, label: "Services" },
          { href: `${home}#references`, label: "References" },
          { href: "/en/services/automations-and-integrations", label: "Automations" },
          { href: `${home}#contact`, label: "Contact" },
        ];

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href={home}>
          <span className="brand-name">{siteConfig.displayName}</span>
        </Link>
        <nav className="top-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          <Link className="locale-link" href={localeHref} hrefLang={targetLocale} lang={targetLocale}>
            {locale === "cs" ? "EN" : "CS"}
          </Link>
          <Link className="nav-cta" href={locale === "cs" ? "/cs/popsat-projekt" : "/en/discuss-your-project"}>
            {locale === "cs" ? "Kontakt" : "Contact"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
