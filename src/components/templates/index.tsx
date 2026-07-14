import type { ReactNode } from "react";
import Link from "next/link";

import { AutomationAuditLanding } from "@/components/AutomationAuditLanding";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InquiryForm } from "@/components/InquiryForm";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { WorkAsset } from "@/components/WorkAsset";
import { getRelatedPages, getSectionChildren } from "@/content/registry";
import type { ContentPage, LinkRecord } from "@/content/types";
import { homepageFeaturePaths } from "@/lib/navigation";
import { buildPagePath, normalizeInternalHref } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

type TemplateProps = { page: ContentPage };

const homeDescriptions = {
  cs: [
    "Návrh a vývoj řešení, které odpovídá reálnému procesu a lidem, kteří ho používají.",
    "Úpravy, opravy a zjednodušení existujícího systému, který už firma používá.",
    "Propojení firemních nástrojů, dat a automatizací tak, aby práce nebyla zbytečně roztříštěná.",
    "Automatizace opakované práce a praktické využití AI tam, kde přináší skutečnou hodnotu.",
  ],
  en: [
    "Design and development of a solution that fits the real process and the people using it.",
    "Changes, fixes and simplification of an existing system the company already uses.",
    "Connecting business tools, data and automation so work is not unnecessarily fragmented.",
    "Automation of repetitive work and practical use of AI where it brings real value.",
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
    featuredTitle: "Přímé klientské a vlastní projekty",
    featuredDescription: "Weby, aplikace a automatizační nástroje, které jsem navrhoval, vyvíjel, nasazoval nebo dlouhodobě provozoval.",
    featuredTags: ["weby", "aplikace", "automatizace", "provoz"],
    teamTitle: "Kontraktorská spolupráce v týmech",
    teamDescription: "Vývoj a údržba existujících systémů v týmech firem a software housů.",
    teamTags: ["kontrakt", "týmový vývoj", "údržba", "legacy"],
  },
  en: {
    featuredTitle: "Direct client and own projects",
    featuredDescription: "Websites, applications and automation tools that I designed, developed, deployed or operated long-term.",
    featuredTags: ["websites", "applications", "automation", "operations"],
    teamTitle: "Contractor cooperation in teams",
    teamDescription: "Development and maintenance of existing systems inside company and software house teams.",
    teamTags: ["contracting", "team delivery", "maintenance", "legacy"],
  },
};

const BaseStack = ({ children, className }: { children: ReactNode; className?: string }) => {
  const stackClassName = className ? `page-stack ${className}` : "page-stack";
  return <div className={stackClassName}>{children}</div>;
};

const icon = (d: string, c: string) => (
  <svg className={c} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
  </svg>
);

const check = (c: string) => icon("M5 13l4 4L19 7", c);
const arrow = (c: string) => icon("M9 5l7 7-7 7", c);
const mail = (c: string) => icon("M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", c);
const phone = (c: string) => icon("M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", c);
const calendar = (c: string) => icon("M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z", c);

function resolvePrimaryActionHref(page: ContentPage) {
  if (page.pageType === "inquiry" && page.translationKey === "inquiry") {
    return "#project-inquiry-form";
  }

  return page.cta.href;
}

function resolveCtaEvent(page: ContentPage) {
  return page.pageType === "service" ? "service_cta_click" : "seo_cta_click";
}

