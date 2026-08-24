import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { AutomationAuditLanding } from "@/components/AutomationAuditLanding";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InquiryForm } from "@/components/InquiryForm";
import { ServicesHubMotion } from "@/components/ServicesHubMotion";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { WorkAsset } from "@/components/WorkAsset";
import { getServicePricing, primaryServicePricingKeys, type ServicePricing } from "@/content/pricing";
import { getRelatedPages, getSectionChildren } from "@/content/registry";
import type { ContentPage, LinkRecord, PageSection } from "@/content/types";
import { homepageFeaturePaths } from "@/lib/navigation";
import { buildPagePath, normalizeInternalHref } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

type TemplateProps = { page: ContentPage };

const homeDescriptions = {
  cs: [
    "Navrhnu strukturu, vzhled a obsahový směr webu a dotáhnu jej až po spuštění. Součástí může být správa obsahu, katalog, formuláře nebo kalkulace.",
    "Vytvořím aplikaci pro zákazníky nebo interní tým. Řeším role, data, workflow, backend, API, administraci i provozní základ.",
    "Propojím nástroje a odstraním opakované ruční kroky při přenosu dat, zpracování poptávek, dokumentů nebo reportingu.",
  ],
  en: [
    "Custom applications and internal systems built around real users, data, roles and operational workflows.",
    "Takeover, stabilisation and continued development of software the company already depends on.",
    "Reliable integrations and automation that connect tools, data and repeatable business processes.",
  ],
};

