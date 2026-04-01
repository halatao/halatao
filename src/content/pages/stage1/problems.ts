// Generated content: problem-focused stage 1 pages. Safe to edit manually.

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
        label: isCs ? "Probrat zadání" : "Discuss your project",
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
            ? "Cílem není jen něco rychle opravit. Smyslem je vrátit projektu kontrolu, přehled a další rozvoj bez zbytečné nejistoty."
            : "The goal is not a quick patch. The goal is to restore control, clarity, and a safer path for future delivery.",
        ],
        bullets: seed.outcomes,
      },
    ],
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.fitFor, notFor: seed.fitNot },
    cta: isCs
      ? {
          label: "Nezávazně probrat spolupráci",
          href: "/cs/popsat-projekt",
          note: "Stačí krátce popsat stav aplikace nebo procesu a hlavní riziko, které dnes řešíte.",
        }
      : {
          label: "Explore the project fit",
          href: "/en/discuss-your-project",
          note: "Share the current state, the main risk, and what needs to change next.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const problemPages: ContentPage[] = [
  problem({
    translationKey: "problem-app-takeover",
    locale: "cs",
    slug: "potrebujeme-prevzit-rozpracovanou-aplikaci",
    title: "Převzetí rozpracované aplikace | Jak bezpečně převzít cizí systém",
    h1: "Jak bezpečně převzít rozpracovanou nebo cizí aplikaci",
    description: "Pomohu firmě bezpečně převzít rozpracovanou nebo cizí aplikaci, zmapovat technická a provozní rizika a navrhnout další postup bez zbytečného chaosu.",
    primaryQuery: "převzetí rozpracované aplikace",
    heroTitle: "Rozpracovaná aplikace běží, ale další krok je riskantní",
    heroSubtitle: "Typická situace po změně dodavatele, odchodu vývojáře nebo u projektu, kde chybí technické vedení a jistota dalšího postupu.",
    intro: [
      "Převzetí cizí nebo rozpracované aplikace je citlivý moment. Firma potřebuje pokračovat, ale zároveň nechce rozbít provoz ani investovat do technického směru, který se za pár měsíců ukáže jako slepá ulička.",
      "Největší riziko bývá v neznámých závislostech, nepřehledném release procesu a v tom, že důležité znalosti zůstaly u původního dodavatele.",
      "Proto dává smysl nejdřív zmapovat realitu systému a až potom rozhodovat, co stabilizovat, co zjednodušit a co případně přepsat.",
    ],
    symptoms: ["kód bez dokumentace a bez jasné architektury", "nejistota kolem nasazení a prostředí", "strach sahat do funkční části systému", "roadmapa stojí kvůli technickým neznámým"],
    whyItMatters: "Bez úvodního zmapování se snadno opravují jen viditelné symptomy a zůstávají skryté provozní i rozvojové blokátory.",
    approach: "Začínám orientací v systému, závislostech, provozu a kritických scénářích. Z toho vznikne prioritizovaný plán, který kombinuje stabilizaci, zrychlení dalšího vývoje a realistickou míru změn.",
    outcomes: ["jasnější přehled o rizicích", "bezpečnější rozhodování o změnách", "rychlejší navázání dalšího vývoje", "menší tlak na nepromyšlený rewrite"],
    faq: [
      { question: "Je potřeba kompletní přístup ke všemu hned na začátku?", answer: "Ideálně ano, ale často se postupuje po vrstvách. Nejdůležitější jsou repozitáře, prostředí, deployment a lidé, kteří znají byznys kontext." },
      { question: "Jak rychle poznáme, jestli je nutný větší zásah?", answer: "První audit obvykle rychle ukáže, kde je skutečné riziko. Teprve pak má smysl bavit se o větším refaktoru nebo rewritu." },
      { question: "Dá se převzetí zvládnout i během běžícího provozu?", answer: "Ano. U většiny takeover projektů je to nutnost. Právě proto preferuji postupné mapování a stabilizaci místo tvrdých řezů bez kontextu." },
      { question: "Můžete pak pokračovat i realizací?", answer: "Ano. Mohu navázat dlouhodobější spoluprací nebo předat strukturovaný plán vašemu internímu týmu." },
    ],
    related: ["service-existing-app-takeover", "problem-modernize-legacy-app", "problem-rescue-incomplete-project", "guide-how-to-take-over-an-existing-app-safely", "guide-how-to-run-app-takeover-audit", "guide-how-to-decide-app-needs-rewrite", "tool-release-stabilization-checklist", "inquiry"],
    fitFor: ["firmy po změně dodavatele", "produkty s nejasnou technickou situací", "týmy, které potřebují znovu získat kontrolu nad aplikací"],
    fitNot: ["čistě obsahové weby bez aplikace", "okamžitý redesign bez technického zásahu", "situace bez přístupu do zdrojů a prostředí"],
  }),
  problem({
    translationKey: "problem-internal-tool",
    locale: "cs",
    slug: "chceme-vyvinout-interni-system",
    title: "Interní systém na míru pro firmu | Kdy dává smysl a jak začít",
    h1: "Kdy dává interní systém na míru smysl",
    description: "Pomohu navrhnout a dodat interní systém na míru tam, kde firma potřebuje sjednotit workflow, role, data a odpovědnost v jednom vlastním nástroji.",
    primaryQuery: "interní systém na míru pro firmu",
    heroTitle: "Interní systém na míru pro důležitý firemní proces",
    heroSubtitle: "Dává smysl ve chvíli, kdy je potřeba sjednotit workflow, role, data a odpovědnost, ne jen nahradit jednu tabulku.",
    intro: [
      "Potřeba interního systému obvykle nevzniká proto, že firma chce vlastní software za každou cenu. Vzniká ve chvíli, kdy důležitý proces potřebuje jeden vlastní nástroj se srozumitelnými rolemi, stavy a daty.",
      "Největší přínos nebývá jen v rychlosti práce, ale v tom, že proces přestane viset na jednotlivcích, různé týmy začnou pracovat nad stejnou realitou a vedení uvidí skutečný stav bez ručně skládaných reportů.",
      "Dobrý start je popsat, který proces dnes nejvíc bolí, kdo v něm pracuje a co musí první verze zlepšit.",
    ],
    symptoms: ["více lidí pracuje nad stejnými daty bez jednotného stavu", "důležité kroky se řeší přes e-mail nebo chat", "reporting se skládá ručně", "odpovědnost mezi odděleními je nejasná"],
    whyItMatters: "Když je proces rozptýlený v několika nástrojích, firma ztrácí čas, chybovost roste a změna workflow je čím dál dražší.",
    approach: "Nejdřív dává smysl vyjasnit proces, role, data a první reálnou etapu. Teprve potom navrhovat konkrétní obrazovky a další moduly.",
    outcomes: ["menší provozní chaos", "lepší viditelnost stavu práce", "pevnější základ pro reporting", "systém, který lze dál rozšiřovat bez provizorií"],
    faq: [
      { question: "Jak poznat, že už nestačí SaaS nebo tabulky?", answer: "Ve chvíli, kdy vzniká moc ruční práce, role mají rozdílné potřeby, data jsou v několika místech a obcházení omezení začíná být dražší než vlastní řešení." },
      { question: "Musí mít interní systém všechny funkce hned?", answer: "Nemusí. Naopak je lepší začít menší verzí, která zlepší nejkritičtější část procesu." },
      { question: "Co když si nejsme jistí rozsahem?", answer: "To je běžné. Na začátku potřebujeme hlavně provozní kontext, priority a hranici první etapy." },
      { question: "Lze systém napojit na další nástroje?", answer: "Ano. U interních systémů je to často klíčové, protože bez napojení by se jen přesunula ruční práce jinam." },
    ],
    related: ["service-internal-tools-development", "problem-replace-spreadsheets-in-process", "comparison-internal-tool-vs-spreadsheets", "use-case-internal-admin-system", "use-case-service-team-ops-system", "tool-excel-to-internal-tool-migration-checklist", "inquiry"],
    fitFor: ["firmy s rostoucí operativní agendou", "týmy s více rolemi a workflow", "procesy, kde chybí jeden spolehlivý zdroj pravdy"],
    fitNot: ["jednoduchá evidence pro jednu osobu", "projekty bez vlastníka procesu", "čistě designový redesign bez změny fungování"],
  }),
  problem({
    translationKey: "problem-system-integrations",
    locale: "cs",
    slug: "potrebujeme-napojit-nekolik-systemu",
    title: "Napojení systémů a API integrace | Méně ručního přepisování dat",
    h1: "Napojení systémů bez ručního přepisování dat",
    description: "Pomohu navrhnout a dodat napojení systémů, API integrace a automatizace tam, kde firma trpí na přepisování dat, ruční kontroly a nejasný tok informací.",
    primaryQuery: "napojení systémů",
    heroTitle: "Data dnes obcházejí lidi místo propojených systémů",
    heroSubtitle: "Nejčastěji mezi ERP, CRM, e-shopem, interním systémem, účetnictvím a reportingem.",
    intro: [
      "Když mezi systémy neexistuje spolehlivé propojení, firma si začne pomáhat ručně. Vznikají tabulky navíc, kontroly navíc a rozhodování nad neúplnými daty.",
      "Takový stav dlouho vypadá jako drobná neefektivita, ale časem se stane provozním limitem a zdrojem chyb, které se těžko dohledávají.",
      "Praktický začátek je zjistit, která propojení mají největší dopad a kde je problém spíš v procesu než v samotné technologii.",
    ],
    symptoms: ["ruční přepisování mezi systémy", "nejasné vlastnictví dat", "opakované kontroly stavu objednávek, plateb nebo případů", "reporting z několika zdrojů bez jistoty správnosti"],
    whyItMatters: "Bez jasného toku dat se ruční práce násobí a firma si často nevšimne, kolik kapacity mizí v činnostech bez skutečné přidané hodnoty.",
    approach: "Nejdřív mapuji proces, zdroje dat, výjimky a dopad chyb. Až potom navrhuji integraci, automatizaci nebo doplňkový interní nástroj.",
    outcomes: ["méně přepisování a dohledávání", "lepší návaznost mezi nástroji", "spolehlivější podklad pro reporting", "přehlednější rozhodování o dalších úpravách"],
    faq: [
      { question: "Stačí na to vždy jen API integrace?", answer: "Ne. Často je potřeba zároveň upravit workflow, validace nebo interní rozhraní, aby tok dat dával smysl i lidem." },
      { question: "Má smysl automatizovat všechno najednou?", answer: "Většinou ne. Lepší je začít místy s největším dopadem a nejmenším rizikem." },
      { question: "Lze kombinovat audit a následnou implementaci?", answer: "Ano. Úvodní diagnostika může přejít přímo do realizace prioritních kroků." },
      { question: "Pomůžete i s interním systémem kolem integrací?", answer: "Ano. Někdy samotné propojení nestačí a je potřeba doplnit i rozhraní pro lidi nebo kontrolní workflow." },
    ],
    related: ["service-automations-and-integrations", "service-internal-tools-development", "guide-how-to-run-automation-discovery", "use-case-workflow-automation-tools", "use-case-service-team-ops-system", "tool-api-integration-checklist", "inquiry"],
    fitFor: ["firmy s více systémy a ruční koordinací", "procesy s vysokou chybovostí při přenosu dat", "týmy, které chtějí lépe řídit opakované workflow"],
    fitNot: ["izolovaný nástroj bez návazností", "projekty bez přístupu k datovým zdrojům", "pouhé pořízení licence bez změny procesu"],
  }),
  problem({
    translationKey: "problem-app-takeover",
    locale: "en",
    slug: "we-need-to-take-over-an-existing-app",
    title: "We need to take over an existing app | Bc. Ondřej Halata (halatao.cz)",
    h1: "We need to take over an existing app safely",
    description: "I help companies take over existing or partially delivered web applications, map delivery risk, and define the next steps without forcing a rewrite first.",
    primaryQuery: "we need to take over an existing app",
    heroTitle: "The app is important, but the next change feels risky",
    heroSubtitle: "A common situation after a supplier change, a team transition, or a period without strong technical ownership.",
    intro: [
      "Taking over an inherited application is a sensitive moment. The company needs progress, but it also needs to avoid breaking operations or investing in the wrong technical direction.",
      "The real risk is usually in hidden dependencies, unclear release flow, and knowledge that remained with the previous supplier or team.",
      "That is why the first step should be structured discovery, not dramatic rebuilding.",
    ],
    symptoms: ["little or no documentation", "unclear deployment or environment setup", "fear of touching working parts of the system", "roadmap blocked by technical uncertainty"],
    whyItMatters: "Without an initial map of the system, teams often fix visible symptoms while the underlying operational and delivery risks remain untouched.",
    approach: "I start with codebase orientation, dependency review, environment checks, and the most critical business workflows. From there we can set priorities grounded in impact instead of guesswork.",
    outcomes: ["clearer view of risk", "safer change decisions", "faster onboarding into the inherited stack", "less pressure to rewrite by default"],
    faq: [
      { question: "Do you need full access from day one?", answer: "Ideally yes, but many handovers happen in stages. Source code, infrastructure, release flow, and business context are the most important starting points." },
      { question: "How quickly can we tell whether larger changes are needed?", answer: "A focused review usually shows the main risks quickly. Bigger refactors or rewrites should come only after that picture is clear." },
      { question: "Can takeover work happen while the app stays live?", answer: "Yes. That is the normal case. It is one reason I prefer staged stabilisation over abrupt rebuild decisions." },
      { question: "Can you stay involved after the review?", answer: "Yes. I can continue with delivery or hand over a structured plan to your internal team." },
    ],
    related: ["service-existing-app-takeover", "problem-modernize-legacy-app", "comparison-rewrite-vs-incremental-app-improvement", "guide-how-to-run-app-takeover-audit", "guide-how-to-decide-app-needs-rewrite", "tool-release-stabilization-checklist", "inquiry"],
    fitFor: ["companies after a supplier or team change", "products with unclear technical ownership", "buyers who need control before committing to bigger change"],
    fitNot: ["simple content sites with no application logic", "visual redesign-only projects", "situations with no access to code or environments"],
  }),
  problem({
    translationKey: "problem-internal-tool",
    locale: "en",
    slug: "we-need-an-internal-tool",
    title: "We need an internal tool | Bc. Ondřej Halata (halatao.cz)",
    h1: "We need an internal tool that improves real operations",
    description: "I help teams scope and build internal tools when a company needs one owned system for workflow, roles, data, and accountability.",
    primaryQuery: "we need an internal tool",
    heroTitle: "The company needs one owned system for an important workflow",
    heroSubtitle: "Internal software becomes the right move when workflow, roles, data, and accountability need to live in one system, not across loosely connected tools.",
    intro: [
      "A company usually does not ask for an internal tool because it wants custom software for its own sake. It asks for one because an important workflow needs one owned system with clear roles, states, and data ownership.",
      "The business value is not only speed. It is better control, clearer ownership, and a process where teams work from the same reality instead of depending on specific people remembering specific steps.",
      "A strong start is to define the painful workflow, the important roles, and what the first release has to improve.",
    ],
    symptoms: ["several people working on the same data with no shared state", "key steps happening over email or chat", "manual reporting across tools", "unclear responsibility between teams"],
    whyItMatters: "When a process is split across several tools, time is lost, errors increase, and every workflow change becomes more expensive.",
    approach: "I focus first on the process, users, data, and the first practical delivery phase. Screen-level detail comes after the operating model is clear.",
    outcomes: ["less operational noise", "better visibility into work in progress", "cleaner basis for reporting", "a system that can grow without temporary workarounds"],
    faq: [
      { question: "How do we know spreadsheets or SaaS are no longer enough?", answer: "The usual signal is rising manual work, conflicting needs across roles, and too much business logic living outside the tool itself." },
      { question: "Does the internal tool need every feature from the start?", answer: "No. It is usually better to start with the workflow that creates the most friction and expand from there." },
      { question: "What if we are not sure about the scope?", answer: "That is normal. The important thing at the start is business context, priorities, and the boundary of the first release." },
      { question: "Can the internal tool connect to existing systems?", answer: "Yes. That is often essential. Otherwise the manual work simply moves somewhere else." },
    ],
    related: ["service-internal-tools-development", "problem-replace-spreadsheets-in-process", "comparison-internal-tool-vs-spreadsheets", "use-case-internal-admin-system", "tool-excel-to-internal-tool-migration-checklist", "inquiry"],
    fitFor: ["operations-heavy teams", "multi-role workflows with weak visibility", "buyers who need one reliable operating system for the process"],
    fitNot: ["single-user micro tools", "projects without a process owner", "pure redesign work with no workflow change"],
  }),
  problem({
    translationKey: "problem-system-integrations",
    locale: "en",
    slug: "we-need-system-integrations",
    title: "We need system integrations | Bc. Ondřej Halata (halatao.cz)",
    h1: "We need system integrations and less manual data handling",
    description: "I help companies connect systems and reduce repetitive manual work where data moves slowly, inconsistently, or with too much human intervention.",
    primaryQuery: "we need system integrations",
    heroTitle: "The data is travelling through people instead of systems",
    heroSubtitle: "Most often across ERP, CRM, ecommerce, finance, internal tools, and reporting layers that do not talk to each other properly.",
    intro: [
      "When systems are not connected in a reliable way, the company creates manual workarounds. That usually means extra spreadsheets, extra checks, and decisions made on incomplete data.",
      "For a while it looks like small inefficiency. Over time it becomes an operational drag and a source of errors that are difficult to trace.",
      "The pragmatic first step is to identify which connections matter most and whether the real issue is missing integration, weak process design, or both.",
    ],
    symptoms: ["manual re-entry between systems", "unclear data ownership", "repeated status or payment checks", "reporting built from multiple unreliable sources"],
    whyItMatters: "Without a clearer data flow, manual work compounds and teams often underestimate how much capacity is disappearing into low-value coordination.",
    approach: "I map the workflow, source systems, exceptions, and business impact first. Only then does it make sense to define the integration, automation, or supporting internal tooling.",
    outcomes: ["less copying and checking", "stronger continuity between tools", "better reporting input quality", "clearer decisions on what to improve next"],
    faq: [
      { question: "Is API integration always enough?", answer: "No. Many useful integration projects also require workflow changes, validation rules, or an internal interface for people handling exceptions." },
      { question: "Should we automate everything at once?", answer: "Usually not. Starting with the highest-impact and lowest-risk points tends to be the better path." },
      { question: "Can the review turn into implementation work?", answer: "Yes. The diagnostic phase can move directly into delivery of the priority steps." },
      { question: "Can you help build a small internal layer around the integrations?", answer: "Yes. Sometimes the connection alone is not enough and users also need visibility, controls, or exception handling." },
    ],
    related: ["service-automations-and-integrations", "guide-how-to-run-automation-discovery", "use-case-workflow-automation-tools", "use-case-service-team-ops-system", "tool-api-integration-checklist", "inquiry"],
    fitFor: ["companies with manual cross-system coordination", "teams with high transfer-error risk", "buyers who want better control over repeated workflows"],
    fitNot: ["isolated tools with no dependencies", "projects with no access to source systems", "simple licence purchases with no process change"],
  }),
  problem({
    translationKey: "problem-ai-in-business-process",
    locale: "cs",
    slug: "chceme-vyuzit-ai-ve-firemnim-procesu",
    title: "Chceme využít AI ve firemním procesu",
    h1: "Jak využít AI ve firemním procesu bez dalšího chaosu",
    description:
      "Pomohu firmám vyhodnotit, kde má AI ve firemním procesu reálný přínos, kde je lepší začít automatizací nebo úpravou workflow a jak se vyhnout další vrstvě provozní složitosti.",
    primaryQuery: "využití ai ve firmě",
    heroTitle: "Chceme AI, ale nechceme další nástroj bez skutečného přínosu",
    heroSubtitle:
      "Typická situace, kdy firma vidí potenciál AI, ale ještě nemá jistotu, kde přesně dává smysl a kde by jen přidala další složitost.",
    intro: [
      "Mnoho firem dnes ví, že AI může pomoct. Často ale nezačínají jasným use casem, nýbrž pocitem, že by také měly něco s AI dělat.",
      "Právě v tom bývá problém. Pokud není jasný proces, kvalitní vstupy a konkrétní místo, kde dnes mizí čas nebo vznikají chyby, AI většinou jen přidá další vrstvu složitosti.",
    ],
    symptoms: [
      "firma chce využít AI, ale neumí pojmenovat konkrétní use case",
      "lidé očekávají, že AI vyřeší nejasný nebo chaotický proces",
      "není jisté, zda je problém v datech, workflow nebo v ruční operativě",
      "chybí rozhodnutí, kde začít malou a smysluplnou první etapou",
    ],
    whyItMatters:
      "Když se AI nasadí bez dobrého provozního fitu, nevzniká jen zklamání z výsledku. Často se zvyšuje i složitost procesu, závislost na ruční kontrole a nedůvěra v další digitalizační kroky.",
    approach:
      "Začínám procesem, ne technologií. Nejprve hledáme, kde dnes vzniká největší ztráta času, kde se opakují stejné kroky a kde má smysl porovnat AI s jednodušší automatizací nebo úpravou interního systému.",
    outcomes: [
      "jasnější rozhodnutí, zda AI dává smysl právě teď",
      "konkrétní první use case místo obecného hype zadání",
      "nižší riziko slepé investice do zbytečné složitosti",
      "lepší návaznost AI na reálný proces, data a odpovědnost",
    ],
    faq: [
      { question: "Musí být součástí řešení vždy AI?", answer: "Ne. Někdy je lepší začít jednodušší automatizací, lepším workflow nebo úpravou interního systému. I to je dobrý výsledek." },
      { question: "Kde AI ve firmě funguje nejčastěji?", answer: "Často u práce s dokumenty, třídění požadavků, vyhledávání informací nebo tam, kde pomáhá zrychlit opakované kroky nad textem a daty." },
      { question: "Je vhodné začít velkým AI projektem?", answer: "Obvykle ne. Silnější bývá menší první use case, na kterém se ověří reálný přínos i provozní limity." },
      { question: "Co když zjistíme, že AI pro náš proces není vhodná?", answer: "To je stále cenný výsledek. Je lepší to zjistit včas, než investovat do vrstvy, která nepřinese odpovídající hodnotu." },
    ],
    related: [
      "service-ai-automation-and-integrations",
      "service-automations-and-integrations",
      "service-internal-tools-development",
      "guide-when-ai-integration-makes-sense",
      "use-case-ai-internal-documents",
      "use-case-ai-intake-triage",
      "inquiry",
    ],
    fitFor: [
      "firmy, které chtějí AI, ale hledají konkrétní první use case",
      "týmy s opakovanou administrativou, dokumenty nebo příchozí agendou",
      "buyery, kteří chtějí odlišit smysluplné využití AI od hype",
    ],
    fitNot: [
      "čistě experimentální AI bez provozního cíle",
      "projekty bez ownera procesu nebo bez přístupu k datům",
      "situace, kde se čeká, že AI vyřeší nevyjasněný chaos sama",
    ],
  }),
  problem({
    translationKey: "problem-ai-in-business-process",
    locale: "en",
    slug: "want-to-use-ai-in-a-business-process",
    title: "We want to use AI in a business process",
    h1: "How to use AI in a business process without adding another layer of chaos",
    description:
      "I help companies assess where AI has real value inside a business process, where automation or workflow improvement should come first, and how to avoid adding complexity without operational payoff.",
    primaryQuery: "using ai in a business process",
    heroTitle: "We want AI, but not another tool with no real operational gain",
    heroSubtitle:
      "A typical situation where the company sees AI potential but is not yet sure where it truly fits and where it would only add more complexity.",
    intro: [
      "Many companies know AI could help. What they often do not have yet is a clear use case grounded in a real process.",
      "That is where problems start. If the workflow is unclear, the inputs are weak, and the team cannot point to the real source of wasted time or repeated errors, AI usually becomes an extra layer instead of a useful one.",
    ],
    symptoms: [
      "the company wants AI but cannot define a focused use case",
      "people expect AI to fix an unclear or chaotic process",
      "it is not obvious whether the real issue is data, workflow, or manual operations",
      "there is no clear first step for a practical pilot or first release",
    ],
    whyItMatters:
      "When AI is introduced without operational fit, the problem is not only disappointing results. It can also increase process complexity, manual oversight, and scepticism toward future improvement work.",
    approach:
      "I start with the process, not the technology. First we identify where time is lost, where the same work repeats, and where AI should be compared against simpler automation or internal-tool changes.",
    outcomes: [
      "clearer decision on whether AI makes sense right now",
      "one practical first use case instead of a vague hype brief",
      "lower risk of spending on unnecessary complexity",
      "better alignment between AI, process, data, and ownership",
    ],
    faq: [
      { question: "Does the solution always need AI?", answer: "No. In some cases the stronger first step is simpler automation, clearer workflow, or an internal-tool change. That is still a good outcome." },
      { question: "Where does AI work best inside a company?", answer: "Often around document handling, request triage, knowledge retrieval, or repeated work on text and structured data." },
      { question: "Should we start with a large AI project?", answer: "Usually not. A smaller first use case is often better for validating value and exposing operational limits early." },
      { question: "What if we learn AI is not the right fit?", answer: "That is still valuable. It is better to learn that early than to invest in a layer that will not create enough business value." },
    ],
    related: [
      "service-ai-automation-and-integrations",
      "service-automations-and-integrations",
      "service-internal-tools-development",
      "guide-when-ai-integration-makes-sense",
      "use-case-ai-internal-documents",
      "use-case-ai-intake-triage",
      "inquiry",
    ],
    fitFor: [
      "companies looking for a first realistic AI use case",
      "teams with recurring admin, document, or intake-heavy work",
      "buyers wanting practical AI rather than hype",
    ],
    fitNot: [
      "purely experimental AI with no operating goal",
      "projects with no process owner or no access to usable inputs",
      "situations where AI is expected to solve undefined chaos by itself",
    ],
  }),
];
