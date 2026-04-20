---
title: "GEO-tracking: hoe weet je of je in ChatGPT en Perplexity verschijnt? [Tools 2026]"
description: "Tools en methodes om systematisch te meten of jouw merk verschijnt in AI-zoekmachines. Profound, Otterly, Peec AI en gratis DIY-alternatieven vergeleken."
excerpt: "GEO-tracking is nog jong, maar er zijn al bruikbare tools. Van €0 handmatige prompts tot €500/mnd enterprise platforms — we lopen ze langs."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/geo-tracking-meten.png"
  alt: "Dashboard met GEO tracking metrics voor AI-zoekmachine zichtbaarheid"
category: "seo"
tags:
  - "GEO"
  - "tracking"
  - "Profound"
  - "Otterly"
  - "Peec AI"
  - "analytics"
relatedPosts:
  - "chatgpt-vs-perplexity-vs-gemini"
  - "eeat-geo-brand-mentions"
seo:
  metaTitle: "GEO-tracking: tools om AI-visibility te meten | Agensea"
  metaDescription: "De complete review van GEO-tracking tools in 2026. Profound, Otterly, Peec AI plus gratis methodes om te meten of je in ChatGPT verschijnt."
draft: false
---


"We werken aan onze GEO." OK, en waaraan zie je dat het werkt?

Dat is de vraag waar het moeilijk wordt. Voor klassieke SEO heb je Google Search Console, Ahrefs, Semrush — tools die precies laten zien waar je staat, hoe dat beweegt, en wat eraan verandert.

Voor GEO is dat landschap nog niet volwassen. Maar er zijn in 2026 al drie serieuze commerciële tools plus een aantal gratis DIY-methodes. Deze post: wat werkt, wat het kost, en wanneer je wat nodig hebt.

## Wat meet je eigenlijk?

Voordat je tools kiest: wat wil je weten? De drie kernvragen van GEO-tracking:

1. **Verschijn ik?** — Bij welke prompts wordt mijn merk/site genoemd?
2. **Hoe verschijn ik?** — Word ik geciteerd als autoriteit, of alleen terloops genoemd?
3. **Ten opzichte van wie?** — Welke concurrenten domineren welke prompts?

Een goede tool beantwoordt alle drie. Een beperkte tool alleen de eerste.

## Tier 1: handmatige prompts (€0)

De meest onderschatte methode. Stel 20 prompts op die jouw ideale klant zou kunnen stellen. Run ze handmatig in:

- ChatGPT Search (of ChatGPT met web-zoekfunctie aan)
- Perplexity (gratis tier volstaat)
- Google Gemini (in Google app of gemini.google.com)
- Claude (met web search aan)

Noteer per run:
- Werd je merk genoemd? (ja/nee)
- Als ja: context (citaat, link, alleen naam-noemen)
- Welke andere merken werden genoemd?
- Welke bronnen werden geciteerd?

**Voor wie:** iedereen die begint. Doe dit minstens één keer als baseline voordat je geld uitgeeft aan tools.

**Voordeel:** gratis, geeft diepe inzichten, dwingt je om systematisch na te denken over welke prompts relevant zijn.

**Nadeel:** schaalt niet. 20 prompts per engine per week = 80 runs = makkelijk een paar uur.

## Tier 2: DIY scripts (€0–€50 API kosten)

Wie technisch is, kan het automatiseren met de API's van de engines. Perplexity en OpenAI bieden API's die het model plus web-search retourneren. Schrijf een script dat:

1. Door een lijst prompts loopt
2. Elke prompt door elke engine's API stuurt
3. Reguleert of je merknaam in het antwoord voorkomt
4. Sentiment en context logt
5. Resultaten naar een Google Sheet of database wegschrijft

Kost ruwweg €20-50/maand aan API-credits bij 100 prompts × 4 engines × wekelijks.

**Voor wie:** teams met technische capaciteit. Voor een ontwikkelaar is dit een halve dag werk.

## Tier 3: commerciële GEO-tracking tools

Er zijn drie gevestigde spelers in 2026.

### Profound

**Wat het doet:** tracking van merk-vermeldingen in ChatGPT, Perplexity, Gemini en Google AI Overviews. Biedt dashboards met vermeldings-frequentie, sentiment, en concurrentievergelijking.

**Wat je krijgt:** per prompt-category een overzicht van wie er wordt genoemd, met historische trendlijnen.

**Prijs:** vanaf ~$500/maand, enterprise pricing bij grotere volumes.

**Voor wie:** grotere bureaus en brand-teams met budget en een portfolio van merken om te tracken.

### Otterly.AI

**Wat het doet:** vergelijkbaar met Profound maar met lagere drempel en meer aandacht voor MKB. Sterkere focus op Perplexity en ChatGPT.

