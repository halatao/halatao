// Generated content: home, process, inquiry, contract-support, and thank-you pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

function home(locale: Locale, input: {
  title: string;
  breadcrumbLabel: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  services: string[];
  fit: string[];
  process: string[];
  outcomes: string[];
  proofTitle: string;
  proofBody: string[];
  proofBullets: string[];
  engagementTitle: string;
  engagementBody: string[];
  engagementBullets: string[];
  faq: FAQItem[];
  related: string[];
  sections?: ContentPage["sections"];
  heroEyebrow?: string;
  heroPrimaryCta?: ContentPage["hero"]["primaryCta"];
  heroSecondaryCta?: ContentPage["hero"]["secondaryCta"];
  cta?: ContentPage["cta"];
  note?: string;
}): ContentPage {
  const isCs = locale === "cs";
  return definePage({
    translationKey: "home",
    stage: 1,
    locale,
    pageType: "home",
    slug: isCs ? "domov" : "home",
    segments: [],
    title: input.title,
    breadcrumbLabel: input.breadcrumbLabel,
    description: input.description,
    primaryQuery: isCs ? "Ondřej Halata weby aplikace automatizace" : "custom web applications",
    intent: "commercial",
    hero: {
      eyebrow: input.heroEyebrow ?? "Bc. Ondřej Halata",
      title: input.heroTitle,
      subtitle: input.heroSubtitle,
      primaryCta: input.heroPrimaryCta ?? { label: isCs ? "Popsat situaci" : "Describe situation", href: buildInquiryHref(locale) },
      secondaryCta: input.heroSecondaryCta ?? { label: isCs ? "Domluvit úvodní schůzku" : "Book an intro call", href: "https://calendly.com/ondrej-halata/30min" },
    },
    intro: input.intro,
    sections: input.sections ?? [
      { title: isCs ? "S čím pomohu" : "What I help with", body: isCs ? [
        "Některé firmy potřebují nový web nebo aplikaci. Jiné potřebují zjednodušit existující systém, propojit nástroje nebo omezit ruční práci.",
      ] : [
        "Some companies need a new website or application. Others need to simplify an existing system, connect tools or reduce manual work.",
      ], bullets: input.services },
      { title: isCs ? "Pro jaké situace je spolupráce vhodná" : "What situations are a good fit", body: isCs ? [
        "Spolupráce dává největší smysl tam, kde software přímo ovlivňuje provoz firmy.",
        "Nejde jen o napsání další funkce. Důležité je pochopit proces, uživatele, data, rizika a technická omezení, aby aplikace dávala smysl i po první verzi.",
      ] : [
        "The strongest fit is software that directly affects how the company operates.",
        "The work is not only about shipping another feature. It is about understanding the process, users, data, risks, and technical constraints so the application still makes sense after the first version.",
      ], bullets: input.fit },
      { title: isCs ? "Jak typicky probíhá spolupráce" : "How delivery usually works", body: isCs ? [
        "Pochopím kontext, cíle a omezení projektu. Potom navrhnu konkrétní postup, rozsah zapojení a první smysluplnou etapu.",
        "Do vývoje se zapojuji samostatně nebo jako součást týmu. Další kroky se řeší průběžně podle reality projektu, dopadu a priorit.",
      ] : [
        "I first understand the project context, goals, and constraints. Then I define the next step, scope of involvement, and first meaningful phase.",
        "I can work independently or as part of the team. The next steps are adjusted continuously based on real project needs, impact, and priorities.",
      ], bullets: input.process },
      { title: isCs ? "Jaké výsledky klienti obvykle chtějí" : "What outcomes buyers usually want", body: isCs ? [
        "Výsledkem nemá být jen další kód. Cílem je použitelný technický posun, který zlepší provoz, sníží riziko nebo umožní další rozvoj.",
        "To může znamenat použitelnou první verzi, stabilnější existující systém, méně ruční práce nebo jasnější rozhodnutí pro další etapu.",
      ] : [
        "The outcome should not be more code alone. The goal is a useful technical step that improves operations, lowers risk, or enables further development.",
        "That can mean a usable first version, a more stable existing system, less manual work, or clearer decisions for the next phase.",
      ], bullets: input.outcomes },
      { title: input.proofTitle, body: input.proofBody, bullets: input.proofBullets },
      { title: input.engagementTitle, body: input.engagementBody, bullets: input.engagementBullets },
    ],
    faq: input.faq,
    related: input.related,
    fit: {
      for: input.fit,
      notFor: isCs
        ? ["náborové dotazy a job hledání", "obecné firemní weby bez aplikace", "projekty postavené jen na nejnižší ceně"]
        : ["recruiter outreach", "generic brochure websites", "lowest-cost-only projects"],
    },
    cta: input.cta ?? (isCs
      ? { label: "Popsat situaci", href: "/cs/kontakt", note: "Stačí stručně popsat situaci. Ozvu se s návrhem dalšího postupu." }
      : { label: "Describe situation", href: "/en/discuss-your-project", note: "A short description is enough. I will suggest next steps and whether the collaboration makes sense." }),
    seo: { title: input.title, description: input.description },
    schema: { includeProfessionalService: true, includePerson: true, includeWebSite: true, includeFaq: true },
    indexable: true,
    note: input.note,
  });
}

