# SEO post-deployment validace P0/P1

## Executive summary

**Verdikt: NO-GO FOR P2**

Produkční obsah, sitemap, canonical, hreflang, interní graf, location hub a aktuální winner URL odpovídají lokálnímu static exportu. Produkční GitHub Pages/Fastly vrstva ale nepoužívá redirect manifest: všech šest content-merge loserů vrací HTTP 404 a nikoli permanentní redirect. Podle akceptačních pravidel je to kritický blocker P2.

Nálezy jsou seskupeny podle jedné společné příčiny nebo jednoho typu opravy:

| Závažnost | Počet |
| --- | ---: |
| Critical | 1 |
| High | 3 |
| Medium | 2 |
| Low | 3 |

P2 zatím nelze zahájit. Nejprve je nutné zapojit skutečnou HTTP edge/proxy redirect vrstvu, přetestovat merge redirecty a historické zdroje a potvrdit jednoskokové 301/308.

## Test environment

- Čas auditu: 2026-07-12 23:17 CEST (2026-07-12 21:17 UTC)
- Produkční host: `https://www.halatao.cz`
- Lokální commit: `7bb8d01c0464023fe66dc6a15cec3e924ca6d4f1` (`feat: add SEO validation scripts and navigation structure`)
- Produkční Next build marker: `3Z_FRuhAzMwMa_GPCbvuV`
- Lokální Next build marker: `8LXtXTylMSlFulenvf_6I`
- Nástroje: curl 8.19.0, Node.js 22.12.0, npm 10.9.0, OpenSSL 3.2.4, PowerShell DNS resolver, repository validators a vlastní read-only Node crawl.
- Omezení: produkce neposkytuje commit SHA v HTTP hlavičkách. Shoda byla proto ověřena sitemapou a normalizovaným HTML; rozdíl build markeru je očekávaný pro dva samostatné buildy. Nebyl proveden deploy, purge cache, změna DNS ani zápis do produkce.

### DNS, TLS a CDN

- `halatao.cz`: A `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www.halatao.cz`: CNAME `halatao.github.io`, následně stejné A adresy.
- TLS certifikát: CN `www.halatao.cz`, SAN `halatao.cz` a `www.halatao.cz`, issuer Let's Encrypt YR1, platnost 2026-07-08 až 2026-10-06.
- Identifikace vrstvy: `Server: GitHub.com`, `Via: 1.1 varnish`, `X-Served-By`, `X-Cache` a `X-Fastly-Request-ID`.
- Cache: `Cache-Control: max-age=600`; kontrolované HTML a sitemap měly `Last-Modified: Sun, 12 Jul 2026 20:57:11 GMT`.

## HTTP redirect matrix

`—` znamená, že odpověď neměla `Location` header. Hops jsou počítány do uvedené finální odpovědi. HEAD a GET se shodovaly u host/root testů, slash merge loserů, slash GSC zdrojů a systémových souborů; ostatní tabulkové výsledky jsou skutečné GET requesty.

### Host, protokol a root

| Source | Status | Location | Hops | Final status / URL | Result |
| --- | ---: | --- | ---: | --- | --- |
| `http://halatao.cz/?audit=host` | 301 | `https://www.halatao.cz/?audit=host` | 1 | 200, stejná www root URL | FAIL: nekončí na `/cs/` |
| `http://www.halatao.cz/?audit=host` | 301 | `https://www.halatao.cz/?audit=host` | 1 | 200, stejná www root URL | FAIL: nekončí na `/cs/` |
| `https://halatao.cz/?audit=host` | 301 | `https://www.halatao.cz/?audit=host` | 1 | 200, stejná www root URL | FAIL: nekončí na `/cs/` |
| `https://www.halatao.cz/?audit=host` | 200 | — | 0 | 200, stejná root URL | FAIL: root HTTP redirect není implementován |
| `https://www.halatao.cz/index.html?audit=host` | 200 | — | 0 | 200, stejná index URL | FAIL |

Query string se při apex/HTTP přechodu zachoval, ale root jej nepřesměroval na `/cs/`. Root fallback je bezpečný: HTTP 200, `noindex, follow`, canonical na `https://www.halatao.cz/cs/`, běžné HTML odkazy na `/cs/` a `/en/`, bez meta refresh, `navigator.language`, `window.location` nebo automatického klientského redirectu.

### Trailing slash a `/index.html`