**Prijs:** vanaf ~€99/maand voor starter tiers.

**Voor wie:** MKB en individuele merken die zelf willen tracken. Goed instappunt.

### Peec AI

**Wat het doet:** GEO-tracking vanuit een Duitse/Europese insteek. Sterke focus op meertalige queries en Europese markten. Dashboard met competitor-benchmark.

**Prijs:** vanaf ~€89/maand.

**Voor wie:** Europese merken die ook in Duits/Frans/Spaans tracken moeten.

### Hoe kies je?

- **Budget <€100/maand:** Otterly of Peec AI
- **Multi-regio / multi-taal:** Peec AI
- **Enterprise / agency use:** Profound
- **Geen budget maar wel willen meten:** Tier 1 of Tier 2

## Server-log analyse (gratis — al heb je de data)

Naast "word ik genoemd in antwoorden" is er een tweede waardevol signaal: **welke AI-crawlers bezoeken mijn site, en welke pagina's**?

Dat zie je in je server-logs. Filter op user-agent:

```
grep -E "GPTBot|OAI-SearchBot|ClaudeBot|PerplexityBot|Google-Extended" access.log
```

Wat je wil weten:
- Bezoekt GPTBot je site wekelijks? (Ja = goed, je wordt geïndexeerd)
- Welke pagina's worden het meest bekeken? (Prioritaire AI-index pages)
- Zijn er 404's? (Fixen, je verliest index-kansen)

Tools als GoAccess, Matomo of een simpel Python-script kunnen dit aggregeren. Cloudflare gebruikers kunnen dit direct in hun analytics zien.

## Eigen rapportage bouwen

Voor wie commerciële tools te duur of te generiek vindt, is een eigen dashboard haalbaar:

**Data-bronnen:**
- Handmatige prompt-resultaten (Google Sheet)
- Server-log AI-crawler stats (scripted export)
- Mentions van je merk via Google Alerts (mailbox-ingestion)

**Visualisatie:**
- Google Looker Studio (gratis), Metabase of simple Notion dashboard
- Per engine: trend-lijn van vermeldingen per week
- Per competitor: share-of-voice tabel

**Cadans:** maandelijks rapport is ruim voldoende. GEO-verschuivingen gaan niet zo snel dat wekelijkse monitoring veel toevoegt.

## Valkuilen bij meten

**1. Prompts die niemand daadwerkelijk stelt.**
Je tracking is alleen zinvol als je prompts reflecteren wat klanten echt vragen. "Beste bureau voor [super specifieke niche]" klinkt interessant maar heeft nul zoekvolume. Baseer prompts op je Google Search Console queries en sales-gesprekken.

**2. Sentiment vergeten.**
Genoemd worden is nuttig. Geciteerd worden als autoriteit is nog waardevoller. Maak onderscheid.

**3. Variabiliteit onderschatten.**
AI-antwoorden zijn non-deterministisch. Dezelfde prompt geeft soms andere antwoorden. Run minstens 3x en kijk naar gemiddeldes, niet snapshots.

**4. Niet koppelen aan business-resultaat.**
GEO-vermeldingen zijn een vanity-metric als ze niet correleren met leads of verkopen. Bouw de koppeling in: noteer bij elke lead de bron, en kijk of de AI-vermeldingen stijgen gelijk op met lead-volume.

## Startpunt voor verschillende bedrijfsgroottes

**Solopreneur / freelancer:** handmatig, 20 prompts, maandelijks. Gratis.

**MKB met marketing-resource:** Otterly of Peec AI starter tier. €90-100/maand. Wekelijks dashboard-review.

**Scaleup / grotere organisatie:** Profound + server-log integratie + eigen dashboard. €500+/maand. Dedicated GEO-analist.

**Agency:** Profound met agency-pricing voor meerdere klanten. Plus eigen methodologie voor clients die dat willen.

## Conclusie

GEO-tracking is nog jong. De tools zullen in 2027 volwassener zijn. Maar wachten loont niet: begin met wat je hebt. Handmatige prompt-checks zijn vaak beter dan geen tracking, en betaalbare starter-tools maken systematische monitoring haalbaar.

Het alternatief is wandelen in het donker. Wie nu meet, ontdekt patronen die in 2027 omgezet kunnen worden in autoriteit.

## Verder lezen

- [ChatGPT vs Perplexity vs Gemini vs Claude](/kennisbank/chatgpt-vs-perplexity-vs-gemini/)
- [Complete GEO-gids](/gids/geo/)
- [E-E-A-T en brand mentions in GEO](/kennisbank/eeat-geo-brand-mentions/)

Wil je een eerste GEO-meting van je merk? We draaien 20 prompts door vier engines en leveren een concreet rapport. Bel 06 81 38 36 01 of [vraag een GEO-audit aan](/offerte?dienst=geo-scan).
