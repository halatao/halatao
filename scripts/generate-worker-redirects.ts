import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import {
  canonicalOrigin,
  expandSeoRedirectRules,
  seoRedirectManifest,
  type RedirectCategory,
  type RedirectStatus,
} from "../config/seo-redirects";

export type WorkerRedirectArtifactRule = {
  target: string;
  status: RedirectStatus;
  query: "preserve" | "drop";
  category: RedirectCategory;
};

export type WorkerRedirectArtifact = {
  manifestVersion: number;
  canonicalOrigin: string;
  generatedRuleCount: number;
  rules: Record<string, WorkerRedirectArtifactRule>;
};

export const workerRedirectArtifactPath = resolve(
  process.cwd(),
  "worker/generated/redirects.json",
);

export function buildWorkerRedirectArtifact(): WorkerRedirectArtifact {
  const expandedRules = [...expandSeoRedirectRules()].sort((left, right) =>
    left.source.localeCompare(right.source),
  );

  return {
    manifestVersion: seoRedirectManifest.version,
    canonicalOrigin,
    generatedRuleCount: expandedRules.length,
    rules: Object.fromEntries(
      expandedRules.map((rule) => [
        rule.source,
        {
          target: rule.target,
          status: rule.status,
          query: rule.query,
          category: rule.category,
        },
      ]),
    ),
  };
}

export function serializeWorkerRedirectArtifact(artifact: WorkerRedirectArtifact) {
  return `${JSON.stringify(artifact, null, 2)}\n`;
}

async function main() {
  const artifact = buildWorkerRedirectArtifact();
  const serialized = serializeWorkerRedirectArtifact(artifact);
  const checkOnly = process.argv.includes("--check");

  if (checkOnly) {
    const current = await readFile(workerRedirectArtifactPath, "utf8").catch(() => null);
    if (current !== serialized) {
      throw new Error(
        "Worker redirect artifact is missing or stale. Run 'npm run generate:worker-redirects'.",
      );
    }
  } else {
    await mkdir(dirname(workerRedirectArtifactPath), { recursive: true });
    await writeFile(workerRedirectArtifactPath, serialized, "utf8");
  }

  console.log(
    `${checkOnly ? "Verified" : "Generated"} ${artifact.generatedRuleCount} Worker redirects at worker/generated/redirects.json.`,
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  });
}
