---
title: "Schema.org voor AI: welke structured-data markup LLM's echt gebruiken"
description: "Niet alle schema's zijn gelijk. Welke structured-data markup helpt ChatGPT, Perplexity en Gemini je content beter begrijpen, en welke wordt genegeerd?"
excerpt: "Schema.org is oud nieuws voor SEO, maar essentieel voor GEO. Welke types LLM's echt verwerken, en welke alleen lucht verplaatsen."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/schema-org-voor-ai.png"
  alt: "Illustratie van structured data dat door een AI-model wordt gelezen"
category: "seo"
tags:
  - "schema.org"
  - "structured data"
  - "GEO"
  - "JSON-LD"
  - "technische SEO"
relatedPosts:
  - "aeo-uitgelegd"
  - "seo-begint-bij-je-website-technische-basis"
seo:
  metaTitle: "Schema.org voor AI-zoekmachines: welke markup werkt · Agensea"
  metaDescription: "Praktische gids voor structured data in het AI-tijdperk. Welke schema-types LLM's wél gebruiken en welke niet."
draft: false
---


Schema.org bestaat al sinds 2011. Het is de vocabulair die Google, Bing en andere zoekmachines gebruiken om gestructureerd te begrijpen wat er op een pagina staat. Een `Product` is een product, een `Person` een persoon, een `Recipe` een recept.

Tot zover niets nieuws. Maar in het AI-tijdperk verandert er iets belangrijks: **LLM's parseren structured data anders dan klassieke crawlers**. Sommige schema's helpen ze enorm. Andere worden volledig genegeerd. En een paar doen actief schade door clutter.

In deze post: welke schema's anno 2026 echt waarde leveren voor AI-zoekmachines — en welke je gerust kunt laten staan of juist weghalen.

## Waarom LLM's structured data waarderen

LLM's hebben beperkte context. Ze lezen niet een hele pagina — ze pakken chunks. Structured data is een **compacte samenvatting** van wat er op een pagina staat, in een formaat dat makkelijk te parsen is.

Waar een klassieke crawler langzaam door HTML waadt, kan een LLM in één JSON-LD blok zien:
- Wie de auteur is (`author`)
- Wanneer gepubliceerd (`datePublished`)
- Over welk onderwerp (`about`)
- Welke entiteit het betreft (`mentions` met Wikidata IDs)

Dat is goud voor een model dat moet beslissen of jouw pagina citeerbaar is.

## De essentiële set (elke pagina)

Beschouw dit als de minimum viable schema-set voor elke site:

**1. `Organization` (op je homepage, en via `@id` referentie elders)**
Identificeert wie er achter de site zit. Voor E-E-A-T cruciaal.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://agensea.nl/#organization",
  "name": "Agensea",
  "url": "https://agensea.nl",
  "logo": "https://agensea.nl/brand/agensea-logo-512.png",
  "sameAs": ["https://www.linkedin.com/company/agensea"]
}
```

**2. `WebSite` (homepage)**
Geeft zoekfunctie en site-identiteit. Optioneel `potentialAction` voor site-search.

**3. `BreadcrumbList` (elke sub-pagina)**
Hiërarchie van je site. Helpt modellen te begrijpen waar een pagina in de structuur hoort.

**4. `Article` of `BlogPosting` (blogs, gidsen)**
Met `headline`, `datePublished`, `author`, `image`. Dit is waar de meeste sites het laten liggen — alleen `headline` invullen is niet genoeg.

## De GEO-verstrekkers

Deze vier schema-types geven aantoonbaar meer signaal aan AI-modellen:

### `FAQPage`

Perfect voor antwoord-engines. Een FAQ-sectie met `FAQPage` schema wordt door zowel Google als ChatGPT/Perplexity bovenproportioneel vaak gebruikt voor directe antwoorden.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Wat kost een website in 2026?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Een professionele zakelijke website kost gemiddeld €3.000 tot €15.000..."
    }
  }]
}
```

### `HowTo`

Voor stap-voor-stap instructies. AI-modellen pakken vaak letterlijke HowTo-structures over bij "hoe doe ik X"-queries.

### `Person` (voor auteurs)

Het koppelen van een auteur aan een `Person` schema met `jobTitle`, `worksFor`, `sameAs` (naar LinkedIn of ORCID) versterkt je E-E-A-T signaal drastisch. Een auteur die "ergens echt iemand is" wint citaten.

