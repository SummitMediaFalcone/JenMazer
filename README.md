# Jennifer Mazer — Artist & Party Design

Astro static site. Original art and prints (sold via Stripe Checkout) plus
party/event services (custom banners, baby showers, pastries, party design).

## Run it

```bash
npm install
```

```bash
npm run dev -- --port 3006
```

Then open http://localhost:3006

```bash
npm run build
```

Builds to `dist/` — drop that on any static host.

## Adding an artwork

Add one entry to `src/data/artworks.ts`. Everything else is automatic: the
gallery grid, the `/art/<slug>` page, the sitemap entry, and the Product
structured data that puts the price in Google results.

```ts
{
  slug: 'harbor-light',              // becomes /art/harbor-light
  title: 'Harbor Light',
  image: 'harbor-light-jennifer-mazer.jpg',  // lives in public/images/art/
  alt: 'Acrylic painting of ...',    // literal description — this is SEO
  medium: 'Acrylic on canvas',
  dimensions: '18 × 24 in',
  year: 2026,
  price: 850,
  currency: 'USD',
  kind: 'original',
  stripeLink: 'https://buy.stripe.com/...',  // '' renders an Inquire button
  soldOut: false,
  featured: true,                    // shows in the hero collage
  description: '...',                // 60–150 words, in Jenn's voice
  tags: ['citrus', 'kitchen art'],
}
```

## Marking something sold

Set `soldOut: true` and deactivate the Stripe link in her dashboard. The card
renders "Sold" and the structured data updates to `SoldOut` automatically.

## Deploy

Push to GitHub, connect to Netlify or Vercel. Build command `npm run build`,
publish directory `dist`. Free tier is plenty for this.

Before going live, set the real domain in `astro.config.mjs`, `src/data/site.ts`,
and `public/robots.txt` — canonical URLs, the sitemap, and every OG tag are built
from it.

## Docs

- `PLAN.md` — the build plan and launch sequence
- `CONTENT-CHECKLIST.md` — what's still needed from Jenn
- `ART-INDUSTRY-RESEARCH.md` — what other working artists use, and why this is built this way

## Current state

Working: full landing page, per-artwork pages, SEO (meta, OG, JSON-LD, sitemap,
robots), Stripe-ready buy buttons, responsive, light/dark, accessible.

Placeholder — needs real content:
- Signature logo is a script font, not her handwriting
- All images are generated placeholders
- Bio, artwork descriptions, and print specs are drafts I wrote, not hers
- No prices, dimensions, city, or Stripe links yet
- Contact form has no endpoint (renders as an email link until it does)
