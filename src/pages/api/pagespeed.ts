import type { APIRoute } from 'astro';

export const prerender = false;

// Simple in-memory rate limiter (per-instance; resets on cold start).
// Vercel serverless: best-effort, but voorkomt gemakkelijke abuse vanuit één IP.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5; // 5 scans per minuut per IP
const buckets = new Map<string, { count: number; reset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.reset < now) {
    buckets.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count++;
  return true;
}

// Block private/loopback IP-ranges & non-http(s) protocols (SSRF defense).
function isSafePublicUrl(raw: string): { ok: true; url: string } | { ok: false; reason: string } {
  let parsed: URL;
  try {
    parsed = new URL(raw);
  } catch {
    return { ok: false, reason: 'Ongeldige URL' };
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return { ok: false, reason: 'Alleen http(s) toegestaan' };
  }
  const host = parsed.hostname.toLowerCase();
  // Block obvious internal hosts. (DNS rebinding kunnen we hier niet tegenhouden,
  // maar Google PageSpeed crawlt vanaf eigen infrastructuur dus dat is hun probleem.)
  const blocked = [
    'localhost', '127.0.0.1', '0.0.0.0', '::1',
  ];
  if (blocked.includes(host)) return { ok: false, reason: 'Interne URL niet toegestaan' };
  // Private IPv4 ranges
  if (/^10\./.test(host)) return { ok: false, reason: 'Private IP niet toegestaan' };
  if (/^192\.168\./.test(host)) return { ok: false, reason: 'Private IP niet toegestaan' };
  if (/^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(host)) return { ok: false, reason: 'Private IP niet toegestaan' };
  if (/^169\.254\./.test(host)) return { ok: false, reason: 'Link-local niet toegestaan' };
  // .local mDNS
  if (host.endsWith('.local')) return { ok: false, reason: 'Interne URL niet toegestaan' };
  return { ok: true, url: parsed.toString() };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const ip = clientAddress || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({ error: 'Te veel aanvragen. Probeer het over een minuut opnieuw.' }),
        { status: 429, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json().catch(() => null);
    const rawUrl = typeof body?.url === 'string' ? body.url.trim() : '';
    if (!rawUrl) {
      return new Response(JSON.stringify({ error: 'URL ontbreekt' }), { status: 400 });
    }

    // Auto-prefix https:// als gebruiker alleen domein heeft ingevuld.
    const normalized = /^https?:\/\//i.test(rawUrl) ? rawUrl : 'https://' + rawUrl;
    const safe = isSafePublicUrl(normalized);
    if (!safe.ok) {
      return new Response(JSON.stringify({ error: safe.reason }), { status: 400 });
    }

    const apiKey = import.meta.env.PAGESPEED_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Configuratie fout: PAGESPEED_API_KEY ontbreekt.' }),
        { status: 500 }
      );
    }

    const apiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    apiUrl.searchParams.set('url', safe.url);
    apiUrl.searchParams.set('strategy', 'mobile');
    apiUrl.searchParams.set('key', apiKey);
    ['performance', 'seo', 'accessibility', 'best-practices'].forEach((c) =>
      apiUrl.searchParams.append('category', c)
    );

    const res = await fetch(apiUrl.toString());
    if (!res.ok) {
      const text = await res.text();
      console.error('PageSpeed upstream error:', res.status, text.slice(0, 500));
      return new Response(
        JSON.stringify({ error: `PageSpeed API fout (${res.status})` }),
        { status: 502 }
      );
    }

    const data = await res.json();
    const cats = data.lighthouseResult?.categories;
    const audits = data.lighthouseResult?.audits || {};

    // Stuur alleen wat de client nodig heeft terug. Spaart bandbreedte en
    // voorkomt het lekken van interne audit-velden.
    const result = {
      url: safe.url,
      scores: {
        performance: Math.round((cats?.performance?.score ?? 0) * 100),
        seo: Math.round((cats?.seo?.score ?? 0) * 100),
        accessibility: Math.round((cats?.accessibility?.score ?? 0) * 100),
        bestPractices: Math.round((cats?.['best-practices']?.score ?? 0) * 100),
      },
      failedAudits: Object.entries(audits)
        .filter(([, a]: [string, any]) => a?.score !== null && a?.score < 0.9)
        .map(([id, a]: [string, any]) => ({
          id,
          title: a.title,
          score: a.score,
        })),
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('PageSpeed endpoint error:', error);
    return new Response(
      JSON.stringify({ error: 'Er ging iets mis bij het scannen. Probeer het later opnieuw.' }),
      { status: 500 }
    );
  }
};
