// ---------------------------------------------------------------------------
// Every piece of business info lives here. Change it once, it updates sitewide.
// Items marked TODO are blocking launch — see CONTENT-CHECKLIST.md.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Jennifer Mazer',
  // Shown under the signature in the header.
  tagline: 'Original Art · Custom Banners · Party Design',

  // Used in <title> and structured data.
  shortDescription:
    'Original paintings, art prints, custom banners, and full party design by artist Jennifer Mazer.',

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
  // Stripe Payment Links. Jenn creates these in the Stripe dashboard (no code),
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
  { label: 'Art', href: '/#art' },
  { label: 'Prints', href: '/#prints' },
  { label: 'Parties & Events', href: '/#parties' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Plan an Event', href: '/party-inquiry' },
];
