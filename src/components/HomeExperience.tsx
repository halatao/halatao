"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import type { ContentPage, Locale } from "@/content/types";
import { normalizeInternalHref } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

import styles from "./HomeExperience.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Project = {
  name: string;
  description: string;
  role: string;
  href: string;
  image: string;
  tone: "coral" | "blue" | "mint" | "yellow";
};

const copy = {
  cs: {
    nav: { services: "Služby", work: "Realizace", approach: "Jak pracuji", contact: "Kontakt", action: "Probrat projekt", menu: "Otevřít navigaci", close: "Zavřít navigaci" },
    hero: {
      titleBefore: "Navrhuji, stavím",
      titleAfter: "a přebírám firemní software.",
      lead: "Webové aplikace, interní systémy, integrace a AI automatizace. Od prvního návrhu po nasazení a dlouhodobý provoz.",
      primary: "Probrat projekt",
      secondary: "Prohlédnout realizace",
      note: "Samostatná dodávka od nuly i zkušená kapacita do existujícího týmu.",
    },
    proofLine: "Spojuji technický návrh, vývoj a provoz v jedné odpovědnosti.",
    services: {
      title: "Čtyři cesty, jak mohu projekt posunout.",
      intro: "Nevycházím z předem daného balíčku. Začínám situací, ve které se software a firma právě nachází.",
      items: [
        { title: "Nová aplikace nebo interní systém", description: "Od procesu a datového modelu po rozhraní, administraci, nasazení a další rozvoj.", result: "Použitelný systém postavený podle reálné práce lidí.", href: "/cs/sluzby/vyvoj-webovych-aplikaci-na-miru/" },
        { title: "Převzetí a rozvoj existující aplikace", description: "Orientace v cizím kódu, stabilizace rizikových míst a další vývoj bez ukvapeného rewritu.", result: "Jasná odpovědnost a technický směr pro běžící produkt.", href: "/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace/" },
        { title: "Automatizace, integrace a AI", description: "Propojení nástrojů, dat a opakované práce tak, aby automatizace navazovala na skutečný proces.", result: "Méně přepisování, méně chyb a rychlejší průchod agendou.", href: "/cs/sluzby/ai-automatizace-a-integrace/" },
        { title: "Seniorní kapacita do týmu", description: "Samostatný workstream, architektura, delivery nebo stabilizace důležité části produktu.", result: "Zkušená technická odpovědnost bez další vrstvy agentury.", href: "/cs/spoluprace-na-kontrakt/" },
      ],
    },
    work: {
      title: "Software ukazuji na skutečné práci, ne na slibech.",
      intro: "Tyto projekty jsem navrhoval, realizoval a provozoval od prvního rozhodnutí po fungující produkt.",
      select: "Zobrazit projekt",
      visit: "Otevřít projekt",
      moreTitle: "Další realizovaná řešení",
      more: "eMamky a Novinex sdílejí jednu obsahovou platformu. Swapio řeší marketplace a správu nabídek. Prodat-byt.cz podporuje realitní službu od první návštěvy po poptávku.",
    },
    approach: {
      title: "Technické rozhodnutí musí fungovat i po nasazení.",
      intro: "Do práce zahrnuji nejen implementaci, ale také kontext procesu, provozní dopady a předání dalšího rozvoje.",
      steps: [
        { title: "Pochopit proces a omezení", body: "Nejdřív potřebuji vědět, kdo systém používá, co dnes nefunguje a která rozhodnutí mají skutečný dopad." },
        { title: "Vymezit smysluplnou první etapu", body: "Rozsah rozdělím tak, aby první dodávka přinesla použitelný výsledek a zároveň neuzavřela cestu dalšímu rozvoji." },
        { title: "Dodat a ověřovat v reálném provozu", body: "Vývoj, databáze, integrace, nasazení i diagnostika tvoří jeden celek. Průběžně kontroluji, zda řešení stále odpovídá cíli." },
        { title: "Převzít odpovědnost za pokračování", body: "Projekt může skončit předáním, nebo pokračovat údržbou, rozvojem či zapojením do interního týmu." },
      ],
    },
    teams: {
      title: "Samostatně i uvnitř větších týmů.",
      body: "Vedle vlastních a přímých dodávek mám zkušenost s komerčními aplikacemi, interními systémy a legacy codebase v týmech firem a software housů. Pracuji s existujícím repozitářem, release procesem, Linuxem, Dockerem a cloudovým provozem.",
      companies: ["ABB", "Astratex", "MagicWare", "LinkSoft"],
    },
    faqTitle: "Co je dobré vědět před prvním kontaktem.",
    contact: {
      title: "Popište systém, proces nebo problém, který potřebujete posunout.",
      body: "Hotové zadání není podmínkou. Stačí stručný kontext a očekávaný výsledek; navrhnu konkrétní další krok.",
      primary: "Poslat popis projektu",
      call: "Naplánovat krátký hovor",
      email: "Napsat e-mail",
    },
    footer: "Webové aplikace, automatizace, takeover a kontraktní spolupráce.",
  },
  en: {
    nav: { services: "Services", work: "Work", approach: "Approach", contact: "Contact", action: "Discuss a project", menu: "Open navigation", close: "Close navigation" },
    hero: {
      titleBefore: "I design, build",
      titleAfter: "and take over business software.",
      lead: "Web applications, internal systems, integrations and AI automation. From the first technical decision to deployment and long-term operation.",
      primary: "Discuss a project",
      secondary: "View selected work",
      note: "Independent end-to-end delivery or experienced capacity inside an existing team.",
    },
    proofLine: "One accountable partner across technical design, delivery and operations.",
    services: {
      title: "Four ways I can move a project forward.",
      intro: "I do not begin with a predefined package. I begin with the situation the business and its software are actually in.",
      items: [
        { title: "A new application or internal system", description: "From process and data model to interface, administration, deployment and further development.", result: "A usable system designed around how people actually work.", href: "/en/services/custom-web-application-development/" },
        { title: "Takeover and development of an existing app", description: "Orientation in an inherited codebase, stabilisation of risk areas and continued delivery without a rushed rewrite.", result: "Clear ownership and technical direction for a running product.", href: "/en/services/existing-app-takeover/" },
        { title: "Automation, integrations and AI", description: "Connecting tools, data and repetitive work so automation follows the real business process.", result: "Less manual transfer, fewer errors and faster workflows.", href: "/en/services/ai-automation-and-integrations/" },
        { title: "Senior capacity inside a team", description: "Ownership of a workstream, architecture, delivery or stabilisation of an important product area.", result: "Experienced technical responsibility without another agency layer.", href: "/en/contract-development-support/" },
      ],
    },
    work: {
      title: "I show software through delivered work, not promises.",
      intro: "I designed, implemented and operated these projects from the first decision to a working product.",
      select: "Show project",
      visit: "Open project",
      moreTitle: "More delivered systems",
      more: "eMamky and Novinex share one publishing platform. Swapio covers marketplace and listing management. Prodat-byt.cz supports a real-estate service from the first visit to an enquiry.",
    },
    approach: {
      title: "A technical decision still has to work after deployment.",
      intro: "The work includes implementation as well as process context, operational impact and a practical path for future development.",
      steps: [
        { title: "Understand the process and constraints", body: "First I need to understand who uses the system, what fails today and which decisions have real operational impact." },
        { title: "Define a meaningful first phase", body: "I shape the scope so the first delivery creates a usable result without closing the path to future development." },
        { title: "Deliver and verify in real operation", body: "Development, data, integrations, deployment and diagnostics form one system. I keep checking that the solution still serves the objective." },
        { title: "Take responsibility for what follows", body: "The project can end with handover or continue through maintenance, development or work inside the internal team." },
      ],
    },
    teams: {
      title: "Independent delivery and work inside larger teams.",
      body: "Alongside direct and owned projects, I have experience with commercial applications, internal systems and legacy codebases inside company and software-house teams. I work with the existing repository, release process, Linux, Docker and cloud operations.",
      companies: ["ABB", "Astratex", "MagicWare", "LinkSoft"],
    },
    faqTitle: "What is useful to know before reaching out.",
    contact: {
      title: "Describe the system, process or problem you need to move forward.",
      body: "A finished specification is not required. A short context and the expected outcome are enough for me to suggest a concrete next step.",
      primary: "Send project context",
      call: "Book a short call",
      email: "Send an email",
    },
    footer: "Web applications, automation, takeover and contract development.",
  },
} as const;

