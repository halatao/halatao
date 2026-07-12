# SEO edge redirecty

## Stav

**BLOCKED: requires edge/DNS/hosting access.** Produkční workflow v
`.github/workflows/static.yml` publikuje pouze statický adresář `out/` na GitHub
Pages. GitHub Pages nepodporuje projektově definovaná pravidla pro libovolné
serverové HTTP redirecty. Repozitář neobsahuje jinou nasazenou proxy, Worker ani
CDN konfiguraci.

`next.config.ts` používá stejný manifest pouze ve větvi pro případný budoucí
serverový Next.js deployment. Při `STATIC_EXPORT=true` se `redirects()`
negenerují a nejsou produkčním řešením.

Dokud není edge vrstva skutečně zapojená do DNS a deploymentu:

- root zůstává bezpečný statický `noindex,follow` fallback,
- `/cz/*` zůstávají statické `noindex,follow` fallbacky,
- žádný z těchto HTML fallbacků není považován za HTTP redirect,
- níže uvedené HTTP testy jsou akceptační specifikace, nikoli tvrzení o
  současném produkčním chování.

## Zdroj pravdy

Jediným zdrojem path redirectů je `config/seo-redirects.ts`:

- `seoRedirectManifest` je verzovaný provider-neutral manifest,
- exact pravidla obsahují source, finální target, status, kategorii, důvod a
  query policy,
- bezpečný prefix typ vyžaduje explicitní allowlist suffixů a před použitím se
  expanduje na exact pravidla,
- `expandSeoRedirectRules()` vrací úplný exact inventář pro edge adaptér,
  validaci i non-static Next.js adaptér,
- výchozí status je `308` a query string se zachovává.

Úplný strojově čitelný redirect matrix včetně všech vygenerovaných `/cz/*`,
no-slash a `index.html` variant lze vypsat tímto příkazem:

```bash
npx tsx scripts/validate-redirects.ts --print
```

Validace bez výpisu matrix:

```bash
npx tsx scripts/validate-redirects.ts
```

Spustitelný HTTP acceptance test je `scripts/test-edge-redirects.ts`. Síťové
požadavky provede pouze s explicitním `--run`; bez něj bezpečně skončí bez
přístupu k síti:

```bash
npx tsx scripts/test-edge-redirects.ts --help
npx tsx scripts/test-edge-redirects.ts --run
```

Volby `--canonical-origin`, `--path-origin` a opakovatelná
`--legacy-origin` umožňují testovat explicitně zadaný preview/edge endpoint.
Produkční akceptační běh bez těchto voleb použije origin policy z manifestu.

## Požadovaná edge URL politika

Finální HTML URL má tvar:

```text
https://www.halatao.cz/<path>/
```

Edge musí v jedné odpovědi spojit všechny potřebné změny schématu, hostu a
cesty. Pro libovolnou známou HTML cestu `P` tedy platí:

| Vstup | Jediný `Location` target |
| --- | --- |
| `http://halatao.cz/P` | `https://www.halatao.cz/<canonical-P>/` |
| `http://www.halatao.cz/P` | `https://www.halatao.cz/<canonical-P>/` |
| `https://halatao.cz/P` | `https://www.halatao.cz/<canonical-P>/` |
| `https://www.halatao.cz/P` bez slash | `https://www.halatao.cz/P/` |
| `https://www.halatao.cz/P/index.html` | `https://www.halatao.cz/P/` |

Nesmí vzniknout řetězec `http -> https -> www -> trailing slash`. Pokud se
současně mění host a path, první `Location` už musí být absolutní finální URL.

Root má pevnou strategii:

```text
/           -> /cs/
/index.html -> /cs/
```

Edge nesmí rozhodovat podle `Accept-Language`, refereru ani klientského
`navigator.language`.

Query string se přenese beze změny. Fragment se na HTTP server neposílá a není
součástí redirect logiky.

## Soubory a systémové endpointy

