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

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method not allowed');
  }

  const { RESEND_API_KEY, INQUIRY_TO, INQUIRY_FROM } = process.env;
  if (!RESEND_API_KEY || !INQUIRY_TO || !INQUIRY_FROM) {
    console.error('Missing RESEND_API_KEY, INQUIRY_TO, or INQUIRY_FROM');
    return res.status(500).send('Email is not configured');
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
  const eventType = get('eventType') || 'New event';

  // Event type and budget in the subject — the two things that decide whether
  // she opens it now or tonight.
  const subject = `Party inquiry — ${eventType}${budget ? ` (${budget})` : ''} — ${name}`;

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px">
      <h2 style="font-family:Georgia,serif;color:#262a68;margin:0 0 4px">New party inquiry</h2>
      <p style="color:#5a5d75;margin:0 0 20px">From jenifermazer.com</p>
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

  try {
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
      return res.status(502).send('Could not send the message');
    }
  } catch (err) {
    console.error('Resend request failed', err);
    return res.status(502).send('Could not send the message');
  }

  res.setHeader('Location', '/thank-you');
  return res.status(303).end();
}
