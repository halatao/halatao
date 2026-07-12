import redirectArtifact from "../worker/generated/redirects.json";
import { expandSeoRedirectRules, seoRedirectManifest } from "../config/seo-redirects";
import {
  buildWorkerRedirectArtifact,
  type WorkerRedirectArtifact,
} from "./generate-worker-redirects";

function main() {
  const errors: string[] = [];
  const generated = redirectArtifact as WorkerRedirectArtifact;
  const expected = buildWorkerRedirectArtifact();
  const sourceRules = expandSeoRedirectRules();

  if (generated.manifestVersion !== seoRedirectManifest.version) {
    errors.push(
      `Artifact manifest version ${generated.manifestVersion} does not match source version ${seoRedirectManifest.version}.`,
    );
  }
  if (generated.canonicalOrigin !== seoRedirectManifest.canonicalOrigin) {
    errors.push(
      `Artifact canonical origin '${generated.canonicalOrigin}' does not match '${seoRedirectManifest.canonicalOrigin}'.`,
    );
  }
  if (generated.generatedRuleCount !== sourceRules.length) {
    errors.push(
      `Artifact declares ${generated.generatedRuleCount} rules but source expands to ${sourceRules.length}.`,
    );
  }

  const generatedSources = Object.keys(generated.rules);
  if (generatedSources.length !== sourceRules.length) {
    errors.push(
      `Artifact contains ${generatedSources.length} unique sources but source expands to ${sourceRules.length}.`,
    );
  }

  for (const rule of sourceRules) {
    const workerRule = generated.rules[rule.source];
    if (!workerRule) {
      errors.push(`Artifact is missing redirect source '${rule.source}'.`);
      continue;
    }
    if (workerRule.target !== rule.target) {
      errors.push(
        `Artifact target for '${rule.source}' is '${workerRule.target}', expected '${rule.target}'.`,
      );
    }
    if (workerRule.status !== rule.status || workerRule.query !== rule.query) {
      errors.push(`Artifact policy for '${rule.source}' does not match the source manifest.`);
    }
    if (workerRule.category !== rule.category) {
      errors.push(`Artifact category for '${rule.source}' does not match '${rule.category}'.`);
    }
  }

  if (JSON.stringify(generated) !== JSON.stringify(expected)) {
    errors.push("Artifact content or deterministic source ordering differs from the generated result.");
  }

  if (errors.length > 0) {
    console.error(`Worker redirect validation failed with ${errors.length} error(s):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exit(1);
  }

  const counts = Object.values(generated.rules).reduce<Record<string, number>>((result, rule) => {
    result[rule.category] = (result[rule.category] ?? 0) + 1;
    return result;
  }, {});

  console.log(
    `Worker redirect validation passed: ${generatedSources.length} exact rules; ` +
      `${counts.canonicalization ?? 0} canonicalization, ${counts.legacy ?? 0} legacy, ` +
      `${counts["content-merge"] ?? 0} content merge.`,
  );
}

main();
