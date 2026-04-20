---
title: "WordPress naar Astro migreren: 7-stappen plan [2026]"
description: "Migreren van WordPress naar een moderne stack (Astro, Next.js) is haalbaar zonder SEO te verliezen. De 7-stappen methodiek die wij gebruiken."
excerpt: "Migratie van WordPress hoeft geen ramp te zijn. Stapsgewijs met URL-mapping, content-overzet en performance-upgrade — zonder verlies van rankings."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/wordpress-naar-astro-migreren.png"
  alt: "Stappenplan WordPress naar Astro migratie"
category: "websites"
tags:
  - "migratie"
  - "WordPress"
  - "Astro"
  - "SEO"
  - "website bouw"
relatedPosts:
  - "astro-vs-nextjs-vs-sveltekit"
  - "headless-cms-vs-wordpress"
seo:
  metaTitle: "WordPress naar Astro migreren: 7-stappen plan | Agensea"
  metaDescription: "Praktisch 7-stappen plan voor WordPress naar Astro migratie met behoud van SEO en rankings."
draft: false
---


"We willen van WordPress af maar hoe doen we dat zonder onze Google-rankings te verliezen?" Terechte vraag. Een slordige migratie kan maanden aan SEO-werk wegvagen. Een goed uitgevoerde migratie verbetert juist je rankings door betere performance.

Deze post: de methodiek die wij hanteren voor WordPress-naar-Astro migraties, in zeven concrete stappen.

## Waarom wil je migreren?

Voor we beginnen: check of migreren echt nodig is. Goede redenen:

✅ PageSpeed onder 70 ondanks optimalisatie-pogingen
✅ Plugins die kwetsbaarheden introduceren of stoppen met support
✅ Content-team die vast zit in WordPress editor (Gutenberg-moeheid)
✅ Ambitie voor AI-first (smart search, personalisatie, headless)
✅ Schaling-probleem (site trekt meer bezoekers dan hosting aan kan)

Slechte redenen:

❌ "Headless is nu cool"
❌ "Onze dev vindt WordPress oubollig"
❌ "We zagen een mooie Astro-site bij een ander bureau"

Migreer omdat je een probleem oplost, niet omdat een framework trendy is.

## De 7 stappen

### Stap 1: Content-audit

Voordat je iets verplaatst: inventariseer wat je hebt.

