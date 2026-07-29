# Jennifer Mazer — Artist Website Plan

**Goal:** Get a fast, SEO-strong art studio landing page live ASAP, with the ability to
sell originals and prints directly via Stripe Checkout.

**Stack:** Astro (static) → deploys free to Netlify or Vercel. No server, no database,
sub-1s loads, perfect Lighthouse SEO out of the box.

**Logo:** Jennifer's signature, "Jennifer Mazer", as an inline SVG.

---

## Status

| Phase | What | State |
|---|---|---|
| 1 | Project scaffold, design system, components | ✅ Built |
| 2 | Signature logo (placeholder SVG, swap-ready) | ✅ Built — needs her real scan |
| 3 | SEO: meta, Open Graph, JSON-LD, sitemap, robots | ✅ Built |
| 4 | Stripe Checkout wiring | ✅ Built — needs her live payment links |
| 5 | Real content: bio, images, prices | ⏳ Waiting on you |
| 6 | Deploy to Netlify + custom domain | ⏳ After content |

---

## Phase 1 — Site structure

Single-page landing (fastest to launch, best for conversion) plus generated detail
pages for each artwork so every piece gets its own indexable URL.

```
/                       Landing page
  #work                 Gallery grid
  #about                Bio + studio story
  #prints               How prints/editions work (SEO + trust content)
  #commissions          Custom work inquiry
  #contact              Contact form
/art/[slug]             One page per artwork — the SEO workhorse
/404
```

Why a page per artwork: Google indexes each piece by title, medium, size, and
subject. "original abstract botanical print 18x24" is the kind of long-tail query
that actually converts, and you can only rank for it with a dedicated page carrying
Product structured data.

## Phase 2 — The signature logo

Currently an SVG placeholder built from bezier paths at
`src/components/Signature.astro`.

**To use her real signature (strongly recommended — it's her mark, not mine):**
1. She signs "Jennifer Mazer" on unlined white paper with a black felt-tip or brush pen.
   Big — fill a landscape sheet. Two or three attempts.
2. Photograph or scan it straight-on in even daylight.
3. Send it over. I'll vectorize it to a clean SVG path and drop it in — the swap is
   one file, everything else already points at it.

The signature is used as: header logo, footer mark, favicon, watermark on artwork
cards, and the Open Graph share image.

## Phase 3 — SEO plan

Built in already:
- Semantic HTML, one `<h1>` per page, real heading hierarchy
- Unique title + meta description per page (`src/components/Seo.astro`)
- Open Graph + Twitter cards so links preview properly when shared
- **JSON-LD structured data:**
  - `Person` / `VisualArtist` on the homepage → Google Knowledge Panel eligibility
  - `Product` + `Offer` on every artwork page → price and availability in results,
    and eligibility for free Google Shopping listings
  - `LocalBusiness` if she takes studio visits or sells locally
- `sitemap.xml` generated at build, `robots.txt` in place
- Descriptive `alt` text on every image (required — it's how art gets found in
  Google Images, which is a huge traffic source for artists)
- Lazy loading + explicit width/height on images (no layout shift)
- Clean, readable URLs: `/art/harbor-light-monotype` not `/art/?id=47`

Needs real content to activate:
- **Per-artwork copy.** Every piece needs 60–150 words: medium, dimensions, the
  story behind it, what inspired it, where it would hang. This is the single
  highest-leverage SEO work on an art site and it can only come from Jen.
- **A prints explainer.** Buyers search "archival giclée," "limited edition print,"
  "signed and numbered." Answering those questions ranks *and* closes sales.
- **Google Business Profile** if she's open to local/studio traffic.
- **Google Merchant Center** — free product listings put her work in the Shopping
  tab at no cost. The `Product` schema is already structured to feed it.

## Phase 4 — Selling (Stripe Checkout)

You chose Stripe Checkout links. Correct call for launching fast:

- No monthly fee. 2.9% + 30¢ per sale.
- Jen creates a Payment Link per piece in the Stripe dashboard — no code.
- Stripe hosts the checkout, handles cards/Apple Pay/Google Pay, tax, and receipts.
- Shipping is collected at checkout (configure a flat rate per size tier).
- Sold-out originals: she flips the link to inactive, and sets `soldOut: true`
  in the data file so the card renders "Sold" instead of "Buy."

**How to add a piece:** add one entry to `src/data/artworks.ts` with the Stripe
link. The gallery, the detail page, the sitemap, and the structured data all
update automatically.

Limits worth knowing up front: Payment Links don't track inventory across pieces,
and there's no built-in "cart" for buying two prints at once. Fine at this scale;
if volume grows, this migrates cleanly to Shopify without a redesign.

**Print-on-demand:** if she wants prints without holding stock, Printful integrates
later without touching the site design — worth revisiting once originals are selling.

## Phase 5 — What I need from you

See `CONTENT-CHECKLIST.md`. Short version: images, prices, bio, and her signature.

## Phase 6 — Launch

1. `npm install && npm run build` — verify clean build
2. Push to GitHub → connect to Netlify (free tier is plenty)
3. Point her domain (`jennifermazer.com` or similar — check availability now,
   before anything is printed)
4. Submit sitemap to Google Search Console
5. Set up Google Analytics or Plausible

---

## Industry research

See `ART-INDUSTRY-RESEARCH.md` for what established artists actually use and why
this approach is set up the way it is.
