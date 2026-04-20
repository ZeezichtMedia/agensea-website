---
title: "Headless CMS of WordPress: welke kies je voor je content-team? [2026]"
description: "WordPress is vertrouwd maar performance-beperkt. Headless CMS is modern maar vraagt meer van je team. Concrete beslishulp voor mkb."
excerpt: "De keuze tussen headless en traditioneel CMS gaat niet over techniek, maar over je content-team. Wie schrijft, wie publiceert, wie onderhoudt?"
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/headless-cms-vs-wordpress.png"
  alt: "Headless CMS vs WordPress vergelijking voor content teams"
category: "websites"
tags:
  - "CMS"
  - "WordPress"
  - "headless"
  - "content"
  - "Sanity"
relatedPosts:
  - "wat-maakt-website-ai-first"
  - "astro-vs-nextjs-vs-sveltekit"
seo:
  metaTitle: "Headless CMS of WordPress: de keuze | Agensea"
  metaDescription: "Praktische beslishulp tussen headless CMS en WordPress voor mkb. Focus op content-team, niet alleen techniek."
draft: false
---


"WordPress of headless?" is een tech-vraag die vaak beslist wordt door tech-mensen. Dat is jammer, want de beste beslissing komt uit je **content-team**. Wie schrijft er? Wie publiceert? Wie onderhoudt de structuur? Dat bepaalt welke tool werkt.

Deze post: hoe kies je CMS vanuit het team-perspectief, niet vanuit de developer-perspectief.

## De twee werelden

**WordPress:** bekend, laagdrempelig, volledige backend + frontend in één. Editor bewerkt content, ziet direct resultaat.

**Headless CMS:** content-backend zonder frontend. Content komt via API in een aparte frontend (Astro, Next.js, etc.). Voorbeelden: Sanity, Strapi, Payload, Contentful, Directus.

## De drie vragen die het beslissen

### Vraag 1: Wie schrijft er?

- **Alleen ontwikkelaars of tech-savvy editors?** → Headless CMS werkt prima, of zelfs Git-based markdown
- **Een mix van marketeers, communicators, misschien externe agencies?** → Headless CMS met goede editor (Sanity, Payload, Strapi) is OK
- **Mensen die "niet zo techy" zijn?** → WordPress of Headless met heel goede editor-configuratie

WordPress wint op laagste drempel voor niet-technische editors. Headless heeft hier catching-up gedaan — Sanity en Payload zijn echt editor-vriendelijk — maar nog steeds iets meer denk-werk.

### Vraag 2: Hoe vaak wordt er gepubliceerd?

- **Dagelijks of meerdere keren per week** → editor-ervaring weegt zwaar. Sanity, Payload of WordPress zijn hier goed.
- **Wekelijks tot maandelijks** → elke serieuze CMS werkt, keuze op andere criteria.
- **Zelden (paar keer per jaar)** → Git-based markdown is overwogen. Tech-team kan direct in repo werken.

### Vraag 3: Hoe ambitieus zijn je performance/SEO/GEO-doelen?

- **Ambitieus (PageSpeed 95+, AI-first)** → Headless CMS met Astro/Next.js frontend. WordPress haalt dit zelden zonder enorm tuning.
- **Standaard (PageSpeed 80+, klassieke SEO)** → WordPress kan dit met goede setup (goede hosting, Rocket Cache, image optimization).
- **Basic** → elk CMS werkt.

## De drie scenario's in de praktijk

### Scenario 1: Bureau of B2B-site (jullie)

- Content-team: 2-3 schrijvers, tech-comfortabel
- Publicatie-frequentie: 1-2 posts per week
- Ambitie: AI-first, snelle site, SEO-leiderschap

**Keuze: Headless CMS (bv. Sanity) + Astro**

Je krijgt een mooie schrijf-ervaring, supersnelle site, en full control over SEO/GEO. Dit is wat wij zelf gebruiken.

### Scenario 2: E-commerce (kledingwebshop bv.)

- Content-team: product-beheerder, marketing, externe fotografen
- Publicatie-frequentie: dagelijks nieuwe producten en campagnes
- Ambitie: performance + flexibele campagnes + dynamische data