Trailing slash se nevynucuje u skutečných souborů a systémových endpointů,
zejména:

- `/robots.txt`,
- `/sitemap.xml`,
- `/llms.txt`,
- `/_next/*`,
- obrázky, CSS, JavaScript, source mapy a fonty.

Host a HTTPS lze normalizovat i pro tyto soubory, ale path musí zůstat souborem;
například `/robots.txt` se nikdy nesmí změnit na `/robots.txt/`. Neznámá HTML
cesta se nesmí wildcardem převést na domnělý target. Má zůstat 404.

## Redirect matrix

Všechny targety níže jsou finální slash URL. Každý HTML řádek označený jako
„3 varianty“ expanduje source na `bez slash`, `se slash` a `/index.html`.

### Canonicalization

| Source | Target |
| --- | --- |
| `/` | `/cs/` |
| `/index.html` | `/cs/` |
| no-slash varianta každé aktivní registry route | její self-canonical slash URL |
| `/index.html` varianta každé aktivní registry route | její self-canonical slash URL |
| no-slash a `/index.html` varianty `/privacy-policy/` a `/data-deletion/` | příslušná slash URL |

Tím jsou explicitně pokryty také `/cs`, `/en`, `/cs/index.html` a
`/en/index.html`. Generování je odvozené z aktivního registru; odstraněná route
se nesmí omylem dál canonicalizovat na sebe.

### Legacy locale

Pro každou aktivní českou registry route se generují exact varianty:

```text
/cz
/cz/
/cz/index.html

/cz/<aktivni-cs-path>
/cz/<aktivni-cs-path>/
/cz/<aktivni-cs-path>/index.html
```

Každá vede přímo na odpovídající existující `/cs/.../` URL. Neexistuje
nekontrolovaný `/cz/:path*` wildcard.

### Lokace a automatizace

| Source | Target | Rozsah |
| --- | --- | --- |
| `/cs/lokace/` | `/cs/lokality/` | 3 HTML varianty |
| `/cs/lokace/praha/` | `/cs/lokality/praha/` | 3 HTML varianty |
| `/cs/lokace/brno/` | `/cs/lokality/brno/` | 3 HTML varianty |
| `/cs/lokace/ostrava/` | `/cs/lokality/ostrava/` | 3 HTML varianty |
| `/automatizace/` | `/cs/sluzby/automatizace-a-integrace/` | 3 HTML varianty |
| `/automatizace/dekuji.html` | `/cs/popsat-projekt/dekuji/` | exact souborová legacy URL |

Thank-you target je záměrně `noindex`; manifest u něj obsahuje explicitní
výjimku a odůvodnění.

### GSC 404

Každý source se generuje ve třech HTML variantách a vede jedním hopem na target:

| Source | Target |
| --- | --- |
| `/en/templates/internal-tool-scope-worksheet-2/` | `/en/templates/internal-tool-scope-worksheet/` |
| `/cs/pruvodce/jak-nacenit-prevzeti-aplikace-2/` | `/cs/pruvodce/jak-nacenit-prevzeti-aplikace/` |
| `/cs/technologie-1/` | `/cs/technologie/` |
| `/en/services-1/` | `/en/services/` |
| `/en/templates/release-process-stabilization-checklist-2/` | `/en/templates/release-process-stabilization-checklist/` |
| `/cs/problemy/potrebujeme-klientsky-portal-2/` | `/cs/problemy/potrebujeme-klientsky-portal/` |
| `/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat-2/` | `/cs/pruvodce/jak-odhalit-rucni-prepisovani-dat/` |

### Content merge

Každý loser source se generuje ve třech HTML variantách a vede přímo na winner:

