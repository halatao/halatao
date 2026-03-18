import type { ReactNode } from "react";
import Link from "next/link";

import { AutomationAuditLanding } from "@/components/AutomationAuditLanding";
import { AutomationThankYou } from "@/components/AutomationThankYou";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InquiryForm } from "@/components/InquiryForm";
import { getRelatedPages, getSectionChildren } from "@/content/registry";
import type { ContentPage } from "@/content/types";
import { buildPagePath } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

type TemplateProps = { page: ContentPage };

const homeDescriptions = {
  cs: [
    "Full-stack vývoj od návrhu architektury po produkční provoz.",
    "Bezpečné navázání na rozpracovaný systém, stabilizace a další rozvoj.",
    "Propojování interních systémů, API a datových toků bez zbytečné ruční práce.",
    "Linux servery, CI/CD, monitoring a seniorní kapacita do důležité fáze projektu.",
  ],
  en: [
    "Full-stack delivery from architecture decisions to production operation.",
    "Safe takeover of an inherited system, stabilisation, and structured improvement.",
    "Connecting internal systems, APIs, and data flows without unnecessary manual work.",
    "Linux operations, CI/CD, monitoring, and senior contract support in critical project phases.",
  ],
};

const homeTargets = {
  cs: [
    "/cs/sluzby/vyvoj-webovych-aplikaci-na-miru",
    "/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace",
    "/cs/sluzby/automatizace-a-integrace",
    "/cs/spoluprace-na-kontrakt",
  ],
  en: [
    "/en/services/custom-web-application-development",
    "/en/services/existing-app-takeover",
    "/en/services/automations-and-integrations",
    "/en/contract-development-support",
  ],
};