const projects: Record<Locale, Project[]> = {
  cs: [
    { name: "DoporučenoAI", description: "Vlastní analytická aplikace pro vyhodnocení viditelnosti webu v AI nástrojích.", role: "Produkt, aplikace, administrační část a provoz", href: "https://doporucenoai.cz/", image: "/work/doporuceno-ai.png", tone: "blue" },
    { name: "RealioCRM", description: "Reálné CRM pro práci s kontakty, nemovitostmi, úkoly a obchodními případy.", role: "Návrh systému, vývoj, demo prostředí a provoz", href: "https://crm.halatao.cz/", image: "/work/realio-crm.png", tone: "mint" },
    { name: "Kasan & Pelcová", description: "Realitní web propojující nabídku nemovitostí, obsah a každodenní správu.", role: "Návrh, realizace, administrace a dlouhodobý provoz", href: "https://www.kasanpelcova.cz/", image: "/work/kasan-pelcova.png", tone: "yellow" },
    { name: "Viditelný makléř", description: "Webové řešení pro prezentaci realitních služeb a navazující digitální podporu makléřů.", role: "Produktový směr, design, vývoj a provoz", href: "https://viditelnymakler.cz/", image: "/work/viditelny-makler.png", tone: "coral" },
  ],
  en: [
    { name: "DoporučenoAI", description: "An owned analytics application for evaluating website visibility in AI tools.", role: "Product, application, administration and operations", href: "https://doporucenoai.cz/", image: "/work/doporuceno-ai.png", tone: "blue" },
    { name: "RealioCRM", description: "A real CRM for contacts, properties, tasks and commercial cases.", role: "System design, development, demo environment and operations", href: "https://crm.halatao.cz/", image: "/work/realio-crm.png", tone: "mint" },
    { name: "Kasan & Pelcová", description: "A real-estate website connecting property listings, content and daily management.", role: "Design, delivery, administration and long-term operation", href: "https://www.kasanpelcova.cz/", image: "/work/kasan-pelcova.png", tone: "yellow" },
    { name: "Viditelný makléř", description: "A web product presenting real-estate services and the digital support offered to agents.", role: "Product direction, design, development and operations", href: "https://viditelnymakler.cz/", image: "/work/viditelny-makler.png", tone: "coral" },
  ],
};