### `Product` + `Offer` + `AggregateRating`

Voor webshops: de combinatie van deze drie geeft AI-shoppingassistenten (ChatGPT Shopping, Perplexity Shopping) alles wat ze nodig hebben.

## De `mentions` en `about` velden — onderschat

Een vaak overgeslagen eigenschap is `mentions` (en `about`) met expliciete entity-referenties:

```json
{
  "@type": "Article",
  "headline": "GEO uitgelegd",
  "mentions": [
    { "@type": "Thing", "name": "Perplexity AI", "sameAs": "https://www.wikidata.org/wiki/Q115559299" },
    { "@type": "Thing", "name": "ChatGPT", "sameAs": "https://www.wikidata.org/wiki/Q115564437" }
  ]
}
```

Door naar Wikidata te linken, koppel je je content aan een **gedefinieerde entiteit** in het web-wide knowledge graph. LLM's gebruiken deze signalen om hun eigen interne entity-representaties te updaten. Concreet: je kans om bij "Perplexity" of "ChatGPT"-queries te worden aangehaald stijgt.

## Wat wordt genegeerd?

Niet elk schema is waardevol. Deze worden grotendeels genegeerd:

- **`AggregateRating` zonder verifieerbare reviews** — LLM's (en Google) wantrouwen 5-sterren-uit-het-niets. Fake sociale bewijsvoering wordt meer afgestraft dan beloond.
- **`Event` voor evergreen pagina's** — misbruikt voor ranking-boost, wordt inmiddels gefilterd.
- **`Review` op commerciële landings** — valt onder de review-policies van Google en veel LLM's, die zelfgeschreven reviews meestal negeren.
- **`SoftwareApplication` op pagina's die geen software zijn** — genegeerd of bestraft.

## Hoe voeg je het toe in Astro?

Als je site in Astro draait (zoals agensea.nl), dan heb je slot-based injection. In je Layout:

```astro
---
const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  ...
};
---
<script slot="head" type="application/ld+json" set:html={JSON.stringify(schema)} />
```

Voor WordPress: plugins als Rank Math of Yoast kunnen het, maar check de output. Veel plugins stoppen half werk erin (bv. `Article` zonder `author` resolved naar `Person`). Liever handmatig via een template snippet dan via een plugin die schrikt voor details.

## Validatie

Na implementatie: altijd valideren.

- **Google Rich Results Test**: voor types die Google expliciet ondersteunt
- **Schema.org validator** (validator.schema.org): voor generieke correctness
- **LLM-sanity-check**: plak je JSON-LD in ChatGPT en vraag "wat begrijp je hieruit". Dat is de beste proxy voor wat een model ermee kan.

## Valkuilen

**Dubbele schema's op dezelfde pagina.** Veel SEO-plugins injecteren `Article` én `BlogPosting` én `WebPage` voor dezelfde content. Dat verwart meer dan het helpt. Eén `BlogPosting` is genoeg.

**Verouderde verplichte velden.** Google's vereisten voor rich results veranderen. Check jaarlijks of je `BlogPosting`, `Product`, `Recipe` nog compleet is.

**Schema dat niet bij de pagina-inhoud past.** Een `Recipe` schema op een pagina zonder recept is niet slimmer. Modellen vergelijken schema's tegen de zichtbare tekst.

## Quick start voor een bureau-site

Plak deze vijf op je site, elk op de juiste pagina:

1. **Homepage**: `Organization` + `WebSite`
2. **Over ons**: `AboutPage` + `Person` per teamlid
3. **Blogposts**: `BlogPosting` met volle `author` Person
4. **Diensten**: `Service` met `provider` referentie naar je Organization
5. **FAQ/veelgestelde vragen**: `FAQPage`

Dekking-ratio tegenover implementatie-kost is zeer gunstig.

## Nog meer fundament?

- [llms.txt implementeren](/kennisbank/llms-txt-implementeren/)
- [AI-crawlers toelaten of blokkeren](/kennisbank/ai-crawlers-robots-txt/)
- [Complete GEO-gids](/gids/geo/)

Wil je een schema-audit van je site? Bel 06 81 38 36 01 of [plan een gesprek](/contact/).
