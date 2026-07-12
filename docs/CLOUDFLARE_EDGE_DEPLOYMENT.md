# Cloudflare edge deployment pro SEO redirecty

## Účel a současný stav

Cloudflare Worker `halatao-seo-redirects` je připravený jako Worker Route před
stávajícím GitHub Pages originem. Nejde o migraci na Cloudflare Pages ani o
Worker Custom Domain. Request bez exact redirect pravidla se předá beze změny
pomocí `fetch(request)` na origin definovaný proxied DNS záznamem.

Produkční DNS ani Worker nebyly při implementaci změněny či nasazeny. Produkční
redirecty proto nelze považovat za aktivní, dokud neprojdou níže uvedené HTTP
testy.

## Artefakty a příkazy

- Zdroj pravdy: `config/seo-redirects.ts`.
- Generátor: `scripts/generate-worker-redirects.ts`.
- Deterministický runtime artefakt: `worker/generated/redirects.json`.
- Kontrola shody: `scripts/validate-worker-redirects.ts`.
- Worker: `worker/src/index.ts`.
- Unit testy: `worker/test/redirect-worker.test.ts`.
- Wrangler konfigurace: `wrangler.jsonc`.
- Ruční deploy workflow: `.github/workflows/cloudflare-worker.yml`.

```bash
npm run validate:redirects
npm run generate:worker-redirects
npm run validate:worker-redirects
npm run test:worker
npm run build:worker
```

Build používá `wrangler deploy --dry-run`; nic nepublikuje. Staging prostředí
používá `<worker-name>-staging.<account>.workers.dev`. Production prostředí
obsahuje Worker Routes `halatao.cz/*` a `www.halatao.cz/*` se `zone_name`
`halatao.cz`. CI používá Node.js 22, který splňuje runtime požadavek aktuálního
Wrangleru.

## 1. Inventura před změnou nameserverů

1. Exportovat kompletní současnou DNS zónu od registrátora/DNS poskytovatele.
2. Zkontrolovat všechny apex, `www` a ostatní subdomény a jejich účel.
3. Zvlášť inventarizovat MX, SPF, DKIM, DMARC, ověřovací TXT, CAA, SRV a
   případné autodiscover či mail subdomény.
4. Zaznamenat současný GitHub Pages custom domain a HTTPS stav.
5. Snížit TTL s dostatečným předstihem pouze tehdy, pokud je to provozně
   schválené.

**Změna nameserverů může ovlivnit dostupnost webu i e-mailu.** Před delegací je
nutné do Cloudflare beze ztráty zkopírovat MX, SPF, DKIM, DMARC a všechny další
DNS záznamy. Mail, ověřovací a jiné ne-HTTP záznamy se nesmějí proxyovat. Před
aktivací je nutné projít všechny existující subdomény, nikoli jen apex a `www`.

## 2. Přidání zóny do Cloudflare

1. Přidat `halatao.cz` do správného Cloudflare účtu.
2. Nechat Cloudflare načíst DNS a ručně porovnat každý záznam s exportem.
3. Zachovat GitHub Pages origin hodnoty:
   - apex A záznamy `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`,
   - `www` CNAME na `halatao.github.io`.
4. V GitHub repository Pages settings ponechat custom domain
   `www.halatao.cz`; nevypínat HTTPS enforcement.
5. Pro první kontrolu lze apex a `www` držet DNS-only. Ostatní záznamy mají
   zůstat v režimu odpovídajícím jejich službě.

## 3. Změna nameserverů

1. U registrátora nastavit přesně dvojici nameserverů přidělenou Cloudflare.
2. Počkat na aktivaci zóny a ověřit DNS z více resolverů.
3. Ověřit web, GitHub Pages custom domain, TLS certifikát a e-mailové DNS.
4. Teprve po této kontrole nastavit apex A a `www` CNAME jako **Proxied**.

Worker Route funguje pouze pro proxied HTTP hosty. Záznamy, které nejsou HTTP
originem, se neproxyují.

## 4. Cloudflare přístup a GitHub secrets

Lokálně se přihlásit interaktivně:

```bash
npx wrangler login
npx wrangler whoami
```

Pro GitHub Actions vytvořit omezený API token s minimálně oprávněními pro
Workers Scripts a Workers Routes v příslušném účtu/zóně. Do GitHub environments
`cloudflare-staging` a `cloudflare-production` vložit:

