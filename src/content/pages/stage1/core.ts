// Generated content: home, process, inquiry, contract-support, and thank-you pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

function home(locale: Locale, input: {
  title: string;
  h1: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  services: string[];
  fit: string[];
  process: string[];
  outcomes: string[];
  faq: FAQItem[];
  related: string[];
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
    h1: input.h1,
    description: input.description,
    primaryQuery: isCs ? "webové aplikace na míru" : "custom web applications",
    intent: "commercial",
    hero: {
      eyebrow: isCs ? "Halatao" : "Halatao",
      title: input.heroTitle,
      subtitle: input.heroSubtitle,
      primaryCta: { label: isCs ? "Popsat projekt" : "Discuss your project", href: buildInquiryHref(locale) },
      secondaryCta: { label: isCs ? "Jak spolupráce probíhá" : "How delivery works", href: isCs ? "/cs/jak-spoluprace-probiha" : "/en/how-project-delivery-works" },
    },
    intro: input.intro,
    sections: [
      { title: isCs ? "S čím pomohu" : "What I help with", body: [isCs ? "Nejde o portfolio pro nábor. Web je postavený pro firmy, které řeší konkrétní software projekt nebo potřebují spolehlivou externí kapacitu do existujícího týmu." : "This is not a job-seeking portfolio. The site is built for companies that need a custom software partner or senior contract support inside an existing delivery setup."], bullets: input.services },
      { title: isCs ? "Pro jaké situace je spolupráce vhodná" : "What situations are a good fit", body: [isCs ? "Největší smysl má spolupráce tam, kde software řeší důležitý firemní proces a potřebujete přemýšlet nejen o kódu, ale i o provozu a dalších krocích." : "The best fit is software tied to an important business process where delivery quality, maintainability, and operational stability matter."], bullets: input.fit },
      { title: isCs ? "Jak typicky probíhá spolupráce" : "How delivery usually works", body: [isCs ? "Na začátku se potřebujeme rychle zorientovat v procesu, rozsahu a rizicích. Další práce pak běží po menších krocích s viditelným postupem a jasnými prioritami." : "The first step is understanding the process, scope, and risk. From there the work moves in smaller, visible delivery steps with clear priorities."], bullets: input.process },
      { title: isCs ? "Jaké výsledky klienti obvykle chtějí" : "What outcomes buyers usually want", body: [isCs ? "Cílem není jen dodat software. Důležité je, aby šel bezpečně provozovat a dál rozvíjet." : "The goal is not feature output alone. The result should be software that is safer to operate and easier to improve over time."], bullets: input.outcomes },
    ],
    faq: input.faq,
    related: input.related,
    fit: {
      for: input.fit,
      notFor: isCs
        ? ["náborové dotazy a job hledání", "obecné firemní weby bez aplikace", "projekty postavené jen na nejnižší ceně"]
        : ["recruiter outreach", "generic brochure websites", "lowest-cost-only projects"],
    },
    cta: isCs
      ? { label: "Nezávazně probrat spolupráci", href: "/cs/popsat-projekt", note: "Napište stručně situaci, cílový stav a omezení. Ozvu se s návrhem dalšího kroku." }
      : { label: "Explore the project fit", href: "/en/discuss-your-project", note: "Share the business context, target outcome, and current constraints." },
    seo: { title: input.title, description: input.description },
    schema: { includeProfessionalService: true, includePerson: true, includeWebSite: true, includeFaq: true },
    indexable: true,
  });
}