function renderSections(page: ContentPage) {
  return page.sections.map((section) => (
    <article className="content-card section-card" key={section.title}>
      <h2>{section.title}</h2>
      {section.body.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {section.bullets ? (
        section.listType === "ordered" ? (
          <ol className="bullet-list ordered-list">
            {section.bullets.map((b) => <li key={b}>{b}</li>)}
          </ol>
        ) : (
          <ul className="bullet-list">
            {section.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        )
      ) : null}
    </article>
  ));
}

function PageLead({ page, tone = "default" }: TemplateProps & { tone?: string }) {
  const primaryHref = page.pageType === "inquiry"
    ? resolvePrimaryActionHref(page)
    : page.hero.primaryCta.href;

  return (
    <section className={`hero-panel hero-${tone}`}>
      <div className="hero-inner">
        <Breadcrumbs page={page} />
        <p className="eyebrow">{page.hero.eyebrow}</p>
        <h1>{page.hero.title}</h1>
        <p className="hero-copy">{page.hero.subtitle}</p>
        <div className="hero-actions">
          <Link
            className="button button-primary"
            data-analytics-event={resolveCtaEvent(page)}
            data-analytics-location="hero"
            href={normalizeInternalHref(primaryHref)}
          >
            {page.hero.primaryCta.label}
          </Link>
          {page.hero.secondaryCta ? (
            <Link className="button button-secondary" href={normalizeInternalHref(page.hero.secondaryCta.href)}>
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
    <section className="band-section band-section-soft">
      <div className="band-shell">
        <div className="content-card intro-card">
          {page.note ? <p className="content-note">{page.note}</p> : null}
          {page.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitBlock({ page }: TemplateProps) {
  return (
    <section className="band-section">
      <div className="band-shell">
        <div className="fit-grid">
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
        </div>
      </div>
    </section>
  );
}

function FAQBlock({ page }: TemplateProps) {
  if (!page.faq.length) return null;
  return (
    <section className="band-section band-section-soft">
      <div className="band-shell">
        <div className="content-card faq-section">
          <h2>FAQ</h2>
          <div className="faq-list">
            {page.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InquiryContactBlock({ page }: TemplateProps) {
  return (
    <section className="band-section">
      <div className="band-shell">
        <div className="content-card inquiry-contact-card">
          <h2>{page.locale === "cs" ? "Raději se ozvete přímo?" : "Prefer to contact me directly?"}</h2>
          <p>
            {page.locale === "cs"
              ? "Můžete také napsat e-mail, zavolat nebo si rovnou naplánovat krátkou úvodní schůzku."
              : "You can also send an e-mail, call me or book a short intro call."}
          </p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}>{mail("contact-icon")}<span>{siteConfig.email}</span></a>
            <span className="contact-divider" aria-hidden="true">|</span>
            <a href={`tel:${siteConfig.phone}`}>{phone("contact-icon")}<span>{siteConfig.phoneDisplay}</span></a>
            <span className="contact-divider" aria-hidden="true">|</span>
            <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
              {calendar("contact-icon")}
              <span>{page.locale === "cs" ? "naplánovat schůzku" : "book a call"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA({ page }: TemplateProps) {
  const primaryHref = resolvePrimaryActionHref(page);

  return (
    <section className="band-section">
      <div className="band-shell">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">{page.locale === "cs" ? "Další krok" : "Next step"}</p>
            <h2>{page.locale === "cs" ? "Máte podobnou situaci?" : "Have a similar situation?"}</h2>
            <p>{page.cta.note}</p>
          </div>
          <Link
            className="button button-primary"
            data-analytics-event={resolveCtaEvent(page)}
            data-analytics-location="final"
            href={normalizeInternalHref(primaryHref)}
          >
            {page.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

function RelatedLinks({ page, includeHub = false }: TemplateProps & { includeHub?: boolean }) {
  if (page.pageType === "hub" && !includeHub) return null;
  const heading = page.locale === "cs" ? "Související stránky" : "Related pages";
  return (
    <section className="band-section">
      <div className="band-shell">
        <div className="content-card related-section">
          <h2>{heading}</h2>
          <div className="link-grid">
            {getRelatedPages(page).map((r) => (
              <Link className="link-card" href={buildPagePath(r)} key={r.id}>
                <strong>{r.breadcrumbLabel}</strong>
                <span>{r.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PriorityLinkGrid({ links }: { links: LinkRecord[] }) {
  return (
    <div className="link-grid">
      {links.map((link) => (
        <Link
          className="link-card"
          data-analytics-event="seo_cta_click"
          data-analytics-location="priority"
          href={normalizeInternalHref(link.href)}
          key={link.href}
        >
          <strong>{link.label}</strong>
        </Link>
      ))}
    </div>
  );
}

function PriorityLinks({ page }: TemplateProps) {
  if (!page.priorityLinks?.length) return null;
  const heading = page.locale === "cs" ? "Doporučený další krok" : "Recommended next step";

  return (
    <section className="band-section">
      <div className="band-shell">
        <div className="content-card related-section">
          <h2>{heading}</h2>
          <PriorityLinkGrid links={page.priorityLinks} />
        </div>
      </div>
    </section>
  );
}

function HomeTemplateBody({ page }: TemplateProps) {
  const services = page.sections[0]?.bullets ?? [];
  const fit = page.sections[1]?.bullets ?? [];
  const process = page.sections[2]?.bullets ?? [];
  const outcomes = page.sections[3]?.bullets ?? [];
  const credibility = page.sections[4];
  const engagement = page.sections[5];
  const ref = page.locale === "cs" ? refContent.cs : refContent.en;
  const referenceSupportCopy = page.locale === "cs"
    ? "Některé projekty jsou veřejné, jiné kvůli charakteru spolupráce prezentuji jen formou doménové zkušenosti a typu řešených systémů."
    : "Some projects are public, while others are presented only through domain experience and the type of systems I worked on.";

  return (
    <>
      <section className="home-hero-section" id="home">
        <div className="shell">
          <div className="home-hero-copy">
            <h1>{page.hero.title}</h1>
            <p>{page.hero.subtitle}</p>
            <div className="hero-actions">
              <Link
                className="button button-primary"
                data-analytics-event="seo_cta_click"
                data-analytics-location="hero"
                href={normalizeInternalHref(page.cta.href)}
              >
                {page.locale === "cs" ? "Popsat situaci" : "Describe situation"}
              </Link>
              {page.hero.secondaryCta ? (
                <Link className="button button-secondary" href={normalizeInternalHref(page.hero.secondaryCta.href)}>
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
            <h3 className="section-title">{page.locale === "cs" ? "Technický partner pro weby, aplikace a automatizace." : "Technical partner for websites, applications and automation."}</h3>
            <div className="section-copy">
              {page.intro.map((p) => (
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
            {page.sections[0]?.body.map((paragraph) => (
              <p className="section-lead" key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="home-services-grid">
            {services.map((service, i) => (
              <Link className="home-service-card" href={normalizeInternalHref(homepageFeaturePaths[page.locale][i])} key={service}>
                <h4>{service}</h4>
                <p>{homeDescriptions[page.locale][i]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {credibility ? (
        <section className="home-proof-section">
          <div className="shell">
            <div className="home-about-copy">
              <h2 className="section-kicker">{page.locale === "cs" ? "Jak spolupráce funguje v praxi" : "How the work usually works in practice"}</h2>
              <h3 className="section-title">{credibility.title}</h3>
              <div className="section-copy">
                {credibility.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {credibility.bullets ? (
                <ul className="home-proof-list">
                  {credibility.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="home-dark-section">
        <div className="shell">
          <div className="home-dark-intro">
            <p className="section-kicker section-kicker-dark">{page.locale === "cs" ? "Typické projektové situace" : "Typical project situations"}</p>
            <p className="home-dark-title">{page.locale === "cs" ? "Největší smysl má spolupráce tam, kde aplikace řeší důležitý firemní proces a potřebuje technicky i provozně rozumné vedení." : "The strongest fit is work tied to important business processes where technical decisions have operational consequences."}</p>
            <p className="home-dark-support">{page.sections[1]?.body[0]}</p>
          </div>
          <div className="home-dark-grid">
            <div className="home-dark-column">
              <h4 className="home-dark-heading"><span>1</span>{page.locale === "cs" ? "Kde to dává největší smysl" : "Where this fits best"}</h4>
              <p className="home-dark-copy">{page.sections[1]?.body[1]}</p>
              <ul className="home-dark-list">{fit.map((item) => <li key={item}>{check("home-icon home-icon-blue")}<span>{item}</span></li>)}</ul>
            </div>
            <div className="home-dark-column">
              <h4 className="home-dark-heading"><span>2</span>{page.locale === "cs" ? "Jak spolupráce typicky vypadá" : "How the work usually runs"}</h4>
              <p className="home-dark-copy">{page.sections[2]?.body[1]}</p>
              <ul className="home-dark-list">{process.map((item) => <li key={item}>{arrow("home-icon home-icon-slate")}<span>{item}</span></li>)}</ul>
            </div>
            <div className="home-dark-column">
              <h4 className="home-dark-heading"><span>3</span>{page.locale === "cs" ? "Co klient obvykle získá" : "What clients usually get"}</h4>
              <p className="home-dark-copy">{page.sections[3]?.body[1]}</p>
              <ul className="home-dark-list">{outcomes.map((item) => <li key={item}>{check("home-icon home-icon-green")}<span>{item}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {engagement ? (
        <section className="home-proof-section home-proof-section-soft">
          <div className="shell">
            <div className="home-about-copy">
              <h2 className="section-kicker">{page.locale === "cs" ? "Model spolupráce" : "Engagement model"}</h2>
              <h3 className="section-title">{engagement.title}</h3>
              <div className="section-copy">
                {engagement.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {engagement.bullets ? (
                <ul className="home-proof-list">
                  {engagement.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="home-references-section" id="references">
        <div className="shell">
          <div className="home-section-intro">
            <h2 className="section-kicker">{page.locale === "cs" ? "Projekty a reference" : "Projects and references"}</h2>
            <p className="section-lead">{page.locale === "cs" ? "Pracuji jak na přímých klientských a vlastních projektech, tak kontraktorsky v týmech firem a software housů." : "I work on direct client and own projects, as well as contractor-based cooperation inside company and software house teams."}</p>
            <p className="section-lead">{referenceSupportCopy}</p>
          </div>
          <div className="home-references-grid">
            <div className="home-reference-card home-reference-card-featured">
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
                <a
                  className="logo-chip logo-chip-app logo-chip-emamky"
                  href="https://emamky.cz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="eMamky.cz"
                >
                  <span className="logo-app-mark" aria-hidden="true">E</span>
                  <span className="logo-app-name">eMamky</span>
                </a>
                <a
                  className="logo-chip logo-chip-app logo-chip-novinex"
                  href="https://novinex.cz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Novinex.cz"
                >
                  <span className="logo-app-mark" aria-hidden="true">N</span>
                  <span className="logo-app-name">Novinex</span>
                </a>
                <a
                  className="logo-chip logo-chip-app logo-chip-relio logo-chip-demo"
                  href="https://crm.halatao.cz/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="RelioCRM demo"
                >
                  <span className="logo-chip-badge">DEMO</span>
                  <span className="logo-app-lockup">
                    <span className="logo-app-mark" aria-hidden="true">R</span>
                    <span className="logo-app-name">RelioCRM</span>
                  </span>
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
          <h2>{page.locale === "cs" ? "Máte konkrétní projekt nebo situaci?" : "Do you have a specific project or situation?"}</h2>
          <p>{page.locale === "cs" ? "Napište pár vět o tom, co potřebujete zjednodušit, vyvinout nebo propojit. Ozvu se s návrhem dalšího rozumného kroku." : "Write a few sentences about what you need to simplify, build or connect. I will get back to you with a reasonable next step."}</p>
          <div className="contact-links">
            <a href={`mailto:${siteConfig.email}`}>{mail("contact-icon")}<span>{siteConfig.email}</span></a>
            <span className="contact-divider" aria-hidden="true">|</span>
            <a href={`tel:${siteConfig.phone}`}>{phone("contact-icon")}<span>{siteConfig.phoneDisplay}</span></a>
            <span className="contact-divider" aria-hidden="true">|</span>
            <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
              {calendar("contact-icon")}
              <span>{page.locale === "cs" ? "Naplánovat schůzku" : "Book a call"}</span>
            </a>
          </div>
          <div className="contact-cta">
            <Link
              className="button button-dark"
              data-analytics-event="seo_cta_click"
              data-analytics-location="contact"
              href={normalizeInternalHref(page.cta.href)}
            >
              {page.locale === "cs" ? "Popsat situaci" : "Describe situation"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function GenericTemplate({ page, tone = "default" }: TemplateProps & { tone?: string }) {
  return (
    <BaseStack className={`page-stack-generic page-type-${page.pageType}`}>
      <PageLead page={page} tone={tone} />
      <Intro page={page} />
      {page.pageType !== "home" ? (
        <section className="band-section">
          <div className="band-shell">
            <div className="content-grid">{renderSections(page)}</div>
          </div>
        </section>
      ) : null}
      {page.workflow ? <WorkflowDiagram workflow={page.workflow} /> : null}
      {page.workAsset ? <WorkAsset asset={page.workAsset} toolId={page.translationKey} /> : null}
      {page.pageType === "inquiry" ? <InquiryContactBlock page={page} /> : null}
      {page.pageType !== "inquiry" ? <FitBlock page={page} /> : null}
      <PriorityLinks page={page} />
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
    <BaseStack className="page-stack-generic page-type-hub">
      <PageLead page={page} tone="hub" />
      <Intro page={page} />
      <section className="band-section">
        <div className="band-shell">
          <div className="content-grid">{renderSections(page)}</div>
        </div>
      </section>
      <section className="band-section">
        <div className="band-shell">
          <div className="content-card related-section">
            <h2>{page.locale === "cs" ? "Všechny důležité stránky v této sekci" : "All important pages in this section"}</h2>
            <div className="link-grid">{children.map((c) => <Link className="link-card" href={buildPagePath(c)} key={c.id}><strong>{c.breadcrumbLabel}</strong><span>{c.description}</span></Link>)}</div>
          </div>
        </div>
      </section>
      {page.translationKey === "hub-locations" ? <RelatedLinks page={page} includeHub /> : null}
      <FAQBlock page={page} />
      <CTA page={page} />
    </BaseStack>
  );
}

export function ServiceTemplate({ page }: TemplateProps) {
  if (page.translationKey === "service-automations-and-integrations" && page.locale === "cs") {
    return <AutomationAuditLanding title={page.hero.title} locale={page.locale} priorityLinks={page.priorityLinks} faq={page.faq} />;
  }
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
  const isInquiryPage = page.translationKey === "inquiry";

  return (
    <BaseStack className="page-stack-generic page-type-inquiry page-contact-layout">
      <PageLead page={page} tone="inquiry" />
      <Intro page={page} />
      {isInquiryPage ? (
        <>
          <section className="band-section">
            <div className="band-shell">
              <InquiryForm locale={page.locale} />
            </div>
          </section>
          <InquiryContactBlock page={page} />
        </>
      ) : (
        <section className="band-section">
          <div className="band-shell">
            <div className="content-grid">{renderSections(page)}</div>
          </div>
        </section>
      )}
      {isInquiryPage ? (
        <section className="band-section">
          <div className="band-shell">
            <div className="content-grid content-grid-emphasis">
              <article className="content-card">
                <h2>{page.locale === "cs" ? "S čím dává smysl se ozvat" : "When it makes sense to reach out"}</h2>
                <ul className="bullet-list">{page.fit.for.map((i) => <li key={i}>{i}</li>)}</ul>
              </article>
              <article className="content-card">
                <h2>{page.locale === "cs" ? "Co typicky neřeším" : "What I usually do not take on"}</h2>
                <ul className="bullet-list">{page.fit.notFor.map((i) => <li key={i}>{i}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>
      ) : null}
      <FAQBlock page={page} />
    </BaseStack>
  );
}


