# Content Optimization Layer

Tato složka je připravená pro ruční iterace nad exporty z Google Search Console.

Není zde žádný backend ani GSC API integrace. Workflow je záměrně jednoduchý:

1. Exportuj z GSC query/page data po locale.
2. Ručně vyber řádky, které stojí za rozhodnutí.
3. Nad těmito řádky použij:
   - `resolveQueryCluster`
   - `mapQueryToPage`
   - `scoreManualQueryRow`
4. Rozhodni, jestli:
   - přepsat existující stránku
   - rozšířit existující stránku
   - vytvořit novou stránku
   - sloučit / noindex review
5. Zapiš rozhodnutí do audit notes.

## Co je v souborech

- `types.ts`
  společné typy pro query rows, cluster model, scoring, audit notes a candidate backlog
- `scoring.ts`
  scoring helpery a normalizace query textu
- `rules.ts`
  90denní iterační pravidla, locale priority a query-to-page mapping helper
- `opportunities.ts`
  cluster definitions, ručně připravený 90denní backlog a seed audit notes

## Praktický princip

- Nejdřív opravuj a rozšiřuj money pages.
- Novou stránku zakládej až tehdy, kdy query cluster už existuje a stávající page map je slabá.
- EN drž úzké a selektivní.
- CZ může jít šířeji do problem/use-case/guide coverage.
- Broad generic dev traffic není cíl.

## Audit notes

Audit notes jsou vedené jako sidecar optimization data, ne přímo jako povinná pole ve všech page objektech.

To je záměr:

- content registry zůstává čistý
- optimization vrstva se dá doplňovat postupně
- nevzniká tlak přepisovat všechny existující stránky najednou

Jako start použij `INITIAL_AUDIT_NOTES` z `opportunities.ts`.
