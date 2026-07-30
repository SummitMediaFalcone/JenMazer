/**
 * Email templates.
 *
 * Filename starts with an underscore so Vercel does not expose it as a route;
 * it is still bundled into any function that imports it.
 *
 * Written for email clients, not browsers: table layout, inline styles, no
 * flexbox/grid, no web fonts, no external CSS. Outlook in particular ignores
 * most of what a normal page relies on.
 *
 * The signature uses a cursive system-font stack rather than an image. An
 * image would render more consistently but most clients block remote images by
 * default, so the signature would be invisible on first open — which is
 * exactly when it matters.
 */

const BRAND = {
  navy: '#262a68',
  navyDeep: '#1b1e4d',
  lemon: '#ffd21e',
  orange: '#f4611a',
  cream: '#f7f1e4',
  ink: '#1a1c2e',
  muted: '#5a5d75',
  rule: '#ece2cf',
};

const SCRIPT_STACK =
  "'Snell Roundhand','Apple Chancery','Segoe Script','Brush Script MT',cursive";
const SANS_STACK =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

export const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Her signature, as a wordmark. Used to sign customer-facing mail. */
function signature(color = BRAND.navy, size = 34) {
  return `<span style="font-family:${SCRIPT_STACK};font-size:${size}px;line-height:1.1;color:${color};">Jenifer Mazer</span>`;
}

/** Outer chrome shared by both emails. */
function shell({ preheader, accentBar, body }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>Jenifer Mazer</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.cream};">
<div style="display:none;font-size:1px;color:${BRAND.cream};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.cream};padding:24px 12px;">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:6px;overflow:hidden;border:1px solid ${BRAND.rule};">
        <tr>
          <td style="background:${BRAND.navy};padding:22px 28px;">
            ${signature('#ffffff', 32)}
            <div style="font-family:${SANS_STACK};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${BRAND.lemon};padding-top:6px;">
              Party Design &middot; Hand-Painted Banners &middot; West Palm Beach
            </div>
          </td>
        </tr>
        <tr><td style="height:4px;background:${accentBar};font-size:0;line-height:0;">&nbsp;</td></tr>
        <tr><td style="padding:28px;">${body}</td></tr>
        <tr>
          <td style="background:${BRAND.navyDeep};padding:18px 28px;font-family:${SANS_STACK};font-size:12px;line-height:1.7;color:#b8bce0;">
            <a href="tel:9548999621" style="color:${BRAND.lemon};text-decoration:none;">(954) 899-9621</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:jenilana@live.com" style="color:${BRAND.lemon};text-decoration:none;">jenilana@live.com</a>
            &nbsp;&middot;&nbsp;
            <a href="https://www.jenifermazer.com" style="color:${BRAND.lemon};text-decoration:none;">jenifermazer.com</a>
            <br>
            <span style="color:#8f93bd;">West Palm Beach &amp; Palm Beach County, Florida</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

/** Detail rows, shared by both emails. */
function detailTable(rows) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
    ${rows
      .map(
        ([label, value]) => `<tr>
      <td style="padding:10px 14px 10px 0;vertical-align:top;font-family:${SANS_STACK};font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};white-space:nowrap;border-bottom:1px solid ${BRAND.rule};">${escapeHtml(label)}</td>
      <td style="padding:10px 0;vertical-align:top;font-family:${SANS_STACK};font-size:15px;color:${BRAND.ink};border-bottom:1px solid ${BRAND.rule};">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
    </tr>`
      )
      .join('')}
  </table>`;
}

/** Bulletproof-ish button (renders as a real box in Outlook too). */
function button(href, label, bg = BRAND.orange, fg = '#ffffff') {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0">
    <tr><td style="background:${bg};border-radius:4px;">
      <a href="${href}" style="display:inline-block;padding:13px 26px;font-family:${SANS_STACK};font-size:14px;font-weight:bold;color:${fg};text-decoration:none;">${escapeHtml(label)}</a>
    </td></tr>
  </table>`;
}

