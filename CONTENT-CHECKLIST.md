# What I Need From Jen

Photos are all in and wired up — 5 paintings, a banner, and 21 party/dessert
photos across the gallery. Everything below is what's still missing.

---

## 🔴 Blocking launch

### 1. Her city and service area
**This blocks the entire party side of the business.** Baby showers, banners, and
pastries are local searches — "baby shower decorations near me." Without a city in
`src/data/site.ts`, Google has nothing to rank her on and those pages get no
traffic no matter how good they look. The LocalBusiness structured data is written
and simply doesn't render until a city is set.

I need: her city, her state, and the towns she'll travel to for events.

### 2. Her signature
The whole logo depends on this.
- Sign **"Jennifer Mazer"** on unlined white paper, black felt-tip or brush pen
- Write it **large** — fill a landscape sheet
- Do it 2–3 times so we can pick the best one
- Photograph straight-on in daylight, no shadow across the paper

The header currently shows her name in a script font. It looks fine, but it isn't
her handwriting, and that was the point of the request.

### 3. Prices
Per painting: price, and original vs. print. If prints will be sold, the size
options and price per size.

For the party side: a "starting at" figure per service. Those fields are empty and
the cards hide the line until they're filled. Worth adding — buyers self-qualify,
which saves her hours on inquiries that were never a fit.

### 4. Canvas sizes
Dimensions of each of the five paintings, in inches.

### 5. Contact details
Email for inquiries, and a phone number if she wants one public. For event work a
phone number meaningfully increases inquiries — people booking a party want to talk.

---

## 🟡 Needed before it performs

### 6. Her bio
200–300 words in her own voice. Where she's from, how she started painting, what
she's drawn to, and how the party work grew out of the art. There's a draft in
`src/components/About.astro` to show the shape — replace it rather than edit it.
It's written from the photographs, not from knowing her.

### 7. A description per artwork
60–150 words each: medium, what inspired it, where it would hang.

This is the single highest-return thing on the whole site. It's how a page ranks
for "navy lemon kitchen painting" instead of ranking for nothing. Almost no artist
does it, which is exactly why it works.

I drafted all five from the photographs. They describe what's visibly in each
painting and nothing more — no invented backstory. They're honest, but they aren't
hers, and hers will be better.

### 8. Print specs — confirm before publishing
`src/components/Prints.astro` describes archival giclée on cotton rag, pigment
inks, and signed/numbered limited editions. **Those are industry-standard claims I
wrote as a template, not facts about her process.** They're promises to buyers.
Confirm or correct every one before launch.

### 9. A studio photo of Jennifer
Her headshot is in and works. A shot of her actually painting would do more —
buyers connect with process.

### 10. Instagram / social links
Instagram most of all. Pinterest is genuinely worth setting up for the party
side — it's where people plan showers.

### 11. Better light on future photos
The work is great; some of the photos are dim kitchen shots. She doesn't need a
camera, just a window. Daylight, plain surface, no packaging in frame. The unicorn
cookies and the cannoli platter are the benchmark — those two shots are doing the
most work on the page right now.

---

## 🟢 Setup tasks (I can do these, need accounts)

### 12. Domain
Check `jennifermazer.com` now, before anything gets printed on a business card.
If it's taken, `jennifermazerart.com` or `jennifermazerstudio.com`.

### 13. Stripe account
She creates it at stripe.com — I can't and shouldn't set up an account or handle
banking details on her behalf. Once it exists, she creates one Payment Link per
piece and sends me the URLs, or pastes them into `src/data/artworks.ts` herself.

### 14. Contact form endpoint
Free Formspree account, or Netlify Forms if we deploy to Netlify. Until this is
connected the form deliberately renders as an email link — a form that silently
throws away inquiries is worse than no form.

### 15. Google Business Profile
Free, and it's the main lever for the local party/event searches.

---

## ⚠️ One thing to check before the pastry side goes live

Selling baked goods is regulated per state (US "cottage food" laws). What she can
sell, where she can sell it, how it must be labeled, and whether she needs a license
or a kitchen inspection all vary — and some states don't allow online or shipped
sales at all.

I flagged this in `src/data/services.ts` rather than guessing, because getting it
wrong is a legal problem, not a design one. Worth ten minutes on her state's
agriculture department site before that section is public.

---

## Two photos I held back

They're in `photos-review/` rather than on the site:

- **Buffalo Bills birthday cake** — carries an NFL logo on an edible image
  topper and a real person's name piped on it. Publishing a trademarked team
  logo on a commercial services page invites a takedown, and the name is
  someone else's private detail. Not worth the risk for one cake photo.
- **Half-eaten ice cream cake** — a bystander in frame and a cut, melting
  cake. The work is fine; the photo isn't portfolio-grade.

Both are your call to overrule — just say so and I'll add them.

## Where things live

| What | File |
|---|---|
| Name, contact, location, social, analytics | `src/data/site.ts` |
| Artwork catalog + prices + Stripe links | `src/data/artworks.ts` |
| Party services + the portfolio gallery | `src/data/services.ts` |
| Event lead form options (budgets, event types) | `src/data/eventForm.ts` |
| The signature logo | `src/components/Signature.astro` |
| Her bio | `src/components/About.astro` |
| Print/edition claims | `src/components/Prints.astro` |
| Resend email handler | `netlify/functions/event-inquiry.js` |
| Art photos | `public/images/art/` |
| Banner photos | `public/images/banners/` |
| Party photos | `public/images/parties/` |
| Untouched full-res originals | `photos-original/` |

Site images were resized to a 1800px long edge and recompressed — 25.9 MB down
to 8.6 MB. Page speed is a Google ranking factor and this site is image-heavy,
so it mattered. Full-resolution originals are untouched in `photos-original/`
if she ever needs them for actual printing.
