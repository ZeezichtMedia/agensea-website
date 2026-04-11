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
    try {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          readDir(fullPath);
        } else if (entry.name.endsWith('.md')) {
          try {
            sections.push(fs.readFileSync(fullPath, 'utf-8'));
          } catch (e) {
            console.warn('Kon knowledge file niet lezen:', fullPath, e);
          }
        }
      }
    } catch (e) {
      console.warn('Kon knowledge dir niet lezen:', dir, e);
    }
  }

  readDir(knowledgeDir);
  return sections.join('\n\n---\n\n');
}

// Laad kennisbank eenmalig bij server start. Bij een lege/missende folder
// blijft de bot werken — alleen dan zonder bedrijfsspecifieke context.
const knowledgeBase = loadKnowledgeBase();
if (!knowledgeBase) {
  console.warn('[chat.ts] Kennisbank is leeg — AI antwoorden zullen generiek zijn.');
}

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

// ── Rate limiting ────────────────────────────
// In-memory bucket per IP. Reset bij cold start; goed genoeg om casual abuse
// af te slaan. Voor harde garanties: Vercel KV/Upstash.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10; // 10 berichten per minuut per IP
const chatBuckets = new Map<string, { count: number; reset: number }>();

function checkChatRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = chatBuckets.get(ip);
  if (!bucket || bucket.reset < now) {
    chatBuckets.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count++;
  return true;
}

// Maximale lengte van één bericht en het maximaal aantal history items dat we
// doorsturen. Voorkomt context-window abuse en hoge token-kosten.
const MAX_MESSAGE_CHARS = 1500;
const MAX_HISTORY_ITEMS = 20;

function sanitizeHistory(input: unknown): Array<{ role: 'user' | 'assistant'; content: string }> {
  if (!Array.isArray(input)) return [];
  const out: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  for (const item of input.slice(-MAX_HISTORY_ITEMS)) {
    if (!item || typeof item !== 'object') continue;
    const role = (item as any).role;
    const content = (item as any).content;
    // Whitelist: alleen 'user' en 'assistant' — geen 'system' (prompt injection guard).
    if (role !== 'user' && role !== 'assistant') continue;
    if (typeof content !== 'string') continue;
    const trimmed = content.slice(0, MAX_MESSAGE_CHARS);
    if (!trimmed) continue;
    out.push({ role, content: trimmed });
  }
  return out;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = clientAddress || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkChatRateLimit(ip)) {
      return new Response(
        JSON.stringify({ error: 'Te veel vragen achter elkaar. Wacht even en probeer het opnieuw.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await request.json().catch(() => null);
    if (!data || typeof data !== 'object') {
      return new Response(JSON.stringify({ error: 'Ongeldige aanvraag.' }), { status: 400 });
    }

    const rawMessage = (data as any).message;
    if (typeof rawMessage !== 'string' || !rawMessage.trim()) {
      return new Response(JSON.stringify({ error: 'Bericht ontbreekt.' }), { status: 400 });
    }
    const userMessage = rawMessage.trim().slice(0, MAX_MESSAGE_CHARS);
    const history = sanitizeHistory((data as any).history);

    const apiKey = import.meta.env.GROQ_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Configuratie fout: API Key ontbreekt." }), { status: 500 });
    }

    // Format conversation history voor Groq (OpenAI-compatible). De system
    // prompt wordt hier toegevoegd — sanitizeHistory garandeert dat de client
    // geen extra system-rol kan smokkelen.
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history,
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
