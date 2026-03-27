# SEO Internal Linking Audit

Tento audit je zaměřený na nejdůležitější CZ stránky po content wave z 18. března 2026.

Primární cíl:

- posílit vztah mezi money pages a support pages
- pomoct Google pochopit, které URL jsou hlavní
- zvýšit šanci na indexaci a lepší query-to-page fit

## Stav dnes

Silné stránky:

- homepage linkuje na hlavní služby
- hub pages linkují na child pages
- non-hub templates renderují `related pages`
- každá stránka má CTA do inquiry flow

Slabiny:

- top navigation je úzká a prioritizuje jen malou část page map
- internal linking je čistý, ale ne dost agresivní pro SEO growth
- support pages někdy vedou dál jen přes related block na konci stránky
- některé high-value support pages potřebují silnější odkazy přímo z money pages

## Priority pages

Money pages:

- `/cs`
- `/cs/sluzby/vyvoj-webovych-aplikaci-na-miru`
- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace`
- `/cs/sluzby/interni-systemy-na-miru`
- `/cs/sluzby/automatizace-a-integrace`
- `/cs/popsat-projekt`

Support pages:

- `/cs/srovnani/vyvoj-na-miru-vs-saas`
- `/cs/pruvodce/jak-zadat-vyvoj-webove-aplikace`
- `/cs/pruvodce/jak-prevzit-existujici-aplikaci-bez-rizika`
- `/cs/problemy/potrebujeme-prevzit-rozpracovanou-aplikaci`
- `/cs/problemy/potrebujeme-zachranit-rozdelany-projekt`
- `/cs/pruvodce/jak-nacenit-prevzeti-aplikace`

## Odkud -> kam

### Homepage `/cs`

Už dobře linkuje na hlavní služby.

Doplnit nebo zviditelnit:

- `/cs` -> `/cs/srovnani/vyvoj-na-miru-vs-saas`
- `/cs` -> `/cs/pruvodce/jak-zadat-vyvoj-webove-aplikace`
- `/cs` -> `/cs/pruvodce/jak-prevzit-existujici-aplikaci-bez-rizika`
- `/cs` -> `/cs/problemy/potrebujeme-prevzit-rozpracovanou-aplikaci`

Smysl:

- homepage má už indexaci i autoritu v rámci webu
- pomůže poslat signál do hlavních support clusterů

### Custom development service

Stránka:

- `/cs/sluzby/vyvoj-webovych-aplikaci-na-miru`

Měla by silně linkovat na:

- `/cs/srovnani/vyvoj-na-miru-vs-saas`
- `/cs/pruvodce/jak-zadat-vyvoj-webove-aplikace`
- `/cs/priklady/b2b-klientsky-portal`
- `/cs/popsat-projekt`

Anchor intent:

- když firma váhá mezi custom a SaaS
- když firma neví, jak správně zadat projekt
- když chce vidět konkrétní use case

### Existing app takeover service

Stránka:

- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace`

Měla by silně linkovat na:

- `/cs/pruvodce/jak-prevzit-existujici-aplikaci-bez-rizika`
- `/cs/problemy/potrebujeme-prevzit-rozpracovanou-aplikaci`
- `/cs/problemy/potrebujeme-zachranit-rozdelany-projekt`
- `/cs/pruvodce/jak-nacenit-prevzeti-aplikace`
- `/cs/popsat-projekt`

Smysl:

- takeover cluster je jeden z nejsilnějších commercial clusterů webu
- support pages musí takeover service page posilovat, ne s ní soutěžit

### Internal tools service

Stránka:

- `/cs/sluzby/interni-systemy-na-miru`

Měla by silně linkovat na:

- `/cs/srovnani/vyvoj-na-miru-vs-saas`
- `/cs/pruvodce/jak-zadat-vyvoj-webove-aplikace`
- `/cs/priklady/interni-admin-system`
- `/cs/popsat-projekt`

Smysl:

- internal tools cluster má vysoký business fit
- guide a comparison stránky můžou přivádět decision-stage traffic

### Automations service

Stránka:

- `/cs/sluzby/automatizace-a-integrace`

Měla by linkovat hlavně na:

- `/cs/problemy/potrebujeme-napojit-nekolik-systemu`
- `/cs/priklady/workflow-automatizace`
- `/cs/popsat-projekt`

Poznámka:

- automation service je specifická landing page
- tady bych linking držel užší a komerční, bez rozlévání do příliš širokého clusteru

### Inquiry page

Stránka:

- `/cs/popsat-projekt`

Měla by víc fungovat jako rozcestník zpět do high-fit pages:

- `/cs/sluzby/vyvoj-webovych-aplikaci-na-miru`
- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace`
- `/cs/sluzby/interni-systemy-na-miru`
- `/cs/sluzby/automatizace-a-integrace`

Volitelně:

- `/cs/jak-spoluprace-probiha`

Smysl:

- inquiry page není jen konec funnelu
- může potvrdit fit a pomoci uživateli vrátit se na správnou komerční stránku

## Support pages: zpětné odkazy do money pages

### `/cs/srovnani/vyvoj-na-miru-vs-saas`

Musí vést zpět hlavně na:

- `/cs/sluzby/vyvoj-webovych-aplikaci-na-miru`
- `/cs/sluzby/interni-systemy-na-miru`
- `/cs/popsat-projekt`

### `/cs/pruvodce/jak-zadat-vyvoj-webove-aplikace`

Musí vést zpět hlavně na:

- `/cs/sluzby/vyvoj-webovych-aplikaci-na-miru`
- `/cs/popsat-projekt`

### `/cs/pruvodce/jak-prevzit-existujici-aplikaci-bez-rizika`

Musí vést zpět hlavně na:

- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace`
- `/cs/popsat-projekt`

### `/cs/pruvodce/jak-nacenit-prevzeti-aplikace`

Musí vést zpět hlavně na:

- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace`
- `/cs/popsat-projekt`

### `/cs/problemy/potrebujeme-prevzit-rozpracovanou-aplikaci`

Musí vést zpět hlavně na:

- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace`
- `/cs/popsat-projekt`

### `/cs/problemy/potrebujeme-zachranit-rozdelany-projekt`

Musí vést zpět hlavně na:

- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace`
- `/cs/spoluprace-na-kontrakt`
- `/cs/popsat-projekt`

## Priority implementation order

1. Add explicit text links from the 4 core service pages to their support pages.
2. Strengthen return links from support pages back to the matching service page.
3. Add 1 small support-links block on `/cs/popsat-projekt`.
4. Only after that consider wider linking across hubs.

## Guardrails

- neposílat všechny pages na všechny pages
- držet clusterovou logiku
- support page má mít 1 hlavní service destination
- inquiry page má být secondary destination, ne jediný odkaz všude
- u EN stejný model, ale až po stabilizaci CZ
