// Generated content: templates and checklist pages. Safe to edit manually.

import { buildInquiryHref, definePage } from "@/content/builders";
import type { ContentPage, FAQItem, Locale, WorkAsset } from "@/content/types";

type ToolSeed = {
  translationKey: string;
  locale: Locale;
  slug: string;
  title: string;
  breadcrumbLabel: string;
  description: string;
  primaryQuery: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  includes: string[];
  usage: string[];
  outcome: string[];
  workAsset?: WorkAsset;
  faq: FAQItem[];
  related: string[];
};

function tool(seed: ToolSeed): ContentPage {
  const isCs = seed.locale === "cs";
  return definePage({
    translationKey: seed.translationKey,
    stage: 3,
    locale: seed.locale,
    pageType: "tool",
    slug: seed.slug,
    segments: [isCs ? "sablony" : "templates", seed.slug],
    title: seed.title,
    breadcrumbLabel: seed.breadcrumbLabel,
    description: seed.description,
    primaryQuery: seed.primaryQuery,
    intent: "transactional",
    hero: {
      eyebrow: isCs ? "Šablona / checklist" : "Template / checklist",
      title: seed.heroTitle,
      subtitle: seed.heroSubtitle,
      primaryCta: { label: isCs ? "Popsat situaci" : "Describe situation", href: buildInquiryHref(seed.locale) },
    },
    intro: seed.intro,
    sections: [
      { title: isCs ? "Co má šablona pokrýt" : "What the template should cover", body: [isCs ? "Smyslem není vyplnit administrativu pro administrativu. Důležité je zpřehlednit rozhodnutí, odhalit slepá místa a zlepšit kvalitu prvního kroku." : "The point is not paperwork for its own sake. The value is clearer decision-making and fewer project blind spots."], bullets: seed.includes },
      { title: isCs ? "Jak ji použít v praxi" : "How to use it in practice", body: [isCs ? "Šablona má fungovat jako praktická pomůcka před úvodním hovorem, scopingem nebo takeover fází. Má otevřít správné otázky dřív, než se scope zbytečně rozjede." : "The template should work as a practical aid before an introductory call, scoping session, or takeover phase."], bullets: seed.usage },
      { title: isCs ? "Jaký výsledek to má přinést" : "What outcome it should create", body: [isCs ? "Dobrá šablona zkrátí cestu k prvnímu smysluplnému rozhodnutí a pomůže oddělit důležité od zbytku." : "A good template shortens the path to the first useful project decision."], bullets: seed.outcome },
    ],
    workAsset: seed.workAsset,
    faq: seed.faq,
    related: seed.related,
    fit: { for: seed.outcome, notFor: isCs ? ["sběr detailů bez dalšího rozhodnutí"] : ["collecting detail with no decision attached"] },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const toolPages: ContentPage[] = [
  tool({
    translationKey: "tool-web-app-project-brief-template",
    locale: "cs",
    slug: "brief-na-webovou-aplikaci",
    title: "Brief na webovou aplikaci | Bc. Ondřej Halata",
    breadcrumbLabel: "Brief na webovou aplikaci: co si ujasnit před startem projektu",
    description: "Šablona briefu pro webovou aplikaci na míru: problém, cíle, role, první workflow a omezení projektu.",
    primaryQuery: "brief na webovou aplikaci",
    heroTitle: "Krátký brief často ušetří týdny chaosu",
    heroSubtitle: "Stačí pojmenovat problém, cíl, uživatele a první důležitý workflow. Není potřeba psát stostránkovou specifikaci.",
    intro: ["Dobře připravený brief pomůže sladit očekávání a zkrátit cestu k první smysluplné etapě.", "Nejde o formální dokument pro výběrové řízení. Jde o praktický podklad pro rozhodnutí, jak projekt uchopit a kde začít."],
    includes: ["jaký problém má aplikace řešit", "kdo ji bude používat", "jaký workflow musí zvládnout první verze", "jaká jsou technická a provozní omezení"],
    usage: ["před úvodním hovorem", "při interním srovnání priorit", "jako podklad pro první scope workshop"],
    outcome: ["rychlejší orientace v projektu", "méně nejasností kolem první etapy", "lepší očekávání na obou stranách"],
    faq: [
      { question: "Musí brief obsahovat všechny funkce?", answer: "Ne. Důležitější je problém, cíl, role a první důležitý workflow." },
      { question: "Je to vhodné i pro takeover projekt?", answer: "Částečně ano, ale takeover obvykle potřebuje navíc technický checklist, přístupy a mapu rizik." },
      { question: "Může brief připravit i netechnický člověk?", answer: "Ano. Business pohled je pro začátek často nejdůležitější." },
    ],
    related: ["guide-how-to-scope-a-custom-web-application", "service-custom-web-app-development", "inquiry", "process-delivery"],
  }),
  tool({
    translationKey: "tool-app-takeover-checklist",
    locale: "cs",
    slug: "checklist-prevzeti-aplikace",
    title: "Checklist převzetí aplikace | Bc. Ondřej Halata",
    breadcrumbLabel: "Checklist převzetí aplikace po dodavateli nebo týmu",
    description: "Praktický checklist pro převzetí existující aplikace: přístupy, prostředí, release proces, rizika a kritické workflow.",
    primaryQuery: "checklist převzetí aplikace",
    heroTitle: "Takeover bez checklistu bývá plný slepých míst",
    heroSubtitle: "Smyslem checklistu je rychle odhalit, co chybí pro bezpečné navázání vývoje a provozu.",
    intro: ["Převzetí aplikace nebývá problém jen v kódu. Často chybí přístupy, popis prostředí, znalost release procesu nebo přehled o kritických scénářích.", "Checklist pomůže rychle odhalit slepá místa, která by později zbytečně prodražila další práci nebo zablokovala první etapu."],
    includes: ["repozitáře, hosting a přístupy", "deploy a prostředí", "kritické scénáře a rizika", "monitoring, logy a provozní kontakty"],
    usage: ["při změně dodavatele", "před takeover auditem", "jako podklad pro prioritizaci první etapy"],
    outcome: ["menší takeover riziko", "rychlejší orientace v systému", "lepší kontrola nad tím, co ještě chybí"],
    workAsset: {
      title: "Pracovní checklist převzetí aplikace",
      description: "Zaškrtněte pouze položky, které jste skutečně ověřili. Nejasný nebo chybějící bod zapište do handover backlogu s vlastníkem a termínem.",
      groups: [
        {
          title: "Vlastnictví a přístupy",
          items: [
            "Repozitáře, větve a oprávnění jsou pod kontrolou firmy",
            "Domény, DNS, hosting a cloudové účty mají známého vlastníka",
            "Přístupy dodavatelů lze odebrat nebo převést bez výpadku",
            "Secrets a integrační účty jsou evidované mimo zdrojový kód",
          ],
        },
        {
          title: "Provoz a release",
          items: [
            "Jsou popsaná prostředí a rozdíly mezi nimi",
            "Lze zopakovat build, test a deployment z čistého checkoutu",
            "Existuje ověřený rollback nebo bezpečný návrat předchozí verze",
            "Monitoring, logy a provozní kontakty jsou dostupné novému týmu",
          ],
        },
        {
          title: "Kritické scénáře",
          items: [
            "Business owner potvrdil nejdůležitější uživatelské workflow",
            "Kritické integrace a dávkové úlohy mají známé failure stavy",
            "Záloha a obnova dat mají konkrétního vlastníka a postup",
            "Bezpečnostní a licenční rizika mají určenou prioritu",
          ],
        },
        {
          title: "Handover a první etapa",
          items: [
            "Potvrzená fakta jsou oddělená od hypotéz a chybějících informací",
            "Nálezy mají dopad, prioritu, vlastníka a akceptační podmínku",
            "První bezpečná změna ověří celý release proces",
            "Rewrite zůstává možností až po auditu, ne výchozím rozhodnutím",
          ],
        },
      ],
      example: {
        title: "Příklad záznamu chybějícího bodu",
        body: "Produkční cloudový účet: přístup chybí; vlastník na straně firmy: provozní ředitel; dopad: bez přístupu nelze ověřit zálohy ani rollback; priorita: před prvním releasem; další krok: převést účet a otestovat obnovu v neprodukčním prostředí.",
      },
      completionNote: "Výstupem má být access mapa, seznam chybějících podkladů, risk backlog a návrh první bezpečné změny — ne pouze počet zaškrtnutých polí.",
    },
    faq: [
      { question: "Stačí checklist bez auditu?", answer: "Často ne. Checklist je výborný start, ale u složitějších aplikací je potřeba i technické zmapování, prioritizace a realistický plán první fáze." },
      { question: "Je to užitečné i pro interní tým?", answer: "Ano. I interní tým často potřebuje takeover strukturovat, pokud znalost odešla s konkrétním člověkem nebo vendor kontaktem." },
      { question: "Co když část přístupů chybí?", answer: "Právě to je cenný výstup checklistu. Chybějící přístupy je lepší odhalit hned na začátku než během krizového release." },
    ],
    related: ["guide-how-to-take-over-an-existing-app-safely", "guide-how-to-run-app-takeover-audit", "service-existing-app-takeover", "problem-app-takeover", "tool-release-stabilization-checklist", "case-study-existing-app-takeover", "inquiry"],
  }),
  tool({
    translationKey: "tool-api-integration-checklist",
    locale: "cs",
    slug: "checklist-api-integrace",
    title: "Checklist API integrace | Bc. Ondřej Halata",
    breadcrumbLabel: "Checklist API integrace před startem projektu",
    description: "Checklist pro API integrace: zdroje dat, vlastnictví, chybové stavy, výjimky a provozní monitoring.",
    primaryQuery: "checklist api integrace",
    heroTitle: "Integrace se nejčastěji lámou na detailech, které nikdo nepojmenoval",
    heroSubtitle: "Checklist pomůže projít data, výjimky, odpovědnost a provozní realitu dřív, než vznikne křehké propojení systémů.",
    intro: ["API integrace vypadají jednodušeji, než ve skutečnosti jsou. Největší problém bývá ve výjimkách, datové kvalitě a v tom, kdo co vlastní.", "Praktický checklist pomůže snížit riziko, že se integrace stane dalším zdrojem ruční práce, chyb a tichých provozních dluhů."],
    includes: ["zdrojová a cílová data", "ownership a odpovědnost", "chybové stavy a retry logika", "monitoring a dohled nad integrací"],
    usage: ["před integračním projektem", "při diagnostice ruční práce mezi systémy", "jako podklad pro prioritizaci integračních kroků"],
    outcome: ["méně slepých míst v návrhu", "lepší připravenost na výjimky", "odolnější integrační řešení"],
    workAsset: {
      title: "Pracovní checklist API integrace",
      description: "Projděte tok dat od zdroje až po provozní dohled. U každého bodu si určete vlastníka a způsob ověření, ne jen technickou poznámku.",
      groups: [
        {
          title: "Data a kontrakt",
          items: [
            "Zdrojový a cílový systém mají známého business i technického vlastníka",
            "Povinná pole, formáty, identifikátory a časová pásma jsou popsané",
            "Je jasné, který systém je zdrojem pravdy pro každé důležité pole",
            "Verzování API a změny kontraktu mají domluvený postup",
          ],
        },
        {
          title: "Tok a konzistence",
          items: [
            "Je rozhodnuto mezi synchronním, asynchronním a dávkovým přenosem",
            "Opakovaný požadavek nevytvoří duplicitní záznam nebo platbu",
            "Pořadí zpráv a souběžné změny mají popsané řešení",
            "Je známý postup pro prvotní import a následnou synchronizaci",
          ],
        },
        {
          title: "Chyby a výjimky",
          items: [
            "Timeout, rate limit a dočasná chyba mají retry pravidla",
            "Trvalá chyba skončí v dohledatelné frontě s vlastníkem",
            "Neplatná nebo neúplná data se neztratí bez upozornění",
            "Ruční oprava má auditní stopu a neporuší další synchronizaci",
          ],
        },
        {
          title: "Provoz a monitoring",
          items: [
            "Měří se úspěšnost, zpoždění, počet chyb a stav front",
            "Alert vede ke konkrétnímu runbooku a odpovědné osobě",
            "Citlivá data nejsou v logu ani analytice bez důvodu",
            "Integraci lze bezpečně vypnout, znovu spustit a otestovat",
          ],
        },
      ],
      example: {
        title: "Příklad vyplněné integrační výjimky",
        body: "Přenos objednávky do fakturace: identifikátor objednávky je idempotency key; při timeoutu tři pokusy s odstupem; trvalá chyba jde do fronty „K opravě“; vlastníkem je backoffice; alert vznikne po pěti minutách bez potvrzení cílového systému.",
      },
      completionNote: "Pokud některý bod nemá vlastníka nebo ověřitelnou odpověď, patří před implementací do rizik a scope — ne do skrytého předpokladu.",
    },
    faq: [
      { question: "Je checklist užitečný i bez technického týmu?", answer: "Ano. Pomůže minimálně strukturovat otázky, které je potřeba si vyjasnit s dodavatelem, interním IT nebo business ownerem procesu." },
      { question: "Nahrazuje checklist architektonický návrh?", answer: "Ne. Je to vstupní pomůcka, která pomáhá návrh udělat kvalitněji a s menším rizikem slepých míst." },
      { question: "Lze ho použít i pro interní workflow integrace?", answer: "Ano. Právě tam bývá velmi praktický." },
    ],
    related: ["technology-api-integrations", "service-automations-and-integrations", "guide-how-to-run-automation-discovery", "problem-system-integrations", "use-case-service-team-ops-system", "case-study-multi-system-integration", "inquiry"],
  }),
  tool({
    translationKey: "tool-web-app-project-brief-template",
    locale: "en",
    slug: "web-app-project-brief-template",
    title: "Web app project brief template | Bc. Ondřej Halata",
    breadcrumbLabel: "Web app project brief template: what to clarify before delivery starts",
    description: "A practical project brief template for custom web applications covering the problem, goals, roles, first workflow, and delivery constraints.",
    primaryQuery: "web app project brief template",
    heroTitle: "A short brief can save weeks of avoidable confusion",
    heroSubtitle: "The point is not writing a giant specification. It is clarifying the problem, the target outcome, and the first useful delivery phase.",
    intro: ["A practical brief helps align expectations and shorten the path to the first meaningful project step.", "It is not a procurement document. It is a working input for deciding how the project should start."],
    includes: ["the problem the application should solve", "who will use it", "what the first release must support", "key technical and operational constraints"],
    usage: ["before an intro call", "for internal priority alignment", "as input to a scoping workshop"],
    outcome: ["faster project orientation", "less uncertainty around the first phase", "better expectations on both sides"],
    faq: [
      { question: "Does the brief need every feature?", answer: "No. The important part is the problem, the outcome, the roles, and the first important workflow." },
      { question: "Is this also useful for takeover work?", answer: "Partly yes, but takeover usually also needs a technical checklist and risk map." },
      { question: "Can a non-technical stakeholder prepare it?", answer: "Yes. Business context is often the most valuable starting point." },
    ],
    related: ["guide-how-to-scope-a-custom-web-application", "service-custom-web-app-development", "inquiry", "process-delivery"],
  }),
  tool({
    translationKey: "tool-app-takeover-checklist",
    locale: "en",
    slug: "app-takeover-checklist",
    title: "App takeover checklist | Bc. Ondřej Halata",
    breadcrumbLabel: "App takeover checklist after a supplier or team change",
    description: "A practical checklist for taking over an existing application: access, environments, release flow, risks, and critical workflows.",
    primaryQuery: "app takeover checklist",
    heroTitle: "Takeover without a checklist leaves too many blind spots",
    heroSubtitle: "The checklist helps surface what is missing for safe continuation of delivery and operation.",
    intro: ["Application takeovers are rarely only about the code. They often break down because access, environment visibility, release knowledge, or operational context is incomplete.", "A practical checklist reveals the blind spots early instead of letting them appear later as costly surprises."],
    includes: ["repositories, hosting, and access", "deployment flow and environments", "critical scenarios and risk areas", "monitoring, logs, and operational contacts"],
    usage: ["during supplier transition", "before a takeover review", "as input to first-phase prioritisation"],
    outcome: ["lower takeover risk", "faster orientation in the system", "clearer control over missing pieces"],
    faq: [
      { question: "Is the checklist enough without an audit?", answer: "Often not. It is a great starting point, but complex applications usually need technical review and prioritisation too." },
      { question: "Is this useful for internal teams as well?", answer: "Yes. Internal teams also need structure when important knowledge has left with a specific person or vendor." },
      { question: "What if some access is missing?", answer: "That is exactly the kind of issue the checklist should surface immediately." },
    ],
    related: ["guide-how-to-take-over-an-existing-app-safely", "guide-how-to-run-app-takeover-audit", "service-existing-app-takeover", "problem-app-takeover", "tool-release-stabilization-checklist", "case-study-existing-app-takeover", "inquiry"],
  }),
  tool({
    translationKey: "tool-api-integration-checklist",
    locale: "en",
    slug: "api-integration-checklist",
    title: "API integration checklist | Bc. Ondřej Halata",
    breadcrumbLabel: "API integration checklist before delivery starts",
    description: "A practical API integration checklist covering data ownership, error states, exceptions, monitoring, and real operational constraints.",
    primaryQuery: "api integration checklist",
    heroTitle: "Integration projects usually fail on the details nobody named early enough",
    heroSubtitle: "The checklist helps teams work through data flow, exceptions, responsibility, and operational reality before the integration becomes fragile.",
    intro: ["API integrations look simpler than they are. The real trouble often lives in exceptions, data quality, and unclear ownership.", "A practical checklist reduces the risk of turning the integration into another source of manual work and hidden failure."],
    includes: ["source and destination data", "ownership and responsibility", "error states and retry logic", "monitoring and operational oversight"],
    usage: ["before an integration project", "during an automation diagnostic", "as input to prioritising integration work"],
    outcome: ["fewer design blind spots", "better readiness for exceptions", "more resilient integration delivery"],
    faq: [
      { question: "Is the checklist useful without an in-house technical team?", answer: "Yes. It helps structure the important questions for your supplier or internal IT partner." },
      { question: "Does the checklist replace architecture work?", answer: "No. It is an input tool that helps the architecture work start from a better position." },
      { question: "Can it be used for internal workflow integrations too?", answer: "Yes. That is one of the most practical uses for it." },
    ],
    related: ["technology-api-integrations", "service-automations-and-integrations", "guide-how-to-run-automation-discovery", "problem-system-integrations", "use-case-service-team-ops-system", "case-study-multi-system-integration", "inquiry"],
  }),
];
