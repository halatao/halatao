# SEO Indexation Decisions

Date: 2026-04-29

Scope: audit of content definitions in `src/content/pages/` using the legacy TypeScript registry (`SITEFLOW_EXPORT_LEGACY=1`). This report is intentionally a decision log, not a mass-noindex plan. GSC "Discovered - currently not indexed" is treated as a crawl/discovery signal first, not proof that Google rejected the pages.

No `indexable` flags were changed in this audit. No obvious technical duplicates were found. The main risks are thin overlap, similar query targeting, and unclear page hierarchy inside a few topical clusters.

## Summary

| Cluster | Overall risk | Recommendation |
| --- | --- | --- |
| Requests, offers, jobs, Excel | High | Keep core service and guide pages, but review two near-duplicate problem pages as merge candidates. Expand pages with clearer intent boundaries. |
| Dashboard and reporting | Medium | Keep, but differentiate management dashboard vs reporting dashboard with stronger internal links and examples. |
| Workflow and automation | Medium | Keep, but clarify service vs guide vs use-case intent. Avoid repeating generic automation framing. |
| Location pages | Low / medium | Keep indexable. Recent city-specific copy improves quality; expand further only if local signals matter. |

## Requests / Poptávky / Zakázky

| Page | URL | Primary query | Risk | Recommendation | Reason |
| --- | --- | --- | --- | --- | --- |
| `service-sales-and-job-tracking-system` | `/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek` | `evidence zakázek v excelu` | Medium | Keep, expand | Good commercial intent. Needs to stay clearly focused on evidence zakázek/poptávek replacing Excel and email, not broad request automation. |
| `service-request-offer-delivery-system` | `/cs/sluzby/system-pro-rizeni-poptavek-nabidek-a-realizace` | `automatizace zpracování poptávek` | Medium | Keep, expand | Commercial service page overlaps with the request-processing guide and use case. Keep if it remains the transactional service page for implementation. |
| `use-case-request-offer-delivery-system` | `/cs/priklady/system-pro-poptavky-nabidky-a-realizaci` | `automatizace zpracování poptávek` | High | Expand | Same primary query as the service and guide. Keep as a concrete example, but it needs more scenario-specific content and internal links back to the service. |
| `use-case-request-offer-delivery-workflow` | `/cs/priklady/workflow-poptavka-nabidka-realizace` | `workflow poptávka nabídka realizace` | Medium | Keep, expand | Similar to the system use case, but can target workflow/state-machine intent. Needs clearer differentiation from the broader system page. |
| `guide-how-to-automate-request-processing` | `/cs/pruvodce/jak-automatizovat-zpracovani-poptavek` | `automatizace zpracování poptávek` | Medium | Keep, expand | Same query family as service/use case. Should remain informational and answer planning/decision questions, not sell the service directly. |
| `guide-how-to-manage-jobs-without-excel` | `/cs/pruvodce/jak-ridit-zakazky-bez-excelu` | `evidence zakázek v excelu` | Medium | Keep, expand | Overlaps with `service-sales-and-job-tracking-system`; acceptable if guide stays advisory and service stays implementation-focused. |
| `problem-sales-offers-delivery-chaos` | `/cs/problemy/poptavky-nabidky-a-realizace-v-excelu-a-emailu` | `evidence poptávek a zakázek v excelu` | High | Merge candidate | Very close to `problem-requests-offers-delivery-in-spreadsheets`. Both describe the same buyer pain using Excel/e-mail wording. |
| `problem-requests-offers-delivery-in-spreadsheets` | `/cs/problemy/poptavky-nabidky-a-realizace-v-tabulkach-a-emailu` | `poptávky nabídky realizace v excelu` | High | Merge candidate | Likely cannibalizes the previous problem page. Decide one canonical problem angle and redirect/merge later if performance confirms duplication. |
| `comparison-internal-tool-vs-spreadsheets` | `/cs/srovnani/interni-system-vs-excel-a-email` | `interni system vs excel a email` | Low | Keep | Distinct comparison intent. Useful supporting page for Excel replacement decisions. |
| `problem-replace-spreadsheets-in-process` | `/cs/problemy/potrebujeme-nahradit-excel-ve-firemnim-procesu` | `nahradit excel firemním systémem` | Medium | Keep, expand | Broader Excel/process pain page. Needs internal links that route request/job-specific users to the narrower pages. |

English counterparts follow the same pattern:

