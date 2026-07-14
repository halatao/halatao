# SEO P2 strategy

Date: 2026-07-14

Status: implementation backlog based on the normalized GSC exports and the current repository. P2 content deployment remains gated by production verification of the P0 URL layer.

## Executive decision

The first P2 wave is deliberately narrow:

1. deepen the Czech transactional, how-to and use-case owners plus the broader Excel-process diagnostic, while keeping the narrower P1 pain owner stable for overlap monitoring;
2. strengthen the Czech application-takeover service;
3. turn four Czech template pages into genuinely reusable working assets;
4. finish and verify the small robots, document-structure, and measurement tasks.

English pages are predominantly `MONITOR` or `NEEDS MORE DATA`. The available GSC query and page tables are independent aggregates, so they do not prove which query landed on which page. No EN page should be rewritten or mirrored from CS solely because it has impressions in the page table.

Machine-readable artifacts:

- `analysis/p2/page-priorities.csv` — 30 ranked page decisions;
- `analysis/p2/query-page-map.csv` — query-to-page hypotheses with explicit confidence and validation requirements;
- `analysis/p2/p2-backlog.csv` — implementation, monitoring, dependencies, acceptance criteria, measurement, and rollback.

## Status vocabulary

| Status | Meaning |
| --- | --- |
| `IMPLEMENT NOW` | Implemented or approved for the first bounded content/asset wave; deployment is still separate. |
| `TEST` | Bounded experiment or instrumentation that requires a recorded deployment date and evaluation window. |
| `MONITOR` | Keep the current page unchanged and compare stable post-P0 data. |
| `NEEDS MORE DATA` | No content decision until a filtered query-by-page view and, where relevant, country/device evidence exists. |

## Evidence boundary

### Performance window

The normalized Performance inputs cover 2026-06-15 through 2026-07-12. The two supplied Performance ZIPs are content-identical and therefore represent one dataset, not two periods.

The report-level totals are not interchangeable:

| GSC aggregation | Rows | Clicks | Impressions | Weighted position |
| --- | ---: | ---: | ---: | ---: |
| Chart / country / device total | n/a | 15 | 1,296 | 13.47 |
| Query table | 87 | 0 | 658 | 19.09 |
| Page table before canonical grouping | 112 | 15 | 1,434 | 12.90 |

The query table contains only about 50.8% of chart impressions, consistent with GSC query anonymization and export limits. The page table contains 110.6% of chart impressions, so it must also be treated as a separate aggregation rather than reconciled row-for-row with the chart. Consequently:

- `normalized-queries.csv` is used to identify demand themes only;
- `normalized-pages.csv` is used to identify page-level visibility and historical URL fragmentation only;
- `query-page-map.csv` contains semantic hypotheses, not observed joins;
- every actionable mapping still requires a GSC query filter combined with a page filter.

### Historical Coverage data

The reviewed Coverage observations are from May 2026, use old no-trailing-slash URLs, and predate the current URL and navigation work. They do not justify noindexing or merging the reviewed canonical pages. The current review found all seven targets active, in the sitemap, in the build, self-canonical, and reachable.

The four selected working assets were historically reported as crawled but not indexed. That signal is a reason to make each asset more useful and request a fresh crawl, not proof that the current canonical slash URL is excluded today.

### URL normalization rules

For `halatao.cz` and `www.halatao.cz`, the analytical model applies HTTPS, canonical `www`, the preferred HTML trailing slash, `/index.html` cleanup and the checked-in redirect manifest, including `/cz/`, legacy and merge mappings. Query strings and fragments are removed before aggregation. Metrics from source variants are summed and position is weighted by impressions.

Other subdomains are not part of the main-site route registry. Their HTTPS origin and path are preserved, and `current_registry_route` remains false. In particular, `shop.halatao.cz` coverage rows are not rewritten to `/cs/` and must be assessed in their own hosting and Search Console context.

## Prioritization model

The ranking in `analysis/p2/page-priorities.csv` is not an impressions sort. It applies this documented opportunity model:

`Opportunity = visibility opportunity × business relevance × intent fit × confidence ÷ implementation effort`

