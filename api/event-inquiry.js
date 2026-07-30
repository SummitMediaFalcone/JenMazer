/**
 * Event inquiry handler — sends the lead to Jen via Resend.
 *
 * This lives in /api because the site is deployed on VERCEL. Vercel serves any
 * file under a top-level /api directory as a serverless function, alongside the
 * static Astro build — no adapter needed.
 *
 * TO TURN IT ON, set these in Vercel → Settings → Environment Variables:
 *   RESEND_API_KEY   from resend.com/api-keys
 *   INQUIRY_TO       jenilana@live.com
 *   INQUIRY_FROM     e.g. "Jen Mazer <hello@jenifermazer.com>"
 *                    The domain must be verified in Resend first — that's what
 *                    the DKIM/SPF DNS records are for.
 *
 * Then redeploy. Until the env vars exist this returns 500 and the form falls
 * back to a prefilled email, so nothing is silently dropped either way.
 *
 * No API key is stored in this file or anywhere in the repo.
 */

import { leadEmail, confirmationEmail, textVersion } from './_email.js';

const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  eventType: 'Event type',
  guestCount: 'Guest count',
  eventDate: 'Event date',
  dateRange: 'Timeframe',
  budget: 'Budget',
  message: 'Notes',
};

// Fields the customer sees echoed back in their confirmation. Their own name
// and email are omitted — they know those, and repeating them reads like a
// form dump rather than a reply from a person.
const CUSTOMER_LABELS = {
  eventType: 'Event',
  guestCount: 'Guests',
  eventDate: 'Date',
  dateRange: 'Timeframe',
  budget: 'Budget',
  message: 'Notes',
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method not allowed');
  }

  const { RESEND_API_KEY, INQUIRY_TO, INQUIRY_FROM } = process.env;

  if (!RESEND_API_KEY || !INQUIRY_TO || !INQUIRY_FROM) {
    // Report which names are missing so setup isn't a guessing game. Only
    // presence is exposed, never a value — and the names are already public in
    // this repo, so nothing secret leaks.
    const missing = Object.entries({ RESEND_API_KEY, INQUIRY_TO, INQUIRY_FROM })
      .filter(([, v]) => !v)
      .map(([k]) => k);
    console.error('Missing env vars:', missing.join(', '));
    return res
      .status(500)
      .send(`Email is not configured. Missing in Vercel: ${missing.join(', ')}`);
  }

  // A key pasted with surrounding quotes or a stray newline is the most common
  // setup slip and produces a confusing 401 from Resend. Catch it here.
  const apiKey = RESEND_API_KEY.trim().replace(/^["']|["']$/g, '');
  if (!apiKey.startsWith('re_')) {
    console.error('RESEND_API_KEY does not look like a Resend key');
    return res
      .status(500)
      .send('RESEND_API_KEY is set but does not start with "re_" — check for quotes or a truncated paste.');
  }

  // Vercel parses application/x-www-form-urlencoded into req.body for us.
  // Checkbox groups arrive as an array when several are ticked, a string when
  // only one is — normalise both.
  const body = req.body || {};
  const get = (key) => {
    const v = body[key];
    return Array.isArray(v) ? v.join(', ') : String(v ?? '').trim();
  };

  // Honeypot: answer 303 so bots learn nothing, but send no email.
  if (get('_company')) {
    res.setHeader('Location', '/thank-you');
    return res.status(303).end();
  }

  const name = get('name');
  const email = get('email');
  if (!name || !email) {
    return res.status(400).send('Name and email are required');
  }

  const rows = Object.entries(FIELD_LABELS)
    .map(([key, label]) => [label, get(key)])
    .filter(([, value]) => value !== '');

  const services = get('services');
  if (services) rows.push(['Needs', services]);

  const budget = get('budget');
  const eventType = get('eventType') || 'New enquiry';
  const phone = get('phone');

  // Event type and budget in the subject — the two things that decide whether
  // she opens it now or tonight.
  const subject = `Party inquiry — ${eventType}${budget ? ` (${budget})` : ''} — ${name}`;

  const send = (payload) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

  // 1. The lead, to Jen. This one must succeed.
  try {
    const response = await send({
      from: INQUIRY_FROM,
      to: [INQUIRY_TO],
      reply_to: email,
      subject,
      html: leadEmail({ name, email, phone, rows, eventType, budget }),
      text: textVersion(rows),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Resend error (lead)', response.status, detail);
      // Surface Resend's own reason — "domain not verified", "from address not
      // allowed" and so on are actionable, and hiding them behind a generic
      // message turns a two-minute fix into an afternoon.
      return res
        .status(502)
        .send(`Resend rejected the message (${response.status}): ${detail}`);
    }
  } catch (err) {
    console.error('Resend request failed (lead)', err);
    return res.status(502).send('Could not send the message');
  }

  // 2. The confirmation, to the customer. Best-effort only — if this fails the
  //    enquiry still reached Jen, which is the part that matters, so it must
  //    never turn a successful submission into an error for the sender.
  try {
    const customerRows = Object.entries(CUSTOMER_LABELS)
      .map(([key, label]) => [label, get(key)])
      .filter(([, value]) => value !== '');
    if (services) customerRows.push(['Needs', services]);

    await send({
      from: INQUIRY_FROM,
      to: [email],
      reply_to: INQUIRY_TO,
      subject: 'Thanks — I have your party details',
      html: confirmationEmail({ name, rows: customerRows }),
      text:
        `Thank you, ${name.split(' ')[0]}.\n\n` +
        `I have your details and I'm looking at them personally. I'll come back ` +
        `to you within a day or two with what I can do and what it would cost.\n\n` +
        `If your date is close, call or text me on (954) 899-9621.\n\n` +
        `What you sent me:\n${textVersion(customerRows)}\n\n` +
        `Talk soon,\nJenifer Mazer\njenifermazer.com`,
    });
  } catch (err) {
    console.error('Confirmation email failed (non-fatal)', err);
  }

  res.setHeader('Location', '/thank-you');
  return res.status(303).end();
}
