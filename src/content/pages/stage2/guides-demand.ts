// Demand-focused SEO guides for operational automation topics. Safe to edit manually.

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
            ? "Nejdřív je potřeba pochopit současný proces, ztráty a rizika. Teprve potom dává smysl navrhnout první technickou etapu."
            : "Start with the current process, losses, and risks. Only then does it make sense to design the first technical phase.",
        ],
        bullets: seed.steps,
      },
      {
        title: isCs ? "Časté chyby" : "Common mistakes",
        body: [
          isCs
            ? "Nejčastější problém je začít nástrojem nebo velkým zadáním dřív, než je jasné, kde vzniká skutečný provozní dopad."
            : "The most common mistake is starting with a tool or a large scope before the real operational impact is clear.",
        ],
        bullets: seed.mistakes,
      },
      {
        title: isCs ? "Co by měl být výsledek" : "What a strong result looks like",
        body: [
          isCs
            ? "Dobrý výsledek není další systém navíc. Je to menší ruční práce, jasnější odpovědnost a první etapa, která má měřitelný přínos."
            : "A strong result is not another system for its own sake. It is less manual work, clearer ownership, and a first phase with measurable value.",
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
          note: "Stačí krátce popsat současný proces, kde vzniká ruční práce a co má být lepší.",
        }
      : {
          label: "Discuss your project",
          href: "/en/discuss-your-project",
          note: "A short description of the current process and the manual work is enough to continue.",
        },
    seo: { title: seed.title, description: seed.description },
    schema: { includeFaq: true },
    indexable: true,
  });
}

