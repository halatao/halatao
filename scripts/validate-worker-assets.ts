import { stat } from "node:fs/promises";
import { resolve } from "node:path";

const requiredAssets = [
  ["out/cs/index.html", "Czech homepage"],
  ["out/en/index.html", "English homepage"],
  ["out/sitemap.xml", "sitemap"],
  ["out/robots.txt", "robots file"],
  ["out/404.html", "custom 404 page"],
] as const;

async function main() {
  const errors: string[] = [];

  for (const [relativePath, label] of requiredAssets) {
    const absolutePath = resolve(process.cwd(), relativePath);
    try {
      const file = await stat(absolutePath);
      if (!file.isFile() || file.size === 0) {
        errors.push(`${label} '${relativePath}' is not a non-empty file.`);
      }
    } catch {
      errors.push(`${label} '${relativePath}' is missing.`);
    }
  }

  if (errors.length > 0) {
    console.error(`Worker asset validation failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  console.log(`Worker asset validation passed for ${requiredAssets.length} required files.`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
