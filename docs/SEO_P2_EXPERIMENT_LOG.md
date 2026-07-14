# SEO P2 experiment log

Datum implementace v pracovním stromu: **2026-07-14**  
Zdrojový interval: **2026-06-15 až 2026-07-12 (28 dní)**  
Stav: změny nejsou nasazené; žádný řádek níže není vyhodnocen jako úspěšný.

GSC Queries a Pages jsou oddělené agregace bez společného klíče. Přiřazení query k URL je proto hypotéza s uvedenou jistotou, nikoli page-filtered důkaz. Dva Performance ZIPy jsou obsahově totožné a do metrik se započítaly jen jednou.

## Snippet kohorta

První kohorta je záměrně malá. URL čerstvě změněné při P1 merge se znovu nepřepisují, aby se nesmíchala baseline. Description se u obou testů nemění; jde o jednoproměnný title test.

| URL | Typ změny | Původní title | Nový title | Description | Query hypotéza | Data | Jistota | Hypotéza | Primary KPI | Secondary KPI | Minimum | Status |
|---|---|---|---|---|---|---:|---|---|---|---|---|---|
| `/cs/problemy/potrebujeme-nahradit-excel-ve-firemnim-procesu/` | title | `Nahradit Excel firemním systémem: kdy a jak začít` | `Kdy Excel ve firmě nestačí a čím ho nahradit` | beze změny | náhrada Excelu / evidence zakázek v Excelu | 0 kliků, 26 impresí, CTR 0 %, pozice 4,50 | medium-high | Otázkový title lépe odpoví pain-awareness intentu bez přeměny stránky na service page. | organický CTR | kliky a průměrná pozice | 56 dní kvůli malému vzorku | IMPLEMENTED, NOT DEPLOYED |
| `/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat/` | title | `Jak odhalit ruční přepisování dat ve firmě \| Bc. Ondřej Halata` | `Ruční přepisování dat: jak ho odhalit ve firemním procesu` | beze změny | ruční přepisování dat / integrace | 0 kliků, 31 impresí, CTR 0 %, pozice 6,22 | medium | Konkrétnější problém v první části title může zlepšit shodu snippet–intent; page-filtered query export chybí. | organický CTR | kliky a průměrná pozice | 56 dní kvůli malému vzorku | IMPLEMENTED, NOT DEPLOYED |

## Obsahové a interní-linking experimenty

| URL | Změna | Původní stav | Nový stav | Query cluster | Hypotéza | KPI | Minimum | Status |
|---|---|---|---|---|---|---|---|---|
| `/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/` | konkrétnost služby + kontextové odkazy | Obecnější výčet evidence, workflow a integrací | Audit, datový model, role/oprávnění, migrace, pilotní spuštění a navazující rozvoj; pain odkaz vede na úzkého P1 vlastníka pro Excel/e-mail workflow | evidence a řízení zakázek | Konkrétní scope posílí transactional relevance a přechod do inquiry bez přebírání how-to intentu. | organické kliky; service CTA; `generate_lead` | 28 dní, raději 56 kvůli merge baseline | IMPLEMENTED, NOT DEPLOYED |
| `/cs/pruvodce/jak-automatizovat-zpracovani-poptavek/` | answer-first + ordered process + template link | Šest obecných kroků v nečíslovaném seznamu | Deset kroků od příjmu po výjimky v `<ol>` a odkaz na discovery checklist | automatizace zpracování poptávek | Úplnější postup udrží informational intent a pošle připraveného uživatele na service/tool. | CTR; organické kliky; CTA a template use | 28 dní, nehodnotit současně s P1 baseline bez poznámky | IMPLEMENTED, NOT DEPLOYED |
| `/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/` | code-native workflow | Role a stavy jen v textových seznamech | Pětikrokový SSR workflow s vlastníkem, validací, notifikací, handoverem, dashboardem a exception flow | konkrétní fungování systému | Vizuálně čitelný provozní model zlepší use-case diferenciaci a návaznost na transactional service. | organické kliky; service CTA | 28–56 dní | IMPLEMENTED, NOT DEPLOYED |
| `/cs/problemy/potrebujeme-nahradit-excel-ve-firemnim-procesu/` | diagnostický checklist + linking | Čtyři obecné symptomy a jeden přístupový odstavec | Historie, oprávnění, reporting, handover a rozhodovací větev Excel / proces / SaaS / interní systém; odkazy na guide, service a worksheet | kdy Excel přestává stačit | Konkrétní diagnóza posílí pain intent a vhodný funnel bez tvrdého prodeje. | CTR; guide/service CTA | 56 dní | IMPLEMENTED, NOT DEPLOYED |
| `/cs/sluzby/prevzeti-a-rozvoj-existujici-aplikace/` | evidence a scope služby | Stručný audit kódu, deploymentu a priorit | Ownership, infrastruktura, CI/CD, testy, bezpečnost, risk prioritization, stabilizační období, handover a odkazy na guide/pricing/checklist | převzetí existující aplikace | Konkrétní první fáze zvýší důvěryhodnost komerční stránky bez tvrzení, že každé převzetí potřebuje rewrite. | service CTA; `generate_lead`; organické kliky | 56 dní (15 impresí v baseline) | IMPLEMENTED, NOT DEPLOYED |

