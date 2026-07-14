# SEO P2 implementation

## Executive summary

První P2 vlna používá GSC interval **2026-06-15 až 2026-07-12**. Dva Performance ZIPy jsou obsahově totožné, proto se data neduplikovala. Queries a Pages jsou samostatné agregace bez query×page klíče; každé tematické přiřazení je proto označené confidence a page-filtered export zůstává doporučeným dalším vstupem.

Změny jsou pouze v pracovním stromu. Nebyl proveden deploy, commit, push ani PR a nelze zatím tvrdit zlepšení SEO. URL, canonical, hreflang, locale, redirecty ani šest merge rozhodnutí se nemění.

## Produkční P0 baseline před P2

Reálné HTTP kontroly před změnami:

- `https://www.halatao.cz/` → **308**, `Location: /cs/`;
- `https://www.halatao.cz/cs/` → **200**;
- `https://www.halatao.cz/en/` → **200**;
- `https://www.halatao.cz/sitemap.xml` → **200**;
- `/cs/priklady/workflow-poptavka-nabidka-realizace/?baseline=1` → **308** na winner;
- náhodná neexistující HTML URL → **404**.

Kompletní `npx tsx scripts/test-edge-redirects.ts --run` prošel pro content/legacy pravidla, ale skončil non-zero na 6 assertions kolem `/robots.txt`: `http://halatao.cz`, `http://www.halatao.cz` a `https://halatao.cz` vracejí pro tento systémový soubor 200 místo očekávaného canonical-host 301/308. Kritické root, content a merge redirecty byly funkční, proto P2 nebyla blokována; tato odchylka není vydávána za PASS ani touto P2 vlnou opravena.

## Implementovaná první vlna

### Request / offer / delivery

- `/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/`
  - transactional vlastnictví intentu zůstalo zachované;
  - doplněn procesní audit, datový model, role a oprávnění, integrace, migrace dat, pilotní spuštění a další rozvoj;
  - kontextový pain odkaz vede na diagnostiku nahrazení Excelu.
- `/cs/pruvodce/jak-automatizovat-zpracovani-poptavek/`
  - answer-first úvod;
  - deset skutečně seřazených kroků v `<ol>`: příjem, validace, deduplikace, přiřazení, nabídka, follow-up, schválení, realizace, reporting a výjimky;
  - explicitní hranice toho, co nemá automat rozhodovat;
  - kontextový odkaz na discovery checklist.
- `/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/`
  - nový server-rendered, code-native workflow s pěti fázemi, vlastníky, notifikacemi, dashboardem a exception flow;
  - žádný bitmapový placeholder ani nový klientský balík.
- `/cs/problemy/potrebujeme-nahradit-excel-ve-firemnim-procesu/`
  - doplněny symptomy kolem historie, oprávnění, ručního reportingu a handoveru;
  - diagnostická větev rozlišuje, kdy Excel stačí, kdy nejdřív opravit proces, kdy zvážit hotový nástroj a kdy interní systém;
  - odkazy na guide, transactional service a scope worksheet.

P1 pain page `/cs/problemy/poptavky-nabidky-a-realizace-v-excelu-a-emailu/` nebyla odstraněna ani sloučena; stále vlastní užší pain intent konkrétního request/offer/delivery workflow. Nově rozšířená Excel page řeší obecnější rozhodnutí nad firemním procesem.

### Takeover cluster

- `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace/`
  - rozšířen obsah o vlastnictví a přístupy, infrastrukturu, CI/CD, rollback, dokumentaci, testy, bezpečnost, risk prioritization, stabilizační období, handover a další rozvoj;
  - výslovně zachováno, že rewrite není automatický první krok;
  - doplněny kontextové odkazy na end-to-end guide, pricing/scoping guide, takeover checklist a inquiry.

Ostatní takeover URL zůstávají samostatné podle intentu. Rozšíření pricing matrix, audit methodology a rescue problem pages je v backlogu, protože jejich Performance sample je malý a není k dispozici page-filtered query export.