export const demandGuidePages: ContentPage[] = [
  guide({
    translationKey: "guide-how-to-automate-request-processing",
    locale: "cs",
    slug: "jak-automatizovat-zpracovani-poptavek",
    title: "Jak automatizovat zpracování poptávek | Bc. Ondřej Halata",
    h1: "Jak automatizovat zpracování poptávek bez chaosu v zakázkách",
    description: "Praktický průvodce pro firmy, které zpracovávají poptávky ručně a chtějí snížit přepisování, ztracené informace a chaos mezi obchodem a realizací.",
    primaryQuery: "automatizace zpracování poptávek",
    heroTitle: "Automatizace poptávek začíná procesem, ne nákupem dalšího nástroje",
    heroSubtitle: "Pro firmy, kde poptávky přicházejí e-mailem, formulářem nebo telefonicky a dál se ručně třídí, přepisují a předávají.",
    intro: [
      "Ruční zpracování poptávek často funguje dlouho dostatečně dobře. Problém se objeví ve chvíli, kdy objem roste, zapojí se více lidí a informace se začnou ztrácet mezi e-maily, tabulkami a poznámkami.",
      "Automatizace má smysl tam, kde zkrátí opakované kroky, sníží chybovost a dá obchodu i realizaci společný přehled o stavu poptávky.",
    ],
    answer: "Nejdřív zmapujte, odkud poptávky přicházejí, jak se třídí, kdo rozhoduje o dalším kroku a kde se data přepisují. Teprve potom navrhněte první automatizaci nebo interní systém.",
    steps: [
      "sepište vstupní kanály a typy poptávek",
      "pojmenujte stavy od přijetí po nabídku nebo realizaci",
      "najděte ruční přepisy, čekání a ztracené informace",
      "navrhněte první etapu kolem největší provozní ztráty",
    ],
    mistakes: [
      "nákup CRM nebo formuláře bez mapování procesu",
      "automatizace výjimek dřív než opakovaných kroků",
      "chybějící vlastník poptávkového workflow",
      "přesun chaosu z e-mailu do dalšího nástroje",
    ],
    outcome: [
      "jasnější tok poptávky od vstupu po další krok",
      "méně přepisování a ručního dohledávání",
      "nižší riziko ztracené poptávky nebo špatného předání",
      "realistický rozsah první automatizační etapy",
    ],
    faq: [
      { question: "Musíme automatizovat celý obchodní proces?", answer: "Ne. Často stačí začít vstupem poptávky, tříděním a předáním do dalšího kroku." },
      { question: "Je lepší CRM nebo vlastní systém?", answer: "Záleží na procesu. CRM může stačit pro evidenci, ale vlastní systém dává smysl tam, kde poptávka těsně navazuje na nabídku, realizaci nebo interní workflow." },
      { question: "Lze automatizovat i poptávky z e-mailu?", answer: "Ano, ale je potřeba jasně určit pravidla, validaci a situace, které musí zůstat člověku." },
    ],
    related: [
      "service-automations-and-integrations",
      "service-request-offer-delivery-system",
      "use-case-request-offer-delivery-system",
      "problem-requests-offers-delivery-in-spreadsheets",
      "inquiry",
    ],
    fitFor: ["firmy s opakovaným příjmem poptávek", "týmy, kde se poptávky ručně třídí a předávají", "procesy navazující na nabídku nebo realizaci"],
    fitNot: ["jednorázové poptávky bez opakování", "proces bez jasné odpovědnosti", "snaha koupit nástroj bez změny workflow"],
  }),
  guide({
    translationKey: "guide-how-to-manage-jobs-without-excel",
    locale: "cs",
    slug: "jak-ridit-zakazky-bez-excelu",
    title: "Jak řídit zakázky bez Excelu | Interní systém a workflow",
    h1: "Jak řídit zakázky bez Excelu, e-mailů a ruční koordinace",
    description: "Praktický průvodce pro firmy, kterým evidence zakázek v Excelu přestává stačit a chtějí přejít na interní systém nebo řízené workflow.",
    primaryQuery: "evidence zakázek v excelu",
    heroTitle: "Excel stačí na začátku. Pro řízení zakázek ale začne brzdit.",
    heroSubtitle: "Jak poznat, kdy už je potřeba interní systém, co má první verze obsahovat a kde nezačínat zbytečně velkým projektem.",
    intro: [
      "Excel je dobrý start pro jednoduchou evidenci. Jakmile se ale zakázky předávají mezi lidmi, mají více stavů a rozhoduje se podle aktuálních dat, začne tabulka vytvářet skryté náklady.",
      "Přechod na interní systém nemusí znamenat velký projekt. Nejlepší první verze obvykle řeší nejrizikovější část evidence a předávání práce.",
    ],
    answer: "Zakázky má smysl přesunout z Excelu ve chvíli, kdy tabulka přestává držet odpovědnost, historii, aktuální stav a návaznost dalších kroků.",
    steps: [
      "určete, které informace jsou pro řízení zakázky kritické",
      "popište stavy zakázky a odpovědnosti mezi rolemi",
      "najděte místa, kde se tabulka doplňuje ručně nebo pozdě",
      "navrhněte první verzi kolem evidence, stavů a historie",
    ],
    mistakes: [
      "kopírování celé tabulky do nové aplikace bez změny procesu",
      "snahy pokrýt všechny výjimky v první verzi",
      "chybějící jasný vlastník zakázkového workflow",
      "podcenění migrace dat a přechodu lidí na nový způsob práce",
    ],
    outcome: [
      "lepší přehled nad stavem zakázek",
      "méně ruční koordinace a dohledávání",
      "jasnější odpovědnost za další krok",
      "základ pro reporting nebo automatizaci",
    ],
    faq: [
      { question: "Kdy Excel ještě stačí?", answer: "Když zakázky eviduje málo lidí, stav je jednoduchý a tabulka nevytváří pravidelné dohledávání nebo chyby." },
      { question: "Musí první systém pokrýt celý provoz?", answer: "Ne. Často je lepší začít jen evidencí a stavovým workflow pro jednu část zakázek." },
      { question: "Co s historickými daty v Excelu?", answer: "Záleží na hodnotě dat. Někdy stačí import aktuálních zakázek, jindy má smysl převést i historii kvůli reportingu." },
    ],
    related: [
      "service-sales-and-job-tracking-system",
      "service-internal-tools-development",
      "problem-requests-offers-delivery-in-spreadsheets",
      "comparison-internal-tool-vs-spreadsheets",
      "inquiry",
    ],
    fitFor: ["firmy evidující zakázky v tabulkách", "týmy s ručním předáváním práce", "procesy s více stavy, rolemi a termíny"],
    fitNot: ["jednoduchá osobní evidence", "zakázky bez opakovaného workflow", "projekt bez ochoty změnit způsob práce"],
  }),
  guide({
    translationKey: "guide-management-dashboard-from-multiple-systems",
    locale: "cs",
    slug: "dashboard-pro-management-z-vice-systemu",
    title: "Dashboard pro management z více systémů | Bc. Ondřej Halata",
    h1: "Dashboard pro management z více systémů bez ručního reportingu",
    description: "Praktický průvodce pro firmy, které skládají reporting z více systémů a chtějí management dashboard s jasným původem dat.",
    primaryQuery: "dashboard pro management",
    heroTitle: "Management dashboard má ukázat stav firmy, ne jen hezké grafy",
    heroSubtitle: "Jak navrhnout dashboard nad daty z více systémů tak, aby byl použitelný pro rozhodování a ne jen další report navíc.",
    intro: [
      "Dashboard pro management má hodnotu jen tehdy, když lidé věří datům a rozumí tomu, co ukazují. Samotný graf nevyřeší rozdíly mezi systémy ani ručně slepované exporty.",
      "Nejdřív je potřeba sjednotit význam metrik, zdroje dat a frekvenci aktualizace. Teprve potom dává smysl řešit obrazovky a vizualizace.",
    ],
    answer: "Použitelný management dashboard stojí na jasném původu dat, definici metrik a pravidlech aktualizace. Bez toho jen vizualizuje stávající nejasnosti.",
    steps: [
      "vyberte rozhodnutí, která má dashboard podporovat",
      "pojmenujte zdroje dat a vlastníky jednotlivých metrik",
      "sjednoťte definice KPI napříč systémy",
      "začněte menším přehledem s jasným provozním dopadem",
    ],
    mistakes: [
      "návrh grafů dřív než definice metrik",
      "ignorování rozdílů mezi zdrojovými systémy",
      "dashboard bez vlastníka dat a pravidel interpretace",
      "ruční exporty schované za modernější vizualizací",
    ],
    outcome: [
      "důvěryhodnější reporting pro vedení",
      "méně ručního skládání exportů",
      "jasnější původ a význam dat",
      "rychlejší reakce na provozní výjimky",
    ],
    faq: [
      { question: "Je dashboard totéž co BI?", answer: "Ne nutně. BI může být vhodný nástroj, ale custom dashboard dává smysl tam, kde má navazovat na interní workflow, role nebo specifický provozní kontext." },
      { question: "Musí být všechna data perfektně čistá?", answer: "Nemusí, ale u klíčových metrik musí být jasné, odkud data pocházejí a jak moc jim lze věřit." },
      { question: "Má dashboard smysl i pro operativu?", answer: "Ano. Často je užitečný i pro týmové leadery nebo provozní role, které potřebují včas vidět výjimky." },
    ],
    related: [
      "use-case-management-dashboard",
      "use-case-reporting-dashboard",
      "service-internal-tools-development",
      "service-automations-and-integrations",
      "tool-api-integration-checklist",
      "inquiry",
    ],
    fitFor: ["firmy s reportingem z více systémů", "management závislý na ručních exportech", "týmy, které potřebují jednotný pohled na stav firmy"],
    fitNot: ["dashboard bez důvěryhodného zdroje dat", "jednorázový report bez rozhodovacího dopadu", "projekt bez vlastníka metrik"],
  }),
  guide({
    translationKey: "guide-how-to-find-manual-data-reentry",
    locale: "cs",
    slug: "jak-odhalit-rucni-prepisovani-dat",
    title: "Jak odhalit ruční přepisování dat ve firmě | Bc. Ondřej Halata",
    h1: "Jak odhalit ruční přepisování dat mezi systémy",
    description: "Praktický průvodce, jak najít místa, kde se ve firmě ručně přepisují data, vznikají chyby a dává smysl automatizace nebo API integrace.",
    primaryQuery: "ruční přepis dat problém",
    heroTitle: "Ruční přepisování dat je často skrytý náklad, ne drobnost",
    heroSubtitle: "Kde ho hledat, jak spočítat dopad a kdy dává smysl automatizace nebo integrace.",
    intro: [
      "Ruční přepisování dat se často schovává v běžné operativě. Jeden člověk doplní údaj do CRM, druhý ho přepíše do účetnictví a třetí z něj skládá report.",
      "Samotný přepis nemusí vypadat dramaticky. Problém je opakování, chybovost, čekání a závislost na lidech, kteří vědí, kde co najít.",
    ],
    answer: "Hledejte místa, kde stejná informace vzniká jednou, ale ručně se zadává do dalších systémů. Tam bývá největší potenciál pro automatizaci nebo integraci.",
    steps: [
      "projít proces podle skutečného toku dat",
      "označit místa, kde lidé kopírují nebo kontrolují stejný údaj",
      "spočítat frekvenci, čas a chybovost přepisů",
      "odlišit jednoduchou automatizaci od potřeby systémové integrace",
    ],
    mistakes: [
      "řešení jen nejviditelnějšího přepisu bez pohledu na celý proces",
      "automatizace dat, kterým nikdo nevěří",
      "ignorování výjimek a ruční validace",
      "integrace bez jasného vlastníka zdrojových dat",
    ],
    outcome: [
      "mapa nejdražších ručních přepisů",
      "lepší rozhodnutí mezi automatizací a API integrací",
      "nižší chybovost v opakovaných krocích",
      "jasnější priorita první technické etapy",
    ],
    faq: [
      { question: "Jak poznat, že přepis stojí za automatizaci?", answer: "Když se opakuje často, bere lidem čas, vytváří chyby nebo brzdí další kroky procesu." },
      { question: "Je vždy potřeba API integrace?", answer: "Ne. Někdy stačí upravit workflow nebo datový vstup. API dává smysl tam, kde systémy musí dlouhodobě sdílet data spolehlivě." },
      { question: "Co když lidé přepis zároveň kontrolují?", answer: "Pak je potřeba oddělit validaci od kopírování. Kontrolu může někdy ponechat člověk, zatímco přenos dat se automatizuje." },
    ],
    related: [
      "service-automations-and-integrations",
      "problem-system-integrations",
      "tool-automation-discovery-checklist",
      "tool-api-integration-checklist",
      "inquiry",
    ],
    fitFor: ["firmy s více systémy a ručním přepisem", "procesy s opakovanou kontrolou stejných dat", "týmy hledající první automatizační příležitosti"],
    fitNot: ["jednorázové přepisy bez provozního dopadu", "procesy bez stabilních dat", "integrace bez jasného vlastnictví dat"],
  }),
  guide({
    translationKey: "guide-when-process-automation-pays-off",
    locale: "cs",
    slug: "kdy-se-vyplati-automatizace-procesu",
    title: "Kdy se vyplatí automatizace firemního procesu | Bc. Ondřej Halata",
    h1: "Kdy se vyplatí automatizace firemního procesu",
    description: "Praktický průvodce pro firmy, které zvažují automatizaci procesu a chtějí rozlišit skutečný přínos od zbytečné technologické složitosti.",
    primaryQuery: "automatizace procesů ve firmě",
    heroTitle: "Automatizace se vyplatí jen tam, kde řeší opakovaný a měřitelný problém",
    heroSubtitle: "Jak poznat dobrý automatizační use case, co spočítat předem a proč nezačínat nástrojem.",
    intro: [
      "Automatizace není cíl sama o sobě. Vyplatí se tehdy, když řeší opakovaný problém, který má měřitelný dopad na čas, chybovost, kapacitu nebo kvalitu rozhodování.",
      "Nejlepší první automatizace bývá úzká, praktická a navázaná na existující proces. Nemusí měnit celou firmu, ale má odstranit konkrétní brzdu.",
    ],
    answer: "Automatizace se vyplatí, když je proces opakovaný, má jasná pravidla nebo vstupy a současný ruční způsob vytváří dostatečný náklad nebo riziko.",
    steps: [
      "spočítejte četnost procesu a čas ručních kroků",
      "odhadněte chybovost, čekání a dopad na zákazníka nebo tým",
      "určete, co má zůstat člověku a co může převzít systém",
      "navrhněte první etapu s jasným měřením přínosu",
    ],
    mistakes: [
      "automatizace procesu, který ještě není stabilní",
      "výběr nástroje před pochopením problému",
      "snaha odstranit všechny výjimky v první fázi",
      "ignorování provozní odpovědnosti po nasazení",
    ],
    outcome: [
      "jasnější business case pro automatizaci",
      "menší riziko zbytečně složitého řešení",
      "první etapa s měřitelným dopadem",
      "lepší rozhodnutí, co automatizovat a co nechat lidem",
    ],
    faq: [
      { question: "Musí se automatizace vyplatit finančně hned?", answer: "Ne vždy. Přínosem může být i nižší chybovost, kratší průchod procesem nebo menší závislost na konkrétních lidech." },
      { question: "Kdy automatizaci raději nedělat?", answer: "Když proces není stabilní, nemá vlastníka nebo se automatizací jen zakryje špatně pochopený problém." },
      { question: "Je lepší začít auditem?", answer: "U složitějších procesů ano. Audit pomůže najít místo s největším dopadem a vyhnout se zbytečně velkému projektu." },
    ],
    related: [
      "service-automations-and-integrations",
      "guide-how-to-run-automation-discovery",
      "use-case-workflow-app-for-teams",
      "problem-replace-spreadsheets-in-process",
      "inquiry",
    ],
    fitFor: ["firmy zvažující automatizaci opakovaného procesu", "týmy s ruční koordinací a přepisováním", "buyery, kteří chtějí spočítat přínos před realizací"],
    fitNot: ["jednorázové procesy bez opakování", "automatizace bez vlastníka procesu", "nákup nástroje bez jasného use case"],
  }),
  guide({
    translationKey: "guide-how-to-automate-request-processing",
    locale: "en",
    slug: "how-to-automate-request-processing",
    title: "How to automate request processing | Bc. Ondřej Halata",
    h1: "How to automate request processing without creating delivery chaos",
    description: "A practical guide for companies handling incoming requests manually and trying to reduce copy-paste work, lost information, and confusion between sales and delivery.",
    primaryQuery: "automate request processing",
    heroTitle: "Request automation starts with the process, not another tool",
    heroSubtitle: "For companies where requests arrive by email, forms, or phone and are then sorted, copied, and handed over manually.",
    intro: [
      "Manual request handling can work for a while. The problem starts when volume grows, more people get involved, and information begins to disappear between email, spreadsheets, and notes.",
      "Automation is useful when it shortens repeated steps, lowers the error rate, and gives sales and delivery one shared view of each request.",
    ],
    answer: "Map where requests come from, how they are classified, who decides the next step, and where data is copied by hand. Then define the first automation or internal-system phase.",
    steps: [
      "list request sources and request types",
      "define states from intake to offer or delivery",
      "find manual copying, waiting, and lost information",
      "scope the first phase around the largest operational loss",
    ],
    mistakes: [
      "buying CRM or forms before mapping the process",
      "automating exceptions before repeated steps",
      "no clear owner for the request workflow",
      "moving email chaos into another tool",
    ],
    outcome: [
      "clearer request flow from intake to next step",
      "less copy-paste work and manual lookup",
      "lower risk of lost requests or weak handover",
      "a realistic first automation phase",
    ],
    faq: [
      { question: "Do we need to automate the whole sales process?", answer: "No. It is often better to start with intake, classification, and handover into the next step." },
      { question: "Is CRM enough, or do we need a custom system?", answer: "It depends on the process. CRM may be enough for tracking, while a custom system helps when requests tightly connect to offers, delivery, or internal workflow." },
      { question: "Can email requests be automated?", answer: "Yes, but the rules, validation, and human-review points need to be explicit." },
    ],
    related: [
      "service-automations-and-integrations",
      "service-request-offer-delivery-system",
      "use-case-request-offer-delivery-system",
      "problem-requests-offers-delivery-in-spreadsheets",
      "inquiry",
    ],
    fitFor: ["companies receiving repeated incoming requests", "teams manually sorting and handing over requests", "processes connected to offers or delivery"],
    fitNot: ["one-off requests with no pattern", "workflows with no clear owner", "tool buying without workflow change"],
  }),
  guide({
    translationKey: "guide-how-to-manage-jobs-without-excel",
    locale: "en",
    slug: "how-to-manage-jobs-without-excel",
    title: "How to manage jobs without Excel | Internal system and workflow",
    h1: "How to manage jobs without Excel, email, and manual coordination",
    description: "A practical guide for companies where job tracking in Excel is no longer enough and an internal system or controlled workflow may be the next step.",
    primaryQuery: "job tracking in Excel",
    heroTitle: "Excel works at the beginning. For job management, it eventually becomes a bottleneck.",
    heroSubtitle: "How to recognise when an internal system is needed, what the first version should include, and where not to start with an oversized project.",
    intro: [
      "Excel is a reasonable start for simple tracking. Once jobs move between people, have several states, and depend on current data, the spreadsheet begins to create hidden operational costs.",
      "Moving to an internal system does not have to mean a large project. The best first version usually addresses the riskiest part of tracking and handover.",
    ],
    answer: "Move job tracking out of Excel when the spreadsheet no longer holds ownership, history, current status, and the next-step logic reliably.",
    steps: [
      "define the information needed to manage a job",
      "map job states and responsibilities between roles",
      "find where the spreadsheet is updated manually or late",
      "scope the first version around tracking, states, and history",
    ],
    mistakes: [
      "copying the spreadsheet into an app without changing the process",
      "trying to cover every exception in the first version",
      "no clear owner for the job workflow",
      "underestimating data migration and adoption",
    ],
    outcome: [
      "better visibility over job status",
      "less manual coordination and lookup",
      "clearer ownership of the next step",
      "a foundation for reporting or automation",
    ],
    faq: [
      { question: "When is Excel still enough?", answer: "When only a few people track jobs, the status is simple, and the spreadsheet does not create regular lookup work or mistakes." },
      { question: "Does the first system need to cover operations end to end?", answer: "No. It is often better to start with tracking and status workflow for one part of the process." },
      { question: "What happens to old Excel data?", answer: "It depends on its value. Sometimes importing active jobs is enough; sometimes history matters for reporting." },
    ],
    related: [
      "service-sales-and-job-tracking-system",
      "service-internal-tools-development",
      "problem-requests-offers-delivery-in-spreadsheets",
      "comparison-internal-tool-vs-spreadsheets",
      "inquiry",
    ],
    fitFor: ["companies tracking jobs in spreadsheets", "teams handing work over manually", "processes with several states, roles, and deadlines"],
    fitNot: ["simple personal tracking", "jobs with no repeated workflow", "projects with no willingness to change how work is managed"],
  }),
  guide({
    translationKey: "guide-management-dashboard-from-multiple-systems",
    locale: "en",
    slug: "management-dashboard-from-multiple-systems",
    title: "Management dashboard from multiple systems | Bc. Ondřej Halata",
    h1: "Management dashboard from multiple systems without manual reporting",
    description: "A practical guide for companies assembling reports from several systems and considering a management dashboard with clear data ownership.",
    primaryQuery: "management dashboard",
    heroTitle: "A management dashboard should show business state, not just nice charts",
    heroSubtitle: "How to design a dashboard over several systems so it supports decisions instead of becoming another report.",
    intro: [
      "A management dashboard is valuable only when people trust the data and understand what it means. A chart alone will not fix conflicting systems or manually assembled exports.",
      "The first step is aligning metric definitions, data sources, and update rules. Screen design and visualisation come after that.",
    ],
    answer: "A useful management dashboard depends on clear data sources, metric definitions, and update rules. Otherwise it only visualises the existing confusion.",
    steps: [
      "choose the decisions the dashboard should support",
      "name the data sources and metric owners",
      "align KPI definitions across systems",
      "start with a smaller view tied to operational impact",
    ],
    mistakes: [
      "designing charts before defining metrics",
      "ignoring differences between source systems",
      "no owner for data and interpretation rules",
      "hiding manual exports behind a nicer interface",
    ],
    outcome: [
      "more trustworthy management reporting",
      "less manual export assembly",
      "clearer source and meaning of data",
      "faster response to operational exceptions",
    ],
    faq: [
      { question: "Is a dashboard the same as BI?", answer: "Not necessarily. BI can be the right tool, but custom dashboard work helps when the view must connect to internal workflow, roles, or domain-specific context." },
      { question: "Do all data sources need to be perfect?", answer: "No, but the key metrics need a clear source and an honest understanding of their reliability." },
      { question: "Can a dashboard help operations too?", answer: "Yes. Team leads and operational roles often benefit from seeing exceptions early." },
    ],
    related: [
      "use-case-management-dashboard",
      "use-case-reporting-dashboard",
      "service-internal-tools-development",
      "service-automations-and-integrations",
      "tool-api-integration-checklist",
      "inquiry",
    ],
    fitFor: ["companies reporting from several systems", "management teams relying on manual exports", "teams needing one shared view of business state"],
    fitNot: ["dashboards with no trustworthy data source", "one-off reports with no decision impact", "projects with no metric owner"],
  }),
  guide({
    translationKey: "guide-how-to-find-manual-data-reentry",
    locale: "en",
    slug: "how-to-find-manual-data-reentry",
    title: "How to find manual data re-entry in a company | Bc. Ondřej Halata",
    h1: "How to find manual data re-entry between systems",
    description: "A practical guide to finding where people copy data between systems, where errors appear, and where automation or API integration may make sense.",
    primaryQuery: "manual data re-entry problem",
    heroTitle: "Manual data re-entry is often a hidden cost, not a small detail",
    heroSubtitle: "Where to look for it, how to estimate its impact, and when automation or integration makes sense.",
    intro: [
      "Manual data re-entry often hides inside normal operations. One person adds a value to CRM, another copies it into accounting, and someone else rebuilds a report from it.",
      "One copy-paste step may not look serious. The real cost is repetition, errors, waiting, and dependence on people who know where to find the data.",
    ],
    answer: "Look for places where the same information is created once but entered manually into other systems. That is often where automation or integration has the strongest potential.",
    steps: [
      "follow the process through the real data flow",
      "mark where people copy or check the same values",
      "estimate frequency, time, and error rate",
      "separate simple automation from deeper system integration",
    ],
    mistakes: [
      "fixing the most visible copy step without seeing the whole process",
      "automating data that nobody trusts",
      "ignoring exceptions and human validation",
      "integrating systems without clear data ownership",
    ],
    outcome: [
      "a map of the most expensive manual re-entry points",
      "better choice between automation and API integration",
      "lower error rate in repeated steps",
      "clearer priority for the first technical phase",
    ],
    faq: [
      { question: "How do we know a copy step is worth automating?", answer: "It is a good candidate when it repeats often, consumes time, creates errors, or slows the next step in the process." },
      { question: "Is API integration always needed?", answer: "No. Sometimes the workflow or data entry point should change first. API integration matters when systems need to share data reliably over time." },
      { question: "What if people copy data as a form of checking it?", answer: "Separate validation from copying. A person may still validate critical cases while the data transfer itself is automated." },
    ],
    related: [
      "service-automations-and-integrations",
      "problem-system-integrations",
      "tool-automation-discovery-checklist",
      "tool-api-integration-checklist",
      "inquiry",
    ],
    fitFor: ["companies with several systems and manual copying", "processes repeatedly checking the same data", "teams looking for the first automation opportunities"],
    fitNot: ["one-off copying with no operational impact", "processes without stable data", "integrations with no clear data ownership"],
  }),
  guide({
    translationKey: "guide-when-process-automation-pays-off",
    locale: "en",
    slug: "when-process-automation-pays-off",
    title: "When business process automation pays off | Bc. Ondřej Halata",
    h1: "When business process automation pays off",
    description: "A practical guide for companies considering process automation and trying to separate real value from unnecessary technical complexity.",
    primaryQuery: "business process automation",
    heroTitle: "Automation pays off only when it solves a repeated and measurable problem",
    heroSubtitle: "How to recognise a good automation use case, what to estimate first, and why not to start with the tool.",
    intro: [
      "Automation is not valuable by itself. It pays off when it solves a repeated problem with measurable impact on time, error rate, capacity, or decision quality.",
      "The best first automation is usually narrow, practical, and tied to an existing process. It does not have to transform the whole company; it should remove a specific bottleneck.",
    ],
    answer: "Automation pays off when the process repeats, has clear rules or inputs, and the current manual approach creates enough cost or risk.",
    steps: [
      "estimate process frequency and manual-step time",
      "consider error rate, waiting, and impact on customers or teams",
      "decide what should remain human and what a system can handle",
      "define a first phase with measurable value",
    ],
    mistakes: [
      "automating a process that is not stable yet",
      "choosing a tool before understanding the problem",
      "trying to remove every exception in the first phase",
      "ignoring operational ownership after launch",
    ],
    outcome: [
      "a clearer business case for automation",
      "lower risk of an unnecessarily complex solution",
      "a first phase with measurable impact",
      "better decisions about what to automate and what to keep human",
    ],
    faq: [
      { question: "Does automation need immediate financial payback?", answer: "Not always. Lower error rate, faster cycle time, and lower dependence on specific people can also be valid benefits." },
      { question: "When should we avoid automation?", answer: "When the process is unstable, has no owner, or automation would only hide a poorly understood problem." },
      { question: "Is an audit a good first step?", answer: "For more complex processes, yes. It helps find the highest-impact area and avoid starting with an oversized project." },
    ],
    related: [
      "service-automations-and-integrations",
      "guide-how-to-run-automation-discovery",
      "use-case-workflow-app-for-teams",
      "problem-replace-spreadsheets-in-process",
      "inquiry",
    ],
    fitFor: ["companies considering automation of a repeated process", "teams dealing with manual coordination and data copying", "buyers who want to estimate value before implementation"],
    fitNot: ["one-off processes with no repetition", "automation without a process owner", "tool buying with no clear use case"],
  }),
];
