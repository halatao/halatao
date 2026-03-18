import { getAllPages, getMigrationSummary } from "../src/content/registry";

const pages = getAllPages();
const summary = getMigrationSummary();

console.log(`Validated ${pages.length} pages.`);
console.log(`Counts by type: ${JSON.stringify(summary.countsByType)}`);
console.log(`Counts by locale: ${JSON.stringify(summary.countsByLocale)}`);
