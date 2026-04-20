---
title: "AI-search op je eigen website: wanneer loont een slimme zoekfunctie?"
description: "Klassieke site-search vindt alleen woorden. AI-search begrijpt intent. Wanneer is het de investering waard en hoe implementeer je het?"
excerpt: "Site-search met keyword-match is in 2026 obsolete. Semantic + RAG verslaat platte zoek op elk belangrijk criterium — maar niet op alle sites."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/ai-search-op-je-website.png"
  alt: "AI zoekfunctie op een website die semantic search toepast"
category: "websites"
tags:
  - "AI search"
  - "semantic search"
  - "RAG"
  - "UX"
relatedPosts:
  - "wat-maakt-website-ai-first"
  - "rag-chatbot-klantenservice"
seo:
  metaTitle: "AI-search op je website: wanneer loont het? | Agensea"
  metaDescription: "Complete gids voor AI-gedreven zoekfunctie op je website. Wanneer loont het, wat kost het, en welke tools gebruik je?"
draft: false
---


Typ "support" in een klassieke zoekbalk op een willekeurige mkb-website en je krijgt elke pagina waar het woord "support" in voorkomt. Inclusief een vacature-pagina voor een supportmedewerker uit 2022. En een blog over support in een ander land.

Niet handig. Mensen verwachten in 2026 beter. En je kunt beter geven — zonder miljoen budget.

## Wat is AI-search op een website?

**Zoek die de intentie van de vraag begrijpt, niet alleen keywords.** Iemand die "hoe werkt jullie pricing" intypt, krijgt je pricing-pagina én relevante FAQ-items — ook als het woord "pricing" nergens exact voorkomt.

Technisch onder de motorkap: een combinatie van **semantic search** (vector embeddings van je content) en vaak **RAG** (retrieval-augmented generation, waarbij een LLM een directe antwoord schrijft met citaten naar de gevonden pagina's).

## Waarom klassieke site-search faalt

Drie zwakheden van keyword-match:

1. **Synoniemen niet herkend.** "Prijs" vs "kosten" vs "tarief" zijn aparte queries.
2. **Intent niet onderscheiden.** "Contact" kan betekenen "waar vind ik contactinfo" of "ik wil contact opnemen" — verschillend resultaat nodig.
3. **Lange vragen sluiten in de war.** "Hoe lang duurt het om een website te laten maken?" matcht op 10+ woorden met lage score; antwoord zit verscholen.

AI-search lost al deze op.

## Wanneer loont het?

### Wél als...

- Je website **meer dan 50 pagina's** heeft (content-rijk). Zonder volume geen patroon om te leren.
- Bezoekers **zoeken gericht** naar informatie (bureau-site, documentatie, blog-archief).
- Je **conversie-paden complex** zijn (meerdere pagina's om tot beslissing te komen).
- Je gebruikers **herhaalde vragen** stellen (indicatie voor RAG-chatbot-potentieel).

### Niet als...

- Je website is <20 pagina's en bezoekers blader simpelweg rond.
- Je niet gestructureerd content onderhoudt (onduidelijk wat is "actueel").
- Gebruikersvolume te laag om van te leren (<500 sessions/mnd).
- Je hebt een webshop met andere primaire navigatie (product-filters), al is AI-search daar óók interessant, specifiek voor productvragen.

## Drie implementatie-opties

### Optie 1: Embedded service (laag-drempel)

Tools als Algolia AI, Typesense met vector-plugin, of Meilisearch bieden AI-search as-a-service. Je voert je content, zij doen de rest.

- **Kosten:** €50-500/mnd afhankelijk van volume
- **Setup:** 1-2 weken
- **Voordelen:** snel, getest, schaalbaar
- **Nadelen:** afhankelijk van vendor, beperkt qua custom logic

### Optie 2: Eigen RAG op OpenAI / Anthropic API

Je bouwt de indexatie en zoek-endpoint zelf op je eigen server.

- **Kosten:** setup €3.000-10.000, runtime €50-300/mnd LLM + vector-db
- **Setup:** 3-6 weken
- **Voordelen:** volledig custom, data blijft in eigen stack
- **Nadelen:** bouwwerk + onderhoud

### Optie 3: Model-gebaseerd (GPT Actions, Custom GPT)

Voor interne sites of simpele use-cases: laat een Custom GPT de content raadplegen.

- **Kosten:** €25/mnd ChatGPT per user + upload van docs
- **Setup:** 1 dag
- **Voordelen:** supergoedkoop voor interne toepassing
- **Nadelen:** niet geschikt voor publieke website-search

## Wat wij bouwen op agensea.nl

De AI-search op deze site ([AISearch.astro](https://agensea.nl)) werkt via optie 2: embeddings van alle content, vector-lookup, en een Groq-gehoste LLM die antwoord formuleert. Kosten per maand: ~€15 voor volumes tot 10.000 queries.

Dat dit werkt is geen garantie dat het bij jouw site werkt — hangt af van content-volume en query-patronen.

## De 5 ingrediënten voor goede implementatie

**1. Gestructureerde content.**
Zonder goede content-modellen (duidelijke titels, metadata, categorieën) is semantic search net zo verward als keyword-search.

**2. Chunking-strategie.**
Je content wordt in stukjes gesplitst voor vector-indexering. Te grote chunks → onprecies. Te klein → verlies van context. Sweet spot: 200-400 tokens per chunk.

**3. Embedding-model.**
OpenAI text-embedding-3-small is default. Voor Nederlands specifiek presteren Cohere of multilingual-modellen soms beter.

**4. Hybrid search (semantic + keyword).**
Pure semantic mist soms exact term-matches. Hybrid combineert beide voor beste recall.

**5. Observability.**
Log elke query + welke resultaten getoond. Maandelijkse review: welke zoeken falen, welke content ontbreekt. Zonder deze loop stagneert de kwaliteit.

## Valkuilen

**Valkuil A: "Zoekfunctie die geen antwoord vindt" = conversie-killer.**
Als 30% van zoekopdrachten niets oplevert, verslechter je de site-ervaring. Beter een kwaliteits-fallback: "Niets gevonden — vraag onze assistent" met escalatie naar mens of chat.

**Valkuil B: LLM halluucineert antwoorden.**
Als je met RAG een samenvattings-antwoord toont, zorg dat het model instructie heeft alleen op opgehaalde bronnen te antwoorden. En toon altijd bron-links.

**Valkuil C: Te veel vertrouwen in de zoekbalk.**
Niet elke bezoeker gebruikt search. Goede navigatie + content-structuur blijft belangrijker dan een indrukwekkende zoekfunctie.

## Wanneer het écht werkt

Twee tekenen dat je AI-search waarde heeft:

1. Zoek-gebruik stijgt na implementatie (meer mensen proberen het)
2. Bounce-rate op gezochte pagina's daalt (mensen vinden wat ze zoeken)

Binnen drie maanden moeten beide zichtbaar bewegen. Zo niet, dan voegt de feature geen waarde toe.

## Verder

- [AI-first websites: complete gids](/gids/ai-first-websites/)
- [Wat maakt een website AI-first?](/kennisbank/wat-maakt-website-ai-first/)
- [RAG-chatbot voor klantenservice](/kennisbank/rag-chatbot-klantenservice/)

Een AI-search implementeren op jouw site? Bel 06 81 38 36 01 of [plan een gesprek](/contact/).