## Template/tool experimenty

Tyto URL dosud popisovaly asset, ale neposkytovaly jej. Nově obsahují ungated, server-rendered skupiny checkboxů; nic se neposílá na server ani neukládá do prohlížeče. Event `template_use` se odešle při zaškrtnutí položky a neobsahuje text odpovědi.

| URL | Nový použitelný výstup | Primary KPI | Secondary KPI | Minimum | Status |
|---|---|---|---|---|---|
| `/cs/sablony/checklist-prevzeti-aplikace/` | 16 bodů: ownership, release, kritické scénáře, handover | `template_use` | service CTA, organické kliky | 56 dní + fresh recrawl | IMPLEMENTED, NOT DEPLOYED |
| `/cs/sablony/checklist-api-integrace/` | 16 bodů: kontrakt, konzistence, chyby, monitoring | `template_use` | service CTA, organické kliky | 56 dní + fresh recrawl | IMPLEMENTED, NOT DEPLOYED |
| `/cs/sablony/scope-worksheet-pro-interni-system/` | 16 bodů: proces, role/stavy, data, hranice etapy | `template_use` | service CTA, organické kliky | 56 dní + fresh recrawl | IMPLEMENTED, NOT DEPLOYED |
| `/cs/sablony/discovery-checklist-pro-automatizace/` | 16 bodů: proces, výjimky, data, pilot a měření | `template_use` | service CTA, organické kliky | 56 dní + fresh recrawl | IMPLEMENTED, NOT DEPLOYED |

## Měření funnelu

Implementované eventy: `seo_cta_click`, `service_cta_click`, `contact_email_click`, `contact_phone_click`, `booking_click`, `form_start`, `generate_lead`, `form_submit_error`, `template_use`.

Společné parametry: `locale`, `page_path`, `landing_page`, `referrer_host`, `traffic_source`, `traffic_medium`. Specifické parametry jsou pouze stabilní identifikátory (`form_id`, `lead_type`, `cta_location`, `target_path`, `tool_id`, `group`, `error_type`). Jména, e-maily, telefony, firma, zpráva, pain point, company size, query string ani obsah worksheetu se neposílají.

Eventy se odešlou jen při statistickém souhlasu Cookiebotu. Kontext se drží pouze v paměti stránky, ne v cookies ani browser storage.

`generate_lead` vzniká pouze po `response.ok`; thank-you pageview není primární konverze. Před vyhodnocením je nutné v GTM/GA4 ověřit tagy, consent a případnou duplicitu pageview způsobenou současným souběhem GTM a přímého `gtag.js`.
