// Generated content: additional decision guides for high-intent traffic. Safe to edit manually.

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
  answer: string;
  steps: string[];
  mistakes: string[];
  outcome: string[];
  faq: FAQItem[];
  related: string[];
  fitFor: string[];
  fitNot: string[];
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
    intent: "decision",
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
        title: isCs ? "Krátká odpověď" : "Short answer",
        body: [seed.answer],
      },
      {
        title: isCs ? "Doporučený postup" : "Recommended approach",
        body: [
          isCs
            ? "Dobrý výstup nevzniká z dlouhé teorie. Potřebujete rozhodnout, co zjistit, co spočítat a jak navrhnout první rozumný krok."
            : "The value is not theory. The value is deciding what to check, what to price, and what the first practical next step should be.",
        ],
        bullets: seed.steps,
      },
      {
        title: isCs ? "Časté chyby" : "Common mistakes",
        body: [
          isCs
            ? "Největší problém bývá špatné pořadí rozhodnutí. Tým řeší detaily moc brzy a přitom chybí jasný rámec pro první fázi."
            : "The most common problem is sequencing decisions badly. Teams go too deep into detail before clarifying the frame of the first phase.",
        ],
        bullets: seed.mistakes,
      },
      {
        title: isCs ? "Co by měl být výsledek" : "What a strong result looks like",
        body: [
          isCs
            ? "Průvodce má pomoct udělat lepší projektové rozhodnutí, ne dodat další dokument bez dopadu."
            : "The guide should improve a real project decision, not just add another document with no operational effect.",
        ],
        bullets: seed.outcome,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.fitFor, notFor: seed.fitNot },
    cta: isCs
      ? {
          label: "Popsat projekt",
          href: "/cs/popsat-projekt",
          note: "Pokud řešíte podobné rozhodnutí u reálného projektu, stačí krátký kontext a navrhnu další krok.",
        }
      : {
          label: "Discuss your project",
          href: "/en/discuss-your-project",
          note: "If the guide matches a live project decision, a short summary is enough to continue.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const growthGuidePages: ContentPage[] = [
  guide({
    translationKey: "guide-how-to-price-an-app-takeover",
    locale: "cs",
    slug: "jak-nacenit-prevzeti-aplikace",
    title: "Jak nacenit převzetí aplikace | Bc. Ondřej Halata (halatao.cz)",
    h1: "Jak nacenit převzetí aplikace bez slepých míst",
    description: "Praktický průvodce, jak přemýšlet o nacenění převzetí existující aplikace: co ovlivňuje cenu, jak snížit nejistotu a proč je první takeover fáze důležitější než přesnost od stolu.",
    primaryQuery: "jak nacenit převzetí aplikace",
    heroTitle: "Takeover se nenaceňuje podle počtu obrazovek, ale podle nejistoty a rizika",
    heroSubtitle: "Pro firmy, které přebírají existující aplikaci a chtějí rozumět tomu, co jde odhadnout předem a co se musí ověřit první fází.",
    intro: [
      "Převzetí aplikace má jinou logiku než greenfield projekt. Cena nestojí jen na rozsahu funkcí, ale hlavně na technické čitelnosti systému, provozním riziku a tom, co je potřeba chránit hned.",
      "Smyslem dobrého nacenění není tvářit se, že všechno víte předem. Smyslem je oddělit ověřitelnou část od nejistoty a navrhnout první krok, který ji zmenší.",
    ],
    answer: "Nejpřesnější rozpočet takeoveru obvykle nevzniká před auditem, ale po krátké úvodní fázi, která zmapuje systém, release, přístupy a kritická workflow.",
    steps: [
      "oddělte takeover audit od navazujícího rozvoje",
      "zjistěte, jaké části systému jsou provozně kritické",
      "ověřte přístupy, prostředí, release a monitoring",
      "počítejte zvlášť stabilizaci, zvlášť další delivery",
    ],
    mistakes: [
      "snaha dát pevnou cenu bez mapování systému",
      "podcenění provozních rizik a chybějících přístupů",
      "míchání takeoveru a velkého rozvoje do jednoho balíku",
      "rewrite jako výchozí předpoklad místo varianty po zjištění reality",
    ],
    outcome: [
      "realističtější první rozpočet a plán",
      "menší rozhodovací nejistota",
      "jasnější oddělení auditu, stabilizace a rozvoje",
      "nižší riziko drahého omylu v první fázi",
    ],
    faq: [
      { question: "Lze takeover nacenit fixně od stolu?", answer: "U jednodušších situací částečně ano, ale u většiny běžících aplikací je bezpečnější nejdřív menší auditní fáze." },
      { question: "Co cenu takeoveru nejvíc ovlivňuje?", answer: "Čitelnost systému, dostupnost přístupů, kritičnost provozu, technický dluh a to, jak dobře je známý release proces." },
      { question: "Je audit jen další zdržení před prací?", answer: "Ne. U takeoveru bývá audit nejrychlejší cesta k tomu, aby další práce nebyla postavená na odhadech naslepo." },
    ],
    related: ["service-existing-app-takeover", "guide-how-to-take-over-an-existing-app-safely", "problem-app-takeover", "inquiry"],
    fitFor: ["firmy přebírající běžící nebo rozpracovanou aplikaci", "buyery, kteří potřebují rozpočet s menší mírou nejistoty", "týmy řešící vendor change nebo ztrátu znalosti"],
    fitNot: ["greenfield projekt bez takeover kontextu", "buyer očekávající přesnou cenu bez přístupů a mapování", "čistě náborová poptávka"],
  }),
  guide({
    translationKey: "guide-when-internal-tool-better-than-saas",
    locale: "cs",
    slug: "kdy-dava-smysl-interni-system-misto-saas",
    title: "Kdy dává smysl interní systém místo SaaS | Bc. Ondřej Halata (halatao.cz)",
    h1: "Kdy dává smysl interní systém místo dalšího SaaS nástroje",
    description: "Praktický průvodce pro firmy, které zvažují vlastní interní systém místo SaaS nástroje a chtějí rozumět kompromisům, nákladům a provoznímu fitu.",
    primaryQuery: "kdy dává smysl interní systém místo saas",
    heroTitle: "Nejde o to mít vlastní software za každou cenu. Jde o cenu kompromisů.",
    heroSubtitle: "Pro firmy, kde se proces, role a integrace už nevejdou rozumně do dalšího generického SaaS nástroje.",
    intro: [
      "SaaS je často správný start. Problém přichází ve chvíli, kdy firma přidává výjimky, obchází limity nástroje a část procesu stejně drží bokem v tabulkách a manuálních zásazích.",
      "Interní systém dává smysl tam, kde je proces důležitý, opakovaný a natolik specifický, že cena kompromisů začíná převyšovat cenu vlastního řešení.",
    ],
    answer: "Interní systém dává větší smysl než SaaS ve chvíli, kdy workflow, role, integrace a ownership procesu vytvářejí drahé obcházení limitů standardního nástroje.",
    steps: [
      "spočítejte, kolik stojí ruční obcházení omezení",
      "zjistěte, jak specifické jsou role a workflow",
      "zvažte potřebu integrací a vlastních pravidel",
      "navrhněte menší první verzi místo velkého interního programu",
    ],
    mistakes: [
      "porovnávání jen podle licenční ceny SaaS",
      "ignorování času lidí stráveného mimo nástroj",
      "snahy digitalizovat celý provoz naráz",
      "interní systém bez ownera procesu a priorit první etapy",
    ],
    outcome: [
      "lepší build-vs-buy rozhodnutí",
      "realističtější očekávání od první interní verze",
      "nižší riziko přestřeleného scope",
      "silnější business case pro vlastní systém",
    ],
    faq: [
      { question: "Musí interní systém nahradit všechno najednou?", answer: "Nemusí. Často je nejlepší začít jedním workflow nebo oddělením s největším dopadem." },
      { question: "Lze kombinovat SaaS a interní systém?", answer: "Ano. Běžné je ponechat standardní části v SaaS a vlastní logiku řešit na míru kolem nich." },
      { question: "Jak poznat, že je ještě brzy na vlastní systém?", answer: "Když je proces stále nejasný, role jsou jednoduché a SaaS nástroj pokrývá většinu práce bez drahých obcházek." },
    ],
    related: ["comparison-custom-vs-saas", "service-internal-tools-development", "problem-internal-tool", "inquiry"],
    fitFor: ["firmy zvažující vlastní interní nástroj", "situace s rostoucí ruční koordinací mimo SaaS", "buyery, kteří chtějí spočítat cenu kompromisů"],
    fitNot: ["jednoduchý proces bez integrací a výjimek", "projekty bez ownera interního workflow", "nákupní rozhodnutí čistě podle nejnižší licence"],
  }),
  guide({
    translationKey: "guide-when-project-needs-senior-contract-support",
    locale: "cs",
    slug: "jak-poznat-ze-projekt-potrebuje-externi-seniorni-kapacitu",
    title: "Jak poznat, že projekt potřebuje externí seniorní kapacitu | Bc. Ondřej Halata (halatao.cz)",
    h1: "Jak poznat, že projekt potřebuje externí seniorní kapacitu",
    description: "Praktický průvodce pro firmy a týmy, které řeší, zda projekt potřebuje externí seniorní kontraktní kapacitu místo dalšího běžného vývojáře nebo větší agenturní dodávky.",
    primaryQuery: "jak poznat ze projekt potrebuje externi seniorni kapacitu",
    heroTitle: "Problém často není počet lidí, ale chybějící ownership a technické rozhodování",
    heroSubtitle: "Pro týmy, které zvládají běžný provoz, ale blokují se na architektuře, takeoveru, release riziku nebo citlivých delivery krocích.",
    intro: [
      "Externí seniorní kapacita dává smysl ve chvíli, kdy projekt nepotřebuje dalšího člověka na backlog, ale někoho, kdo převezme technickou odpovědnost za problematickou oblast nebo důležitou fázi delivery.",
      "Typický signál je tým, který pracuje naplno, ale klíčová rozhodnutí zůstávají otevřená příliš dlouho nebo se bolestivě vracejí.",
    ],
    answer: "Seniorní kontraktní kapacita je správný model tehdy, když je bottleneck v ownershipu, architektuře, takeoveru nebo bezpečném delivery, ne jen v množství čisté implementační práce.",
    steps: [
      "pojmenujte, která část projektu nemá skutečného ownera",
      "ověřte, zda je problém v objemu práce nebo v rozhodování",
      "vymezte konkrétní workstream nebo odpovědnost",
      "nastavte očekávání na první fázi spolupráce a její dopad",
    ],
    mistakes: [
      "snaha lepit seniorní problém dalším juniorem",
      "bodyshopping bez jasně vymezené odpovědnosti",
      "nejasné zadání typu ‚pomozte týmu obecně‘",
      "volba velkého vendor modelu i tam, kde chybí jen silný seniorní ownership",
    ],
    outcome: [
      "lepší rozhodnutí mezi kontraktorem, hirem a agenturou",
      "silnější technický ownership v kritické fázi",
      "rychlejší pohyb v blokované části projektu",
      "menší tlak na interní tým tam, kde už nestačí běžná kapacita",
    ],
    faq: [
      { question: "Jak poznat, že nejde jen o podstav týmu?", answer: "Když projekt zvládá běžný vývoj, ale opakovaně se blokuje na architektuře, převzetí odpovědnosti nebo riskantních změnách." },
      { question: "Je seniorní kontrakt vhodný i na kratší dobu?", answer: "Ano. Kratší zapojení často dává smysl při takeoveru, stabilizaci nebo nastavení další delivery fáze." },
      { question: "Není lepší rovnou agentura?", answer: "Někdy ano. Pokud ale projekt potřebuje hlavně přímý seniorní ownership uvnitř týmu, bývá kontraktor silnější a úspornější model." },
    ],
    related: ["contract-support", "problem-senior-contract-capacity", "comparison-contractor-vs-agency", "inquiry"],
    fitFor: ["produktové a interní týmy s blokovanou delivery oblastí", "firmy po odchodu klíčového člověka", "projekty, kde je potřeba rychle doplnit seniorní ownership"],
    fitNot: ["čistě náborový proces", "commodity staffing bez scope a odpovědnosti", "projekty bez interního ownera nebo business rozhodovatele"],
  }),
  guide({
    translationKey: "guide-how-to-price-an-app-takeover",
    locale: "en",
    slug: "how-to-price-an-app-takeover",
    title: "How to price an app takeover | Bc. Ondřej Halata (halatao.cz)",
    h1: "How to price an app takeover without blind spots",
    description: "A practical guide to pricing an existing app takeover: what drives cost, how to reduce uncertainty, and why the first takeover phase matters more than artificial upfront precision.",
    primaryQuery: "how to price an app takeover",
    heroTitle: "Takeover is not priced by counting screens. It is priced by uncertainty and risk.",
    heroSubtitle: "For companies taking over an existing application and trying to understand what can be estimated upfront and what needs a first discovery phase.",
    intro: [
      "Existing-app takeover follows a different logic than greenfield delivery. Cost depends not only on feature scope but also on technical readability, operational risk, and what must be protected immediately.",
      "Good pricing is not pretending everything is known from day one. It is separating what can be estimated from what first needs to be verified.",
    ],
    answer: "The most reliable takeover estimate usually appears after a focused first phase that maps the system, release flow, access, and critical business workflows.",
    steps: [
      "separate takeover review from later development",
      "identify which parts of the system are operationally critical",
      "verify access, environments, release, and monitoring",
      "estimate stabilisation separately from future delivery work",
    ],
    mistakes: [
      "trying to force a fixed price before discovery",
      "underestimating missing access or operational risk",
      "mixing takeover and major new scope into one opaque budget",
      "assuming rewrite first instead of leaving it as an informed option",
    ],
    outcome: [
      "a more realistic first budget and plan",
      "lower decision uncertainty",
      "clearer separation between review, stabilisation, and improvement",
      "less risk of an expensive wrong first move",
    ],
    faq: [
      { question: "Can takeover be priced upfront as a fixed amount?", answer: "Partly, in simpler cases. But for most live systems a smaller first review phase is the safer basis." },
      { question: "What affects takeover cost most?", answer: "System readability, access availability, operational criticality, technical debt, and how well the release flow is understood." },
      { question: "Is discovery just another delay before real work?", answer: "No. In takeover work discovery is usually the fastest path to avoiding a much more expensive wrong assumption." },
    ],
    related: ["service-existing-app-takeover", "problem-app-takeover", "tool-app-takeover-checklist", "inquiry"],
    fitFor: ["companies taking over live or unfinished applications", "buyers who need better estimate discipline", "teams facing vendor change or knowledge loss"],
    fitNot: ["greenfield projects with no inherited stack", "buyers expecting exact pricing with no access or visibility", "recruiter-style outreach"],
  }),
  guide({
    translationKey: "guide-when-internal-tool-better-than-saas",
    locale: "en",
    slug: "when-an-internal-tool-is-better-than-saas",
    title: "When an internal tool is better than SaaS | Bc. Ondřej Halata (halatao.cz)",
    h1: "When an internal tool is better than another SaaS product",
    description: "A practical guide for companies deciding between another SaaS tool and a purpose-built internal system, with a focus on workflow fit, hidden costs, and long-term control.",
    primaryQuery: "when an internal tool is better than saas",
    heroTitle: "The goal is not to own software for its own sake. The goal is to reduce the cost of compromise.",
    heroSubtitle: "For companies whose workflow, roles, and integrations are no longer fitting cleanly inside another generic SaaS tool.",
    intro: [
      "SaaS is often the right starting point. The problem begins when the company keeps adding exceptions, workarounds, and side systems because the core process no longer fits the tool well.",
      "An internal system makes sense when the process is important, repeated, and specific enough that the cost of compromise becomes more expensive than building the right operating layer.",
    ],
    answer: "An internal tool is usually the better option when workflow, roles, integrations, and ownership create expensive workarounds around the limits of a standard SaaS product.",
    steps: [
      "measure the cost of manual workarounds",
      "check how specific the process and roles really are",
      "include integrations and rule complexity in the decision",
      "start with a focused first version rather than a giant programme",
    ],
    mistakes: [
      "comparing only SaaS licence price",
      "ignoring the cost of work happening outside the tool",
      "trying to digitise the whole operation at once",
      "starting an internal system with no process owner or first-phase discipline",
    ],
    outcome: [
      "a stronger build-vs-buy decision",
      "more realistic expectations for the first internal release",
      "less risk of overscoping",
      "a clearer business case for internal tooling",
    ],
    faq: [
      { question: "Does the internal system need to replace everything?", answer: "No. It is often smarter to start with the workflow or team where the compromise cost is highest." },
      { question: "Can SaaS and internal tooling be combined?", answer: "Yes. Many strong setups keep standard functions in SaaS and build custom internal logic around the differentiating parts." },
      { question: "How do we know it is still too early?", answer: "Usually when the process is still unstable, the roles are simple, and the SaaS option covers most of the real work without painful workarounds." },
    ],
    related: ["comparison-custom-vs-saas", "service-internal-tools-development", "problem-internal-tool", "inquiry"],
    fitFor: ["companies evaluating internal tool investment", "teams working around SaaS limits", "buyers who want to calculate the cost of compromise"],
    fitNot: ["simple workflows with minimal integration or exception logic", "projects with no internal process owner", "buying decisions based only on lowest licence price"],
  }),
  guide({
    translationKey: "guide-when-project-needs-senior-contract-support",
    locale: "en",
    slug: "how-to-know-when-a-project-needs-senior-contract-support",
    title: "How to know when a project needs senior contract support | Bc. Ondřej Halata (halatao.cz)",
    h1: "How to know when a project needs senior contract support",
    description: "A practical guide for teams deciding whether a project needs senior contract capacity instead of another standard developer hire or a broader agency model.",
    primaryQuery: "how to know when a project needs senior contract support",
    heroTitle: "The bottleneck is often not headcount. It is ownership and judgement.",
    heroSubtitle: "For teams that can handle routine implementation but keep getting blocked on architecture, takeover, release confidence, or risky delivery areas.",
    intro: [
      "Senior contract support becomes the right model when the project does not just need more hands. It needs someone who can take responsibility for a difficult technical area or a sensitive delivery phase.",
      "The signal is often a busy team that still leaves the hardest decisions open for too long or keeps revisiting them without stronger ownership.",
    ],
    answer: "Senior contract support is usually the right fit when the bottleneck is ownership, architecture, takeover, or safe delivery of risky changes rather than raw implementation capacity alone.",
    steps: [
      "identify which part of the project has no true owner",
      "check whether the problem is work volume or decision quality",
      "define a clear workstream or responsibility boundary",
      "set expectations for the first phase and what it should improve",
    ],
    mistakes: [
      "trying to solve a senior problem with another junior hire",
      "using generic staff augmentation with no ownership scope",
      "asking for broad help with no defined delivery pressure",
      "choosing a large vendor model where direct senior ownership is what is actually missing",
    ],
    outcome: [
      "a clearer decision between contractor, hire, and agency",
      "stronger technical ownership in a critical phase",
      "faster movement in the blocked area",
      "less pressure on the internal team where routine capacity is no longer enough",
    ],
    faq: [
      { question: "How do we know this is not just an understaffed team?", answer: "Usually when day-to-day work continues, but architecture, risky changes, or takeover responsibility remain persistently blocked." },
      { question: "Can senior contract support be short-term?", answer: "Yes. Shorter engagements are often useful for takeover, stabilisation, or helping one critical phase land well." },
      { question: "Would an agency be better?", answer: "Sometimes. But when the real need is direct senior ownership inside the team, contract support is often the stronger and leaner model." },
    ],
    related: ["contract-support", "problem-senior-contract-capacity", "comparison-contractor-vs-agency", "inquiry"],
    fitFor: ["product and internal teams with a blocked delivery area", "companies after a key team change", "projects needing stronger senior ownership quickly"],
    fitNot: ["recruiting processes", "commodity staffing with no responsibility boundary", "projects with no internal owner or business decision-maker"],
  }),
];
