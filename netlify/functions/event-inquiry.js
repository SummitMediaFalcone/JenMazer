/**
 * Event inquiry handler — sends the lead to Jennifer via Resend.
 *
 * This is written and ready. To turn it on:
 *
 *   1. npm install resend
 *   2. In Netlify → Site settings → Environment variables, add:
 *        RESEND_API_KEY   (from resend.com/api-keys)
 *        INQUIRY_TO       jennifer's email
 *        INQUIRY_FROM     e.g. "Jennifer Mazer <inquiries@jennifermazer.com>"
 *                         The domain must be verified in Resend first.
 *   3. In src/components/EventInquiry.astro set:
 *        const ENDPOINT = '/.netlify/functions/event-inquiry'
 *
 * Until step 3, the form uses its mailto fallback and this file never runs.
 * Nothing here guesses at keys or addresses — it reads them from the
 * environment and fails loudly if they're missing.
 */

const FIELD_LABELS = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  source: 'Heard about her via',
  eventType: 'Event type',
  eventDate: 'Event date',
  guestCount: 'Guest count',
  location: 'Location',
  budget: 'Budget',
  theme: 'Theme / colors',
  message: 'Details',
};

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const { RESEND_API_KEY, INQUIRY_TO, INQUIRY_FROM } = process.env;
  if (!RESEND_API_KEY || !INQUIRY_TO || !INQUIRY_FROM) {
    console.error('Missing RESEND_API_KEY, INQUIRY_TO, or INQUIRY_FROM');
    return new Response('Email is not configured', { status: 500 });
  }

  const form = await request.formData();

  // Honeypot — respond 200 so bots don't learn anything, but send nothing.
  if (form.get('_company')) {
    return new Response(null, { status: 303, headers: { Location: '/thank-you' } });
  }

  const name = String(form.get('name') || '').trim();
  const email = String(form.get('email') || '').trim();
  if (!name || !email) {
    return new Response('Name and email are required', { status: 400 });
  }

  const rows = Object.entries(FIELD_LABELS)
    .map(([key, label]) => [label, String(form.get(key) || '').trim()])
    .filter(([, value]) => value !== '');

  const services = form.getAll('services').map(String).filter(Boolean);
  if (services.length) rows.push(['Needs', services.join(', ')]);

  const eventType = String(form.get('eventType') || 'New event');
  const budget = String(form.get('budget') || '');

  // Subject carries the two things that decide whether she opens it now or
  // later — event type and budget.
  const subject = `Event inquiry — ${eventType}${budget ? ` (${budget})` : ''} — ${name}`;

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px">
      <h2 style="font-family:Georgia,serif;color:#262a68;margin:0 0 4px">New event inquiry</h2>
      <p style="color:#5a5d75;margin:0 0 20px">From the website form.</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:9px 12px 9px 0;vertical-align:top;color:#5a5d75;
                       font-size:12px;letter-spacing:.08em;text-transform:uppercase;
                       white-space:nowrap;border-bottom:1px solid #ece2cf">
              ${escapeHtml(label)}
            </td>
            <td style="padding:9px 0;vertical-align:top;color:#1a1c2e;font-size:15px;
                       border-bottom:1px solid #ece2cf">
              ${escapeHtml(value).replace(/\n/g, '<br>')}
            </td>
          </tr>`
          )
          .join('')}
      </table>
      <p style="margin:22px 0 0">
        <a href="mailto:${escapeHtml(email)}"
           style="background:#f4611a;color:#fff;padding:11px 20px;border-radius:4px;
                  text-decoration:none;font-size:14px;font-weight:600">
          Reply to ${escapeHtml(name)}
        </a>
      </p>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: INQUIRY_FROM,
      to: [INQUIRY_TO],
      reply_to: email,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error('Resend error', response.status, await response.text());
    return new Response('Could not send the message', { status: 502 });
  }

  return new Response(null, { status: 303, headers: { Location: '/thank-you' } });
};
