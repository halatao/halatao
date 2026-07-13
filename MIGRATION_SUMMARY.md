# Migration Summary

Updated on 2026-07-12 after the SEO P0/P1 URL and content consolidation work.

## Redirect architecture

- The only redirect source of truth is `config/seo-redirects.ts`.
- `npm run validate:redirects` expands and validates the complete exact matrix.
- `npx tsx scripts/validate-redirects.ts --print` prints all generated rules.
- The current matrix contains 641 exact rules: 334 canonicalization, 289
  legacy, and 18 content-merge rules.
- Root is specified as `/` and `/index.html` directly to `/cs/`.
- Known `/cz/*` redirects are generated only from the active CS route
  inventory; there is no unsafe wildcard to unknown targets.
- All HTML targets use the canonical trailing slash.

Production runs as a Cloudflare Worker with Static Assets. Cloudflare builds the
Next.js static export into `out/`; the Worker evaluates the exact redirect
manifest first and otherwise serves the request through `env.ASSETS`. GitHub
Pages is not a production origin. Apex and `www` are attached as Worker Custom
Domains; duplicate Worker Routes are not declared in the repository. See
`docs/CLOUDFLARE_EDGE_DEPLOYMENT.md`.

## Page totals

- 164 content pages, plus root fallback, legal pages, sitemap, robots,
  `llms.txt`, assets, and 404 output.
- Locale totals: 84 Czech pages and 80 English pages.
- By type: 2 home, 2 process, 4 inquiry, 14 service, 17 hub, 22 problem,
  10 comparison, 26 use case, 6 case study, 36 guide, 8 technology, 14 tool,
  and 3 location pages.

## Content consolidation

Six duplicate CS/EN routes were merged into their service, use-case, and
problem intent owners. Their old routes are absent from the registry and static
output and are present in the redirect manifest. The exact pairs are recorded
in `docs/SEO_P0_P1_IMPLEMENTATION.md`.

## SEO validation

- `npm run validate:content` validates source content, translations,
  breadcrumbs, internal targets, and graph reachability.
- `npm run validate:redirects` validates the redirect manifest.
- `npm run validate:seo` validates generated HTML, canonical, hreflang, H1,
  lang, sitemap, removed routes, and rendered internal links after build.
- CI runs content → redirects → Worker artifact validation → lint → static
  build → output/assets validation → Worker tests and dry-run packaging.

## Current implementation reference

See `docs/SEO_P0_P1_IMPLEMENTATION.md` for URL policy, exact merge matrix,
intent ownership, test results, blockers, and rollback notes.
