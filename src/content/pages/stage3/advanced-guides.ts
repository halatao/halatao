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
    translationKey: "guide-how-to-run-app-takeover-audit",
    locale: "cs",
    slug: "jak-pripravit-takeover-audit-aplikace",
    title: "Jak pripravit takeover audit aplikace | Bc. Ondrej Halata (halatao.cz)",
    h1: "Jak pripravit takeover audit aplikace pred prevzetim ciziho systemu",
    description: "Prakticky pruvodce takeover auditem aplikace: co zjistit pred prevzetim, jak pojmenovat rizika a jak pripravit prvni realisticky dalsi krok.",
    primaryQuery: "takeover audit aplikace",
    heroTitle: "Pred prevzetim aplikace potrebujete vic nez jen pristup do repozitare",
    heroSubtitle: "Dobre pripraveny takeover audit pomaha oddelit technicka rizika, provozni zavislosti a priority prvni etapy od dojmu, ze se situace vyresi sama po handoveru.",
    intro: [
      "Prevzeti cizi aplikace neni jen otazka kodu. Dulezite je zjistit, jak system opravdu bezi, kde jsou provozni zavislosti, jak vypada release a co se stane, kdyz se udela spatny prvni zasah.",
      "Takeover audit proto neslouzi k vytvoreni tluste dokumentace. Jeho smyslem je rychle ziskat prehled o rizicich, slabych mistech a o tom, co ma byt prvni duveryhodny dalsi krok.",
    ],
    sections: [
      { title: "Co si audit musi vyjasnit", body: ["Nejdriv je potreba zmapovat nejen aplikaci samotnou, ale i prostredi, release cestu, pristupy, data, integrace a znalost lidi, na kterych dnes system stoji."], bullets: ["pristupy do repozitaru, hostingu a tretich stran", "kriticke workflow a provozni rizika", "release proces, monitoring a rollback moznosti", "stav dokumentace, znalosti a ownershipu"] },
      { title: "Jak oddelit fakta od odhadu", body: ["U takeoveru byva hodne tvrzeni zalozenych na dojmu. Prakticky audit potrebuje rozlisit, co je potvrzene, co je hypoteza a co je zatim skryte riziko vyzadujici dalsi overeni."] },
      { title: "Na co navazat po auditu", body: ["Cilem neni audit pro audit. Vystupem ma byt prioritizace: co resit kvuli stabilite hned, co kvuli rychlosti delivery a co zatim nechat byt."] },
      { title: "Cemu se vyhnout", body: ["Nejslabsi varianta je preskocit audit a rovnou slibovat fixy, prepis nebo rychly takeover bez pochopeni provozu, release rizik a skrytych zavislosti."] },
    ],
    faq: [
      { question: "Je takeover audit potreba i kdyz mame pristup do kodu?", answer: "Ano. Pristup do kodu sam o sobe nerika nic o release riziku, provoznich zavislostech ani o tom, jak system opravdu pouzivaji lide." },
      { question: "Jak detailni ma audit byt?", answer: "Tak detailni, aby z nej slo udelat prvni spolehlive rozhodnuti o prevzeti, stabilizaci a prioritach dalsi etapy. Ne nutne tak detailni, aby popsal kazdou cast systemu." },
      { question: "Muze audit skoncit doporucenim postupneho rozvoje misto rewritu?", answer: "Ano. U mnoha aplikaci je to prave nejcennejsi zaver, protoze oddeli skutecny problem od frustrace z ciziho kodu." },
    ],
    related: ["service-existing-app-takeover", "guide-how-to-take-over-an-existing-app-safely", "tool-app-takeover-checklist", "inquiry"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-decide-app-needs-rewrite",
    locale: "cs",
    slug: "jak-poznat-ze-aplikace-opravdu-potrebuje-rewrite",
    title: "Potrebuje aplikace rewrite? | Bc. Ondrej Halata (halatao.cz)",
    h1: "Jak poznat, ze aplikace opravdu potrebuje rewrite a ne jen postupny rozvoj",
    description: "Prakticky pruvodce pro firmy, ktere zvazuji rewrite aplikace a chteji odlisit skutecne technicke duvody od frustrace z pomaleho delivery.",
    primaryQuery: "kdy aplikace potrebuje rewrite",
    heroTitle: "Rewrite ma byt dusledek jasnych duvodu, ne uleva z frustrace",
    heroSubtitle: "Kdyz se aplikace spatne meni, laka cisty restart. Jenze bez pojmenovani skutecnych pricin muze rewrite jen presunout stejne riziko do noveho kodu.",
    intro: [
      "Uplny prepis aplikace muze davat smysl, ale jen ve chvili, kdy stavajici system opravdu blokuje provoz nebo dalsi rozvoj natolik, ze cilene zlepsovani uz nefunguje.",
      "Silnejsi rozhodnuti nevychazi z dojmu, ze je kod stary nebo neprijemny. Vychazi z dopadu na byznys, release riziko, rychlost zmen a cenu dalsich zasahu.",
    ],
    sections: [
      { title: "Signaly, ze muze byt rewrite opravneny", body: ["Dulezite nejsou esteticke vyhrady ke kodu, ale opakovane situace, kdy architektura nebo data blokuji bezpecny provoz a kazdou dalsi zmenu prodrazuji."], bullets: ["kriticke workflow se nedari stabilizovat ani cilenymi zasahy", "architektura systematicky blokuje dalsi vyvoj", "release riziko je dlouhodobe neunosne", "dilci opravy jsou drazsi nez novy zaklad se stejnym rozsahem znalosti"] },
      { title: "Kdy je lepsi postupny rozvoj", body: ["Pokud aplikace stale drzi dulezity provoz a nejvetsi problemy jsou soustredene v mensim poctu casti, byva bezpecnejsi a levnejsi zacit stabilizaci, modularizaci a cilenym prepisem vybranych oblasti."] },
      { title: "Co si overit pred rozhodnutim", body: ["Prakticke rozhodnuti potrebuje audit zavislosti, dat, release cesty, provoznich omezeni a toho, jak moc by firma zvladla paralelni vyvoj bez ohrozeni bezneho provozu."] },
      { title: "Jak se nenechat zatlacit do spatneho rozhodnuti", body: ["Nejslabsi duvod pro rewrite je unava z ciziho kodu. Nejsilnejsi duvod je opakovane potvrzeny dopad na provoz, bezpecnost nebo delivery, ktery uz nejde rozumne resit postupne."] },
    ],
    faq: [
      { question: "Je stara technologie sama o sobe duvod pro rewrite?", answer: "Ne. Dulezite je, jake konkretni problemy zpusobuje provozu, bezpecnosti a rychlosti dalsiho rozvoje." },
      { question: "Muze byt spravne prepsat jen cast systemu?", answer: "Ano. U mnoha aplikaci je selektivni rewrite nebo oddeleni nejproblematictejsich casti practictejsi nez kompletni restart." },
      { question: "Ma rozhodnuti vzdy zacinat auditem?", answer: "U bezici business aplikace ano. Bez auditu se tezko rozlisuje mezi skutecnou nutnosti a pouze silnou frustraci z aktualniho stavu." },
    ],
    related: ["comparison-rewrite-vs-incremental-app-improvement", "service-existing-app-takeover", "problem-modernize-legacy-app", "inquiry"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-run-automation-discovery",
    locale: "cs",
    slug: "jak-pripravit-discovery-pro-automatizaci-a-integrace",
    title: "Jak pripravit discovery pro automatizaci a integrace | Bc. Ondrej Halata (halatao.cz)",
    h1: "Jak pripravit discovery pro automatizaci a integrace, aby projekt nezacal chaosem",
    description: "Prakticky pruvodce discovery fazi pro automatizace a integrace: jak zmapovat proces, vyjimky, ownership a vybrat prvni smysluplny zasah.",
    primaryQuery: "discovery pro automatizaci a integrace",
    heroTitle: "Ne kazda rucni prace je dobry kandidat na automatizaci",
    heroSubtitle: "Silna discovery faze pomaha odlisit smysluplnou automatizaci od drahe digitalizace nejasneho procesu a spatne rozdelene odpovednosti.",
    intro: [
      "Automatizace a integrace casto vypadaji jako technicky projekt. Ve skutecnosti ale obvykle zacinaji procesnim problemem, nejasnym ownershipem nebo mnozstvim vyjimek, ktere v systemu nikdo poradne nepojmenoval.",
      "Discovery faze proto nema byt administrativni mezikrok. Je to zpusob, jak zuzit prvni zasah tak, aby mel realny provozni dopad a nevytvoril dalsi vrstvu chaosu.",
    ],
    sections: [
      { title: "Co je potreba zmapovat jako prvni", body: ["Nejdriv je nutne porozumet skutecnemu procesu, rucnim krokum, vyjimkam a tomu, kde dnes vznika zpozdeni, prepisovani dat nebo zavislost na konkretnich lidech."], bullets: ["prubeh procesu mezi systemy a rolemi", "vyjimky, schvaleni a chybove stavy", "zdroje dat a mista, kde se data rozchazeji", "ownership a dopad automatizace na bezny provoz"] },
      { title: "Jak vybrat prvni automatizacni zasah", body: ["Nejsilnejsi prvni krok byva tam, kde je zaroven vysoka cetnost rucni prace, jasne procesni hranice a rozumne riziko implementace."] },
      { title: "Kdy jeste neautomatizovat", body: ["Pokud neni jasny vlastnik procesu, pravidla se casto meni nebo se tym neshodne ani na tom, jak dnes prace skutecne probiha, byva lepsi nejdriv ujasnit proces nez automatizovat."] },
      { title: "Co ma byt vystupem discovery", body: ["Vystupem nema byt jen seznam napadu. Potrebujes prioritizovany prvni zasah, pojmenovana rizika a realisticky dalsi krok pro implementaci."] },
    ],
    faq: [
      { question: "Je discovery potreba i pro mensi automatizaci?", answer: "Ano, pokud se automatizace dotyka vice roli, systemu nebo vyjimek. I mensi zasah muze bez dobreho pochopeni procesu vytvorit nove problemy." },
      { question: "Neni rychlejsi zacit rovnou integracni implementaci?", answer: "Kratkodobe mozna ano. Dlouhodobe ale hrozi, ze implementujes spatne vybrany zasah nebo obejdes skutecny provozni problem." },
      { question: "Muze discovery vest k tomu, ze automatizace zatim nedava smysl?", answer: "Ano. A to je cenny vysledek, pokud usetri drahy projekt bez jasneho dopadu." },
    ],
    related: ["service-automations-and-integrations", "tool-automation-discovery-checklist", "tool-api-integration-checklist", "inquiry"],
  }),
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
  advancedGuide({
    translationKey: "guide-how-to-run-app-takeover-audit",
    locale: "en",
    slug: "how-to-run-an-app-takeover-audit",
    title: "How to run an app takeover audit | Bc. Ondrej Halata (halatao.cz)",
    h1: "How to run an app takeover audit before inheriting an existing system",
    description: "A practical guide to app takeover audits: what to verify before inheriting a system, how to frame risks, and how to shape the first credible next step.",
    primaryQuery: "app takeover audit",
    heroTitle: "Before taking over an application, you need more than repository access",
    heroSubtitle: "A strong takeover audit separates technical risk, operational dependency, and first-phase priorities from the illusion that handover alone will solve the situation.",
    intro: [
      "Taking over an existing application is not only about code. You need to understand how the system runs, where the operational dependencies sit, how release works, and what a bad first change could break.",
      "A takeover audit is therefore not about creating a thick document. It is about getting a fast, reliable picture of risks, weak spots, and the most credible next step.",
    ],
    sections: [
      { title: "What the audit has to clarify", body: ["The audit should map not only the application itself, but also environment, release path, access, data, integrations, and the knowledge concentration around the system."], bullets: ["access to repositories, hosting, and third parties", "critical workflows and operational risk", "release process, monitoring, and rollback options", "state of documentation, knowledge, and ownership"] },
      { title: "How to separate facts from assumptions", body: ["Inherited systems often come with many claims based on impressions. A practical audit needs to distinguish what is confirmed, what is still a hypothesis, and what needs further verification."] },
      { title: "What should follow the audit", body: ["The point is not the audit itself. The output should be a prioritised next step: what to stabilise first, what to address for delivery speed, and what can wait."] },
      { title: "What to avoid", body: ["The weakest option is to skip the audit and immediately promise fixes, a rewrite, or a fast takeover without understanding the operational and release risk."] },
    ],
    faq: [
      { question: "Do we still need an audit if we already have code access?", answer: "Yes. Code access alone says very little about release risk, operational dependency, or how people actually use the system." },
      { question: "How detailed should the audit be?", answer: "Detailed enough to support the first reliable decision about takeover, stabilisation, and next priorities. Not necessarily detailed enough to document every corner of the product." },
      { question: "Can the audit conclude that incremental improvement is better than a rewrite?", answer: "Yes. That is often the most valuable conclusion because it separates the actual problem from frustration with inherited code." },
    ],
    related: ["service-existing-app-takeover", "guide-how-to-take-over-an-existing-app-safely", "tool-app-takeover-checklist", "inquiry"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-decide-app-needs-rewrite",
    locale: "en",
    slug: "how-to-decide-if-an-app-needs-a-rewrite",
    title: "Does the app need a rewrite? | Bc. Ondrej Halata (halatao.cz)",
    h1: "How to decide whether an application really needs a rewrite",
    description: "A practical guide for companies considering a rewrite and trying to separate real technical reasons from frustration with slow delivery.",
    primaryQuery: "when an app needs a rewrite",
    heroTitle: "A rewrite should be the result of clear reasons, not relief from frustration",
    heroSubtitle: "When an application becomes painful to change, a clean restart is tempting. Without identifying the real causes, the rewrite may simply move the same risk into new code.",
    intro: [
      "A full rewrite can make sense, but only when the current system is truly blocking operations or future delivery so badly that targeted improvement no longer works.",
      "A stronger decision does not come from the feeling that the code is old or unpleasant. It comes from the business impact, release risk, delivery drag, and cost of further intervention.",
    ],
    sections: [
      { title: "Signals that may justify a rewrite", body: ["The important signs are not aesthetic complaints about the code. They are repeated situations where architecture or data structure makes safe operation and change unreasonably hard."], bullets: ["critical workflows cannot be stabilised through targeted improvement", "architecture is consistently blocking change", "release risk remains unacceptably high", "incremental fixes cost more than establishing a new base with the same knowledge"] },
      { title: "When incremental improvement is better", body: ["If the application still supports important operations and the worst issues are concentrated in a smaller set of areas, stabilisation and targeted refactoring are often safer and cheaper."] },
      { title: "What to verify before deciding", body: ["A practical decision needs an audit of dependencies, data shape, release path, operational constraints, and the company's ability to absorb parallel rebuild work."] },
      { title: "How to avoid being pushed into the wrong answer", body: ["The weakest reason for a rewrite is fatigue with inherited code. The strongest reason is a repeatedly confirmed operational, security, or delivery impact that can no longer be handled incrementally."] },
    ],
    faq: [
      { question: "Is old technology alone a reason to rewrite?", answer: "No. What matters is the concrete effect on operation, security, and delivery speed." },
      { question: "Can it be right to rewrite only part of the system?", answer: "Yes. Selective rewrite or extraction of the most problematic areas is often more practical than a full restart." },
      { question: "Should the decision start with an audit?", answer: "For a running business application, yes. Without that, it is hard to separate genuine need from strong frustration." },
    ],
    related: ["comparison-rewrite-vs-incremental-app-improvement", "service-existing-app-takeover", "problem-modernize-legacy-app", "inquiry"],
  }),
  advancedGuide({
    translationKey: "guide-how-to-run-automation-discovery",
    locale: "en",
    slug: "how-to-prepare-discovery-for-automation-and-integrations",
    title: "How to prepare discovery for automation and integrations | Bc. Ondrej Halata (halatao.cz)",
    h1: "How to prepare discovery for automation and integrations without starting in chaos",
    description: "A practical guide to discovery work for automation and integrations: how to map the process, exception paths, ownership, and the right first intervention.",
    primaryQuery: "automation and integrations discovery",
    heroTitle: "Not every manual step is a good automation target",
    heroSubtitle: "A strong discovery phase separates useful automation from expensive digitisation of an unclear process with weak ownership.",
    intro: [
      "Automation and integrations often look like technical projects. In reality they usually begin as process problems, unclear ownership, or too many exceptions that nobody has properly named.",
      "Discovery should not be treated as admin overhead. It is the way to narrow the first intervention so it has real operational impact and does not create another layer of confusion.",
    ],
    sections: [
      { title: "What to map first", body: ["Start with the real process, the manual steps, the exceptions, and the points where delay, data re-entry, or dependence on specific people is highest."], bullets: ["actual process flow between systems and roles", "exceptions, approvals, and failure states", "source data and where it diverges", "ownership and the operational impact of automation"] },
      { title: "How to choose the first automation target", body: ["The strongest first step usually combines frequent manual work, clear process boundaries, and acceptable implementation risk."] },
      { title: "When not to automate yet", body: ["If there is no clear owner, the rules keep changing, or the team cannot even agree on how the work really happens today, it is usually better to clarify the process first."] },
      { title: "What the discovery output should be", body: ["The output should not be only a list of ideas. It needs a prioritised first step, named risks, and a credible path into implementation."] },
    ],
    faq: [
      { question: "Is discovery still necessary for a smaller automation effort?", answer: "Yes, if the work touches several roles, systems, or exception paths. Even a smaller intervention can create new problems without enough process clarity." },
      { question: "Would it be faster to jump straight into implementation?", answer: "Maybe in the short term. In the long term you risk implementing the wrong intervention or automating around the wrong problem." },
      { question: "Can discovery conclude that automation is not the right move yet?", answer: "Yes. That is a valuable outcome if it prevents an expensive project with little real impact." },
    ],
    related: ["service-automations-and-integrations", "tool-automation-discovery-checklist", "tool-api-integration-checklist", "inquiry"],
  }),
];
