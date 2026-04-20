import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

type FormType = 'contact' | 'offerte' | 'demo';

type Payload = {
  formType: FormType;
  hp_url?: string; // honeypot — must stay empty
  fields: Record<string, string | string[] | undefined | null>;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

const formatValue = (v: string | string[] | undefined | null) => {
  if (v == null || v === '') return '—';
  if (Array.isArray(v)) return v.length ? v.join(', ') : '—';
  return v;
};

const SUBJECTS: Record<FormType, string> = {
  contact: 'Nieuw contactbericht',
  offerte: 'Nieuwe offerte-aanvraag',
  demo: 'Nieuwe demo-aanvraag',
};

const LABELS: Record<FormType, Record<string, string>> = {
  contact: { name: 'Naam', bedrijf: 'Organisatie', email: 'E-mail', tel: 'Telefoon', message: 'Bericht' },
  offerte: {
    diensten: 'Diensten',
    doel: 'Doel',
    budget: 'Budget',
    omschrijving: 'Omschrijving',
    naam: 'Naam',
    bedrijf: 'Bedrijf',
    email: 'E-mail',
    telefoon: 'Telefoon',
    website: 'Huidige website',
  },
  demo: {
    firstName: 'Voornaam',
    company: 'Bedrijf',
    email: 'E-mail',
    website: 'Huidige website',
    goal: 'Doel / frustratie',
    message: 'Bericht',
  },
};

const buildBody = (formType: FormType, fields: Payload['fields']) => {
  const labels = LABELS[formType];
  const rows = Object.entries(labels)
    .map(([key, label]) => {
      const raw = fields[key];
      const value = formatValue(raw);
      return { label, value };
    })
    .filter((r) => r.value !== '—' || r.label === 'Bericht' || r.label === 'Omschrijving');

  const text = rows.map((r) => `${r.label}: ${r.value}`).join('\n');
  const html =
    `<h2 style="font-family:system-ui,sans-serif;color:#1a1a1a;">${SUBJECTS[formType]}</h2>` +
    `<table style="font-family:system-ui,sans-serif;border-collapse:collapse;">` +
    rows
      .map(
        (r) =>
          `<tr><td style="padding:6px 14px 6px 0;color:#666;vertical-align:top;"><strong>${escapeHtml(r.label)}</strong></td>` +
          `<td style="padding:6px 0;color:#1a1a1a;white-space:pre-wrap;">${escapeHtml(String(r.value))}</td></tr>`
      )
      .join('') +
    `</table>`;

  return { text, html };
};

let cachedTransporter: nodemailer.Transporter | null = null;
const getTransporter = () => {
  if (cachedTransporter) return cachedTransporter;
  const host = import.meta.env.SMTP_HOST;
  const port = Number(import.meta.env.SMTP_PORT ?? 587);
  const user = import.meta.env.SMTP_USER;
  const pass = import.meta.env.SMTP_PASS;
  if (!host || !user || !pass) throw new Error('SMTP config incompleet');
  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return cachedTransporter;
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json()) as Payload;
    const { formType, hp_url, fields } = body;

    if (!formType || !['contact', 'offerte', 'demo'].includes(formType)) {
      return new Response(JSON.stringify({ error: 'Ongeldig formulier' }), { status: 400 });
    }

    // Honeypot — bots fill this, humans don't see it
    if (hp_url && hp_url.trim() !== '') {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    if (!fields || typeof fields !== 'object') {
      return new Response(JSON.stringify({ error: 'Ontbrekende velden' }), { status: 400 });
    }

    const email = typeof fields.email === 'string' ? fields.email : '';
    const { text, html } = buildBody(formType, fields);

    const transporter = getTransporter();
    await transporter.sendMail({
      from: import.meta.env.SMTP_FROM,
      to: import.meta.env.SMTP_TO,
      replyTo: email || undefined,
      subject: `${SUBJECTS[formType]} — ${
        (typeof fields.name === 'string' && fields.name) ||
        (typeof fields.naam === 'string' && fields.naam) ||
        (typeof fields.firstName === 'string' && fields.firstName) ||
        'geen naam'
      }`,
      text,
      html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.error('send-mail error:', e);
    return new Response(JSON.stringify({ error: 'Versturen mislukt' }), { status: 500 });
  }
};
