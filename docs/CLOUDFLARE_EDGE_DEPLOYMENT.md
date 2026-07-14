# Cloudflare Worker se Static Assets

## Cílová architektura

```text
GitHub repository
→ Cloudflare build
→ npm run build
→ Next.js static export do out/
→ Cloudflare Worker Static Assets
→ Worker redirect handler před assets
→ Custom Domains halatao.cz a www.halatao.cz
```

GitHub Pages není produkční origin ani fallback. Worker `halatao` je zároveň
redirect vrstva i origin statického webu. Běžný request nekončí globálním
`fetch(request)`, ale bindingem `env.ASSETS.fetch(request)`.

## Aktivní konfigurace

Jediný Wrangler config je kořenový `wrangler.jsonc`:

```json
{
  "name": "halatao",
  "main": "worker/src/index.ts",
  "compatibility_date": "2026-07-12",
  "workers_dev": true,
  "assets": {
    "directory": "./out",
    "binding": "ASSETS",
    "not_found_handling": "404-page",
    "html_handling": "auto-trailing-slash",
    "run_worker_first": true
  }
}
```

`run_worker_first` zajišťuje, že SEO redirect manifest má prioritu před asset
lookupem. `404-page` vrací pro neexistující cestu skutečnou 404 a nejbližší
statickou 404 stránku; nevzniká SPA nebo homepage fallback.

Custom Domains `halatao.cz` a `www.halatao.cz` jsou spravované v Cloudflare.
Wrangler config pro stejné hosty nedeklaruje Worker Routes ani nové Custom
Domains, aby nevznikla duplicitní routing konfigurace. `workers_dev: true`
ponechává dostupný preview hostname stejného Workeru.

## Request flow

1. Worker nejprve vyhodnotí host a protokol. Nekanonický produkční origin vrací
   308 bez volání assets.
2. Současně vyhledá pathname v deterministickém exact artefaktu
   `worker/generated/redirects.json`, aby se origin a případná path
   canonicalizace složily do jediného redirectu na finální target.
3. Na canonical originu má exact redirect manifest prioritu před asset lookupem.
   Query policy pochází z manifestu.
4. Pro `halatao.cz` a `www.halatao.cz` používá redirect base
   `https://www.halatao.cz`.
5. Pro `*.workers.dev` používá aktuální `url.origin`, takže root preview vede na
   preview `/cs/` a běžné preview stránky zůstávají testovatelné.
6. Ostatní requesty se předají beze změny na `env.ASSETS.fetch(request)`.

Worker nepoužívá externí origin, GitHub Pages ani self-fetch vlastní Custom
Domain.

### Cloudflare Managed robots.txt

Zone-level volba **Set your preference to block training in robots.txt**
(`is_robots_txt_managed`) není součástí Wrangler konfigurace. Pokud je zapnutá,
Cloudflare pro GET `/robots.txt` generuje nebo doplňuje vlastní odpověď. Tato
odpověď může obejít očekávaný Worker redirect na nekanonických originech, i když
HEAD request projde Workerem.

Má-li být Worker jediným vlastníkem canonicalizace `/robots.txt`, musí být tato
volba v Cloudflare Security Settings vypnutá. Případné AI crawler direktivy je
nutné před vypnutím vědomě zachovat ve zdrojovém `robots.txt`, pokud je web chce
nadále publikovat; nejde o automatickou součást deploye. Samotné
`run_worker_first: true` zone-level Managed robots.txt nevypíná.

## Redirect artefakt

- Zdroj pravdy: `config/seo-redirects.ts`.
- Generátor: `scripts/generate-worker-redirects.ts`.
- Runtime artefakt: `worker/generated/redirects.json`.
- Validátor shody: `scripts/validate-worker-redirects.ts`.

`npm run build` nejprve regeneruje artefakt a potom spustí Next.js build. Není
nutné ručně připravovat `out/` ani redirect JSON.

## Cloudflare build settings

V Cloudflare Workers Builds použít:

```text
Root directory: /
Build command: npm run build
Deploy command: npx wrangler deploy --config wrangler.jsonc
```

Node.js runtime musí být 22 nebo novější. Account ID a API tokeny patří pouze
do Cloudflare/GitHub secrets, nikdy do repozitáře.

Cloudflare build musí skončit chybou, pokud nevznikne některý z těchto souborů:

