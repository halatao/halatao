// Generated content: commercial service pages. Safe to edit manually.

import { buildInquiryHref, buildSecondaryCta, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, LinkRecord, Locale, PageSection } from "@/content/types";

type ServiceSeed = {
  translationKey: string;
  locale: Locale;
  slug: string;
  title: string;
  breadcrumbLabel: string;
  description: string;
  primaryQuery: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  situationsLead: string;
  situations: string[];
  deliveryLead: string;
  delivery: string[];
  processLead: string;
  resultsLead: string;
  results: string[];
  faq: FAQItem[];
  related: string[];
  priorityLinks?: LinkRecord[];
  fitFor: string[];
  fitNot: string[];
  sections?: PageSection[];
  eyebrow?: string;
  primaryCtaLabel?: string;
  secondaryCta?: LinkRecord;
  ctaLabel?: string;
  ctaNote?: string;
  translationAvailability?: ContentPage["translationAvailability"];
};

const copy = {
  cs: {
    eyebrow: "Služba",
    primary: "Popsat situaci",
    sectionSituations: "Kdy tato služba dává smysl",
    sectionDelivery: "Co typicky řeším a dodávám",
    sectionProcess: "Jak spolupráce probíhá",
    sectionResults: "Jaký výsledek má spolupráce přinést",
  },
  en: {
    eyebrow: "Service",
    primary: "Describe situation",
    sectionSituations: "Where this service is the right fit",
    sectionDelivery: "What I typically handle and deliver",
    sectionProcess: "How the work is run",
    sectionResults: "What the engagement should achieve",
  },
} as const;

function makeSections(locale: Locale, seed: ServiceSeed): PageSection[] {
  if (seed.sections) return seed.sections;

  const labels = copy[locale];
  return [
    {
      title: labels.sectionSituations,
      body: [seed.situationsLead],
      bullets: seed.situations,
    },
    {
      title: labels.sectionDelivery,
      body: [seed.deliveryLead],
      bullets: seed.delivery,
    },
    {
      title: labels.sectionProcess,
      body: [seed.processLead],
    },
    {
      title: labels.sectionResults,
      body: [seed.resultsLead],
      bullets: seed.results,
    },
  ];
}

function service(seed: ServiceSeed): ContentPage {
  const labels = copy[seed.locale];
  const base = seed.locale === "cs" ? "/cs/sluzby" : "/en/services";
  return definePage({
    translationKey: seed.translationKey,
    stage: 1,
    locale: seed.locale,
    pageType: "service",
    slug: seed.slug,
    segments: [seed.locale === "cs" ? "sluzby" : "services", seed.slug],
    title: seed.title,
    breadcrumbLabel: seed.breadcrumbLabel,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "commercial",
    translationAvailability: seed.translationAvailability,
    hero: {
      eyebrow: seed.eyebrow ?? labels.eyebrow,
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: seed.primaryCtaLabel ?? labels.primary,
        href: buildInquiryHref(seed.locale),
      },
      secondaryCta: seed.secondaryCta ?? buildSecondaryCta(seed.locale),
    },
    intro: seed.intro,
    sections: makeSections(seed.locale, seed),
    faq: seed.faq,
    related: seed.related,
    priorityLinks: seed.priorityLinks,
    fit: {
      for: seed.fitFor,
      notFor: seed.fitNot,
    },
    cta:
      seed.locale === "cs"
        ? {
            label: seed.ctaLabel ?? "Popsat situaci",
            href: "/cs/kontakt",
            note: seed.ctaNote ?? `Napište stručně situaci, cílový výsledek a omezení projektu. Ozvu se s návrhem dalšího kroku.`,
          }
        : {
            label: "Describe situation",
            href: "/en/discuss-your-project",
            note: "Share the business context, expected outcome, and current constraints. I will tell you whether the project is a fit.",
          },
    seo: {
      title: seed.title,
      description: seed.description,
      image:
        seed.locale === "cs" && seed.translationKey === "service-automations-and-integrations"
          ? "https://i.ibb.co/Vp5SXxhw/New-Project.png"
          : undefined,
    },
    schema: {
      includeService: true,
      includeFaq: true,
    },
    indexable: true,
  });
}

