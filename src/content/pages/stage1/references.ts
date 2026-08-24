import { definePage } from "@/content/builders";
import type { ContentPage } from "@/content/types";

export const referencePages: ContentPage[] = [
  definePage({
    translationKey: "references",
    translationAvailability: "optional",
    stage: 1,
    locale: "cs",
    pageType: "reference",
    slug: "reference",
    segments: ["reference"],
    title: "Reference webů, aplikací a automatizací | Ondřej Halata",
    breadcrumbLabel: "Reference webů a aplikací",
    description: "Vybrané firemní weby, webové aplikace, CRM, marketplace a automatizační nástroje, na kterých jsem řešil návrh, vývoj, nasazení nebo další provoz.",
    primaryQuery: "reference weby aplikace",
    intent: "commercial",
    hero: {
      eyebrow: "Vybrané realizace",
      title: "Weby, aplikace a automatizace, které jsem navrhl a vytvořil.",
      subtitle: "Ukázky zahrnují vlastní produkty i projekty pro klienty. U každého uvádím, co řeší pro uživatele a jakou část dodávky jsem měl na starost.",
      primaryCta: { label: "Popsat podobný projekt", href: "/cs/kontakt/" },
    },
    intro: [
      "U uvedených projektů jsem podle rozsahu zajišťoval návrh, vývoj, nasazení a provoz.",
      "Některé komerční projekty z týmové spolupráce nelze veřejně rozebrat do detailu; odděluji je proto od vlastních a přímých klientských realizací.",
    ],
    sections: [
      {
        title: "Aplikace a systémy",
        body: ["Vlastní a klientské produkty, kde je vedle rozhraní důležitá také práce s daty, rolemi a navazujícím workflow."],
        bullets: ["DoporučenoAI", "RealioCRM", "Odhad123", "Worket.cz", "Swapio", "eMamky", "Novinex"],
      },
      {
        title: "Firemní weby",
        body: ["Weby, které spojují prezentaci služby nebo nabídky s její správou, katalogem nebo navazující poptávkou."],
        bullets: ["Kasan & Pelcová", "Viditelný Makléř", "Prodat-byt.cz"],
      },
      {
        title: "Automatizace a integrace",
        body: ["Nástroje, které převádějí data mezi formáty nebo systémy a omezují opakovanou ruční práci."],
        bullets: ["Pohoda XML"],
      },
      {
        title: "Zkušenost z komerčních aplikací a větších týmů",
        body: [
          "Vedle vlastních a přímých klientských projektů jsem pracoval na vývoji a údržbě existujících aplikací v týmech firem a software housů. Řešil jsem nové funkce, legacy codebase, databáze, migrace, provozní problémy, komunikaci s uživateli i školení.",
          "U těchto spoluprací neprezentuji celý produkt jako vlastní realizaci. Slouží jako důkaz, že umím navázat v existující architektuře, dodržovat týmový proces a převzít odpovědnost za vymezenou část systému.",
        ],
      },
    ],
    faq: [],
    related: ["service-company-websites", "service-custom-web-app-development", "service-existing-app-takeover", "service-automations-and-integrations", "inquiry"],
    fit: {
      for: ["firemní weby a katalogy", "webové aplikace a interní systémy", "projekty s daty, správou obsahu nebo integracemi"],
      notFor: ["neověřené koncepty vydávané za realizace", "projekty, které nelze veřejně popsat bez souhlasu klienta"],
    },
    cta: {
      label: "Popsat projekt",
      href: "/cs/kontakt/",
      note: "Napište, co má řešení dělat a kdo jej bude používat. Odkážu vás na nejbližší referenci a navrhnu realistický další krok.",
    },
    seo: {
      title: "Reference webů, aplikací a automatizací | Ondřej Halata",
      description: "Vybrané firemní weby, webové aplikace, CRM, marketplace a automatizační nástroje, na kterých jsem řešil návrh, vývoj, nasazení nebo další provoz.",
    },
    schema: { includeProfessionalService: true },
    indexable: true,
  }),
  definePage({
    translationKey: "references",
    translationAvailability: "optional",
    stage: 1,
    locale: "en",
    pageType: "reference",
    slug: "references",
    segments: ["references"],
    title: "Website and application references | Ondřej Halata",
    breadcrumbLabel: "Website and application references",
    description: "Selected company websites, custom web applications, CRM, marketplace, and automation tools that I designed, developed, deployed, or continue to operate.",
    primaryQuery: "website application developer portfolio",
    intent: "commercial",
    hero: {
      eyebrow: "Selected work",
      title: "Websites, applications, and automation tools I designed and built.",
      subtitle: "The selection includes my own products and direct client work. Each example explains what it does for users and the part of delivery I was responsible for.",
      primaryCta: { label: "Discuss a similar project", href: "/en/discuss-your-project/" },
    },
    intro: [
      "Depending on the project, my responsibility covered product structure, design, development, deployment, and ongoing operation.",
      "Some commercial work delivered within larger teams cannot be discussed publicly in detail, so it is clearly separated from my own and direct client projects.",
    ],
    sections: [
      {
        title: "Applications and systems",
        body: ["Own and client products where user interfaces are backed by data, roles, administration, and connected workflows."],
        bullets: ["DoporučenoAI", "RealioCRM", "Odhad123", "Worket.cz", "Swapio", "eMamky", "Novinex"],
      },
      {
        title: "Company websites",
        body: ["Websites that combine a clear service or product presentation with content management, catalogues, listings, or an enquiry flow."],
        bullets: ["Kasan & Pelcová", "Viditelný Makléř", "Prodat-byt.cz"],
      },
      {
        title: "Automation and integrations",
        body: ["Tools that transform data between formats or systems and reduce repetitive manual work."],
        bullets: ["Pohoda XML"],
      },
      {
        title: "Commercial applications and larger teams",
        body: [
          "Alongside my own and direct client projects, I have worked on existing commercial applications in company and software-house teams. The work included new features, legacy codebases, databases, migrations, production issues, user communication, and training.",
          "I do not present those complete products as my own delivery. They demonstrate that I can work within an existing architecture and team process while taking responsibility for an agreed part of the system.",
        ],
      },
    ],
    faq: [],
    related: ["service-company-websites", "service-custom-web-app-development", "service-existing-app-takeover", "service-automations-and-integrations", "inquiry"],
    fit: {
      for: ["company websites and catalogues", "custom web applications and internal systems", "projects involving data, content management, or integrations"],
      notFor: ["unverified concepts presented as delivered work", "projects that cannot be described publicly without client approval"],
    },
    cta: {
      label: "Discuss a project",
      href: "/en/discuss-your-project/",
      note: "Share what the solution needs to do and who will use it. I will point you to the closest relevant example and suggest a realistic next step.",
    },
    seo: {
      title: "Website and application references | Ondřej Halata",
      description: "Selected company websites, custom web applications, CRM, marketplace, and automation tools that I designed, developed, deployed, or continue to operate.",
    },
    schema: { includeProfessionalService: true },
    indexable: true,
  }),
];
