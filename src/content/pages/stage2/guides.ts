// Generated content: guides for commercial evaluation. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type GuideSeed = {
  translationKey: string;
  locale: Locale;
  slug: string;
  title: string;
  h1: string;
  description: string;
  primaryQuery: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  steps: string[];
  mistakes: string[];
  outcome: string[];
  faq: FAQItem[];
  related: string[];
};

function guide(seed: GuideSeed): ContentPage {
  const isCs = seed.locale === "cs";

  return definePage({
    translationKey: seed.translationKey,
    stage: 2,
    locale: seed.locale,
    pageType: "guide",
    slug: seed.slug,
    segments: [isCs ? "pruvodce" : "guides", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "research",
    hero: {
      eyebrow: isCs ? "Průvodce" : "Guide",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: isCs ? "Probrat zadání" : "Discuss your project",
        href: buildInquiryHref(seed.locale),
      },
    },
    intro: seed.intro,
    sections: [
      {
        title: isCs ? "Doporučený postup" : "Recommended approach",
        body: [
          isCs
            ? "Dobrý výstup nevzniká z nekonečně dlouhé specifikace. Vzniká z rozumného rámce, který jde ověřit v první etapě projektu."
            : "A good outcome rarely starts with an endless specification. It starts with a practical frame that can be tested in the first delivery phase.",
        ],
        bullets: seed.steps,
      },
      {
        title: isCs ? "Časté chyby" : "Common mistakes",
        body: [
          isCs
            ? "Největší problém obvykle není málo textu v zadání, ale špatné priority a nejasný cíl první etapy."
            : "The biggest problem is usually not a lack of specification text. It is weak prioritisation and an unclear goal for the first phase.",
        ],
        bullets: seed.mistakes,
      },
      {
        title: isCs ? "Co by měl být výsledek" : "What the outcome should be",
        body: [
          isCs
            ? "Průvodce má pomoct udělat lepší projektové rozhodnutí, ne přidat další dokument bez dopadu."
            : "The guide should help you make a better project decision, not add another document with no delivery impact.",
        ],
        bullets: seed.outcome,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.outcome,
      notFor: isCs ? ["obecné kariérní rady"] : ["generic career advice"],
    },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const guidePages: ContentPage[] = [
  guide({
    translationKey: "guide-how-to-scope-a-custom-web-application",
    locale: "cs",
    slug: "jak-zadat-vyvoj-webove-aplikace",
    title: "Jak zadat vývoj webové aplikace | Bc. Ondřej Halata (halatao.cz)",
    h1: "Jak zadat vývoj webové aplikace, aby projekt dával smysl",
    description: "Praktický průvodce, jak zadat vývoj webové aplikace na míru bez zbytečného chaosu, přestřeleného scope a nejasných očekávání.",
    primaryQuery: "jak zadat vývoj webové aplikace",
    heroTitle: "Dobré zadání není román. Je to jasný rámec pro první etapu.",
    heroSubtitle: "Smyslem není popsat každé tlačítko, ale ujasnit problém, cíl, role, omezení a prioritu první verze.",
    intro: [
      "Mnoho firem odkládá start projektu, protože nemají perfektní specifikaci. Ve skutečnosti je důležitější dobrý rámec než nekonečný dokument.",
      "Když je jasný problém, cílový výsledek a hranice první etapy, lze projekt rozumně odstartovat a průběžně zpřesňovat bez ztráty kontroly.",
      "Nejčastější chyba je snaha nadiktovat všechny detaily předem bez vazby na skutečnou prioritu a provozní realitu.",
    ],
    steps: [
      "pojmenovat problém a očekávaný přínos",
      "popsat hlavní role a workflow",
      "určit, co musí řešit první verze",
      "vyjasnit technická a provozní omezení",
    ],
    mistakes: [
      "míchání nice-to-have funkcí do MVP",
      "chybějící owner na straně klienta",
      "zadání bez definice úspěchu",
      "řešení obrazovek dřív než procesu",
    ],
    outcome: [
      "realističtější scope první etapy",
      "lepší odhad času a rizik",
      "rychlejší start bez zbytečného chaosu",
      "menší riziko, že projekt řeší vedlejší věci místo jádra problému",
    ],
    faq: [
      { question: "Musíme mít wireframy?", answer: "Ne vždy. Pro start bývá důležitější proces, role a očekávaný výsledek než detailní grafické návrhy." },
      { question: "Kolik detailu je akorát?", answer: "Tolik, aby šlo navrhnout první etapu a pojmenovat rizika. Ne tolik, aby se příprava stala sama projektem." },
      { question: "Má smysl nejdřív workshop?", answer: "Často ano, zejména pokud je potřeba sladit více rolí, proces nebo očekávání uvnitř firmy." },
    ],
    related: ["service-custom-web-app-development", "comparison-custom-vs-saas", "tool-web-app-project-brief-template", "inquiry"],
  }),
  guide({
    translationKey: "guide-how-to-take-over-an-existing-app-safely",
    locale: "cs",
    slug: "jak-prevzit-existujici-aplikaci-bez-rizika",
    title: "Jak převzít existující aplikaci bez rizika | Bc. Ondřej Halata (halatao.cz)",
    h1: "Jak převzít existující aplikaci bez zbytečného rizika",
    description: "Praktický průvodce pro firmy, které přebírají existující webovou aplikaci po dodavateli, odcházejícím vývojáři nebo nejasném interním období.",
    primaryQuery: "jak převzít existující aplikaci bez rizika",
    heroTitle: "Takeover bez auditu je sázka naslepo",
    heroSubtitle: "Důležité je vědět, co běží, kde jsou rizika, jak funguje release a co si projekt může dovolit změnit jako první.",
    intro: [
      "Převzetí aplikace není jen předání repozitáře. Jde o přístup k prostředí, znalost release procesu, rizik a důležitých částí produktu.",
      "Když se takeover uspěchá, firma snadno podcení skryté závislosti a dostane se do horší situace než před změnou dodavatele.",
      "Dobrá takeover fáze vrací projektu přehled a umožní rozhodnout, co řešit hned a co až později.",
    ],
    steps: [
      "získat přístupy a mapu prostředí",
      "zjistit kritické scénáře a rizika",
      "ověřit release a monitoring",
      "prioritizovat stabilizaci před většími změnami",
    ],
    mistakes: [
      "rewrite jako první reflex",
      "převzetí bez ověření deploymentu",
      "ignorování provozních rolí a lidí, kteří systém používají",
      "neexistující plán první etapy po takeoveru",
    ],
    outcome: [
      "bezpečnější navázání vývoje",
      "menší rozhodovací nejistota",
      "realističtější backlog",
      "silnější kontrola nad provozem aplikace",
    ],
    faq: [
      { question: "Je dokumentace nutná?", answer: "Pomáhá, ale není podmínkou. Důležité je přistupovat takeoveru strukturovaně a nespoléhat se jen na ústní předání." },
      { question: "Má smysl řešit testy hned?", answer: "Ano, ale podle priority. Nejprve je potřeba chránit nejrizikovější části systému a release flow." },
      { question: "Lze takeover udělat i za běhu produkce?", answer: "Ano. To je běžný stav a právě proto je důležité držet první kroky pod kontrolou." },
    ],
    related: ["service-existing-app-takeover", "comparison-rewrite-vs-incremental-app-improvement", "tool-app-takeover-checklist", "case-study-existing-app-takeover"],
  }),
  guide({
    translationKey: "guide-when-custom-development-makes-sense",
    locale: "cs",
    slug: "kdy-dava-smysl-vyvoj-na-miru",
    title: "Kdy dává smysl vývoj na míru | Bc. Ondřej Halata (halatao.cz)",
    h1: "Kdy dává smysl vývoj na míru a kdy ne",
    description: "Praktický průvodce, kdy se firmě vyplatí vlastní vývoj webové aplikace a kdy je lepší hotový nástroj nebo menší úpravy stávajícího řešení.",
    primaryQuery: "kdy dává smysl vývoj na míru",
    heroTitle: "Vývoj na míru není prestižní volba. Má být rozumná.",
    heroSubtitle: "Smysl dává tam, kde software řeší důležitý proces a hotový nástroj by znamenal dlouhodobě dražší kompromisy.",
    intro: [
      "Vlastní vývoj není správná odpověď na každou potřebu. Pokud proces není specifický a standardní nástroj funguje dobře, custom řešení může být zbytečně drahé.",
      "Naopak tam, kde se opakují workflow výjimky, integrace, role a ruční obcházení limitů, bývá vývoj na míru ekonomicky i provozně silnější volba.",
    ],
    steps: [
      "zvážit specifika procesu a výjimek",
      "spočítat cenu obcházení omezení",
      "zohlednit potřebu integrací a vlastních rolí",
      "zjistit, kdo bude systém dlouhodobě vlastnit",
    ],
    mistakes: [
      "porovnávání jen podle startovní ceny",
      "ignorování nákladu ruční práce",
      "podcenění vendor lock-inu",
      "custom vývoj bez jasného cíle první verze",
    ],
    outcome: [
      "lepší rozhodnutí mezi SaaS a custom řešením",
      "nižší riziko přestřeleného scope",
      "jasnější business case",
      "lepší očekávání od první etapy",
    ],
    faq: [
      { question: "Je vývoj na míru vhodný i pro menší firmu?", answer: "Ano, pokud řeší opakovaný důležitý proces a hotové nástroje vytvářejí drahé kompromisy." },
      { question: "Může být první krok jen menší prototyp nebo MVP?", answer: "Ano. To je často nejrozumnější způsob, jak ověřit prioritu bez zbytečného přestřelení projektu." },
      { question: "Lze kombinovat hotový nástroj a vývoj na míru?", answer: "Ano. V praxi to bývá velmi rozumná kombinace." },
    ],
    related: ["comparison-custom-vs-saas", "service-custom-web-app-development", "use-case-b2b-client-portal", "contract-support"],
  }),
  guide({
    translationKey: "guide-how-to-scope-a-custom-web-application",
    locale: "en",
    slug: "how-to-scope-a-custom-web-application",
    title: "How to scope a custom web application | Bc. Ondřej Halata (halatao.cz)",
    h1: "How to scope a custom web application without creating chaos",
    description: "A practical guide to scoping a custom web application without overloading the first phase or starting with vague expectations.",
    primaryQuery: "how to scope a custom web application",
    heroTitle: "A good project brief is not a novel",
    heroSubtitle: "The goal is not to describe every button. The goal is to define the problem, outcome, roles, constraints, and first delivery phase clearly enough to move.",
    intro: [
      "Many teams delay a project because they do not have a perfect specification. In practice, a solid frame matters more than a huge document.",
      "If the problem, desired outcome, and first-phase boundary are clear, the project can start with much less risk and much more useful feedback.",
    ],
    steps: [
      "define the business problem and expected value",
      "describe the main roles and workflow",
      "decide what the first release must solve",
      "clarify technical and operational constraints",
    ],
    mistakes: [
      "mixing nice-to-have ideas into the first phase",
      "no owner on the client side",
      "scope with no success definition",
      "thinking about screens before the process",
    ],
    outcome: [
      "more realistic first-phase scope",
      "better early estimates",
      "faster start with less confusion",
      "lower risk of solving secondary problems first",
    ],
    faq: [
      { question: "Do we need wireframes first?", answer: "Not always. Process, roles, and desired outcome usually matter more at the start than detailed visuals." },
      { question: "How much detail is enough?", answer: "Enough to shape the first phase and identify risk. Not so much that planning becomes a project in itself." },
      { question: "Is a workshop useful before implementation?", answer: "Often yes, especially when several roles or teams need alignment on the workflow and priorities." },
    ],
    related: ["service-custom-web-app-development", "comparison-custom-vs-saas", "tool-web-app-project-brief-template", "inquiry"],
  }),
  guide({
    translationKey: "guide-how-to-take-over-an-existing-app-safely",
    locale: "en",
    slug: "how-to-take-over-an-existing-app-safely",
    title: "How to take over an existing app safely | Bc. Ondřej Halata (halatao.cz)",
    h1: "How to take over an existing app safely",
    description: "A practical guide for companies taking over an existing web application after a supplier change, team transition, or unclear technical period.",
    primaryQuery: "how to take over an existing app safely",
    heroTitle: "Taking over an app without discovery is a blind bet",
    heroSubtitle: "The important thing is understanding what runs, where the risks are, how release works, and what the first safe change should be.",
    intro: [
      "Taking over an app is more than getting the repository. It involves access to environments, release flow, operational knowledge, and the hidden assumptions around the product.",
      "When takeover is rushed, companies underestimate dependencies and end up with more risk than before the supplier change.",
    ],
    steps: [
      "secure access and environment visibility",
      "identify critical scenarios and risks",
      "verify release flow and monitoring",
      "prioritise stabilisation before bigger changes",
    ],
    mistakes: [
      "defaulting to rewrite immediately",
      "takeover without deployment validation",
      "ignoring the people who operate the system",
      "no first-phase plan after the handover",
    ],
    outcome: [
      "safer continuation of development",
      "lower decision uncertainty",
      "a more realistic backlog",
      "stronger operational control",
    ],
    faq: [
      { question: "Is documentation required?", answer: "It helps, but it is not mandatory. The important part is a structured takeover approach rather than hoping knowledge transfer will fill the gaps." },
      { question: "Should tests be addressed immediately?", answer: "Yes, in priority order. The first goal is to protect the riskiest areas and improve release confidence." },
      { question: "Can takeover happen while production stays live?", answer: "Yes. That is the normal situation and one reason the first phase needs discipline." },
    ],
    related: ["service-existing-app-takeover", "comparison-rewrite-vs-incremental-app-improvement", "tool-app-takeover-checklist", "case-study-existing-app-takeover"],
  }),
  guide({
    translationKey: "guide-when-custom-development-makes-sense",
    locale: "en",
    slug: "when-custom-development-makes-sense",
    title: "When custom development makes sense | Bc. Ondřej Halata (halatao.cz)",
    h1: "When custom development makes sense and when it does not",
    description: "A practical guide to deciding when custom software is worth the investment and when an existing tool or lighter approach is the better choice.",
    primaryQuery: "when custom development makes sense",
    heroTitle: "Custom development should be justified, not romanticised",
    heroSubtitle: "It makes sense when software supports an important process and off-the-shelf tools would create more expensive long-term compromise.",
    intro: [
      "Custom software is not the right answer to every problem. If the process is standard and an existing tool fits well, building from scratch may be unnecessary.",
      "But when the workflow is specialised, integration-heavy, or trapped in manual workarounds, custom development is often the stronger business decision.",
    ],
    steps: [
      "measure how specialised the process really is",
      "count the cost of workarounds",
      "include integration and role complexity",
      "consider long-term ownership of the system",
    ],
    mistakes: [
      "comparing options only by startup cost",
      "ignoring the cost of manual work",
      "underestimating lock-in",
      "starting custom work with no first-phase focus",
    ],
    outcome: [
      "better SaaS vs custom decisions",
      "lower risk of overscoping",
      "clearer business case",
      "better expectations for the first phase",
    ],
    faq: [
      { question: "Can custom development make sense for a smaller company too?", answer: "Yes, if it supports a repeated high-value process and standard tools force costly workarounds." },
      { question: "Can the first step be a small MVP?", answer: "Yes. That is often the most sensible way to validate priorities without overshooting the investment." },
      { question: "Can companies combine standard tools and custom software?", answer: "Yes. In practice that is often the strongest model." },
    ],
    related: ["comparison-custom-vs-saas", "service-custom-web-app-development", "use-case-b2b-client-portal", "contract-support"],
  }),
];
