// Generated content: additional high-intent problem pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type ProblemSeed = {
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
  symptoms: string[];
  whyItMatters: string;
  approach: string;
  outcomes: string[];
  faq: FAQItem[];
  related: string[];
  fitFor: string[];
  fitNot: string[];
};

function problem(seed: ProblemSeed): ContentPage {
  const isCs = seed.locale === "cs";

  return definePage({
    translationKey: seed.translationKey,
    stage: 1,
    locale: seed.locale,
    pageType: "problem",
    slug: seed.slug,
    segments: [isCs ? "problemy" : "problems", seed.slug],
    title: seed.title,
    h1: seed.h1,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "commercial",
    hero: {
      eyebrow: isCs ? "Situace" : "Situation",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: {
        label: isCs ? "Probrat tuto situaci" : "Discuss this situation",
        href: buildInquiryHref(seed.locale),
      },
    },
    intro: seed.intro,
    sections: [
      {
        title: isCs ? "Typické projevy problému" : "Typical symptoms",
        body: [seed.whyItMatters],
        bullets: seed.symptoms,
      },
      {
        title: isCs ? "Jak k tomu přistupuji" : "How I approach it",
        body: [seed.approach],
      },
      {
        title: isCs ? "Co by měl být výsledek" : "What a good outcome looks like",
        body: [
          isCs
            ? "Cílem není jen rychlá oprava. Smyslem je vrátit projektu kontrolu, jistotu a rozumný další krok."
            : "The goal is not a quick patch. The goal is to restore control, confidence, and a practical next step.",
        ],
        bullets: seed.outcomes,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.fitFor, notFor: seed.fitNot },
    cta: isCs
      ? {
          label: "Nezávazně probrat zadání",
          href: "/cs/popsat-projekt",
          note: "Stačí krátce popsat současný stav, největší riziko a očekávaný další krok.",
        }
      : {
          label: "Explore the project fit",
          href: "/en/discuss-your-project",
          note: "A short summary of the current state and the main risk is enough to start.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const growthProblemPages: ContentPage[] = [
  problem({
    translationKey: "problem-slow-hard-to-maintain-app",
    locale: "cs",
    slug: "aplikace-je-pomala-a-tezko-se-udrzuje",
    title: "Aplikace je pomalá a těžko se udržuje | Halatao",
    h1: "Aplikace je pomalá, křehká a těžko se dál rozvíjí",
    description: "Pomohu zmapovat, proč je business aplikace pomalá a těžko udržitelná, a navrhnout stabilizační postup bez zbytečného rewritu.",
    primaryQuery: "aplikace je pomalá a těžko se udržuje",
    heroTitle: "Každá změna trvá dlouho a výkon už bolí i byznys",
    heroSubtitle: "Typická situace u starší nebo přerostlé aplikace, kde se kombinuje technický dluh, slabší architektura a nejistý release.",
    intro: [
      "Pomalá a křehká aplikace není jen technický problém. Promítá se do práce lidí, delšího delivery cyklu a slabší důvěry v další rozvoj.",
      "Častou chybou je skočit rovnou do rewritu. Bez pochopení skutečných bottlenecků ale jen přesunete riziko jinam.",
    ],
    symptoms: [
      "pomalé načítání nebo chování klíčových workflow",
      "změny se nasazují s velkou nejistotou",
      "technický dluh blokuje roadmapu",
      "v týmu chybí dobrá viditelnost do výkonu a rizik",
    ],
    whyItMatters: "Pokud se situace nechá být, roste cena každé další změny a aplikace se stává bottleneckem místo opory pro byznys.",
    approach: "Začínám mapováním kritických míst, release rizik a částí systému, které dnes nejvíc blokují další delivery. Teprve potom dává smysl rozhodovat mezi stabilizací, refaktorem a větší změnou.",
    outcomes: [
      "lepší výkon v důležitých částech systému",
      "menší nejistota kolem release a změn",
      "realističtější plán další stabilizace",
      "silnější základ pro další rozvoj",
    ],
    faq: [
      { question: "Je pomalost automaticky důvod pro rewrite?", answer: "Ne. Nejprve je potřeba pochopit, co výkon opravdu brzdí a jaký dopad to má na provoz a delivery." },
      { question: "Co když chybí dobré metriky nebo monitoring?", answer: "To je samo o sobě důležité zjištění. Část stabilizační práce často spočívá i v lepší viditelnosti do systému." },
      { question: "Dá se stabilizace dělat postupně?", answer: "Ano. U většiny business aplikací je to praktičtější a bezpečnější než velký zásah naráz." },
    ],
    related: ["service-existing-app-takeover", "guide-how-to-stabilize-a-slow-business-app", "comparison-rewrite-vs-incremental-app-improvement", "inquiry"],
    fitFor: ["běžící aplikace, které už brzdí delivery", "týmy s tlakem na výkon i stabilitu", "produkty, kde technický dluh dopadá do byznysu"],
    fitNot: ["čistě marketingové weby bez provozní logiky", "projekty bez vůle řešit provozní příčiny problému", "požadavek na okamžitý rewrite bez analýzy"],
  }),
  problem({
    translationKey: "problem-senior-contract-capacity",
    locale: "cs",
    slug: "chybi-seniorni-kapacita-do-tymu",
    title: "Chybí seniorní kapacita do týmu | Halatao",
    h1: "Projektu chybí seniorní kapacita do týmu",
    description: "Pomohu firmám a produktovým týmům ve chvíli, kdy delivery stojí, chybí technické vedení nebo je potřeba převzít problematickou oblast uvnitř existujícího týmu.",
    primaryQuery: "chybí seniorní kapacita do týmu",
    heroTitle: "Tým pracuje, ale důležitá technická rozhodnutí nikdo skutečně nedrží",
    heroSubtitle: "Typická situace, kdy backlog roste, složitější změny se odkládají a tým potřebuje zkušenější technický ownership, ne jen další ruce.",
    intro: [
      "Ne každá delivery situace potřebuje agenturu nebo nový vendor model. Často stačí doplnit seniornější kapacitu přímo do existujícího týmu a převzít konkrétní odpovědnost.",
      "Silný signál je chvíle, kdy tým zvládá běžný provoz, ale zasekává se na architektuře, takeoveru nebo technicky citlivých změnách.",
    ],
    symptoms: [
      "složitější změny se odsouvají nebo vrací",
      "chybí owner pro rizikové části systému",
      "technické rozhodování je pomalé nebo nekonzistentní",
      "projekt potřebuje takeover, stabilizaci nebo silnější architektonický směr",
    ],
    whyItMatters: "Bez seniornější kapacity se projekt často hýbe dál jen za cenu vyššího technického dluhu, slabšího rozhodování a unaveného delivery týmu.",
    approach: "Místo neurčitého bodyshoppingu preferuji jasně vymezený přínos: převzetí konkrétní oblasti, stabilizaci problematického workstreamu nebo posílení technického rozhodování v důležité fázi projektu.",
    outcomes: [
      "rychlejší posun v blokované části projektu",
      "silnější technický ownership",
      "menší tlak na interní tým v kritické fázi",
      "jasnější vazba mezi technickým a business rozhodováním",
    ],
    faq: [
      { question: "Je to vhodné i pro menší tým?", answer: "Ano, pokud je potřeba rychle doplnit zkušenost, převzít problémovou oblast nebo dodat citlivou etapu projektu." },
      { question: "Může jít i o kratší kontrakt?", answer: "Ano. Někdy stačí několik týdnů na takeover, stabilizaci nebo rozjezd další etapy." },
      { question: "Jak poznat, že nestačí jen další vývojář?", answer: "Ve chvíli, kdy problém není v množství práce, ale v ownershipu, architektuře, prioritizaci rizik nebo bezpečném delivery citlivých změn." },
    ],
    related: ["contract-support", "comparison-contractor-vs-agency", "guide-when-project-needs-senior-contract-support", "inquiry"],
    fitFor: ["produktové a interní týmy v důležité delivery fázi", "projekty, kde chybí technický ownership", "situace, kdy je potřeba převzít rizikovou oblast uvnitř týmu"],
    fitNot: ["čistě náborová poptávka", "commodity staff augmentation bez scope odpovědnosti", "projekty bez ownera nebo rozhodovatele na straně klienta"],
  }),
  problem({
    translationKey: "problem-rescue-incomplete-project",
    locale: "cs",
    slug: "potrebujeme-zachranit-rozdelany-projekt",
    title: "Potřebujeme zachránit rozdělaný projekt | Halatao",
    h1: "Potřebujeme zachránit rozdělaný projekt, který se zasekl",
    description: "Pomohu firmě převzít, stabilizovat a znovu rozhýbat rozdělaný software projekt, který se zasekl mezi očekáváním, delivery a technickou realitou.",
    primaryQuery: "potřebujeme zachránit rozdělaný projekt",
    heroTitle: "Projekt už stál čas i peníze, ale stále se neposouvá správným směrem",
    heroSubtitle: "Typická situace, kdy scope narostl, delivery ztratilo rytmus a původní model už nevytváří důvěru v další krok.",
    intro: [
      "Rozdělaný projekt bývá těžší než greenfield i takeover běžící aplikace. Často není hotový natolik, aby spolehlivě fungoval, ale zároveň už je v něm příliš práce na to, aby šel snadno zahodit.",
      "Silnější první krok je znovu získat kontrolu nad realitou projektu a navrhnout etapu, která přinese důvěryhodný posun.",
    ],
    symptoms: [
      "scope se rozšiřuje rychleji než delivery",
      "projekt nemá důvěryhodný další krok",
      "technický stav blokuje funkční posun",
      "buyer nebo tým ztrácí důvěru v původní delivery model",
    ],
    whyItMatters: "Pokud se rozdělaný projekt nechá dál běžet bez resetu priorit a ownershipu, nejčastěji dál roste náklad, frustrace i tlak na radikální řešení bez lepšího základu.",
    approach: "Začínám znovu-srovnáním reality: co už existuje, co je použitelné, co je riziko a co má být první důvěryhodný milestone. Teprve pak dává smysl rozhodnout, co převzít, co zúžit a co odložit.",
    outcomes: [
      "jasnější realita projektu místo wishful thinking",
      "první realistický milestone po resetu priorit",
      "menší chaos v rozhodování i scope",
      "silnější důvěra v další delivery fázi",
    ],
    faq: [
      { question: "Je vždy lepší projekt zastavit a začít znovu?", answer: "Ne. Častěji dává smysl zjistit, co lze zachovat, co stabilizovat a co zúžit do smysluplné další etapy." },
      { question: "Dá se podobná situace zvládnout i s interním týmem?", answer: "Ano. Často právě kombinace externího takeoveru a interní znalosti domény dává nejsilnější výsledek." },
      { question: "Můžete pak pokračovat i jako kontraktní podpora v týmu?", answer: "Ano. Podle situace mohu navázat takeover delivery etapou nebo seniorním zapojením uvnitř týmu." },
    ],
    related: ["service-existing-app-takeover", "contract-support", "case-study-existing-app-takeover", "inquiry"],
    fitFor: ["rozpracované projekty bez důvěryhodného dalšího kroku", "firmy, které už investovaly a potřebují získat zpět kontrolu", "situace, kde je potřeba spojit takeover a nový delivery rámec"],
    fitNot: ["projekty bez přístupu ke kódu nebo zadání", "buyer, který chce jen potvrdit předem daný rewrite", "čistě náborová poptávka bez projektového kontextu"],
  }),
  problem({
    translationKey: "problem-client-portal",
    locale: "cs",
    slug: "potrebujeme-klientsky-portal",
    title: "Potřebujeme klientský portál | Halatao",
    h1: "Potřebujeme klientský portál pro komunikaci, data a samoobsluhu",
    description: "Pomohu firmám navrhnout klientský portál na míru tam, kde se opakuje komunikace o stavu zakázek, dokumentech, požadavcích nebo samoobslužných úkonech.",
    primaryQuery: "potřebujeme klientský portál",
    heroTitle: "Klienti potřebují jedno důvěryhodné místo místo e-mailového chaosu",
    heroSubtitle: "Typická situace, kdy se opakují stejné dotazy, dokumenty se posílají ručně a firma chce dát klientovi přehlednější samoobslužný vstup.",
    intro: [
      "Klientský portál dává smysl ve chvíli, kdy firma opakovaně řeší stav služby, dokumenty, požadavky nebo další kroky přes e-mail, telefon a ruční zásahy podpory.",
      "Silný první krok je vybrat, které klientské interakce mají největší dopad, a postavit první verzi právě kolem nich.",
    ],
    symptoms: [
      "opakované dotazy klientů na stav služby nebo zakázky",
      "ruční sdílení dokumentů a příloh",
      "nepřehledná historie komunikace",
      "potřeba samoobslužných kroků bez interní asistence",
    ],
    whyItMatters: "Bez portálové vrstvy zůstává podpora drahá, komunikace roztříštěná a klientský zážitek závislý na tom, kdo má právě čas odpovědět nebo dohledat správný stav.",
    approach: "Pomohu vybrat nejdůležitější klientské scénáře, navrhnout role, přístupy a vazbu na interní procesy tak, aby portál nebyl jen další vrstva bez skutečné hodnoty.",
    outcomes: [
      "méně opakované klientské podpory",
      "lepší dostupnost informací pro klienta",
      "větší důvěryhodnost procesu",
      "silnější základ pro další rozvoj služeb",
    ],
    faq: [
      { question: "Je klientský portál vhodný i pro menší firmu?", answer: "Ano, pokud se opakují stejné dotazy, dokumenty nebo úkony a portál může odlehčit obsluhu i zlepšit klientský zážitek." },
      { question: "Musí být portál rozsáhlý od začátku?", answer: "Nemusí. Často je nejlepší začít menší verzí zaměřenou na nejčastější interakce." },
      { question: "Potřebujeme k portálu i interní administraci?", answer: "Velmi často ano. Portál dává smysl jen tehdy, když má i rozumné backoffice zázemí." },
    ],
    related: ["service-custom-web-app-development", "use-case-b2b-client-portal", "comparison-custom-vs-saas", "inquiry"],
    fitFor: ["firmy s opakovanou klientskou komunikací nad stavem služby", "produkty a služby, kde dává smysl samoobsluha", "týmy, které chtějí propojit klientský vstup s interním procesem"],
    fitNot: ["jednorázové marketingové microsite", "portál bez návaznosti na interní proces nebo data", "projekty s očekáváním čistě vizuálního efektu bez provozní změny"],
  }),
  problem({
    translationKey: "problem-slow-hard-to-maintain-app",
    locale: "en",
    slug: "our-app-is-slow-and-hard-to-maintain",
    title: "Our app is slow and hard to maintain | Halatao",
    h1: "Our app is slow, fragile, and hard to maintain",
    description: "I help teams understand why a business application is slow and difficult to maintain, then shape a stabilisation path without defaulting to a rewrite.",
    primaryQuery: "our app is slow and hard to maintain",
    heroTitle: "Every change takes too long and performance is hurting the business",
    heroSubtitle: "A common situation in older or overgrown applications where technical debt, weak architecture boundaries, and low operational confidence compound each other.",
    intro: [
      "A slow, fragile application is not only a technical problem. It shows up in team fatigue, slower delivery, more incidents, and weaker confidence in future investment.",
      "The stronger first move is to identify what is actually slowing the product down and which part of the system needs stabilising first.",
    ],
    symptoms: [
      "slow load time or poor responsiveness in key workflows",
      "large uncertainty around releases and change impact",
      "technical debt blocking roadmap work",
      "weak visibility into performance and operational risk",
    ],
    whyItMatters: "If the situation is left alone, the cost is not only performance. Delivery slows down, operational trust falls, and the application becomes a business bottleneck rather than support.",
    approach: "I start by mapping critical bottlenecks, release risks, and the parts of the system creating the most delivery drag. Only then does it make sense to decide between stabilisation, refactor, or larger architectural change.",
    outcomes: [
      "better performance in critical areas",
      "lower uncertainty around release and change",
      "a realistic stabilisation plan",
      "a stronger base for future delivery",
    ],
    faq: [
      { question: "Is slowness automatically a reason to rewrite?", answer: "No. The first question is what is really causing the slowdown and how that affects the business and the delivery team." },
      { question: "What if we lack good metrics or monitoring?", answer: "That is an important finding in itself. Part of stabilisation often includes improving visibility into the system." },
      { question: "Can this be improved incrementally?", answer: "Yes. For most business applications that is the more practical and safer path." },
    ],
    related: ["service-existing-app-takeover", "guide-how-to-stabilize-a-slow-business-app", "comparison-rewrite-vs-incremental-app-improvement", "inquiry"],
    fitFor: ["running applications that are already dragging delivery down", "teams under pressure on both performance and stability", "products where technical debt is now a business problem"],
    fitNot: ["simple marketing sites with no real product workflows", "teams unwilling to address operational root causes", "rewrite-first mandates with no diagnosis"],
  }),
  problem({
    translationKey: "problem-senior-contract-capacity",
    locale: "en",
    slug: "we-need-senior-contract-capacity",
    title: "We need senior contract capacity | Halatao",
    h1: "We need senior contract capacity inside the team",
    description: "I help companies and product teams when delivery is slowing down because technical ownership is weak, risky areas lack a senior owner, or the team needs stronger contract support.",
    primaryQuery: "we need senior contract capacity",
    heroTitle: "The team is busy, but the critical technical decisions still have no real owner",
    heroSubtitle: "A common situation when backlog keeps moving, but architecture, risky delivery areas, and takeover work are not being handled with enough seniority.",
    intro: [
      "Not every difficult delivery situation needs a new agency or a larger outsourcing model. Often the real need is stronger senior capacity inside the existing team with ownership of a defined area.",
      "The signal is usually a team that handles day-to-day work but keeps slowing down on architecture, takeover, release confidence, or technically sensitive project phases.",
    ],
    symptoms: [
      "complex changes keep being delayed or revisited",
      "risky parts of the system have no clear owner",
      "technical decision-making is slow or inconsistent",
      "the project needs takeover, stabilisation, or stronger architecture input",
    ],
    whyItMatters: "Without stronger senior capacity, the project often keeps moving but with more technical debt, weaker decisions, and an increasingly tired delivery team.",
    approach: "Instead of generic staff augmentation, I focus on defined ownership: taking over a risky technical area, stabilising a problem workstream, or strengthening the team in a phase where senior judgement matters most.",
    outcomes: [
      "faster progress in the blocked part of the project",
      "stronger technical ownership",
      "less pressure on the internal team in a critical phase",
      "clearer connection between engineering and business decisions",
    ],
    faq: [
      { question: "Is this suitable for smaller teams too?", answer: "Yes, if they need to add experience quickly, take over a risky area, or get through an important delivery phase with more confidence." },
      { question: "Does this have to be a long contract?", answer: "No. Some engagements are shorter and focused on takeover, stabilisation, or helping a specific phase land well." },
      { question: "How do we know another developer is not enough?", answer: "When the bottleneck is not volume of work but ownership, architecture, release safety, or making the hard technical calls consistently." },
    ],
    related: ["contract-support", "comparison-contractor-vs-agency", "guide-when-project-needs-senior-contract-support", "inquiry"],
    fitFor: ["product or internal teams in an important delivery phase", "projects lacking senior technical ownership", "situations where a risky area needs to be taken over inside the current team"],
    fitNot: ["recruiter outreach", "commodity staffing with no ownership scope", "projects with no decision-maker or internal owner"],
  }),
  problem({
    translationKey: "problem-rescue-incomplete-project",
    locale: "en",
    slug: "we-need-to-rescue-an-incomplete-project",
    title: "We need to rescue an incomplete project | Halatao",
    h1: "We need to rescue an incomplete project that has stalled",
    description: "I help companies take over, stabilise, and restart incomplete software projects that are stuck between expectations, delivery, and technical reality.",
    primaryQuery: "we need to rescue an incomplete project",
    heroTitle: "The project already cost time and money, but it is still not moving credibly",
    heroSubtitle: "A common situation when scope expanded faster than delivery, trust in the current setup dropped, and the team no longer has a believable next milestone.",
    intro: [
      "An incomplete project is often harder than both greenfield work and takeover of a stable live product. It is not finished enough to rely on, but too far along to discard casually.",
      "The stronger first move is to regain control of project reality and define the first trustworthy phase after the reset.",
    ],
    symptoms: [
      "scope expands faster than delivery",
      "the project has no credible next step",
      "technical state blocks functional progress",
      "buyer or team confidence in the current delivery model is low",
    ],
    whyItMatters: "If an incomplete project keeps moving without a reset of priorities and ownership, cost, frustration, and pressure for radical decisions usually keep rising without better clarity.",
    approach: "I start by re-grounding the reality: what exists, what is usable, what is risky, and what the first credible milestone should be. Only then does it make sense to decide what to keep, what to narrow, and what to drop.",
    outcomes: [
      "clearer project reality instead of wishful thinking",
      "a believable next milestone after the reset",
      "less chaos in scope and decision-making",
      "stronger confidence in the next delivery phase",
    ],
    faq: [
      { question: "Is it always better to stop and start again?", answer: "No. More often it makes sense to identify what can be kept, what needs stabilising, and what should be narrowed into a practical next phase." },
      { question: "Can this work alongside an internal team?", answer: "Yes. Combining external takeover structure with internal domain knowledge is often the strongest path." },
      { question: "Can you stay on as contract support after the reset?", answer: "Yes. Depending on the situation, I can continue through the delivery phase or work as senior support inside the team." },
    ],
    related: ["service-existing-app-takeover", "contract-support", "case-study-existing-app-takeover", "inquiry"],
    fitFor: ["incomplete projects with no believable next milestone", "buyers who already invested and need to regain control", "situations requiring both takeover and a new delivery frame"],
    fitNot: ["projects with no access to code or brief", "buyers looking only for validation of a pre-decided rewrite", "recruiting-style requests with no project context"],
  }),
  problem({
    translationKey: "problem-client-portal",
    locale: "en",
    slug: "we-need-a-client-portal",
    title: "We need a client portal | Halatao",
    h1: "We need a client portal for visibility, documents, and self-service",
    description: "I help companies design client portals when repeated customer communication, document sharing, and status handling should move into one clearer interface.",
    primaryQuery: "we need a client portal",
    heroTitle: "Clients need one reliable place instead of fragmented email handling",
    heroSubtitle: "A typical situation when status questions repeat, documents are shared manually, and the company wants a better self-service layer around the service.",
    intro: [
      "A client portal makes sense when the company keeps repeating the same communication around service state, documents, requests, or self-service actions.",
      "A strong first step is to choose the client interactions with the biggest operational impact and build the first version around those.",
    ],
    symptoms: [
      "repeated customer questions about service or project status",
      "manual document sharing",
      "poor communication history",
      "need for customer self-service actions",
    ],
    whyItMatters: "Without a portal layer, support stays expensive, communication remains fragmented, and the customer experience depends too much on who has time to answer manually.",
    approach: "I help define the most important customer scenarios, the right access model, and the connection to internal workflows so the portal becomes an operational improvement, not just a visual layer.",
    outcomes: [
      "less repeated support handling",
      "better visibility for customers or partners",
      "more credible service delivery",
      "stronger base for future client-facing features",
    ],
    faq: [
      { question: "Is a client portal useful for a smaller company too?", answer: "Yes, if the same customer questions, documents, or actions keep repeating and the portal can reduce support load." },
      { question: "Does the portal have to be large from day one?", answer: "No. A focused first version around the most common interactions is often the strongest start." },
      { question: "Do we also need internal admin capability?", answer: "Usually yes. A valuable client portal normally depends on a sensible backoffice layer as well." },
    ],
    related: ["service-custom-web-app-development", "use-case-b2b-client-portal", "comparison-custom-vs-saas", "inquiry"],
    fitFor: ["companies with repeated client communication around status or documents", "services where self-service would reduce support load", "teams that want the client layer connected to internal workflow"],
    fitNot: ["one-off marketing microsites", "a portal with no connection to internal systems or process", "projects expecting a visual effect with no operational change"],
  }),
];
