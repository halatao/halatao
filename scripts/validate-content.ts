import { getAllPages, getMigrationSummary, getSectionChildren } from "../src/content/registry";
import { homepageFeaturePaths } from "../src/lib/navigation";

const pages = getAllPages();
const summary = getMigrationSummary();

const expectedAiPaths = {
  cs: "/cs/sluzby/ai-automatizace-a-integrace/",
  en: "/en/services/ai-automation-and-integrations/",
} as const;

for (const locale of ["cs", "en"] as const) {
  if (homepageFeaturePaths[locale][3] !== expectedAiPaths[locale]) {
    throw new Error(`Homepage ${locale} AI feature must link to ${expectedAiPaths[locale]}.`);
  }

  const serviceHub = pages.find(
    (page) => page.translationKey === "hub-services" && page.locale === locale,
  );
  if (!serviceHub) {
    throw new Error(`Missing ${locale} services hub.`);
  }

  const contractCards = getSectionChildren(serviceHub).filter(
    (page) => page.translationKey === "contract-support",
  );
  if (contractCards.length !== 1) {
    throw new Error(`Services hub ${serviceHub.id} must render contract-support exactly once.`);
  }
}

console.log(`Validated ${pages.length} pages.`);
console.log(`Counts by type: ${JSON.stringify(summary.countsByType)}`);
console.log(`Counts by locale: ${JSON.stringify(summary.countsByLocale)}`);