function simplePage(locale: Locale, input: {
  translationKey: string;
  pageType: ContentPage["pageType"];
  slug: string;
  segments: string[];
  title: string;
  h1: string;
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
  return definePage({
    translationKey: input.translationKey,
    stage: 1,
    locale,
    pageType: input.pageType,
    slug: input.slug,
    segments: input.segments,
    title: input.title,
    h1: input.h1,
    description: input.description,
    primaryQuery: input.primaryQuery,
    intent: input.pageType === "inquiry" ? "transactional" : "commercial",
    hero: {
      eyebrow: isCs ? "Halatao" : "Halatao",
      title: input.heroTitle,
      subtitle: input.heroSubtitle,
      primaryCta: { label: isCs ? "Popsat projekt" : "Discuss your project", href: buildInquiryHref(locale) },
    },
    intro: input.intro,
    sections: input.sections,
    faq: input.faq,
    related: input.related,
    fit: { for: input.fitFor, notFor: input.fitNot },
    cta: isCs
      ? { label: "Popsat projekt", href: "/cs/popsat-projekt", note: "Stačí základní kontext. Ozvu se s realistickým dalším krokem." }
      : { label: "Discuss your project", href: "/en/discuss-your-project", note: "A short project summary is enough to start the conversation." },
    seo: { title: input.title, description: input.description },
    schema: { includeFaq: input.faq.length > 0 },
    indexable: input.indexable ?? true,
  });
}

export const corePages: ContentPage[] = [
  home("cs", {
    title: "Ondřej Halata | Webové aplikace na míru a kontraktní vývoj pro firmy",
    h1: "Ahoj, jsem Ondřej",
    description: "Ondřej Halata pomáhá firmám s vývojem a dlouhodobým provozem webových aplikací, převzetím existujících systémů, automatizací a kontraktní spoluprací.",
    heroTitle: "Ahoj, jsem Ondřej",
    heroSubtitle: "Pomáhám firmám vyvíjet a dlouhodobě provozovat webové aplikace, které dávají smysl technicky i byznysově.",
    intro: [
      "Jsem full-stack vývojář se zkušeností s vývojem a provozem webových aplikací v reálném firemním prostředí.",
      "Neřeším jen funkční kód, ale i architekturu, dlouhodobou udržitelnost a provozní realitu. Část projektů stavím od nuly, část přebírám a rozvíjím v již běžících systémech.",
      "Pracuji samostatně i jako součást vývojových týmů. Největší smysl to má tam, kde aplikace řeší důležitý proces a potřebuje stabilní technické vedení.",
    ],
    services: ["Webové aplikace na míru", "Převzetí a rozvoj existující aplikace", "Integrace systémů a automatizace", "Nasazení, provoz a kontraktní spolupráce"],
    fit: ["klientské portály a business aplikace", "interní systémy pro operativu a reporting", "rozpracované nebo problematické aplikace", "procesy s ruční prací mezi více systémy"],
    process: ["rychlé zorientování v cíli a omezeních", "návrh rozumné první etapy", "průběžná realizace po menších krocích", "důraz na provoz, ne jen na demo funkcí"],
    outcomes: ["stabilnější aplikace a jasnější technický směr", "lepší kontrola nad rozsahem a prioritami", "bezpečnější převzetí nebo rozvoj systému", "software, který lze dál udržitelně rozvíjet"],
    faq: [
      { question: "Děláte i menší navazující zásahy, nebo jen velké projekty?", answer: "Obojí. Někdy dává největší smysl převzít a stabilizovat konkrétní část systému, jindy vzniká nový produkt nebo interní nástroj od nuly." },
      { question: "Je spolupráce vhodná i pro firmy, které už mají vlastní tým?", answer: "Ano. Mohu dodat samostatný workstream nebo fungovat jako seniorní kontraktor v existujícím týmu." },
      { question: "Jak rychle poznáme, jestli je projekt vhodný?", answer: "Obvykle stačí krátký popis situace, cíle a omezení. Podle toho navrhnu další krok nebo řeknu, že fit není dost silný." },
      { question: "Řešíte i provozní stránku aplikace?", answer: "Ano. U business aplikací je důležité řešit i nasazení, stabilitu, změnová rizika a dlouhodobou udržitelnost." },
    ],
    related: [
      "service-custom-web-app-development",
      "service-existing-app-takeover",
      "problem-rescue-incomplete-project",
      "problem-senior-contract-capacity",
      "inquiry",
    ],
  }),
  home("en", {
    title: "Ondřej Halata | Custom web application delivery and contract development",
    h1: "Hi, I'm Ondřej",
    description: "Ondřej Halata helps companies build and operate web applications, take over existing systems, automate workflows, and strengthen delivery with senior contract support.",
    heroTitle: "Hi, I'm Ondřej",
    heroSubtitle: "I help companies build and run web applications that make sense both technically and commercially.",
    intro: [
      "I am a full-stack developer with hands-on experience building and operating web applications in real business environments.",
      "The work is not only about shipping code. It is also about architecture, maintainability, deployment, and the reality of keeping an application useful over time.",
      "I work independently and as part of existing delivery teams, especially where a business-critical application needs safer technical ownership.",
    ],
    services: ["Custom web applications", "Existing app takeover", "Integrations and workflow automations", "Deployment, operations, and contract support"],
    fit: ["client portals and business applications", "internal tools for operations and reporting", "unfinished or inherited apps", "manual workflows split across several systems"],
    process: ["fast orientation in goals and constraints", "a realistic first delivery phase", "incremental implementation", "focus on operations, not only feature demos"],
    outcomes: ["more stable applications and clearer technical direction", "better control over scope and priorities", "safer takeover and improvement work", "software that can evolve without unnecessary friction"],
    faq: [
      { question: "Do you only take on greenfield builds?", answer: "No. Existing app takeover and structured improvement are a core part of the offer." },
      { question: "Can you join an existing team rather than run the whole project?", answer: "Yes. I can work as a senior contract developer inside an existing team or own a defined stream independently." },
      { question: "How quickly can we tell whether the project is a fit?", answer: "A concise project summary is usually enough to assess fit and suggest the next step." },
      { question: "Do you think beyond feature delivery?", answer: "Yes. Delivery decisions should support maintainability, operations, and future product movement, not only the immediate feature list." },
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
    title: "Jak spolupráce probíhá | Halatao",
    h1: "Jak probíhá spolupráce na projektu",
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
    title: "How project delivery works | Halatao",
    h1: "How project delivery usually works",
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
  simplePage("cs", {
    translationKey: "inquiry",
    pageType: "inquiry",
    slug: "popsat-projekt",
    segments: ["popsat-projekt"],
    title: "Popsat projekt | Halatao",
    h1: "Popsat projekt a probrat, jestli je spolupráce vhodná",
    description: "Pošlete stručný kontext projektu, aplikace nebo procesu. Ozvu se s návrhem dalšího kroku a s realistickým zhodnocením fitu.",
    primaryQuery: "popsat projekt",
    heroTitle: "Krátký popis situace stačí na první posouzení fitu",
    heroSubtitle: "Nemusíte mít hotové zadání. Důležité je popsat, co dnes nefunguje, co má být výsledek a jaké jsou hlavní limity projektu.",
    intro: [
      "První kontakt nemusí být složitý. Často stačí popsat, co dnes nefunguje, co potřebujete změnit a jestli jde o novou aplikaci, takeover, interní systém nebo integrace.",
      "Pokud je fit dobrý, navrhnu další krok. Pokud ne, řeknu to rovnou a nebudu zbytečně natahovat proces.",
      "Pro rychlejší posun můžete rovnou přidat i termín, velikost týmu, současný stack nebo hlavní provozní riziko.",
    ],
    sections: [
      { title: "Co je užitečné poslat", body: ["Čím konkrétnější kontext, tím přesněji lze určit další krok."], bullets: ["stručný popis situace", "cílový výsledek projektu", "časový tlak nebo důležité omezení", "informace o existující aplikaci nebo procesech"] },
      { title: "Jak odpovídám", body: ["Typicky navrhnu, zda dává smysl krátké úvodní volání, takeover audit, scope workshop nebo rovnou první implementační etapa."] },
      { title: "Kdy je spolupráce vhodná", body: ["Silný fit bývá u firemních aplikací, interních nástrojů, takeover projektů a automatizačních situací s reálným provozním dopadem."] },
    ],
    faq: [
      { question: "Mohu napsat i bez detailního zadání?", answer: "Ano. Detailní zadání není podmínkou. Důležitý je hlavně kontext a cíl." },
      { question: "Řešíte i urgentní takeover nebo stabilizaci?", answer: "Ano. U běžících aplikací je běžné, že první krok musí být rychlý a zaměřený na riziko." },
      { question: "Je možné domluvit rovnou termín hovoru?", answer: "Ano. Na stránce i po odeslání najdete možnost domluvit si termín přes Calendly." },
      { question: "Co když nakonec projekt nebude fit?", answer: "Řeknu to otevřeně. Smyslem není tlačit spolupráci za každou cenu, ale rychle zjistit, jestli dává smysl." },
    ],
    related: ["process-delivery", "service-custom-web-app-development", "service-existing-app-takeover", "service-automations-and-integrations"],
    fitFor: ["nové aplikace", "převzetí a stabilizace", "interní systémy a automatizace"],
    fitNot: ["recruiting dotazy", "obecné kariérní poptávky", "projekty bez popisu problému"],
  }),
  simplePage("en", {
    translationKey: "inquiry",
    pageType: "inquiry",
    slug: "discuss-your-project",
    segments: ["discuss-your-project"],
    title: "Discuss your project | Halatao",
    h1: "Discuss your project and assess the fit",
    description: "Send a concise overview of the project, product, or process. I will reply with the most sensible next step and an honest fit assessment.",
    primaryQuery: "discuss your project",
    heroTitle: "A short project summary is enough to assess the fit",
    heroSubtitle: "You do not need a finished specification. The most useful inputs are the current problem, the target outcome, and the main delivery constraints.",
    intro: [
      "The first contact does not need to be heavy. A practical summary of what is not working, what should change, and whether this is a new build, takeover, internal tool, or integration project is usually enough.",
      "If the fit is strong, I will suggest the next step. If it is not, I will say that directly rather than stretch out the process.",
      "If you already know the timeline, team setup, current stack, or operational risk, that context helps shape the conversation faster.",
    ],
    sections: [
      { title: "What is useful to include", body: ["The more concrete the context, the easier it is to recommend the right next step."], bullets: ["brief project situation", "target business outcome", "important deadline or constraint", "details about the current system or workflow"] },
      { title: "How I usually respond", body: ["The response may suggest an introductory call, an app takeover review, a scoping phase, or a focused implementation step depending on the situation."] },
      { title: "Where the fit is strongest", body: ["The strongest fit is business web applications, internal tools, inherited app situations, and automation or integration work with real operational importance."] },
    ],
    faq: [
      { question: "Can I reach out without a detailed spec?", answer: "Yes. The detailed spec is not the starting requirement. Business context and intended outcome matter more at first." },
      { question: "Do you handle urgent stabilisation or takeover work?", answer: "Yes. Existing-app situations often need a fast first step focused on risk reduction." },
      { question: "Can we book a call directly?", answer: "Yes. You can book a time through Calendly from this page and from the thank-you page after submission." },
      { question: "What if the project is not a good fit?", answer: "I will say so directly. The goal is clarity, not pushing an engagement that should not happen." },
    ],
    related: ["process-delivery", "service-custom-web-app-development", "service-existing-app-takeover", "service-automations-and-integrations"],
    fitFor: ["new business applications", "takeover and stabilisation work", "internal tools and automation projects"],
    fitNot: ["recruiter outreach", "general career questions", "requests with no business context"],
  }),
  simplePage("cs", {
    translationKey: "contract-support",
    pageType: "service",
    slug: "spoluprace-na-kontrakt",
    segments: ["spoluprace-na-kontrakt"],
    title: "Externí spolupráce na kontrakt | Halatao",
    h1: "Externí spolupráce na kontrakt pro firmy a produktové týmy",
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
    title: "Contract development support | Halatao",
    h1: "Contract development support for teams and companies",
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
    segments: ["popsat-projekt", "dekuji"],
    title: "Děkuji – automatizační audit",
    h1: "Děkuji – automatizační audit",
    description: "Potvrzení odeslání formuláře pro automatizační audit a navazující stránka s možností rovnou si domluvit termín úvodního hovoru.",
    primaryQuery: "děkuji za zprávu",
    heroTitle: "Zprávu mám. Další krok už může být konkrétní.",
    heroSubtitle: "Pokud chcete proces urychlit, můžete si rovnou vybrat termín krátkého úvodního hovoru.",
    intro: [
      "Děkuji za zprávu. Jakmile si projdu kontext, ozvu se s návrhem dalšího postupu nebo s upřesňující otázkou.",
      "Pokud je pro vás rychlejší domluvit si termín hovoru rovnou, můžete to udělat přes Calendly.",
    ],
    sections: [
      { title: "Co bude následovat", body: ["Zhodnotím situaci, sílu fitu a navrhnu další krok. U takeover nebo urgentních případů se soustředím hlavně na riziko a prioritu první etapy."] },
      { title: "Jak urychlit první kontakt", body: ["Pokud potřebujete řešit věc rychle, domluvte si termín hovoru. Pomůže i doplnění repo přístupů, prostředí nebo krátké technické poznámky po e-mailu."] },
      { title: "Na co se připravit", body: ["Na úvodním hovoru typicky řešíme kontext projektu, současný stav, co je největší riziko a jak vypadá realistický další krok."] },
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
    title: "Thank you for the message | Halatao",
    h1: "Thank you. I will follow up with the next step.",
    description: "Confirmation page after project inquiry submission, including the next step, the option to book an introductory call, and guidance for the first conversation.",
    primaryQuery: "thank you project inquiry",
    heroTitle: "The message is in. The next step can be concrete.",
    heroSubtitle: "If you want to move faster, you can book a short introductory call right away.",
    intro: [
      "Thank you for the message. Once I review the context, I will reply with the next step or a short follow-up question if needed.",
      "If it helps to speed things up, you can also pick a time for a short introduction call through Calendly.",
    ],
    sections: [
      { title: "What happens next", body: ["I review the situation, the likely fit, and the most useful next step. In takeover or urgent situations the first focus is usually risk and the safest first delivery phase."] },
      { title: "How to speed up the first conversation", body: ["If the topic is urgent, booking a call helps. It also helps to send access details, environment notes, or a short technical summary by email if those already exist."] },
      { title: "What we usually cover in the first call", body: ["The first call usually covers the project context, current state, main risk, and the most realistic next step from a delivery point of view."] },
    ],
    faq: [],
    related: ["inquiry", "process-delivery", "service-existing-app-takeover", "service-automations-and-integrations"],
    fitFor: ["companies that already sent project context", "buyers who want to book the first call immediately"],
    fitNot: ["indexable landing use"],
    indexable: false,
  }),
];



