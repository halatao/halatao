import assert from "node:assert/strict";
import test from "node:test";

import redirectArtifact from "../generated/redirects.json";
import worker, { handleRequest, type AssetFetch } from "../src/index";

const canonicalOrigin = "https://www.halatao.cz";
const query = "?utm_source=edge-test&utm_medium=validation";
const rules = redirectArtifact.rules;

function rejectingAssets(): AssetFetch {
  return async () => {
    throw new Error("Redirect response called the asset binding unexpectedly.");
  };
}

async function expectRedirect(source: string, expectedTarget: string, status = 308) {
  const response = await handleRequest(new Request(source), rejectingAssets());
  assert.equal(response.status, status);
  assert.equal(response.headers.get("location"), expectedTarget);
}

test("generated artifact exposes the complete categorized redirect manifest", () => {
  assert.equal(redirectArtifact.generatedRuleCount, 641);
  assert.equal(Object.keys(rules).length, 641);

  const counts = Object.values(rules).reduce<Record<string, number>>((result, rule) => {
    result[rule.category] = (result[rule.category] ?? 0) + 1;
    return result;
  }, {});
  assert.deepEqual(counts, { canonicalization: 334, legacy: 289, "content-merge": 18 });
});

test("every exact manifest source redirects directly and preserves its query", async () => {
  for (const [source, rule] of Object.entries(rules)) {
    await expectRedirect(
      `${canonicalOrigin}${source}${query}`,
      `${canonicalOrigin}${rule.target}${query}`,
      rule.status,
    );
    assert.equal(rules[rule.target as keyof typeof rules], undefined, `${source} creates a chain`);
  }
});

test("host, protocol and path normalization compose into one hop", async () => {
  const cases = [
    ["http://halatao.cz/cs/sluzby?from=apex", `${canonicalOrigin}/cs/sluzby/?from=apex`],
    ["http://www.halatao.cz/?from=http", `${canonicalOrigin}/cs/?from=http`],
    ["https://halatao.cz/cs/sluzby/", `${canonicalOrigin}/cs/sluzby/`],
    ["https://halatao.cz/robots.txt?check=1", `${canonicalOrigin}/robots.txt?check=1`],
  ] as const;

  for (const [source, target] of cases) await expectRedirect(source, target);
});

test("production file requests normalize origin before asset lookup", async () => {
  const origins = [
    "http://halatao.cz",
    "http://www.halatao.cz",
    "https://halatao.cz",
  ] as const;
  const filePaths = [
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/favicon.ico",
    "/icon.svg",
    "/apple-icon",
  ] as const;
  const methods = ["GET", "HEAD"] as const;
  const complexQuery = "?seo_redirect_probe=halatao-p0&encoded=a%2Fb%3Dc&repeat=1&repeat=2&empty=";

  for (const origin of origins) {
    for (const filePath of filePaths) {
      for (const method of methods) {
        const source = `${origin}${filePath}${complexQuery}`;
        const response = await handleRequest(
          new Request(source, { method }),
          async () => {
            throw new Error(`Asset binding must not receive ${source}`);
          },
        );

        assert.equal(response.status, 308, `${method} ${source}`);
        assert.equal(
          response.headers.get("location"),
          `${canonicalOrigin}${filePath}${complexQuery}`,
          `${method} ${source}`,
        );
      }
    }
  }
});

test("canonical files and an unknown asset are delegated without redirect", async () => {
  const cases = [
    { path: "/robots.txt", assetStatus: 200 },
    { path: "/sitemap.xml", assetStatus: 200 },
    { path: "/llms.txt", assetStatus: 200 },
    { path: "/icon.svg", assetStatus: 200 },
    { path: "/apple-icon", assetStatus: 200 },
    { path: "/_next/static/seo-edge-missing-test.js", assetStatus: 404 },
  ] as const;
  const query = "?cache=edge-test";

  for (const { path, assetStatus } of cases) {
    for (const method of ["GET", "HEAD"] as const) {
      let assetCalls = 0;
      const request = new Request(`${canonicalOrigin}${path}${query}`, { method });
      const response = await handleRequest(request, async (assetRequest) => {
        assetCalls += 1;
        assert.equal(assetRequest, request, `${method} ${path}`);
        return new Response(method === "HEAD" ? null : "asset", { status: assetStatus });
      });

      assert.equal(response.status, assetStatus, `${method} ${path}`);
      assert.equal(response.headers.get("location"), null, `${method} ${path}`);
      assert.equal(assetCalls, 1, `${method} ${path}`);
    }
  }
});

