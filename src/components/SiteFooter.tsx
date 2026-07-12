import Link from "next/link";

import type { Locale } from "@/content/types";
import { footerNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-shell">
        <div className="footer-brand">
          <span>{siteConfig.displayName}</span> &copy; 2026
        </div>
        <nav aria-label={locale === "cs" ? "Hlavní sekce" : "Main sections"} className="footer-links">
          {footerNavigation[locale].map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-links">
          <Link href={siteConfig.linkedIn} target="_blank">
            LinkedIn
          </Link>
          <Link href={siteConfig.github} target="_blank">
            GitHub
          </Link>
          <span className="sr-only">
            {locale === "cs"
              ? "Webov\u00e9 aplikace, p\u0159evzet\u00ed aplikac\u00ed, automatizace a kontraktn\u00ed spolupr\u00e1ce."
              : "Custom apps, app takeover, automations, and contract development support."}
          </span>
        </div>
      </div>
    </footer>
  );
}
