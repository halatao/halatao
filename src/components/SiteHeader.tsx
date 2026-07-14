import Link from "next/link";

import { getAlternatePage } from "@/content/registry";
import type { ContentPage, Locale } from "@/content/types";
import { primaryNavigation } from "@/lib/navigation";
import { buildPagePath, normalizeInternalHref } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

export function SiteHeader({ locale, currentPage }: { locale: Locale; currentPage?: ContentPage }) {
  const home = `/${locale}/`;
  const targetLocale = locale === "cs" ? "en" : "cs";
  const alternatePage = currentPage ? getAlternatePage(currentPage, targetLocale) : null;
  const localeHref = alternatePage ? buildPagePath(alternatePage) : `/${targetLocale}/`;
  const navItems = primaryNavigation[locale];

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href={home}>
          <span className="brand-name">{siteConfig.displayName}</span>
        </Link>
        <nav className="top-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={normalizeInternalHref(item.href)}>
              {item.label}
            </Link>
          ))}
          <span className="nav-divider" aria-hidden="true" />
          <Link className="locale-link" href={localeHref} hrefLang={targetLocale} lang={targetLocale}>
            {locale === "cs" ? "EN" : "CS"}
          </Link>
          <Link
            className="nav-cta"
            data-analytics-event="seo_cta_click"
            data-analytics-location="header"
            href={locale === "cs" ? "/cs/popsat-projekt/" : "/en/discuss-your-project/"}
          >
            {locale === "cs" ? "Popsat situaci" : "Describe situation"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
