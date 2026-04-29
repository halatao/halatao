// Safe to edit manually: normalized content types used by the registry and templates.

export type Locale = "cs" | "en";

export type Stage = 1 | 2 | 3;

export type SearchIntent =
  | "commercial"
  | "transactional"
  | "decision"
  | "research";

export type PageType =
  | "home"
  | "hub"
  | "service"
  | "problem"
  | "comparison"
  | "use_case"
  | "case_study"
  | "guide"
  | "technology"
  | "tool"
  | "location"
  | "process"
  | "inquiry";

export interface LinkRecord {
  label: string;
  href: string;
}

export interface HeroCta extends LinkRecord {
  variant?: "primary" | "secondary";
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: HeroCta;
  secondaryCta?: HeroCta;
}

export interface PageSection {
  title: string;
  body: string[];
  bullets?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FitBlock {
  for: string[];
  notFor: string[];
}

export interface PageCta {
  label: string;
  href: string;
  note: string;
}

export interface SeoFields {
  title: string;
  description: string;
  image?: string;
}

export interface JsonLdConfig {
  includeProfessionalService?: boolean;
  includePerson?: boolean;
  includeWebSite?: boolean;
  includeService?: boolean;
  includeFaq?: boolean;
  serviceType?: string;
}

export interface ContentPage {
  id: string;
  translationKey: string;
  stage: Stage;
  locale: Locale;
  pageType: PageType;
  slug: string;
  segments: string[];
  title: string;
  h1: string;
  description: string;
  primaryQuery: string;
  intent: SearchIntent;
  hero: HeroContent;
  intro: string[];
  sections: PageSection[];
  faq: FAQItem[];
  related: string[];
  priorityLinks?: LinkRecord[];
  fit: FitBlock;
  cta: PageCta;
  seo: SeoFields;
  schema: JsonLdConfig;
  indexable: boolean;
  note?: string;
}