| Page | URL | Primary query | Risk | Recommendation | Reason |
| --- | --- | --- | --- | --- | --- |
| `service-sales-and-job-tracking-system` | `/en/services/sales-offers-and-job-tracking-system` | `request and job tracking system` | Medium | Keep, expand | Commercial intent is distinct enough if focused on tracking and operations. |
| `service-request-offer-delivery-system` | `/en/services/request-offer-delivery-system` | `request offer delivery system` | Medium | Keep, expand | Implementation page; should link to examples and guides. |
| `use-case-request-offer-delivery-system` | `/en/use-cases/system-for-requests-offers-and-delivery` | `system for requests offers and delivery` | Medium | Keep, expand | Keep as example page, but avoid duplicating service copy. |
| `use-case-request-offer-delivery-workflow` | `/en/use-cases/request-offer-delivery-workflow` | `request offer delivery workflow` | Medium | Keep, expand | Needs workflow-specific examples to avoid merging into the system use case. |
| `problem-sales-offers-delivery-chaos` | `/en/problems/requests-offers-and-delivery-in-spreadsheets-and-email` | `job tracking in spreadsheets and email` | High | Merge candidate | Very close to the next problem page. |
| `problem-requests-offers-delivery-in-spreadsheets` | `/en/problems/requests-offers-and-delivery-in-spreadsheets` | `requests offers delivery in spreadsheets` | High | Merge candidate | Likely duplicate intent with the spreadsheet/email problem page. |

Decision: do not noindex now. The strongest later action is to merge the two problem-page pairs if GSC shows both remain discovered but neither earns impressions.

## Dashboard / Reporting

| Page | URL | Primary query | Risk | Recommendation | Reason |
| --- | --- | --- | --- | --- | --- |
| `use-case-management-dashboard` | `/cs/priklady/dashboard-pro-management` | `dashboard pro management` | Medium | Keep, expand | Strong target query, but overlaps with the new guide. Should emphasize use-case/example screenshots, data sources, roles, and decision workflows. |
| `guide-management-dashboard-from-multiple-systems` | `/cs/pruvodce/dashboard-pro-management-z-vice-systemu` | `dashboard pro management` | Medium | Keep, expand | Same primary query as use case. Keep as planning guide; consider adjusting query later to `dashboard z více systémů` if cannibalization appears. |
| `use-case-reporting-dashboard` | `/cs/priklady/reporting-dashboard` | `reporting dashboard na míru` | Medium | Keep, expand | Distinct reporting-dashboard angle but close enough to management-dashboard pages. Needs clearer reporting vs leadership-dashboard boundary. |
| `location-ostrava` | `/cs/lokality/ostrava` | `Ostrava vývoj webových aplikací` | Low | Keep | Mentions reporting/dashboard locally but primary intent is local service. Not a dashboard duplicate. |
| `use-case-management-dashboard` | `/en/use-cases/management-dashboard` | `management dashboard development` | Medium | Keep, expand | Same English issue: differentiate from reporting dashboard. |
| `guide-management-dashboard-from-multiple-systems` | `/en/guides/management-dashboard-from-multiple-systems` | `management dashboard` | Medium | Keep, expand | Planning guide should be less example-like and more decision/process oriented. |
| `use-case-reporting-dashboard` | `/en/use-cases/reporting-dashboard-development` | `reporting dashboard development` | Medium | Keep, expand | Keep if reporting/dashboard terminology is intentionally separate. |

Decision: keep all. No noindex candidate. Improve by giving each page unique examples: management dashboard for leadership decisions, reporting dashboard for recurring operational reporting, guide for scoping data sources and metric ownership.

## Workflow / Automation

