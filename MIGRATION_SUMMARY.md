# Migration Summary

Updated on 2026-03-27 after content expansion and SEO iteration work.

## Legacy mapping
- `index.html` -> `/`
- `cz/index.html` -> `/cs`
- `en/index.html` -> `/en`
- `automatizace/index.html` -> `/cs/sluzby/automatizace-a-integrace`
- `automatizace/dekuji.html` -> `/cs/popsat-projekt/dekuji`
- `robots.txt` -> `/robots.txt`
- `sitemap.xml` -> `/sitemap.xml`

## Page totals
- Total pages: 117 content pages, plus root chooser, sitemap, robots, llms.txt, and 404.
- Locale totals: 60 Czech pages, 57 English pages.
- By type: 2 home, 2 process, 4 inquiry, 10 service, 16 hub, 14 problem, 8 comparison, 16 use case, 6 case study, 18 guide, 8 technology, 10 tool, 3 location.

## SEO and GEO utilities
- `src/lib/metadata.ts`
- `src/lib/schema.ts`
- `src/lib/content-validation.ts`
- `src/lib/routing.ts`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/llms.txt/route.ts`

## Open TODOs
- Review the generated commercial copy in a browser and tighten any industry-specific wording based on your preferred client mix.
- Replace or augment the default social graphic if you want a branded image set beyond the generated SVG.
- Optional local tidy-up: remove any empty leftover `cz`, `en`, or `automatizace` folders if your filesystem still shows them after deleting the tracked legacy files.
