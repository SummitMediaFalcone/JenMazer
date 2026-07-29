// ---------------------------------------------------------------------------
// THE ARTWORK CATALOG
//
// Add one entry per piece. Everything else is automatic: the gallery grid, the
// /art/<slug> detail page, the sitemap entry, and the Product structured data
// that lets Google show the price in search results.
//
// The `description` field is the highest-leverage SEO on the whole site.
// 60–150 words per piece, in Jen's voice. What it's made of, what inspired it,
// where it belongs in a home. Nobody else writes these, which is exactly why
// they rank.
//
// NOTE: the descriptions below are drafts written from the photographs. They
// describe what's visibly there and nothing more — no invented backstory. They
// should still be replaced with Jen's own words before launch.
// ---------------------------------------------------------------------------

export type Artwork = {
  slug: string;
  title: string;
  /** Filename inside /public/images/art/ */
  image: string;
  /** Describes the image for screen readers AND Google Images. Be literal. */
  alt: string;
  medium: string;
  /** Human readable, e.g. '18 × 24 in'. Also used in structured data. */
  dimensions: string;
  year: number | null;
  price: number | null;
  currency: 'USD';
  kind: 'original' | 'print' | 'commission';
  /** Stripe Payment Link. Empty string renders an "Inquire" button instead. */
  stripeLink: string;
  soldOut: boolean;
  /** Shows the piece in the homepage hero collage. Pick 3. */
  featured: boolean;
  description: string;
  /** Freeform tags — drive related-work links and long-tail keywords. */
  tags: string[];
};

export const artworks: Artwork[] = [
  {
    slug: 'bloom',
    title: 'Bloom',
    image: 'bloom-lips-cherry-blossoms-jenifer-mazer.jpg',
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
    description: `Red lips caught mid-bite on a green leaf, ringed by pink and white cherry blossoms against near-black. The contrast is the whole piece — the lips saturated and glossy, the blossoms painted petal by petal in soft washes with speckled centers and yellow-green stamens. Every flower is worked individually rather than repeated, so the cluster reads as a real branch rather than a pattern. It's the boldest thing in the collection and it holds a wall from across a room. Suited to a space that wants one strong focal point instead of a soft note.`,
    tags: ['lips', 'cherry blossom', 'floral', 'bold', 'black', 'statement piece', 'pop art'],
  },
  {
    slug: 'citrus-grove',
    title: 'Citrus Grove',
    image: 'citrus-grove-lemons-oranges-jenifer-mazer.jpg',
    alt: 'Acrylic painting of lemons, oranges, and white orange blossoms scattered across a deep navy background',
    medium: 'Acrylic on canvas',
    dimensions: '', // TODO
    year: null, // TODO
    price: null, // TODO
    currency: 'USD',
    kind: 'original',
    stripeLink: '', // TODO
    soldOut: false,
    featured: true,
    description: `A dense Mediterranean citrus pattern in acrylic on canvas. Lemons, oranges, and white orange blossoms drift edge to edge across a deep navy ground, each fruit built in layers so the peel catches light and the rind reads dimpled and real. The blossoms are painted individually — five petals, green sepals, yellow centers — and the olive leaves are angled so nothing repeats. Because the pattern runs off every edge, it reads as a fragment of something larger. Brings warmth to a kitchen or dining room without needing anything else on the wall.`,
    tags: ['citrus', 'lemons', 'oranges', 'mediterranean', 'kitchen art', 'navy', 'botanical', 'pattern'],
  },
  {
    slug: 'koi-pond',
    title: 'Koi Pond',
    image: 'koi-pond-water-lilies-jenifer-mazer.jpg',
    alt: 'Painting of two koi fish, one orange and one red and white, swimming among green lily pads and white water lilies on deep blue water',
    medium: 'Acrylic on paper',
    dimensions: '', // TODO
    year: null, // TODO
    price: null, // TODO
    currency: 'USD',
    kind: 'original',
    stripeLink: '', // TODO
    soldOut: false,
    featured: true,
    description: `Two koi turning through deep blue water — one solid orange, one red and white — among lily pads and open white water lilies. The water is built in layered blues that darken toward the stones at the bottom, so the fish read as suspended rather than floating flat. Fins are painted in fine pale strokes that catch light against the dark ground, and each lily centre is worked in yellow filaments. Quieter than the citrus work and cooler in palette. Suits a bedroom, an office, or anywhere that wants calm rather than punch.`,
    tags: ['koi', 'fish', 'water lily', 'pond', 'blue', 'calm', 'nature', 'japanese'],
  },
  {
    slug: 'three-lemons-on-navy',
    title: 'Three Lemons on Navy',
    image: 'three-lemons-on-navy-jenifer-mazer.jpg',
    alt: 'Acrylic painting of three bright yellow lemons with green leaves on a navy blue canvas',
    medium: 'Acrylic on canvas',
    dimensions: '', // TODO
    year: null, // TODO
    price: null, // TODO
    currency: 'USD',
    kind: 'original',
    stripeLink: '', // TODO
    soldOut: false,
    featured: false,
    description: `Three lemons painted large and close, glowing against deep navy. The simplicity is the point — no horizon, no table, just fruit and leaf and colour. Built in translucent acrylic layers so the yellow reads warm at the centre and cools toward the rind, with dimpled peel texture picked out in fine dots and the canvas weave left visible through the ground. Small enough for a shelf or a kitchen counter, bold enough to hold a wall on its own. Reads as a companion piece to Citrus Grove.`,
    tags: ['lemons', 'still life', 'kitchen art', 'navy', 'botanical', 'small original'],
  },
  {
    slug: 'autumn-pumpkin',
    title: 'Autumn Pumpkin',
    image: 'autumn-pumpkin-sunflower-jenifer-mazer.jpg',
    alt: 'Painting of an orange pumpkin framed by a yellow sunflower, white blossoms, blue berries, and a lavender magnolia on a warm tan canvas',
    medium: 'Acrylic on canvas',
    dimensions: '', // TODO
    year: null, // TODO
    price: null, // TODO
    currency: 'USD',
    kind: 'original',
    stripeLink: '', // TODO
    soldOut: false,
    featured: false,
    description: `An orange pumpkin on a warm tan ground, framed by a sunflower, a lavender magnolia, trailing white blossoms and clusters of dark blue berries. The tan ground is the departure here — where the citrus work uses navy for contrast, this one sits in warm neutrals, which makes it easier to place in a room that already has a lot going on. Ribbing on the pumpkin is picked out in fine white and deeper orange lines. A seasonal piece that doesn't have to come down in November.`,
    tags: ['pumpkin', 'sunflower', 'autumn', 'fall decor', 'floral', 'seasonal', 'neutral'],
  },
];

export const featuredArtworks = artworks.filter((a) => a.featured);

/**
 * Installation shot of the citrus pieces hung together. Not a separate work —
 * it's the "what does it look like on a real wall" image, which is the single
 * most common thing a hesitant buyer wants to see before committing.
 */
export const roomShot = {
  image: 'citrus-triptych-on-wall-jenifer-mazer.jpg',
  alt: 'Three of Jenifer Mazer\'s navy citrus paintings hung together on a wall — two small canvases of oranges and lemons above a large citrus pattern canvas',
};

export function formatPrice(price: number | null, currency = 'USD'): string {
  if (price === null) return 'Price on request';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}
