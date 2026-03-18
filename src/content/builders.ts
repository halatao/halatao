// Safe to edit manually: small builders that keep repo-native content consistent.

import type {
  ContentPage,
  Locale,
  PageCta,
  PageSection,
} from "@/content/types";

const inquiryHrefByLocale: Record<Locale, string> = {
  cs: "/cs/popsat-projekt",
  en: "/en/discuss-your-project",
};

const thankYouHrefByLocale: Record<Locale, string> = {
  cs: "/cs/popsat-projekt/dekuji",
  en: "/en/discuss-your-project/thank-you",
};

export function buildInquiryHref(locale: Locale) {
  return inquiryHrefByLocale[locale];
}

export function buildThankYouHref(locale: Locale) {
  return thankYouHrefByLocale[locale];
}

export function buildPrimaryCta(locale: Locale): PageCta {
  return locale === "cs"
    ? {
        label: "Popsat projekt",
        href: inquiryHrefByLocale.cs,
        note: "Pošlete základní kontext a navrhnu rozumný další krok.",
      }
    : {
        label: "Discuss your project",
        href: inquiryHrefByLocale.en,
        note: "Share the context and I will tell you whether the project is a fit.",
      };
}

export function buildSecondaryCta(locale: Locale) {
  return locale === "cs"
    ? {
        label: "Jak spolupráce probíhá",
        href: "/cs/jak-spoluprace-probiha",
      }
    : {
        label: "How delivery works",
        href: "/en/how-project-delivery-works",
      };
}

export function definePage(
  input: Omit<ContentPage, "id" | "cta"> & { cta?: PageCta },
): ContentPage {
  return {
    ...input,
    id: `${input.translationKey}.${input.locale}`,
    cta: input.cta ?? buildPrimaryCta(input.locale),
  };
}

export function section(
  title: string,
  body: string[],
  bullets?: string[],
): PageSection {
  return { title, body, bullets };
}