- **Visibility opportunity (1–5):** combines normalized impressions, CTR gap and the position band. Positions 4–15 receive the strongest actionable weight; high impressions far outside that band do not automatically outrank a commercial first-page URL.
- **Business relevance (1–5):** transactional service and commercially adjacent problem/guide/use-case intent receive more weight than broad technical awareness traffic.
- **Intent fit (0.5–1.0):** discounts a page where the available query theme does not clearly match the page owner or target geography.
- **Confidence (0.4/0.7/1.0):** low/medium/high evidence factor. Missing query×page data and very small samples lower confidence.
- **Implementation effort (1/2/3):** small snippet/guardrail, bounded content/component, or broad content/architecture work.

Current indexability is a gate, not a multiplier: a missing or non-indexable target cannot be an `IMPLEMENT NOW` page. Historical pre-migration Coverage does not lower an active canonical by itself. Fresh P1 owners receive a stability penalty to avoid resetting title/content baselines immediately after a merge. The 30 ranked page rows and 22 execution/backlog rows are linked by canonical target; together they preserve metrics, intent, confidence, action, KPI/acceptance window and rollback evidence.

## P2 release gate

Content can be prepared in the repository, but the post-change SEO measurement window must not start until the production URL layer passes all of the following:

- root, no-slash, `index.html`, `/cz/`, legacy, and merged-loser sources return HTTP 301 or 308;
- each source redirects in one hop to the final `https://www.halatao.cz/.../` target;
- the query string is preserved;
- every final target returns 200 with a self-canonical;
- no redirect chain, loop, or redirect-to-404 exists;
- loser URLs are absent from sitemap and generated content output.

A checked-in worker or manifest is not production proof. If those HTTP checks have not been run against the active edge, record the release as unverified rather than attributing a later GSC movement to P2 copy.

## First implementation wave

### 1. Czech request–offer–delivery cluster

The four pages must answer four different questions. The existing winner URLs remain the owners.

| Owner | User question | Content boundary |
| --- | --- | --- |
| `/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/` | Who will design and build the system for us? | Transactional scope, integrations, roles/states, delivery model, proof, collaboration, CTA. |
| `/cs/pruvodce/jak-automatizovat-zpracovani-poptavek/` | How do we prepare and introduce request automation? | Prerequisites, mapping, ownership, exception handling, pilot, rollout, acceptance and measurement. |
| `/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/` | How does such a system work in practice? | Actors, states, hand-offs, exception paths, automation points, dashboard and operating outcome. |
| `/cs/problemy/potrebujeme-nahradit-excel-ve-firemnim-procesu/` | How do we know Excel no longer suffices for an important business process? | Broad diagnostic symptoms, decision boundary between process improvement, SaaS and an internal system. |

The data supports the cluster decision, but not a false query-page attribution:

- the service winner has 176 normalized page impressions, two clicks, position 12.11, and three historical source variants;
- the use-case winner has 60 impressions, no clicks, position 7.75, and two source variants;
- the guide has 57 impressions, no clicks, position 5.24, and two source variants;
- the broader Excel-process problem page has 26 impressions, no clicks and position 4.50;
- the narrower request-offer-delivery pain winner has four impressions and stays stable for overlap monitoring.

The broader Excel-process page is included because it has a first-page signal and owns the decision framework. The narrower P1 winner remains the owner of request-offer-delivery symptoms and is not merged or rewritten in this wave.

Contextual links should explain the next question instead of repeating a generic related-content block. Suitable anchors include:

- from the pain page: “jak automatizaci poptávek připravit”, “jak systém funguje v praxi”, and “návrh systému pro řízení poptávek a zakázek”;
- from the guide: “signály, že Excel a e-mail přestávají stačit”, “konkrétní workflow systému”, and “návrh a vývoj řešení”;
- from the use case: “postup zavedení automatizace” and “vývoj systému na míru”;
- from the service: “průvodce zavedením”, “ukázka workflow”, and “provozní symptomy současného stavu”.

