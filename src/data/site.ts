// ---------------------------------------------------------------------------
// Every piece of business info lives here. Change it once, it updates sitewide.
// Items marked TODO are blocking launch — see CONTENT-CHECKLIST.md.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Jenifer Mazer',
  // She goes by Jen — one N. Used in body copy; the full name stays for the
  // logo, the legal footer, and structured data.
  firstName: 'Jen',
  // Shown under the signature in the header.
  tagline: 'Party Design · Custom Banners · Hand-Painted Art',

  // Used in <title> and structured data.
  shortDescription:
    'Party design, hand-painted banners, custom cookies and pastries, and original paintings by Jen Mazer.',

  url: 'https://jenifermazer.com', // TODO: confirm domain

  // --- Contact ------------------------------------------------------------
  email: 'hello@jenifermazer.com', // TODO
  phone: '', // TODO — optional, but strongly recommended for the party side

  // --- Location -----------------------------------------------------------
  // This is what powers the whole party side. Baby showers, banners, and
  // pastries are local searches ("baby shower decorations near me"), and the
  // LocalBusiness schema on the homepage only renders once a city is set.
  location: {
    city: 'West Palm Beach',
    state: 'FL',
    // Towns she genuinely works. These become areaServed in the structured
    // data and the visible "serving" line.
    //
    // Ordered by proximity, and deliberately NOT padded out. Proximity is a
    // real ranking factor for service-area businesses, and an overstuffed list
    // reads as less specific to Google, not more. Twelve honest cities beat
    // forty aspirational ones.
    serviceArea: [
      'West Palm Beach',
      'Lake Worth Beach',
      'Lantana',
      'Palm Beach Gardens',
      'Wellington',
      'Royal Palm Beach',
      'Greenacres',
      'Boynton Beach',
      'Delray Beach',
      'Jupiter',
      'Boca Raton',
      'Port St. Lucie',
    ] as string[],

    // Reachable, but a 60–90 minute drive with a car full of desserts. Named
    // on the site as "will travel" rather than claimed as a home market —
    // claiming Miami outright would dilute the local signal without ever
    // ranking there, since the vendor bench down south is the deepest in the
    // state. See SEO-PLAN.md §2.
    travelsTo: ['Fort Lauderdale', 'Miami', 'Stuart', 'Vero Beach'] as string[],
  },

  // --- Social -------------------------------------------------------------
  // Leave a value empty to hide that icon. Instagram matters most for artists.
  social: {
    instagram: '', // TODO e.g. 'https://instagram.com/jenifermazerart'
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
