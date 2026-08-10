import { getAllPages, getMigrationSummary } from "../src/content/registry";
import { homepageFeaturePaths } from "../src/lib/navigation";

const pages = getAllPages();
const summary = getMigrationSummary();

const expectedHomepageFeaturePaths = {
  cs: [
    "/cs/sluzby/tvorba-webovych-stranek/",
    "/cs/sluzby/vyvoj-webovych-aplikaci-na-miru/",
    "/cs/sluzby/automatizace-a-integrace/",
  ],
  en: [
    "/en/services/company-website-development/",
    "/en/services/custom-web-application-development/",
    "/en/services/automations-and-integrations/",
  ],
} as const;

for (const locale of ["cs", "en"] as const) {
  const actualFeaturePaths = homepageFeaturePaths[locale];
  const expectedFeaturePaths = expectedHomepageFeaturePaths[locale];
  if (actualFeaturePaths.length !== expectedFeaturePaths.length || actualFeaturePaths.some((path, index) => path !== expectedFeaturePaths[index])) {
    throw new Error(`Homepage ${locale} feature paths do not match the three primary services.`);
  }
}

console.log(`Validated ${pages.length} pages.`);
console.log(`Counts by type: ${JSON.stringify(summary.countsByType)}`);
console.log(`Counts by locale: ${JSON.stringify(summary.countsByLocale)}`);
