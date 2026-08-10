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
            href={locale === "cs" ? "/cs/kontakt/#contact-form" : "/en/discuss-your-project/"}
          >
            {locale === "cs" ? "Popsat projekt" : "Describe situation"}
          </Link>
        </nav>
        <details className="mobile-navigation">
          <summary aria-label={locale === "cs" ? "Otevřít navigaci" : "Open navigation"}>
            <span className="mobile-navigation-icon" aria-hidden="true" />
          </summary>
          <nav aria-label={locale === "cs" ? "Mobilní navigace" : "Mobile navigation"}>
            {navItems.map((item) => (
              <Link key={item.href} href={normalizeInternalHref(item.href)}>
                {item.label}
              </Link>
            ))}
            <Link className="mobile-navigation-locale" href={localeHref} hrefLang={targetLocale} lang={targetLocale}>
              {locale === "cs" ? "English" : "Česky"}
            </Link>
            <Link
              className="mobile-navigation-cta"
              data-analytics-event="seo_cta_click"
              data-analytics-location="mobile-header"
              href={locale === "cs" ? "/cs/kontakt/#contact-form" : "/en/discuss-your-project/"}
            >
              {locale === "cs" ? "Popsat projekt" : "Describe situation"}
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
