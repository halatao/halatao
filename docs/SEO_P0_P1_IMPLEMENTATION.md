# SEO P0/P1 implementace

Datum implementace: 12. července 2026

## 1. URL politika

- Canonical origin: `https://www.halatao.cz`.
- Indexovatelné HTML stránky používají koncové lomítko.
- Skutečné soubory a systémové endpointy, například `/robots.txt`,
  `/sitemap.xml` a `/llms.txt`, lomítko nedostávají.
- Canonical, sitemap, hreflang, breadcrumbs a renderované interní odkazy používají
  stejný formát.
- Neznámé cesty se nesmějí wildcardem převádět na domnělé existující targety.

## 2. Root strategie

Požadovaný produkční redirect je:

```text
/           -> 308 -> /cs/
/index.html -> 308 -> /cs/
```

Root se už nerozhoduje podle `navigator.language`, `Accept-Language` ani
refereru. Cloudflare Worker vyhodnocuje root pravidlo před Static Assets a vrací
permanentní redirect. Statický `noindex,follow` fallback zůstává pouze v exportu
pro bezpečný rollback; přes aktivní Worker se běžně neservíruje.

## 3. Redirect architektura

Jediný zdroj pravdy je `config/seo-redirects.ts`. Manifest obsahuje:

- canonical origin, host/protocol a file/path politiku,
- exact redirecty,
- bezpečný prefix typ s povinným allowlistem suffixů,
- status, kategorii, důvod a query policy každého pravidla,
- explicitní odůvodnění pro záměrný noindex thank-you target.

`scripts/validate-redirects.ts` manifest expanduje na exact pravidla a odmítne
duplicity, self-redirect, chain, loop, chybějící nebo nekanonický target,
neodůvodněný noindex target, kolizi exact/prefix pravidla a zásah do assetů či
systémových souborů. Query string se ve všech současných pravidlech zachovává.

`next.config.ts` vždy používá `output: "export"`. Redirect manifest se pro
Worker deterministicky generuje do `worker/generated/redirects.json`; Worker ho
vyhodnotí před `env.ASSETS.fetch(request)`. Next.js `redirects()` se nepoužívá.

## 4. Redirect matrix

Manifest se aktuálně expanduje na 641 exact pravidel:

| Kategorie | Počet | Složení |
| --- | ---: | --- |
| canonicalization | 334 | root 2 + 164 aktivních registry rout × 2 aliasy + 2 legal routy × 2 aliasy |
| legacy | 289 | 84 aktivních CS rout × 3 `/cz` varianty + lokace 12 + automatizace 3 + GSC 21 + thank-you 1 |
| content merge | 18 | 6 loser rout × 3 HTML varianty |

Úplný exact matrix lze strojově vypsat bez paralelního seznamu:

```bash
npx tsx scripts/validate-redirects.ts --print
```

Povinné explicitní mapování:

| Source | Target |
| --- | --- |
| `/` | `/cs/` |
| `/index.html` | `/cs/` |
| `/cs` | `/cs/` |
| `/en` | `/en/` |
| `/en/index.html` | `/en/` |
| `/cz`, `/cz/`, `/cz/index.html` | `/cs/` |
| známé `/cz/<aktivní-cs-path>` varianty | odpovídající `/cs/<path>/` |
| `/cs/lokace/` varianty | `/cs/lokality/` |
| `/cs/lokace/praha/` varianty | `/cs/lokality/praha/` |
| `/cs/lokace/brno/` varianty | `/cs/lokality/brno/` |
| `/cs/lokace/ostrava/` varianty | `/cs/lokality/ostrava/` |
| `/automatizace`, `/automatizace/`, `/automatizace/index.html` | `/cs/sluzby/automatizace-a-integrace/` |
| `/automatizace/dekuji.html` | `/cs/popsat-projekt/dekuji/` |
| `/en/templates/internal-tool-scope-worksheet-2/` varianty | `/en/templates/internal-tool-scope-worksheet/` |
| `/cs/pruvodce/jak-nacenit-prevzeti-aplikace-2/` varianty | `/cs/pruvodce/jak-nacenit-prevzeti-aplikace/` |
| `/cs/technologie-1/` varianty | `/cs/technologie/` |
| `/en/services-1/` varianty | `/en/services/` |
| `/en/templates/release-process-stabilization-checklist-2/` varianty | `/en/templates/release-process-stabilization-checklist/` |
| `/cs/problemy/potrebujeme-klientsky-portal-2/` varianty | `/cs/problemy/potrebujeme-klientsky-portal/` |
| `/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat-2/` varianty | `/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat/` |