**Acties:**
- Export lijst van alle gepubliceerde pagina's en posts (via WP-plugin of XML-export)
- Categoriseer: blijft / herschrijven / weg
- Identificeer top-performers (via Google Analytics — laatste 12 mnd top 50 URL's)
- Check op media: afbeeldingen, PDF's, videos die mee moeten

**Output:** Google Sheet met alle URL's + status.

**Typische tijd:** 2-5 dagen voor mkb-site.

### Stap 2: URL-mapping + redirects

Voor elke URL die niet 1-op-1 meegaat: map naar nieuwe URL.

**Acties:**
- Excel met: Oude URL → Nieuwe URL → Type redirect (301 in 99% van gevallen)
- Handhaaf waar mogelijk dezelfde URL-structuur
- Bij categorie-veranderingen: zorg dat oude URL's redirecten, niet 404 worden

**Voorbeelden:**
- `https://site.nl/?p=123` → `https://site.nl/kennisbank/blog-titel/`
- `https://site.nl/category/seo/` → `https://site.nl/kennisbank/categorie/seo/`
- `https://site.nl/2019/01/oude-post/` → `https://site.nl/kennisbank/oude-post/`

**Belangrijk:** 301 (permanent) behouden link-equity. 302 (temporary) doet dat niet. Voor migratie altijd 301.

**Typische tijd:** 1-2 dagen afhankelijk van URL-volume.

### Stap 3: Technische stack opzetten

Bouw de nieuwe site in parallel aan de oude. Oude site blijft live.

**Acties:**
- Astro-project initialiseren
- Headless CMS kiezen (Sanity, Payload) of git-based markdown
- Hosting inrichten (Vercel, Netlify)
- Basis-theme + components bouwen
- Fundament schema.org markup

**Best practice:** domain-check-variant setup (preview.jouwsite.nl) voor testing.

**Typische tijd:** 2-4 weken.

### Stap 4: Content migreren

Nu content overzetten uit WordPress naar nieuwe stack.

**Acties:**
- Export WordPress content (via WP REST API of XML)
- Converteer naar nieuw formaat (markdown of CMS-compatible JSON)
- Afbeeldingen downloaden, opnieuw optimaliseren (WebP, srcset)
- Interne links updaten naar nieuwe URL-structuur
- Schema markup aanvullen (Article, Person voor auteurs, etc.)

**Tip:** bij grote content-volumes, script de migratie. Je developer kan een WordPress-naar-markdown converter schrijven in één dag werk.

**Typische tijd:** 1-3 weken afhankelijk van volume.

### Stap 5: QA op preview-site

Voor live gaan: testen.

**Check-list:**
- [ ] Alle pagina's renderen correct
- [ ] Alle interne links werken
- [ ] Images loaded en correct geoptimaliseerd
- [ ] Schema.org markup valideert (schema validator)
- [ ] PageSpeed score 95+ op kernpagina's
- [ ] Mobile responsive
- [ ] Formulieren werken (vaak de zwakste plek)
- [ ] 404-pagina + search ingericht
- [ ] Sitemap genereert correct
- [ ] robots.txt aanwezig

**Typische tijd:** 3-5 dagen.

### Stap 6: Cut-over

De spannende dag. Oude site wordt vervangen door nieuwe.

**Acties:**
- DNS-TTL verlagen 24u voor cut-over (1 uur ipv 24u)
- Cut-over: DNS omwijzen naar nieuwe hosting
- Redirects activeren
- 14 dagen intensief monitoren (404-rapporten, Search Console)
- Sitemap indienen via Google Search Console

**Best practice:** cut-over op dinsdag of woensdag. Niet vrijdag — als er iets misgaat wil je niet in het weekend hoeven fixen.

**Typische tijd:** 1 dag voor cut-over, 2 weken nauw monitoring.

### Stap 7: Post-migratie SEO-herstel

Na cut-over gaat rankings meestal 1-3 weken licht dippen voordat ze herstellen. Wat je in die periode doet maakt verschil.

**Acties:**
- Google Search Console: check indexatie-rapport, fix 404's die binnenkomen
- Nieuwe URL's laten indexeren (Submit URL feature in GSC)
- Monitor Core Web Vitals: de verbetering moet zichtbaar worden in 30-60 dagen
- Check analytics-verschillen: soms reset je measurement-setup
- Eventuele 404-fixes via extra redirects

**Typische tijd:** doorlopend 4-8 weken.

## Wat vaak misgaat

Uit onze eigen ervaring de drie grootste migratie-fouten:

**Fout 1: URL's veranderen zonder redirects.**
De klassieker. "We hebben de URL's gemoderniseerd" maar geen 301 ingericht. Drie maanden later rankings gehalveerd.

**Fout 2: Content-structuur veranderen tijdens migratie.**
Tegelijk migreren én herschrijven is een recept voor chaos. Eerst migreren zoals is, dan later optimaliseren.

**Fout 3: Robots.txt kopiëren zonder check.**
Oude robots.txt met `Disallow: /wp-admin/` op nieuwe stack is zinloos. Nieuwe robots.txt moet passen bij nieuwe URL-structuur.

## Hoelang duurt dit allemaal?

Voor een standaard mkb-site (50-150 pagina's, 100-500 posts):

- **Quick migration:** 4-6 weken, €8.000-15.000
- **Volle migratie met redesign:** 8-14 weken, €15.000-35.000
- **Met headless CMS setup:** extra 2-4 weken

Meer content of complexere integraties (WooCommerce, membership) duurt langer.

## Do's en don'ts

**Do:**
- Test op preview-domein voordat je live gaat
- Houd oude site minstens 3 maanden beschikbaar (als fallback)
- Monitor Search Console actief in eerste 2-3 maanden
- Documenteer je keuzes voor latere teams

**Don't:**
- Don't migrate during peak season
- Don't change design tijdens migratie
- Don't skip URL-mapping stap
- Don't vertrouw op één developer zonder backup

## Verder

- [AI-first websites: complete gids](/gids/ai-first-websites/)
- [Astro vs Next.js vs SvelteKit](/kennisbank/astro-vs-nextjs-vs-sveltekit/)
- [Headless CMS of WordPress?](/kennisbank/headless-cms-vs-wordpress/)

Begeleiding bij jouw migratie? Bel 06 81 38 36 01 of [plan een gesprek](/contact/).