**Keuze: Headless CMS (Sanity, Contentful) + Next.js**

WordPress met WooCommerce is mogelijk maar voor serieuze volumes wordt headless professioneler.

### Scenario 3: Lokaal mkb-bureau met simpele site

- Content-team: 1 persoon, niet-technisch, doet ook van alles anders
- Publicatie-frequentie: 1x per maand een blog, rest bijwerken
- Ambitie: normaal, degelijk

**Keuze: WordPress (met goede hosting en cache)**

Headless is hier overkill. De extra complexity rechtvaardigt niet de winst.

## Vergelijking op details

| | WordPress | Headless CMS |
|---|---|---|
| **Laagdrempelig voor niet-tech** | Ja | Goede headless: ja |
| **Performance out-of-the-box** | Matig (plugins, theme-bloat) | Uitstekend |
| **Flexibiliteit frontend** | Beperkt | Onbeperkt |
| **Security** | Plugin-gevoelig | Minder plugins = minder aanvalsoppervlak |
| **Kosten hosting** | €5-30/mnd | €0-50/mnd |
| **Kosten CMS** | Gratis of €20-200/mnd (managed) | €0-200/mnd afhankelijk van plan |
| **Ecosysteem** | Enorm (plugins) | Kleiner, maar groeiend |
| **Vendor lock-in** | Laag (open source) | Middel-laag (API-based, uitwisselbaar) |
| **AI-first readiness** | Lastig | Default |

## De populaire headless opties

**Sanity** — best known, excellent editor (Studio), gratis voor kleine teams. Default aanbeveling voor content-teams die willen schrijven in een echt mooie interface.

**Payload CMS** — self-hosted, open-source, code-first. Populair bij dev-teams die vol controle willen.

**Strapi** — open-source, self-hostable. Solide, populair in enterprise-setups.

**Contentful** — SaaS, enterprise-grade, duurder. Voor grotere organisaties.

**Directus** — SQL-based, mooi als je al een database hebt.

## Wat als ik nu op WordPress zit?

Migratie naar headless is haalbaar maar niet-triviaal. Belangrijke vragen:

- **Hoeveel content?** Onder 200 pagina's makkelijker.
- **Hoeveel integraties?** WooCommerce, MemberPress, forms van plugins — allemaal migreren.
- **Hoeveel URL's behouden?** Elk URL-redirect is werk.

Realistisch: WordPress → Astro + headless CMS migratie voor een mkb-site kost €8.000–€25.000 afhankelijk van complexiteit.

Uitgewerkt: [WordPress naar Astro migreren](/kennisbank/wordpress-naar-astro-migreren/).

## Het grijze gebied: Page Builders

Wat met Elementor, Divi, Bricks? Technisch WordPress, maar veel ecommerce- en marketing-sites draaien erop.

Eerlijk: deze tools maken WordPress nóg trager. Ze zijn er voor snelle site-bouw zonder code, wat goed is voor sommige use-cases. Voor AI-first ambities zijn ze zelden een goede keuze.

## Beslisboom

Loop langs:

1. **Moet dev-team de site ooit kunnen onderhouden zonder CMS-expert?** Ja → headless. Nee → keuze op andere criteria.
2. **Heb je PageSpeed 95+ nodig?** Ja → headless. Nee → WordPress mag.
3. **Publiceer je content meer dan 2x/week?** Ja → editor-ervaring weegt zwaar. Sanity of WordPress.
4. **Ben je OK met €50-200/mnd voor CMS?** Ja → Sanity Pro / Contentful. Nee → WordPress / Payload self-hosted.
5. **Is AI-first een prioriteit?** Ja → headless (WordPress haalt het zelden). Nee → alle opties open.

## Verder

- [AI-first websites: complete gids](/gids/ai-first-websites/)
- [Astro vs Next.js vs SvelteKit](/kennisbank/astro-vs-nextjs-vs-sveltekit/)
- [WordPress naar Astro migreren](/kennisbank/wordpress-naar-astro-migreren/)

Hulp bij CMS-keuze voor jouw team? Bel 06 81 38 36 01 of [plan een gesprek](/contact/).
