---
title: "Zapier/Make vs custom AI-agent: wanneer trek je de grens? [2026]"
description: "Wanneer is Zapier of Make met LLM-stap genoeg, en wanneer heb je een custom AI-agent nodig? Break-even analyse per proces met concrete voorbeelden."
excerpt: "De grens tussen no-code automation en custom agent zit zelden bij wat je dénkt. Break-even met echte getallen, niet marketing-fluff."
pubDate: 2026-04-20
author: jorian
image:
  src: "/images/blog/zapier-vs-custom-ai-agent.png"
  alt: "Vergelijking Zapier/Make workflows en custom AI-agent"
category: "ai-automation"
tags:
  - "Zapier"
  - "Make"
  - "AI agent"
  - "automation"
  - "mkb"
relatedPosts:
  - "wat-is-ai-agent"
  - "proces-automatisering-checklist"
seo:
  metaTitle: "Zapier/Make vs custom AI-agent: de beslissing | Agensea"
  metaDescription: "Concrete beslishulp: wanneer volstaat Zapier of Make met AI, en wanneer loont custom? Met kostenmodel en praktijkvoorbeelden."
draft: false
---


"We moeten iets met agents gaan doen." Leuke zin op LinkedIn. Minder leuk op de factuur.

De werkelijkheid voor de meeste mkb-automation-vraagstukken is onromantisch: een bestaande Zapier- of Make-flow met één slimme LLM-stap erin doet het werk. De kosten liggen een factor 10 lager, de onderhoudsbelasting ook. Custom agents hebben hun plek, maar bijna nergens zo vroeg in het traject als iedereen denkt.

Deze post: de werkelijke grens, met getallen die je kunt uitrekenen.

## Twee werelden in één diagram

**Zapier / Make + LLM-stap:**
Een no-code flow die vaste stappen volgt. Ergens onderweg zit één of meer LLM-aanroepen (classificeren, samenvatten, herschrijven). De AI wordt als een "slimme functie" gebruikt, niet als brein.

**Custom AI-agent:**
Een systeem dat zelf beslist welke stappen te nemen, welke tools te gebruiken, wanneer door te gaan en wanneer hulp te vragen. Het model is het brein van de workflow, niet een onderdeel.

De eerste is een recept met een slimme ingrediënt. De tweede is een kok.

## Wanneer is Zapier/Make voldoende?

**Ja, als...**

- Je flow heeft een **vast patroon** (input → transform → output). Ook als de transform AI-kennis vereist, is het één stap.
- Het aantal **tools dat bij één taak betrokken is** klein is (<5).
- De **beslissingen zijn binaire keuzes** die je model in één prompt kan nemen.
- Je bent **niet afhankelijk van geheugen** over meerdere interacties.

**Voorbeelden:**

- Inkomende klantvraag classificeren op urgentie → naar juist kanaal routeren.
- Offertes uit PDFs extracten → naar CRM pushen.
- Blogpost-idee naar Google Docs concept omzetten met SEO-check.

## Wanneer heb je een custom agent nodig?

**Ja, als...**

- De taak vereist **meerdere stappen** waarvan de volgorde afhangt van tussenresultaten.
- Het systeem moet **meerdere tools aanroepen** op basis van wat het onderweg leert.
- Er is **state** nodig — het systeem onthoudt iets tussen stappen of conversaties.
- **Iteratie** is inherent — het model moet kunnen zeggen "nog niet goed, probeer anders".

**Voorbeelden:**

- Research-assistent die zelf bronnen zoekt, vergelijkt, samenvat.
- Outbound-tool die prospects onderzoekt en per prospect een gepersonaliseerde mail schrijft.
- Support-agent die eerst documentatie raadpleegt, dan CRM checkt, dan eventueel een ticket maakt.

## Break-even: wanneer loont custom?

Het simpele kostenmodel:

