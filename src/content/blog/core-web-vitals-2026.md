---
title: "Core Web Vitals in 2026: wat Google en AI-crawlers echt belonen"
description: "LCP, INP en CLS zijn geëvolueerd. Wat betekenen ze in 2026, hoe meet je ze, en welke scores zijn echt goed voor SEO en AI-visibility?"
excerpt: "Core Web Vitals 2026 zijn strenger dan 2023. Wie oude drempels hanteert, blijft achter — zowel bij Google als bij AI-zoekmachines."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/core-web-vitals-2026.png"
  alt: "Core Web Vitals meten voor moderne websites"
category: "websites"
tags:
  - "Core Web Vitals"
  - "performance"
  - "SEO"
  - "LCP"
  - "INP"
relatedPosts:
  - "wat-maakt-website-ai-first"
  - "seo-begint-bij-je-website-technische-basis"
seo:
  metaTitle: "Core Web Vitals 2026: complete gids | Agensea"
  metaDescription: "Hoe scoor je op LCP, INP en CLS in 2026? Concrete doelwaardes, meetmethodes en fixes voor performance-optimalisatie."
draft: false
---


Core Web Vitals zijn een ranking-factor geworden in 2020. Sindsdien is de lat omhoog gegaan. FID werd vervangen door INP (maart 2024). De drempels van "goed" zijn in 2026 aangescherpt. En AI-crawlers hebben een eigen oordeel over performance.

Deze post: de huidige stand, met concrete targets en meetmethodes.

## De drie metrics in 2026

**LCP (Largest Contentful Paint)** — hoe snel het grootste visuele element (vaak hero-afbeelding of tekst-blok) zichtbaar is.

**INP (Interaction to Next Paint)** — hoe snel je site reageert op user-acties. Vervangt FID sinds maart 2024.

**CLS (Cumulative Layout Shift)** — hoeveel elementen verspringen tijdens het laden. Hogere CLS = verwarrender.

## De doelwaardes

| Metric | Goed | Verbetering nodig | Slecht |
|---|---|---|---|
| **LCP** | < 2.5s | 2.5–4.0s | > 4.0s |
| **INP** | < 200ms | 200–500ms | > 500ms |
| **CLS** | < 0.1 | 0.1–0.25 | > 0.25 |

**Voor echt goed (AI-first niveau):** LCP < 1.5s, INP < 100ms, CLS < 0.05.

Die extra marge maakt verschil op AI-crawler gedrag. Perplexity en ChatGPT Search indexeren pagina's meer agressief die snel binnenkomen.

## Waarom AI-crawlers nog strenger zijn dan Google

Drie redenen:

**1. Ze werken met timeouts.** Traditional zoekmachines crawlen en wachten tot rendering klaar is. AI-crawlers hebben minder geduld — soms seconden, soms milliseconden. Traag = niet geïndexeerd.

**2. Ze skimmen, niet diep lezen.** Een LLM leest niet je hele HTML. Hij pakt de eerste paar chunks. Als je hero-tekst 3 seconden duurt om te renderen, heeft hij die niet gezien.

**3. Ze prefereren scan-vriendelijke content.** Snelheid correleert met scan-vriendelijke structuur. Sites die traag laden zijn vaak ook rommelig opgebouwd.

## Hoe meet je ze?

### Field data (echte gebruikers)

- **Google Search Console** → Core Web Vitals rapport. Laat zien wat echte bezoekers ervaren.
- **CrUX (Chrome User Experience Report)** via PageSpeed Insights of CrUX dashboard.
- **Real User Monitoring** in Vercel Analytics, Cloudflare, New Relic — als je iets geavanceerder wil.

### Lab data (gesimuleerd)

- **Lighthouse** (in Chrome DevTools) — quick snapshot.
- **PageSpeed Insights** — combineert lab + field.
- **WebPageTest** — voor diepere analyses.

**Regel:** field data is wat telt voor ranking. Lab data is wat je gebruikt om problemen te debuggen. Beide nodig, niet uitwisselbaar.

## Typische oorzaken per metric

### Slechte LCP (te traag)

1. **Grote onnodige afbeeldingen** — hero-image van 2MB voor een 400px container
2. **Render-blocking resources** — CSS of JS die eerst gedownload moet voordat content verschijnt
3. **Trage hosting** — server die te langzaam reageert
4. **Onnodige web-fonts** — laden van 6 font-families waar er 2 genoeg zijn

**Fixes:**
- Image optimization (WebP, responsive srcset, lazy loading onder de fold)
- Critical CSS inline, rest async
- CDN zoals Cloudflare / Vercel Edge
- Lettertypen met `font-display: swap` en subset

### Slechte INP (traag bij interactie)

1. **Zware JavaScript** die main-thread blokkeert
2. **Third-party scripts** (analytics, chatbots, ads) die veel CPU eten
3. **Ongenodigde React-re-renders** (met name bij complexe apps)

**Fixes:**
- Code-splitting per route
- Debounce/throttle op frequent events
- Web workers voor heavy computation
- Niet-essentiële scripts laden met `loading=lazy` of deferred

### Slechte CLS (layout-shifts)

1. **Afbeeldingen zonder vaste dimensies** — laden schuift de content omlaag
2. **Lettertypen die FOUT/FOIT tonen** — swap veroorzaakt shift
3. **Dynamisch ingevoegde content** (chatbot-widgets, banners) die na render verschijnt

**Fixes:**
- Altijd `width` en `height` op `<img>` tags
- `aspect-ratio` CSS voor videos en iframes
- Placeholders met zelfde dimensies voordat dynamische content laadt
- Fonts preloaden of `font-display: optional`

## De "echte" score: PageSpeed 95+

Veel teams zijn tevreden met PageSpeed 80 of 90. In 2026 is dat te laag voor AI-first. Targets:

- **Performance score**: 95+ op mobile
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

Deze targets zijn haalbaar. Onze eigen site haalt 96+ consistently. Maar het vereist discipline in elke deploy.

## Automatisering en monitoring

Zonder monitoring gaat elke optimalisatie verloren bij de volgende feature-push. Wat wij adviseren:

1. **Lighthouse CI** in je deploy-pipeline. Bij elke PR een performance-score. Degradatie blokkeert merge.
2. **Real User Monitoring** via Vercel Analytics of vergelijkbaar. Laat zien wat echte bezoekers ervaren.
3. **Maandelijkse reviews** van Search Console CWV-rapport.

Zonder die drie sluipt degradatie binnen.

## Wat geen Core Web Vital is maar wel telt

Drie metrics die ranking-invloed hebben buiten Core Web Vitals:

- **TTFB (Time To First Byte)** — hostingkwaliteit, direct zichtbaar voor crawlers
- **Total Blocking Time** — JavaScript-zwaarte, indirect via INP
- **Speed Index** — hoe snel visuele content verschijnt

Moderne stacks (Astro, Next.js App Router) helpen standaard bij deze metrics.

## Verder

- [AI-first websites: complete gids](/gids/ai-first-websites/)
- [SEO begint bij je website technische basis](/kennisbank/seo-begint-bij-je-website-technische-basis/)
- [Waarom een snelle website essentieel is](/kennisbank/waarom-een-snelle-website-essentieel-is/)

Wil je een performance-audit van je site? Bel 06 81 38 36 01 of [vraag een website-scan aan](/offerte?dienst=nieuwe-website).