Every link must use the final slash canonical. Existing merged losers remain redirect-only and must not return to copy, navigation, related keys, sitemap, or hreflang.

### 2. Czech application-takeover service

Target: `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace/`.

The page has 15 normalized impressions, no clicks, and average position 6.60. More importantly, the query export contains a highly specific takeover need at position 1.86. That semantic mapping is strong but still not an observed query-page join.

The service should own the commercial answer:

- what evidence and access are required to start;
- technical and operational stabilization phases;
- risk triage and priority setting;
- environments, releases, rollback, observability, and responsibility transfer;
- expected audit/handover outputs;
- the collaboration model and a direct CTA.

The boundaries remain strict:

- `/cs/pruvodce/jak-pripravit-takeover-audit-aplikace/` owns the explanatory audit process;
- `/cs/sablony/checklist-prevzeti-aplikace/` owns the practical evidence checklist;
- the service owns who performs the takeover and how the engagement proceeds.

### 3. Four Czech working assets

These pages stay indexable and receive bounded functional expansion:

| Asset | Required addition |
| --- | --- |
| `/cs/sablony/checklist-api-integrace/` | Data owner, authentication, failure modes, retries, idempotency, monitoring, and a compact completed example. |
| `/cs/sablony/scope-worksheet-pro-interni-system/` | Role, state, exception, and data prompts plus a compact filled worksheet. |
| `/cs/sablony/checklist-prevzeti-aplikace/` | Evidence, owner, status, priority, access, environment, release, rollback, and handover-output fields. |
| `/cs/sablony/discovery-checklist-pro-automatizace/` | Process map, exception path, owner, source data, failure impact, candidate intervention, and acceptance signal. |

Each asset must be directly usable. It must not become a short article that duplicates a guide, a technology page, or a service offer. A compact example is preferred over generic explanatory padding.

### 4. Robots, document structure, and tracking

#### Robots

`src/app/robots.ts` no longer emits the unnecessary scheme-bearing `Host` line in the worktree. The canonical absolute sitemap reference and the existing rules remain. Status: `IMPLEMENT NOW` in the repository, pending deployment confirmation.

This is hygiene only. Robots directives are not a replacement for redirects, canonicals, or sitemap consistency.

#### Main landmark

The special automation landing renderer now wraps primary content in a semantic `<main>` in the worktree. Status: `IMPLEMENT NOW` in the repository, pending deployment confirmation.

Acceptance requires exactly one `<main>` and one `<h1>` on `/cs/sluzby/automatizace-a-integrace/`, with the form, anchor target, keyboard flow, and CTA analytics intact.

#### Tracking

Canonical CTA/form event instrumentation is present in the shared worktree. Direct GTM and direct gtag loaders still coexist intentionally. Without access to the GTM container, removing either path would be an unsafe guess: GTM may or may not already deliver GA4 page views.

The new custom event layer does not write analytics context to browser storage. It keeps the landing path, referrer host and sanitized campaign values in memory only after Cookiebot reports `statistics: true`; before that consent state, custom events are discarded. Existing GTM/gtag tag and consent behavior still requires the external container QA below.

Status: `TEST`; instrumentation is implemented in the worktree, while GTM configuration QA remains externally blocked.

Required external QA:

1. inspect the active GTM container and its consent settings;
2. observe initial load and App Router navigation in Tag Assistant or an equivalent network/debug view;
3. identify whether GTM, direct gtag, or both send `page_view`;
4. select one owner and disable the duplicate path in configuration/code only after that evidence;
5. confirm one page view per navigation, preserved Cookiebot behavior, documented CTA/form events, and no PII.

Possible duplicate page views are therefore a documented blocker, not a completed fix.

## English-page policy

English contributed 735 page-table impressions and no clicks in the analyzed window, but the query table does not identify the responsible landing pages or target geography. High impressions alone are insufficient for a rewrite.

