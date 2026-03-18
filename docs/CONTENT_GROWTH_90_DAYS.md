# Content Growth: 90 Days

Tento dokument je interní playbook pro další iterace webu po spuštění.

Nepracuje s API ani backendem. Počítá s ručním exportem dat z Google Search Console a s repo-native úpravami obsahu.

## Co sledovat v GSC

Sleduj vždy po locale a po page:

- impressions
- clicks
- CTR
- average position
- které query family se objevují kolem stejné stránky
- jestli query odpovídá intentu stránky

Nedívej se jen na jednotlivé query. Hledej vzory:

- jedna money page sbírá víc variant stejného intentu
- jedna supporting page sbírá termíny, které by měly patřit service page
- dvě stránky sbírají stejný cluster
- query roste, ale klik je málo
- klik roste, ale traffic se nepropisuje do inquiry flow

## Jak poznat winners

Winner je stránka, která:

- sbírá relevantní business-intent impressions
- drží nebo zlepšuje CTR
- dobře vede na další komerční krok
- nepřitahuje hlavně broad generic dev traffic

Typické winners:

- homepage
- hlavní service pages
- takeover/problem pages
- top comparison pages
- guide pages kolem scope, takeoveru a pricingu

## Jak poznat weak pages

Weak page poznáš takto:

- roste impressions, ale CTR zůstává slabé
- query neodpovídají intentu stránky
- stránka sbírá broad traffic bez commercial fitu
- query cluster se překrývá s jinou silnější stránkou
- stránka nepomáhá ani jako assist page do money pages

## Jak poznat CTR problém

CTR problém je typicky:

- vysoké impressions
- pozice už není úplně špatná
- ale title/meta/H1 a intro neodpovídají přesně tomu, co query hledá

První zásahy:

- přepiš title
- přepiš meta description
- zpřesni H1
- udělej answer-first první odstavec
- přidej FAQ podle skutečných query formulací

## Jak poznat mismatch mezi query a page intentem

Mismatch je, když:

- service page sbírá spíš problem intent
- guide page sbírá service intent, ale nevede do služby
- technology page sbírá broad dev traffic bez buyer signálu
- inquiry page se vůbec neobjevuje na dotazy, které by k ní měly směřovat nepřímo přes money pages

Co udělat:

- pokud stránka clusteru patří a jen je slabě napsaná: rewrite
- pokud stránka cluster částečně sedí: expand
- pokud cluster patří jinam: interní linking + možný merge
- pokud cluster nemá dobrou cílovou stránku: new page

## Kdy přepsat title/meta

Přepiš title/meta když:

- impressions rostou, ale CTR ne
- query wording je už jasný
- stránka má správný intent, ale snippet ho neprodává

Nepřepisuj title/meta jen kvůli pocitu. Vždycky hledej jasný pattern:

- opakující se termín
- opakující se problém
- opakující se rozhodovací fráze

## Kdy přidat FAQ

FAQ přidávej když:

- query family se opakuje v podobných formulacích
- uživatelé hledají hranice fitu
- stránka potřebuje víc answer-first bloků bez zakládání nové URL

Typicky:

- pricing
- takeover
- role a scope
- SaaS vs custom
- automation discovery

## Kdy rozšířit page content

Rozšiřuj stránku když:

- cluster je zjevný
- současná stránka je správné místo
- ale nestačí depth

Rozšíření typicky znamená:

- nový supporting section
- proof-oriented blok
- fit / not-fit rozšíření
- FAQ
- lepší internal links
- lepší CTA wording

## Kdy vytvořit novou stránku

Novou stránku vytvoř až když:

- query cluster je opakovaný
- má business fit
- nedá se čistě obsloužit existující silnou stránkou
- nová URL nebude kanibalizovat hlavní commercial page

Nezakládej novou stránku jen proto, že existuje query. Musí dávat smysl i v obchodní architektuře webu.

## Kdy sloučit stránky

Sloučení zvaž když:

- dvě stránky cílí prakticky na stejný cluster
- jedna je zjevně silnější
- druhá nepřináší vlastní conversion roli
- overlap vytváří nejasný page map

Nejdřív zkontroluj:

- interní odkazy
- query overlap
- assist roli stránky
- locale rozdíly

## Kdy použít noindex

Noindex je až poslední krok.

Použij ho když:

- stránka je broad
- slabě konvertuje
- nepomáhá ani jako supporting page
- nepřináší vlastní cluster
- překrývá se se silnější URL

Noindex nepoužívej na:

- money pages
- silné supporting pages
- stránky, které dobře fungují jako assist do service/inquiry flow

## CZ vs EN pravidla

### CZ

CZ je primární growth priority.

V CZ může růst hlavně:

- problem coverage
- use-case coverage
- practical guides
- templates/checklists
- buying-stage comparisons

### EN

EN musí zůstat selektivní a užší.

Nové EN pages mají vznikat jen když:

- query jasně sedí na project delivery
- jde o takeover / internal tool / automation / contract support
- nebo jde o užitečný premium supporting page pro existující money cluster

Nevytvářej broad EN obsah typu generic frontend/dev education.

## 90denní režim

### Dny 1-30

Fokus:

- money pages
- title/meta/H1 tuning
- intro a CTA
- FAQ podle query intentu
- interní linking

Checklist:

- homepage
- hlavní services
- top problem pages
- top comparison
- inquiry page

### Dny 31-60

Fokus:

- rozšíření winners
- supporting sections
- nové problem/comparison/guide pages podle clusterů
- pruning slabých stránek

Checklist:

- expanduj jen pages, které už mají signal
- nové stránky zakládej po clusteru, ne po jednotlivých query
- hlídej overlap

### Dny 61-90

Fokus:

- consolidation
- merge / noindex review
- posílení hubů
- rozšíření utility assets
- posílení high-performing clusters

Checklist:

- zkontroluj overlap
- zkontroluj assist role
- posil top hubs
- nech silné cluster winners růst do hloubky

## Praktický pracovní postup po exportu z GSC

1. Vyexportuj query + page data po locale.
2. Rozděl queries do clusterů pomocí `resolveQueryCluster`.
3. U každé query nebo page rozhodni přes `mapQueryToPage`, jestli:
   - rewrite
   - expand
   - create
   - merge
   - noindex review
4. Zapiš rozhodnutí do audit notes.
5. Každých 30 dní udělej nový pass.

## Co nedělat

- nechytat generic SEO traffic jen kvůli objemu
- nerozbít positioning směrem k jobs / recruiters
- nedělat EN copy broad a generic
- nezakládat nové URL bez role v commercial flow
- neudržovat slabé overlapping pages jen proto, že už existují
