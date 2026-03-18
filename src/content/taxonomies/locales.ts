// Safe to edit manually: locale taxonomy for runtime and content mapping.

import type { Locale } from "@/content/types";

export interface LocaleDefinition {
  code: Locale;
  label: string;
  htmlLang: string;
  pathPrefix: string;
}

export const localeDefinitions: LocaleDefinition[] = [
  {
    code: "cs",
    label: "Čeština",
    htmlLang: "cs-CZ",
    pathPrefix: "/cs",
  },
  {
    code: "en",
    label: "English",
    htmlLang: "en-US",
    pathPrefix: "/en",
  },
];