| Loser | Winner |
| --- | --- |
| `/cs/priklady/workflow-poptavka-nabidka-realizace/` | `/cs/priklady/system-pro-poptavky-nabidky-a-realizaci/` |
| `/en/use-cases/request-offer-delivery-workflow/` | `/en/use-cases/system-for-requests-offers-and-delivery/` |
| `/cs/problemy/poptavky-nabidky-a-realizace-v-tabulkach-a-emailu/` | `/cs/problemy/poptavky-nabidky-a-realizace-v-excelu-a-emailu/` |
| `/en/problems/requests-offers-and-delivery-in-spreadsheets/` | `/en/problems/requests-offers-and-delivery-in-spreadsheets-and-email/` |
| `/cs/sluzby/system-pro-rizeni-poptavek-nabidek-a-realizace/` | `/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek/` |
| `/en/services/request-offer-delivery-system/` | `/en/services/sales-offers-and-job-tracking-system/` |

## Požadavky na provider adaptér

Budoucí adaptér musí:

1. číst výstup `expandSeoRedirectRules()`, nikoli udržovat paralelní seznam;
2. zachovat status `301` nebo `308` z manifestu;
3. zachovat query string, pokud konkrétní pravidlo výslovně neříká jinak;
4. spojit host/protocol/path normalizaci do jednoho `Location`;
5. vyhodnotit file/system výjimky před trailing-slash logikou;
6. nasadit změnu atomicky s odstraněním statických legacy fallbacků;
7. spustit `validate:redirects`, build a generated-output SEO validaci před
   nasazením.

Teprve po ověřeném zapojení edge vrstvy lze odstranit `src/app/cz/**` a změnit
root fallback. V témže releasu musí test potvrdit, že `out/cz/**` už nevzniká.

## Akceptační HTTP testy

Testy se spouštějí až po nasazení skutečné edge vrstvy. `--max-redirs 0`
záměrně zakazuje následování redirectu, aby nebyl skrytý chain.

Automatizovaný příkaz:

```bash
# Načtení a kontrola testovacího inventáře bez sítě
npx tsx scripts/test-edge-redirects.ts --dry-run

# Až po skutečném edge deploymentu
npx tsx scripts/test-edge-redirects.ts --run
```

Skript kontroluje celý expandovaný path manifest, origin+path kompozici,
zachování query stringu, absolutní finální `Location`, absenci druhého hopu,
finální `200` a self-canonical i file/system endpointy bez slash varianty.
Timeout a souběžnost lze řídit přes `SEO_EDGE_TIMEOUT_MS` a
`SEO_EDGE_CONCURRENCY`.
Následující `curl` příkazy jsou menší ruční smoke sada:

```bash
curl --max-redirs 0 -sS -D - -o /dev/null \
  "http://halatao.cz/cs/sluzby/system-pro-rizeni-poptavek-a-zakazek?probe=1"

curl --max-redirs 0 -sS -D - -o /dev/null \
  "https://halatao.cz/en/services/index.html?probe=1"

curl --max-redirs 0 -sS -D - -o /dev/null \
  "https://www.halatao.cz/cz/pruvodce/jak-nacenit-webovou-aplikaci?probe=1"

curl --max-redirs 0 -sS -D - -o /dev/null \
  "https://www.halatao.cz/cs/priklady/workflow-poptavka-nabidka-realizace/?probe=1"

curl --max-redirs 0 -sS -D - -o /dev/null \
  "https://www.halatao.cz/robots.txt"
```

Pro první čtyři testy musí platit:

- první status je `301` nebo `308` podle manifestu,
- první `Location` je absolutní finální `https://www.halatao.cz/.../` URL,
- `probe=1` zůstane zachováno,
- po samostatném requestu na hodnotu `Location` vrátí target `200`,
- target má self-canonical,
- k dosažení targetu není potřeba druhý redirect.

U `/robots.txt` se na canonical hostu očekává `200` bez přidaného lomítka.
Samostatně je nutné obdobně otestovat `/sitemap.xml`, `/llms.txt` a několik
statických assetů.

Dokud nejsou tyto testy provedené proti skutečně nasazené edge vrstvě, nelze
žádný path redirect ani root redirect označit za produkčně dokončený.
