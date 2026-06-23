import Link from "next/link";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site";

export const legalContact = {
  name: siteConfig.legalName || siteConfig.displayName || siteConfig.name,
  email: siteConfig.email || "kontakt@halatao.cz",
  phone: siteConfig.phoneDisplay || siteConfig.phone,
  domain: siteConfig.domain,
};

export const legalLastUpdated = "23. června 2026";

export function ContactDetails({ showPhone = false }: { showPhone?: boolean }) {
  return (
    <address className="section-copy" style={{ fontStyle: "normal" }}>
      <p>{legalContact.name}</p>
      <p>
        E-mail: <a href={`mailto:${legalContact.email}`}>{legalContact.email}</a>
      </p>
      {showPhone && legalContact.phone ? (
        <p>
          Telefon: <a href={`tel:${siteConfig.phone}`}>{legalContact.phone}</a>
        </p>
      ) : null}
      <p>Web: {legalContact.domain}</p>
    </address>
  );
}

export function LegalPageLayout({
  children,
  eyebrow,
  title,
  subtitle,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <SiteHeader locale="cs" />
      <main className="page-shell">
        <div className="page-stack page-stack-generic">
          <section className="hero-panel">
            <div className="hero-inner">
              <p className="eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="hero-copy">{subtitle}</p>
              <div className="hero-actions">
                <Link className="button button-secondary" href="/cs/">
                  Zpět na hlavní stránku
                </Link>
              </div>
            </div>
          </section>
          <section className="band-section">
            <div className="band-shell">{children}</div>
          </section>
        </div>
      </main>
      <SiteFooter locale="cs" />
    </>
  );
}

export function LegalSection({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="content-card" style={{ marginBottom: "1.5rem" }}>
      <h2>{title}</h2>
      <div className="section-copy">{children}</div>
    </section>
  );
}
