import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { url, email, scores, issues } = await request.json();

    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is verplicht' }), { status: 400 });
    }

    // Log naar Vercel function logs (altijd beschikbaar)
    console.log(email ? '📊 Nieuwe website scan LEAD:' : '👁️ Website scan (zonder e-mail):', {
      url,
      ...(email && { email }),
      scores,
      issues,
      timestamp: new Date().toISOString(),
    });

    // Stuur notificatie via Google Apps Script webhook
    const webhookUrl = import.meta.env.SCAN_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          body: JSON.stringify({ url, email, scores, issues }),
          redirect: 'follow',
        });
      } catch (webhookErr) {
        console.error('Webhook fout:', webhookErr);
      }
    } else {
      console.warn('SCAN_WEBHOOK_URL niet geconfigureerd');
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.error('Scan lead error:', e);
    return new Response(JSON.stringify({ error: 'Interne fout' }), { status: 500 });
  }
};
