// Generated content: stage 1 section hub pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type HubSeed = {
  translationKey: string;
  locale: Locale;
  slug: string;
  segment: string;
  title: string;
  breadcrumbLabel: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  overview: string;
  fit: string[];
  decision: string[];
  faq: FAQItem[];
  related: string[];
};

function hub(seed: HubSeed): ContentPage {
  const isCs = seed.locale === "cs";

  return definePage({
    translationKey: seed.translationKey,
    stage: 1,
    locale: seed.locale,
    pageType: "hub",
    slug: seed.slug,
    segments: [seed.segment],
    title: seed.title,
    breadcrumbLabel: seed.breadcrumbLabel,
    description: seed.description,
    primaryQuery: seed.breadcrumbLabel,
    intent: "commercial",
    hero: {
      eyebrow: isCs ? "Přehled sekce" : "Section overview",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: isCs ? "Popsat situaci" : "Describe situation",
        href: buildInquiryHref(seed.locale),
      },
    },
    intro: seed.intro,
    sections: [
      {
        title: isCs ? "Co v sekci najdete" : "What you will find here",
        body: [seed.overview],
      },
      {
        title: isCs ? "Kdy začít právě tady" : "When to start here",
        body: [
          isCs
            ? "Začněte zde, pokud potřebujete rychle pojmenovat svou situaci a zjistit, jaký typ pomoci nebo dalšího postupu pro ni dává smysl."
            : "Start here when you need to describe the current situation clearly and understand which type of help or next step fits it.",
        ],
        bullets: seed.fit,
      },
      {
        title: isCs ? "Jak pokračovat dál" : "How to continue",
        body: [
          isCs
            ? "Vyberte téma nejbližší tomu, co právě řešíte. U každého najdete praktické souvislosti i vhodný způsob, jak navázat."
            : "Choose the topic closest to what you are dealing with now. Each one provides practical context and a sensible way to continue.",
        ],
        bullets: seed.decision,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.fit,
      notFor: isCs ? ["pasivní procházení bez konkrétní projektové otázky"] : ["passive browsing with no concrete project question"],
    },
    cta: isCs
      ? {
          label: "Nezávazně probrat spolupráci",
          href: "/cs/kontakt",
          note: "Stačí stručně popsat projektovou situaci, cíl a omezení. Navrhnu rozumný další krok.",
        }
      : {
          label: "Explore the project fit",
          href: "/en/discuss-your-project",
          note: "A short summary of the current situation and target outcome is enough to suggest the next step.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const stage1HubPages: ContentPage[] = [
  hub({
    translationKey: "hub-services",
    locale: "cs",
    slug: "sluzby",
    segment: "sluzby",
    title: "Vývoj webů, aplikací a automatizací | Ondřej Halata",
    breadcrumbLabel: "Služby pro firemní weby, aplikace a automatizace",
    description: "Firemní weby, webové aplikace, interní systémy a automatizace od návrhu po nasazení. Vyberte službu podle toho, co má firma vyřešit.",
    heroTitle: "Tři typy řešení podle toho, co má firma změnit.",
    heroSubtitle: "Nový web pro obchodní prezentaci, aplikace pro vlastní proces nebo automatizace mezi nástroji. Každá cesta má vlastní rozsah, ale stejný důraz na návrh, realizaci a provoz.",
    intro: [
      "Web je vhodný, když je hlavním výsledkem prezentace firmy, služeb, produktů nebo obsahu. Aplikace dává smysl, když uživatelé pracují s daty, rolemi, stavy a vlastním workflow.",
      "Automatizace navazuje na situaci, kdy nástroje už existují, ale chybí mezi nimi spolehlivá návaznost a část práce se stále opakuje ručně.",
    ],
    overview: "Tři hlavní cesty se mohou v jednom projektu kombinovat. Rozdělení pomáhá určit, co je hlavním výsledkem a kde má začít první etapa.",
    fit: [
      "Webové stránky: prezentace firmy, služeb, produktů nebo obsahu.",
      "Aplikace a systémy: data, role, stavy a vlastní workflow.",
      "Automatizace: spolehlivá návaznost mezi existujícími nástroji.",
    ],
    decision: [
      "Převzetí existující aplikace po původním dodavateli nebo období bez jasné technické odpovědnosti.",
      "Interní systém pro operativu, evidenci, schvalování a reporting, které už neudrží tabulky a e-mail.",
      "Systém pro řízení poptávek a zakázek, který propojí poptávku, nabídku a realizaci.",
    ],
    faq: [
      { question: "Jak vybrat mezi webem a aplikací?", answer: "Web hlavně vysvětluje nabídku a vede návštěvníka k akci. Aplikace pracuje s přihlášenými uživateli, daty, rolemi nebo vlastním procesem. Některé projekty kombinují obojí." },
      { question: "Lze spojit aplikaci a automatizaci?", answer: "Ano. Interní systém často potřebuje integrace a automatizované kroky. Rozdělení služeb slouží hlavně k lepší orientaci, ne jako technická hranice." },
      { question: "Děláte i dlouhodobý rozvoj?", answer: "Ano. Lze se domluvit na jednorázové dodávce, navazujících etapách i dlouhodobějším rozvoji podle provozu a priorit." },
    ],
    related: [
      "service-company-websites",
      "service-custom-web-app-development",
      "service-existing-app-takeover",
      "service-internal-tools-development",
      "service-sales-and-job-tracking-system",
      "service-automations-and-integrations",
      "contract-support",
    ],
  }),
  hub({
    translationKey: "hub-services",
    locale: "en",
    slug: "services",
    segment: "services",
    title: "Services: custom apps, takeover, internal tools",
    breadcrumbLabel: "Services for companies that need to build, take over, or improve important software",
    description: "Custom web application development, app takeover, internal tools, automations, integrations, and senior contract support for practical software delivery.",
    heroTitle: "Choose the service by the delivery situation, not the buzzword",
    heroSubtitle: "A commercial overview for companies facing new product delivery, inherited-app risk, internal-tool needs, automation pressure, or the need for senior contract capacity.",
    intro: [
      "This section covers help with new delivery, taking over an existing application, and improving software the company already relies on.",
      "The services include custom web applications, internal systems, request and job management, automation, integrations, practical AI use, and senior contract support.",
    ],
    overview: "Each service explains the situations it fits, what the collaboration usually includes, and what a sensible first phase can look like.",
    fit: [
      "new business-critical software",
      "running applications after a supplier or team change",
      "internal workflows that outgrew spreadsheets and inboxes",
      "manual cross-system work slowing operations down",
      "projects missing senior technical leadership",
    ],
    decision: [
      "start with the service closest to the current situation",
      "use the related problem guidance or practical comparison when useful",
      "describe the project once the right direction is clear enough to discuss",
    ],
    faq: [
      { question: "How should I choose the right service?", answer: "Start with the strongest source of delivery pressure: new build, inherited app, internal tool, automation, or embedded senior contract support." },
      { question: "Can several service models combine?", answer: "Yes. Takeover often leads into structured improvement, internal tools often overlap with integrations, and contract support can complement both." },
      { question: "Is contract support part of the same offer?", answer: "Yes. It is a defined delivery model for teams that need direct senior capacity inside their existing setup." },
    ],
    related: [
      "service-custom-web-app-development",
      "service-existing-app-takeover",
      "service-internal-tools-development",
      "service-sales-and-job-tracking-system",
      "service-automations-and-integrations",
      "contract-support",
    ],
  }),
  hub({
    translationKey: "hub-problems",
    locale: "cs",
    slug: "problemy",
    segment: "problemy",
    title: "Projektové problémy: takeover, interní systém a integrace",
    breadcrumbLabel: "Typické projektové situace, které firmy řeší dřív než konkrétní technologii",
    description: "Přehled problémových stránek pro takeover aplikace, interní systém, integrace, záchranu rozdělaného projektu, pomalou aplikaci nebo potřebu seniorní kapacity.",
    heroTitle: "Začněte podle problému, ne podle technologie",
    heroSubtitle: "Sekce pro chvíli, kdy ještě není jasné, jaký model spolupráce nebo řešení bude správný, ale tlak v projektu už je zřejmý.",
    intro: [
      "Tato sekce pomáhá nejdřív pojmenovat situaci, její příznaky a provozní rizika. Teprve potom má smysl vybírat konkrétní službu nebo technický směr.",
      "Najdete tu běžné situace kolem převzetí aplikace, interního systému, integrací, chybějící seniorní kapacity, klientského portálu i záchrany rozdělaného projektu.",
    ],
    overview: "U každé situace najdete typické příznaky, rizika dalšího odkládání a první krok, který obvykle pomůže získat lepší přehled.",
    fit: [
      "situace, kde je nejprve potřeba srovnat problém",
      "projekty s nejasným delivery modelem",
      "firmy řešící kombinaci technického a provozního tlaku",
      "vedení a zadavatele, kteří potřebují lepší rámec před rozpočtem nebo vymezením rozsahu",
    ],
    decision: [
      "otevřete problém nejbližší aktuální realitě",
      "navazujte odpovídající službou nebo praktickým návodem",
      "pokud je situace dost konkrétní, přejděte na popis projektu",
    ],
    faq: [
      { question: "Je lepší začít problémovou nebo službovou stránkou?", answer: "Pokud si nejste jistí správným modelem spolupráce, problémová stránka bývá lepší start než služba." },
      { question: "K čemu tento přehled slouží?", answer: "Pomáhá pojmenovat reálnou projektovou situaci a vybrat vhodný další krok bez předčasného rozhodnutí o technologii." },
      { question: "Najdu odsud také vhodnou službu nebo návod?", answer: "Ano. Každé téma navazuje na nejbližší službu, relevantního průvodce a možnost popsat vlastní projekt." },
    ],
    related: [
      "problem-app-takeover",
      "problem-rescue-incomplete-project",
      "problem-slow-hard-to-maintain-app",
      "problem-senior-contract-capacity",
      "problem-client-portal",
      "problem-sales-offers-delivery-chaos",
    ],
  }),
  hub({
    translationKey: "hub-problems",
    locale: "en",
    slug: "problems",
    segment: "problems",
    title: "Project problems: inherited apps, tools, integrations",
    breadcrumbLabel: "Project situations that usually matter before the technology choice",
    description: "Overview of problem pages covering inherited app takeover, internal tools, integrations, stalled projects, weak performance, and the need for senior contract capacity.",
    heroTitle: "Start from the problem shape, not the implementation label",
    heroSubtitle: "Useful when the delivery model is still unclear but the pressure inside the project is already real.",
    intro: [
      "This section helps teams describe the situation, its symptoms, and its operational risks before choosing a service or technical direction.",
      "The section covers inherited applications, internal tools, integrations, missing senior capacity, client portals, slow products, and incomplete projects that need to be rescued.",
    ],
    overview: "Each topic explains the main symptoms, the risk of leaving the situation unresolved, and the first step that usually brings useful clarity.",
    fit: [
      "teams that need to frame the problem before choosing a supplier model",
      "projects where the delivery path is still unclear",
      "leaders and teams dealing with both technical and operational pressure",
      "companies trying to improve the decision frame before budget or scope",
    ],
    decision: [
      "open the topic closest to current reality",
      "continue with the relevant service or practical guide",
      "describe the project when the situation is concrete enough to discuss directly",
    ],
    faq: [
      { question: "Should I start here or on the services section?", answer: "Start here when the problem is clearer than the preferred delivery model." },
      { question: "What is this overview for?", answer: "It helps frame a real delivery situation and choose a sensible next step without committing to a technology too early." },
      { question: "Can I continue to a relevant service or guide?", answer: "Yes. Each topic links to the closest service, practical guide, and a way to describe your project." },
    ],
    related: [
      "problem-app-takeover",
      "problem-rescue-incomplete-project",
      "problem-slow-hard-to-maintain-app",
      "problem-senior-contract-capacity",
      "problem-client-portal",
      "problem-sales-offers-delivery-chaos",
    ],
  }),
];
