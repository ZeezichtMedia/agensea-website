---
title: "GPTBot, ClaudeBot, PerplexityBot: AI-crawlers toelaten of blokkeren? [2026]"
description: "GPTBot, ClaudeBot, PerplexityBot, Google-Extended en CCBot: welke AI-crawlers moet je toelaten en welke blokkeren? Beslismatrix per doel."
excerpt: "De keuze is minder zwart-wit dan marketeers doen voorkomen. Wie op zichtbaarheid mikt, wil juist toegelaten worden. Wie content beschermt, niet."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/ai-crawlers-robots-txt.png"
  alt: "Illustratie van verschillende AI-crawlers (GPTBot, ClaudeBot, PerplexityBot) bij een robots.txt bestand"
category: "seo"
tags:
  - "robots.txt"
  - "AI crawlers"
  - "GEO"
  - "GPTBot"
  - "technische SEO"
relatedPosts:
  - "llms-txt-implementeren"
  - "aeo-uitgelegd"
seo:
  metaTitle: "GPTBot, ClaudeBot en PerplexityBot: toelaten of blokkeren? · Agensea"
  metaDescription: "Praktische beslismatrix voor AI-crawlers in je robots.txt: welke toelaten, welke blokkeren, en wat het voor jouw bedrijf betekent."
draft: false
---


Er bestaat een hardnekkig misverstand over AI-crawlers: dat je ze allemaal moet blokkeren "om je content te beschermen." Op socials en in LinkedIn-posts wordt dat vaak gepresenteerd als een no-brainer.

Het is geen no-brainer. Sterker nog: voor de meeste bedrijven is het **een slecht advies**.

In deze post: welke AI-crawlers er zijn, wat elke bot doet, en hoe je bewust kiest wie je toelaat en wie niet — aan de hand van je **doel**, niet een algemene angst.

## Wat is een AI-crawler eigenlijk?

Een AI-crawler is een bot die webcontent leest met als primair doel: data verzamelen voor een AI-model. Dat kan drie soorten doelen dienen:

1. **Training** — content gebruiken om toekomstige modellen te trainen
2. **Indexering** — content opnemen in een zoekindex die het model live kan raadplegen
3. **On-demand ophalen** — alleen lezen wanneer een gebruiker er actief om vraagt

Die drie zijn **geen hetzelfde**. Je kunt training blokkeren en indexering toestaan. Dat is precies waarom grote publishers (NY Times, Reuters) vaak wel GPTBot blokkeren maar OAI-SearchBot toelaten.

## De belangrijkste AI-crawlers in 2026

| User-agent | Operator | Doel | Respecteert robots.txt? |
|---|---|---|---|
| `GPTBot` | OpenAI | Training | Ja |
| `OAI-SearchBot` | OpenAI | ChatGPT Search indexering | Ja |
| `ChatGPT-User` | OpenAI | Live browsing (wanneer user vraagt) | Ja |
| `ClaudeBot` | Anthropic | Training | Ja |
| `Claude-Web` / `Claude-SearchBot` | Anthropic | Live web-search voor Claude | Ja |
| `PerplexityBot` | Perplexity | Indexering voor Perplexity search | Ja |
| `Perplexity-User` | Perplexity | Live ophalen bij user-query | Negeert soms robots.txt |
| `Google-Extended` | Google | AI-training voor Gemini/Vertex | Ja |
| `CCBot` | Common Crawl | Open crawl gebruikt door veel AI-bedrijven | Ja |
| `Bytespider` | ByteDance (TikTok/Doubao) | Training | Deels |
| `Applebot-Extended` | Apple | Apple Intelligence training | Ja |

## De vier strategische keuzes

Stel jezelf deze vier vragen voordat je iets blokkeert:

**1. Wil je gevonden worden in AI-zoekmachines?**
Ja → laat indexerings-bots (`OAI-SearchBot`, `PerplexityBot`, `Claude-Web`) toe.
Nee → blokkeren.

**2. Vind je het erg dat je content toekomstige modellen traint?**
Niet erg / prima → laat trainings-bots (`GPTBot`, `ClaudeBot`, `Google-Extended`) toe.
Wel erg → blokkeren.