test("required merge, GSC, location, automation and exact Czech legacy families exist", () => {
  const requiredSources = [
    "/cs/priklady/workflow-poptavka-nabidka-realizace/",
    "/en/use-cases/request-offer-delivery-workflow/",
    "/cs/problemy/poptavky-nabidky-a-realizace-v-tabulkach-a-emailu/",
    "/en/problems/requests-offers-and-delivery-in-spreadsheets/",
    "/cs/sluzby/system-pro-rizeni-poptavek-nabidek-a-realizace/",
    "/en/services/request-offer-delivery-system/",
    "/en/templates/internal-tool-scope-worksheet-2/",
    "/cs/pruvodce/jak-nacenit-prevzeti-aplikace-2/",
    "/cs/technologie-1/",
    "/en/services-1/",
    "/en/templates/release-process-stabilization-checklist-2/",
    "/cs/problemy/potrebujeme-klientsky-portal-2/",
    "/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat-2/",
    "/cs/lokace/",
    "/cs/lokace/praha/",
    "/cs/lokace/brno/",
    "/cs/lokace/ostrava/",
    "/automatizace",
    "/automatizace/",
    "/automatizace/index.html",
    "/automatizace/dekuji.html",
    "/cz/",
    "/cz/index.html",
    "/cz/sluzby/",
  ];

  for (const source of requiredSources) assert.ok(rules[source as keyof typeof rules], source);
});

test("canonical pages, files, assets and unknown paths use the asset binding", async () => {
  const passthroughPaths = [
    "/cs/",
    "/robots.txt",
    "/sitemap.xml",
    "/llms.txt",
    "/icon.svg",
    "/_next/static/example.js",
    "/og/halatao-social.svg",
    "/neexistujici-seo-test-url/",
    "/cz/neexistujici-seo-test-url/",
    "/_next/static/neexistujici-test.js",
  ];

  for (const path of passthroughPaths) {
    let received: Request | undefined;
    const response = await handleRequest(new Request(`${canonicalOrigin}${path}`), async (request) => {
      received = request;
      return new Response("origin", { status: 207 });
    });
    assert.equal(response.status, 207, path);
    assert.equal(received?.url, `${canonicalOrigin}${path}`, path);
  }
});

test("workers.dev keeps preview redirects and assets on the preview origin", async () => {
  const previewOrigin = "https://halatao.ondrej-halata.workers.dev";

  await expectRedirect(`${previewOrigin}/${query}`, `${previewOrigin}/cs/${query}`);

  let assetCalls = 0;
  const response = await handleRequest(new Request(`${previewOrigin}/cs/`), async () => {
    assetCalls += 1;
    return new Response("preview asset", { status: 200 });
  });

  assert.equal(response.status, 200);
  assert.equal(assetCalls, 1);
});

test("production apex normalizes to www while canonical www serves assets", async () => {
  await expectRedirect(
    "https://halatao.cz/cs/?source=apex",
    `${canonicalOrigin}/cs/?source=apex`,
  );

  let assetCalls = 0;
  const response = await handleRequest(new Request(`${canonicalOrigin}/cs/`), async () => {
    assetCalls += 1;
    return new Response("canonical asset", { status: 200 });
  });

  assert.equal(response.status, 200);
  assert.equal(assetCalls, 1);
});

test("default Worker entrypoint delegates only to env.ASSETS", async () => {
  let receivedUrl: string | undefined;
  const response = await worker.fetch(new Request(`${canonicalOrigin}/en/`), {
    ASSETS: {
      async fetch(request) {
        receivedUrl = request.url;
        return new Response("bound asset", { status: 200 });
      },
    },
  });

  assert.equal(response.status, 200);
  assert.equal(receivedUrl, `${canonicalOrigin}/en/`);
});

test("origin passthrough preserves method, headers and body", async () => {
  const source = new Request(`${canonicalOrigin}/api/example`, {
    method: "POST",
    headers: { "content-type": "text/plain", "x-edge-test": "preserved" },
    body: "request-body",
  });

  let observed: { method: string; header: string | null; body: string } | undefined;
  const response = await handleRequest(source, async (request) => {
    observed = {
      method: request.method,
      header: request.headers.get("x-edge-test"),
      body: await request.text(),
    };
    return new Response("origin", { status: 202 });
  });

  assert.equal(response.status, 202);
  assert.deepEqual(observed, {
    method: "POST",
    header: "preserved",
    body: "request-body",
  });
});