### Použitelné české tools/templates

Čtyři stránky už pouze nepopisují hypotetický asset. Obsahují ungated, server-rendered a tisknutelné pracovní skupiny checkboxů:

- `/cs/sablony/checklist-prevzeti-aplikace/`
- `/cs/sablony/checklist-api-integrace/`
- `/cs/sablony/scope-worksheet-pro-interni-system/`
- `/cs/sablony/discovery-checklist-pro-automatizace/`

Každý asset má 4 skupiny po 4 položkách a závěrečný popis očekávaného výstupu. Hodnoty checkboxů se neukládají ani neposílají na server. Source validace kontroluje minimální tvar assetu; output validace kontroluje skutečně vyrenderovaný počet checkboxů.

## Title a description testy

Kohorta obsahuje pouze dvě URL s first-page signálem a nulovým CTR. U obou se mění jen title; description zůstává beze změny.

| URL | Title before | Title after | Description before | Description after | Důvod |
|---|---|---|---|---|---|
| `/cs/problemy/potrebujeme-nahradit-excel-ve-firemnim-procesu/` | `Nahradit Excel firemním systémem: kdy a jak začít` | `Kdy Excel ve firmě nestačí a čím ho nahradit` | `Kdy už Excel nestačí pro firemní proces, jak poznat správný okamžik pro interní systém a jak navrhnout první verzi bez zbytečného přestřelení scope.` | `Kdy už Excel nestačí pro firemní proces, jak poznat správný okamžik pro interní systém a jak navrhnout první verzi bez zbytečného přestřelení scope.` | 0/26, pozice 4,50; přímější pain-awareness otázka |
| `/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat/` | `Jak odhalit ruční přepisování dat ve firmě \| Bc. Ondřej Halata` | `Ruční přepisování dat: jak ho odhalit ve firemním procesu` | `Praktický průvodce, jak najít místa, kde se ve firmě ručně přepisují data, vznikají chyby a dává smysl automatizace nebo API integrace.` | `Praktický průvodce, jak najít místa, kde se ve firmě ručně přepisují data, vznikají chyby a dává smysl automatizace nebo API integrace.` | 0/31, pozice 6,22; konkrétnější problém v první části title |

Title, description a H1 request/offer/delivery winnerů se po čerstvém P1 merge znovu nepřepisují. Přesné experimenty a evaluační okna jsou v `SEO_P2_EXPERIMENT_LOG.md`.

## Internal linking

- guide → transactional service, use case, pain page a discovery checklist;
- use case → transactional service, guide a pain page;
- Excel problem → guide, transactional service a scope worksheet;
- transactional service → use case, guide, úzký request/offer/delivery pain owner a inquiry;
- takeover service → end-to-end guide, pricing guide, takeover checklist a inquiry.

Nové odkazy používají canonical trailing-slash URL. Existující source i generated-output validace odmítají missing, redirectující, legacy a no-slash HTML targety.

## Technická hygiena

- `/cs/sluzby/automatizace-a-integrace/` má nyní právě jeden `<main>`; output validátor nově vyžaduje jeden main landmark na každé content route.
- Česká thank-you page se vrací do standardního `SiteFrame`, takže má také `<main>` a konzistentní layout.
- Z `robots.txt` se odstranila nadbytečná `Host:` direktiva se scheme; `Sitemap:` zůstává.
- `Service.provider` má nyní `@type: ProfessionalService` a stabilní `@id`; stabilní `@id` dostal i `WebSite`.
- Produkční `/favicon.ico` při auditu vrátil 404, ale HTML explicitně publikuje existující `/icon.svg` jako `shortcut icon` i `icon` a `/apple-icon` jako apple touch icon. Nebyl přidán neautorizovaný nebo falešný bitmapový asset. Samostatný ICO je nízká priorita, ne rozbitý odkaz v HTML.
- FAQ obsah a FAQPage schema nebyly plošně odstraněny ani přepsány.

