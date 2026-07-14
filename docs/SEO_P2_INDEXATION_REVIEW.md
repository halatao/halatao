# SEO P2 Indexation Review

> Worktree update (2026-07-14): the four reviewed CS template/checklist pages now contain directly usable checklist/worksheet assets and compact examples. They remain marked `EXPAND` in the historical decision matrix because this document preserves the decision made from the supplied export; production deployment and a fresh recrawl have not happened. The takeover-audit guide and API technology page remain expansion backlog items.

Date: 2026-07-14

Status: review of historical Google Search Console Coverage exports against the current repository, fresh static build and a bounded production GET check of the seven reviewed canonicals.

## Decision summary

The exported Coverage rows do not justify removing or consolidating any of the seven reviewed Czech pages. Every reviewed row uses an old no-trailing-slash URL, while the current preferred URL is the corresponding trailing-slash canonical.

- Keep the templates hub indexable.
- Keep the six leaf pages indexable and expand their distinct tool, guide, or technology intent.
- Apply `MONITOR AFTER RECRAWL` to all seven canonical URLs.
- This review makes no factual noindex or merge decision.

The detailed machine-readable decision table is in `analysis/p2/indexation-review.csv`.

## Evidence boundary: historical crawl versus current state

### Historical exported crawl

The four input ZIP archives were read without modification:

| Export | Coverage category | Graph period | Table rows | Last-crawled range |
| --- | --- | --- | ---: | --- |
| `halatao.cz-Coverage-Valid-2026-07-14.zip` | Valid | 2026-04-17 to 2026-06-30 | 143 | 2026-03-18 to 2026-06-29 |
| `halatao.cz-Coverage-Drilldown-2026-07-14.zip` | Procházeno – momentálně neindexováno | 2026-04-17 to 2026-06-30 | 33 | 2026-03-20 to 2026-07-01 |
| `halatao.cz-Coverage-Drilldown-2026-07-14 (1).zip` | Nenalezeno (404) | 2026-04-17 to 2026-06-30 | 7 | 2026-05-31 to 2026-06-19 |
| `halatao.cz-Coverage-Drilldown-2026-07-14 (2).zip` | Stránka s přesměrováním | 2026-04-17 to 2026-06-30 | 6 | 2026-06-05 to 2026-06-25 |

Each archive contains:

- `Graf.csv`: `Datum`, `Dotčené stránky`;
- `Tabulka.csv`: `URL`, `Naposledy procházeno`;
- `Metadata.csv`: `Služba`, `Hodnota` and, for drilldowns, the selected problem.

The graph ends on 2026-06-30. The seven reviewed rows were last crawled between 2026-05-09 and 2026-05-26, making those observations 49 to 66 days old on the review date. They predate the repository's 2026-07-12 URL, navigation, canonical, hreflang, and validation changes.

### Current registry and generated build

The current state is materially newer than the exported crawl:

- 164 content routes exist in the registry;
- 162 registry routes are indexable;
- the only non-indexable registry routes are the two thank-you pages;
- the fresh sitemap contains 164 URLs: 162 indexable content routes and two legal routes;
- all seven reviewed canonical URLs are active, indexable, present in the sitemap, self-canonical, and rendered with `lang="cs"`;
- on 2026-07-14, all seven production canonical URLs returned HTTP 200 with their exact self-canonical and `index, follow`; this check describes the pre-P2 deployment, not the new worktree copy;
- `npm run validate:seo` passes for 164 content routes, two legal routes, 164 sitemap URLs, and 641 expanded redirect sources.

The current build state must not be back-projected into the old GSC snapshot. Conversely, the old no-slash Coverage state must not be reported as the current status of the canonical slash URL.

## Coverage normalization against the current manifest

Normalization in this review is conceptual. It applies the checked-in redirect manifest to exported paths so that historical aliases can be compared with today's registry and sitemap. It is not evidence that a production edge returned HTTP 301 or 308.

| Coverage set | Raw rows | Main-site rows | Current manifest sources | Unique canonical targets | Active current targets | Unknown main-site targets |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Valid | 143 | 143 | 136 | 131 | 143 | 0 |
| Crawled, currently not indexed | 33 | 31 | 30 | 31 | 31 | 0 |
| Not found (404) | 7 | 7 | 7 | 7 | 7 | 0 |
| Page with redirect | 6 | 5 | 5 | 3 | 5 | 0 |

Two crawled-not-indexed rows and one redirect row belong to `shop.halatao.cz`. That subdomain is outside the main-site registry and must be evaluated in its own hosting and Search Console context.

All seven historical 404 URLs now have explicit manifest targets that exist in the current registry and sitemap. The main-site redirect rows normalize to `/cs/`, `/en/`, or the canonical slash version of the multi-system integration case study.

The conceptual normalization also exposes historical URL fragmentation:

- the 143 raw Valid rows collapse to 131 unique canonical targets;
- 136 of those raw Valid rows are now known redirect sources, predominantly old no-slash variants;
- the crawled-not-indexed set overlaps the normalized Valid set in only three targets;
- the normalized 404 set overlaps Valid in six of seven targets;
- all three normalized redirect targets overlap Valid.

## Review of the seven Czech canonical URLs

