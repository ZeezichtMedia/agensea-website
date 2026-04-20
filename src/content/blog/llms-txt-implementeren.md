---
title: "llms.txt implementeren: de nieuwe robots.txt voor AI-crawlers [2026]"
description: "Hoe werkt llms.txt, waarom zou je het toevoegen aan je site, en werkt het eigenlijk al? Praktische gids met voorbeelden en eerlijke status-update."
excerpt: "llms.txt is een simpel markdown-bestand dat AI-crawlers vertelt welke content op jouw site prioriteit heeft. We lopen door spec, implementatie en of het écht iets doet."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/llms-txt-implementeren.png"
  alt: "Illustratie van een llms.txt bestand dat door AI-crawlers wordt gelezen"
category: "seo"
tags:
  - "llms.txt"
  - "GEO"
  - "AI crawlers"
  - "technische SEO"
relatedPosts:
  - "aeo-uitgelegd"
  - "waarom-ai-websites-slecht-zijn-voor-seo"
seo:
  metaTitle: "llms.txt implementeren: gids voor AI-crawlers | Agensea"
  metaDescription: "Stap-voor-stap llms.txt opzetten voor betere zichtbaarheid in ChatGPT, Perplexity en Gemini. Met praktische voorbeelden."
draft: false
---


Iedere website heeft een `robots.txt`. Dat bestand vertelt zoekmachine-crawlers — Googlebot, Bingbot — welke delen van je site ze wel of niet mogen indexeren. Simpel bestand, dertig jaar oud, iedereen kent het.

Maar voor het nieuwe tijdperk van AI-zoekmachines volstaat robots.txt niet. Dat ding zegt alleen "mag wel/mag niet". Hij zegt niet: "hier, hier zit de juice."

Daarvoor is `llms.txt` bedacht.

## Wat is llms.txt?

**llms.txt is een markdown-bestand dat je in de root van je website plaatst**, bedoeld om AI-modellen een **beknopt overzicht van je belangrijkste content** te geven. Het voorstel komt van Jeremy Howard (Answer.AI, fast.ai) en is ontworpen om het selectie-probleem van LLM's op te lossen: het model heeft beperkte context, jouw site heeft honderden pagina's, hoe help je het model de essentie te vinden?

De essentie:

- Plain markdown, geen XML of JSON
- Toegankelijk via `https://jouwsite.nl/llms.txt`
- Bevat je site-naam, korte omschrijving en gecureerde links naar kerninhoud
- Optioneel: een `llms-full.txt` met volledige content per pagina

Het is nadrukkelijk **geen vervanger voor `robots.txt`**. Ze bestaan naast elkaar.

## Waarom zou je het toevoegen?

Drie redenen, drie kanttekeningen.

**Reden 1: signaal aan AI-modellen welke content prioriteit heeft.** Zonder llms.txt moet een LLM zelf navigeren — via sitemap, interne links, en inhoud. Met llms.txt wijs je direct: "dit zijn de 10 pagina's die ertoe doen."

**Reden 2: lage kosten, onafhankelijk van welk model.** Het is één markdown-bestand. Als de standaard doorzet, ben je er klaar voor. Zet je 't niet neer, dan loop je geen risico — je mist alleen een mogelijk signaal.

**Reden 3: goede hygiëne voor content-governance.** Het dwingt je om helder te krijgen welke 10-20 pagina's de hoofdstroom van je site dragen. Dat is waardevol, ongeacht AI-indexering.

**De kanttekening:** de standaard wordt op dit moment nog **niet door alle LLM's gelezen**. Er is geen bewijs dat ChatGPT Search of Gemini er iets mee doet. Perplexity en Anthropic hebben er wel interesse in getoond. Je zet 'm neer voor toekomstbestendigheid, niet voor directe meetbare winst.

## De structuur van llms.txt

Een minimaal valide bestand ziet er zo uit:

```
# Agensea

> AI-first digital agency uit Nederland. Websites, marketing en custom software — gebouwd met AI als kernprincipe, niet als gimmick.

## Diensten

- [Websites](https://agensea.nl/diensten/websites): maatwerk websites met SEO-basis
- [Marketing](https://agensea.nl/diensten/marketing): SEO, SEA en content
- [Software](https://agensea.nl/diensten/software): custom SaaS en AI-agents

## Gidsen

- [GEO: de complete gids](https://agensea.nl/gids/geo): Generative Engine Optimization uitgelegd

## Kennisbank
- [AEO uitgelegd](https://agensea.nl/kennisbank/aeo-uitgelegd): Answer Engine Optimization
- [Waarom AI-websites slecht zijn voor SEO](https://agensea.nl/kennisbank/waarom-ai-websites-slecht-zijn-voor-seo)
```