Následujících 15 reprezentativních typů bylo otestováno ve variantách bez lomítka, s lomítkem a `/index.html`: `/cs/`, `/en/`, `/cs/spoluprace-na-kontrakt/`, `/en/services/custom-web-application-development/`, `/cs/pruvodce/jak-zadat-vyvoj-webove-aplikace/`, `/en/guides/how-to-scope-a-custom-web-application/`, `/cs/priklady/klientsky-portal/`, `/cs/problemy/potrebujeme-prevzit-rozpracovanou-aplikaci/`, `/cs/srovnani/interni-system-vs-excel-a-email/`, `/cs/sablony/brief-na-webovou-aplikaci/`, `/cs/technologie/nextjs-pro-byznys-aplikace/`, `/cs/pripadovky/prevzeti-existujici-aplikace/`, `/cs/lokality/praha/`, `/cs/sluzby/` a `/privacy-policy/`.

| Source variant | Status | Location | Hops | Final status | Result |
| --- | ---: | --- | ---: | ---: | --- |
| každá no-slash varianta | 301 | přesná slash URL | 1 | 200 | PASS |
| každá canonical slash URL | 200 | — | 0 | 200 | PASS; přesný self-canonical |
| každá `/index.html` varianta | 200 | — | 0 | 200 | FAIL; canonical míří na slash URL, ale chybí HTTP redirect |

### Content-merge redirecty

Každý řádek byl ověřen ve třech variantách: bez lomítka, s lomítkem a `/index.html`. Všechny tři varianty mají stejný výsledek.

| Source | Status | Location | Hops | Final status | Result |
| --- | ---: | --- | ---: | ---: | --- |
| `/cs/priklady/workflow-poptavka-nabidka-realizace{,/,/index.html}` | 404 | — | 0 | 404 | CRITICAL FAIL |
| `/en/use-cases/request-offer-delivery-workflow{,/,/index.html}` | 404 | — | 0 | 404 | CRITICAL FAIL |
| `/cs/problemy/poptavky-nabidky-a-realizace-v-tabulkach-a-emailu{,/,/index.html}` | 404 | — | 0 | 404 | CRITICAL FAIL |
| `/en/problems/requests-offers-and-delivery-in-spreadsheets{,/,/index.html}` | 404 | — | 0 | 404 | CRITICAL FAIL |
| `/cs/sluzby/system-pro-rizeni-poptavek-nabidek-a-realizace{,/,/index.html}` | 404 | — | 0 | 404 | CRITICAL FAIL |
| `/en/services/request-offer-delivery-system{,/,/index.html}` | 404 | — | 0 | 404 | CRITICAL FAIL |

Všech šest winnerů bylo samostatně ověřeno: vracejí 200, jsou indexovatelné a mají přesný self-canonical.

### Sedm historických GSC 404

Každý zdroj byl opět skutečně otestován bez lomítka, s lomítkem a s `/index.html`.