const logos = [
  { name: "ABB", src: "https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg", href: "https://global.abb/" },
  { name: "Astratex", src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Astratex_logo.jpg", href: "https://www.astratex.cz/" },
  { name: "Magicware", src: "https://www.magicware.cz/Public/2015-magicware/img/mw_logo_menu.png", href: "https://www.magicware.cz/" },
  { name: "LinkSoft", src: "https://i.ytimg.com/vi/d5DunF5l-AE/maxresdefault.jpg", href: "https://www.linksoft.eu/cs" },
] as const;

const featuredProjects = {
  cs: [
    {
      name: "Viditelný Makléř",
      type: "vlastní projekt · firemní web",
      description: "Firemní web pro prezentaci služeb a obchodní podporu realitních makléřů.",
      href: "https://www.viditelnymakler.cz/",
      image: "/work/viditelny-makler.png",
    },
    {
      name: "DoporučenoAI",
      type: "vlastní produkt · AI aplikace",
      description: "Aplikace pro analýzu viditelnosti webu v odpovědích AI nástrojů.",
      href: "https://www.doporucenoai.cz/",
      image: "/work/doporuceno-ai.png",
    },
    {
      name: "RealioCRM",
      type: "vlastní produkt · CRM systém",
      description: "CRM systém pro práci s kontakty, nemovitostmi a obchodními případy.",
      href: "https://crm.halatao.cz/",
      image: "/work/realio-crm.png",
    },
    {
      name: "Odhad123",
      type: "klientská realizace · realitní aplikace",
      description: "Platforma pro získání odhadu ceny nemovitosti s vedeným zadáním pro byty, domy a pozemky.",
      href: "https://www.odhad123.cz/",
      image: "/work/odhad123.png",
    },
    {
      name: "Worket.cz",
      type: "klientská realizace · pracovní portál",
      description: "Pracovní portál s nabídkami práce, profily uchazečů, reakcemi, uživatelskými účty a administrací.",
      href: "https://worket.cz/",
      image: "/work/worket.png",
    },
    {
      name: "Kasan & Pelcová",
      type: "klientská realizace · realitní web",
      description: "Realitní web se správou nabídek, obsahu a příchozích poptávek.",
      href: "https://www.kasanpelcova.cz/",
      image: "/work/kasan-pelcova.png",
    },
    {
      name: "eMamky",
      type: "klientská realizace · publikační aplikace",
      description: "Jedna ze dvou obsahových mutací vlastní publikační platformy s redakční správou, kategoriemi a vyhledáváním.",
      href: "https://emamky.cz/",
      image: "/work/emamky.png",
    },
    {
      name: "Novinex",
      type: "klientská realizace · publikační aplikace",
      description: "Druhá obsahová mutace stejné publikační platformy, přizpůsobená odlišnému zaměření a obsahu.",
      href: "https://novinex.cz/",
      image: "/work/novinex.png",
    },
    {
      name: "Swapio",
      type: "klientská realizace · marketplace",
      description: "Bazarový marketplace pro vystavování, vyhledávání a správu nabídek.",
      href: "https://swapio.cz/",
      image: "/work/swapio.png",
    },
    {
      name: "Prodat-byt.cz",
      type: "vlastní projekt · realitní web",
      description: "Web realitní služby, který návštěvníka provádí možnostmi prodeje nemovitosti.",
      href: "https://prodat-byt.cz/",
      image: "/work/prodat-byt.png",
    },
    {
      name: "Pohoda XML",
      type: "klientská realizace · automatizační nástroj",
      description: "Nástroj pro převod a mapování dokladů do formátu použitelného v účetním systému POHODA.",
      href: "https://pohoda.halatao.cz/",
      image: "/work/pohoda-isdoc.png",
    },
  ],
  en: [
    {
      name: "Viditelný Makléř",
      type: "own project · company website",
      description: "A company website supporting real-estate agents in presenting their services and generating business.",
      href: "https://www.viditelnymakler.cz/",
      image: "/work/viditelny-makler.png",
    },
    {
      name: "DoporučenoAI",
      type: "own product · AI application",
      description: "An application analysing website visibility in answers produced by AI tools.",
      href: "https://www.doporucenoai.cz/",
      image: "/work/doporuceno-ai.png",
    },
    {
      name: "RealioCRM",
      type: "own product · CRM system",
      description: "A CRM system for managing contacts, properties and business cases.",
      href: "https://crm.halatao.cz/",
      image: "/work/realio-crm.png",
    },
    {
      name: "Odhad123",
      type: "client project · property application",
      description: "A property valuation platform with guided data collection for apartments, houses and land.",
      href: "https://www.odhad123.cz/",
      image: "/work/odhad123.png",
    },
    {
      name: "Worket.cz",
      type: "client project · job portal",
      description: "A job portal with job listings, candidate profiles, applications, user accounts and administration.",
      href: "https://worket.cz/",
      image: "/work/worket.png",
    },
    {
      name: "Kasan & Pelcová",
      type: "client project · real-estate website",
      description: "A real-estate website with management of listings, content and incoming enquiries.",
      href: "https://www.kasanpelcova.cz/",
      image: "/work/kasan-pelcova.png",
    },
    {
      name: "eMamky",
      type: "client project · publishing application",
      description: "One of two content brands running on a custom publishing platform with editorial management, categories and search.",
      href: "https://emamky.cz/",
      image: "/work/emamky.png",
    },
    {
      name: "Novinex",
      type: "client project · publishing application",
      description: "The second content brand built on the same publishing platform and adapted to a different editorial focus.",
      href: "https://novinex.cz/",
      image: "/work/novinex.png",
    },
    {
      name: "Swapio",
      type: "client project · marketplace",
      description: "A marketplace for publishing, finding and managing listings.",
      href: "https://swapio.cz/",
      image: "/work/swapio.png",
    },
    {
      name: "Prodat-byt.cz",
      type: "own project · real-estate website",
      description: "A real-estate service website guiding visitors through their property sale options.",
      href: "https://prodat-byt.cz/",
      image: "/work/prodat-byt.png",
    },
    {
      name: "Pohoda XML",
      type: "client project · automation tool",
      description: "A tool for converting and mapping documents into a format usable by the POHODA accounting system.",
      href: "https://pohoda.halatao.cz/",
      image: "/work/pohoda-isdoc.png",
    },
  ],
} as const;

const homepageProjectNames = new Set([
  "Viditelný Makléř",
  "DoporučenoAI",
  "RealioCRM",
  "Swapio",
]);

function getHomepageProjects(locale: "cs" | "en") {
  return featuredProjects[locale].filter((project) => homepageProjectNames.has(project.name));
}

const serviceHubLogoProjects = [
  { name: "Viditelný Makléř", href: "https://www.viditelnymakler.cz/" },
  { name: "DoporučenoAI", href: "https://www.doporucenoai.cz/" },
  { name: "RealioCRM", href: "https://crm.halatao.cz/" },
  { name: "Odhad123", href: "https://www.odhad123.cz/" },
  { name: "Worket.cz", href: "https://worket.cz/" },
  { name: "Kasan & Pelcová", href: "https://www.kasanpelcova.cz/" },
  { name: "eMamky", href: "https://emamky.cz/" },
  { name: "Novinex", href: "https://novinex.cz/" },
  { name: "Swapio", href: "https://swapio.cz/" },
  { name: "Prodat-byt.cz", href: "https://prodat-byt.cz/" },
  { name: "Pohoda XML", href: "https://pohoda.halatao.cz/" },
] as const;

const serviceVisuals: Partial<Record<string, { image: string; href: string; name: string }>> = {
  "service-company-websites": {
    image: "/work/viditelny-makler.png",
    href: "https://www.viditelnymakler.cz/",
    name: "Viditelný Makléř",
  },
  "service-custom-web-app-development": {
    image: "/work/realio-crm.png",
    href: "https://crm.halatao.cz/",
    name: "RealioCRM",
  },
  "service-existing-app-takeover": {
    image: "/work/swapio.png",
    href: "https://swapio.cz/",
    name: "Swapio",
  },
  "service-internal-tools-development": {
    image: "/work/realio-crm.png",
    href: "https://crm.halatao.cz/",
    name: "RealioCRM",
  },
  "service-automations-and-integrations": {
    image: "/work/pohoda-isdoc.png",
    href: "https://pohoda.halatao.cz/",
    name: "XML → POHODA",
  },
  "service-sales-and-job-tracking-system": {
    image: "/work/realio-crm.png",
    href: "https://crm.halatao.cz/",
    name: "RealioCRM",
  },
};

const staticImageDimensions: Record<string, { width: number; height: number }> = {
  "/about/ondrej-cutout.png": { width: 324, height: 324 },
  "/work/doporuceno-ai.png": { width: 1265, height: 712 },
  "/work/emamky.png": { width: 1265, height: 712 },
  "/work/kasan-pelcova-nemovitosti.png": { width: 1250, height: 703 },
  "/work/kasan-pelcova.png": { width: 1265, height: 712 },
  "/work/novinex.png": { width: 1265, height: 712 },
  "/work/odhad123.png": { width: 1250, height: 703 },
  "/work/pohoda-isdoc.png": { width: 1280, height: 720 },
  "/work/prodat-byt.png": { width: 1265, height: 712 },
  "/work/realio-crm-jobs.png": { width: 1280, height: 720 },
  "/work/realio-crm.png": { width: 1280, height: 720 },
  "/work/swapio.png": { width: 1265, height: 712 },
  "/work/viditelny-makler.png": { width: 1265, height: 712 },
  "/work/worket.png": { width: 1440, height: 4103 },
};

function getStaticImageDimensions(src: string) {
  return staticImageDimensions[src] ?? { width: 1265, height: 712 };
}

const serviceProjectNames: Partial<Record<string, string[]>> = {
  "service-company-websites": ["Viditelný Makléř", "Kasan & Pelcová", "Prodat-byt.cz"],
  "service-custom-web-app-development": ["DoporučenoAI", "Swapio"],
  "service-existing-app-takeover": ["Swapio", "RealioCRM"],
  "service-internal-tools-development": ["RealioCRM", "DoporučenoAI"],
  "service-automations-and-integrations": ["Pohoda XML", "DoporučenoAI"],
  "service-sales-and-job-tracking-system": ["RealioCRM"],
};

function getServiceProjects(page: ContentPage) {
  const names = new Set(serviceProjectNames[page.translationKey] ?? []);

  return featuredProjects[page.locale].filter((project) => names.has(project.name));
}

function projectLogo(name: string, decorative: boolean) {
  if (name === "Viditelný Makléř") {
    return <span className="project-logo project-logo-visible-agent">Viditelný Makléř</span>;
  }

  if (name === "DoporučenoAI") {
    return (
      <span className="project-logo project-logo-ai">
        <span className="project-logo-ai-icon" aria-hidden="true">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <strong>AI Doporučení</strong>
      </span>
    );
  }

  if (name === "RealioCRM") {
    return (
      <span className="project-logo project-logo-relio">
        <span className="project-logo-relio-icon" aria-hidden="true">R</span>
        <span className="project-logo-relio-copy">
          <strong>Realio</strong>
          <small>CRM pro makléře</small>
        </span>
      </span>
    );
  }

  if (name === "Kasan & Pelcová") {
    return <Image alt={decorative ? "" : name} src="/work/logo-kasan-pelcova.png" width={1172} height={391} />;
  }

  if (name === "eMamky" || name === "Novinex") {
    return (
      <span className={`project-logo project-logo-magazine project-logo-${name === "eMamky" ? "emamky" : "novinex"}`}>
        <span className="project-logo-magazine-icon" aria-hidden="true">{name.charAt(0).toUpperCase()}</span>
        <strong>{name}</strong>
      </span>
    );
  }

  if (name === "Prodat-byt.cz") {
    return (
      <span className="project-logo project-logo-prodat-byt">
        <Image alt="" aria-hidden="true" src="/work/logo-prodat-byt.svg" width={38} height={38} />
        <strong>prodat-byt<span>.cz</span></strong>
      </span>
    );
  }

  if (name === "Pohoda XML") {
    return (
      <span className="project-logo project-logo-pohoda">
        <Image alt="" aria-hidden="true" src="/work/logo-pohoda.svg" width={38} height={38} />
        <strong>XML <span aria-hidden="true">→</span> POHODA</strong>
      </span>
    );
  }

  if (name === "Swapio") {
    return <Image alt={decorative ? "" : name} src="/work/logo-swapio.png" width={1076} height={372} />;
  }

  return <span className="project-logo project-logo-fallback">{name}</span>;
}

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

function PageLead({
  page,
  tone = "default",
  supportingCopy,
}: TemplateProps & { tone?: string; supportingCopy?: string[] }) {
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
        {supportingCopy?.length ? (
          <div className="hero-context">
            {supportingCopy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        ) : null}
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

function IntroductionCopy({ page, className }: TemplateProps & { className?: string }) {
  const copyClassName = className
    ? `page-introduction-copy ${className}`
    : "page-introduction-copy";

  return (
    <div className={copyClassName}>
      <div className="page-introduction-prose">
        {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      {page.note ? <aside className="page-context-note">{page.note}</aside> : null}
    </div>
  );
}

function PageIntroduction({ page }: TemplateProps) {
  if (!page.intro.length && !page.note) return null;

  return (
    <section className="page-introduction-section">
      <div className="band-shell">
        <IntroductionCopy page={page} />
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

function FAQBlock({ page, heading }: TemplateProps & { heading?: string }) {
  if (!page.faq.length) return null;
  return (
    <section className="band-section band-section-soft">
      <div className="band-shell">
        <div className="content-card faq-section">
          <h2>{heading ?? "FAQ"}</h2>
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

const serviceHubPrimaryCards = {
  cs: [
    {
      translationKey: "service-company-websites",
      title: "Webové stránky",
      description: "Pro firmu, která potřebuje srozumitelně představit nabídku a přivést návštěvníka ke kontaktu nebo poptávce.",
      action: "Prohlédnout weby",
      image: "/work/viditelny-makler.png",
    },
    {
      translationKey: "service-custom-web-app-development",
      title: "Aplikace a systémy",
      description: "Pro procesy, data a práci týmu, které už nedávají smysl v tabulkách, e-mailech nebo hotovém SaaS nástroji.",
      action: "Prohlédnout aplikace",
      image: "/work/realio-crm.png",
    },
    {
      translationKey: "service-automations-and-integrations",
      title: "Automatizace",
      description: "Pro opakovanou ruční práci a systémy, mezi nimiž dnes chybí spolehlivá návaznost dat.",
      action: "Prohlédnout automatizace",
      image: "/work/pohoda-isdoc.png",
    },
  ],
  en: [
    {
      translationKey: "service-custom-web-app-development",
      title: "Custom applications",
      description: "For workflows, data and team operations that no longer fit spreadsheets, inboxes or a generic SaaS product.",
      action: "Explore applications",
      image: "/work/realio-crm.png",
    },
    {
      translationKey: "service-existing-app-takeover",
      title: "Existing application takeover",
      description: "For a running or unfinished application that needs a clearer technical direction and safer next steps.",
      action: "Explore takeover",
      image: "/work/swapio.png",
    },
    {
      translationKey: "service-automations-and-integrations",
      title: "Automations and integrations",
      description: "For repeated manual work and business tools that need a reliable flow of data between them.",
      action: "Explore automations",
      image: "/work/pohoda-isdoc.png",
    },
  ],
} as const;

function ServiceHubTemplate({ page }: TemplateProps) {
  const children = getSectionChildren(page);
  const primaryCards = serviceHubPrimaryCards[page.locale]
    .map((card) => ({ ...card, target: children.find((child) => child.translationKey === card.translationKey) }))
    .filter((card): card is (typeof serviceHubPrimaryCards)[typeof page.locale][number] & { target: ContentPage } => Boolean(card.target));
  const primaryKeys = new Set<string>(primaryCards.map((card) => card.translationKey));
  const supportingServices = children.filter(
    (child) => !primaryKeys.has(child.translationKey) && child.translationKey !== "contract-support",
  );
  const projects = getHomepageProjects(page.locale);
  const heroPrimaryHref = page.hero.primaryCta.href;
  const orientationItems = page.locale === "cs"
    ? [
        {
          translationKey: "service-company-websites",
          title: "Zákazník nerozumí nabídce",
          description: "Firma potřebuje srozumitelně představit služby, produkty nebo obsah a dovést návštěvníka ke kontaktu či poptávce.",
          direction: "Webové stránky",
        },
        {
          translationKey: "service-custom-web-app-development",
          title: "Provoz drží tabulky a e-mail",
          description: "Lidé pracují s daty, rolemi a stavy, ale chybí jim jedno místo pro evidenci a vlastní pracovní postup.",
          direction: "Aplikace a systémy",
        },
        {
          translationKey: "service-automations-and-integrations",
          title: "Data se přepisují ručně",
          description: "Používané nástroje spolu nenavazují a opakované přenosy dat nebo dokumentů zbytečně berou čas.",
          direction: "Automatizace",
        },
      ]
    : [
        {
          translationKey: "service-company-websites",
          title: "Customers do not understand the offer",
          description: "The company needs to present its services, products or content clearly and lead visitors towards an enquiry.",
          direction: "Websites",
        },
        {
          translationKey: "service-custom-web-app-development",
          title: "Operations rely on spreadsheets and email",
          description: "People work with data, roles and statuses but lack one place for records and their own operational workflow.",
          direction: "Applications and systems",
        },
        {
          translationKey: "service-automations-and-integrations",
          title: "Data is copied manually",
          description: "Existing tools do not connect and repeated transfers of data or documents consume unnecessary time.",
          direction: "Automations",
        },
      ];

  return (
    <ServicesHubMotion>
      <BaseStack className="page-stack-generic page-type-hub page-type-services-hub">
        <section className="service-hub-visual-hero">
          <div className="band-shell">
            <Breadcrumbs page={page} />
            <div className="service-hub-hero-layout">
              <h1>{page.hero.title}</h1>
              <div className="service-hub-hero-support">
                <p>{page.hero.subtitle}</p>
                <div className="hero-actions">
                  <Link
                    className="button button-primary"
                    data-analytics-event="seo_cta_click"
                    data-analytics-location="hero"
                    href={normalizeInternalHref(heroPrimaryHref)}
                  >
                    {page.hero.primaryCta.label}
                  </Link>
                  <Link className="button button-secondary" href={page.locale === "cs" ? "/cs/reference/" : "/en/references/"}>
                    {page.locale === "cs" ? "Prohlédnout práci" : "View selected work"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-hub-primary-section">
          <div className="band-shell">
            <div className="service-hub-section-heading">
              <h2>{page.locale === "cs" ? "Tři hlavní cesty" : "Three primary delivery paths"}</h2>
              <p>{page.locale === "cs" ? "Začněte tím, co má být hlavním výsledkem. Jednotlivé části lze později propojit v jednom řešení." : "Start with the main outcome. The individual paths can later combine in one solution."}</p>
            </div>
            <div className="service-hub-primary-grid">
              {primaryCards.map((card) => {
                const pricing = page.locale === "cs" ? getServicePricing(card.translationKey) : undefined;

                return (
                  <Link className="service-hub-primary-card" href={buildPagePath(card.target)} key={card.translationKey}>
                    <span className="service-hub-primary-image">
                      <Image src={card.image} alt="" decoding="async" {...getStaticImageDimensions(card.image)} />
                    </span>
                    <span className="service-hub-primary-copy">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                      {pricing ? <strong className="service-hub-primary-price">{pricing.summary}</strong> : null}
                      <span className="service-hub-primary-link">{card.action}{arrow("service-hub-arrow")}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="service-hub-guide-section">
          <div className="band-shell">
            <div className="service-hub-guide-heading">
              <h2>{page.locale === "cs" ? "Začněme problémem, ne technologií" : "Start with the problem, not the technology"}</h2>
              <p>{page.locale === "cs" ? "Není nutné přijít s hotovým zadáním. Pro první směr stačí pojmenovat, co dnes nefunguje nebo bere zbytečně čas." : "You do not need a finished specification. A useful first direction starts by naming what does not work or consumes unnecessary time."}</p>
            </div>
            <div className="service-hub-orientation-grid">
              {orientationItems.map((item) => {
                const target = children.find((child) => child.translationKey === item.translationKey);

                return (
                  <Link
                    className="service-hub-orientation-item"
                    href={target ? buildPagePath(target) : normalizeInternalHref(page.cta.href)}
                    key={item.title}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <strong>{item.direction}{arrow("service-hub-arrow")}</strong>
                  </Link>
                );
              })}
            </div>
            <p className="service-hub-orientation-note">
              {page.locale === "cs"
                ? "Řešení se mohou kombinovat. Web může navazovat na interní systém a ten může automatizovat přenos dat mezi dalšími nástroji."
                : "The paths can combine. A website may connect to an internal system that also automates data transfers between other tools."}
            </p>
          </div>
        </section>

        <section className="service-hub-projects-section">
          <div className="service-hub-project-marquee" aria-label={page.locale === "cs" ? "Odkazy na vybrané realizované projekty" : "Links to selected delivered projects"}>
            <div>
              {[...serviceHubLogoProjects, ...serviceHubLogoProjects].map((project, index) => {
                const isDuplicate = index >= serviceHubLogoProjects.length;
                return (
                  <a
                    aria-hidden={isDuplicate || undefined}
                    href={project.href}
                    key={`${project.name}-${index}`}
                    rel="noreferrer"
                    tabIndex={isDuplicate ? -1 : undefined}
                    target="_blank"
                  >
                    {projectLogo(project.name, isDuplicate)}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="band-shell">
            <div className="service-hub-section-heading">
              <h2>{page.locale === "cs" ? "Výsledek je vidět na reálných projektech" : "The outcome is visible in real projects"}</h2>
              <p>{page.locale === "cs" ? "Od firemních webů přes CRM a marketplace až po vlastní AI aplikaci." : "From business websites and CRM to a marketplace and an owned AI application."}</p>
            </div>
            <div className="service-hub-project-grid">
              {projects.map((project) => (
                <a className="service-hub-project-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
                  <span className="service-hub-project-image"><Image src={project.image} alt={`${project.name} - ${project.type}`} loading="lazy" decoding="async" {...getStaticImageDimensions(project.image)} /></span>
                  <span className="service-hub-project-copy"><strong>{project.name}</strong><span>{project.type}</span></span>
                </a>
              ))}
            </div>
            <Link className="text-link service-hub-all-work" href={page.locale === "cs" ? "/cs/reference/" : "/en/references/"}>
              {page.locale === "cs" ? "Zobrazit všechny reference" : "View all selected work"}
            </Link>
          </div>
        </section>

        {supportingServices.length ? (
          <section className="service-hub-supporting-section">
            <div className="band-shell service-hub-supporting-layout">
              <div>
                <h2>{page.locale === "cs" ? "Konkrétnější situace" : "More specific situations"}</h2>
                <p>{page.locale === "cs" ? "Pro převzetí aplikace, interní systém nebo řízení zakázek jsou připravené podrobnější stránky." : "More detailed pages cover application takeover, internal tools and operational delivery."}</p>
              </div>
              <div className="service-hub-supporting-links">
                {supportingServices.map((service) => (
                  <Link href={buildPagePath(service)} key={service.id}>
                    <span>{service.breadcrumbLabel}</span>
                    {arrow("service-hub-arrow")}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <FAQBlock page={page} />
        <section className="service-hub-final-section">
          <div className="band-shell">
            <div className="home-contact-float service-hub-final-panel">
              <div className="home-contact-copy">
              <h2>{page.locale === "cs" ? "Stačí popsat, co dnes nefunguje." : "Start by describing what is not working today."}</h2>
              <p>{page.cta.note}</p>
              </div>
              <div className="home-contact-actions">
                <Link
                  className="button home-contact-primary"
                  data-analytics-event="seo_cta_click"
                  data-analytics-location="final"
                  href={normalizeInternalHref(page.cta.href)}
                >
                  {page.locale === "cs" ? "Popsat projekt" : "Describe your project"}
                </Link>
                <a className="button home-contact-secondary" href={siteConfig.calendly} target="_blank" rel="noreferrer">
                  {page.locale === "cs" ? "Domluvit úvodní schůzku" : "Book an introductory call"}
                </a>
                <div className="home-contact-meta">
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </BaseStack>
    </ServicesHubMotion>
  );
}

function ServiceSection({ section }: { section: PageSection }) {
  const isOrdered = section.listType === "ordered";
  const listClassName = isOrdered ? "service-section-list service-section-list-ordered" : "service-section-list";

  return (
    <article className="service-section">
      <div className="service-section-copy">
        <h2>{section.title}</h2>
        {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      {section.bullets?.length ? (
        isOrdered ? (
          <ol className={listClassName}>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ol>
        ) : (
          <ul className={listClassName}>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
        )
      ) : null}
    </article>
  );
}

function ServiceDirectBlock({ page }: TemplateProps) {
  const content = page.locale === "cs"
    ? {
        eyebrow: "Jedna odpovědnost",
        title: "Projekt řešíte přímo se mnou.",
        body: "Od prvního upřesnění problému držím návrh, technická rozhodnutí i realizaci v jednom kontextu. Díky tomu se neztratí důvod, proč se jednotlivé části řešení dělají.",
        role: "návrh, vývoj a provoz",
        link: "Jak spolupráce probíhá",
        href: "/cs/jak-spoluprace-probiha/",
      }
    : {
        eyebrow: "One point of responsibility",
        title: "You work directly with me.",
        body: "From the first project conversation, I keep the product context, technical decisions and implementation connected. That keeps the reason behind each part of the solution visible throughout delivery.",
        role: "design, development and operation",
        link: "How project delivery works",
        href: "/en/how-project-delivery-works/",
      };

  return (
    <section className="service-direct-section service-direct-section-simple">
      <div className="band-shell service-direct-layout service-direct-simple">
        <div className="service-direct-copy">
          <p className="service-direct-eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
          <Link className="text-link" href={content.href}>{content.link}</Link>
        </div>
        <div className="service-direct-profile">
          <span className="service-direct-profile-photo">
            <Image src="/about/ondrej-cutout.png" alt="Ondřej Halata" loading="lazy" decoding="async" width={324} height={324} />
          </span>
          <span className="service-direct-profile-copy">
            <strong>Ondřej Halata</strong>
            <small>{content.role}</small>
          </span>
        </div>
      </div>
    </section>
  );
}

function ServiceDetailHero({ page }: TemplateProps) {
  const visual = serviceVisuals[page.translationKey];
  const primaryHref = resolvePrimaryActionHref(page);

  return (
    <section className="service-detail-hero">
      <div className="band-shell">
        <Breadcrumbs page={page} />
        <div className={`service-detail-hero-layout${visual ? "" : " service-detail-hero-layout-single"}`}>
          <div className="service-detail-hero-copy">
            <p className="eyebrow">{page.hero.eyebrow}</p>
            <h1>{page.hero.title}</h1>
            <p className="service-detail-hero-lead">{page.hero.subtitle}</p>
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
          {visual ? (
            <a className="service-detail-hero-visual" href={visual.href} target="_blank" rel="noreferrer">
              <Image src={visual.image} alt={`${visual.name} - ukázka realizace`} loading="eager" decoding="async" fetchPriority="high" {...getStaticImageDimensions(visual.image)} />
              <span>
                <small>{page.locale === "cs" ? "Ukázka realizace" : "Delivered example"}</small>
                <strong>{visual.name}</strong>
                {arrow("service-detail-visual-arrow")}
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function WebsiteRangeSection({ section }: { section: PageSection }) {
  const labels = ["Jedna nabídka", "Celá firma", "Sortiment", "Vlastní funkce"];
  const examples = [
    { name: "Prodat-byt.cz", image: "/work/prodat-byt.png", href: "https://prodat-byt.cz/" },
    { name: "Viditelný Makléř", image: "/work/viditelny-makler.png", href: "https://www.viditelnymakler.cz/" },
    { name: "Kasan & Pelcová", image: "/work/kasan-pelcova.png", href: "https://www.kasanpelcova.cz/" },
    { name: "RealioCRM", image: "/work/realio-crm.png", href: "https://crm.halatao.cz/" },
  ];

  return (
    <section className="service-detail-range-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="service-detail-range-grid">
          {section.bullets?.map((item, index) => (
            <article className="service-detail-range-item" key={item}>
              <a className="service-detail-range-visual" href={examples[index].href} target="_blank" rel="noreferrer">
                <Image src={examples[index].image} alt={`${examples[index].name} - ukázka realizace`} loading="lazy" decoding="async" {...getStaticImageDimensions(examples[index].image)} />
                <span>
                  <small>Ukázka realizace</small>
                  <strong>{examples[index].name}</strong>
                </span>
              </a>
              <div className="service-detail-range-copy">
                <h3>{labels[index]}</h3>
                <p>{item}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteOwnershipSection({ section }: { section: PageSection }) {
  const ownershipPoints = [
    ["Zdrojový kód", "Předatelný repozitář bez závislosti na uzavřené platformě."],
    ["Provoz", "Účet a infrastruktura mohou zůstat pod vaší kontrolou."],
    ["Další rozvoj", "Web lze převzít, přesunout nebo rozvíjet s jiným dodavatelem."],
  ];

  return (
    <section className="website-ownership-section">
      <div className="band-shell website-ownership-layout">
        <div className="website-ownership-copy">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="website-ownership-points">
          {ownershipPoints.map(([title, description]) => (
            <article key={title}>
              <strong>{title}</strong>
              <span>{description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePricingSection({ section, pricing }: { section: PageSection; pricing: ServicePricing }) {
  return (
    <section className="website-pricing-section service-pricing-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="website-pricing-grid">
          {pricing.options.map((offer) => (
            <article key={offer.title}>
              <h3>{offer.title}</h3>
              <strong>{offer.price}</strong>
              <p>{offer.description}</p>
            </article>
          ))}
        </div>
        <p className="website-pricing-note"><strong>{pricing.note.title}</strong><span>{pricing.note.text}</span></p>
      </div>
    </section>
  );
}

function WebsiteProcessSection({ section }: { section: PageSection }) {
  return (
    <section className="website-process-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ol className="website-process-track">
          {section.bullets?.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WebsiteDeliverySection({ section }: { section: PageSection }) {
  const areas = [
    {
      title: "Struktura a vzhled",
      description: "Struktura webu, hlavní uživatelské cesty a vizuální návrh odpovídající značce.",
    },
    {
      title: "Obsah a poptávky",
      description: "Správa dohodnutých částí obsahu a kontaktní či poptávkové formuláře.",
    },
    {
      title: "Mobil a vyhledávače",
      description: "Responzivní provedení pro mobil, tablet a desktop včetně technického základu SEO.",
    },
    {
      title: "Spuštění webu",
      description: "Napojení domény, analytiky a nasazení hotového webu do provozu.",
    },
  ];

  return (
    <section className="service-detail-delivery-map-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="service-detail-delivery-showcase">
          <a className="service-detail-delivery-preview" href="https://www.kasanpelcova.cz/nemovitosti" target="_blank" rel="noreferrer">
            <Image src="/work/kasan-pelcova-nemovitosti.png" alt="Kasan & Pelcová - ukázka katalogu nemovitostí na firemním webu" loading="lazy" decoding="async" width={1250} height={703} />
            <span>
              <small>Ukázka realizace</small>
              <strong>Kasan & Pelcová</strong>
            </span>
          </a>
          <div className="service-detail-delivery-scope">
            {areas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceScenarioSection({ section, type }: { section: PageSection; type: "application" | "automation" }) {
  const bullets = section.bullets ?? [];
  const groups = type === "application"
    ? [
        { title: "Vlastní firemní proces", items: [bullets[0], bullets[1]] },
        { title: "Hotový nástroj nestačí", items: [bullets[2], bullets[5]] },
        { title: "Portál nebo digitální produkt", items: [bullets[3], bullets[4]] },
      ]
    : [
        { title: "Přenos dat", items: [bullets[0], bullets[4]] },
        { title: "Kontrola a reporting", items: [bullets[1], bullets[3]] },
        { title: "Poptávky a návaznosti", items: [bullets[2], bullets[5]] },
      ];

  return (
    <section className={`service-scenarios-section service-scenarios-${type}`}>
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="service-scenario-grid">
          {groups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div>{group.items.filter((item): item is string => Boolean(item)).map((item) => <p key={item}>{item}</p>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApplicationDeliverySection({ section }: { section: PageSection }) {
  const bullets = section.bullets ?? [];
  const areas = [
    { title: "Uživatelé a scénáře", description: bullets[0] },
    { title: "Rozhraní pro práci", description: bullets[1] },
    { title: "Data a oprávnění", description: bullets[2] },
    { title: "Integrace a provoz", description: [bullets[3], bullets[4]].filter(Boolean).join(" ") },
  ];

  return (
    <section className="application-delivery-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="service-detail-delivery-showcase application-delivery-showcase">
          <div className="application-publishing-previews" aria-label="eMamky a Novinex - dvě mutace společné publikační platformy">
            <a className="application-publishing-preview" href="https://emamky.cz/" target="_blank" rel="noreferrer">
              <Image src="/work/emamky.png" alt="eMamky - ukázka publikační webové aplikace" loading="lazy" decoding="async" width={1265} height={712} />
              <span>
                <small>Společná publikační platforma</small>
                <strong>eMamky</strong>
              </span>
            </a>
            <a className="application-publishing-preview" href="https://novinex.cz/" target="_blank" rel="noreferrer">
              <Image src="/work/novinex.png" alt="Novinex - ukázka publikační webové aplikace" loading="lazy" decoding="async" width={1265} height={712} />
              <span>
                <small>Společná publikační platforma</small>
                <strong>Novinex</strong>
              </span>
            </a>
          </div>
          <div className="service-detail-delivery-scope">
            {areas.map((area) => (
              <article key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationTypesSection({ section }: { section: PageSection }) {
  const items = (section.bullets ?? []).map((item) => {
    const separatorIndex = item.indexOf(": ");
    return {
      title: separatorIndex > 0 ? item.slice(0, separatorIndex) : item,
      description: separatorIndex > 0 ? item.slice(separatorIndex + 2) : "",
    };
  });

  return (
    <section className="application-types-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="application-types-grid">
          {items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceNarrativeSection({ section, labels }: { section: PageSection; labels: [string, string] }) {
  return (
    <section className="service-narrative-section">
      <div className="band-shell">
        <div className="service-narrative-panel">
          <h2>{section.title}</h2>
          <div className="service-narrative-grid">
            {section.body.map((paragraph, index) => (
              <article key={paragraph}>
                <h3>{labels[index] ?? labels[labels.length - 1]}</h3>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceWorkflowSection({ section, type }: { section: PageSection; type: "application" | "automation" }) {
  const titles = type === "application"
    ? ["Kontext a uživatelé", "První použitelný rozsah", "Vývoj a ověření", "Nasazení a další rozvoj"]
    : ["Proces a výjimky", "Rozdělení odpovědnosti", "První automatizace", "Ověření v provozu"];

  return (
    <section className={`service-workflow-section service-workflow-${type}`}>
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="service-workflow-grid">
          {(section.bullets ?? []).map((item, index) => (
            <article key={item}>
              <h3>{titles[index] ?? titles[titles.length - 1]}</h3>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AutomationFlowSection({ section }: { section: PageSection }) {
  const items = (section.bullets ?? []).map((item) => {
    const separatorIndex = item.indexOf(": ");
    return {
      title: separatorIndex > 0 ? item.slice(0, separatorIndex) : item,
      description: separatorIndex > 0 ? item.slice(separatorIndex + 2) : "",
    };
  });
  const flow = items.slice(0, 3);
  const resilience = items[3];

  return (
    <section className="automation-flow-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="automation-flow-map">
          <div className="automation-flow-steps">
            {flow.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          {resilience ? (
            <div className="automation-flow-resilience">
              <strong>{resilience.title}</strong>
              <p>{resilience.description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailSection({ page, section, index }: TemplateProps & { section: PageSection; index: number }) {
  if (page.locale === "cs" && (section.title === "Orientační ceny" || section.title === "Orientační cenový rámec")) {
    const pricing = getServicePricing(page.translationKey);
    if (pricing) return <ServicePricingSection pricing={pricing} section={section} />;
  }

  if (page.translationKey === "service-company-websites" && index === 0) {
    return <WebsiteRangeSection section={section} />;
  }

  if (page.translationKey === "service-company-websites" && index === 1) {
    return <WebsiteDeliverySection section={section} />;
  }

  if (page.translationKey === "service-company-websites" && (section.title === "Web pod vaší kontrolou" || section.title === "A website under your control")) {
    return <WebsiteOwnershipSection section={section} />;
  }

  if (page.translationKey === "service-company-websites" && section.listType === "ordered") {
    return <WebsiteProcessSection section={section} />;
  }

  if (page.locale === "cs" && page.translationKey === "service-custom-web-app-development") {
    if (index === 0) return <ServiceScenarioSection section={section} type="application" />;
    if (index === 1) return <ApplicationDeliverySection section={section} />;
    if (index === 2) return <ApplicationTypesSection section={section} />;
    if (index === 3) return <ServiceNarrativeSection section={section} labels={["AI při vývoji", "AI uvnitř aplikace"]} />;
    if (section.listType === "ordered") return <ServiceWorkflowSection section={section} type="application" />;
  }

  if (page.locale === "cs" && page.translationKey === "service-automations-and-integrations") {
    if (index === 0) return <ServiceScenarioSection section={section} type="automation" />;
    if (index === 1) return <AutomationFlowSection section={section} />;
    if (index === 2) return <ServiceNarrativeSection section={section} labels={["Kde AI pomůže", "Kde je důležitá kontrola"]} />;
    if (section.listType === "ordered") return <ServiceWorkflowSection section={section} type="automation" />;
  }

  const ordered = section.listType === "ordered";
  const sectionClassName = `service-detail-content-section${index % 2 ? " service-detail-content-section-soft" : ""}${ordered ? " service-detail-process-section" : ""}`;

  return (
    <section className={sectionClassName}>
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        {section.bullets?.length ? (
          ordered ? (
            <ol className="service-detail-process-grid">
              {section.bullets.map((item) => <li key={item}><span>{item}</span></li>)}
            </ol>
          ) : (
            <ul className="service-detail-feature-grid">
              {section.bullets.map((item) => {
                const separatorIndex = item.indexOf(": ");
                const title = separatorIndex > 0 ? item.slice(0, separatorIndex) : null;
                const description = separatorIndex > 0 ? item.slice(separatorIndex + 2) : item;

                return (
                  <li key={item}>
                    {title ? <strong>{title}</strong> : null}
                    <span>{description}</span>
                  </li>
                );
              })}
            </ul>
          )
        ) : null}
      </div>
    </section>
  );
}

function ServiceDetailProjects({ page, section }: TemplateProps & { section?: PageSection }) {
  const projects = getServiceProjects(page);
  if (!projects.length) return null;

  return (
    <section className="service-detail-projects-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{section?.title ?? (page.locale === "cs" ? "Výsledek je vidět na reálných projektech" : "The outcome is visible in real projects")}</h2>
          {(section?.body.length ? section.body : [page.locale === "cs" ? "Vybrané realizace ukazují rozdílný rozsah, ale stejný důraz na použitelnost a provoz." : "Selected deliveries vary in scope but share the same focus on usability and operation."]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="service-detail-project-grid">
          {projects.map((project) => (
            <a className="service-detail-project-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
              <span className="service-detail-project-image"><Image src={project.image} alt={`${project.name} - ${project.type}`} loading="lazy" decoding="async" {...getStaticImageDimensions(project.image)} /></span>
              <span className="service-detail-project-copy">
                <strong>{project.name}</strong>
                {arrow("service-detail-project-arrow")}
                <span className="service-detail-project-description">{project.description}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailFit({ page }: TemplateProps) {
  return (
    <section className="service-detail-fit-section">
      <div className="band-shell">
        <div className="service-detail-section-heading">
          <h2>{page.locale === "cs" ? "Dává tato služba smysl pro vaši situaci?" : "Does this service fit your situation?"}</h2>
          <p>{page.locale === "cs" ? "Rozhodující není velikost firmy, ale konkrétní problém, očekávaný výsledek a rozumně vymezený rozsah." : "The deciding factors are the problem, expected outcome and a clearly bounded scope rather than company size."}</p>
        </div>
        <div className="service-detail-fit-grid">
          <article>
            <h3>{page.locale === "cs" ? "Dává smysl, když" : "A good fit when"}</h3>
            <ul>{page.fit.for.map((item) => <li key={item}>{check("service-detail-fit-check")}{item}</li>)}</ul>
          </article>
          <article>
            <h3>{page.locale === "cs" ? "Jiná cesta dává větší smysl, když" : "Another approach is a better fit when"}</h3>
            <ul>{page.fit.notFor.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function ServiceDetailLinks({ page }: TemplateProps) {
  const links = [
    ...(page.priorityLinks ?? []).map((link) => ({ label: link.label, href: normalizeInternalHref(link.href) })),
    ...getRelatedPages(page).map((related) => ({ label: related.breadcrumbLabel, href: buildPagePath(related) })),
  ].filter((link, index, all) => all.findIndex((candidate) => candidate.href === link.href) === index);

  if (!links.length) return null;

  return (
    <section className="service-detail-links-section">
      <div className="band-shell">
        <h2>{page.locale === "cs" ? "Další související informace" : "Related information"}</h2>
        <div className="service-detail-links-grid">
          {links.map((link) => <Link href={link.href} key={link.href}><span>{link.label}</span>{arrow("service-hub-arrow")}</Link>)}
        </div>
      </div>
    </section>
  );
}

function ServiceDetailCTA({ page }: TemplateProps) {
  return (
    <section className="service-detail-final-section">
      <div className="band-shell">
        <div className="home-contact-float service-detail-final-panel">
          <div className="home-contact-copy">
            <h2>{page.locale === "cs" ? "Máte podobnou situaci?" : "Have a similar situation?"}</h2>
            <p>{page.cta.note}</p>
          </div>
          <div className="home-contact-actions">
            <Link
              className="button home-contact-primary"
              data-analytics-event={resolveCtaEvent(page)}
              data-analytics-location="final"
              href={normalizeInternalHref(resolvePrimaryActionHref(page))}
            >
              {page.cta.label}
            </Link>
            <a className="button home-contact-secondary" href={siteConfig.calendly} target="_blank" rel="noreferrer">
              {page.locale === "cs" ? "Domluvit úvodní schůzku" : "Book an introductory call"}
            </a>
            <div className="home-contact-meta">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceTemplateBody({ page }: TemplateProps) {
  const referenceSectionIndex = page.sections.findIndex((section) => /relevant|zkušenost|reference|experience/i.test(section.title));
  const referenceSection = referenceSectionIndex >= 0 ? page.sections[referenceSectionIndex] : undefined;
  const contentSections = page.sections.filter((_, index) => index !== referenceSectionIndex);
  const firstSections = contentSections.slice(0, 2);
  const remainingSections = contentSections.slice(2);

  return (
    <BaseStack className="page-stack-generic page-type-service">
      <ServiceDetailHero page={page} />
      <section className="service-detail-intro-section">
        <div className="band-shell">
          <p className="eyebrow">{page.locale === "cs" ? "Jak k projektu přistupuji" : "How I approach the project"}</p>
          <div className="service-detail-intro-copy">
            {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {page.note ? <p className="service-detail-note">{page.note}</p> : null}
        </div>
      </section>
      {firstSections.map((section, index) => <ServiceDetailSection page={page} index={index} section={section} key={section.title} />)}
      <ServiceDirectBlock page={page} />
      {remainingSections.map((section, index) => <ServiceDetailSection page={page} index={index + firstSections.length} section={section} key={section.title} />)}
      <ServiceDetailProjects page={page} section={referenceSection} />
      <ServiceDetailFit page={page} />
      <FAQBlock page={page} />
      <ServiceDetailLinks page={page} />
      <ServiceDetailCTA page={page} />
    </BaseStack>
  );
}

function CzechHomeTemplateBody({ page }: TemplateProps) {
  const servicesSection = page.sections[0];
  const referencesSection = page.sections[1];
  const specializationSection = page.sections[2];
  const processSection = page.sections[3];
  const aboutSection = page.sections[4];
  const services = servicesSection?.bullets ?? [];
  const projects = getHomepageProjects("cs");
  const serviceDescriptions = [
    "Když potřebujete, aby zákazník rychle pochopil vaši nabídku, důvěřoval jí a udělal další krok.",
    "Když zakázky, evidence nebo práce týmu přerostly tabulky, e-maily a obecné nástroje.",
    "Když lidé opakovaně přepisují data, kontrolují stejné věci nebo čekají na návaznost mezi systémy.",
  ];
  const processSteps = processSection?.bullets ?? [];

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
                href={normalizeInternalHref(page.hero.primaryCta.href)}
              >
                {page.hero.primaryCta.label}
              </Link>
              {page.hero.secondaryCta ? (
                <a className="button button-secondary" href={page.hero.secondaryCta.href} target="_blank" rel="noreferrer">
                  {page.hero.secondaryCta.label}
                </a>
              ) : null}
            </div>
            {page.note ? <p className="home-hero-proof">{page.note}</p> : null}
          </div>
        </div>
      </section>

      <section className="home-services-section" id="services">
        <div className="shell">
          <div className="home-section-intro">
            <h2 className="section-title">{servicesSection?.title}</h2>
            {servicesSection?.body.map((paragraph) => <p className="section-lead" key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="home-services-grid">
            {services.map((service, index) => {
              const pricingKey = primaryServicePricingKeys[index];
              const pricing = pricingKey ? getServicePricing(pricingKey) : undefined;

              return (
                <Link className="home-service-card" href={normalizeInternalHref(homepageFeaturePaths.cs[index])} key={service}>
                  <h3>{service}</h3>
                  <p>{serviceDescriptions[index]}</p>
                  {pricing ? <strong className="home-service-price">{pricing.summary}</strong> : null}
                  <span className="home-service-link">Prohlédnout službu</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-references-section" id="references">
        <div className="shell">
          <div className="home-section-intro home-reference-intro">
            <div>
              <h2 className="section-title">{referencesSection?.title}</h2>
            </div>
            <div>
              {referencesSection?.body.map((paragraph) => <p className="section-lead" key={paragraph}>{paragraph}</p>)}
              <Link className="text-link" href="/cs/reference/">Zobrazit všechny reference</Link>
            </div>
          </div>
          <div className="home-project-grid">
            {projects.map((project) => (
              <a className="home-project-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
                <span className="home-project-image">
                  <Image src={project.image} alt={`${project.name} - ${project.type}`} loading="lazy" decoding="async" {...getStaticImageDimensions(project.image)} />
                </span>
                <span className="home-project-copy">
                  <span className="home-project-type">{project.type}</span>
                  <strong>{project.name}</strong>
                  <span>{project.description}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-specialization-section">
        <div className="shell">
          <div className="home-section-intro">
            <p className="section-kicker">Užší specializace</p>
            <h2 className="section-title">{specializationSection?.title}</h2>
            {specializationSection?.body.map((paragraph) => <p className="section-lead" key={paragraph}>{paragraph}</p>)}
            <Link className="text-link" href="/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/">
              Systém pro řízení poptávek a zakázek
            </Link>
          </div>
        </div>
      </section>

      <section className="home-process-section">
        <div className="shell">
          <div className="home-section-intro">
            <h2 className="section-title">{processSection?.title}</h2>
            {processSection?.body.map((paragraph) => <p className="section-lead" key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="home-process-grid">
            {processSteps.map((item) => {
              const [title, description] = item.split(": ");
              return <article key={item}><h3>{title}</h3><p>{description}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="home-about-section" id="about">
        <div className="shell home-about-layout">
          <div className="home-about-copy">
            <h2 className="section-title">{aboutSection?.title}</h2>
            <div className="section-copy">
              {aboutSection?.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link className="text-link" href="/cs/o-mne/">Více o mně a způsobu práce</Link>
          </div>
          <div className="home-about-photo-wrap">
            <Image className="home-about-photo" src="/about/ondrej-cutout.png" alt="Bc. Ondřej Halata" loading="lazy" decoding="async" width={324} height={324} />
          </div>
        </div>
      </section>

      <section className="home-faq-section">
        <div className="shell narrow-shell">
          <h2 className="home-faq-title">Časté otázky před prvním kontaktem</h2>
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

      <section className="home-contact-section home-contact-section-cs" id="contact">
        <div className="shell contact-shell">
          <div className="home-contact-float">
            <div className="home-contact-copy">
              <h2>Máte konkrétní projekt, nebo jen pocit, že současný způsob práce nefunguje?</h2>
              <p>Stačí několik vět o tom, co dnes řešíte. Ozvu se s realistickým návrhem dalšího kroku.</p>
            </div>
            <div className="home-contact-actions">
              <Link className="button home-contact-primary" data-analytics-event="seo_cta_click" data-analytics-location="contact" href={normalizeInternalHref(page.cta.href)}>
                {page.cta.label}
              </Link>
              <a className="button home-contact-secondary" href={siteConfig.calendly} target="_blank" rel="noreferrer">Domluvit úvodní schůzku</a>
              <div className="home-contact-meta">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
  const projects = getHomepageProjects(page.locale);
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
            <Link className="text-link" href={page.locale === "cs" ? "/cs/reference/" : "/en/references/"}>
              {page.locale === "cs" ? "Zobrazit všechny reference" : "View all references"}
            </Link>
          </div>
          <div className="home-project-showcase">
            <div className="home-project-showcase-heading">
              <h3>{ref.featuredTitle}</h3>
              <p>{ref.featuredDescription}</p>
            </div>
            <div className="home-project-grid">
              {projects.map((project) => (
                <a
                  className="home-project-card"
                  href={project.href}
                  key={project.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="home-project-image">
                    <Image src={project.image} alt={`${project.name} - ${project.type}`} loading="lazy" decoding="async" {...getStaticImageDimensions(project.image)} />
                  </span>
                  <span className="home-project-copy">
                    <span className="home-project-type">{project.type}</span>
                    <strong>{project.name}</strong>
                    <span>{project.description}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <aside className="home-team-reference" aria-labelledby="team-reference-title">
            <div className="home-team-copy">
              <p className="home-team-label">{page.locale === "cs" ? "Zkušenost z týmů" : "Team experience"}</p>
              <h3 id="team-reference-title">{ref.teamTitle}</h3>
              <p>{ref.teamDescription}</p>
              <div className="tag-row">{ref.teamTags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
            <div className="home-team-logos">
              {logos.map((logo) => (
                <a
                  key={logo.name}
                  className="home-team-logo"
                  href={logo.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={logo.name}
                >
                  <Image src={logo.src} alt={logo.name} width={240} height={80} />
                </a>
              ))}
            </div>
          </aside>
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
      <PageIntroduction page={page} />
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
  return <BaseStack>{page.locale === "cs" ? <CzechHomeTemplateBody page={page} /> : <HomeTemplateBody page={page} />}</BaseStack>;
}

export function HubTemplate({ page }: TemplateProps) {
  if (page.translationKey === "hub-services") {
    return <ServiceHubTemplate page={page} />;
  }

  const children = getSectionChildren(page);
  return (
    <BaseStack className="page-stack-generic page-type-hub">
      <PageLead page={page} tone="hub" supportingCopy={page.intro} />
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
  return <ServiceTemplateBody page={page} />;
}

export function ProblemTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="problem" />; }
export function ComparisonTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="comparison" />; }
export function UseCaseTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="use-case" />; }
export function CaseStudyTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="case-study" />; }

export function ReferenceTemplate({ page }: TemplateProps) {
  const projects = featuredProjects[page.locale];
  const applicationNames = new Set(["DoporučenoAI", "RealioCRM", "Odhad123", "Worket.cz", "Swapio", "eMamky", "Novinex"]);
  const automationNames = new Set(["Pohoda XML"]);
  const applications = projects.filter((project) => applicationNames.has(project.name));
  const automations = projects.filter((project) => automationNames.has(project.name));
  const websites = projects.filter((project) => !applicationNames.has(project.name) && !automationNames.has(project.name));
  const [applicationSection, websiteSection, automationSection, teamSection] = page.sections;

  const renderProjectGrid = (items: ReadonlyArray<(typeof projects)[number]>) => (
    <div className="home-project-grid reference-project-grid">
      {items.map((project) => (
        <a className="home-project-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
          <span className="home-project-image">
            <Image src={project.image} alt={`${project.name} - ${project.type}`} loading="lazy" decoding="async" {...getStaticImageDimensions(project.image)} />
          </span>
          <span className="home-project-copy">
            <span className="home-project-type">{project.type}</span>
            <strong>{project.name}</strong>
            <span>{project.description}</span>
          </span>
        </a>
      ))}
    </div>
  );

  return (
    <BaseStack className="page-stack-generic page-type-reference">
      <PageLead page={page} tone="reference" />
      <section className="band-section reference-portfolio-section">
        <div className="band-shell">
          <div className="reference-section-heading">
            <h2>{applicationSection.title}</h2>
            {page.intro[0] ? <p className="reference-delivery-context">{page.intro[0]}</p> : null}
            {applicationSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {renderProjectGrid(applications)}
        </div>
      </section>
      <section className="band-section reference-portfolio-section reference-portfolio-section-soft">
        <div className="band-shell">
          <div className="reference-section-heading">
            <h2>{websiteSection.title}</h2>
            {websiteSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {renderProjectGrid(websites)}
        </div>
      </section>
      <section className="band-section reference-portfolio-section">
        <div className="band-shell">
          <div className="reference-section-heading">
            <h2>{automationSection.title}</h2>
            {automationSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {renderProjectGrid(automations)}
        </div>
      </section>
      <section className="band-section">
        <div className="band-shell">
          <article className="content-card reference-team-section">
            <h2>{teamSection.title}</h2>
            {page.intro[1] ? <p className="reference-team-context">{page.intro[1]}</p> : null}
            {teamSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="home-team-logos">
              {logos.map((logo) => (
                <a className="home-team-logo" href={logo.href} key={logo.name} target="_blank" rel="noreferrer" aria-label={logo.name}>
                  <Image src={logo.src} alt={logo.name} width={240} height={80} />
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>
      <RelatedLinks page={page} />
      <CTA page={page} />
    </BaseStack>
  );
}

export function AboutTemplate({ page }: TemplateProps) {
  const [workSection, experienceSection, valuesSection] = page.sections;
  const aboutProjects = featuredProjects.cs.filter((project) =>
    ["DoporučenoAI", "RealioCRM", "Swapio"].includes(project.name),
  );

  return (
    <BaseStack className="page-stack-generic page-type-about">
      <section className="about-page-hero">
        <div className="shell about-page-hero-layout">
          <div className="about-page-hero-copy">
            <Breadcrumbs page={page} />
            <h1>{page.hero.title}</h1>
            <p>{page.hero.subtitle}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/cs/kontakt/">Popsat projekt</Link>
              <a className="button button-secondary" href={siteConfig.calendly} target="_blank" rel="noreferrer">Domluvit úvodní schůzku</a>
            </div>
          </div>
          <div className="about-page-profile">
            <Image className="about-page-photo" src="/about/ondrej-cutout.png" alt="Bc. Ondřej Halata" loading="lazy" decoding="async" width={324} height={324} />
            <div className="about-page-profile-copy">
              <strong>Ondřej Halata</strong>
              <span>návrh, vývoj a provoz</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-intro">
        <div className="shell about-page-intro-layout">
          <div className="about-page-intro-heading">
            <h2>{workSection.title}</h2>
            {workSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="about-page-intro-copy">
            {page.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {workSection.bullets ? (
            <ul className="about-page-intro-competencies">
              {workSection.bullets.map((item) => <li key={item}>{item}</li>)}
            </ul>
          ) : null}
        </div>
      </section>

      <section className="about-page-experience">
        <div className="shell">
          <div className="about-page-experience-heading">
            <h2>{experienceSection.title}</h2>
            <div>
              {experienceSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {experienceSection.bullets ? (
                <div className="about-page-experience-topics">
                  {experienceSection.bullets.map((item) => <span key={item}>{item}</span>)}
                </div>
              ) : null}
            </div>
          </div>
          <div className="about-page-project-grid">
            {aboutProjects.map((project) => (
              <a href={project.href} key={project.name} target="_blank" rel="noreferrer">
                <span className="about-page-project-image">
                  <Image src={project.image} alt={`${project.name} - ${project.type}`} loading="lazy" decoding="async" {...getStaticImageDimensions(project.image)} />
                </span>
                <span className="about-page-project-copy">
                  <small>{project.type}</small>
                  <strong>{project.name}</strong>
                  <span>{project.description}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-ai">
        <div className="shell about-page-ai-layout">
          <div className="about-page-ai-copy">
            <h2>{valuesSection.title}</h2>
            {valuesSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {valuesSection.bullets ? (
            <div className="about-page-ai-list">
              {valuesSection.bullets.map((item) => <p key={item}>{item}</p>)}
            </div>
          ) : null}
        </div>
      </section>

      <section className="about-page-cta">
        <div className="shell">
          <div className="about-page-cta-panel">
            <div className="about-page-cta-copy">
              <h2>Máte projekt, který potřebuje ujasnit nebo dotáhnout?</h2>
              <p>Stačí stručně popsat současný stav a očekávaný výsledek. Ozvu se s realistickým návrhem dalšího kroku.</p>
            </div>
            <div className="about-page-cta-actions">
              <Link className="button about-page-cta-primary" href="/cs/kontakt/">Popsat projekt</Link>
              <a className="button about-page-cta-secondary" href={siteConfig.calendly} target="_blank" rel="noreferrer">Domluvit úvodní schůzku</a>
              <div className="about-page-cta-contact">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseStack>
  );
}

export function ContactTemplate({ page }: TemplateProps) {
  const usefulContext = page.sections[0];
  const responseProcess = page.sections[1];

  return (
    <BaseStack className="page-stack-generic page-type-contact">
      <section className="contact-page-main" id="contact-form">
        <div className="shell contact-page-main-grid">
          <div className="contact-page-introduction">
            <Breadcrumbs page={page} />
            <h1>{page.hero.title}</h1>
            <p className="contact-page-lead">{page.hero.subtitle}</p>

            <div className="contact-page-context">
              <p>{page.intro.join(" ")}</p>
            </div>
          </div>

          <div className="contact-page-support">
            <div className="contact-page-direct">
              <span className="contact-page-section-kicker">Přímý kontakt</span>
              <h2>Chcete se spojit rovnou?</h2>
              <div className="contact-page-direct-links">
                <a href={`mailto:${siteConfig.email}`}>
                  {mail("contact-page-direct-icon")}
                  <span><small>E-mail</small><strong>{siteConfig.email}</strong></span>
                  <span aria-hidden="true" className="contact-page-direct-arrow">→</span>
                </a>
                <a href={`tel:${siteConfig.phone}`}>
                  {phone("contact-page-direct-icon")}
                  <span><small>Telefon</small><strong>{siteConfig.phoneDisplay}</strong></span>
                  <span aria-hidden="true" className="contact-page-direct-arrow">→</span>
                </a>
                <a href={siteConfig.calendly} target="_blank" rel="noreferrer">
                  {calendar("contact-page-direct-icon")}
                  <span><small>Úvodní schůzka</small><strong>Rezervovat termín</strong></span>
                  <span aria-hidden="true" className="contact-page-direct-arrow">→</span>
                </a>
              </div>
            </div>

            <div className="contact-page-useful-context">
              <span className="contact-page-section-kicker">Pro rychlejší orientaci</span>
              <h2>{usefulContext.title}</h2>
              {usefulContext.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {usefulContext.bullets ? (
                <ul>
                  {usefulContext.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
            </div>
          </div>

          <div className="contact-page-form-column">
            <InquiryForm locale={page.locale} />
            <div className="contact-page-response">
              <span className="contact-page-section-kicker">Po odeslání</span>
              <h2>{responseProcess.title}</h2>
              {responseProcess.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <FAQBlock heading="Časté otázky před prvním kontaktem" page={page} />
    </BaseStack>
  );
}

export function GuideTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="guide" />; }
export function TechnologyTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="technology" />; }
export function ToolTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="tool" />; }
export function LocationTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="location" />; }
export function ProcessTemplate({ page }: TemplateProps) { return <GenericTemplate page={page} tone="process" />; }

export function InquiryTemplate({ page }: TemplateProps) {
  if (page.translationKey === "automation-audit") {
    return <AutomationAuditLanding page={page} />;
  }

  const isInquiryPage = page.translationKey === "inquiry";

  return (
    <BaseStack className="page-stack-generic page-type-inquiry page-contact-layout">
      <PageLead page={page} tone="inquiry" />
      {isInquiryPage ? (
        <>
          <section className="band-section inquiry-form-section">
            <div className="band-shell">
              <IntroductionCopy page={page} className="inquiry-form-introduction" />
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


