// Generated content: comparison pages for buying-stage evaluation. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type ComparisonSeed = {
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
  optionA: string;
  optionB: string;
  optionAText: string;
  optionBText: string;
  criteria: string[];
  verdict: string;
  faq: FAQItem[];
  related: string[];
};

function comparison(seed: ComparisonSeed): ContentPage {
  const isCs = seed.locale === "cs";
  return definePage({
    translationKey: seed.translationKey,
    stage: 2,
    locale: seed.locale,
    pageType: "comparison",
    slug: seed.slug,
    segments: [isCs ? "srovnani" : "comparisons", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "decision",
    hero: {
      eyebrow: isCs ? "Srovnání" : "Comparison",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: { label: isCs ? "Probrat zadání" : "Discuss your project", href: buildInquiryHref(seed.locale) },
    },
    intro: seed.intro,
    sections: [
      { title: seed.optionA, body: [seed.optionAText] },
      { title: seed.optionB, body: [seed.optionBText] },
      { title: isCs ? "Podle čeho rozhodovat" : "How to decide", body: [isCs ? "Rozhodnutí by nemělo stát jen na ceně nebo technologické preferenci. Důležitý je dopad na provoz, rychlost změn a dlouhodobé náklady." : "The decision should not be based only on price or technology taste. What matters is operational fit, change speed, and long-term cost."], bullets: seed.criteria },
      { title: isCs ? "Praktický závěr" : "Practical conclusion", body: [seed.verdict] },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: {
      for: seed.criteria,
      notFor: isCs ? ["teoretické technologické debaty bez business cíle"] : ["abstract technology debates with no business context"],
    },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const comparisonPages: ContentPage[] = [
  comparison({
    translationKey: "comparison-custom-vs-saas",
    locale: "cs",
    slug: "vyvoj-na-miru-vs-saas",
    title: "Vývoj na míru vs SaaS | Halatao",
    h1: "Vývoj na míru vs SaaS: kdy dává co větší smysl",
    description: "Praktické srovnání vývoje aplikace na míru a hotového SaaS nástroje pro firmy, které řeší interní procesy, workflow nebo klientský portál.",
    primaryQuery: "vývoj na míru vs saas",
    heroTitle: "Nejde o ideologii. Jde o to, kde budou kompromisy levnější.",
    heroSubtitle: "SaaS je někdy správná volba. Jindy jen oddaluje problém a vytváří drahé obcházení omezení.",
    intro: [
      "SaaS nástroj bývá rychlejší start a menší počáteční investice. Vývoj na míru dává smysl tehdy, když by univerzální nástroj nutil firmu kroutit vlastní procesy.",
      "Rozhodnutí není jen technické. Je hlavně provozní a ekonomické: kolik stojí obcházení omezení, ruční práce a ztracená flexibilita.",
    ],
    optionA: "Kdy je lepší SaaS",
    optionB: "Kdy dává větší smysl vývoj na míru",
    optionAText: "SaaS je vhodný tam, kde proces není zásadně odlišný, tým potřebuje začít rychle a nástroj pokrývá většinu potřeb bez složitého obcházení nebo drahých doplňků.",
    optionBText: "Vývoj na míru je lepší ve chvíli, kdy firma potřebuje vlastní logiku, více rolí, workflow, integrace nebo dlouhodobou kontrolu nad důležitým procesem.",
    criteria: ["specifičnost procesu", "náklady na obcházení omezení", "potřeba integrací a vlastních rolí", "dlouhodobá kontrola nad produktem"],
    verdict: "Pokud je software přímo součástí provozně důležitého procesu, bývá vývoj na míru často rozumnější než dlouhé obcházení SaaS limitů. Pokud je potřeba standardní a rychlá, SaaS může být lepší start.",
    faq: [
      { question: "Je SaaS vždy levnější?", answer: "Ne. Nízký start může být vykoupený vyšší cenou za doplňky, ruční práci, integrace a budoucí omezení." },
      { question: "Má smysl začít SaaSem a později přejít?", answer: "Někdy ano, ale je dobré vědět, co vás pozdější přechod bude stát a jak moc si tím zamknete data nebo proces." },
      { question: "Kdy je custom development zbytečně brzy?", answer: "Když firma ještě neví, jak přesně bude proces vypadat, a standardní nástroj pokryje většinu práce bez větších kompromisů." },
      { question: "Lze kombinovat SaaS a vlastní vývoj?", answer: "Ano. Často je rozumné nechat standardní části v hotovém nástroji a vlastní logiku řešit na míru kolem něj." },
    ],
    related: ["service-custom-web-app-development", "service-internal-tools-development", "guide-when-internal-tool-better-than-saas", "use-case-b2b-client-portal", "inquiry"],
  }),
  comparison({
    translationKey: "comparison-contractor-vs-agency",
    locale: "cs",
    slug: "externi-vyvojar-vs-agentura",
    title: "Externí vývojář vs agentura | Halatao",
    h1: "Externí vývojář vs agentura: co je pro projekt vhodnější",
    description: "Srovnání externího seniorního vývojáře a agenturní dodávky pro firmy, které řeší webovou aplikaci, takeover nebo interní systém.",
    primaryQuery: "externí vývojář vs agentura",
    heroTitle: "Rozhodnutí není o velikosti dodavatele, ale o typu odpovědnosti",
    heroSubtitle: "Někdy je lepší menší seniorní zapojení. Jindy dává smysl větší tým a širší dodávka.",
    intro: ["Rozdíl není jen v ceně. Jde hlavně o to, zda projekt potřebuje osobní seniorní zapojení, nebo širší dodavatelský aparát.", "U takeover a složitějších produktových situací bývá často silnější přímé zapojení člověka, který nese technické rozhodování osobně."],
    optionA: "Kdy dává smysl externí seniorní vývojář",
    optionB: "Kdy je lepší agentura",
    optionAText: "Silný fit je tam, kde je potřeba převzít konkrétní technickou oblast, rychle navázat na existující tým nebo řešit citlivou produktovou situaci bez těžkého procesního aparátu.",
    optionBText: "Agentura dává větší smysl tam, kde potřebujete širší kapacitu více rolí najednou, pevnější dodavatelský rámec nebo kompletní servis kolem většího projektu.",
    criteria: ["potřeba seniorního rozhodování", "šíře rolí a kapacit", "citlivost takeover situace", "požadovaná míra osobní odpovědnosti"],
    verdict: "Pokud projekt potřebuje seniorní technické vedení a přímé zapojení do existujícího týmu, bývá externí kontraktor silnější volba. Pro větší outsourcingový model může být vhodnější agentura.",
    faq: [
      { question: "Není agentura bezpečnější?", answer: "Někdy ano, ale bezpečí nevychází jen z velikosti. U složitých aplikací je často cennější osobní seniorní ownership a rychlejší rozhodování." },
      { question: "Může externí vývojář dodat i samostatný celek?", answer: "Ano. Záleží na rozsahu. U jasně vymezené oblasti nebo menšího projektu to bývá běžné." },
      { question: "Co když časem budeme potřebovat větší tým?", answer: "I to lze řešit postupně. Důležité je zvolit model, který odpovídá aktuální situaci projektu." },
      { question: "Je kontraktní spolupráce jen o programování?", answer: "Ne. U seniorního kontraktu bývá důležitá i architektura, prioritizace, takeover a zjednodušení delivery." },
    ],
    related: ["contract-support", "problem-senior-contract-capacity", "guide-when-project-needs-senior-contract-support", "service-existing-app-takeover", "inquiry"],
  }),
  comparison({
    translationKey: "comparison-nextjs-vs-spa",
    locale: "cs",
    slug: "nextjs-vs-spa-pro-byznys-aplikace",
    title: "Next.js vs SPA pro byznys aplikace | Halatao",
    h1: "Next.js vs SPA pro byznys aplikace",
    description: "Praktické srovnání Next.js a klasické SPA architektury pro business webové aplikace, interní systémy a klientské portály.",
    primaryQuery: "nextjs vs spa pro byznys aplikace",
    heroTitle: "Nejde o framework mód. Jde o to, jak se aplikace bude používat a rozvíjet.",
    heroSubtitle: "U business aplikací je důležité SEO, rychlost prvního načtení, práce s obsahem i provozní jednoduchost.",
    intro: ["Čistá SPA architektura není špatně. Jen není automaticky nejlepší pro každý typ business aplikace.", "Next.js dává výhodu tam, kde potřebujete kombinovat aplikaci s obsahem, SEO, rychlým načtením a flexibilnějším způsobem renderingu."],
    optionA: "Kdy dává smysl Next.js",
    optionB: "Kdy je klasická SPA v pořádku",
    optionAText: "Next.js je silný tam, kde web kombinuje marketingové a komerční stránky s aplikací, potřebuje SEO, statické generování nebo serverové renderování vybraných částí.",
    optionBText: "SPA dává smysl u interních nástrojů bez SEO požadavků, s jednoduchým nasazením a čistě aplikačním použitím bez obsahové vrstvy.",
    criteria: ["SEO a indexace", "rychlost prvního načtení", "kombinace obsahu a aplikace", "složitost deploye a architektury"],
    verdict: "Pro firemní weby a klientské portály bývá Next.js často praktičtější. U čistě interního nástroje bez obsahové vrstvy může být SPA úplně v pořádku.",
    faq: [
      { question: "Je Next.js vždy technicky lepší?", answer: "Ne. Lepší je jen tam, kde jeho způsob renderingu a routing odpovídá potřebám projektu." },
      { question: "Má SPA problém se SEO?", answer: "Může mít, zejména pokud je důležitá indexace obsahu a prvotní vykreslení pro vyhledávače nebo AI discovery." },
      { question: "Lze v Next.js stavět i interní aplikace?", answer: "Ano. Jen je potřeba rozhodnout, zda jeho výhody projekt opravdu využije." },
      { question: "Rozhoduje jen framework?", answer: "Ne. Důležitější je architektura, datový model, release proces a kvalita implementace." },
    ],
    related: ["technology-nextjs-for-business-applications", "service-custom-web-app-development", "comparison-custom-vs-saas", "guide-how-to-scope-a-custom-web-application"],
  }),
  comparison({
    translationKey: "comparison-rewrite-vs-incremental-app-improvement",
    locale: "cs",
    slug: "rewrite-vs-postupny-rozvoj-aplikace",
    title: "Rewrite vs postupný rozvoj aplikace | Halatao",
    h1: "Rewrite vs postupný rozvoj aplikace",
    description: "Praktické srovnání úplného přepisu aplikace a postupného rozvoje či stabilizace existujícího řešení.",
    primaryQuery: "rewrite vs postupný rozvoj aplikace",
    heroTitle: "Čistý start zní lákavě. Provoz ale často potřebuje něco jiného.",
    heroSubtitle: "U běžící aplikace bývá důležitější řídit riziko a prioritizovat kritická místa než naplánovat velký restart bez jistoty.",
    intro: ["Rewrite bývá častý první nápad, když aplikace technicky nevyhovuje. Jenže přepis nese velké riziko zpoždění, ztráty znalostí i podcenění skrytých závislostí.", "Postupný rozvoj není vždy elegantní, ale bývá bezpečnější a levnější tam, kde systém stále drží důležitý provoz."],
    optionA: "Kdy má rewrite smysl",
    optionB: "Kdy je lepší postupný rozvoj",
    optionAText: "Rewrite má smysl tehdy, když stávající systém opravdu brání dalšímu fungování, architektura nedrží pohromadě a postupné opravy by byly dražší než nový základ.",
    optionBText: "Postupný rozvoj je obvykle lepší tam, kde aplikace stále slouží byznysu, ale potřebuje stabilizaci, zpřehlednění a cílené zlepšení nejproblematičtějších míst.",
    criteria: ["kritičnost provozu", "míra technického dluhu", "riziko ztráty doménové logiky", "čas a rozpočet na paralelní vývoj"],
    verdict: "U většiny běžících aplikací je rozumnější začít auditem a postupným zlepšením. Rewrite má být důsledek jasných důvodů, ne reakce na frustraci z kódu.",
    faq: [
      { question: "Jak poznat, že už incremental přístup nestačí?", answer: "Když architektura systematicky blokuje změny, bezpečnost nebo provoz a cena dílčích zásahů dál roste bez viditelného zlepšení." },
      { question: "Lze kombinovat oba přístupy?", answer: "Ano. Často se přepisují jen vybrané části, zatímco zbytek systému se stabilizuje a drží provoz." },
      { question: "Proč je rewrite tak často podceněný?", answer: "Protože bývají podceněné skryté vazby, edge cases a množství doménových pravidel, která v systému vznikala roky." },
      { question: "Začínáte vždy auditem?", answer: "U takeover a legacy situací ano. Bez něj se jen těžko rozhoduje mezi refaktorem a větším přepisem." },
    ],
    related: ["service-existing-app-takeover", "problem-rescue-incomplete-project", "guide-how-to-price-an-app-takeover", "case-study-existing-app-takeover", "inquiry"],
  }),
  comparison({
    translationKey: "comparison-custom-vs-saas",
    locale: "en",
    slug: "custom-web-app-vs-saas-tool",
    title: "Custom web app vs SaaS tool | Halatao",
    h1: "Custom web app vs SaaS tool: which makes more sense",
    description: "A practical comparison of custom web application development and SaaS tools for companies evaluating internal systems, workflow-heavy software, or client portals.",
    primaryQuery: "custom web app vs saas tool",
    heroTitle: "The real question is where the compromise will be cheaper",
    heroSubtitle: "SaaS is sometimes the right choice. In other cases it only postpones the problem and makes the workflow harder over time.",
    intro: ["SaaS usually means faster start and lower upfront commitment. Custom development makes more sense when the generic tool would force the company to distort an important business process.", "This is not only a technology decision. It is mainly an operational and economic one."],
    optionA: "When SaaS is the better option",
    optionB: "When custom development wins",
    optionAText: "SaaS is a good fit when the process is fairly standard, the team needs to move quickly, and the tool covers most needs without expensive workarounds.",
    optionBText: "Custom development is stronger when the company needs unique workflow logic, multiple roles, integrations, or long-term control over software that matters to operations.",
    criteria: ["how specialised the process is", "cost of workarounds", "integration and permission complexity", "need for long-term product control"],
    verdict: "If the software directly supports a business-critical process, custom development is often more sensible than spending years around SaaS limitations. If the need is standard and speed matters most, SaaS may be the right starting point.",
    faq: [
      { question: "Is SaaS always cheaper?", answer: "No. The entry cost is often lower, but long-term cost can rise through manual workarounds, add-ons, integration complexity, and product constraints." },
      { question: "Does it make sense to start with SaaS and move later?", answer: "Sometimes yes, but it helps to understand migration cost and lock-in risk before using that path as the default answer." },
      { question: "When is custom development too early?", answer: "When the process is still unclear and a standard tool would cover most of the real work without painful compromise." },
      { question: "Can companies combine SaaS and custom software?", answer: "Yes. Many practical setups keep commodity functions in SaaS and build custom logic around the parts that are genuinely differentiating." },
    ],
    related: ["service-custom-web-app-development", "service-internal-tools-development", "guide-when-internal-tool-better-than-saas", "use-case-b2b-client-portal", "inquiry"],
  }),
  comparison({
    translationKey: "comparison-contractor-vs-agency",
    locale: "en",
    slug: "contract-developer-vs-agency",
    title: "Contract developer vs agency | Halatao",
    h1: "Contract developer vs agency: which model fits the project",
    description: "A practical comparison of senior contract development support and agency delivery for companies working on custom software, takeovers, or internal systems.",
    primaryQuery: "contract developer vs agency",
    heroTitle: "The right choice depends on responsibility, not vendor size",
    heroSubtitle: "Sometimes direct senior involvement is the stronger option. In other cases broader agency capacity is the better fit.",
    intro: ["The difference is not just cost. The bigger question is whether the project needs direct senior ownership or a wider supplier setup with multiple roles.", "Inherited apps and complex product situations often benefit from direct technical ownership rather than heavier delivery theatre."],
    optionA: "When a contract developer is the stronger fit",
    optionB: "When an agency makes more sense",
    optionAText: "This works best when the company needs a senior person to take ownership of a defined technical area, plug into an existing team quickly, or stabilise a sensitive project situation.",
    optionBText: "An agency can be the better fit when the project truly needs a broader set of roles at once, a larger supplier framework, or a fuller outsourcing model.",
    criteria: ["need for direct senior judgement", "breadth of roles required", "sensitivity of the takeover or delivery context", "desired level of personal accountability"],
    verdict: "If the project needs senior technical ownership and close integration with an existing team, a contract developer is often the stronger model. If the company needs wider supplier coverage, an agency may be the better option.",
    faq: [
      { question: "Is an agency automatically safer?", answer: "Not always. Safety depends on capability, ownership, and fit. In difficult application work, direct senior accountability can be more valuable than team size alone." },
      { question: "Can a contract developer deliver a whole workstream?", answer: "Yes. For a well-defined technical area or a smaller project slice, that is often the right setup." },
      { question: "What if we later need broader capacity?", answer: "The delivery model can evolve. The key is choosing the model that fits the current project reality rather than future hypotheticals." },
      { question: "Is contract work only about coding?", answer: "No. In senior engagements it often includes architecture, prioritisation, takeover work, and delivery simplification." },
    ],
    related: ["contract-support", "problem-senior-contract-capacity", "guide-when-project-needs-senior-contract-support", "service-existing-app-takeover", "inquiry"],
  }),
  comparison({
    translationKey: "comparison-nextjs-vs-spa",
    locale: "en",
    slug: "nextjs-vs-spa-for-business-apps",
    title: "Next.js vs SPA for business apps | Halatao",
    h1: "Next.js vs SPA for business applications",
    description: "A practical comparison of Next.js and classic SPA architecture for business web applications, internal systems, and client portals.",
    primaryQuery: "nextjs vs spa for business apps",
    heroTitle: "This is not a framework popularity contest",
    heroSubtitle: "The right choice depends on how the software is discovered, loaded, operated, and evolved.",
    intro: ["A classic SPA is not wrong. It is simply not the best answer for every business application.", "Next.js is often useful where the product mixes content and application behaviour, needs SEO, or benefits from flexible rendering modes."],
    optionA: "When Next.js is the better fit",
    optionB: "When a classic SPA is fine",
    optionAText: "Next.js works well when the product combines commercial pages and application logic, needs SEO, benefits from static generation, or requires server-rendered entry points.",
    optionBText: "A classic SPA is often enough for internal tools with no SEO requirements and no strong need to combine content and application delivery in one stack.",
    criteria: ["SEO and discoverability", "first-load experience", "need to mix content and app flows", "deployment and architecture complexity"],
    verdict: "For business sites, portals, and products with discovery requirements, Next.js is often the more practical choice. For a purely internal app, SPA can be completely reasonable.",
    faq: [
      { question: "Is Next.js always technically better?", answer: "No. It is only better when its rendering and routing model match the needs of the product." },
      { question: "Does SPA create SEO issues?", answer: "It can, especially when discoverability, indexing, or first render quality matter." },
      { question: "Can internal tools be built in Next.js too?", answer: "Yes. The question is whether the project actually benefits from what Next.js brings." },
      { question: "Is framework choice the main architecture decision?", answer: "No. Data model, release flow, integration design, and implementation quality matter more in the long run." },
    ],
    related: ["technology-nextjs-for-business-applications", "service-custom-web-app-development", "comparison-custom-vs-saas", "guide-how-to-scope-a-custom-web-application"],
  }),
  comparison({
    translationKey: "comparison-rewrite-vs-incremental-app-improvement",
    locale: "en",
    slug: "rewrite-vs-incremental-app-improvement",
    title: "Rewrite vs incremental app improvement | Halatao",
    h1: "Rewrite vs incremental app improvement",
    description: "A practical comparison of full rewrites and incremental improvement for existing business applications.",
    primaryQuery: "rewrite vs incremental app improvement",
    heroTitle: "A clean restart sounds attractive. Operations often need something else.",
    heroSubtitle: "For running applications, risk management and targeted improvement usually matter more than a dramatic restart.",
    intro: ["A rewrite is a common first reaction when the current application feels painful. But rewrites carry delay risk, knowledge loss, and hidden dependency surprises.", "Incremental improvement is not always elegant, but it is often safer and cheaper when the system still supports important operations."],
    optionA: "When a rewrite makes sense",
    optionB: "When incremental improvement is the smarter move",
    optionAText: "A rewrite can be justified when the current system truly blocks operation or future change, and targeted improvement would cost more than rebuilding the foundation.",
    optionBText: "Incremental improvement is usually better when the app still serves the business but needs stabilisation, simplification, and focused changes in the most problematic areas.",
    criteria: ["operational criticality", "depth of technical debt", "risk of losing domain behaviour", "time and budget available for parallel rebuilding"],
    verdict: "For most running applications, the sensible first step is discovery and incremental improvement. Rewrites should be a consequence of evidence, not frustration with inherited code.",
    faq: [
      { question: "How do we know incremental work is no longer enough?", answer: "Usually when architecture is systematically blocking change, security, or operation, and partial fixes keep getting more expensive without improving the situation." },
      { question: "Can the two approaches be combined?", answer: "Yes. Many projects replace selected subsystems while stabilising and keeping the rest of the product live." },
      { question: "Why are rewrites so often underestimated?", answer: "Because hidden dependencies, edge cases, and accumulated domain logic are almost always larger than they appear at first glance." },
      { question: "Do you always start with an audit?", answer: "For inherited or legacy application situations, yes. It is the safest basis for deciding between refactor, stabilisation, and rewrite work." },
    ],
    related: ["service-existing-app-takeover", "problem-rescue-incomplete-project", "guide-how-to-price-an-app-takeover", "case-study-existing-app-takeover", "inquiry"],
  }),
];



