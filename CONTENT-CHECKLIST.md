# Content Status

The site is live at **https://www.jenifermazer.com** and taking enquiries.
This is what's settled, what's optional, and what's deliberately not being done.

---

## ✅ Done

| | |
|---|---|
| Domain + hosting | jenifermazer.com on Vercel, auto-deploys from `main` |
| Lead form | Live. Emails Jen, and sends the customer a signed confirmation |
| Contact details | (954) 899-9621 · jenilana@live.com · Instagram |
| Location | West Palm Beach + 12 service-area cities, LocalBusiness schema active |
| Photos | 5 paintings, 1 banner, 21 party/dessert photos, her headshot |
| Logo | Her name as a script wordmark — signed off as final |
| SEO | Titles, metas, Person/Product/Service/FAQ schema, sitemap, robots |
| Mobile | Verified clean at 375px across all pages |

---

## 🚫 Decided against (don't re-raise)

**Published starting prices.** Jen consults on every job individually. `/pricing`
is built around that — it answers what moves the price, states there's no
minimum, and routes to the form. The `startingAt` fields in
`src/data/services.ts` stay empty and the cards hide that line automatically.

**Google Business Profile.** Not doing it for now. Worth knowing the tradeoff if
it ever comes back up: for a new local business it's usually the single biggest
lead source for the first six months, well ahead of the website. It's free and
Jen would have to verify it herself.

**Targeting "cheap party planning".** See `SEO-PLAN.md` §4 — those searches
return Amazon and Dollar Tree, not service providers, so the traffic doesn't
convert. The site uses "affordable / no minimums" instead, which reaches the
same budget-conscious buyer with the opposite intent.

---

## 🟡 Optional — would improve things, nothing is broken without them

### Her bio, in her own words
There's a draft in `src/components/About.astro`, written from her photographs —
what she makes, how she works. No invented history. Hers would convert better.

### A line or two per painting
`src/data/artworks.ts` has a draft description for each of the five. Same
caveat: they describe what's visibly in each painting and nothing more. Real
ones are the highest-return SEO on the art side, since almost no artist writes
them.

### Canvas sizes and prices for the paintings
Currently blank, so artwork pages show "Price on request" and the buy button
becomes "Inquire". That's a perfectly good default — worth filling in only if
she wants people buying art without a conversation first.

### A studio photo of Jen
The headshot works. A shot of her mid-work would do more — buyers connect with
process.

### Better light on future photos
Some of the food shots are dim kitchen photos. No camera needed, just a window
and a plain surface. The unicorn cookies and the cannoli platter are the
benchmark — those two are doing the most work on the page.

---

## Two photos held back

In `photos-review/`, not on the site:

- **Buffalo Bills cake** — carries an NFL logo and a real person's name piped on
  it. Publishing a trademarked team logo on a commercial page invites a
  takedown, and the name is someone else's private detail.
- **Half-eaten ice cream cake** — bystander in frame, cut and melting.

Both are yours to overrule — say so and I'll add them.

---

## Where things live

| What | File |
|---|---|
| Name, contact, location, social | `src/data/site.ts` |
| Artwork catalog | `src/data/artworks.ts` |
| Party services + gallery | `src/data/services.ts` |
| Lead form options | `src/data/eventForm.ts` |
| Email templates | `api/_email.js` |
| Email handler | `api/event-inquiry.js` |
| Logo | `src/components/Signature.astro` |
| Her bio | `src/components/About.astro` |
| Photos | `public/images/{art,banners,parties}/` |
| Full-res originals | `photos-original/` |

**Env vars live in Vercel**, not in the repo: `RESEND_API_KEY`, `INQUIRY_TO`,
`INQUIRY_FROM`. Changing one requires a redeploy to take effect.