| Page | Page evidence | Decision |
| --- | --- | --- |
| `/en/comparisons/nextjs-vs-spa-for-business-apps/` | 130 impressions; position 10.16 | `MONITOR`; consider one bounded snippet test only after query-page confirmation. |
| `/en/guides/how-to-automate-request-processing/` | 108 impressions; position 28.85 | `NEEDS MORE DATA`; verify query, country, and page fit. |
| `/en/use-cases/partner-portal-for-b2b-company/` | 103 impressions; position 19.17 | `NEEDS MORE DATA`; distinguish partner-portal, client-portal, and service intent. |
| `/en/guides/how-to-manage-jobs-without-excel/` | 84 impressions; position 15.90 | `NEEDS MORE DATA`; distinguish informational and software-buying intent. |
| `/en/services/existing-app-takeover/` | 21 impressions; position 6.77 | `MONITOR`; do not copy the CS expansion mechanically. |
| `/en/templates/api-integration-checklist/` | 23 impressions; position 6.13 | `NEEDS MORE DATA`; do not mirror the CS working-asset expansion without independent demand. |

The query `internal approval system india` is a good semantic match for `/en/use-cases/internal-approval-system/`, but it may be outside the target market. It is a country-segmentation task, not a reason to optimize the page for India without a business decision.

## Measurement plan

### Baseline

Record the deployment timestamp and preserve the current normalized files. Use the current 28-day period only as a directional pre-change baseline because it contains historical no-slash and merged-loser variants.

For every changed canonical URL, capture:

- clicks, impressions, CTR, and average position by page;
- query-by-page rows for intended themes;
- country and device where material;
- indexation and last-crawl status;
- organic CTA and form events after tracking QA.

Do not add query impressions to page impressions or infer query ownership from similar totals.

### Evaluation windows

- URL and render acceptance: immediately after deployment.
- Analytics QA: before release and daily for the first seven days.
- Content pages: compare 28 stable post-deploy days with the preceding comparable 28 stable days.
- historically crawled-not-indexed assets: request recrawl and evaluate after four to six stable weeks.

Seasonality, brand demand, country mix, and major deployment changes must be annotated. If another wave lands inside the comparison window, restart or segment the measurement window.

### Decision rules

- Keep a change when intended query ownership becomes clearer and impressions/clicks or qualified organic conversions improve without cannibalizing the other owner pages.
- Iterate only the weak section or snippet when relevance improves but CTR or conversion remains weak.
- Roll back the bounded copy/link change when the intended owner loses relevant visibility and another cluster page absorbs the same queries.
- Do not noindex, merge, or create new EN pages from low-volume or anonymized aggregates alone.

## Validation and definition of done

For content and assets:

- registry/content validation, redirect validation, lint, static build, and generated-output SEO validation pass;
- canonical, hreflang, sitemap, H1, lang, internal-link, and orphan checks remain green;
- no merged loser returns to generated output or sitemap;
- each changed page has one rendered H1 and preserves existing forms and analytics attributes;
- contextual links use canonical slash URLs and maintain distinct intent ownership.

For robots and main:

- generated `/robots.txt` contains the canonical sitemap URL and no scheme-bearing Host line;
- `/cs/sluzby/automatizace-a-integrace/` renders exactly one main and one H1;
- interaction and form smoke tests pass.

For measurement:

- the GTM configuration is inspected by someone with access;
- one and only one GA4 page view is observed per initial load and client-side navigation;
- consent behavior is preserved;
- CTA and form events are observable without PII.

## Rollout and rollback

Use focused commits or review units even if the deployment groups them:

1. robots/main validation and analytics event instrumentation;
2. four-page Czech intent cluster;
3. takeover service;
4. four working assets;
5. GTM configuration change after external inspection.

Rollback copy, links, template fields, or tracking changes at the same unit boundary. Do not roll back P0 canonical URLs, redirect winners, sitemap ownership, or hreflang merely because a P2 content experiment underperforms.

## Explicit non-goals

This strategy does not authorize:

- broad title or meta-description rewrites;
- a generic CTR program;
- new EN location pages or synthetic translations;
- a Lighthouse/CWV or font project;
- bulk FAQ or schema refactoring;
- new vertical pages based on isolated queries;
- production edge, DNS, GTM, or deployment changes without the required access.
