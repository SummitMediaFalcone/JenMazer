# Art Industry Research — What Working Artists Actually Use

Research done July 2026. Sources at the bottom.

---

## The core finding

Successful independent artists don't pick one channel. They run a **hub-and-spoke**
model:

- **Hub:** their own website. They own the audience, keep 100% minus payment fees,
  control the brand, and build SEO equity that compounds.
- **Spokes:** marketplaces and social platforms that have traffic they don't.
  Lower margin, but they bring discovery.

The mistake most artists make is selling *only* on a marketplace. They rent an
audience instead of owning one, hand over 30–40%, and if the platform changes its
algorithm or terms their income disappears overnight.

Jen's site is the hub. Everything below is a spoke to add after launch.

---

## Marketplaces — the spokes, ranked for Jen

Her work is mixed illustration and prints, which changes the ranking. Fine-art-only
galleries like Saatchi skew toward large original canvases; illustration and print
work performs better on volume marketplaces.

| Platform | Best for | Cut | Verdict for Jen |
|---|---|---|---|
| **Etsy** | Prints, illustration, affordable art | ~6.5% + listing fees | **Start here.** 90M+ active buyers actively searching for art prints. The single best discovery channel for her category. |
| **Fine Art America** | Print-on-demand, no inventory | Artist sets markup | **Strong second.** Uploads once, they print and ship canvas/framed/merch. Zero risk, pure upside. |
| **Saatchi Art** | Original paintings, collectors | 35% | Only if she has higher-priced originals. Handles shipping/logistics globally. Big cut. |
| **Artfinder** | Curated independent originals | ~33–40% | Buyers arrive specifically wanting independent original work. Curated — she'd need to apply. |
| **Displate / Society6 / Redbubble** | Merch, posters | Varies | Low margin, low effort. Worth it as passive tail income, not a strategy. |
| **Amazon Fine Art** | Broad reach | Varies | Vetted/approval required. Later, if at all. |

**Recommended sequence:** launch her own site → Etsy shop for prints → Fine Art
America for print-on-demand → evaluate Saatchi/Artfinder once originals are priced
and selling.

## Website platforms — why we're not using Squarespace

Most artists land on Squarespace, Wix, Shopify, or Art Storefronts. They're fine.
Here's the honest tradeoff:

| | Squarespace / Wix | Shopify | **Astro (what we built)** |
|---|---|---|---|
| Monthly cost | $16–49 | $29+ | **$0** (free Netlify tier) |
| Page speed | Moderate | Moderate | **Excellent** — static, no JS framework |
| SEO control | Limited | Good | **Full** — custom JSON-LD, meta, sitemap |
| Design ceiling | Template-bound | Theme-bound | **Unlimited** |
| Jen edits herself | Yes, easily | Yes | Needs you, or a CMS added later |

The tradeoff is real: she can't drag-and-drop her own edits. If that turns out to
matter, a free headless CMS (Sanity, Decap) bolts on later and gives her a login
without changing the design or the URLs. Worth deciding once she's using the site
day to day.

Page speed matters more than it sounds. Google uses Core Web Vitals as a ranking
factor, and art sites are image-heavy — which is exactly where template builders
get slow and where a static site wins outright.

## Payments — why Stripe Checkout is right at this stage

Established artists selling meaningful volume are almost all on Shopify. Artists
launching are almost all on Stripe Payment Links or PayPal, for one reason: no
monthly fee before there's revenue.

- Stripe: 2.9% + 30¢, no monthly cost, hosted checkout, Apple/Google Pay included.
- Shopify: $29/mo before a single sale, but real inventory, cart, and shipping rules.

At Jen's stage Stripe is clearly correct. The migration point is roughly when she's
selling enough that manual link management gets annoying — call it 20+ active pieces
or multi-item orders becoming common.

## SEO — what actually moves the needle for artists

From the research, ordered by impact:

1. **A page per artwork with real written description.** 60–150 words per piece:
   medium, dimensions, inspiration, story, where it would hang. Nearly every artist
   skips this, which is exactly why it works. It's the difference between ranking
   for nothing and ranking for hundreds of long-tail queries.

2. **Product structured data (JSON-LD).** Puts price and availability directly in
   search results, and qualifies the work for **free Google Shopping listings** via
   Merchant Center — genuinely free traffic that most artists never claim.

3. **Google Images.** Massively underrated for artists. Descriptive filenames and
   real alt text — `harbor-light-monotype-jennifer-mazer.jpg`, not `IMG_4471.jpg`.

4. **Content that answers buyer anxiety.** "What is a giclée print?" "How do limited
   editions work?" "How do I choose a size?" These rank well *and* close sales,
   because a hesitant buyer is a buyer who doesn't check out.

5. **Speed and mobile.** Most art browsing is on a phone. Slow image-heavy sites
   lose both rankings and buyers.

6. **The artist's own name.** She should rank #1 for "Jennifer Mazer" — that's the
   query that fires after someone sees her work at a show or on Instagram. Person
   schema plus consistent name usage across every profile is how that happens.

## What established artists do beyond the website

- **Email list from day one.** Every artist interviewed on this says the same thing:
  the list outperforms social by a wide margin for actual sales. A launch email to
  500 people beats 50,000 Instagram followers. Add a signup before launch.
- **Instagram as the top of funnel**, website as the close. Process videos and
  work-in-progress reels outperform finished-piece photos consistently.
- **Limited editions with real scarcity.** Numbered runs ("12 of 50") drive urgency
  honestly. It works because it's true.
- **Tiered pricing.** Originals at the top, limited prints in the middle, open-edition
  prints and cards at the bottom. Lets someone buy in at $35 and come back at $800.
- **Consistent signature as brand mark.** Very common among illustrators and
  printmakers — which is exactly what you asked for, and it's the right instinct.

---

## Sources

- [Where to Sell Artwork Online: 15 Best Platforms for Artists in 2026 — FoundMyself](https://www.foundmyself.com/blog/where-to-sell-artwork-online/)
- [15 Best Websites for Selling Art Online in 2026 — ecomm.design](https://ecomm.design/best-websites-for-selling-art-online/)
- [10 Best Websites to Sell Your Art Online in 2026 — EntryThingy](https://www.entrythingy.com/blog/best-websites-to-sell-your-art-online)
- [How To Sell Art Online and Make Money in 2026 — Displate](https://blog.displate.com/how-sell-art-online-beginners-guide/)
- [Top 5 platforms to sell your art online in 2026 — Empowered Artists](https://www.empoweredartists.co/post/top-5-platforms-to-sell-your-art-where-to-sell-your-art-online)
- [SEO For Artists – The Top Overlooked SEO Secrets — FoundMyself](https://www.foundmyself.com/blog/seo-for-artists/)
- [SEO for artists: a quick guide to get your work found online — Gelato](https://www.gelato.com/blog/seo-for-artists)
- [SEO For Artist Websites: A Super Simple Guide — Chris Wilson Studio](https://chriswilsonstudio.com/seo-for-artist-websites/)
- [SEO for Artists Lesson 3 – Critical On-Site SEO Setup — Art Storefronts](https://blog.artstorefronts.com/seo-lesson-3-onsite-seo-setup/)
- [SEO Tips for Artists — Wix SEO Hub](https://www.wix.com/seo/learn/resource/seo-tips-for-artists)