## Conversion tracking

Nová event vrstva používá stávající `dataLayer`/GTM a nepřidává externí provider.

Eventy:

- `seo_cta_click`
- `service_cta_click`
- `contact_email_click`
- `contact_phone_click`
- `booking_click`
- `form_start`
- `generate_lead`
- `form_submit_error`
- `template_use`

Společné parametry: locale, pathname landing page, aktuální pathname, hostname referreru a sanitizované `utm_source`/`utm_medium`. Formulářová pole, kontaktní údaje, query string a obsah worksheetu se neposílají. `generate_lead` vzniká pouze po úspěšném `response.ok`; network a HTTP chyby vrátí formulář z pending stavu a mají oddělený `error_type`.

Custom eventy se zahazují, dokud Cookiebot nepotvrdí statistický souhlas. Landing/referrer/UTM kontext se potom drží pouze v paměti aktuální stránky; nepoužívá cookies, `localStorage` ani `sessionStorage`.

Externí blocker: repo načítá GTM i přímý GA4 `gtag.js`. Bez přístupu ke konfiguraci GTM nelze bezpečně určit, zda jsou pageviews duplicitní. Před produkčním vyhodnocením je nutné ověřit GTM kontejner, consent režim, označení `generate_lead` jako konverze a DebugView. Přímý GA tag nebyl naslepo odstraněn.

## EN rozhodnutí

- EN má v Pages agregaci 735 impresí a 0 kliků, ale část viditelnosti je technická nebo geograficky slabá.
- `/en/comparisons/nextjs-vs-spa-for-business-apps/`: vysoká viditelnost, ale nižší business relevance; `TEST` až s page-filtered queries.
- `/en/guides/how-to-automate-request-processing/` a `/en/guides/how-to-manage-jobs-without-excel/`: strategicky relevantní, nyní `NEEDS MORE DATA`, ne snippet-only rewrite.
- `/en/use-cases/partner-portal-for-b2b-company/`: commercial relevant, ale průměrná pozice kolem 19; nejdřív relevance a čerstvá canonical baseline.
- `/en/use-cases/internal-approval-system/`: query `internal approval system india` naznačuje geografický mismatch; `NEEDS MORE DATA`, ne optimalizace podle impresí.
- Nevznikly žádné nové EN překlady ani location pages.

## Validátory

- `ContentPage` má typed optional `workflow`, `workAsset` a ordered/unordered section list.
- Content validace kontroluje neprázdný workflow, tvar pracovního assetu a jeho texty v encoding kontrole.
- Output validace kontroluje jeden `<main>`, skutečné ordered workflow kroky a počet pracovních checkboxů.
- Redirect, canonical, hreflang, sitemap, H1, lang a internal-link pravidla zůstávají aktivní.

## Stav validací

Finální lokální běh 2026-07-14:

| Příkaz | Výsledek |
|---|---|
| `npm ci` | PASS; 373 balíčků, npm audit nahlásil 7 existujících zranitelností (2 low, 3 moderate, 2 high) |
| `npm run validate:content` | PASS; 164 stránek (84 CS, 80 EN) |
| `npm run validate:redirects` | PASS; 641 zdrojů (334 canonicalization, 289 legacy, 18 merge) |
| `npm run lint` | PASS; 0 errors, 3 existující warnings |
| `STATIC_EXPORT=true npm run build` | PASS; 258 statických rout |
| `npm run validate:seo` | PASS; 164 content rout, 2 legal routy, 164 sitemap URL, 641 redirect zdrojů; včetně canonical, hreflang, H1, main, interních odkazů, P2 artefaktů a syntaxe JSON-LD |
| `npx tsc --noEmit` | PASS |
| `npm run test:analytics` | PASS; 3/3 testy (SSR no-op, blokace bez statistického souhlasu a sanitizovaný in-memory kontext bez query stringu) |
| `npm run test:worker` | PASS; 9/9 testů |
| `npm run validate:worker-assets` | PASS; 5 povinných souborů |
| `npm run validate:worker-redirects` | PASS; 641 exact pravidel |
| `npm run build:worker` | PASS; Wrangler 4.110.0 dry-run, 3 060 assetů, binding `env.ASSETS` |