**3. Heeft je content commerciële waarde als dataset?**
(Denk uitgevers, onderzoek, betaalde archieven.) → dan maakt training-blokkeren zin.

**4. Bouw je merk-autoriteit die profiteert van vermeldingen in AI-antwoorden?**
Waarschijnlijk ja — voor de meeste MKB, bureaus en kennisbedrijven is "ik wil genoemd worden" de belangrijkste driver.

## Vier archetypes en hun keuze

**Archetype A: bureau, MKB, kennisbedrijf**
Doel: zichtbaar zijn en geciteerd worden. **Advies: álles toelaten.** Je hebt meer te verliezen aan onzichtbaarheid dan aan training. Een artikel over jouw expertise dat in GPT-6 belandt en zich daarna viraal verspreidt is gratis marketing.

**Archetype B: webshop**
Doel: productvisibility. **Advies: toelaten**, maar blokkeer product-detail API-endpoints en prijzen-feeds (die horen niet publiek te zijn). De reguliere crawl van je shop helpt.

**Archetype C: SaaS met premium content**
Doel: leads, maar ook bescherming van paywall-content. **Advies: mix.** Laat indexering toe op marketing- en documentatie-pagina's. Blokkeer trainings-bots op auth-protected delen (al mogen ze daar sowieso niet komen).

**Archetype D: uitgever, onderzoek, creative works**
Doel: content heeft directe commerciële waarde. **Advies: blokkeer trainings-bots.** Overweeg wel indexerings-bots toe te laten, want publicaties willen meestal nog wel gevonden worden.

## Praktische robots.txt — standaard setup voor een bureau

Voor de meeste MKB en bureaus (archetype A) is onze standaardaanbeveling simpel:

```
User-agent: *
Allow: /
Sitemap: https://agensea.nl/sitemap-index.xml
```

Oftewel: iedereen binnen, inclusief AI-crawlers. Je hoeft niets specifieks te doen. Ze respecteren allemaal de generieke `*`.

## Strenger: alleen indexering, geen training

Wil je wél geïndexeerd worden maar niet training-data leveren? Dan wordt het:

```
User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

Sitemap: https://agensea.nl/sitemap-index.xml
```

Dit blokkeert de vier grote trainings-bots. `OAI-SearchBot`, `PerplexityBot` en `Claude-Web` blijven toegestaan (via de `*`-regel) omdat die voor indexering zijn.

## De val: alles blokkeren "voor de zekerheid"

Als je in je robots.txt zet:

```
User-agent: *
Disallow: /
```

Dan sluit je Google ook buiten. Je verdwijnt uit de reguliere zoekresultaten. Dat is bijna nooit wat je wilt.

Een ander veelgemaakte fout: plakken van een "stop de AI"-robots.txt van een ander forum zonder te checken wat je blokkeert. We hebben sites gezien waar `Googlebot` per ongeluk was uitgesloten — drie maanden lang wegsmelt van je organische traffic.

## Hoe controleer je of het werkt?

1. **robots.txt validator** — Google's [robots testing tool](https://www.google.com/webmasters/tools/robots-testing-tool) of een generieke parser.
2. **Server-logs** — filter op user-agent. Zie je nog `GPTBot` binnenkomen nadat je 'm hebt geblokkeerd, dan is er iets mis.
3. **Direct ophalen** — `curl -A "GPTBot" https://jouwsite.nl/robots.txt` en checken of jouw disallow-regel wordt teruggegeven.

## Wat wij doen

Voor onze eigen site (agensea.nl) laten we alle AI-crawlers toe. Onze strategie is helder: vindbaar zijn in AI-zoekmachines weegt zwaarder dan bescherming tegen training. Voor sommige klanten — een architectenbureau dat z'n portfolio commercieel wilde houden, een onderzoeksinstituut met betaalde rapporten — zijn we strenger.

Niet één antwoord past bij iedereen. De vraag is: wat is jouw doel?

## Meer weten

- [llms.txt implementeren](/kennisbank/llms-txt-implementeren/) — de opvolger van robots.txt voor AI
- [GEO: de complete gids](/gids/geo/) — hoe je überhaupt in AI-antwoorden verschijnt
- Bel 06 81 38 36 01 voor een vrijblijvende audit van je robots.txt + AI-crawler-strategie