| Source | Status | Location | Hops | Final status | Result |
| --- | ---: | --- | ---: | ---: | --- |
| `/en/templates/internal-tool-scope-worksheet-2{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/cs/pruvodce/jak-nacenit-prevzeti-aplikace-2{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/cs/technologie-1{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/en/services-1{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/en/templates/release-process-stabilization-checklist-2{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/cs/problemy/potrebujeme-klientsky-portal-2{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat-2{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |

Všech sedm deklarovaných targetů vrací 200, jsou indexovatelné a mají self-canonical. Selhává pouze produkční přesměrování.

### Locations a automatizace

| Source | Status | Location | Hops | Final status | Result |
| --- | ---: | --- | ---: | ---: | --- |
| `/cs/lokace/{,index.html}` a no-slash | 404 | — | 0 | 404 | FAIL |
| `/cs/lokace/praha{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/cs/lokace/brno{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/cs/lokace/ostrava{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/automatizace{,/,/index.html}` | 404 | — | 0 | 404 | FAIL |
| `/automatizace/dekuji.html` | 404 | — | 0 | 404 | FAIL |

### Legacy `/cz/*`

| Source | Status | Location | Hops | Final status / URL | Result |
| --- | ---: | --- | ---: | --- | --- |
| `/cz?audit=1` | 301 | `https://www.halatao.cz/cz/?audit=1` | 1 | 200 `/cz/?audit=1` | FAIL: pouze slash normalizace |
| `/cz/` | 200 | — | 0 | 200 `/cz/` | FAIL: fallback, ne HTTP redirect |
| `/cz/index.html` | 200 | — | 0 | 200 | FAIL |
| 12 známých `/cz/*/` cest | 200 | — | 0 | 200 na stejné `/cz/*/` | FAIL: statický JS fallback |

Ověřené známé cesty zahrnovaly huby a konkrétní služby, průvodce, příklady, problémy, srovnání, šablony, technologie a lokality. Fallbacky mají `noindex`, canonical na konkrétní `/cs/*/` a CS odkaz, ale také `window.location.replace`; nejde o serverový 301/308.

## Systémové soubory a chybové URL

| URL | GET/HEAD status | Redirect | Výsledek |
| --- | ---: | --- | --- |
| `/robots.txt` | 200 | ne | PASS |
| `/sitemap.xml` | 200 | ne | PASS |
| `/llms.txt` | 200 | ne | PASS |
| `/icon.svg` | 200 | ne | PASS |
| `/og/halatao-social.svg` | 200 | ne | PASS |
| známý `/_next/static/media/*.woff2` asset | 200 | ne | PASS |
| `/favicon.ico` | 404 | ne | LOW |
| `/_next/`, `/_next/static/`, `/og/` | 404 | ne | očekávané pro adresáře |
| `/_next/static/neexistujici-test.js` | 404 | ne | PASS |
| `/neexistujici-seo-test-url/` | 404 | ne | PASS |
| `/cz/neexistujici-seo-test-url/` | 404 | ne | PASS; žádný nekontrolovaný wildcard |

## Sitemap and indexability

Produkční sitemap byla parsována a každá její URL byla načtena pomocí GET.

```text
Registry routes: 164
Indexable registry routes: 162
Noindex registry routes: 2
Legal indexable routes: 2
Sitemap URLs: 164
Redirecting sitemap URLs: 0
Non-200 sitemap URLs: 0
Canonical mismatch URLs: 0
```

- XML je validně parsovatelné; 164 unikátních URL, žádné duplicity.
- Všechny URL používají `https://www.halatao.cz`; všechny HTML URL mají slash.
- Žádné `/cz/*`, merge losery, legacy URL, root ani noindex utility URL.
- Všechny sitemap URL vracejí přímo 200, přesně jeden self-canonical, právě jedno neprázdné H1, správný `lang` a nemají `noindex`.
- Dvě utility URL `/cs/popsat-projekt/dekuji/` a `/en/discuss-your-project/thank-you/` jsou 200, `noindex,nofollow`, mají self-canonical a nejsou v sitemapě.
- Produkční sitemap je byte-for-byte shodná s lokálním buildem.

## Hreflang

Explicitně byly ověřeny CS/EN homepage, service, guide, use-case, problem a comparison páry a dále location hub a Praha jako nepřeložené stránky. Úplný crawl následně zkontroloval všech 164 sitemap URL.

- Reciproční chyby: 0.
- Neexistující nebo redirectující targets: 0.
- Deep-page `x-default` na obecnou `/cs/`: 0.
- Hreflang na merge losera: 0.
- Párové stránky: CS self, EN counterpart, `x-default` na konkrétní CS counterpart.
- Location stránky: žádné falešné EN alternates ani alternate cluster.

## Location hub

`/cs/lokality/`, `/cs/lokality/praha/`, `/cs/lokality/brno/` a `/cs/lokality/ostrava/` vracejí přímo 200, jsou indexovatelné, mají `lang="cs"`, jedno H1 a self-canonical. Hub odkazuje na všechna tři města. Každé město má HTML i JSON-LD breadcrumb parent `/cs/lokality/`; všechny breadcrumb URL vracejí 200. JSON-LD syntax je validní a location stránky nemají EN hreflang.

Inbound počty v úplném interním grafu: hub 83, Praha 1, Brno 2, Ostrava 1.

## Internal links

Crawl začal na `/cs/` a `/en/`, prošel běžné interní HTML odkazy do hloubky tří kliknutí a byl doplněn úplným crawl všech sitemap stránek.

- Unikátní interní HTML targets: 164.
- Broken interní odkazy: 0.
- Odkazy na redirect URL: 0.
- Odkazy na legacy nebo merge loser URL: 0.
- No-slash HTML odkazy: 0.
- Orphan indexovatelné locale stránky: 0.
- Stránky dále než tři kliknutí: 0.
- `/cs/sluzby/` i `/en/services/` jsou dostupné z příslušné homepage navigace.
- Neexistuje odkaz na neexistující EN location hub.

## Structured data

- JSON-LD syntax errors na 164 sitemap URL: 0.
- Broken BreadcrumbList targets: 0.
- Schema odkazy na merge losery: 0.
- Kontrolované schema URL používají canonical host.
- Service winner schema používá skutečný název/H1 a self URL; guide a location schema odpovídají typu obsahu.
- CS a EN homepage emitují stejné canonical Organization/WebSite identity URL; nebyly nalezeny konfliktní identity s rozdílnými hosty.

Plošný schema refaktor nebyl proveden. Jediný HTML sémantický nález je chybějící element `<main>` na `/cs/sluzby/automatizace-a-integrace/`; obsah je přesto kompletně v initial HTML.

## HTML a render základ

Úplný sitemap crawl potvrdil na každé stránce title, description, viewport, canonical, správný `html lang` a právě jedno neprázdné H1. Hlavní obsah je v initial HTML a navigace používá běžné `<a href>` odkazy. Automatizační landing page je jediná bez explicitního `<main>`.

## Robots.txt

`https://www.halatao.cz/robots.txt` vrací GET i HEAD 200 bez redirectu. Obsah povoluje `/`, neblokuje CS, EN ani renderovací assety a odkazuje na `https://www.halatao.cz/sitemap.xml`. Neobsahuje starý host. Direktiva `Host: https://www.halatao.cz` obsahuje scheme a moderní hlavní vyhledávače ji nepoužívají; jde o nízkou technickou hygienu, nikoli blocker indexace.

## Production versus repository

- Produkční a lokální sitemap: přesná shoda, 164 URL.
- Registry: 164 obsahových rout, z toho 162 indexovatelných a 2 noindex; se dvěma legal routami odpovídá sitemap 164 URL.
- Reprezentativní root, CS/EN homepage, location a service HTML mají po normalizaci náhodného Next build markeru shodný obsah a byte length.
- Canonical, hreflang, winner/loser route inventář, location output a bezpečný root fallback odpovídají repozitáři.
- Produkční build marker je konzistentní napříč kontrolovaným HTML a assety. Nebyly zjištěny smíšené buildy, stará sitemap ani stale HTML.
- Opakované requesty bez query, s cache-busting query a s browser/Googlebot User-Agent měly stejný status, canonical, ETag, Last-Modified a normalizovaný content hash.
- Produkční commit nelze z hlaviček jednoznačně zjistit. Dostupné důkazy podporují závěr, že produkční obsah pochází ze současného repo stavu; chybějící redirecty jsou očekávaný rozdíl mezi provider-neutral manifestem a GitHub Pages runtime.

## Lokální validace

| Příkaz | Výsledek | Důkaz |
| --- | --- | --- |
| `npm ci` | PASS po opakování | první běh vypršel po 123,9 s a zanechal neúplné `node_modules`; po bezpečném odstranění pouze této složky přidáno 346 balíčků, audit 347 |
| `npm run validate:content` | PASS | 164 stránek: 84 CS, 80 EN |
| `npm run validate:redirects` | PASS | 641 exact redirectů: 334 canonicalization, 289 legacy, 18 merge |
| `npm run lint` | PASS | 0 errors, 3 warnings: anonymous ESLint config export a dvě existující upozornění na `<img>` |
| `STATIC_EXPORT=true npm run build` | PASS | Next.js 16.1.7, 258 statických stránek |
| `npm run validate:seo` | PASS | 164 content, 2 legal, 164 sitemap, 641 redirect sources |
| `npx tsc --noEmit` | PASS | bez diagnostiky |

`npm ci` hlásil engine warning kvůli Node 22.12.0 versus požadavek `eslint-visitor-keys >=22.13` a audit 7 zranitelností (2 low, 3 moderate, 2 high). Tyto dependency nálezy nebyly měněny, protože nejsou součástí tohoto SEO post-deployment auditu. Lokální redirect validator potvrzuje manifest, nikoli produkční HTTP implementaci.

## Blockers před P2

### 1. Merge losery vracejí 404

```text
Severity: Critical
Affected URLs: všech šest CS/EN content-merge loserů ve variantách no-slash, slash a /index.html
Observed behavior: HTTP 404, bez Location, 0 hopů; winner URL vracejí 200
Expected behavior: přímý HTTP 301/308 na přesný winner, jeden hop, zachovaný query string
Evidence: 18 produkčních GET requestů a HEAD kontrola šesti slash variant
Minimal fix: nasadit skutečnou edge/proxy redirect vrstvu napojenou na config/seo-redirects.ts; neměnit winner obsah
Retest: všechny tři varianty každého losera přes HEAD i GET, query preservation, přesný Location a finální 200/self-canonical
```

### 2. Sedm GSC redirect rodin není produkčně aktivních

```text
Severity: High
Affected URLs: sedm historických -2/-1 zdrojů, vždy no-slash, slash a /index.html
Observed behavior: všech 21 variant vrací 404 bez Location
Expected behavior: přímý permanentní redirect na deklarovaný existující target
Evidence: 21 GET requestů, sedm HEAD requestů; všechny targety samostatně 200/self-canonical
Minimal fix: publikovat příslušná exact pravidla manifestu ve skutečné HTTP vrstvě
Retest: HEAD/GET všech variant, jeden hop a query preservation
```

### 3. Location a automation legacy redirecty nejsou aktivní

```text
Severity: High
Affected URLs: /cs/lokace/*, /automatizace, /automatizace/, /automatizace/index.html, /automatizace/dekuji.html
Observed behavior: všech 16 testovaných variant vrací 404 bez Location
Expected behavior: 301/308 přímo na /cs/lokality/* nebo deklarované automation/thank-you targety
Evidence: produkční GET request každé uvedené varianty; současné targety existují
Minimal fix: aktivovat exact legacy pravidla v HTTP edge vrstvě
Retest: HEAD/GET, query preservation, přesný jeden hop a finální 200
```

### 4. `/cz/*` zůstává statický klientský fallback

```text
Severity: High
Affected URLs: /cz, /cz/, /cz/index.html a známé /cz/* routy
Observed behavior: /cz pouze 301 na /cz/; slash a index varianty vracejí 200 noindex fallback s window.location.replace
Expected behavior: permanentní serverový one-hop redirect na odpovídající /cs/*/ URL
Evidence: HEAD/GET root variant a GET 12 konkrétních historických rout
Minimal fix: nasadit exact /cz mapu z existujícího route inventáře; nepoužívat nekontrolovaný wildcard
Retest: root i alespoň deset konkrétních cest, HEAD/GET, query preservation a finální canonical 200
```

### 5. Root redirect není implementován

```text
Severity: Medium
Affected URLs: http/https apex a www root, /index.html
Observed behavior: host/protocol varianty končí HTTP 200 na www root; root je bezpečný noindex fallback
Expected behavior: přímý 301/308 na https://www.halatao.cz/cs/ se zachováním query
Evidence: HEAD i GET bez následování a s následováním redirectů; kontrola root HTML
Minimal fix: přidat root a /index.html exact pravidlo do stejné produkční edge vrstvy
Retest: pět host/protocol variant, GET i HEAD, query string a počet hopů
```

### 6. `/index.html` aliasy vracejí 200

```text
Severity: Medium
Affected URLs: /index.html varianty reprezentativních HTML rout
Observed behavior: všech 15 testovaných variant vrací 200 s canonical na slash URL
Expected behavior: permanentní redirect přímo na canonical slash URL
Evidence: GET 15 route typů ve variantách no-slash, slash a /index.html
Minimal fix: edge pravidlo bezpečně odstraňující pouze HTML /index.html, bez zásahu do assetů
Retest: stejných 15 cest a systémové/asset negativní testy
```

## Drobné nálezy vhodné až po odblokování P2

1. `/favicon.ico` vrací 404; používaný `/icon.svg` vrací 200.
2. `/cs/sluzby/automatizace-a-integrace/` nemá explicitní `<main>`, přesto má kompletní initial HTML a jeden H1.
3. `robots.txt` obsahuje nestandardní `Host:` hodnotu se scheme; indexaci ani assety neblokuje.

## Minimální nápravný a retest postup

1. Zapojit skutečnou HTTP edge/proxy vrstvu podle `docs/SEO_EDGE_REDIRECTS.md`, která spotřebuje verzovaný manifest a zachová query string.
2. Zajistit přímé 301/308 pro merge, GSC, location, automation, exact `/cz`, root a HTML `/index.html` pravidla; nevytvářet wildcard na neexistující cíle.
3. Spustit produkčně `npx tsx scripts/test-edge-redirects.ts --run` a zaznamenat výsledky.
4. Zopakovat tento HTTP matrix, úplný sitemap crawl a interní crawl.
5. GO/CONDITIONAL GO lze znovu posoudit až poté, co žádný merge loser nebude 404 a sitemap/canonical/hreflang zůstanou beze změny.

## Rollback a scope

Audit byl read-only vůči produkci. Nebyl proveden deploy, DNS změna, commit, push, PR, purge cache ani P2 úprava title, description, CTR, obsahu nebo schema. Tento dokument pouze zaznamenává skutečně naměřený stav a minimální doporučené opravy.