function DirectionContract() {
  return (
    <template
      data-home-direction
      dangerouslySetInnerHTML={{
        __html: "<!-- THESIS: One accountable path from business situation to working software; refuse the generic freelancer card catalogue. OWN-WORLD: cool paper, graphite, coral, cobalt, mint, route lines, evidence windows and squared controls. STORY: identify the project route, inspect delivered systems, understand ownership, then send context. FIRST VIEWPORT: centered two-line offer over real project fragments, actions below, next route band visible. FORM: technical wayfinding, fifth grounded direction, split-spectrum corridors staging, seed 02263290. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->",
      }}
    />
  );
}

export function HomeExperience({ page }: { page: ContentPage }) {
  const locale = page.locale;
  const text = copy[locale];
  const localeProjects = projects[locale];
  const [selectedProject, setSelectedProject] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const activeProject = localeProjects[selectedProject];
  const inquiryHref = normalizeInternalHref(page.cta.href);
  const alternateHref = locale === "cs" ? "/en/" : "/cs/";

  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(min-width: 960px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(`.${styles.heroShot}`, { clipPath: "inset(9% 9% 9% 9%)", scale: 0.92 }, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.1, ease: "expo.out", stagger: 0.08 });

      gsap.utils.toArray<HTMLElement>(`.${styles.projectImage}`).forEach((image) => {
        gsap.fromTo(image, { scale: 0.9 }, { scale: 1, ease: "none", scrollTrigger: { trigger: image, start: "top 88%", end: "bottom 24%", scrub: true } });
      });

      ScrollTrigger.create({ trigger: `.${styles.approachGrid}`, start: "top 112px", end: "bottom bottom", pin: `.${styles.approachIntro}`, pinSpacing: false });
    });

    return () => media.revert();
  }, { scope: root });

  const navItems = [
    { label: text.nav.services, href: "#services" },
    { label: text.nav.work, href: "#references" },
    { label: text.nav.approach, href: "#approach" },
    { label: text.nav.contact, href: "#contact" },
  ];

  return (
    <div className={styles.page} ref={root}>
      <DirectionContract />
      <header className={styles.header}>
        <div className={styles.navShell}>
          <Link className={styles.brand} href={`/${locale}/`} aria-label={`${siteConfig.displayName} home`}>
            <span>OH</span><strong>{siteConfig.displayName}</strong>
          </Link>
          <button className={styles.menuButton} type="button" aria-expanded={menuOpen} aria-controls="home-navigation" aria-label={menuOpen ? text.nav.close : text.nav.menu} onClick={() => setMenuOpen((current) => !current)}>
            <span /><span />
          </button>
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} id="home-navigation" aria-label="Primary">
            {navItems.map((item) => <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            <Link className={styles.localeLink} href={alternateHref} hrefLang={locale === "cs" ? "en" : "cs"}>{locale === "cs" ? "EN" : "CS"}</Link>
            <Link className={styles.navAction} data-analytics-event="seo_cta_click" data-analytics-location="header" href={inquiryHref}>{text.nav.action}</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero} id="home">
          <div className={styles.heroBackdrop} aria-hidden="true">
            <div className={`${styles.heroShot} ${styles.heroShotLeft}`}><Image src="/work/realio-crm.png" alt="" fill priority sizes="32vw" /></div>
            <div className={`${styles.heroShot} ${styles.heroShotRight}`}><Image src="/work/viditelny-makler.png" alt="" fill priority sizes="32vw" /></div>
            <div className={`${styles.heroShot} ${styles.heroShotBottom}`}><Image src="/work/doporuceno-ai.png" alt="" fill priority sizes="36vw" /></div>
          </div>
          <div className={styles.heroContent}>
            <h1>{text.hero.titleBefore}<span className={styles.inlineShot} aria-hidden="true"><Image src="/work/realio-crm.png" alt="" fill priority sizes="160px" /></span>{text.hero.titleAfter}</h1>
            <p className={styles.heroLead}>{text.hero.lead}</p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} data-analytics-event="seo_cta_click" data-analytics-location="hero" href={inquiryHref}>{text.hero.primary}<span aria-hidden="true">↗</span></Link>
              <a className={styles.secondaryAction} href="#references">{text.hero.secondary}<span aria-hidden="true">↓</span></a>
            </div>
            <p className={styles.heroNote}>{text.hero.note}</p>
          </div>
        </section>

        <section className={styles.proofLine} aria-label={text.proofLine}>
          <p>{text.proofLine}</p>
          <div aria-hidden="true"><span>DISCOVERY</span><i /><span>DELIVERY</span><i /><span>OPERATIONS</span></div>
        </section>

        <section className={styles.services} id="services">
          <div className={styles.sectionIntro}><h2>{text.services.title}</h2><p>{text.services.intro}</p></div>
          <div className={styles.routeGrid}>
            {text.services.items.map((item, index) => (
              <Link className={styles.route} href={item.href} key={item.href}>
                <span className={styles.routeMarker} aria-hidden="true">{String.fromCharCode(65 + index)}</span>
                <h3>{item.title}</h3>
                <div className={styles.routeDetail}><p>{item.description}</p><strong>{item.result}</strong></div>
                <span className={styles.routeArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.work} id="references">
          <div className={styles.workHeading}><h2>{text.work.title}</h2><p>{text.work.intro}</p></div>
          <div className={styles.projectBento}>
            <article className={`${styles.projectFeature} ${styles[activeProject.tone]}`} id="selected-project" aria-live="polite">
              <div className={styles.projectImage}><Image src={activeProject.image} alt={`${activeProject.name} project preview`} fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
              <div className={styles.projectFeatureBody}>
                <div><h3>{activeProject.name}</h3><p>{activeProject.description}</p></div>
                <div className={styles.projectMeta}><span>{activeProject.role}</span><a href={activeProject.href} target="_blank" rel="noreferrer">{text.work.visit}<span aria-hidden="true">↗</span></a></div>
              </div>
            </article>
            {localeProjects.map((project, index) => (
              <button className={`${styles.projectChoice} ${styles[project.tone]} ${selectedProject === index ? styles.projectChoiceActive : ""}`} type="button" key={project.name} aria-controls="selected-project" aria-pressed={selectedProject === index} aria-label={`${text.work.select}: ${project.name}`} onClick={() => setSelectedProject(index)}>
                <Image src={project.image} alt="" fill sizes="(max-width: 900px) 50vw, 22vw" /><span>{project.name}</span>
              </button>
            ))}
          </div>
          <div className={styles.moreWork}>
            <h3>{text.work.moreTitle}</h3><p>{text.work.more}</p>
            <div><a href="https://emamky.cz/" target="_blank" rel="noreferrer">eMamky</a><a href="https://novinex.cz/" target="_blank" rel="noreferrer">Novinex</a><a href="https://swapio.cz/" target="_blank" rel="noreferrer">Swapio</a><a href="https://prodat-byt.cz/" target="_blank" rel="noreferrer">Prodat-byt.cz</a></div>
          </div>
        </section>

        <section className={styles.approach} id="approach">
          <div className={styles.approachGrid}>
            <div className={styles.approachIntro}><h2>{text.approach.title}</h2><p>{text.approach.intro}</p></div>
            <ol className={styles.approachSteps}>
              {text.approach.steps.map((step) => <li key={step.title}><span aria-hidden="true" /><div><h3>{step.title}</h3><p>{step.body}</p></div></li>)}
            </ol>
          </div>
        </section>

        <section className={styles.teams} id="about">
          <div><h2>{text.teams.title}</h2><p>{text.teams.body}</p></div>
          <ul aria-label={locale === "cs" ? "Zkušenost z týmů" : "Team experience"}>{text.teams.companies.map((company) => <li key={company}>{company}</li>)}</ul>
        </section>

        <section className={styles.faq}>
          <h2>{text.faqTitle}</h2>
          <div>{page.faq.slice(0, 2).map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section className={styles.contact} id="contact">
          <div className={styles.contactPanel}>
            <h2>{text.contact.title}</h2><p>{text.contact.body}</p>
            <div className={styles.contactActions}>
              <Link className={styles.contactPrimary} data-analytics-event="seo_cta_click" data-analytics-location="contact" href={inquiryHref}>{text.contact.primary}<span aria-hidden="true">↗</span></Link>
              <a href={siteConfig.calendly} target="_blank" rel="noreferrer">{text.contact.call}</a><a href={`mailto:${siteConfig.email}`}>{text.contact.email}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div><Link href={`/${locale}/`}>{siteConfig.displayName}</Link><p>{text.footer}</p></div>
        <div className={styles.footerContact}><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a></div>
        <div className={styles.footerLinks}><a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a><a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub</a><span>© 2026</span></div>
      </footer>
    </div>
  );
}