De spec kent vier secties:

1. **H1**: naam van de site of het project
2. **Blockquote**: korte omschrijving (max ±1 alinea)
3. **H2-secties**: thematische groepen met bullet-list van links
4. **Optionele `## Optional` sectie**: content die nice-to-have is maar niet essentieel

## Stap-voor-stap implementatie

**Stap 1 — kies je kern-pagina's.** Niet meer dan 20. Welke pagina's vangen de strategische intent van je site? Voor een bureau: diensten, cases, pillar-gidsen. Voor een webshop: categorieën, flagship-producten. Voor een SaaS: features, pricing, docs.

**Stap 2 — schrijf een scherpe blockquote.** Één à twee zinnen die uitleggen wie je bent en wat je doet. Gebruik dezelfde bewoording die je in je meta-descriptions en Open Graph gebruikt. Consistentie versterkt entity-herkenning.

**Stap 3 — groepeer per sectie.** Geef elke H2 een duidelijke naam. "Diensten", "Cases", "Gidsen", "Blog". Niet "Spullen", niet "Varia".

**Stap 4 — zet het bestand op `/llms.txt`.** In Astro plaats je het in `public/llms.txt`. In Next.js ook in `public/`. Bij de meeste frameworks: je statische root.

**Stap 5 — controleer accessibility.** Check `https://jouwsite.nl/llms.txt` vanaf een private browser tab. Het moet plain text teruggeven met content-type `text/plain` of `text/markdown`. Geen 301/302 redirects.

**Stap 6 — overweeg `llms-full.txt`.** Voor sites met veel documentatie (SaaS-producten, open source projecten) kun je daarnaast een llms-full.txt genereren met de volledige tekst van de links uit llms.txt. Tools als [llms-txt](https://github.com/answerdotai/llms-txt) helpen bij generatie.

## Valkuilen en goede keuzes

**Niet te lang.** Een llms.txt van 500 links is onbruikbaar. Zie het als een restaurant-menu, niet de voorraadkast. 10-20 goede links verslaan 200 middelmatige.

**Geen marketing-taal.** LLM's pakken liever feitelijke beschrijvingen. "Wij zijn de beste bakker van Rotterdam" verliest het van "Ambachtelijke bakkerij in Rotterdam-Centrum, gespecialiseerd in desem." Het tweede is bruikbaar voor een model dat een vraag moet beantwoorden.

**Hou 'm synchroon met je site.** Niks zo erg als llms.txt die naar pagina's wijst die niet meer bestaan. Voeg het toe aan je deploy-checklist: bij elke contentrelease updaten.

**Linken met volledige URL's.** Niet `/diensten/websites` maar `https://agensea.nl/diensten/websites`. AI-modellen parseren volledige URL's accurater.

## Werkt het al? Een eerlijke stand van zaken

Op het moment van schrijven (april 2026) is de situatie als volgt:

- **Anthropic** heeft llms.txt expliciet genoemd als onderdeel van hoe ze content willen gaan ontsluiten voor Claude.
- **Perplexity** experimenteert er actief mee.
- **OpenAI/ChatGPT Search** gebruikt het nog niet bevestigd — maar Bing-index (waarop ChatGPT Search leunt) pakt markdown-bestanden wel goed op.
- **Google Gemini** geen officiële uitspraak; Google leunt zwaar op hun eigen Knowledge Graph.

Het eerlijke antwoord: llms.txt is nu vooral **een toekomstbestendige investering van 30 minuten werk** die weinig kost en mogelijk veel oplevert als de standaard doorzet. Niet een zilveren kogel, wel een verstandige zet.

## Zelf aan de slag of laten doen?

llms.txt is simpel genoeg om zelf op te zetten. De kunst zit niet in het bestand, maar in het kiezen van de juiste pagina's en formuleringen. Dat is een content-strategische vraag, geen technische.

Meer fundament leggen voor AI-zichtbaarheid? Bekijk onze [complete GEO-gids](/gids/geo/) of lees hoe je [content schrijft die LLM's citeren](/kennisbank/content-voor-ai-citaten/).

Of bel even: 06 81 38 36 01. We kijken vrijblijvend mee.