const servicePageDefinitions: ContentPage[] = [
  service({
    translationKey: "service-company-websites",
    translationAvailability: "optional",
    locale: "cs",
    slug: "tvorba-webovych-stranek",
    title: "Tvorba webových stránek pro firmy | Ondřej Halata",
    breadcrumbLabel: "Tvorba firemních webů a katalogů",
    description: "Navrhnu a vytvořím rychlý firemní web, katalog nebo poptávkovou stránku se správou obsahu, technickým SEO a provozem bez závislosti na WordPressu.",
    primaryQuery: "tvorba webových stránek",
    eyebrow: "Firemní weby a katalogy",
    heroTitle: "Firemní web, který vysvětlí nabídku a přivede zákazníka k dalšímu kroku.",
    heroSubtitle: "Navrhnu strukturu, vzhled a správu obsahu a web dotáhnu až po napojení domény a spuštění. Bez WordPressu, pluginového balastu a závislosti na uzavřené platformě.",
    primaryCtaLabel: "Popsat nový web",
    secondaryCta: { label: "Prohlédnout webové reference", href: "/cs/reference/" },
    intro: [
      "Nejdřív si ujasníme, co má návštěvník na webu rychle pochopit a jaký další krok má udělat. Podle nabídky vaší firmy navrhnu strukturu stránek, pořadí informací a cestu ke kontaktu nebo poptávce.",
      "Výsledkem je web navržený pro konkrétní firmu a její zákazníky. Podle potřeby může obsahovat jednoduchou správu obsahu, katalog produktů či služeb, formuláře, kalkulaci nebo napojení na další nástroje.",
    ],
    situationsLead: "Podle množství obsahu a požadovaných funkcí může jít o soustředěnou jednostránkovou prezentaci i rozsáhlejší firemní web.",
    situations: [],
    deliveryLead: "Rozsah před zahájením potvrdíme podle skutečných stránek, spravovaného obsahu a funkcí.",
    delivery: [],
    processLead: "Nejdřív potvrdíme cíl a strukturu, potom připravím návrh vzhledu a web realizuji včetně spuštění.",
    resultsLead: "Výsledkem je rychlý, přenositelný web s jasnou nabídkou a cestou k poptávce.",
    results: [],
    sections: [
      {
        title: "Od jednoduché prezentace po katalog s vlastní logikou",
        body: ["Rozsah webu volím podle množství obsahu, způsobu rozhodování zákazníka a funkcí, které mají podpořit poptávku."],
        bullets: [
          "Jednostránkový web pro konkrétní službu, menší firmu nebo kampaň.",
          "Vícestránkový firemní web se samostatnými stránkami služeb, produktů, referencí a kontaktu.",
          "Katalog produktů nebo služeb s kategoriemi, parametry, variantami a navazující poptávkou.",
          "Formulář, kalkulace nebo napojení na e-mail, CRM či jiný firemní systém.",
        ],
      },
      {
        title: "Co může být součástí dodávky",
        body: ["Konkrétní rozsah skládám podle toho, co web skutečně potřebuje pro spuštění a další správu."],
        bullets: [
          "návrh informační struktury a hlavních uživatelských cest",
          "vizuální návrh odpovídající značce a typu zákazníka",
          "responzivní realizace pro mobil, tablet i desktop",
          "správa dohodnutých částí obsahu",
          "kontaktní a poptávkové formuláře",
          "technický základ SEO, metadata a sitemap",
          "napojení domény, analytiky a nasazení",
        ],
      },
      {
        title: "Web pod vaší kontrolou",
        body: [
          "Web stavím jako samostatnou aplikaci podle dohodnutého rozsahu. Není závislý na sadě pluginů, které vyžadují průběžné aktualizace a mohou se navzájem ovlivňovat.",
          "Zdrojový kód i účet pro provoz mohou být pod vaší kontrolou. Pokud budete chtít změnit dodavatele nebo hosting, web je možné předat a přesunout.",
          "U menších webů mohou být samotné infrastrukturní náklady nulové nebo velmi nízké. Konkrétní provoz zvolíme podle návštěvnosti a použitých funkcí.",
        ],
      },
      {
        title: "Orientační ceny",
        body: ["Uvedené ceny jsou výchozí pro domluvený základní rozsah s připravenými podklady a standardními funkcemi. Před zahájením vždy potvrdím konkrétní stránky, spravované části a pevnou cenu."],
      },
      {
        title: "Jak realizace probíhá",
        body: ["Web vzniká v navazujících krocích s jedním souhrnným kolem připomínek k návrhu."],
        bullets: [
          "Potvrdíme obsah, cíl webu a příklady odpovídající očekávanému směru.",
          "Připravím strukturu a návrh vzhledu k jednomu souhrnnému kolu připomínek.",
          "Vytvořím web, správu obsahu a domluvené funkce.",
          "Napojím doménu, ověřím mobilní zobrazení, formuláře a SEO základ a web spustím.",
        ],
        listType: "ordered",
      },
      {
        title: "Relevantní realizace",
        body: ["Podobný rozsah je vidět na firemních a realitních webech se správou obsahu, nabídek a příchozích poptávek."],
        bullets: ["Kasan & Pelcová", "Prodat-byt.cz", "Viditelný Makléř"],
      },
    ],
    faq: [
      { question: "Budeme si moci upravovat obsah?", answer: "Ano. Předem si potvrdíme, které části potřebujete spravovat. Typicky jde o texty, služby, produkty, reference, kontakty nebo články. Editor přizpůsobím konkrétnímu obsahu, aby nebyl zbytečně složitý." },
      { question: "Dodáte i texty a fotografie?", answer: "Potřebuji od vás věcné informace o firmě, službách a zákaznících. Pomohu je uspořádat a upravit pro web. Finální odborné formulace a práva k fotografiím potvrzuje klient; pokud vizuály chybí, lze domluvit jejich přípravu." },
      { question: "Proč web nestavíte na WordPressu?", answer: "Zaměřuji se na weby a aplikace na míru mimo WordPress a jeho pluginový ekosystém. Umožňuje mi to držet pod kontrolou výkon, datovou strukturu a konkrétní funkce bez závislosti na šabloně." },
      { question: "Bude web připravený pro vyhledávače?", answer: "Ano. Součástí je technický základ SEO, správné nadpisy a metadata, sitemap, indexovatelnost a výkon. Samotné pozice ale závisejí také na kvalitě obsahu, konkurenci a dlouhodobé práci s webem." },
      { question: "Kde web poběží?", answer: "Na účtu, nad kterým můžete mít plnou kontrolu, nebo v dohodnutém provozu. Nejste vázaní na moji vlastní uzavřenou platformu a web lze později přesunout." },
      { question: "Jak dlouho realizace trvá?", answer: "Jednodušší web lze obvykle dodat během jednoho až tří týdnů podle rozsahu a dostupnosti podkladů. Katalog, kalkulace nebo nestandardní napojení mohou termín prodloužit." },
    ],
    related: ["references", "service-custom-web-app-development", "hub-services", "inquiry"],
    priorityLinks: [
      { label: "Prohlédnout reference", href: "/cs/reference/" },
      { label: "Popsat nový web", href: "/cs/kontakt/" },
    ],
    fitFor: ["firmy, které potřebují novou srozumitelnou prezentaci", "služby a sortiment s navazující poptávkou", "projekty, které chtějí vlastnit zdrojový kód a provoz"],
    fitNot: ["WordPress a jeho pluginový ekosystém", "neomezené funkce bez předem potvrzeného rozsahu", "e-shop s rozsáhlou transakční logikou v základní ceně"],
    ctaLabel: "Popsat nový web",
    ctaNote: "Napište, co firma nabízí, jaký obsah potřebujete a zda má web obsahovat katalog nebo další funkce. Ozvu se s návrhem rozsahu.",
  }),
  service({
    translationKey: "service-company-websites",
    translationAvailability: "optional",
    locale: "en",
    slug: "company-website-development",
    title: "Company website development | Ondřej Halata",
    breadcrumbLabel: "Company websites and product catalogues",
    description: "I design and build fast company websites, catalogues, and enquiry pages with content management, technical SEO, and no dependency on WordPress or a closed platform.",
    primaryQuery: "company website development",
    eyebrow: "Company websites and catalogues",
    heroTitle: "A company website that explains the offer and guides customers to the next step.",
    heroSubtitle: "I handle the structure, visual direction, content management, domain connection, and launch. The result is a portable website built around the company rather than a plugin stack.",
    primaryCtaLabel: "Describe the website",
    secondaryCta: { label: "View website references", href: "/en/references/" },
    intro: [
      "We begin with what a visitor needs to understand and which action should follow. I then shape the page structure, information priorities, and route to an enquiry or direct contact.",
      "The result is designed for a specific company and audience. Depending on the scope, it can include focused content management, a product or service catalogue, forms, calculations, or connections to other business tools.",
    ],
    situationsLead: "The scope can range from a focused landing page to a structured multi-page company website or catalogue.",
    situations: [],
    deliveryLead: "Before work begins, we confirm the actual pages, editable content, integrations, and launch requirements.",
    delivery: [],
    processLead: "We confirm the goal and structure first, then move through visual design, implementation, and launch.",
    resultsLead: "The outcome is a fast, transferable website with a clear offer and route to an enquiry.",
    results: [],
    sections: [
      {
        title: "From a focused presentation to a catalogue with custom logic",
        body: ["The right format depends on the amount of content, the customer's decision process, and the functions needed to support an enquiry."],
        bullets: [
          "A focused one-page website for a specific service, smaller company, or campaign.",
          "A multi-page company website with separate service, product, reference, and contact pages.",
          "A product or service catalogue with categories, parameters, variants, and an enquiry flow.",
          "Forms, calculations, or connections to email, CRM, and other company systems.",
        ],
      },
      {
        title: "What can be included",
        body: ["The delivery is shaped around what the website genuinely needs for launch and ongoing content management."],
        bullets: [
          "information architecture and the main user journeys",
          "visual design aligned with the brand and audience",
          "responsive implementation for mobile, tablet, and desktop",
          "management of the agreed content areas",
          "contact and enquiry forms",
          "technical SEO foundations, metadata, and sitemap",
          "domain connection, analytics, deployment, and launch",
        ],
      },
      {
        title: "A website under your control",
        body: [
          "I build the website as a standalone application for the agreed scope. It does not depend on a collection of plugins that require ongoing updates and can interfere with one another.",
          "The source code and infrastructure account can remain under your control. The website can be handed over or moved if you later change supplier or hosting.",
          "For smaller websites, infrastructure costs can be zero or very low. The final setup depends on traffic and the functions being used.",
        ],
      },
      {
        title: "Indicative pricing",
        body: ["The final price is confirmed against the agreed pages, editable content, and functions before development begins."],
      },
      {
        title: "How delivery works",
        body: ["The website is delivered through clear stages with one consolidated feedback round for the visual proposal."],
        bullets: [
          "Confirm the content, business goal, and examples that reflect the expected direction.",
          "Prepare the information structure and visual proposal for consolidated feedback.",
          "Build the website, content management, and agreed functions.",
          "Connect the domain, verify responsive behaviour, forms, and technical SEO, then launch.",
        ],
        listType: "ordered",
      },
      {
        title: "Relevant projects",
        body: ["Comparable work includes company and real-estate websites with managed content, listings, catalogues, and enquiry flows."],
        bullets: ["Kasan & Pelcová", "Prodat-byt.cz", "Viditelný Makléř"],
      },
    ],
    faq: [
      { question: "Will we be able to edit the content?", answer: "Yes. We agree which areas need to be editable, such as services, products, references, contact details, or articles. The editor is shaped around the actual content instead of exposing unnecessary technical settings." },
      { question: "Do you also provide copy and photography?", answer: "I need the factual information about the company, services, and customers. I can structure and edit it for the website. Final specialist wording and image rights remain subject to client approval, and missing visuals can be handled separately." },
      { question: "Why do you not build on WordPress?", answer: "I focus on custom websites and applications outside the WordPress plugin ecosystem. This keeps performance, data structure, and custom functions under control without tying the result to a template or plugin stack." },
      { question: "Will the website be ready for search engines?", answer: "Yes. The delivery includes technical SEO foundations, headings and metadata, sitemap, indexability, and performance checks. Rankings also depend on content quality, competition, and ongoing work after launch." },
      { question: "Where will the website run?", answer: "It can run in an account under your control or in an agreed managed setup. You are not locked into a proprietary platform, and the website can be moved later." },
    ],
    related: ["references", "service-custom-web-app-development", "hub-services", "inquiry"],
    priorityLinks: [
      { label: "View references", href: "/en/references/" },
      { label: "Describe the website", href: "/en/discuss-your-project/" },
    ],
    fitFor: ["companies that need a clearer online presentation", "services and catalogues with an enquiry flow", "projects that want control over source code and hosting"],
    fitNot: ["WordPress and plugin-based delivery", "unlimited functions without an agreed scope", "large transactional ecommerce within a basic website scope"],
    ctaLabel: "Describe the website",
    ctaNote: "Share what the company offers, the content you need, and whether the website should include a catalogue or custom functions. I will suggest a realistic scope.",
  }),
  service({
    translationKey: "service-custom-web-app-development",
    locale: "cs",
    slug: "vyvoj-webovych-aplikaci-na-miru",
    title: "Vývoj webových aplikací na míru pro firmy | Ondřej Halata",
    breadcrumbLabel: "Webové aplikace a interní systémy",
    description: "Navrhnu a vyvinu webovou aplikaci od datového modelu a uživatelských rolí přes frontend a backend až po integrace, nasazení a další rozvoj.",
    primaryQuery: "vývoj webových aplikací na míru",
    eyebrow: "Webové aplikace a interní systémy",
    heroTitle: "Webová aplikace na míru vašemu způsobu práce.",
    heroSubtitle: "Vytvořím aplikaci pro zákazníky, partnery nebo interní tým a propojím její obrazovky, data i provoz do jednoho funkčního celku.",
    primaryCtaLabel: "Popsat aplikaci",
    secondaryCta: { label: "Prohlédnout aplikační reference", href: "/cs/reference/" },
    intro: [
      "Vlastní aplikace dává smysl ve chvíli, kdy se důležitý proces nevejde do hotového nástroje a lidé jeho omezení stále obcházejí ručně.",
      "Začneme částí, která má pro uživatele konkrétní přínos. Už od návrhu přitom počítám s rolemi, daty, oprávněními a tím, jak bude řešení fungovat po spuštění.",
    ],
    sections: [
      {
        title: "Kdy vlastní aplikace dává smysl",
        body: ["Nejčastěji ve chvíli, kdy software přímo ovlivňuje každodenní práci, obsluhu zákazníků nebo vlastní digitální produkt."],
        bullets: [
          "Firma má vlastní postup, role nebo schvalování, které obecný systém nepokrývá.",
          "Uživatelé potřebují pracovat s navazujícími daty na jednom místě.",
          "Hotový nástroj vyžaduje opakované ruční obcházení důležité části procesu.",
          "Má vzniknout klientský nebo partnerský portál.",
          "Firma buduje marketplace, analytický nástroj nebo jiný digitální produkt.",
          "Existující aplikace potřebuje nový modul nebo další rozvoj.",
        ],
      },
      {
        title: "Co tvoří funkční aplikaci",
        body: ["Obrazovky jsou jen jedna část. Dodávku skládám tak, aby spolu od začátku fungovalo používání, pravidla, data i provoz."],
        bullets: [
          "Návrh hlavních uživatelů, scénářů a podmínek, podle kterých poznáme hotový výsledek.",
          "Přehledné formuláře, tabulky, dashboardy a stavy pro běžnou práci.",
          "Datový model, API, přihlášení, role, oprávnění a kontrola vstupů.",
          "Napojení externích služeb a převod současných dat.",
          "Nasazení, logování, zálohování a způsob vydávání dalších změn.",
        ],
      },
      {
        title: "Jakou podobu může aplikace mít",
        body: ["Konkrétní funkce vycházejí z procesu, nejčastěji ale řeším některý z těchto typů systému."],
        bullets: [
          "Interní systém nebo CRM: Evidence, zakázky, schvalování a každodenní práce týmu.",
          "Klientský nebo partnerský portál: Přihlášení, dokumenty, stav služby a komunikace na jednom místě.",
          "Marketplace nebo katalog: Účty, nabídky, vyhledávání, moderace a správa obsahu.",
          "Analytický nebo AI nástroj: Zpracování dat, vyhodnocení a srozumitelný výstup pro uživatele.",
        ],
      },
      {
        title: "AI používám jako nástroj, ne jako náhradu kontroly",
        body: [
          "AI mi pomáhá při analýze, implementaci a rutinních částech vývoje. Každou změnu ale procházím v kontextu architektury, dat, bezpečnosti a očekávaného chování.",
          "Pokud je AI součástí produktu, napojuji ji na konkrétní data a pravidla. U důležitých kroků musí být jasné, z čeho výstup vychází a kdy zůstává rozhodnutí na člověku.",
        ],
      },
      {
        title: "Jak vývoj probíhá",
        body: ["První rozsah potvrdíme podle problému, uživatelů a cílového výsledku, ne podle seznamu izolovaných funkcí."],
        bullets: [
          "Ujasníme si problém, uživatele a současný způsob práce.",
          "Navrhnu role, data, hlavní scénáře a použitelný první rozsah.",
          "Aplikaci vytvořím v navazujících celcích a průběžně ověřím kritické scénáře.",
          "Řešení nasadím, předám a další rozvoj budeme řídit podle reálného používání.",
        ],
        listType: "ordered",
      },
      {
        title: "Orientační cenový rámec",
        body: [
          "Cena vychází z počtu uživatelů, dat, obrazovek a pravidel, která musí aplikace spolehlivě obsloužit.",
          "Varianty níže ukazují obvyklé výchozí rozsahy. Před zahájením vždy potvrdím hranice etapy i její pevnou cenu.",
        ],
      },
      {
        title: "Relevantní realizace",
        body: ["Další typy aplikací a datové logiky ukazují vlastní analytický produkt a marketplace."],
        bullets: ["DoporučenoAI", "Swapio"],
      },
    ],
    situationsLead: "Silný fit bývá tam, kde aplikace řeší provozně důležitý proces a firma potřebuje systém podle vlastní reality, ne další obcházení omezení hotového nástroje.",
    situations: ["klientský portál nebo extranet", "interní administrace a operativa", "workflow a schvalování", "dashboardy a reporting nad vlastními daty"],
    deliveryLead: "Součástí typicky není jen frontend. Řeším i backendovou logiku, datový model, integrace, release proces a technická rozhodnutí pro další etapy.",
    delivery: ["technický návrh a rozpad MVP", "full-stack vývoj a průběžné nasazování", "napojení API a externích služeb", "stabilizace výkonu, chyb a provozu"],
    processLead: "Na začátku potřebujeme pochopit problém, současný proces a priority první verze. Pak preferuji menší iterace a rozhodování nad konkrétním softwarem, ne nad nekonečným backlogem.",
    resultsLead: "Výsledkem má být použitelný systém, který pomáhá byznysu, drží technicky pohromadě a dá se bezpečně rozšiřovat.",
    results: ["méně provozních obcházek a ruční práce", "větší jistota dalšího rozvoje", "lepší práce s rolemi a daty", "jasnější architektura než u ad hoc řešení"],
    faq: [
      { question: "Kolik detailů musíme mít před prvním kontaktem?", answer: "Stačí problém, uživatelé a cílový výsledek. Datový model, technickou architekturu a rozsah první etapy lze připravit společně." },
      { question: "Dostaneme zdrojový kód?", answer: "Ano, pokud smlouva neurčí jinak. Součástí předání mohou být repozitář, konfigurace, dokumentace a přístupy potřebné k provozu." },
      { question: "Lze začít menší první etapou?", answer: "Ano. U větších projektů je to běžný postup. První etapa ale musí tvořit použitelný celek a mít jasné akceptační podmínky." },
      { question: "Můžete pracovat s naším existujícím týmem?", answer: "Ano. Mohu dodat samostatný modul, převzít konkrétní část projektu nebo navázat na existující aplikaci a proces vývoje." },
      { question: "Co se děje po spuštění?", answer: "Podle dohody zajistím záruční opravy, provozní podporu a další rozvoj, nebo řešení předám vašemu týmu. Rozsah podpory nebude skrytým neurčitým závazkem." },
      { question: "Řešíte také bezpečnost a provoz?", answer: "Ano v rozsahu odpovídajícím projektu. Patří sem autentizace, oprávnění, validace vstupu, práce s citlivými přístupy, logování, zálohování a kontrola kritických chybových scénářů." },
    ],
    related: ["service-internal-tools-development", "service-sales-and-job-tracking-system", "service-existing-app-takeover", "service-automations-and-integrations", "references", "inquiry"],
    priorityLinks: [
      { label: "Prohlédnout aplikační reference", href: "/cs/reference/" },
      { label: "Popsat aplikaci", href: "/cs/kontakt/" },
    ],
    fitFor: ["firmy s vlastním workflow a více rolemi", "projekty, kde SaaS nástroj vytváří zbytečné kompromisy", "týmy, které chtějí aplikaci dlouhodobě rozvíjet"],
    fitNot: ["jednoduché prezentační weby", "jednorázové microsites bez logiky", "projekty řízené jen nejnižší cenou bez ownershipu"],
    ctaLabel: "Popsat aplikaci",
    ctaNote: "Napište, kdo bude aplikaci používat, jaký proces má řešit a co dnes nefunguje. Navrhnu realistický rozsah první etapy.",
  }),
  service({
    translationKey: "service-existing-app-takeover",
    locale: "cs",
    slug: "prevzeti-a-rozvoj-existujici-aplikace",
    title: "Převzetí existující aplikace bez zbytečného rizika | Bc. Ondřej Halata",
    breadcrumbLabel: "Převzetí a stabilizace existující aplikace",
    description: "Pomohu bezpečně převzít existující nebo rozpracovanou aplikaci, zmapovat technická rizika, stabilizovat kritická místa a navrhnout další rozvoj bez unáhleného rewritu.",
    primaryQuery: "převzetí existující aplikace",
    heroTitle: "Převzetí aplikace bez chaosu a unáhleného rewritu",
    heroSubtitle: "Pro situace po změně dodavatele, odchodu vývojáře nebo u systému, který běží, ale další změny jsou riskantní.",
    intro: [
      "Firmy často potřebují převzít aplikaci po původním dodavateli, odcházejícím vývojáři nebo po období, kdy se systém rozvíjel bez jasného technického vedení.",
      "Největší problém nebývá jen v kódu, ale v nejistotě, co je bezpečné měnit, kde už hrozí dopad do provozu a jak rychle vrátit projektu důvěryhodný další krok.",
      "První krok proto není velké přepisování. Nejdřív je potřeba zmapovat architekturu, závislosti, nasazení, data a skutečný dopad známých problémů.",
    ],
    situationsLead: "Tato služba dává smysl, když aplikace běží nebo je rozpracovaná, ale firma potřebuje znovu získat kontrolu nad technickým směrem a riziky.",
    situations: ["handover po původním dodavateli", "rozpracovaný produkt bez technického vedení", "provozované řešení s nejasnými riziky", "aplikace, která zpomaluje další roadmapu"],
    deliveryLead: "V úvodní fázi řeším orientaci v systému, vlastnictví a přístupy, audit kritických míst, revizi release procesu a návrh priorit s reálným provozním dopadem.",
    delivery: [
      "ověření vlastnictví repozitářů, účtů, domén, dat a přístupů třetích stran",
      "zmapování architektury, kódu, závislostí a technické dokumentace",
      "revize infrastruktury, prostředí, CI/CD, rollbacku, logů a monitoringu",
      "kontrola testů, kritických scénářů, bezpečnostních rizik a provozních závislostí",
      "prioritizace nálezů podle dopadu na provoz, bezpečnost a další delivery",
      "stabilizační backlog s vlastníky, pořadím a akceptačními podmínkami",
      "handover zjištění internímu týmu a plán navazujícího rozvoje bez automatického rewritu",
    ],
    processLead: "Nejdřív zajistíme přístupy, provozní kontakty a bezpečný způsob změn. Následuje audit a krátké stabilizační období, ve kterém se ověří release, kritické scénáře a největší rizika. Výstupem je handover a realistický backlog: co řešit hned, co postupně a co vůbec nepřepisovat.",
    resultsLead: "Cílem je bezpečné převzetí, menší rozhodovací nejistota a rozumný další postup bez zbytečných technických gest.",
    results: ["jasnější přehled o rizicích, vlastnictví a prioritách", "ověřenější release a provoz kritických scénářů", "menší tlak na rewrite jako první reflex", "předaný stabilizační plán a pevnější základ pro další vývoj"],
    faq: [
      { question: "Můžete převzít i aplikaci bez dokumentace?", answer: "Ano. To je běžná situace, jen je potřeba počítat s úvodní fází mapování přes kód, infrastrukturu a znalost lidí uvnitř firmy." },
      { question: "Co když je aplikace technicky zastaralá?", answer: "Zastaralost sama o sobě neznamená nutný rewrite. Důležité je, jaké konkrétní problémy způsobuje provozu, bezpečnosti nebo rychlosti dalšího vývoje." },
      { question: "Přebíráte i odpovědnost za další vývoj?", answer: "Ano. Lze navázat jednorázovou stabilizací i dlouhodobější spoluprací podle rozsahu a potřeb týmu." },
      { question: "Dokážete spolupracovat s interním týmem?", answer: "Ano. U takeover projektů je to často klíčové, protože interní znalost procesu a technické mapování se musí spojit." },
    ],
    related: ["problem-app-takeover", "problem-modernize-legacy-app", "problem-rescue-incomplete-project", "guide-how-to-take-over-an-existing-app-safely", "guide-how-to-run-app-takeover-audit", "guide-how-to-decide-app-needs-rewrite", "tool-release-stabilization-checklist", "inquiry"],
    priorityLinks: [
      { label: "Postup bezpečného převzetí existující aplikace", href: "/cs/pruvodce/jak-prevzit-existujici-aplikaci-bez-rizika/" },
      { label: "Co ovlivňuje nacenění převzetí aplikace", href: "/cs/pruvodce/jak-nacenit-prevzeti-aplikace/" },
      { label: "Projít checklist přístupů, prostředí a release procesu", href: "/cs/sablony/checklist-prevzeti-aplikace/" },
      { label: "Popsat aplikaci k převzetí", href: "/cs/kontakt/" },
    ],
    fitFor: ["běžící aplikace po původním dodavateli", "rozpracované projekty bez technického vedení", "systémy, které potřebují stabilizaci před dalším růstem"],
    fitNot: ["projekty bez přístupu do repozitářů a infrastruktury", "čistě kosmetické redesigny", "okamžitý rewrite bez auditu a priorit"],
  }),
  service({
    translationKey: "service-internal-tools-development",
    locale: "cs",
    slug: "interni-systemy-na-miru",
    title: "Interní systém na míru místo Excelu a ruční práce",
    breadcrumbLabel: "Interní systém na míru místo Excelu, e-mailů a ruční operativy",
    description: "Navrhuji a vyvíjím interní systémy pro firmy, které už nechtějí řídit zakázky, schvalování, reporting nebo provoz přes Excel, e-maily a ruční předávání.",
    primaryQuery: "interní systém na míru",
    heroTitle: "Interní systém na míru místo Excelu, e-mailů a ruční koordinace",
    heroSubtitle: "Pro operativu, administrativu, reporting a schvalovací procesy, které už nefungují ve sdílených tabulkách ani v poslepované sadě nástrojů.",
    intro: [
      "Interní systém na míru má smysl tam, kde se opakuje ruční práce, přepisují se data, ztrácí se odpovědnost mezi odděleními nebo vedení nevidí aktuální stav bez ručně skládaných reportů.",
      "Dobře navržený interní nástroj neslouží jako technologická hračka. Má zrychlit práci lidí, omezit chybovost a dát firmě lepší kontrolu nad důležitým procesem.",
      "Často není potřeba obrovský projekt, ale první verze, která nahradí Excel, e-maily a ruční operativu v nejslabším místě provozu a vytvoří základ pro další etapy.",
    ],
    situationsLead: "Silný fit bývá tam, kde sdílené tabulky, e-maily a několik nespojených nástrojů už přestávají být únosné.",
    situations: ["interní administrace a backoffice", "workflow a schvalování", "evidence případů, úkolů nebo zakázek", "reporting a manažerské přehledy"],
    deliveryLead: "Řeším návrh dat, role uživatelů, klíčové obrazovky, vazby na další systémy i to, jak má první verze opravdu pomoci denní práci.",
    delivery: ["procesní návrh a rozpad scope", "full-stack interní systém", "migrace nebo napojení dat", "postupné rozšiřování podle reálného provozu"],
    processLead: "Nejčastěji začneme procesním rozsahem, prioritami a první etapou, která má řešit skutečný provozní problém místo nekonečného sběru požadavků.",
    resultsLead: "Výsledek má ulevit operativě, zpřehlednit odpovědnosti a umožnit firmě pracovat s daty i workflow pod vlastní kontrolou.",
    results: ["méně přepisování a ruční koordinace", "nižší chybovost", "lepší dohledatelnost stavu práce", "pevnější základ pro reporting a další automatizaci"],
    faq: [
      { question: "Není levnější koupit hotový interní nástroj?", answer: "Někdy ano. Pokud ale potřebujete vlastní logiku, více oddělení, specifické role nebo integrace, bývá vlastní systém dlouhodobě praktičtější." },
      { question: "Musí být interní systém velký projekt?", answer: "Nemusí. Často dává smysl začít jednou oblastí, která firmu brzdí nejvíc, a teprve potom přidávat další moduly." },
      { question: "Pomůžete i s převodem z tabulek nebo starých nástrojů?", answer: "Ano. Součástí může být migrace dat, napojení na stávající systémy i postupný přechod bez tvrdého vypnutí starého řešení." },
      { question: "Dá se interní systém spojit s reportingem?", answer: "Ano. Reporting dává největší smysl tam, kde stojí na kvalitních datech z každodenního provozu." },
    ],
    related: ["comparison-custom-vs-saas", "comparison-internal-tool-vs-spreadsheets", "problem-internal-tool", "problem-replace-spreadsheets-in-process", "use-case-internal-admin-system", "use-case-service-team-ops-system", "service-automations-and-integrations", "use-case-ai-internal-documents", "tool-excel-to-internal-tool-migration-checklist", "inquiry"],
    priorityLinks: [
      { label: "Kdy dává smysl interní systém místo SaaS", href: "/cs/pruvodce/kdy-dava-smysl-interni-system-misto-saas" },
      { label: "Jak řídit zakázky bez Excelu", href: "/cs/pruvodce/jak-ridit-zakazky-bez-excelu" },
      { label: "Popsat situaci", href: "/cs/kontakt" },
    ],
    fitFor: ["firmy, kterým nestačí sdílené tabulky a e-maily", "provozy s více rolemi a odpovědnostmi", "týmy, které chtějí lepší dohled nad operativou"],
    fitNot: ["jednoduchá evidence pro jednoho uživatele", "projekty bez vlastníka procesu na straně klienta", "nákup hotového SaaS bez potřeby přizpůsobení"],
  }),
  service({
    translationKey: "service-automations-and-integrations",
    locale: "cs",
    slug: "automatizace-a-integrace",
    title: "Automatizace firemních procesů a integrace systémů | Ondřej Halata",
    breadcrumbLabel: "Automatizace a propojení systémů",
    description: "Propojím firemní systémy a omezím ruční práci pomocí API integrací, datových konektorů, automatizovaného workflow a praktického zapojení AI.",
    primaryQuery: "automatizace firemních procesů",
    eyebrow: "Automatizace a propojení systémů",
    heroTitle: "Automatizace, která propojí systémy a omezí ruční práci.",
    heroSubtitle: "Navážu na nástroje, které už používáte, a vytvořím spolehlivý tok dat od jednoho konektoru po širší firemní proces.",
    primaryCtaLabel: "Popsat proces nebo integraci",
    secondaryCta: { label: "Prověřit možnosti automatizace", href: "/cs/audit-automatizace/" },
    intro: [
      "Nejdřív společně najdeme ruční krok, který se opakuje, zabírá čas nebo vytváří zbytečné chyby. Teprve potom vybírám vhodný způsob automatizace.",
      "Začít můžeme jedním konkrétním přenosem dat. Řešení ale od začátku počítá s kontrolou výsledku, výpadkem služby i možností bezpečného opakování.",
    ],
    sections: [
      {
        title: "Kde se automatizace nejčastěji vyplatí",
        body: ["Dobrým začátkem je opakovaný krok mezi lidmi a systémy, jehož výsledek lze jednoznačně zkontrolovat."],
        bullets: [
          "Údaje se ručně přepisují mezi e-mailem, tabulkou, CRM, ERP nebo účetnictvím.",
          "Lidé opakovaně kontrolují platby, stavy, termíny nebo chybějící dokumenty.",
          "Poptávka se ručně třídí a předává dalšímu člověku.",
          "Report se skládá z několika exportů a ručních úprav.",
          "Stejný dokument nebo záznam vzniká ve více systémech.",
          "Chyba přenosu se zjistí až ve chvíli, kdy chybí navazující výsledek.",
        ],
      },
      {
        title: "Jak spolehlivá automatizace funguje",
        body: ["Nejde jen o jednorázový skript. Automatizace musí bezpečně převzít vstup, použít domluvená pravidla a předat ověřitelný výsledek."],
        bullets: [
          "Vstupy: Formuláře, e-maily, dokumenty, exporty nebo data z API.",
          "Zpracování: Kontrola, transformace a mapování hodnot podle firemních pravidel.",
          "Výstup: CRM, účetnictví, e-shop, interní systém, report nebo upozornění.",
          "Provozní ochrana: Kontrola duplicit, opakování dočasných chyb, logování a možnost ručního zásahu.",
        ],
      },
      {
        title: "AI zapojuji jen tam, kde přináší konkrétní hodnotu",
        body: [
          "AI může třídit text, získávat informace z dokumentů, připravit návrh odpovědi nebo pomoci s hledáním v interních podkladech.",
          "Pevná pravidla zůstávají vhodnější pro výpočty, účetní mapování a další kroky, kde musí být výsledek vždy stejný. Výstup AI proto podle rizika doplňuji validací nebo lidským schválením.",
        ],
      },
      {
        title: "Jak realizace probíhá",
        body: ["Nejdřív řešíme proces a data, teprve potom konkrétní technologii."],
        bullets: [
          "Projdeme současný proces, používané systémy a nejčastější výjimky.",
          "Oddělím vhodné automatické kroky od rozhodnutí, která mají zůstat na člověku.",
          "Navrhnu a nasadím nejmenší etapu s kontrolovatelným výsledkem.",
          "Po ověření v provozu můžeme přidat další pravidla, systémy nebo klienty.",
        ],
        listType: "ordered",
      },
      {
        title: "Orientační ceny",
        body: [
          "Cena závisí na počtu napojených systémů, množství výjimek a tom, jak důležitý je automatizovaný proces pro běžný provoz.",
          "Začít lze analýzou, jedním konkrétním konektorem nebo řešením doplněným o správu a monitoring.",
        ],
      },
      {
        title: "Relevantní zkušenost",
        body: [
          "Pohoda XML ukazuje převod a mapování dokladů pro účetní systém. DoporučenoAI praktické zapojení AI do analytického workflow.",
          "Další komerční zkušenosti zahrnují interní systémy, databáze, integrace a provoz, které nelze vždy veřejně popsat do detailu.",
        ],
      },
    ],
    situationsLead: "Tato služba dává smysl, když mezi systémy vzniká opakovaná ruční práce, která brzdí kapacitu lidí a vytváří chybovost.",
    situations: ["přepisování mezi ERP, CRM, e-shopem a tabulkami", "ruční kontrola plateb, termínů nebo stavů", "reporty skládané z více zdrojů", "schvalování bez jednotných pravidel", "API napojení mezi firemními systémy"],
    deliveryLead: "Neřeším jen integraci přes API. Často je potřeba upravit i interní workflow, datový model a způsob, jakým se s informacemi v procesu pracuje.",
    delivery: ["diagnostika a prioritizace automatizací", "návrh integrační vrstvy", "implementace konkrétních automatizací", "další rozvoj podle provozního přínosu"],
    processLead: "Nejdřív řešíme proces a data, ne konkrétní nástroj. Teprve potom dává smysl rozhodnout, co automatizovat, co ponechat lidem a kde je potřeba systém doplnit.",
    resultsLead: "Dobrý výsledek není co nejvíc automatických kroků, ale přehledný tok dat a menší závislost firmy na ruční koordinaci.",
    results: ["úspora času na opakovaných úkolech", "méně chyb při přepisování", "lepší návaznost mezi systémy", "jasnější podklad pro další investice do provozu"],
    faq: [
      { question: "Je automatizace vhodná i pro menší firmu?", answer: "Ano, pokud se stejný proces opakuje dost často nebo závisí na jednom člověku. Velikost firmy je méně důležitá než četnost, chybovost a dopad konkrétního kroku." },
      { question: "Musíme měnit systémy, které už používáme?", answer: "Obvykle ne. Nejdřív prověřím jejich API, exporty a další možnosti napojení. Cílem je využít existující nástroje a doplnit mezi nimi spolehlivou návaznost." },
      { question: "Co když externí API nebo cílový systém vypadne?", answer: "Návrh počítá s logováním, opakováním dočasných chyb a ochranou proti duplicitám. Konkrétní úroveň odolnosti se určí podle dopadu výpadku." },
      { question: "Je součástí i dlouhodobý provoz?", answer: "Může být, ale není automaticky skrytý v ceně realizace. Můžeme domluvit placené zásahy podle skutečného času, pravidelnou podporu nebo předání provozu vašemu týmu." },
      { question: "Kolik stojí první posouzení?", answer: "Krátký úvodní rozhovor a základní ověření směru jsou zdarma. Pokud je potřeba projít více systémů, dat a výjimek, samostatná analýza se obvykle pohybuje mezi 1 500 a 4 000 Kč podle náročnosti. Cenu potvrdím předem." },
    ],
    related: ["automation-audit", "guide-how-to-automate-request-processing", "service-sales-and-job-tracking-system", "service-custom-web-app-development", "inquiry"],
    priorityLinks: [
      { label: "Prověřit možnosti automatizace", href: "/cs/audit-automatizace/" },
      { label: "Popsat proces nebo integraci", href: "/cs/kontakt/" },
    ],
    fitFor: ["firmy s více systémy a ručním přepisováním", "procesy závislé na ruční kontrole a dohledávání", "projekty, kde se má nejdřív zmapovat přínos automatizace"],
    fitNot: ["automatizace bez znalosti procesu a dopadu", "jednorázové skripty bez provozní odpovědnosti", "projekty postavené jen na nákupu no-code licence bez integrací"],
    ctaLabel: "Popsat proces nebo integraci",
    ctaNote: "Napište, co se dnes dělá ručně, které systémy používáte a co se stane při chybě. Navrhnu další rozumný krok.",
  }),
  service({
    translationKey: "service-custom-web-app-development",
    locale: "en",
    slug: "custom-web-application-development",
    title: "Custom web application development | Bc. Ondřej Halata",
    breadcrumbLabel: "Custom web application development for business-critical workflows",
    description: "I design and build custom web applications for companies that need tailored workflows, internal logic, integrations, and room for long-term growth.",
    primaryQuery: "custom web application development",
    heroTitle: "Custom software when off-the-shelf tools create more friction than value",
    heroSubtitle: "Best fit for portals, internal systems, operational apps, and workflows that depend on company-specific rules, data, and integrations.",
    intro: [
      "Custom development makes sense when a company needs software shaped around its real process instead of shaping the process around a generic tool.",
      "The work is not only about shipping features. The important part is getting the structure right: data model, permissions, integration boundaries, maintainability, and an application that can grow without constant rework.",
      "I can help from scoping and architecture through delivery and ongoing improvement, or join an existing team as a senior contractor on a defined workstream.",
    ],
    situationsLead: "The strongest fit is a process with multiple roles, approvals, domain-specific rules, internal reporting, or a need to combine data from several systems into one operating view.",
    situations: ["client portals and partner extranets", "internal operations systems", "workflow and approvals", "dashboards and reporting interfaces"],
    deliveryLead: "This usually includes architecture, full-stack implementation, integration work, release discipline, and the technical choices needed for long-term operation.",
    delivery: ["solution design and phased scope", "full-stack delivery with iterative releases", "API and third-party integrations", "performance and operational hardening"],
    processLead: "We start by defining the business situation, current constraints, and the first valuable release. Then we deliver in smaller steps so decisions stay tied to real usage and real priorities.",
    resultsLead: "The outcome should be a production system that supports the business, stays maintainable, and gives the buyer confidence in future phases.",
    results: ["less manual work around the product", "more predictable future development", "clearer permission and data structure", "better long-term ownership than a patchwork stack"],
    faq: [
      { question: "Do we need a full specification before starting?", answer: "No. A clear business problem, the current workflow, and the intended outcome are enough to start discovery and shape a realistic first phase." },
      { question: "Can you work inside an existing team?", answer: "Yes. I can deliver independently or plug into an existing product or engineering team as a senior contract developer with ownership of a defined area." },
      { question: "Can we start with an MVP?", answer: "Yes. For larger initiatives, a well-scoped MVP is often the safest way to validate priorities without overbuilding the first release." },
      { question: "Do you stay involved after launch?", answer: "Yes. Ongoing support can cover improvements, bug fixing, technical debt reduction, performance work, and structured next-phase planning." },
    ],
    related: ["problem-client-portal", "comparison-custom-vs-saas", "use-case-client-portal", "use-case-b2b-partner-portal", "case-study-internal-tool-for-operations", "inquiry"],
    priorityLinks: [
      { label: "How to scope a custom web application", href: "/en/guides/how-to-scope-a-custom-web-application" },
      { label: "Custom development vs SaaS", href: "/en/comparisons/custom-web-app-vs-saas-tool" },
      { label: "Describe situation", href: "/en/discuss-your-project" },
    ],
    fitFor: ["companies with workflow-heavy business processes", "teams that need tailored software instead of forced SaaS compromises", "buyers planning for long-term product ownership"],
    fitNot: ["basic marketing sites", "one-off microsites with no application logic", "projects driven only by lowest-cost bidding"],
  }),
  service({
    translationKey: "service-existing-app-takeover",
    locale: "en",
    slug: "existing-app-takeover",
    title: "Existing app takeover | Bc. Ondřej Halata",
    breadcrumbLabel: "Existing app takeover and structured improvement",
    description: "I take over existing or partially delivered web applications, reduce delivery risk, stabilise the stack, and create a realistic path for ongoing improvement.",
    primaryQuery: "existing app takeover",
    heroTitle: "Take over the app without betting the business on a rewrite",
    heroSubtitle: "Useful when a supplier changed, a product is stuck, or the codebase works just well enough to be risky to touch.",
    intro: [
      "Many teams need help after a vendor handover, an unfinished delivery, or a period where the application kept moving without strong technical ownership.",
      "The hardest part is rarely the code alone. It is the uncertainty around what can change safely and what might break operations.",
      "That is why the first step is not a dramatic rebuild. The right first move is to map dependencies, release flow, operational risk, and the real business pressure around the system.",
    ],
    situationsLead: "This service is valuable when the system is already important to the business but future delivery feels risky, opaque, or overly dependent on inherited knowledge.",
    situations: ["vendor or team handover", "unfinished delivery with no technical lead", "running app with unclear operational risk", "product roadmap blocked by technical uncertainty"],
    deliveryLead: "The first phase focuses on codebase orientation, deployment review, risk mapping, and a prioritised plan grounded in business impact rather than technical aesthetics.",
    delivery: ["codebase and dependency review", "deployment and environment assessment", "risk mapping for critical workflows", "stabilisation priorities based on impact"],
    processLead: "Once the system is mapped, we can define what needs immediate protection, what should be improved incrementally, and whether any bigger rewrite is actually justified.",
    resultsLead: "The main outcome is decision confidence: you understand the risk, the practical next steps, and the technical cost of different delivery paths.",
    results: ["clearer technical picture", "less rewrite pressure by default", "faster onboarding into the inherited stack", "safer basis for ongoing product work"],
    faq: [
      { question: "Can you take over an app with little or no documentation?", answer: "Yes. That is common. It requires a structured discovery phase based on the codebase, infrastructure, release flow, and people who know the business process." },
      { question: "Does an older stack automatically mean we should rebuild?", answer: "No. The right question is what concrete risk or delivery friction the current stack creates. Age alone is not a business case for a rewrite." },
      { question: "Can you continue with ongoing development after the audit?", answer: "Yes. I can stay on for stabilisation and delivery, or support an internal team with architecture, implementation, and technical direction." },
      { question: "Can you work alongside internal staff?", answer: "Yes. Existing-app takeovers work best when technical discovery and internal process knowledge are combined." },
    ],
    related: ["problem-app-takeover", "problem-modernize-legacy-app", "comparison-rewrite-vs-incremental-app-improvement", "guide-how-to-run-app-takeover-audit", "guide-how-to-decide-app-needs-rewrite", "tool-release-stabilization-checklist", "inquiry"],
    fitFor: ["running applications after a vendor or team change", "unfinished products that need structure and technical ownership", "systems that need stabilisation before bigger roadmap work"],
    fitNot: ["projects with no access to infrastructure or source code", "pure visual redesigns without technical ownership", "rewrite-first mandates with no discovery phase"],
  }),
  service({
    translationKey: "service-internal-tools-development",
    locale: "en",
    slug: "internal-tools-development",
    title: "Internal tools development | Bc. Ondřej Halata",
    breadcrumbLabel: "Internal tools development for operations, approvals, and reporting",
    description: "I build internal tools for teams that need to replace spreadsheets, fragmented admin work, and slow manual coordination with a system built around real operations.",
    primaryQuery: "internal tools development",
    heroTitle: "Internal tools that match how the company actually works",
    heroSubtitle: "A strong fit for operations-heavy teams, admin workflows, approvals, dashboards, and processes that no longer belong in spreadsheets and inboxes.",
    intro: [
      "Internal tools become necessary when repeated manual work, spreadsheet handoffs, and disconnected admin tools start slowing down operations.",
      "The cost is not only time. It also shows up as poor visibility, inconsistent data, and work that depends on specific people remembering specific steps.",
      "That can start as a focused first release around one painful workflow rather than a giant programme with unclear payback.",
    ],
    situationsLead: "The strongest fit is a business process handled by several people or teams where visibility, responsibility, and data quality are currently weak.",
    situations: ["backoffice administration", "workflow and approvals", "internal case or order tracking", "management reporting views"],
    deliveryLead: "I usually work on process framing, data structure, roles, key workflows, and the first release that already improves real day-to-day operations.",
    delivery: ["process and scope design", "full-stack internal tool delivery", "data migration or system integration", "phased rollout based on operational value"],
    processLead: "We define the process scope, the important roles, and the first meaningful release. That first release should solve a real operational problem, not sit in discovery for months.",
    resultsLead: "A strong internal tool reduces manual coordination, improves accountability, and gives the company a system it can evolve under its own priorities.",
    results: ["less spreadsheet and inbox dependency", "lower error rate", "better work-in-progress visibility", "cleaner foundation for reporting and automation"],
    faq: [
      { question: "Would an off-the-shelf admin product be cheaper?", answer: "Sometimes, yes. But if the process, data, roles, or integration needs are specific enough, a custom internal tool is often the cleaner long-term choice." },
      { question: "Does an internal tool have to be a large programme?", answer: "No. It is often smarter to start with one workflow or one department and expand once the first release proves useful." },
      { question: "Can you help migrate from spreadsheets or old tools?", answer: "Yes. That can include staged migration, data import, and integration work so the new tool supports the transition instead of disrupting it." },
      { question: "Can internal tools include dashboards and reporting?", answer: "Yes. Reporting is often most valuable when it sits on top of better operational data collected through the tool itself." },
    ],
    related: ["problem-internal-tool", "problem-replace-spreadsheets-in-process", "comparison-internal-tool-vs-spreadsheets", "use-case-internal-approval-system", "service-automations-and-integrations", "use-case-ai-internal-documents", "tool-excel-to-internal-tool-migration-checklist", "inquiry"],
    priorityLinks: [
      { label: "When an internal tool is better than SaaS", href: "/en/guides/when-an-internal-tool-is-better-than-saas" },
      { label: "How to manage jobs without Excel", href: "/en/guides/how-to-manage-jobs-without-excel" },
      { label: "Describe situation", href: "/en/discuss-your-project" },
    ],
    fitFor: ["operations-heavy teams replacing spreadsheets and inboxes", "companies with multi-role internal workflows", "buyers who want a long-term internal system instead of patchwork tooling"],
    fitNot: ["single-user micro tools", "projects without a clear process owner on the client side", "simple SaaS purchases with no tailoring requirement"],
  }),
  service({
    translationKey: "service-automations-and-integrations",
    locale: "en",
    slug: "automations-and-integrations",
    title: "Automations and integrations | Bc. Ondřej Halata",
    breadcrumbLabel: "Automations and integrations for messy business workflows",
    description: "I help companies reduce manual work, connect disconnected systems, and design practical automations that improve operations instead of adding another layer of chaos.",
    primaryQuery: "automations and integrations",
    heroTitle: "Connect the systems and remove the repetitive manual work",
    heroSubtitle: "Useful when teams are re-entering data, checking statuses by hand, building reports from multiple sources, or relying on people to keep workflows moving manually.",
    intro: [
      "Automation creates the most value when a company is repeatedly losing time on manual handoffs between systems.",
      "The symptoms are usually visible in re-entered data, email-based approvals, manual checks, exception handling, or reporting stitched together from multiple tools.",
      "The first step is to understand which losses matter most, where the data breaks, and what should remain under human control.",
    ],
    situationsLead: "The strongest signals are repeated work, fragmented system ownership, and business processes that slow down because information has to be found, copied, or verified manually.",
    situations: ["ERP, CRM, ecommerce, and spreadsheet handoffs", "manual status or payment checks", "reporting across disconnected tools", "approval chains with no consistent rules"],
    deliveryLead: "The work can include the analysis, the integration design, and the implementation itself. API work is only one part of the picture; process and data structure matter just as much.",
    delivery: ["automation diagnostic and prioritisation", "integration layer design", "implementation of focused automations", "iterative follow-up based on operational value"],
    processLead: "The focus is the process and the data model, not a fashionable automation platform. If the underlying flow is unclear, automation only spreads the confusion faster.",
    resultsLead: "The right outcome is not maximum automation. It is a cleaner flow of data, less avoidable manual work, and better control over the process.",
    results: ["time saved on repetitive work", "fewer transfer mistakes", "better system-to-system continuity", "clearer case for future investment"],
    faq: [
      { question: "Is automation relevant for smaller companies too?", answer: "Yes. Company size matters less than repetition, friction, and dependency on manual coordination." },
      { question: "Do you only handle API integrations?", answer: "No. API work is part of it, but many useful automation projects also require workflow changes, better data structure, or a supporting internal interface." },
      { question: "Can you implement the changes after the review?", answer: "Yes. I can stay involved from the initial mapping stage through delivery and follow-up improvement work." },
      { question: "What if the real problem is a broken process, not missing automation?", answer: "That is still a useful outcome. It is better to identify a process issue early than to spend money automating something that will remain inefficient." },
    ],
    related: ["problem-system-integrations", "guide-how-to-run-automation-discovery", "use-case-workflow-app-for-teams", "use-case-service-team-ops-system", "problem-ai-in-business-process", "use-case-ai-intake-triage", "tool-automation-discovery-checklist", "inquiry"],
    priorityLinks: [
      { label: "How to automate request processing", href: "/en/guides/how-to-automate-request-processing" },
      { label: "How to find manual data re-entry", href: "/en/guides/how-to-find-manual-data-reentry" },
      { label: "Describe situation", href: "/en/discuss-your-project" },
    ],
    fitFor: ["companies with manual cross-system work", "teams relying on repetitive status checks or spreadsheet transfers", "buyers who want practical automation, not tooling theatre"],
    fitNot: ["automation with no process ownership", "throwaway scripts with no operational accountability", "no-code licence purchases with no integration strategy"],
  }),
  service({
    translationKey: "service-ai-automation-and-integrations",
    locale: "cs",
    slug: "ai-automatizace-a-integrace",
    title: "AI automatizace procesů a integrace pro firmy",
    breadcrumbLabel: "AI automatizace procesů a integrace pro firmy",
    description:
      "Pomohu firmám využít AI tam, kde navazuje na reálný proces, interní systém nebo integraci mezi nástroji a dokáže snížit ruční práci, chybovost nebo čas ztracený dohledáváním informací.",
    primaryQuery: "ai automatizace procesů",
    heroTitle: "AI automatizace procesů bez další vrstvy chaosu",
    heroSubtitle:
      "Pro firmy, kde se data přepisují mezi systémy, operativa stojí na lidech a AI má smysl jen tam, kde reálně šetří čas nebo snižuje chybovost.",
    intro: [
      "AI dává smysl ve chvíli, kdy navazuje na existující procesy, systémy a data. Ne jako izolovaný nástroj, ale jako vrstva nad tím, co už ve firmě běží.",
      "Typicky jde o situace, kdy se opakují stejné kroky nad daty, lidé ručně třídí nebo kontrolují informace a důležitá rozhodnutí stojí na dohledávání v dokumentech, e-mailech nebo více systémech najednou.",
      "Cílem není nasadit AI za každou cenu. Cílem je odstranit zbytečnou práci, zkrátit průchod procesem a navrhnout řešení, které dává provozně smysl.",
    ],
    situationsLead: "Tato služba dává smysl tam, kde už firma má opakovaný proces, ale ruční práce kolem textů, dokumentů nebo příchozí agendy zbytečně zatěžuje lidi.",
    situations: [
      "ruční třídění e-mailů, požadavků nebo formulářů",
      "dohledávání informací v interních dokumentech a poznámkách",
      "opakované přepisování nebo kontrola dat mezi systémy",
      "workflow, kde AI může doplnit interní systém nebo integraci",
    ],
    deliveryLead: "AI nedávám do firmy jako samostatnou atrakci. Nejčastěji jde o rozšíření automatizace, interního systému nebo integrační vrstvy mezi nástroji.",
    delivery: [
      "návrh vhodného AI use case nad konkrétním procesem",
      "napojení AI na interní systém, dokumenty nebo příchozí agendu",
      "integrace do workflow a návazných automatizací",
      "ověření první verze a následné ladění podle provozu",
    ],
    processLead: "Nejdřív řešíme proces, vstupy a kvalitu dat. Teprve potom dává smysl rozhodnout, jestli je AI opravdu správná vrstva a jak ji zapojit bez zbytečné složitosti.",
    resultsLead: "Dobrý výsledek není mít AI v procesu za každou cenu, ale méně ruční práce, rychlejší dohledání informací a lepší provozní návaznost.",
    results: [
      "méně rutinní ruční práce v opakovaných krocích",
      "rychlejší práce s dokumenty, texty a požadavky",
      "lepší návaznost mezi lidmi, systémem a automatizací",
      "jasnější rozhodnutí, kde AI dává smysl i do dalšího rozvoje",
    ],
    faq: [
      { question: "Je AI vhodná pro každý firemní proces?", answer: "Ne. Nejlépe funguje tam, kde je proces aspoň částečně stabilní, opakovaný a kde má firma rozumně dostupná data nebo dokumenty." },
      { question: "Musí se kvůli tomu měnit celý interní systém?", answer: "Nemusí. Často je lepší navázat na existující systém nebo workflow a doplnit jen konkrétní AI vrstvu tam, kde dává největší smysl." },
      { question: "Je to použitelné i pro menší firmu?", answer: "Ano, pokud se opakují stejné typy požadavků, práce s dokumenty nebo ruční administrativa, která už začíná brzdit kapacitu lidí." },
    ],
    related: [
      "service-automations-and-integrations",
      "service-internal-tools-development",
      "problem-ai-in-business-process",
      "guide-when-ai-integration-makes-sense",
      "use-case-ai-internal-documents",
      "use-case-ai-intake-triage",
      "inquiry",
    ],
    fitFor: [
      "firmy s opakovanou administrativní nebo textovou agendou",
      "procesy, kde AI dává smysl jako vrstva nad systémem nebo workflow",
      "firmy, které chtějí praktické využití AI místo hype implementace",
    ],
    fitNot: [
      "AI projekt bez jasného use case a ownera procesu",
      "snaha nahradit nevyřešený chaos dalším nástrojem",
      "experiment bez návaznosti na provozní potřebu firmy",
    ],
  }),
  service({
    translationKey: "service-ai-automation-and-integrations",
    locale: "en",
    slug: "ai-automation-and-integrations",
    title: "AI process automation and integrations for companies",
    breadcrumbLabel: "AI process automation and integrations for companies",
    description:
      "I help companies use AI where it builds on a real process, internal system, or system integration and can reduce manual work, error rate, or time lost to repetitive document and information handling.",
    primaryQuery: "ai process automation",
    heroTitle: "AI process automation without adding another layer of chaos",
    heroSubtitle:
      "For companies where data moves manually between systems, operations depend on people, and AI only makes sense when it saves time or reduces operational friction.",
    intro: [
      "AI makes sense when it builds on existing processes, systems, and data. Not as an isolated tool, but as a practical layer on top of how the company already operates.",
      "Typical situations include repeated work on text and data, manual sorting of incoming requests, and teams losing time because they have to search for answers across documents, emails, and several systems.",
      "The goal is not to deploy AI for its own sake. The goal is to remove unnecessary work, shorten the process, and design an operating layer that holds up in real delivery.",
    ],
    situationsLead: "This service is a strong fit where the company already has a repeated process, but manual work around text, documents, or incoming requests is consuming too much team capacity.",
    situations: [
      "manual triage of emails, requests, or form submissions",
      "searching for answers across internal documents and notes",
      "repeated validation or transfer of data between systems",
      "workflow where AI can extend an internal system or integration layer",
    ],
    deliveryLead: "I do not position AI as a standalone gimmick. In most cases it works best as an extension of automation, internal tooling, or the integration layer between systems.",
    delivery: [
      "selection of the right AI use case for a specific process",
      "AI integration with internal tools, documents, or intake workflows",
      "implementation inside the broader workflow and follow-up automation",
      "first-release validation and iterative refinement based on live usage",
    ],
    processLead: "The first step is the process, the inputs, and the quality of data. Only then does it make sense to decide whether AI is the right layer and how to add it without unnecessary complexity.",
    resultsLead: "The best result is not 'having AI in the process'. It is less manual work, faster access to information, and stronger operational continuity.",
    results: [
      "less routine manual work in repeated steps",
      "faster handling of documents, text, and incoming requests",
      "better connection between people, systems, and automation",
      "clearer understanding of where AI is worth expanding further",
    ],
    faq: [
      { question: "Is AI a good fit for every business process?", answer: "No. It works best where the process is at least somewhat stable, repeated, and supported by usable data or documents." },
      { question: "Do we need to rebuild the whole internal system?", answer: "No. In many cases the smarter route is to extend the current workflow or system with a focused AI layer where it creates the highest practical value." },
      { question: "Is this useful for smaller companies too?", answer: "Yes, especially when the same request types, document work, or administrative tasks already consume too much team time." },
    ],
    related: [
      "service-automations-and-integrations",
      "service-internal-tools-development",
      "problem-ai-in-business-process",
      "guide-when-ai-integration-makes-sense",
      "use-case-ai-internal-documents",
      "use-case-ai-intake-triage",
      "inquiry",
    ],
    fitFor: [
      "companies with recurring text-heavy or admin-heavy operations",
      "processes where AI extends an internal tool or workflow",
      "companies that want practical AI, not theatre",
    ],
    fitNot: [
      "AI projects with no use case or process owner",
      "trying to hide process chaos behind another tool",
      "experiments with no operational link to the business",
    ],
  }),
  service({
    translationKey: "service-sales-and-job-tracking-system",
    locale: "cs",
    slug: "system-pro-rizeni-poptavek-a-zakazek",
    title: "Systém pro evidenci a řízení zakázek na míru | Ondřej Halata",
    breadcrumbLabel: "Systém pro řízení poptávek a zakázek na míru",
    description: "Navrhnu a vyvinu interní systém pro řízení poptávek, nabídek a zakázek včetně rolí, stavů, předávání práce a napojení na používané firemní nástroje.",
    primaryQuery: "evidence zakázek",
    heroTitle: "Poptávky, nabídky a zakázky v jednom systému",
    heroSubtitle: "Řešení na míru propojí poptávku, nabídku a realizaci, nastaví role a stavy a naváže na nástroje, které už firma používá.",
    intro: [
      "Ve většině firem nevzniká chaos proto, že by lidé nechtěli mít pořádek. Vzniká ve chvíli, kdy poptávky, nabídky a realizace žijí v různých tabulkách, e-mailech a hlavách lidí.",
      "Výsledkem bývá nejasný stav zakázky, ruční dohledávání informací, ztracená odpovědnost a vyšší chybovost mezi obchodem a realizací.",
      "Navrhnu rozsah první etapy, datový model, role, stavy a integrační vazby tak, aby systém odpovídal reálnému workflow a šel bezpečně rozvíjet.",
    ],
    situationsLead: "Nejčastěji jde o firmy, kde obchod a realizace pracují nad stejnou zakázkou, ale každý tým má jiný pohled, jiná data a jiný způsob evidence.",
    situations: [
      "poptávky chodí do e-mailu a nejsou systematicky evidované",
      "nabídky existují v několika verzích a není jasné, která je aktuální",
      "realizace zakázky běží bokem mimo obchodní část procesu",
      "stav zakázky se dohledává ručně mezi tabulkami, e-maily a poznámkami",
      "není jasné, kdo má další krok a kde se proces zasekl",
    ],
    deliveryLead: "Součástí dodávky je procesní audit, návrh a vývoj řešení: sjednocení obchodní a realizační části procesu, jasné role a stavy, historie změn, migrace potřebných dat a integrace.",
    delivery: [
      "audit současné evidence, rolí, výjimek a míst, kde se proces ztrácí mezi nástroji",
      "datový model a evidence poptávek, nabídek, zakázek a jejich stavů",
      "role, oprávnění, odpovědnosti, termíny a dohledatelná historie změn",
      "převod schválené nabídky do realizace bez opakovaného ručního přepisu",
      "pravidla pro předávání práce a zpracování provozních výjimek",
      "napojení na e-mail, CRM, fakturaci nebo další interní nástroje podle reálného workflow",
      "vyčištění a migrace dat potřebných pro bezpečný start první etapy",
      "pilotní spuštění, ověření kritických scénářů a navazující rozvoj podle provozu",
    ],
    processLead: "Spolupráce začíná zmapováním procesu, dat, rolí, integrací a slabých míst. Z auditu vznikne scope první etapy a akceptační scénáře. Řešení dodávám v menších krocích, před spuštěním ověřím migraci a klíčové workflow a další fáze upravíme podle reálného provozu.",
    resultsLead: "Dobrý výsledek není jen nový systém. Dobrý výsledek je přehlednější proces, méně ručního dohledávání a jasnější odpovědnost mezi obchodem a realizací.",
    results: [
      "lepší přehled nad stavem poptávek a zakázek",
      "méně chaosu mezi obchodem a realizací",
      "nižší závislost na tabulkách, e-mailech a ruční koordinaci",
      "jasnější workflow, role a návaznost dalších kroků",
    ],
    faq: [
      { question: "Je to vhodné i pro menší firmu?", answer: "Ano, pokud už se opakuje větší množství poptávek a zakázek a současný způsob evidence začíná brzdit práci nebo zvyšovat chybovost." },
      { question: "Musí systém pokrýt celý proces od začátku?", answer: "Nemusí. Často dává smysl začít první etapou na nejslabším místě procesu a až potom systém rozšiřovat dál." },
      { question: "Lze to napojit na další systémy?", answer: "Ano. Typicky na e-mail, CRM, fakturaci nebo jiné interní nástroje, aby systém nezůstával izolovaný." },
    ],
    related: [
      "service-internal-tools-development",
      "service-automations-and-integrations",
      "guide-how-to-automate-request-processing",
      "problem-replace-spreadsheets-in-process",
      "problem-sales-offers-delivery-chaos",
      "use-case-request-offer-delivery-system",
      "use-case-workflow-app-for-teams",
      "use-case-service-team-ops-system",
      "inquiry",
    ],
    priorityLinks: [
      { label: "Jak konkrétně funguje systém od poptávky po realizaci", href: "/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/" },
      { label: "Jak připravit automatizaci zpracování poptávek", href: "/cs/pruvodce/jak-automatizovat-zpracovani-poptavek/" },
      { label: "Jak poznat rizika řízení poptávek a zakázek v Excelu a e-mailu", href: "/cs/problemy/poptavky-nabidky-a-realizace-v-excelu-a-emailu/" },
      { label: "Popsat požadovaný systém", href: "/cs/kontakt/" },
    ],
    fitFor: [
      "firmy se zakázkovým obchodem nebo realizací",
      "týmy, kde se propojuje obchod, nabídka a následná realizace",
      "situace, kde Excel a e-mail přestávají stačit na řízení zakázek",
    ],
    fitNot: [
      "jednoduchá evidence bez workflow a více rolí",
      "nákup hotového CRM bez potřeby přizpůsobení procesu",
      "mikroproces bez návaznosti mezi obchodem a realizací",
    ],
  }),
  service({
    translationKey: "service-sales-and-job-tracking-system",
    locale: "en",
    slug: "sales-offers-and-job-tracking-system",
    title: "System for tracking incoming requests and jobs",
    breadcrumbLabel: "System for managing incoming requests, offers, and delivery",
    description: "I design and build an internal system for tracking incoming requests, preparing offers, and managing delivery where the process is currently held together by spreadsheets, email, and manual coordination.",
    primaryQuery: "request and job tracking system",
    heroTitle: "Keep incoming requests, offers, and jobs under control in one place",
    heroSubtitle: "No more spreadsheet sprawl, email chaos, and unclear job status. A system shaped around the way your process actually works.",
    intro: [
      "In many companies the problem is not a lack of effort. The problem starts when incoming requests, offers, and delivery live across spreadsheets, email threads, and individual people.",
      "That creates unclear job status, manual lookup work, weak accountability, and friction between sales and delivery.",
      "A tailored internal system makes sense where the business needs one shared process from the first incoming request through offer creation and final delivery.",
    ],
    situationsLead: "This is a strong fit where sales and delivery both work on the same job but do not share one reliable operational view.",
    situations: [
      "incoming requests arrive by email and are not tracked systematically",
      "several offer versions exist and nobody is sure which one is current",
      "delivery work runs separately from the sales side of the process",
      "job status has to be reconstructed manually from spreadsheets, emails, and notes",
      "it is unclear who owns the next step and where the process is blocked",
    ],
    deliveryLead: "The system usually brings sales and delivery into one workflow with shared visibility, history, and responsibility.",
    delivery: [
      "tracking of incoming requests and their statuses",
      "connection between the request, offer, and next step",
      "conversion of an approved offer into a delivery job",
      "visibility into status, ownership, deadlines, and history",
      "possible integration with email, CRM, invoicing, or internal tools",
    ],
    processLead: "The first step is to map how the current process works, where information gets lost, and where the system should create the biggest relief. Only then does the first delivery scope make sense.",
    resultsLead: "The best outcome is not just a new system. It is a clearer process, less manual coordination, and stronger accountability between sales and delivery.",
    results: [
      "better visibility over incoming requests and jobs",
      "less chaos between sales and delivery",
      "lower dependence on spreadsheets, email, and manual coordination",
      "clearer workflow, ownership, and next-step logic",
    ],
    faq: [
      { question: "Is this useful for a smaller company too?", answer: "Yes, especially when incoming requests and jobs already repeat often enough that the current tracking method slows people down or creates avoidable mistakes." },
      { question: "Does the system need to cover the full process from day one?", answer: "No. It is often better to start with the weakest part of the workflow and expand the system in later stages." },
      { question: "Can it connect to other systems?", answer: "Yes. Typical integrations include email, CRM, invoicing, or other internal tools so the system does not stay isolated." },
    ],
    related: [
      "service-internal-tools-development",
      "service-automations-and-integrations",
      "guide-how-to-automate-request-processing",
      "problem-replace-spreadsheets-in-process",
      "problem-sales-offers-delivery-chaos",
      "use-case-request-offer-delivery-system",
      "use-case-workflow-app-for-teams",
      "use-case-service-team-ops-system",
      "inquiry",
    ],
    priorityLinks: [
      { label: "See how the request-to-delivery workflow works", href: "/en/use-cases/system-for-requests-offers-and-delivery/" },
      { label: "Plan request-processing automation", href: "/en/guides/how-to-automate-request-processing/" },
      { label: "Recognise when spreadsheets and email stop being enough", href: "/en/problems/requests-offers-and-delivery-in-spreadsheets-and-email/" },
      { label: "Describe the system you need", href: "/en/discuss-your-project/" },
    ],
    fitFor: [
      "companies with project-based sales or delivery work",
      "teams connecting sales, offers, and execution",
      "situations where spreadsheets and email no longer support reliable job control",
    ],
    fitNot: [
      "very simple tracking with no workflow or multiple roles",
      "basic SaaS buying with no process tailoring",
      "micro processes with no real handoff between sales and delivery",
    ],
  }),
];

// AI is presented as a capability within automation delivery, not as a separate service.
export const servicePages = servicePageDefinitions.filter(
  (page) => page.translationKey !== "service-ai-automation-and-integrations",
);