/* -------------------------------------------------------------------------
 * 1. The lead notification — to Jen
 * ---------------------------------------------------------------------- */
export function leadEmail({ name, email, phone, rows, eventType, budget }) {
  const headline = budget
    ? `${eventType} &middot; ${escapeHtml(budget)}`
    : escapeHtml(eventType);

  const body = `
    <div style="font-family:${SANS_STACK};font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.orange};font-weight:bold;">New enquiry</div>
    <h1 style="margin:6px 0 4px;font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.25;color:${BRAND.ink};font-weight:normal;">${escapeHtml(name)}</h1>
    <div style="font-family:${SANS_STACK};font-size:14px;color:${BRAND.muted};padding-bottom:20px;">${headline}</div>
    ${detailTable(rows)}
    <div style="padding-top:24px;">${button(`mailto:${escapeHtml(email)}?subject=${encodeURIComponent('Re: your party enquiry')}`, `Reply to ${name.split(' ')[0]}`)}</div>
    ${
      phone
        ? `<div style="padding-top:12px;font-family:${SANS_STACK};font-size:13px;color:${BRAND.muted};">or call <a href="tel:${escapeHtml(phone.replace(/[^\d+]/g, ''))}" style="color:${BRAND.orange};text-decoration:none;font-weight:bold;">${escapeHtml(phone)}</a></div>`
        : ''
    }
    <div style="padding-top:22px;margin-top:22px;border-top:1px solid ${BRAND.rule};font-family:${SANS_STACK};font-size:12px;color:${BRAND.muted};">
      Sent from the enquiry form at jenifermazer.com. Replying to this email goes straight to ${escapeHtml(name.split(' ')[0])}.
    </div>`;

  return shell({
    preheader: `${eventType}${budget ? ` — ${budget}` : ''} — ${name}`,
    accentBar: BRAND.orange,
    body,
  });
}

/* -------------------------------------------------------------------------
 * 2. The confirmation — to the customer, signed by Jen
 * ---------------------------------------------------------------------- */
export function confirmationEmail({ name, rows }) {
  const first = escapeHtml(String(name).split(' ')[0]);

  const body = `
    <h1 style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:26px;line-height:1.25;color:${BRAND.ink};font-weight:normal;">Thank you, ${first}.</h1>

    <p style="margin:0 0 14px;font-family:${SANS_STACK};font-size:15px;line-height:1.65;color:${BRAND.ink};">
      I have your details and I'm looking at them personally — there's no office
      and no assistant here, just me.
    </p>
    <p style="margin:0 0 22px;font-family:${SANS_STACK};font-size:15px;line-height:1.65;color:${BRAND.ink};">
      I'll come back to you within a day or two with what I can do and what it
      would cost. If your date is close and you'd rather talk it through now,
      call or text me on
      <a href="tel:9548999621" style="color:${BRAND.orange};text-decoration:none;font-weight:bold;">(954) 899-9621</a>.
    </p>

    <div style="font-family:${SANS_STACK};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${BRAND.muted};padding-bottom:8px;">What you sent me</div>
    ${detailTable(rows)}

    <div style="padding-top:26px;">
      <div style="font-family:${SANS_STACK};font-size:14px;color:${BRAND.muted};padding-bottom:2px;">Talk soon,</div>
      ${signature(BRAND.navy, 38)}
      <div style="font-family:${SANS_STACK};font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:${BRAND.muted};padding-top:6px;">
        Party Design &amp; Hand-Painted Art
      </div>
    </div>

    <div style="padding-top:24px;">${button('https://www.jenifermazer.com/#gallery', 'See more of my work', BRAND.navy)}</div>`;

  return shell({
    preheader: `Thanks ${first} — I've got your details and I'll be in touch within a day or two.`,
    accentBar: BRAND.lemon,
    body,
  });
}

export function textVersion(rows) {
  return rows.map(([label, value]) => `${label}: ${value}`).join('\n');
}