function simplePage(locale: Locale, input: {
  translationKey: string;
  pageType: ContentPage["pageType"];
  slug: string;
  segments: string[];
  title: string;
  breadcrumbLabel: string;
  description: string;
  primaryQuery: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  sections: ContentPage["sections"];
  faq: FAQItem[];
  related: string[];
  fitFor: string[];
  fitNot: string[];
  indexable?: boolean;
}): ContentPage {
  const isCs = locale === "cs";
  const isInquiryPage = input.translationKey === "inquiry";
  return definePage({
    translationKey: input.translationKey,
    stage: 1,
    locale,
    pageType: input.pageType,
    slug: input.slug,
    segments: input.segments,
    title: input.title,
    breadcrumbLabel: input.breadcrumbLabel,
    description: input.description,
    primaryQuery: input.primaryQuery,
    intent: input.pageType === "inquiry" ? "transactional" : "commercial",
    hero: {
      eyebrow: "Bc. Ondřej Halata",
      title: input.heroTitle,
      subtitle: input.heroSubtitle,
      primaryCta: {
        label: isInquiryPage
          ? (isCs ? "Odeslat popis situace" : "Send situation description")
          : (isCs ? "Popsat situaci" : "Describe situation"),
        href: isInquiryPage ? "#project-inquiry-form" : buildInquiryHref(locale),
      },
    },
    intro: input.intro,
    sections: input.sections,
    faq: input.faq,
    related: input.related,
    fit: { for: input.fitFor, notFor: input.fitNot },
    cta: isCs
      ? { label: "Popsat situaci", href: "/cs/kontakt", note: "Stačí základní kontext. Ozvu se s realistickým dalším krokem." }
      : { label: "Describe situation", href: "/en/discuss-your-project", note: "A short project summary is enough to start the conversation." },
    seo: { title: input.title, description: input.description },
    schema: { includeFaq: input.faq.length > 0 },
    indexable: input.indexable ?? true,
  });
}

