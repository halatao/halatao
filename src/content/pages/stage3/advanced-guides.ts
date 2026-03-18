// Generated content: advanced guides for stage 3. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale } from "@/content/types";

type AdvancedGuideSeed = {
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
  sections: { title: string; body: string[]; bullets?: string[] }[];
  faq: FAQItem[];
  related: string[];
};

function advancedGuide(seed: AdvancedGuideSeed): ContentPage {
  const isCs = seed.locale === "cs";
  return definePage({
    translationKey: seed.translationKey,
    stage: 3,
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
      eyebrow: isCs ? "Pokrocilý pruvodce" : "Advanced guide",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: { label: isCs ? "Probrat podobný projekt" : "Discuss a similar project", href: buildInquiryHref(seed.locale) },
    },
    intro: seed.intro,
    sections: seed.sections,
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.related, notFor: isCs ? ["obecné neprojektové ctení"] : ["generic non-project reading"] },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const advancedGuidePages: ContentPage[] = [
  advancedGuide({
    translationKey: "guide-how-to-estimate-a-custom-web-app",
    locale: "cs",
    slug: "jak-nacenit-webovou-aplikaci",
    title: "Jak nacenit webovou aplikaci | Bc. Ondřej Halata (halatao.cz)",
    h1: "Jak nacenit webovou aplikaci bez falešné presnosti",
    description: "Praktický pruvodce, jak premýšlet o nacenení webové aplikace na míru bez nereálných slibu a bez slepého strílení hodin.",
    primaryQuery: "jak nacenit webovou aplikaci",
    heroTitle: "Dobrá cena nevzniká z veštení, ale z rozumného rozdelení rizika",
    heroSubtitle: "Smysl má chápat hlavní cost drivers, rozsah první etapy a to, co je ješte neznámé.",
    intro: ["Odhad webové aplikace nebývá presný proto, že by vývojári neumeli pocítat. Nepresnost vzniká hlavne z nejasného scope a z neznámých rizik.", "Rozumný odhad proto stojí na delení projektu do etap a na pojmenování toho, co je jisté, co je približné a co je zatím hypotéza."],
    sections: [
      { title: "Co cenu ovlivnuje nejvíc", body: ["Nejde jen o pocet obrazovek. Duležitejší bývá komplexita workflow, role, integrace, datový model a požadavky na provoz."], bullets: ["více rolí a oprávnení", "integrace a import/export dat", "výjimky ve workflow", "provozní a bezpecnostní nároky"] },
      { title: "Jak odhad zpresnit bez zbytecné byrokracie", body: ["Nejlepší cesta bývá rozpad na první etapu, jasný cíl a pojmenování rizik, která se musí overit v praxi."] },
      { title: "Cemu se vyhnout", body: ["Nejhorší variantou je trvat na velmi presném císle ve chvíli, kdy ješte není jasné, co presne má být dodané a co se ukáže až behem práce."] },
      { title: "Jak s odhadem pracovat v projektu", body: ["Odhad není jednorázový akt. Mel by se zpresnovat s tím, jak se potvrzují priority a poznává realita projektu."] },
    ],
    faq: [
      { question: "Lze dát cenu bez specifikace?", answer: "Lze dát rámcový odhad nebo návrh první etapy. Presné císlo bez kontextu bývá spíš iluze než užitecná informace." },
      { question: "Co je lepší: fixní cena nebo prubežná spolupráce?", answer: "Záleží na jistote scope. U vyšší nejistoty bývá bezpecnejší dobre rízená etapová spolupráce." },
      { question: "Má smysl nacenit nejdrív jen MVP?", answer: "Ano. To je casto nejrozumnejší forma prvního odhadu." },
    ],
    related: ["guide-how-to-scope-a-custom-web-application", "service-custom-web-app-development", "use-case-reporting-dashboard", "inquiry"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-plan-an-mvp-web-application",
    locale: "cs",
    slug: "jak-naplanovat-mvp-webove-aplikace",
    title: "Jak naplánovat MVP webové aplikace | Bc. Ondřej Halata (halatao.cz)",
    h1: "Jak naplánovat MVP webové aplikace, které není jen polotovar",
    description: "Praktický pruvodce, jak navrhnout MVP webové aplikace tak, aby rešilo duležitý problém a nevypadalo jako nedokoncený produkt.",
    primaryQuery: "jak naplánovat mvp webové aplikace",
    heroTitle: "MVP není co nejméne funkcí. Je to co nejmenší užitecný celek.",
    heroSubtitle: "První verze musí zvládnout duležitý workflow, ne jen ukázku obrazovek.",
    intro: ["Nejslabší MVP bývá to, které je malé jen na papíre, ale v praxi nereší celý duležitý scénár. Výsledek pak nikoho nepresvedcí a jen zvyšuje neduveru k projektu.", "Silné MVP je dost úzké na rychlé dodání, ale dost úplné na overení reálného používání."],
    sections: [
      { title: "Jak vybírat první workflow", body: ["MVP by melo rešit jeden duležitý proces od zacátku do konce, ne deset rozpracovaných polotovaru."], bullets: ["vysoký provozní dopad", "jasný vlastník", "rozumné riziko", "možnost rychlé zpetné vazby"] },
      { title: "Co do MVP nepatrí", body: ["Funkce bez jasné návaznosti na hlavní workflow, prémium doplnky, které nic neoverují, a sekundární scénáre, které jen nafukují scope."] },
      { title: "Jak poznat, že MVP funguje", body: ["Ne podle poctu funkcí, ale podle toho, jestli lidé dokážou s první verzí vyrešit konkrétní problém rychleji a jisteji než predtím."] },
      { title: "Jak pripravit další etapy", body: ["Dobré MVP usnadní rozhodnutí, co pridat dál, protože už stojí na reálném používání, ne na hypotézách."] },
    ],
    faq: [
      { question: "Muže být MVP interní systém?", answer: "Ano. U interních nástroju bývá MVP velmi praktický zpusob, jak rychle odlehcit hlavnímu bottlenecku." },
      { question: "Má být MVP designove hotové?", answer: "Melo by být dost duveryhodné a použitelné pro reálnou práci, ale nemusí obsahovat každou okrajovou vrstvu produktu." },
      { question: "Jak dlouho má plánování MVP trvat?", answer: "Méne, než si firmy obvykle myslí. Duležitejší než dlouhé plánování je správný výber prvního workflow." },
    ],
    related: ["guide-how-to-scope-a-custom-web-application", "service-custom-web-app-development", "use-case-client-portal", "comparison-custom-vs-saas"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-stabilize-a-slow-business-app",
    locale: "cs",
    slug: "jak-stabilizovat-pomalou-aplikaci",
    title: "Jak stabilizovat pomalou aplikaci | Bc. Ondřej Halata (halatao.cz)",
    h1: "Jak stabilizovat pomalou webovou aplikaci pro byznys",
    description: "Praktický pruvodce stabilizací pomalé nebo krehké business aplikace bez unáhleného rewritu a bez kosmetických zásahu bez dopadu.",
    primaryQuery: "jak stabilizovat pomalou aplikaci",
    heroTitle: "Pomalá aplikace nebývá jen problém výkonu",
    heroSubtitle: "Casto jde i o nejasné priority, krehké dotazy, špatnou práci s daty a release proces, který brzdí opravy.",
    intro: ["Když je aplikace pomalá, tým casto sahá po rychlých mikro-optimalizacích. Jenže uživatelé vnímají problém jako celek: výkon, stabilitu i pocit jistoty pri používání.", "Praktická stabilizace proto zacíná merením dopadu a prioritizací nejbolestivejších míst."],
    sections: [
      { title: "Kde hledat hlavní prícinu", body: ["Nejde jen o frontend. Problém bývá v dotazech, datech, cachování, infrastrukture i v tom, jak aplikace roste bez pravidel."], bullets: ["dotazy a práce s databází", "zbytecne težké obrazovky", "slabé cachování nebo paging", "release proces brzdící opravy"] },
      { title: "Jak postupovat", body: ["Nejdrív zmerit a potvrdit dopad. Pak rešit nekolik nejkritictejších míst s jasným prínosem, ne plošný refaktor bez smeru."] },
      { title: "Co bývá rychlá výhra", body: ["Lepší práce s daty, omezení zbytecných dotazu, úprava nejpomalejších workflow a odstranení nejvetších technických bottlenecku."] },
      { title: "Kdy uvažovat o vetší zmene", body: ["Až když se ukáže, že problém není v nekolika uzlech, ale v samotném tvaru architektury nebo datového modelu."] },
    ],
    faq: [
      { question: "Je pomalá aplikace duvod pro rewrite?", answer: "Ne automaticky. Nejprve je potreba zjistit, co výkon opravdu brzdí a jaký je dopad jednotlivých problému." },
      { question: "Co když nejsou dobré metriky?", answer: "I to je cenné zjištení. Cást stabilizace bývá práve doplnení merení a lepšího pozorování systému." },
      { question: "Lze výkon rešit i prubežne bez velkého projektu?", answer: "Ano. U mnoha aplikací je to nejpraktictejší cesta." },
    ],
    related: ["service-existing-app-takeover", "comparison-rewrite-vs-incremental-app-improvement", "technology-typescript-for-large-web-projects", "inquiry"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-estimate-a-custom-web-app",
    locale: "en",
    slug: "how-to-estimate-a-custom-web-app",
    title: "How to estimate a custom web app | Bc. Ondřej Halata (halatao.cz)",
    h1: "How to estimate a custom web app without fake precision",
    description: "A practical guide to estimating a custom web application without pretending the project is fully known before delivery starts.",
    primaryQuery: "how to estimate a custom web app",
    heroTitle: "A good estimate is about risk framing, not fortune telling",
    heroSubtitle: "What matters most is understanding the major cost drivers, the first delivery phase, and what is still unknown.",
    intro: ["Application estimates are rarely wrong because engineers cannot count. They are wrong because scope, risk, and hidden complexity are unclear.", "A useful estimate therefore breaks the work into stages and separates what is known from what still needs validation."],
    sections: [
      { title: "What drives cost the most", body: ["Screen count matters less than workflow complexity, permissions, integrations, data shape, and operational requirements."], bullets: ["multiple roles and permission layers", "integrations and imports/exports", "workflow exceptions", "operational and security requirements"] },
      { title: "How to improve estimate quality", body: ["The best method is usually to scope a meaningful first phase and explicitly list the risk areas that need to be validated during delivery."] },
      { title: "What to avoid", body: ["Demanding a highly precise number while the real scope is still unclear creates false confidence rather than useful decision support."] },
      { title: "How to use estimates inside delivery", body: ["An estimate should evolve as the team confirms priorities and learns more about the actual system or workflow."] },
    ],
    faq: [
      { question: "Can you price a project without a full specification?", answer: "You can price a first phase or give a range. A precise headline number without context is often misleading." },
      { question: "What is better: fixed price or staged collaboration?", answer: "That depends on scope certainty. With more unknowns, a well-run staged model is usually safer." },
      { question: "Is it sensible to estimate only the MVP first?", answer: "Yes. That is often the most useful and honest first estimate." },
    ],
    related: ["guide-how-to-scope-a-custom-web-application", "service-custom-web-app-development", "use-case-reporting-dashboard", "inquiry"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-plan-an-mvp-web-application",
    locale: "en",
    slug: "how-to-plan-an-mvp-web-application",
    title: "How to plan an MVP web application | Bc. Ondřej Halata (halatao.cz)",
    h1: "How to plan an MVP web application that is more than a half-finished product",
    description: "A practical guide to planning an MVP web application that solves a real workflow instead of shipping a thin collection of incomplete screens.",
    primaryQuery: "how to plan an mvp web application",
    heroTitle: "MVP does not mean the fewest possible features",
    heroSubtitle: "It means the smallest useful whole that proves the workflow and the value.",
    intro: ["Weak MVPs are often small only on paper. In practice they fail because they do not complete an important workflow well enough to teach the team anything.", "A strong MVP is narrow enough to ship quickly but complete enough to test real usage."],
    sections: [
      { title: "How to choose the first workflow", body: ["The first release should solve one important process end to end rather than ten fragmented feature ideas."], bullets: ["high operational value", "clear owner", "reasonable risk", "fast feedback potential"] },
      { title: "What to leave out", body: ["Secondary scenarios, prestige features, and polish layers that do not help validate the main workflow should stay out of the first phase."] },
      { title: "How to tell whether the MVP works", body: ["Not by feature count, but by whether people can solve a meaningful problem better than before using the first release."] },
      { title: "How later phases become clearer", body: ["A good MVP makes future roadmap decisions easier because the next steps come from real usage rather than early assumptions."] },
    ],
    faq: [
      { question: "Can an MVP be an internal tool?", answer: "Yes. Internal tools often benefit strongly from a focused first release aimed at the biggest operational bottleneck." },
      { question: "Does an MVP need to look fully polished?", answer: "It needs to be trustworthy and usable for real work, but it does not need every secondary product layer from the start." },
      { question: "How long should MVP planning take?", answer: "Usually less time than teams expect. The key is picking the right first workflow rather than over-planning every future branch." },
    ],
    related: ["guide-how-to-scope-a-custom-web-application", "service-custom-web-app-development", "use-case-client-portal", "comparison-custom-vs-saas"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-stabilize-a-slow-business-app",
    locale: "en",
    slug: "how-to-stabilize-a-slow-business-app",
    title: "How to stabilise a slow business app | Bc. Ondřej Halata (halatao.cz)",
    h1: "How to stabilise a slow business application",
    description: "A practical guide to improving a slow or fragile business application without defaulting to a rewrite or cosmetic changes with no real impact.",
    primaryQuery: "how to stabilize a slow business app",
    heroTitle: "A slow application is rarely only a performance problem",
    heroSubtitle: "It is often a mix of weak priorities, heavy data access, fragile workflows, and delivery friction that slows down fixes.",
    intro: ["When an app is slow, teams often reach for isolated micro-optimisations. Users experience the problem as a whole: speed, stability, and confidence in the workflow.", "Practical stabilisation starts by measuring impact and focusing on the most painful points first."],
    sections: [
      { title: "Where the root cause often sits", body: ["The issue may be in queries, frontend payload, data shape, caching, infrastructure, or the release model that makes fixes too hard to deliver."], bullets: ["database and query pressure", "heavy screens or payloads", "weak caching or pagination", "release process slowing down fixes"] },
      { title: "How to work through it", body: ["Measure first, confirm business impact, and then improve a few critical points with clear value instead of launching a broad unfocused refactor."] },
      { title: "What often improves things fastest", body: ["Better data access patterns, less unnecessary fetching, improvements to the slowest workflows, and removing the biggest technical bottlenecks."] },
      { title: "When to consider larger structural change", body: ["Only when the problem proves to be rooted in the architecture or data model itself rather than a smaller set of fixable hotspots."] },
    ],
    faq: [
      { question: "Is slowness a reason to rewrite?", answer: "Not automatically. The first step is to understand what is actually causing the delay and how it affects the business." },
      { question: "What if we lack good performance metrics?", answer: "That is a useful finding in itself. Part of stabilisation is often better visibility into system behaviour." },
      { question: "Can performance work happen incrementally?", answer: "Yes. For many business apps that is the most practical approach." },
    ],
    related: ["service-existing-app-takeover", "comparison-rewrite-vs-incremental-app-improvement", "technology-typescript-for-large-web-projects", "inquiry"],
  }),
];