Repo nemá obecný `npm test` script. `worker/generated/redirects.json` zůstal bez diffu.

Kontrola static outputu potvrdila `out/cs/index.html`, `out/en/index.html`, `out/sitemap.xml` a `out/robots.txt`; sitemap má stále 164 URL. Všech šest P1 merge loser adresářů ve výstupu chybí. Redirect count zůstal 641 a build count 258, stejně jako před P2 změnami.

Produkční smoke test před deployem P2 worktree:

- `https://www.halatao.cz/` → 308 na `https://www.halatao.cz/cs/`;
- `/cs/` → 200, `/en/` → 200, `/sitemap.xml` → 200;
- merge loser `/cs/priklady/workflow-poptavka-nabidka-realizace/` → 308 přímo na winner se zachovaným query stringem;
- náhodná neexistující HTML URL → 404.

Úplný `npx tsx scripts/test-edge-redirects.ts --run` skončil non-zero se šesti assertions. Všechny se týkají pouze tří nepreferovaných origin variant `/robots.txt`: `http://halatao.cz`, `http://www.halatao.cz` a `https://halatao.cz` vracejí 200 místo origin canonicalization redirectu na `https://www.halatao.cz/robots.txt`. Test neohlásil jinou chybu. Jde o existující edge hygiene odchylku mimo P2 scope; není vydávána za PASS. Produkční P2 deploy proveden nebyl.

## Změněné soubory

Analýza a dokumentace:

- `scripts/analyze-p2-gsc.ts`
- `analysis/p2/coverage-normalized.csv`
- `analysis/p2/indexation-review.csv`
- `analysis/p2/normalized-pages.csv`
- `analysis/p2/normalized-queries.csv`
- `analysis/p2/p2-backlog.csv`
- `analysis/p2/page-priorities.csv`
- `analysis/p2/query-page-map.csv`
- `docs/SEO_P2_STRATEGY.md`
- `docs/SEO_P2_IMPLEMENTATION.md`
- `docs/SEO_P2_EXPERIMENT_LOG.md`
- `docs/SEO_P2_INDEXATION_REVIEW.md`

Implementace a validace:

- `scripts/validate-seo.ts`
- `src/app/globals.css`
- `src/app/robots.ts`
- `src/components/AnalyticsEvents.tsx`
- `src/components/AnalyticsScripts.tsx`
- `src/components/AutomationAuditForm.tsx`
- `src/components/AutomationAuditLanding.tsx`
- `src/components/InquiryForm.tsx`
- `src/components/SiteFrame.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/WorkAsset.tsx`
- `src/components/WorkflowDiagram.tsx`
- `src/components/templates/index.tsx`
- `src/content/pages/stage1/problems-growth.ts`
- `src/content/pages/stage1/services.ts`
- `src/content/pages/stage2/guides-demand.ts`
- `src/content/pages/stage2/use-cases-growth.ts`
- `src/content/pages/stage3/tools-growth.ts`
- `src/content/pages/stage3/tools.ts`
- `src/content/types.ts`
- `src/lib/analytics.ts`
- `src/lib/analytics.test.ts`
- `src/lib/content-validation.ts`
- `src/lib/schema.ts`
- `package.json`

## Co nebylo implementováno

- žádný noindex ani merge na základě starého Coverage exportu;
- žádný plošný title/meta rewrite;
- žádné nové case studies, metriky, ceny nebo reference;
- žádný EN content expansion bez query×page důkazu;
- žádná změna URL slugů, canonical, hreflang, redirectů, DNS, Cloudflare nebo deploymentu;
- žádné tvrzení o výsledku před post-change daty.