- `out/cs/index.html`,
- `out/en/index.html`,
- `out/sitemap.xml`,
- `out/robots.txt`,
- `out/404.html`.

Kontrolu provádí `npm run validate:worker-assets`.

## Lokální pre-deployment validace

```bash
npm ci
npm run validate:content
npm run validate:redirects
npm run lint
npm run build
npm run validate:seo
npm run validate:worker-assets
npm run validate:worker-redirects
npm run test:worker
npm run build:worker
npx tsc --noEmit
```

Lokální HTTP preview:

```bash
npx wrangler dev --config wrangler.jsonc --local
```

Minimální očekávání:

```text
/             308 → /cs/
/cs/          200
/en/          200
/sitemap.xml  200
merge loser   308 → winner
unknown URL   404
```

## Manuální deployment

Před deployem ověřit v Cloudflare dashboardu:

1. existující Worker se jmenuje `halatao`,
2. `halatao.cz` a `www.halatao.cz` jsou jeho Custom Domains,
3. pro stejné hostname nejsou současně aktivní duplicitní Worker Routes,
4. Managed robots.txt je vypnutý, pokud má Worker canonicalizovat také
   `/robots.txt`,
5. build používá kořen repozitáře a Node.js 22+.

Potom spustit Cloudflare build nebo lokálně po přihlášení:

```bash
npm ci
npm run build
npm run validate:worker-assets
npx wrangler deploy --config wrangler.jsonc
```

Alternativně lze ručně spustit `.github/workflows/cloudflare-worker.yml` s
potvrzením `DEPLOY_PRODUCTION` a schválením environmentu
`cloudflare-production`. Workflow nejprve provede celý build a validace.

## Povinný post-deployment retest

```bash
curl -sS -I --max-redirs 0 https://www.halatao.cz/
curl -sS -I --max-redirs 0 https://www.halatao.cz/cs/
curl -sS -I --max-redirs 0 https://www.halatao.cz/en/
curl -sS -I --max-redirs 0 https://www.halatao.cz/sitemap.xml
curl -sS -I --max-redirs 0 https://www.halatao.cz/cs/priklady/workflow-poptavka-nabidka-realizace/
curl -sS -I --max-redirs 0 https://www.halatao.cz/neexistujici-seo-test-url/
curl -sS -I --max-redirs 0 http://halatao.cz/robots.txt
curl -sS -D - -o /dev/null --max-redirs 0 http://halatao.cz/robots.txt
curl -sS -I --max-redirs 0 http://www.halatao.cz/robots.txt
curl -sS -D - -o /dev/null --max-redirs 0 http://www.halatao.cz/robots.txt
curl -sS -I --max-redirs 0 https://halatao.cz/robots.txt
curl -sS -D - -o /dev/null --max-redirs 0 https://halatao.cz/robots.txt
curl -sS -I --max-redirs 0 https://www.halatao.cz/robots.txt
curl -sS -D - -o /dev/null --max-redirs 0 https://www.halatao.cz/robots.txt
```

Očekávání:

- root: 308, `Location: https://www.halatao.cz/cs/`,
- `/cs/` a `/en/`: 200,
- sitemap: 200 a XML content type,
- merge loser: 308 přímo na winner,
- neznámá URL: 404,
- GET i HEAD všech tří nekanonických `/robots.txt`: 308 přímo na
  `https://www.halatao.cz/robots.txt`,
- GET i HEAD canonical `/robots.txt`: 200 bez `Location`.

Následně spustit úplný manifest test:

```bash
npx tsx scripts/test-edge-redirects.ts --run
```

Bez skutečného deploye a tohoto HTTP retestu se produkční stav neoznačuje jako
PASS.

## Rollback

Nejrychlejší rollback je v Cloudflare vrátit předchozí známou Worker deployment
verzi. Custom Domains i DNS zůstávají beze změny. Po rollbacku ověřit root,
`/cs/`, `/en/`, sitemap, jeden asset, jeden merge source a neznámou 404.

Pokud předchozí verze obsahovala self-fetch fallback, nelze ji považovat za
bezpečný dlouhodobý rollback; použít poslední verzi, která zároveň servírovala
Static Assets. Návrat ke GitHub Pages originu není součástí této architektury.

## Scope

Tato změna nemění obsah, title, description, canonical, hreflang, sitemap ani
jiné P2 SEO prvky. DNS, Custom Domains a produkční deployment se nemění
automaticky.