- `CLOUDFLARE_ACCOUNT_ID`,
- `CLOUDFLARE_API_TOKEN`.

Account ID ani token se nevkládají do repozitáře. Environment
`cloudflare-production` má mít required reviewers. Běžný GitHub Pages workflow
Worker nikdy nenasazuje.

## 5. Staging deployment a test

1. V GitHub Actions ručně spustit `Deploy Cloudflare redirect Worker` s
   environment `staging`; nebo lokálně:

   ```bash
   npm ci
   npm run generate:worker-redirects
   npm run validate:worker-redirects
   npm run test:worker
   npx wrangler deploy --env staging
   ```

2. Ověřit workers.dev preview. Protože preview hostname není canonical host,
   exact path redirecty lze testovat přímo. Origin passthrough je plně
   reprezentativní až přes produkční Worker Route před GitHub Pages.
3. Minimálně ověřit root, šest merge rodin, sedm GSC rodin, lokace,
   automatizaci, známé `/cz/*`, query string a negativní neznámé cesty.
4. Potvrdit, že redirect odpovědi nevolají origin a mají absolutní canonical
   `Location`.

## 6. Production activation

1. Zkontrolovat, že apex a `www` jsou proxied a stále míří na GitHub Pages
   origin.
2. Zkontrolovat Universal SSL a funkční HTTPS pro apex i `www`.
3. Ručně spustit workflow s environment `production` a potvrzením
   `DEPLOY_PRODUCTION`. GitHub environment approval musí schválit oprávněný
   člověk. Alternativní lokální příkaz je:

   ```bash
   npx wrangler deploy --env production
   ```

4. Ověřit v Cloudflare, že jde o dvě **Routes**, nikoli Custom Domains:
   `halatao.cz/*` a `www.halatao.cz/*`.
5. Neodstraňovat statické root ani `/cz` fallbacky v tomto deploymentu. Worker
   je překryje; fallbacky zůstávají bezpečnostní pojistkou při rollbacku.

## 7. Povinný produkční retest

```bash
npx tsx scripts/test-edge-redirects.ts --run
```

Poté ručně nebo automatizovaným auditním skriptem zopakovat:

- root, apex/www a HTTP/HTTPS,
- šest merge loserů ve třech variantách,
- sedm GSC rodin ve třech variantách,
- location a automation legacy URL,
- alespoň deset známých exact `/cz/*` cest,
- reprezentativní `/index.html`,
- query preservation,
- `/robots.txt`, `/sitemap.xml`, `/llms.txt`, známé assety,
- neznámou HTML, `/cz/*` a asset URL.

Každý redirect musí mít první status 301/308, přesný absolutní `Location`,
maximálně jeden hop a finální 200/self-canonical. Neznámé URL musí zůstat
origin 404. Výsledky se zapíší do `docs/SEO_POST_DEPLOYMENT_VALIDATION.md`;
teprve poté lze produkční P0 označit jako dokončené.

## 8. Rollback

Nejrychlejší rollback nevyžaduje změnu GitHub Pages obsahu:

1. **Odpojit production Worker Routes** `halatao.cz/*` a
   `www.halatao.cz/*` nebo nasadit ověřenou passthrough verzi. Tím se ihned
   obnoví původní GitHub Pages chování přes Cloudflare proxy.
2. Pokud problém souvisí s proxy vrstvou, přepnout apex a `www` na DNS-only.
   DNS hodnoty originu ponechat beze změny.
3. Až jako poslední možnost, po ověření kompletní původní DNS zóny, vrátit u
   registrátora původní nameservery.

Po kroku 1 ověřit, že root opět vrací bezpečný 200 noindex fallback, známá
canonical URL vrací 200, `robots.txt`, sitemap a `_next` asset vracejí původní
odpovědi a neznámá URL 404. Po kroku 2 navíc ověřit DNS odpovědi, GitHub Pages
TLS a dostupnost apex/www. Návrat nameserverů je nejpomalejší a nejrizikovější
varianta kvůli propagaci a e-mailovým záznamům.

## Scope potvrzení

Implementace nemění obsahové stránky, canonical, hreflang, sitemap, title,
description ani jiné P2 SEO prvky. Neprovádí DNS změnu, produkční deploy,
commit, push ani PR.
