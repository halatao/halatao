# Siteflow Migration Summary

Updated on 2026-04-27 for the Siteflow JSON content migration.

## Migrated content
- Total migrated pages: 159 JSON files under `content/pages/{locale}/`.
- Locale totals: 81 Czech pages, 78 English pages.
- By type: 2 home, 2 process, 4 inquiry, 16 service, 16 hub, 24 problem, 10 comparison, 28 use case, 6 case study, 26 guide, 8 technology, 14 tool, 3 location.
- Indexable pages: 157.

## Routing
- Existing public routes are preserved through the current App Router pages.
- `src/content/registry.ts` now loads Siteflow JSON first via `src/cms/content-loader.ts`.
- Legacy TypeScript content remains in `src/content/pages/**` and is used as fallback when Siteflow JSON is unavailable.
- Static params, page lookup, related pages, alternates, metadata, sitemap, and schema helpers continue to use the registry API.

## Schema extension
- `cms.connector.json` enables localization for `cs` and `en`.
- `legacy-content-page.v1` in page JSON extends the generated Siteflow model for the existing structured fields: page type, segments, hero, intro, sections, FAQ, related pages, fit, CTA, SEO schema flags, and safe block data.
- The connector manifest stays within the keys accepted by the current Siteflow CLI.
- JSON does not store arbitrary `className` or Tailwind values. Layout and styling remain in React templates/components.

## Legacy mapping
- `index.html` -> `/`
- `cz/index.html` -> `/cs`
- `en/index.html` -> `/en`
- `automatizace/index.html` -> `/cs/sluzby/automatizace-a-integrace`
- `automatizace/dekuji.html` -> `/cs/popsat-projekt/dekuji`
- `robots.txt` -> `/robots.txt`
- `sitemap.xml` -> `/sitemap.xml`

## Validation
- `npx tsx scripts/validate-content.ts`
- `npx tsc --noEmit`
- `npx --yes github:halatao/siteflow validate`
- `npx --yes github:halatao/siteflow doctor`
- `npm run build`

## Next cleanup commit
- Remove the fallback TypeScript content pages after the Siteflow JSON model has been reviewed in production.
- Keep the normalized content types and templates unless the Siteflow block renderer is expanded to cover every current template.