„Varianty“ znamenají exact source bez lomítka, se lomítkem a s
`/index.html`. Další canonicalization pravidla stejným způsobem pokrývají
no-slash a `index.html` alias každé aktivní HTML routy.

## 5. Produkční hosting redirectů

Cílová infrastruktura je jeden Cloudflare Worker `halatao` se Static Assets.
Custom Domains `halatao.cz` a `www.halatao.cz` směřují přímo na Worker; GitHub
Pages není origin. Worker nejprve aplikuje 641 exact redirectů a běžný request
obslouží výhradně přes binding `env.ASSETS`. Aktuální implementace v repozitáři
není v tomto dokumentačním kroku vydávána za produkčně nasazenou; potvrzení
vyžaduje post-deployment HTTP retest.

## 6. Hreflang a x-default

- Languages se renderují jen pro skutečný indexovatelný CS/EN pár se stejným
  `translationKey`.
- Obě stránky páru obsahují self reference `cs`/`en`, reciproční protějšek a
  `x-default` na konkrétní CS stránku daného clusteru.
- Nepárové stránky languages nevytvářejí.
- `/cs/lokality/` i tři city pages mají explicitní
  `translationAvailability: "unavailable"` a žádný falešný EN hreflang.
- Noindex thank-you stránky hreflang nevytvářejí.

## 7. Sloučené URL

| Loser | Winner |
| --- | --- |
| `/cs/priklady/workflow-poptavka-nabidka-realizace/` | `/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/` |
| `/en/use-cases/request-offer-delivery-workflow/` | `/en/use-cases/system-for-requests-offers-and-delivery/` |
| `/cs/problemy/poptavky-nabidky-a-realizace-v-tabulkach-a-emailu/` | `/cs/problemy/poptavky-nabidky-a-realizace-v-excelu-a-emailu/` |
| `/en/problems/requests-offers-and-delivery-in-spreadsheets/` | `/en/problems/requests-offers-and-delivery-in-spreadsheets-and-email/` |
| `/cs/sluzby/system-pro-rizeni-poptavek-nabidek-a-realizace/` | `/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/` |
| `/en/services/request-offer-delivery-system/` | `/en/services/sales-offers-and-job-tracking-system/` |

Losery byly odstraněny z registru, generovaných rout, sitemap, hreflang clusterů
a interních related/priority vazeb. Unikátní informace byly přeneseny do
winnerů.

## 8. Content-intent mapa

| Role | URL | Otázka, kterou stránka vlastní |
| --- | --- | --- |
| Transactional service | `/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/` | Kdo mi systém navrhne, vytvoří a napojí? |
| Informational guide | `/cs/pruvodce/jak-automatizovat-zpracovani-poptavek/` | Jak automatizaci připravit a zavést? |
| Konkrétní use case | `/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/` | Jak systém funguje přes role, stavy, předání a výjimky? |
| Problem/pain | `/cs/problemy/poptavky-nabidky-a-realizace-v-excelu-a-emailu/` | Jak poznám, že Excel a e-mail přestávají stačit? |

Owner stránky mají odlišené title, renderované H1/hero promise, description,
primary query a kontextové priority linky.

## 9. Interní navigace

- Header `Služby` vede na `/cs/sluzby/`; `Services` na `/en/services/`.
- Footer zpřístupňuje všechny existující locale taxonomy huby; EN footer
  nevytváří neexistující location link.