**Zapier/Make + LLM:**
- Setup: 4-20 uur werk à €125/uur = €500–€2.500
- Platform: €29–€99/mnd (Zapier) of €9–€49/mnd (Make)
- LLM-kosten: €0,01–€0,10 per actie

**Custom agent:**
- Setup: 40-120 uur werk = €5.000–€15.000
- Platform: €0–€200/mnd (eigen infra) + observability
- LLM-kosten: €0,05–€0,50 per actie (complexere runs)
- Onderhoud: 4-10 uur per maand = €500–€1.250/mnd

Grofweg verdient een custom agent zich alleen terug **als je minimaal 1.000 runs per maand hebt** én de taak complex genoeg is dat Zapier met LLM-stap er niet in voorziet. Onder die drempel is Zapier/Make goedkoper, ondanks dat het minder "indrukwekkend" klinkt.

## De valkuil van over-engineering

Een concreet scenario dat we meermaals zijn tegengekomen: een team wilde een "customer support agent" bouwen. Ze kwamen op €25.000 offertes uit voor een volledige LangGraph-implementatie.

Toen we de use-case analyseerden: inkomende mail classificeren, relevante knowledge-base artikelen ophalen, een suggestie-antwoord genereren, door mens laten valideren. Vier stappen, geen iteratie nodig. Dit is een Zapier/Make-flow met RAG-lookup. Kosten: €3.500 setup, €150/mnd run.

Ze deden uiteindelijk de €3.500 versie. Hij werkt al 18 maanden. De €25.000-versie zou dat ook hebben gedaan, maar voor zeven keer de prijs.

## De tussenvorm: Make met Custom Code

Make (voorheen Integromat) heeft een HTTP/Custom-code module waarmee je complexere logica kunt inpassen zonder naar volledige custom te gaan. Voor **85% van de mkb-cases** is dit het sweet spot:

- Flow-control in Make (visueel, onderhoudbaar door niet-tech team)
- Custom JS-functie voor complexere logica
- LLM-aanroep via HTTP module
- State in een externe db (Airtable, Supabase)

Dit is geen pure Zapier én geen pure custom. Maar het is vaak het economisch juiste antwoord.

## Beslisboom

Loop deze vragen langs over je use-case:

1. **Aantal stappen in de happy path?** ≤4 → Zapier/Make. ≥5 → overweeg custom.
2. **Beslissingsafhankelijke flow?** Nee → Zapier/Make. Ja, meerdere takken die het model moet kiezen → custom.
3. **Meerdere LLM-calls per run?** Nee of 1-2 → Zapier/Make. ≥3 met tool-use → custom.
4. **State tussen sessies?** Nee → Zapier/Make. Ja, dringend → custom.
5. **Volume ≥1.000 runs/mnd?** Nee → Zapier/Make (nooit break-even). Ja → ROI kan rechtvaardigen.

Twee of meer "custom"-antwoorden? Serieuze agent-overweging. Anders: begin no-code, want je kunt altijd later upgraden.

## Nog iets: eerst bouwen, later schalen

Bijna elke custom agent die we hebben gebouwd, begon als een Zapier-prototype. Dat is geen falen, dat is slim. Je leert de workflow kennen, je snapt de randgevallen, en pas dan bouw je het robuuste systeem.

Teams die direct in custom springen bouwen vaak drie maanden aan iets dat het probleem verkeerd oplost. Teams die eerst een lompe Zapier-prototype maken, bouwen maand vier iets dat werkt.

## Verder lezen

- [AI-automation voor MKB: complete gids](/gids/ai-automation/)
- [Wat is een AI-agent? Non-tech uitleg](/kennisbank/wat-is-ai-agent/)
- [Proces-automatisering checklist](/kennisbank/proces-automatisering-checklist/)
- [Custom GPT vs eigen agent](/kennisbank/custom-gpt-vs-eigen-agent/)

Twijfel over welke kant op voor jouw proces? We rekenen het graag door. Bel 06 81 38 36 01 of [vraag een automation-scan aan](/offerte?dienst=software).