| Page | URL | Primary query | Risk | Recommendation | Reason |
| --- | --- | --- | --- | --- | --- |
| `service-automations-and-integrations` | `/cs/sluzby/automatizace-a-integrace` | `automatizace firemních procesů` | Medium | Keep, expand | Core commercial page. Custom landing makes it structurally different, but it should connect strongly to guides/use cases. |
| `service-ai-automation-and-integrations` | `/cs/sluzby/ai-automatizace-a-integrace` | `ai automatizace procesů` | Medium | Keep, expand | Adjacent to automation service. Needs explicit AI-specific qualifiers and examples to avoid broad automation overlap. |
| `guide-when-process-automation-pays-off` | `/cs/pruvodce/kdy-se-vyplati-automatizace-procesu` | `automatizace procesů ve firmě` | Medium | Keep, expand | Informational decision intent. Similar to service, but useful if it stays cost/fit-focused. |
| `guide-how-to-run-automation-discovery` | `/cs/pruvodce/jak-pripravit-discovery-pro-automatizaci-a-integrace` | `discovery pro automatizaci a integrace` | Low | Keep | Distinct discovery/checklist intent. |
| `use-case-workflow-app-for-teams` | `/cs/priklady/workflow-aplikace-pro-tym` | `automatizace workflow` | Medium | Keep, expand | May overlap with workflow automation tools; should be a concrete app example. |
| `use-case-workflow-automation-tools` | `/cs/priklady/workflow-automatizace` | `workflow automatizace` | Medium | Keep, expand | Similar to workflow app page. Needs a tool/process angle or may become a merge candidate later. |
| `tool-automation-discovery-checklist` | `/cs/sablony/discovery-checklist-pro-automatizace` | `discovery checklist pro automatizace` | Low | Keep | Tool/checklist intent is distinct. |
| `technology-api-integrations` | `/cs/technologie/api-integrace` | `api integrace` | Low | Keep | Technology intent. Supports automation pages without directly cannibalizing them. |
| `service-automations-and-integrations` | `/en/services/automations-and-integrations` | `automations and integrations` | Medium | Keep, expand | Same as Czech. |
| `guide-when-process-automation-pays-off` | `/en/guides/when-process-automation-pays-off` | `business process automation` | Medium | Keep, expand | Broad query; should remain advisory. |
| `use-case-workflow-app-for-teams` | `/en/use-cases/workflow-app-for-teams` | `workflow app for teams` | Medium | Keep, expand | Concrete app use case. |
| `use-case-workflow-automation-tools` | `/en/use-cases/workflow-automation-tools` | `workflow automation tools` | Medium | Keep, expand | Could overlap with workflow app; differentiate tool stack/process automation angle. |

Decision: keep all for now. Watch `use-case-workflow-app-for-teams` vs `use-case-workflow-automation-tools`; this is the most likely workflow cluster merge candidate if both remain weak.

## Location Pages

| Page | URL | Primary query | Risk | Recommendation | Reason |
| --- | --- | --- | --- | --- | --- |
| `location-praha` | `/cs/lokality/praha` | `Praha vývoj webových aplikací` | Low | Keep | City-specific and route is correct under `/cs/lokality/`. Recent content is less templated and includes Prague-specific B2B/product/team scenarios. |
| `location-brno` | `/cs/lokality/brno` | `Brno vývoj webových aplikací` | Low | Keep | City-specific service intent. Not a duplicate of service pages if local modifiers are useful. |
| `location-ostrava` | `/cs/lokality/ostrava` | `Ostrava vývoj webových aplikací` | Medium | Keep, expand | More differentiated around automation/internal systems than the other location pages. Primary query may later be adjusted toward automation/internal systems Ostrava if that is the intended local target. |

Decision: keep indexable. No noindex candidate. These pages should not be renamed to `/lokace`. If GSC continues to show discovered-only status, prioritize more unique local proof, local examples, and internal links from relevant service pages before considering noindex.

## Noindex / Merge Watchlist

| Priority | Page(s) | Current action | Later decision trigger |
| --- | --- | --- | --- |
| 1 | `problem-sales-offers-delivery-chaos` and `problem-requests-offers-delivery-in-spreadsheets` | Merge candidate | If both have low/no impressions and similar crawled content signals, consolidate into one problem page and redirect the weaker URL. |
| 2 | `use-case-request-offer-delivery-system`, `guide-how-to-automate-request-processing`, `service-request-offer-delivery-system` | Expand and differentiate | If they compete for the same query, keep service as commercial, guide as planning, use case as example. |
| 3 | `use-case-management-dashboard`, `guide-management-dashboard-from-multiple-systems`, `use-case-reporting-dashboard` | Expand and differentiate | If impressions split across the same query, adjust primary query/copy boundaries before merging. |
| 4 | `use-case-workflow-app-for-teams` and `use-case-workflow-automation-tools` | Expand and differentiate | Merge only if one remains thin and both target the same workflow automation query. |
| 5 | `location-*` pages | Keep | Noindex only if future content remains thin, there is no local demand, and they receive crawl signals showing persistent low quality rather than discovered-only status. |

## Implementation Notes

- No routes were changed.
- No slugs were changed.
- No `indexable` flags were changed.
- No broken technical duplicates were identified.
- The report assumes the TypeScript legacy registry is the source for route derivation; the default runtime can load Siteflow content when present.