export const corePages: ContentPage[] = [
  home("cs", {
    title: "Webové aplikace, firemní weby a automatizace | Ondřej Halata",
    breadcrumbLabel: "Firemní weby, aplikace a automatizace",
    description: "Navrhuji a dodávám firemní weby, webové aplikace a automatizace, které firmám usnadňují prodej, správu důležitých procesů a každodenní práci.",
    heroTitle: "Weby, aplikace a automatizace, které firmě usnadní práci.",
    heroSubtitle: "Pomáhám firmám srozumitelně představit nabídku, dostat pořádek do důležitých procesů a omezit ruční práci mezi používanými nástroji. Projekt řešíte přímo se mnou od návrhu po spuštění.",
    heroPrimaryCta: { label: "Popsat projekt", href: "/cs/kontakt/" },
    heroSecondaryCta: { label: "Domluvit úvodní schůzku", href: "https://calendly.com/ondrej-halata/30min" },
    note: "Vlastní i klientské projekty řeším od návrhu až po uvedení do provozu.",
    intro: [
      "Pracuji na webových aplikacích, interních systémech a komerčním softwaru. Vedle vlastních a přímých klientských projektů mám zkušenost s vývojem a údržbou existujících codebase, školením uživatelů, provozem a spoluprací napříč technickými i netechnickými rolemi.",
      "Řeším frontend, backend, databáze, API, Linux, Docker a cloudový provoz. AI používám při analýzách i implementaci, ale výsledné změny kontroluji v kontextu architektury, dat a požadovaného chování.",
      "Projekt mohu dodat samostatně. Pokud rozsah vyžaduje další role, umím zapojit ověřeného vývojáře nebo projektové řízení a zůstat odpovědný za technickou část.",
    ],
    services: ["Webové stránky", "Aplikace a systémy", "Automatizace"],
    sections: [
      {
        title: "Vyberte podle toho, co dnes řešíte.",
        body: ["Každá služba začíná konkrétní situací ve firmě. Vyberte oblast, která je vaší situaci nejblíž, nebo mi ji rovnou popište."],
        bullets: ["Webové stránky", "Aplikace a systémy", "Automatizace"],
      },
      {
        title: "Různé typy práce, stejná odpovědnost za výsledek.",
        body: ["Veřejné ukázky zahrnují firemní weby, AI aplikaci, CRM i marketplace. Každý projekt vznikal s jiným cílem, ale vždy s důrazem na to, aby byl pro uživatele srozumitelný a fungoval v provozu."],
      },
      {
        title: "Poptávky, nabídky a zakázky bez tabulek a dohledávání.",
        body: ["Když obchod a realizace pracují nad stejnou zakázkou v několika nástrojích, navrhnu společnou evidenci, jasné stavy a návaznost dalších kroků."],
      },
      {
        title: "Jak spolupráce obvykle probíhá.",
        body: ["Nemusíte mít hotové technické zadání. Cílem prvního kontaktu je pochopit situaci a určit nejbližší rozumný krok."],
        bullets: [
          "Pochopím situaci: co dnes funguje, kde se ztrácí čas a čeho má projekt dosáhnout.",
          "Navrhnu rozsah: vymezíme první celek, který má praktický přínos a nepřidává zbytečnou složitost.",
          "Dodám a spustím: řešení průběžně ověřujeme, dokončíme a připravím je pro běžný provoz.",
        ],
      },
      {
        title: "Projekt neodevzdávám přes prostředníka.",
        body: [
          "Jsem Ondřej Halata, full-stack vývojář. Vlastní i klientské projekty řeším od návrhu po provoz a vedle samostatných dodávek mám zkušenost s komerčním softwarem, existujícími codebase i spoluprací v týmech.",
          "AI používám při analýze a implementaci, ale každou změnu procházím v kontextu dat, architektury a očekávaného chování. Výstup musí fungovat i mimo demonstraci.",
        ],
      },
    ],
    fit: ["firma potřebuje vlastní aplikaci pro důležitý proces", "existující systém je potřeba převzít, zjednodušit nebo dál rozvíjet", "integrace mezi systémy začínají být kritické", "tým potřebuje seniorní technickou kapacitu pro konkrétní část projektu"],
    process: ["pochopení kontextu, cílů a omezení projektu", "návrh konkrétního postupu a první etapy", "zapojení do vývoje samostatně nebo v týmu", "průběžné rozhodování podle reality projektu"],
    outcomes: ["jasnější technický směr a další kroky", "použitelná první verze nebo stabilnější existující systém", "méně ruční práce a méně ad hoc řešení", "lepší návaznost mezi procesem, daty a aplikací"],
    proofTitle: "Nejdřív pochopit situaci, potom navrhnout rozumný další krok.",
    proofBody: [
      "Spolupráce nezačíná výběrem technologie, ale pochopením toho, co má firma vyřešit, kde se ztrácí čas a jaký krok má největší smysl.",
    ],
    proofBullets: [
      "zmapování cíle, omezení, provozu a technického kontextu",
      "návrh první etapy nebo technického postupu",
      "realizace v menších navazujících krocích",
      "průběžné rozhodování podle dopadu a priorit",
    ],
    engagementTitle: "Spolupráce se nastavuje podle situace projektu, ne podle univerzální šablony.",
    engagementBody: [
      "Někdy dává smysl začít menší první etapou, která ověří scope a technický směr. Jindy je potřeba převzít existující aplikaci, doplnit seniorní kapacitu do týmu nebo řešit konkrétní integrační workstream.",
      "Důležité je, aby bylo jasné, co má první fáze přinést, kde jsou rizika a jak bude spolupráce pokračovat podle reálného stavu projektu.",
    ],
    engagementBullets: [
      "úvodní zmapování situace a návrh dalšího kroku",
      "první etapa, takeover, audit nebo kontraktní zapojení podle potřeby",
      "průběžná realizace a rozhodování nad prioritami",
      "možnost pokračovat dlouhodobě, pokud dává spolupráce smysl",
    ],
    faq: [
      { question: "Má smysl se ozvat, když ještě nemáme hotové zadání?", answer: "Ano. Stačí popsat současnou situaci, kdo bude řešení používat a co má být po dokončení jednodušší nebo možné. Z toho lze navrhnout další krok a první rozsah." },
      { question: "Dodáváte projekt opravdu sám?", answer: "U menších a středních projektů obvykle ano: od návrhu přes vývoj až po nasazení. Pokud rozsah vyžaduje více kapacity nebo specializaci, domluvíme složení malého týmu předem." },
      { question: "Pracujete i na existujících aplikacích?", answer: "Ano. Mohu aplikaci převzít, zmapovat její rizika, stabilizovat kritická místa a navázat dalším vývojem bez automatického tlaku na celkový přepis." },
      { question: "Používáte při vývoji AI?", answer: "Ano, jako nástroj pro analýzu, implementaci a kontrolu variant. Vygenerovaný kód ani technická rozhodnutí nepřebírám bez kontroly; ověřuji je proti zadání, testům a fungování zbytku aplikace." },
      { question: "Budeme závislí na vašem hostingu nebo vlastním systému?", answer: "Ne. Preferuji řešení, která lze předat včetně zdrojového kódu a provozovat na účtech klienta nebo přestěhovat k jinému dodavateli." },
    ],
    related: [
      "service-custom-web-app-development",
      "service-company-websites",
      "service-existing-app-takeover",
      "comparison-custom-vs-saas",
      "guide-how-to-scope-a-custom-web-application",
      "guide-how-to-take-over-an-existing-app-safely",
      "problem-app-takeover",
      "inquiry",
    ],
    cta: {
      label: "Popsat projekt",
      href: "/cs/kontakt/",
      note: "Stačí několik vět o současném stavu a cílovém výsledku. Ozvu se s konkrétní reakcí a návrhem dalšího kroku.",
    },
  }),
  home("en", {
    title: "Web applications for business-critical processes | Bc. Ondřej Halata",
    breadcrumbLabel: "Web applications for business-critical processes",
    description: "Senior development, takeover, integrations, automation, and ongoing improvement of web applications and internal systems for companies.",
    heroTitle: "I build websites, applications and automation for companies.",
    heroSubtitle: "I help companies simplify work, connect systems and improve software they use every day.",
    intro: [
      "I am Ondřej Halata, a developer focused on web applications and internal systems. I help companies design new solutions, take over existing applications or automate processes that currently take too much time.",
      "I join projects as a technical partner for a specific system, situation or delivery need. I work with structure, code, operations and the practical impact on people who use the system.",
      "I work on direct client and own projects, as well as contractor-based cooperation inside company and software house teams.",
    ],
    services: ["Custom applications and internal systems", "Existing application takeover and development", "Automation and system integrations"],
    fit: ["the company needs a dedicated application for an important process", "an existing system needs to be taken over, simplified, or improved", "integrations between systems are becoming critical", "the team needs senior technical capacity for a specific part of the project"],
    process: ["understand project context, goals, and constraints", "define the next step and first meaningful phase", "work independently or as part of the team", "adjust decisions based on real project needs"],
    outcomes: ["clearer technical direction and next steps", "a usable first version or a more stable existing system", "less manual work and fewer ad hoc fixes", "better alignment between process, data, and application"],
    proofTitle: "Understand the situation first, then suggest a reasonable next step.",
    proofBody: [
      "Cooperation does not start with choosing a technology, but with understanding what needs to be solved, where time is being lost and what next step makes the most sense.",
    ],
    proofBullets: [
      "map goals, constraints, operations, and technical context",
      "define the first phase or technical approach",
      "deliver in smaller connected steps",
      "adjust decisions based on impact and priorities",
    ],
    engagementTitle: "The collaboration model follows the project situation, not a universal template.",
    engagementBody: [
      "Sometimes it makes sense to start with a smaller first phase that validates scope and technical direction. In other cases, the need is to take over an existing application, add senior capacity to a team, or own a specific integration workstream.",
      "The important part is making clear what the first phase should achieve, where the risks are, and how the work should continue based on the real state of the project.",
    ],
    engagementBullets: [
      "initial mapping of the situation and proposed next step",
      "first phase, takeover, audit, or contract involvement depending on need",
      "ongoing implementation and priority decisions",
      "option to continue long-term when the collaboration makes sense",
    ],
    faq: [
      { question: "Can you work with companies that already have a team?", answer: "Yes. I can own a separate workstream, add senior capacity, or work as a contractor inside an existing team." },
      { question: "Does it make sense to reach out if we do not know the exact scope yet?", answer: "Yes. That is often the right moment to map the situation, risks, and first practical step instead of producing a large estimate too early." },
      { question: "Do you work on new projects or existing applications?", answer: "Both. For new projects I help define the first version, data model, user roles, and process fit. For existing applications I work on takeover, stabilisation, simplification, and further development." },
      { question: "I am not sure whether I need a website, an application or automation. Does it make sense to reach out?", answer: "Yes. It is often enough to briefly describe what you currently handle manually, in spreadsheets or in a system that no longer works well. Based on that, I can suggest whether a small change, a new website, an internal application, automation or a short analysis makes the most sense." },
    ],
    related: [
      "service-custom-web-app-development",
      "service-existing-app-takeover",
      "problem-rescue-incomplete-project",
      "problem-senior-contract-capacity",
      "inquiry",
    ],
  }),
  simplePage("cs", {
    translationKey: "process-delivery",
    pageType: "process",
    slug: "jak-spoluprace-probiha",
    segments: ["jak-spoluprace-probiha"],
    title: "Jak spolupráce probíhá | Bc. Ondřej Halata",
    breadcrumbLabel: "Jak probíhá spolupráce na projektu",
    description: "Přehled spolupráce od prvního kontaktu přes návrh první etapy až po realizaci a další rozvoj webové aplikace nebo interního systému.",
    primaryQuery: "jak spolupráce probíhá",
    heroTitle: "Jasný postup bez zbytečné procesní omáčky",
    heroSubtitle: "Rychlé zorientování, rozumná první etapa, průběžná realizace a otevřené rozhodování nad tím, co má skutečný dopad.",
    intro: [
      "Na začátku nepotřebujete perfektní specifikaci. Potřebujeme pochopit situaci, co dnes bolí, co má být výsledek a jaká jsou technická nebo provozní omezení.",
      "Z toho vznikne návrh první etapy, která má přinést konkrétní posun. U běžících aplikací často začínáme mapováním a stabilizací. U nových projektů rozumným MVP.",
      "Další spolupráce pak běží po menších krocích s průběžným rozhodováním, ne stylem velkého projektu naslepo.",
    ],
    sections: [
      { title: "1. Úvodní orientace", body: ["Projdeme kontext, cíle, rizika, současný stav a očekávání. Pokud projekt nedává smysl, je lepší si to říct hned."], bullets: ["jaký problém řešíte", "co už existuje", "co je kritické pro provoz", "jaký je realistický další krok"] },
      { title: "2. Návrh první etapy", body: ["Výstupem má být konkrétní a obhajitelný další krok, ne jen sběr požadavků. U větších projektů bývá první etapa schválně užší, aby šla rychle ověřit v praxi."] },
      { title: "3. Realizace a průběžné rozhodování", body: ["Preferuji menší iterace, viditelný postup a průběžné upřesňování podle reality projektu. Klient tak nečeká dlouho na zpětnou vazbu a zároveň se lépe řídí riziko."] },
      { title: "4. Další rozvoj", body: ["Po spuštění nebo stabilizaci může spolupráce pokračovat dalšími funkcemi, technickým dluhem, výkonem nebo podporou interního týmu."] },
    ],
    faq: [
      { question: "Kolik času zabere úvodní zorientování?", answer: "Záleží na složitosti projektu, ale cílem je dostat se rychle k rozhodnutí o další etapě, ne zbytečně natahovat discovery." },
      { question: "Musí být scope pevně uzavřený od začátku?", answer: "Ne vždy. U většiny software projektů je lepší mít pevný cíl první etapy a nechat prostor pro upřesnění detailů podle zjištění." },
      { question: "Jak řešíte změny během spolupráce?", answer: "Změny jsou normální, pokud jsou průběžně vyhodnocované proti cíli projektu, dopadu a prioritám." },
      { question: "Je možné začít auditní nebo takeover fází?", answer: "Ano. U existujících aplikací je to často nejlepší způsob, jak snížit riziko dalšího vývoje." },
    ],
    related: ["service-custom-web-app-development", "service-existing-app-takeover", "inquiry", "contract-support"],
    fitFor: ["nové projekty i takeover situace", "firmy, které chtějí viditelný průběh a realistické kroky", "týmy, které potřebují seniorní technický pohled"],
    fitNot: ["projekty bez rozhodovatele", "zadání bez ochoty upřesňovat priority", "čistě anonymní kapacitní bodyshopping"],
  }),
  simplePage("en", {
    translationKey: "process-delivery",
    pageType: "process",
    slug: "how-project-delivery-works",
    segments: ["how-project-delivery-works"],
    title: "How project delivery works | Bc. Ondřej Halata",
    breadcrumbLabel: "How project delivery usually works",
    description: "A practical overview of how I approach custom software work, from the first conversation through delivery phases and ongoing improvement.",
    primaryQuery: "how project delivery works",
    heroTitle: "Clear delivery structure without agency theatre",
    heroSubtitle: "Fast orientation, a realistic first phase, visible progress, and decisions tied to actual business impact.",
    intro: [
      "You do not need a perfect specification to start the conversation. What matters first is the business situation, the desired outcome, the current system reality, and the constraints around delivery.",
      "From that, we shape the first phase. In existing apps this often means discovery and stabilisation. In greenfield work it usually means a realistic MVP or first workflow release.",
      "The following work moves in smaller steps with visible progress and room for informed decisions instead of a large opaque build cycle.",
    ],
    sections: [
      { title: "1. Context and risk review", body: ["We look at the current situation, goals, constraints, risks, and the practical shape of the problem. If the fit is weak, it is better to know early."], bullets: ["business goal", "current stack or process", "operational risk", "first meaningful next step"] },
      { title: "2. First delivery phase", body: ["The output should be a concrete next phase with real value, not an endless requirements bucket. Larger projects usually benefit from a narrower first release."] },
      { title: "3. Implementation with visible checkpoints", body: ["I prefer smaller delivery steps and regular decision points so the buyer sees progress and risk stays manageable."] },
      { title: "4. Improvement after release", body: ["That can include further features, performance work, technical debt reduction, operational hardening, or support for the internal team."] },
    ],
    faq: [
      { question: "How long does the initial discovery usually take?", answer: "It depends on the project, but the goal is to reach a practical next-step decision quickly rather than drag out discovery for its own sake." },
      { question: "Does the scope have to be fully fixed from the start?", answer: "Not always. For most software work it is better to lock the objective of the first phase and refine detail with better information as the project moves." },
      { question: "How do you handle change during the project?", answer: "Change is normal. The important thing is to assess it against business value, risk, and the purpose of the current phase." },
      { question: "Can the work start with an audit or takeover phase?", answer: "Yes. For existing applications that is often the safest way to reduce risk before larger delivery decisions." },
    ],
    related: ["service-custom-web-app-development", "service-existing-app-takeover", "inquiry", "contract-support"],
    fitFor: ["new projects and inherited-app situations", "buyers who want visible progress and practical decisions", "teams that need senior technical judgement"],
    fitNot: ["projects with no decision-maker", "work with no willingness to prioritise", "anonymous commodity staffing requests"],
  }),
  simplePage("en", {
    translationKey: "inquiry",
    pageType: "inquiry",
    slug: "discuss-your-project",
    segments: ["discuss-your-project"],
    title: "Describe situation | Bc. Ondřej Halata",
    breadcrumbLabel: "Describe the situation and discuss the next step",
    description: "Send a concise overview of the project, product, or process. I will reply with the most sensible next step and an honest fit assessment.",
    primaryQuery: "discuss your project",
    heroTitle: "Briefly describe what you need to solve",
    heroSubtitle: "You do not need a complete specification. A few sentences about what does not work today, what you want to change and what result you expect are enough.",
    intro: [
      "A short note is enough: what is not working today, what it affects, and what should change.",
      "Based on that, I will suggest a reasonable next step. It can be a small change, a new website, an application, automation, takeover of an existing solution or a short technical analysis.",
    ],
    sections: [
      { title: "What is useful to include", body: ["The more concrete the context, the easier it is to recommend the right next step."], bullets: ["brief project situation", "target business outcome", "important deadline or constraint", "details about the current system or workflow"] },
      { title: "How I usually respond", body: ["The response may suggest an introductory call, an app takeover review, a scoping phase, or a focused implementation step depending on the situation."] },
      { title: "Where the fit is strongest", body: ["The strongest fit is business web applications, internal tools, inherited app situations, and automation or integration work with real operational importance."] },
    ],
    faq: [
      { question: "Can I reach out without a detailed specification?", answer: "Yes. Briefly describe the situation, what does not work today and what result you expect. If needed, I will ask for more details." },
      { question: "Do you handle urgent takeover or stabilization?", answer: "Yes, but for existing systems it is important to quickly understand the current state, risks and priorities. Based on that, I will suggest the first reasonable step." },
      { question: "Can we schedule a call directly?", answer: "Yes. If a short call is faster for you, you can book an intro meeting or send me brief context first." },
      { question: "What if the project is not a fit in the end?", answer: "I will say it directly. If cooperation does not make sense, I will not unnecessarily prolong the process." },
    ],
    related: ["process-delivery", "service-custom-web-app-development", "service-existing-app-takeover", "service-automations-and-integrations"],
    fitFor: ["new website, application or internal system", "changes and improvement of an existing solution", "automation of manual work or tool integrations", "takeover, stabilization or technical assessment of a system"],
    fitNot: ["pure template websites without individual requirements", "one-off small tasks without broader context", "projects without a clear goal or owner"],
  }),
  simplePage("cs", {
    translationKey: "contract-support",
    pageType: "service",
    slug: "spoluprace-na-kontrakt",
    segments: ["spoluprace-na-kontrakt"],
    title: "Externí spolupráce na kontrakt | Bc. Ondřej Halata",
    breadcrumbLabel: "Externí spolupráce na kontrakt pro firmy a produktové týmy",
    description: "Seniorní kontraktní spolupráce pro firmy a týmy, které potřebují posílit vývoj, takeover, architekturu nebo delivery v důležité webové aplikaci.",
    primaryQuery: "externí spolupráce na kontrakt",
    heroTitle: "Když tým potřebuje zkušenější kapacitu, ne dalšího juniora na backlog",
    heroSubtitle: "Vhodné pro firmy, které mají vlastní tým nebo produkt, ale potřebují převzít konkrétní technickou oblast, zrychlit delivery nebo stabilizovat problémový projekt.",
    intro: [
      "Ne každá spolupráce musí být čistě dodavatelský model. Často dává největší smysl zapojit se jako seniorní kontraktor do existujícího týmu a převzít konkrétní zodpovědnost.",
      "To může znamenat převzetí části aplikace, návrh architektury, stabilizaci problémové oblasti, vedení implementace nebo dočasné doplnění týmu v klíčové fázi projektu.",
      "Smyslem není prodávat hodinovou kapacitu bez kontextu, ale skutečně pomoct projektu posunout se dál.",
    ],
    sections: [
      { title: "Kdy kontraktní spolupráce dává smysl", body: ["Typicky ve chvíli, kdy tým potřebuje rychle doplnit seniornější vývoj, technické vedení nebo takeover konkrétní části systému."], bullets: ["dočasné posílení delivery", "převzetí odpovědnosti za konkrétní oblast", "stabilizace po odchodu člověka", "podpora při technickém rozhodování"] },
      { title: "Jaký typ přínosu obvykle dodávám", body: ["Kromě implementace jde často i o návrh, prioritizaci, zjednodušení technických rozhodnutí a lepší propojení mezi technikou a business potřebou."] },
      { title: "Jak spolupráce funguje v praxi", body: ["Spolupráci lze nastavit jako pravidelnou kapacitu i jako jasně vymezený workstream. Důležité je, aby byl známý cíl, odpovědnost a způsob spolupráce s interním týmem."] },
      { title: "Jak vypadá rozumný první krok", body: ["Na začátku potřebujeme rychle vyjasnit, kde přesně chybí seniorní ownership, jakou část projektu má smysl převzít a podle čeho poznáme, že první fáze přinesla reálný posun."] },
    ],
    faq: [
      { question: "Je to vhodné i pro menší tým?", answer: "Ano, pokud je potřeba rychle doplnit zkušenost, převzít problémovou oblast nebo dodat projekt v citlivé fázi." },
      { question: "Umíte fungovat přímo uvnitř existujícího delivery procesu?", answer: "Ano. Běžně navazuji na existující repo, ticketing, release proces i týmovou komunikaci." },
      { question: "Musí jít o dlouhodobý kontrakt?", answer: "Nemusí. Někdy stačí několik týdnů na takeover, stabilizaci nebo rozjezd další etapy." },
      { question: "Je to totéž jako agenturní dodávka?", answer: "Ne. Smyslem je osobní seniorní zapojení do konkrétní projektové situace, ne anonymní přeposílání kapacity." },
    ],
    related: ["comparison-contractor-vs-agency", "problem-senior-contract-capacity", "guide-when-project-needs-senior-contract-support", "inquiry"],
    fitFor: ["firmy s vlastním produktem nebo týmem", "projekty, které potřebují seniornější technickou oporu", "situace s tlakem na rychlé navázání"],
    fitNot: ["čistě náborová poptávka", "bodyshopping bez kontextu projektu", "požadavek na plně agenturní model"],
  }),
  simplePage("en", {
    translationKey: "contract-support",
    pageType: "service",
    slug: "contract-development-support",
    segments: ["contract-development-support"],
    title: "Contract development support | Bc. Ondřej Halata",
    breadcrumbLabel: "Contract development support for teams and companies",
    description: "Senior contract development support for companies that need stronger execution, takeover capability, architecture input, or delivery ownership inside an existing product team.",
    primaryQuery: "contract development support",
    heroTitle: "When the team needs experienced delivery capacity, not another generic pair of hands",
    heroSubtitle: "Useful for companies with an existing product or team that need defined technical ownership, faster delivery, or support in a difficult phase of the project.",
    intro: [
      "Not every engagement has to be a supplier-led build. In many cases the best fit is joining the existing team as a senior contract developer with ownership of a defined technical area.",
      "That might mean taking over a subsystem, shaping architecture, stabilising a problem area, leading implementation of a workstream, or helping the team through a critical delivery phase.",
      "The point is not selling undirected hours. The point is moving an important project forward.",
    ],
    sections: [
      { title: "Where contract support makes sense", body: ["This model is strongest when a team needs experienced execution, technical leadership, or a safe handover in a time-sensitive situation."], bullets: ["temporary delivery reinforcement", "ownership of a defined technical area", "support after a key team change", "senior technical judgement in delivery"] },
      { title: "What value the engagement should add", body: ["Beyond implementation, the role often includes framing technical decisions, simplifying execution, and connecting engineering work to business needs."] },
      { title: "How the collaboration is structured", body: ["The setup can be a steady capacity commitment or a clearly bounded workstream. What matters is explicit ownership, clear goals, and a good fit with the internal team process."] },
      { title: "What a sensible first step looks like", body: ["The first step is clarifying where senior ownership is actually missing, which part of the project should be taken over, and how the first phase will prove real delivery progress."] },
    ],
    faq: [
      { question: "Is this suitable for smaller teams too?", answer: "Yes, if the team needs to add experience quickly, take over a risky area, or get through an important delivery phase with more confidence." },
      { question: "Can you work directly inside an existing process?", answer: "Yes. I normally work with the existing repository, ticketing, release flow, and team communication rather than requiring a parallel setup." },
      { question: "Does it have to be a long contract?", answer: "No. Some engagements are shorter and focused on takeover, stabilisation, or helping a specific phase land well." },
      { question: "How is this different from an agency model?", answer: "The point is direct senior involvement in a real project situation rather than anonymous capacity reselling." },
    ],
    related: ["comparison-contractor-vs-agency", "problem-senior-contract-capacity", "guide-when-project-needs-senior-contract-support", "inquiry"],
    fitFor: ["companies with an existing product or engineering team", "projects that need senior technical reinforcement", "delivery situations with time pressure or handover risk"],
    fitNot: ["recruiter outreach", "context-free body shopping", "buyers looking for a large agency delivery model"],
  }),
  simplePage("cs", {
    translationKey: "thank-you",
    pageType: "inquiry",
    slug: "dekuji",
    segments: ["kontakt", "dekuji"],
    title: "Děkuji, zprávu mám | Bc. Ondřej Halata",
    breadcrumbLabel: "Děkuji, zprávu mám.",
    description: "Potvrzení odeslání popisu situace s informací, že navrhnu další rozumný krok a případně se doptám na potřebné detaily.",
    primaryQuery: "děkuji za zprávu",
    heroTitle: "Děkuji, zprávu mám.",
    heroSubtitle: "Ozvu se s návrhem dalšího rozumného kroku. Pokud bude potřeba, doptám se na detaily.",
    intro: [
      "Ozvu se s návrhem dalšího rozumného kroku. Pokud bude potřeba, doptám se na detaily.",
      "Pokud je pro vás rychlejší krátký hovor, můžete si mezitím naplánovat úvodní schůzku.",
    ],
    sections: [
      { title: "Co bude následovat", body: ["Projdu si popsanou situaci, očekávaný výsledek a navrhnu další rozumný krok."] },
      { title: "Jak urychlit první kontakt", body: ["Pokud potřebujete věc probrat rychleji, můžete si rovnou naplánovat úvodní schůzku."] },
      { title: "Na co se připravit", body: ["Pokud bude potřeba hovor, projdeme hlavně současný stav, cíl a nejbližší praktický krok."] },
    ],
    faq: [],
    related: ["inquiry", "process-delivery", "service-existing-app-takeover", "service-automations-and-integrations"],
    fitFor: ["firmy, které už poslaly první kontext", "projekty s potřebou rychlého úvodního hovoru"],
    fitNot: ["indexační landing page"],
    indexable: false,
  }),
  simplePage("en", {
    translationKey: "thank-you",
    pageType: "inquiry",
    slug: "thank-you",
    segments: ["discuss-your-project", "thank-you"],
    title: "Thank you, I have received your message | Bc. Ondřej Halata",
    breadcrumbLabel: "Thank you, I have received your message.",
    description: "Confirmation page after situation description submission, including the next reasonable step.",
    primaryQuery: "thank you project inquiry",
    heroTitle: "Thank you, I have received your message.",
    heroSubtitle: "I will get back to you with a reasonable next step. If needed, I will ask for more details.",
    intro: [
      "I will get back to you with a reasonable next step. If needed, I will ask for more details.",
      "If a short call is faster for you, you can book an intro meeting in the meantime.",
    ],
    sections: [
      { title: "What happens next", body: ["I will review the situation, the expected outcome and suggest a reasonable next step."] },
      { title: "How to speed up the first conversation", body: ["If you need to discuss the topic faster, you can book a short intro call directly."] },
      { title: "What we usually cover in the first call", body: ["If a call is needed, we usually cover the current state, the goal and the nearest practical next step."] },
    ],
    faq: [],
    related: ["inquiry", "process-delivery", "service-existing-app-takeover", "service-automations-and-integrations"],
    fitFor: ["companies that already sent project context", "buyers who want to book the first call immediately"],
    fitNot: ["indexable landing use"],
    indexable: false,
  }),
  definePage({
    translationKey: "about",
    translationAvailability: "optional",
    stage: 1,
    locale: "cs",
    pageType: "about",
    slug: "o-mne",
    segments: ["o-mne"],
    title: "O mně | Full-stack vývojář pro weby, aplikace a automatizace | Ondřej Halata",
    breadcrumbLabel: "O mně",
    description: "Poznejte Ondřeje Halatu, full-stack vývojáře pro firemní weby, aplikace a automatizace. Projekty řeší od návrhu a vývoje až po uvedení do provozu.",
    primaryQuery: "full-stack vývojář Ondřej Halata",
    intent: "commercial",
    hero: {
      eyebrow: "O mně",
      title: "Jsem Ondřej Halata, full-stack vývojář.",
      subtitle: "Navrhuji, vyvíjím a provozuji firemní weby, aplikace a automatizace. Pracuji přímo s klienty i jako součást vývojových týmů.",
      primaryCta: { label: "Popsat projekt", href: "/cs/kontakt/" },
      secondaryCta: { label: "Domluvit úvodní schůzku", href: "https://calendly.com/ondrej-halata/30min" },
    },
    intro: [
      "Vlastní a klientské projekty stavím od nuly: od struktury a prvního návrhu přes frontend, backend a data až po nasazení a běžný provoz.",
      "Vedle samostatných dodávek mám zkušenost s komerčními aplikacemi, interními systémy a existujícími codebase. Řešil jsem databáze, migrace, provozní problémy, školení i komunikaci s lidmi, kteří software skutečně používají.",
    ],
    sections: [
      {
        title: "Vývoj v celém kontextu projektu",
        body: ["Nejsem zaměřený jen na jednu vrstvu aplikace. Potřebuji rozumět tomu, proč řešení vzniká, kdo s ním bude pracovat, jaká data zpracovává a co bude potřeba pro jeho spolehlivý provoz."],
        bullets: ["návrh produktu a uživatelských cest", "frontend, backend, databáze a integrace", "Linux, Docker, cloudové nasazení a provoz"],
      },
      {
        title: "Projekty, za kterými stojím",
        body: ["Veřejné reference níže jsem navrhl, realizoval a uvedl do provozu. Ukazují různé části mé práce: vlastní digitální produkt, CRM pro konkrétní obor i marketplace s uživateli, nabídkami a správou obsahu."],
      },
      {
        title: "AI používám při práci, ne místo kontroly",
        body: ["AI mi pomáhá při analýze, návrhu i implementaci a používám ji také při tvorbě vlastních nástrojů. Každou změnu ale procházím v kontextu zadání, dat, architektury a očekávaného chování produktu."],
        bullets: ["rychleji připravím a porovnám možné varianty", "kontroluji změny před jejich zařazením do projektu", "za výsledné řešení a jeho chování odpovídám já"],
      },
    ],
    faq: [],
    related: ["references", "service-company-websites", "service-custom-web-app-development", "inquiry"],
    fit: {
      for: ["firmy, které hledají přímého technického partnera", "projekty, kde je důležitý návrh i vlastní realizace", "týmy, které potřebují převzít vymezenou technickou oblast"],
      notFor: ["anonymní poptávky bez kontextu", "projekty postavené pouze na nejnižší ceně"],
    },
    cta: { label: "Popsat projekt", href: "/cs/kontakt/", note: "Stačí krátce popsat současnou situaci a očekávaný výsledek." },
    seo: {
      title: "O mně | Full-stack vývojář pro weby, aplikace a automatizace | Ondřej Halata",
      description: "Poznejte Ondřeje Halatu, full-stack vývojáře pro firemní weby, aplikace a automatizace. Projekty řeší od návrhu a vývoje až po uvedení do provozu.",
    },
    schema: { includePerson: true, includeProfessionalService: true },
    indexable: true,
  }),
  definePage({
    translationKey: "inquiry",
    stage: 1,
    locale: "cs",
    pageType: "contact",
    slug: "kontakt",
    segments: ["kontakt"],
    title: "Kontakt a popis projektu | Weby, aplikace a automatizace | Ondřej Halata",
    breadcrumbLabel: "Kontakt",
    description: "Popište stručně projekt nebo situaci, zavolejte či si rezervujte úvodní schůzku s Ondřejem Halatou. Hotové technické zadání nepotřebujete.",
    primaryQuery: "kontakt vývojář webové aplikace",
    intent: "transactional",
    hero: {
      eyebrow: "Kontakt",
      title: "Popište, co potřebujete vyřešit.",
      subtitle: "Nemusíte připravovat technické zadání. Stačí několik vět o současném stavu a výsledku, ke kterému se chcete dostat.",
      primaryCta: { label: "Popsat projekt", href: "#contact-form" },
    },
    intro: [
      "Napište klidně jen stručně, co dnes nefunguje nebo co se má změnit.",
      "Podle toho navrhnu rozumný další krok.",
    ],
    sections: [
      { title: "Co je užitečné poslat", body: ["Čím konkrétnější kontext, tím přesněji lze určit další krok."], bullets: ["stručný popis situace", "cílový výsledek projektu", "časový tlak nebo důležité omezení", "informace o existující aplikaci nebo procesech"] },
      { title: "Co bude následovat", body: ["Ozvu se s návrhem dalšího kroku. Podle situace to může být krátký hovor, rychlé technické posouzení nebo rovnou vymezení první části realizace."] },
      { title: "Kdy je spolupráce vhodná", body: ["Nejčastěji pomáhám tam, kde má nový web, aplikace nebo propojení nástrojů zjednodušit konkrétní práci firmy, případně převzít řešení, které je potřeba stabilizovat a dál rozvíjet."] },
    ],
    faq: [
      { question: "Mohu napsat i bez detailního zadání?", answer: "Ano. Stačí stručně popsat situaci, co dnes nefunguje a jaký výsledek očekáváte. Pokud bude potřeba, doptám se na detaily." },
      { question: "Řešíte i urgentní takeover nebo stabilizaci?", answer: "Ano, ale u existujících systémů je nejdřív potřeba rychle pochopit stav, rizika a priority. Podle toho navrhnu první rozumný krok." },
      { question: "Je možné domluvit rovnou termín hovoru?", answer: "Ano. Pokud je pro vás rychlejší krátký hovor, můžete si naplánovat úvodní schůzku nebo mi nejdřív poslat stručný kontext." },
      { question: "Co když nakonec projekt nebude fit?", answer: "Řeknu to rovnou. Pokud spolupráce nebude dávat smysl, nebudu proces zbytečně natahovat." },
    ],
    related: ["service-company-websites", "service-custom-web-app-development", "service-automations-and-integrations", "process-delivery"],
    fit: {
      for: ["nový web, aplikace nebo interní systém", "úpravy a rozvoj existujícího řešení", "automatizace ruční práce nebo propojení nástrojů", "převzetí, stabilizace nebo technické posouzení systému"],
      notFor: ["čistě šablonové weby bez individuálního zadání", "jednorázové drobnosti bez širšího kontextu", "projekty bez jasného cíle nebo vlastníka"],
    },
    cta: { label: "Popsat projekt", href: "#contact-form", note: "Napište několik vět. Odpovím s dalším rozumným krokem." },
    seo: {
      title: "Kontakt a popis projektu | Weby, aplikace a automatizace | Ondřej Halata",
      description: "Popište stručně projekt nebo situaci, zavolejte či si rezervujte úvodní schůzku s Ondřejem Halatou. Hotové technické zadání nepotřebujete.",
    },
    schema: { includeProfessionalService: true },
    indexable: true,
  }),
];
