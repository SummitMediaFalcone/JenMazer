// ---------------------------------------------------------------------------
// THE ARTWORK CATALOG
//
// Add one entry per piece. Everything else is automatic: the gallery grid, the
// /art/<slug> detail page, the sitemap entry, and the Product structured data
// that lets Google show the price in search results.
//
// The `description` field is the highest-leverage SEO on the whole site.
// 60–150 words per piece, in Jenn's voice. What it's made of, what inspired it,
// where it belongs in a home. Nobody else writes these, which is exactly why
// they rank.
// ---------------------------------------------------------------------------

export type Artwork = {
  slug: string;
  title: string;
  /** Filename inside /public/images/art/ — use descriptive names, not IMG_1234. */
  image: string;
  /** Describes the image for screen readers AND Google Images. Be literal. */
  alt: string;
  medium: string;
  /** Human readable, e.g. '18 × 24 in'. Also used in structured data. */
  dimensions: string;
  year: number | null;
  price: number | null;
  currency: 'USD';
  /** 'original' | 'print' | 'commission' */
  kind: 'original' | 'print' | 'commission';
  /** Stripe Payment Link. Empty string renders an "Inquire" button instead. */
  stripeLink: string;
  soldOut: boolean;
  /** Shows the piece in the homepage hero collage. Pick 3–5. */
  featured: boolean;
  description: string;
  /** Freeform tags — drive related-work links and long-tail keywords. */
  tags: string[];
};

export const artworks: Artwork[] = [
  {
    slug: 'bloom',
    title: 'Bloom',
    // TODO: replace with 'lips-cherry-blossoms-jennifer-mazer.jpg'
    image: 'lips-blossoms-placeholder.svg',
    alt: 'Painting of bold red lips biting a green leaf, surrounded by pink and white cherry blossoms on a black background',
    medium: 'Acrylic on canvas',
    dimensions: '', // TODO
    year: null, // TODO
    price: null, // TODO
    currency: 'USD',
    kind: 'original',
    stripeLink: '', // TODO
    soldOut: false,
    featured: true,
    // TODO — replace with Jenn's own words.
    description: `Red lips caught mid-bite on a green leaf, ringed by pink and white cherry blossoms against black. The contrast is the whole piece — the lips saturated and glossy, the blossoms painted petal by petal in soft washes with speckled centers, all of it floating on a ground so dark the flowers seem lit from inside. It's the boldest thing in the collection and it reads from across a room. Works where a room needs a focal point rather than a soft note.`,
    tags: ['lips', 'cherry blossom', 'floral', 'bold', 'black', 'statement piece', 'pop art'],
  },
  {
    slug: 'citrus-grove-lemons-and-oranges',
    title: 'Citrus Grove',
    // TODO: replace with the real photo, named descriptively for Google Images:
    // 'citrus-grove-lemons-oranges-jennifer-mazer.jpg'
    image: 'citrus-grove-placeholder.svg',
    alt: 'Acrylic painting of lemons, oranges, and white orange blossoms scattered across a deep navy background',
    medium: 'Acrylic on canvas',
    dimensions: '', // TODO
    year: null, // TODO
    price: null, // TODO
    currency: 'USD',
    kind: 'original',
    stripeLink: '', // TODO — Stripe Payment Link
    soldOut: false,
    featured: true,
    // TODO — replace with Jenn's own words. This is a starting draft only.
    description: `A dense Mediterranean citrus pattern painted in acrylic on canvas. Meyer lemons, blood oranges, and white orange blossoms drift across a deep navy ground, each fruit built up in layers so the peel catches light the way real citrus does. The palette is drawn from an Amalfi Coast garden at dusk — the moment the sky goes indigo and the fruit stays lit. It brings warmth to a kitchen, a dining room, or any wall that needs a shot of color without shouting.`,
    tags: ['citrus', 'lemons', 'oranges', 'mediterranean', 'kitchen art', 'navy', 'botanical'],
  },
  {
    slug: 'three-lemons-on-navy',
    title: 'Three Lemons on Navy',
    // TODO: replace with 'three-lemons-on-navy-jennifer-mazer.jpg'
    image: 'three-lemons-placeholder.svg',
    alt: 'Acrylic painting of three bright yellow lemons with green leaves on a navy blue canvas',
    medium: 'Acrylic on canvas',
    dimensions: '', // TODO
    year: null, // TODO
    price: null, // TODO
    currency: 'USD',
    kind: 'original',
    stripeLink: '', // TODO
    soldOut: false,
    featured: true,
    // TODO — replace with Jenn's own words.
    description: `Three lemons, painted large and close, glowing against deep navy. The simplicity is the point — no horizon, no table, just fruit and leaf and color. Built in translucent acrylic layers so the yellow reads warm at the center and cools toward the rind, with the canvas weave left visible through the ground. Small enough to sit on a shelf or a kitchen counter, bold enough to hold a wall on its own.`,
    tags: ['lemons', 'still life', 'kitchen art', 'navy', 'botanical', 'small original'],
  },

  // ---- Add more pieces below. Copy the block above and edit. ----
];

export const featuredArtworks = artworks.filter((a) => a.featured);

export function formatPrice(price: number | null, currency = 'USD'): string {
  if (price === null) return 'Price on request';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}