All exported URLs below omitted the trailing slash. The current manifest maps each one directly to the slash canonical shown in the first column.

| Canonical URL | Historical status and crawl | Current discovery | Decision | Follow-up |
| --- | --- | --- | --- | --- |
| `/cs/sablony/` | Crawled, currently not indexed; 2026-05-20 | Depth 1; 81 unique same-locale inbound pages | **KEEP** | **MONITOR AFTER RECRAWL** |
| `/cs/sablony/checklist-api-integrace/` | Crawled, currently not indexed; 2026-05-20 | Depth 2; 9 unique inbound pages | **EXPAND** | **MONITOR AFTER RECRAWL** |
| `/cs/sablony/scope-worksheet-pro-interni-system/` | Crawled, currently not indexed; 2026-05-19 | Depth 2; 3 unique inbound pages | **EXPAND** | **MONITOR AFTER RECRAWL** |
| `/cs/sablony/checklist-prevzeti-aplikace/` | Crawled, currently not indexed; 2026-05-09 | Depth 2; 3 unique inbound pages | **EXPAND** | **MONITOR AFTER RECRAWL** |
| `/cs/sablony/discovery-checklist-pro-automatizace/` | Crawled, currently not indexed; 2026-05-21 | Depth 2; 3 unique inbound pages | **EXPAND** | **MONITOR AFTER RECRAWL** |
| `/cs/pruvodce/jak-pripravit-takeover-audit-aplikace/` | Crawled, currently not indexed; 2026-05-26 | Depth 2; 6 unique inbound pages | **EXPAND** | **MONITOR AFTER RECRAWL** |
| `/cs/technologie/api-integrace/` | Crawled, currently not indexed; 2026-05-21 | Depth 2; 3 unique inbound pages | **EXPAND** | **MONITOR AFTER RECRAWL** |

### `/cs/sablony/` — KEEP

This is a real taxonomy hub, not a disposable search landing page. It is linked from the stable footer, links to the template children, and is one step from the Czech homepage. The old signal applies to `/cs/sablony` and does not establish the post-change indexation state of `/cs/sablony/`.

### `/cs/sablony/checklist-api-integrace/` — EXPAND

The checklist has a distinct working-tool intent from both `/cs/technologie/api-integrace/` and the transactional automation service. Expand it into a reusable checklist with explicit fields for data ownership, failure modes, retries, idempotency, monitoring, and a compact completed example. Avoid turning it into another general explanation of API integrations.

### `/cs/sablony/scope-worksheet-pro-interni-system/` — EXPAND

The worksheet intent is specific and commercially useful. Expand it with concrete prompts and a role-state-exception-data worksheet, plus one concise filled example. The page should remain a working scoping asset rather than duplicate the internal-system service or advisory guide.

### `/cs/sablony/checklist-prevzeti-aplikace/` — EXPAND

Keep this as the practical companion to the takeover guides. Add evidence, owner, status, priority, access, environment, release, rollback, and handover-output fields. Narrative guidance should remain on the guides, especially the takeover-audit page.

### `/cs/sablony/discovery-checklist-pro-automatizace/` — EXPAND

This page currently shares substantial vocabulary with the automation discovery guide. Preserve its separate intent by making the page a concrete worksheet: process map, exception path, owner, source data, failure impact, candidate intervention, and acceptance signal. The guide should continue to own the explanation of how to run discovery.

### `/cs/pruvodce/jak-pripravit-takeover-audit-aplikace/` — EXPAND

The guide has a distinct informational process intent and six rendered inbound sources. Expand it with audit phases, expected evidence, outputs, risk prioritization, and a decision framework. Link the takeover checklist as the reusable working artifact rather than repeating the same checklist in prose.

### `/cs/technologie/api-integrace/` — EXPAND

Keep the technology and decision intent distinct from the API checklist and transactional service. Expand the page with integration patterns, synchronous versus asynchronous trade-offs, idempotency, retries, observability, ownership, and business-fit examples. It should explain architectural fit without becoming a duplicate service page.

## Monitoring protocol

For every reviewed URL, the next state is `MONITOR AFTER RECRAWL`:

1. Verify the live no-slash and host/protocol variants with HTTP requests after the production edge configuration is active. The first response must be a direct 301 or 308 to the final slash canonical.
2. Confirm that the canonical URL returns 200, remains self-canonical, and is present in the submitted sitemap.
3. Request or await crawling of the canonical slash URL.
4. Re-evaluate after a crawl newer than the 2026-07-12 URL/navigation changes, preferably with four to six weeks of stable data.
5. Combine the next Coverage export with Search Performance and URL Inspection evidence. Coverage alone does not provide impressions, clicks, the Google-selected canonical, or a content-quality diagnosis.

Until that recrawl exists, these historical rows are not a sound basis for factual noindex or merge actions.

## Limitations

- No input ZIP was modified.
- No live Search Console URL Inspection data was available.
- No production HTTP redirect result was inferred from the checked-in manifest. The seven canonical GET 200 results were measured directly; their old no-slash redirect variants still require the separate edge acceptance suite.
- The review compares historical exported URLs with the current repository and local generated output; it does not claim that Google has already processed the new state.
- The word counts in the CSV are approximate registry-content counts used only as an expansion signal, not as an indexation threshold.
