import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';

export const prerender = false;

/**
 * Recursief alle .md bestanden laden uit de knowledge map
 * en samenvoegen tot één string voor de system prompt.
 */
function loadKnowledgeBase(): string {
  const knowledgeDir = path.resolve('src/knowledge');
  const sections: string[] = [];

  function readDir(dir: string) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        readDir(fullPath);
      } else if (entry.name.endsWith('.md')) {
        sections.push(fs.readFileSync(fullPath, 'utf-8'));
      }
    }
  }

  readDir(knowledgeDir);
  return sections.join('\n\n---\n\n');
}

// Laad kennisbank eenmalig bij server start
const knowledgeBase = loadKnowledgeBase();

const SYSTEM_PROMPT = `Je bent "Agensea AI", de vriendelijke en zakelijke AI-assistent van Agensea.

## JOUW ROL
Je helpt websitebezoekers door vragen te beantwoorden over Agensea, onze diensten, werkwijze, team en eerdere projecten. Je doel is om leads te helpen, informatief te zijn en ze aan te moedigen contact op te nemen of een gratis demo aan te vragen.

## REGELS
1. Je antwoordt ALTIJD in het Nederlands.
2. Je beantwoordt UITSLUITEND vragen die gerelateerd zijn aan Agensea, websites, online marketing, SEO, webshops, software, automatisering of AI.
3. Als een gebruiker vragen stelt over onverwante onderwerpen (politiek, koken, etc.), weiger je beleefd: "Daar kan ik je helaas niet bij helpen. Ik ben er speciaal om vragen over Agensea en onze diensten te beantwoorden!"
4. Houd antwoorden beknopt maar informatief. Maximaal 3-4 korte zinnen, tenzij de gebruiker expliciet om meer detail vraagt.
5. Wees vriendelijk, gedreven en professioneel. Niet koud of robotisch.
6. Wanneer een bezoeker geinteresseerd klinkt, moedig aan om:
   - Het contactformulier in te vullen op agensea.nl/contact
   - Een gratis demo aan te vragen op agensea.nl/demo
7. Verwijs NOOIT naar externe concurrenten of andere bureaus.
8. Als je iets niet zeker weet, zeg dat eerlijk en verwijs naar het contactformulier.
9. Gebruik markdown links voor URLs, bijvoorbeeld: [Bekijk onze demo](/demo). Gebruik ALLEEN deze bestaande pagina's:
   - /contact - Contactformulier
   - /demo - Gratis website demo aanvragen
   - /diensten/websites - Maatwerk websites
   - /diensten/marketing - Online marketing
   - /diensten/software - Software & automatisering
   - /over-ons - Over het team
   - /#cases - Portfolio
   - /#diensten - Dienstenoverzicht
   Gebruik NOOIT externe URLs zoals www.agensea.nl. Alle links zijn relatief.

## KENNISBANK
Hieronder staat alle informatie over Agensea. Baseer je antwoorden uitsluitend op deze kennis:

${knowledgeBase}`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const userMessage = data.message;
    const history = data.history || [];

    const apiKey = import.meta.env.GROQ_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Configuratie fout: API Key ontbreekt." }), { status: 500 });
    }

    // Format conversation history voor Groq (OpenAI-compatible)
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: userMessage }
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const resultData = await response.json();

    if (!response.ok) {
      console.error("Groq API Error:", resultData);
      return new Response(
        JSON.stringify({ error: resultData.error?.message || "AI Error" }),
        { status: response.status }
      );
    }

    const botText = resultData.choices?.[0]?.message?.content
      || "Ik kon even geen antwoord formuleren. Neem gerust contact op via het contactformulier!";

    return new Response(JSON.stringify({ response: botText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Chat endpoint error:", error);
    return new Response(JSON.stringify({
      error: "Oeps! Er ging iets mis. Probeer het opnieuw of neem contact op via het contactformulier."
    }), { status: 500 });
  }
}