- Přidán indexovatelný `/cs/lokality/` hub s breadcrumbem
  `Domů → Lokality`, odkazy na Prahu, Brno a Ostravu, remote/on-site vysvětlením
  a souvisejícími službami.
- Location hub je dostupný z footeru a z relevantní CS service page.
- Registry validace i output validace ověřují skutečné cíle a reachability do
  tří interních kroků od locale homepage.

## 10. H1 a validátory

- `page.hero.title` je jediný datový zdroj renderovaného H1.
- Bývalé `page.h1` bylo ve typech i obsahu přejmenováno na
  `breadcrumbLabel`; breadcrumbs a krátké card labely používají tento význam.
- Service schema a `llms.txt` používají skutečné `page.hero.title`.
- Speciální automation landing už nemá hardcoded H1; dostává ho z page dat.
- Source validace kontroluje route uniqueness, skutečný H1, translation policy,
  localized related targets, breadcrumb parenty, CTA/priority cíle, huby,
  orphany a maximální vzdálenost.
- Redirect validace kontroluje úplný expandovaný manifest.
- Post-build SEO validace kontroluje canonical, robots, hreflang, lang, jeden
  neprázdný H1 shodný s hero title, sitemap, interní anchors, location routes,
  absenci loserů, redirect sources a renderovaný graf.

CI pořadí je: install → content → redirects → generovaný Worker manifest →
lint → static build → SEO/assets validace → Worker testy → Wrangler dry-run.

## 11. Výsledky testů

Baseline před implementací:

| Příkaz | Výsledek |
| --- | --- |
| `npm ci` | PASS; 346 balíčků, audit hlásil 7 existujících zranitelností a engine warning pro lokální Node 22.12.0 |
| `npm run validate:content` | PASS; 169 stránek |
| `npm run lint` | PASS; 0 errors, 3 existující warnings |
| `STATIC_EXPORT=true npm run build` | PASS; 265 generovaných statických stránek |

Finální stav:

| Příkaz | Výsledek |
| --- | --- |
| `npm run validate:content` | PASS; 164 stránek (84 CS, 80 EN) |
| `npm run validate:redirects` | PASS; 641 exact pravidel |
| `npm run lint` | PASS; 0 errors, 3 existující warnings |
| `STATIC_EXPORT=true npm run build` | PASS; 258 generovaných statických stránek |
| `npm run validate:seo` | PASS; 164 content rout, 2 legal routy, 164 sitemap URL |
| `npx tsc --noEmit` | PASS |
| `npx tsx scripts/test-edge-redirects.ts --dry-run` | PASS; načteno 641 pravidel, bez síťových requestů |

## 12. Zbývající blockers

- Opravený Worker se Static Assets musí být manuálně nasazen do existujícího
  projektu `halatao`.
- Produkční one-hop 301/308 i obsluha `/cs/` z assets musí být po deployi znovu
  HTTP ověřeny.
- Lint nadále hlásí tři původní warningy: anonymní default export v ESLint
  konfiguraci a dva `<img>` warningy. Nejsou součástí P0/P1 scope.
- `npm ci` hlásí existující dependency audit nálezy; závislosti nebyly v tomto
  SEO scope měněny.

## 13. Rollback poznámky

- Content merge lze vrátit obnovením šesti loser entries a jejich translation
  keys; současně se musí odstranit odpovídající merge redirecty, aby aktivní
  routa nekolidovala se source manifestu.
- Location hub lze vrátit odebráním registry entry, footer/service linků a
  location redirect targetu; city breadcrumbs by pak znovu neměly existující
  parent a validace záměrně selže.
- H1 migraci je nutné vracet atomicky v typech, content seeds, templates,
  schema, breadcrumbs a validátorech.
- Rollback znamená nasadit předchozí známou Worker verzi; Custom Domains ani
  DNS není nutné měnit. Statické `/cz/*` fallbacky zatím zůstávají v exportu.

Vstupní GSC ZIP exporty nebyly upraveny ani odstraněny. Nebyl proveden deploy,
DNS změna, commit, push ani PR.
