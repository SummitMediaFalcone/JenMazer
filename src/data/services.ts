// ---------------------------------------------------------------------------
// THE PARTY & EVENT SIDE OF THE BUSINESS
//
// This sells differently from the art. Art is a national e-commerce search
// ("lemon painting original"). Events are a LOCAL search ("baby shower
// decorations near me"), which means Google ranks it on city, service area,
// and Google Business Profile — not on the strength of the artwork.
//
// That's why site.location must be filled in before launch. Without a city,
// none of these pages can rank for the searches that actually convert.
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  /** One line, benefit-first. Shown on the card. */
  blurb: string;
  /** Filename inside /public/images/parties/ */
  image: string;
  alt: string;
  /** Bullet list shown when the card expands. */
  includes: string[];
  /** e.g. 'From $85' — buyers self-qualify, saves Jenn time on dead inquiries. */
  startingAt: string;
  /** Long-tail phrases this service should rank for. Used in page copy + schema. */
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: 'custom-banners',
    title: 'Custom Hand-Painted Banners',
    blurb:
      'Hand-painted banners made for one occasion and one family — never a template, never mass printed.',
    image: 'banner-placeholder.svg', // TODO: add real photo
    alt: 'Hand-painted custom celebration banner by Jennifer Mazer', // TODO: describe the real photo
    includes: [
      'Fully custom lettering, colors, and artwork',
      'Birthdays, showers, graduations, weddings, anniversaries',
      'Holiday and seasonal designs',
      'Sizes from tabletop to full backdrop',
    ],
    startingAt: '', // TODO
    keywords: [
      'custom hand painted banner',
      'personalized birthday banner',
      'baby shower banner',
      'holiday banner',
    ],
  },
  {
    slug: 'baby-showers',
    title: 'Baby Showers',
    blurb:
      'Complete shower design — banner, table styling, favors, and dessert, all matched to one look.',
    image: 'baby-shower-placeholder.svg', // TODO: add real photo
    alt: 'Baby shower table styled and designed by Jennifer Mazer', // TODO
    includes: [
      'Custom theme and color palette',
      'Hand-painted banner and signage',
      'Dessert and pastry table',
      'Favors, place settings, and table styling',
      'Setup and breakdown',
    ],
    startingAt: '', // TODO
    keywords: [
      'baby shower planner',
      'baby shower decorations',
      'custom baby shower theme',
      'baby shower dessert table',
    ],
  },
  {
    slug: 'party-design',
    title: 'Party Design & Planning',
    blurb:
      'One person designing the whole party, so the banner, the table, and the cake actually match.',
    image: 'party-design-placeholder.svg', // TODO: add real photo
    alt: 'Party table designed and styled by Jennifer Mazer', // TODO
    includes: [
      'Birthdays, engagements, retirements, holidays',
      'Theme development and color direction',
      'Custom signage and hand-painted details',
      'Tablescape and dessert display',
      'Coordination from concept to setup',
    ],
    startingAt: '', // TODO
    keywords: [
      'party planner',
      'custom party design',
      'birthday party decorations',
      'themed party styling',
    ],
  },
  {
    slug: 'pastries-and-party-goods',
    title: 'Custom Pastries & Party Goods',
    blurb:
      'Cookies, pastries, and favors made to match the design — the edible half of the same idea.',
    image: 'pastries-placeholder.svg', // TODO: add real photo
    alt: 'Custom decorated pastries and party favors made by Jennifer Mazer', // TODO
    includes: [
      'Decorated cookies and custom pastries',
      'Dessert tables and treat boxes',
      'Matching favors and packaging',
      'Themed to your event design',
    ],
    startingAt: '', // TODO
    keywords: [
      'custom decorated cookies',
      'party dessert table',
      'custom party favors',
      'themed pastries',
    ],
  },
];

// ---------------------------------------------------------------------------
// IMPORTANT — food regulation
//
// Selling baked goods is regulated at the state level (US "cottage food" laws).
// Rules on what she can sell, where, how it's labeled, and whether a license or
// kitchen inspection is required vary a lot by state, and some states bar online
// or shipped sales entirely.
//
// Before the pastry side goes live, confirm her state's cottage food rules and
// add any required label or disclosure text here. I flagged this rather than
// guessed — getting it wrong is a real liability, not a design problem.
// ---------------------------------------------------------------------------
export const cottageFoodDisclosure = ''; // TODO if her state requires one
