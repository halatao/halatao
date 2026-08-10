import Link from "next/link";

import { AutomationAuditForm } from "@/components/AutomationAuditForm";
import type { ContentPage } from "@/content/types";
import { normalizeInternalHref } from "@/lib/routing";

export function AutomationAuditLanding({ page }: { page: ContentPage }) {
  const processSections = page.sections.slice(0, 3);
  const formGuidance = page.sections[3];

  return (
    <>
      <main className="automation-page">
        <section className="automation-hero">
          <div className="automation-shell automation-shell-narrow automation-center">
            <span className="automation-badge">{page.hero.eyebrow}</span>
            <h1>{page.hero.title}</h1>
            <p className="automation-lead">{page.hero.subtitle}</p>
            <Link
              href={page.hero.primaryCta.href}
              className="automation-button"
              data-analytics-event="seo_cta_click"
              data-analytics-location="hero"
            >
              {page.hero.primaryCta.label}
            </Link>
          </div>
        </section>

        <section className="automation-section automation-section-white">
          <div className="automation-shell automation-shell-mid">
            <div className="automation-audit-intro">
              {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <h2>Co bude následovat</h2>
            <div className="automation-audit-steps">
              {processSections.map((section, index) => (
                <article className="automation-card" key={section.title}>
                  <span className="automation-step-number">{index + 1}</span>
                  <h3>{section.title}</h3>
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="automation-audit-form" className="automation-cta">
          <div className="automation-shell automation-audit-form-layout">
            <div className="automation-form-guidance">
              <h2>{formGuidance.title}</h2>
              {formGuidance.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ul>
                {formGuidance.bullets?.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {page.priorityLinks?.map((link) => (
                <Link className="automation-text-link" href={normalizeInternalHref(link.href)} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="automation-form-wrap">
              <AutomationAuditForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="automation-footer">© Bc. Ondřej Halata</footer>
    </>
  );
}
