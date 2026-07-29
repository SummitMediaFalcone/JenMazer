# What I Need From Jenn

The site is built and running. Everything below is what turns it from a shell
into something that ranks and sells. Ordered by what blocks launch first.

---

## 🔴 Blocking launch

### 1. Her signature
The whole logo depends on this.
- Sign **"Jennifer Mazer"** on unlined white paper, black felt-tip or brush pen
- Write it **large** — fill a landscape sheet
- Do it 2–3 times so we can pick the best one
- Photograph straight-on in daylight, no shadow across the paper

Right now the header shows her name in a script font. It looks fine, but it isn't
her handwriting, and that was the point of the request.

### 2. Photos of the artwork
The two citrus paintings you sent are already in the catalog as placeholders.
Drop the real files into `public/images/art/`.

Shooting them well matters more than people expect — bad photos of good paintings
kill sales:
- Flat, even light. Overcast daylight or shade is ideal. No flash, no direct sun.
- Shoot straight-on, canvas parallel to the camera, so edges stay square
- Include the full canvas edge-to-edge, then crop tight
- No hands, easels, or garage floor in frame

### 3. Prices
For each piece: the price, and whether it's an original or a print.
If prints will be sold too, the size options and price per size.

### 4. Sizes
Dimensions of each canvas, in inches.

### 5. Her city and service area
**This one blocks the entire party side of the business.** Baby showers, banners,
and pastries are local searches — "baby shower decorations near me." Without a city
in `src/data/site.ts`, Google has nothing to rank her on and those pages will get
no traffic no matter how good they look.

I need: her city, her state, and the towns she'll travel to for events.

### 6. Contact details
Email for inquiries, and a phone number if she wants one public. For event work a
phone number meaningfully increases inquiries — people booking a party want to talk.

---

## 🟡 Needed before it performs

### 7. Party and event photos
Right now the four service cards use placeholder graphics. Real photos of her
banners, a styled baby shower table, and her pastries would do more for bookings
than anything else on the page. Even phone photos of past events work.

### 8. Her bio
200–300 words in her own voice. Where she's from, how she started painting, what
she's drawn to, and how the party work grew out of the art. I wrote a draft in
`src/components/About.astro` to show the shape — it should be replaced, not edited.
It's a guess about her, and it reads like one.

### 9. A description per artwork
60–150 words each: medium, what inspired it, where it would hang.

This is the single highest-return thing on the whole site. It's how a page ranks
for "navy lemon kitchen painting" instead of ranking for nothing. Almost no artist
does it, which is exactly why it works. Same caveat as the bio — I drafted two to
show the format, but they're my words about her paintings, and hers will be better.

### 10. A photo of Jennifer
In her studio, ideally mid-work. Buyers connect with the maker; this image does
real work on the page.

### 11. Instagram / social links
Instagram most of all. Pinterest is genuinely worth setting up for the party side —
it's where people plan showers.

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

## Where things live

| What | File |
|---|---|
| Name, contact, location, social, analytics | `src/data/site.ts` |
| Artwork catalog + prices + Stripe links | `src/data/artworks.ts` |
| Party services | `src/data/services.ts` |
| The signature logo | `src/components/Signature.astro` |
| Her bio | `src/components/About.astro` |
| Print/edition claims | `src/components/Prints.astro` |
| Contact form endpoint | `src/components/Contact.astro` |
| Art photos | `public/images/art/` |
| Party photos | `public/images/parties/` |
