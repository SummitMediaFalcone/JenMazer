// ---------------------------------------------------------------------------
// Every piece of business info lives here. Change it once, it updates sitewide.
// Items marked TODO are blocking launch — see CONTENT-CHECKLIST.md.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Jennifer Mazer',
  // She goes by Jen — one N. Used in body copy; the full name stays for the
  // logo, the legal footer, and structured data.
  firstName: 'Jen',
  // Shown under the signature in the header.
  tagline: 'Party Design · Custom Banners · Hand-Painted Art',

  // Used in <title> and structured data.
  shortDescription:
    'Party design, hand-painted banners, custom cookies and pastries, and original paintings by Jen Mazer.',

  url: 'https://jennifermazer.com', // TODO: confirm domain

  // --- Contact ------------------------------------------------------------
  email: 'hello@jennifermazer.com', // TODO
  phone: '', // TODO — optional, but strongly recommended for the party side

  // --- Location -----------------------------------------------------------
  // REQUIRED for the party/event side of the business. Baby showers, banners,
  // and pastries are local searches ("baby shower decorations near me"), and
  // Google will not rank her for them without a city and service area.
  location: {
    city: '', // TODO e.g. 'Tampa'
    state: '', // TODO e.g. 'FL'
    // Towns/counties she'll travel to for events. Each one becomes a keyword.
    serviceArea: [] as string[], // TODO e.g. ['Tampa', 'St. Petersburg', 'Clearwater']
  },

  // --- Social -------------------------------------------------------------
  // Leave a value empty to hide that icon. Instagram matters most for artists.
  social: {
    instagram: '', // TODO e.g. 'https://instagram.com/jennifermazerart'
    facebook: '',
    pinterest: '', // Genuinely valuable for party + baby shower discovery
    etsy: '',
    tiktok: '',
  },

  // --- Commerce -----------------------------------------------------------
  // Stripe Payment Links. Jen creates these in the Stripe dashboard (no code),
  // then pastes the URL into each artwork in artworks.ts.
  commerce: {
    provider: 'stripe' as const,
    // Shown on artwork pages so buyers know what to expect before clicking.
    shippingNote: 'Shipping calculated at checkout. Ships within 3–5 business days.',
    returnsNote: 'Originals are final sale. Prints may be returned within 14 days if undamaged.',
  },

  // --- Analytics ----------------------------------------------------------
  analytics: {
    plausibleDomain: '', // TODO optional — privacy-friendly, no cookie banner needed
    googleAnalyticsId: '', // TODO optional — leave blank to skip
  },
} as const;

// Navigation. Order here is the order rendered.
export const nav = [
  { label: 'Parties & Events', href: '/#parties' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Art', href: '/#art' },
  { label: 'About', href: '/#about' },
];