const logos = [
  { name: "ABB", src: "https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg", href: "https://global.abb/" },
  { name: "Astratex", src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Astratex_logo.jpg", href: "https://www.astratex.cz/" },
  { name: "Magicware", src: "https://www.magicware.cz/Public/2015-magicware/img/mw_logo_menu.png", href: "https://www.magicware.cz/" },
  { name: "LinkSoft", src: "https://i.ytimg.com/vi/d5DunF5l-AE/maxresdefault.jpg", href: "https://www.linksoft.eu/cs" },
] as const;

const refContent = {
  cs: {
    featuredTitle: "End-to-end realizace aplikací",
    featuredDescription: "Projekty s odpovědností za celý životní cyklus: architektura, vývoj, nasazení i dlouhodobý provoz.",
    featuredTags: ["full-stack", "architektura", "deployment", "provoz"],
    teamTitle: "Týmový vývoj a spolupráce",
    teamDescription: "Spolupráce na komerčních projektech ve vývojových týmech a navazování na existující delivery setup.",
    teamTags: ["full-stack", "týmová spolupráce", "takeover", "delivery"],
  },
  en: {
    featuredTitle: "End-to-end application delivery",
    featuredDescription: "Projects with ownership across the full lifecycle: architecture, implementation, deployment, and long-term operation.",
    featuredTags: ["full-stack", "architecture", "deployment", "operations"],
    teamTitle: "Team delivery and collaboration",
    teamDescription: "Commercial project work inside delivery teams and on top of existing engineering processes.",
    teamTags: ["full-stack", "team collaboration", "takeover", "delivery"],
  },
};

const BaseStack = ({ children }: { children: ReactNode }) => <div className="page-stack">{children}</div>;

const icon = (d: string, c: string) => (
  <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
  </svg>
);

const check = (c: string) => icon("M5 13l4 4L19 7", c);
const arrow = (c: string) => icon("M9 5l7 7-7 7", c);
const mail = (c: string) => icon("M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", c);
const phone = (c: string) => icon("M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", c);

function renderSections(page: ContentPage) {
  return page.sections.map((section) => (
    <article className="content-card" key={section.title}>
      <h2>{section.title}</h2>
      {section.body.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {section.bullets ? (
        <ul className="bullet-list">
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </article>
  ));
}

function PageLead({ page, tone = "default" }: TemplateProps & { tone?: string }) {
  return (
    <section className={`hero-panel hero-${tone}`}>
      <div className="hero-inner">
        <Breadcrumbs page={page} />
        <p className="eyebrow">{page.hero.eyebrow}</p>
        <h1>{page.hero.title}</h1>
        <p className="hero-copy">{page.hero.subtitle}</p>
        <div className="hero-actions">
          <Link className="button button-primary" href={page.hero.primaryCta.href}>
            {page.hero.primaryCta.label}
          </Link>
          {page.hero.secondaryCta ? (
            <Link className="button button-secondary" href={page.hero.secondaryCta.href}>
              {page.hero.secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Intro({ page }: TemplateProps) {
  return (
    <section className="content-card intro-card">
      {page.note ? <p className="content-note">{page.note}</p> : null}
      {page.intro.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </section>
  );
}

function FitBlock({ page }: TemplateProps) {
  return (
    <section className="fit-grid">
      <article className="content-card fit-card fit-good">
        <h2>{page.locale === "cs" ? "Pro koho je to vhodné" : "Who this is for"}</h2>
        <ul className="bullet-list">
          {page.fit.for.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </article>
      <article className="content-card fit-card fit-bad">
        <h2>{page.locale === "cs" ? "Kdy to vhodné není" : "Who it is not for"}</h2>
        <ul className="bullet-list">
          {page.fit.notFor.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

function FAQBlock({ page }: TemplateProps) {
  if (!page.faq.length) return null;
  return (
    <section className="content-card">
      <h2>FAQ</h2>
      <div className="faq-list">
        {page.faq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA({ page }: TemplateProps) {
  return (
    <section className="cta-panel">
      <div>
        <p className="eyebrow">{page.locale === "cs" ? "Další krok" : "Next step"}</p>
        <h2>{page.locale === "cs" ? "Máte podobnou situaci?" : "Have a similar situation?"}</h2>
        <p>{page.cta.note}</p>
      </div>
      <Link className="button button-primary" href={page.cta.href}>
        {page.cta.label}
      </Link>
    </section>
  );
}

function RelatedLinks({ page }: TemplateProps) {
  if (page.pageType === "hub") return null;
  const heading = page.locale === "cs" ? "Související stránky" : "Related pages";
  return (
    <section className="content-card">
      <h2>{heading}</h2>
      <div className="link-grid">
        {getRelatedPages(page).map((r) => (
          <Link className="link-card" href={buildPagePath(r)} key={r.id}>
            <strong>{r.h1}</strong>
            <span>{r.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HomeTemplateBody({ page }: TemplateProps) {
  const services = page.locale === "cs" ? ["Webové aplikace na míru", "Převzetí a rozvoj existující aplikace", "Integrace systémů a automatizace", "Nasazení, provoz a kontraktní spolupráce"] : (page.sections[0]?.bullets ?? []);
  const fit = page.locale === "cs" ? ["Klientské portály a business aplikace", "Interní systémy pro operativu a reporting", "Rozpracované nebo problematické aplikace", "Procesy s ruční prací mezi více systémy"] : (page.sections[1]?.bullets ?? []);
  const process = page.locale === "cs" ? ["Rychlé zorientování v cíli a omezeních", "Návrh rozumné první etapy", "Průběžná realizace po menších krocích", "Důraz na provoz, ne jen na demo funkcí"] : (page.sections[2]?.bullets ?? []);
  const outcomes = page.locale === "cs" ? ["Stabilnější aplikace a jasnější technický směr", "Lepší kontrola nad rozsahem a prioritami", "Bezpečnější převzetí nebo rozvoj systému", "Software, který lze dál udržitelně rozvíjet"] : (page.sections[3]?.bullets ?? []);
  const ref = page.locale === "cs" ? refContent.cs : refContent.en;

  return (
    <>
      <section className="home-hero-section" id="home">
        <div className="shell">
          <div className="home-hero-copy">
            <h1>{page.hero.title}</h1>
            <p>{page.hero.subtitle}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={page.cta.href}>
                {page.locale === "cs" ? "Nezávazně probrat spolupráci" : "Discuss your project"}
              </Link>
              {page.hero.secondaryCta ? (
                <Link className="button button-secondary" href={page.hero.secondaryCta.href}>
                  {page.hero.secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="home-about-section" id="about">
        <div className="shell">
          <div className="home-about-copy">
            <h2 className="section-kicker">{page.locale === "cs" ? "O mně" : "About"}</h2>
            <h3 className="section-title">{page.locale === "cs" ? "Jsem full-stack vývojář se zkušeností s vývojem a provozem webových aplikací v reálném firemním prostředí." : "I am a full-stack developer with hands-on experience building and operating web applications in real business environments."}</h3>
            <div className="section-copy">
              {page.intro.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-services-section" id="services">
        <div className="shell">
          <div className="home-section-intro">
            <h2 className="section-kicker">{page.locale === "cs" ? "S čím pomáhám" : "What I help with"}</h2>
            <p className="section-lead">{page.sections[0]?.body[0]}</p>
          </div>
          <div className="home-services-grid">
            {services.map((service, i) => (
              <Link className="home-service-card" href={homeTargets[page.locale][i]} key={service}>
                <h4>{service}</h4>
                <p>{homeDescriptions[page.locale][i]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-dark-section">
        <div className="shell">
          <div className="home-dark-intro">
            <p className="section-kicker section-kicker-dark">{page.locale === "cs" ? "Typické projektové situace" : "Typical project situations"}</p>
            <p className="home-dark-title">{page.locale === "cs" ? "Největší smysl má spolupráce tam, kde aplikace řeší důležitý firemní proces a potřebuje technicky i provozně rozumné vedení." : "The strongest fit is work tied to important business processes where technical decisions have operational consequences."}</p>
          </div>
          <div className="home-dark-grid">
            <div className="home-dark-column">
              <h4 className="home-dark-heading"><span>1</span>{page.locale === "cs" ? "Kde to dává největší smysl" : "Where this fits best"}</h4>
              <ul className="home-dark-list">{fit.map((item) => <li key={item}>{check("home-icon home-icon-blue")}<span>{item}</span></li>)}</ul>
            </div>
            <div className="home-dark-column">
              <h4 className="home-dark-heading"><span>2</span>{page.locale === "cs" ? "Jak spolupráce typicky vypadá" : "How the work usually runs"}</h4>
              <ul className="home-dark-list">{process.map((item) => <li key={item}>{arrow("home-icon home-icon-slate")}<span>{item}</span></li>)}</ul>
            </div>
            <div className="home-dark-column">
              <h4 className="home-dark-heading"><span>3</span>{page.locale === "cs" ? "Co klient obvykle získá" : "What clients usually get"}</h4>
              <ul className="home-dark-list">{outcomes.map((item) => <li key={item}>{check("home-icon home-icon-green")}<span>{item}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-references-section" id="references">
        <div className="shell">
          <div className="home-section-intro">
            <h2 className="section-kicker">{page.locale === "cs" ? "Projekty a reference" : "Projects and references"}</h2>
            <p className="section-lead">{page.locale === "cs" ? "Původní web stál na konkrétních projektových zkušenostech. Tuhle vrstvu vracím i sem, bez nafukování a bez vymyšlených metrik." : "The original site leaned on real delivery experience. That layer belongs here too, without inflated claims or invented metrics."}</p>
          </div>
          <div className="home-references-grid">
            <div className="home-reference-card">
              <div className="home-reference-logos home-reference-logos-grid home-reference-logos-featured">
                <a
                  className="logo-chip"
                  href="https://www.kasanpelcova.cz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Kasan & Pelcová"
                >
                  <img className="logo logo-featured" src="https://storage.googleapis.com/kasanpelcovafileserver/files/553eacd9-8684-4abe-be76-b97db259688e" alt="Kasan & Pelcová" />
                </a>
                <a
                  className="logo-chip logo-chip-doporuceno"
                  href="https://www.doporucenoai.cz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="DOPORUČENO AI"
                >
                  <svg className="logo-featured-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 120" fill="none" role="img" aria-hidden="true">
                    <rect x="18" y="12" width="524" height="96" rx="12" fill="white" />
                    <text
                      x="280"
                      y="78"
                      textAnchor="middle"
                      fontFamily="Inter, Arial, Helvetica, sans-serif"
                      fontSize="42"
                      fontWeight="800"
                      letterSpacing="-1.1"
                    >
                      <tspan fill="#0F172A">DOPORUČENO</tspan>
                      <tspan dx="10" fill="#2563EB">AI</tspan>
                    </text>
                  </svg>
                </a>
              </div>
              <div className="home-reference-body">
                <h3>{ref.featuredTitle}</h3>
                <p>{ref.featuredDescription}</p>
                <div className="tag-row">{ref.featuredTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            </div>
            <div className="home-reference-card">
              <div className="home-reference-logos home-reference-logos-inline">
                {logos.map((logo) => (
                  <a
                    key={logo.name}
                    className="logo-chip"
                    href={logo.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={logo.name}
                  >
                    <img className="logo" src={logo.src} alt={logo.name} />
                  </a>
                ))}
              </div>
              <div className="home-reference-body">
                <h3>{ref.teamTitle}</h3>
                <p>{ref.teamDescription}</p>
                <div className="tag-row">{ref.teamTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-faq-section">
        <div className="shell narrow-shell">
          <h2 className="home-faq-title">{page.locale === "cs" ? "Často kladené otázky" : "Frequently asked questions"}</h2>
          <div className="home-faq-grid">
            {page.faq.map((item) => (
              <details className="home-faq-card" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact-section" id="contact">
        <div className="shell contact-shell">
          <h2>{page.locale === "cs" ? "Máte projekt, který potřebuje stabilní vývoj, takeover nebo seniorní kapacitu?" : "Do you have a project that needs stable delivery, app takeover, or senior contract support?"}</h2>
          <p>{page.locale === "cs" ? "Ozvěte se a probereme další krok." : "Reach out and we can discuss the next step."}</p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}>{mail("contact-icon")}<span>{siteConfig.email}</span></a>
            <span className="contact-divider" aria-hidden="true">|</span>
            <a href={`tel:${siteConfig.phone}`}>{phone("contact-icon")}<span>{siteConfig.phoneDisplay}</span></a>
          </div>
          <div className="contact-cta">
            <Link className="button button-dark" href={page.cta.href}>
              {page.locale === "cs" ? "Nezávazně se ozvat" : "Discuss your project"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function GenericTemplate({ page, tone = "default" }: TemplateProps & { tone?: string }) {
  return (
    <BaseStack>
      <PageLead page={page} tone={tone} />
      <Intro page={page} />
      {page.pageType !== "home" ? <section className="content-grid">{renderSections(page)}</section> : null}
      {page.pageType === "inquiry" ? <InquiryForm locale={page.locale} /> : null}
      {page.pageType !== "inquiry" ? <FitBlock page={page} /> : null}
      <FAQBlock page={page} />
      <RelatedLinks page={page} />
      <CTA page={page} />
    </BaseStack>
  );
}

export function HomeTemplate({ page }: TemplateProps) {
  return <BaseStack><HomeTemplateBody page={page} /></BaseStack>;
}

export function HubTemplate({ page }: TemplateProps) {
  const children = getSectionChildren(page);
  return (
    <BaseStack>
      <PageLead page={page} tone="hub" />
      <Intro page={page} />
      <section className="content-grid">{renderSections(page)}</section>
      <section className="content-card">
        <h2>{page.locale === "cs" ? "Všechny důležité stránky v této sekci" : "All important pages in this section"}</h2>
        <div className="link-grid">{children.map((c) => <Link className="link-card" href={buildPagePath(c)} key={c.id}><strong>{c.h1}</strong><span>{c.description}</span></Link>)}</div>
      </section>
      <FAQBlock page={page} />
      <CTA page={page} />
    </BaseStack>
  );
}

export function ServiceTemplate({ page }: TemplateProps) {
  if (page.translationKey === "service-automations-and-integrations" && page.locale === "cs") return <AutomationAuditLanding />;
  return <GenericTemplate page={page} tone="service" />;
}

export function ProblemTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="problem" />; }
export function ComparisonTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="comparison" />; }
export function UseCaseTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="use-case" />; }
export function CaseStudyTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="case-study" />; }
export function GuideTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="guide" />; }
export function TechnologyTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="technology" />; }
export function ToolTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="tool" />; }
export function LocationTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="location" />; }
export function ProcessTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="process" />; }

export function InquiryTemplate({ page }: TemplateProps) {
  if (page.translationKey === "thank-you" && page.locale === "cs") return <AutomationThankYou />;
  return (
    <BaseStack>
      <PageLead page={page} tone="inquiry" />
      <Intro page={page} />
      <section className="content-grid content-grid-emphasis">
        <article className="content-card">
          <h2>{page.locale === "cs" ? "Kdy je projekt silný fit" : "When the project is a strong fit"}</h2>
          <ul className="bullet-list">{page.fit.for.map((i) => <li key={i}>{i}</li>)}</ul>
        </article>
        <article className="content-card">
          <h2>{page.locale === "cs" ? "Kdy je lepší říct ne" : "When it is better to say no"}</h2>
          <ul className="bullet-list">{page.fit.notFor.map((i) => <li key={i}>{i}</li>)}</ul>
        </article>
      </section>
      {page.translationKey === "inquiry" ? <InquiryForm locale={page.locale} /> : null}
      <FAQBlock page={page} />
      <RelatedLinks page={page} />
      <CTA page={page} />
    </BaseStack>
  );
}


