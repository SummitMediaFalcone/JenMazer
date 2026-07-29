// ---------------------------------------------------------------------------
// THE PARTY & EVENT SIDE OF THE BUSINESS
//
// This sells differently from the art. Art is a national e-commerce search
// ("lemon painting original"). Events are a LOCAL search ("baby shower
// decorations near me"), which means Google ranks it on city, service area,
// and Google Business Profile — not on the strength of the work.
//
// That's why site.location must be filled in before launch. Without a city,
// none of this can rank for the searches that actually convert.
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  /** One line, benefit-first. Shown on the card. */
  blurb: string;
  /** Filename inside /public/images/parties/ (or /banners/ — see imageDir). */
  image: string;
  imageDir: 'parties' | 'banners';
  alt: string;
  includes: string[];
  /** e.g. 'From $85' — buyers self-qualify, which saves Jenn dead inquiries. */
  startingAt: string;
  /** Long-tail phrases this service should rank for. */
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: 'custom-banners',
    title: 'Custom Hand-Painted Banners',
    blurb:
      'Hand-lettered banners painted for one occasion and one family — never a template, never mass printed.',
    image: 'twinkle-twinkle-little-star-baby-shower-banner-jennifer-mazer.jpg',
    imageDir: 'banners',
    alt: 'Large hand-painted baby shower banner on kraft paper reading "twinkle twinkle little star, how we wonder what you are" in pink and blue lettering with painted clouds, rainbows and gold stars',
    includes: [
      'Fully custom lettering, colors, and artwork',
      'Birthdays, showers, graduations, weddings, anniversaries',
      'Holiday and seasonal designs',
      'Sizes from tabletop to full backdrop',
    ],
    startingAt: '', // TODO
    keywords: [
      'custom hand painted banner',
      'personalized baby shower banner',
      'hand lettered party backdrop',
      'twinkle twinkle little star baby shower',
    ],
  },
  {
    slug: 'baby-showers',
    title: 'Baby Showers & Gender Reveals',
    blurb:
      'The banner, the table, the favors, and the dessert — all designed together so the whole room matches.',
    image: 'gender-reveal-blue-cookies-cream-cupcakes-jennifer-mazer.jpg',
    imageDir: 'parties',
    alt: 'Tray of gender reveal cupcakes — cookies-and-cream topped cupcakes beside pale blue frosted cupcakes with blue sprinkles',
    includes: [
      'Custom theme and color palette',
      'Hand-painted banner and signage',
      'Gender reveal cupcakes with hidden color centers',
      'Dessert and pastry table',
      'Favors, place settings, and table styling',
    ],
    startingAt: '', // TODO
    keywords: [
      'baby shower planner',
      'gender reveal cupcakes',
      'baby shower dessert table',
      'custom baby shower theme',
    ],
  },
  {
    slug: 'party-design',
    title: 'Party Design & Planning',
    blurb:
      'One person designing the whole party, so the banner, the table, and the cake actually match.',
    image: 'unicorn-rainbow-sugar-cookies-jennifer-mazer.jpg',
    imageDir: 'parties',
    alt: 'Two iridescent trays of decorated sugar cookies on a styled party table — pastel rainbow and cloud cookies above, pink, blue and purple unicorn head cookies below',
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
      'unicorn birthday party',
      'themed party styling',
    ],
  },
  {
    slug: 'pastries-and-party-goods',
    title: 'Custom Pastries & Party Goods',
    blurb:
      'Cannoli, cream puffs, decorated cookies, and cupcakes made to match the design — the edible half of the same idea.',
    image: 'cannoli-cream-puffs-dessert-platter-jennifer-mazer.jpg',
    imageDir: 'parties',
    alt: 'White platter of filled cannoli behind a row of powdered-sugar cream puffs with pistachio, vanilla and lemon cream fillings',
    includes: [
      'Filled cannoli and cream puffs',
      'Hand-decorated sugar cookies',
      'Cupcakes, layer cakes, and sheet cakes',
      'Chocolate-dipped pretzels and treat boxes',
      'Themed to your event design',
    ],
    startingAt: '', // TODO
    keywords: [
      'custom decorated cookies',
      'homemade cannoli',
      'party dessert table',
      'custom cupcakes',
    ],
  },
];

// ---------------------------------------------------------------------------
// THE PORTFOLIO GALLERY
//
// Real photos of past work. This is what books events — far more than any copy
// on the page. Ordered strongest first; the grid reads top-left down.
// ---------------------------------------------------------------------------

export type GalleryItem = {
  image: string;
  dir: 'parties' | 'banners';
  alt: string;
  /** Short caption shown on hover / below the image. */
  caption: string;
  category: 'Cookies' | 'Cakes & Cupcakes' | 'Pastries' | 'Banners' | 'Tables';
};

export const gallery: GalleryItem[] = [
  {
    image: 'unicorn-rainbow-sugar-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Iridescent trays of pastel rainbow and cloud sugar cookies above pink, blue and purple unicorn head cookies with gold horns',
    caption: 'Unicorn & rainbow cookies',
    category: 'Cookies',
  },
  {
    image: 'twinkle-twinkle-little-star-baby-shower-banner-jennifer-mazer.jpg',
    dir: 'banners',
    alt: 'Hand-painted kraft paper banner reading "twinkle twinkle little star, how we wonder what you are" with clouds, rainbows and gold stars',
    caption: 'Twinkle Twinkle baby shower banner',
    category: 'Banners',
  },
  {
    image: 'flamingo-sugar-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Tray of flamingo-shaped sugar cookies iced in coral pink with pale pink heart wings and black beaks',
    caption: 'Flamingo cookies',
    category: 'Cookies',
  },
  {
    image: 'cannoli-cream-puffs-dessert-platter-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Platter of filled cannoli behind powdered-sugar cream puffs with pistachio, vanilla and lemon fillings',
    caption: 'Cannoli & cream puffs',
    category: 'Pastries',
  },
  {
    image: 'easter-egg-bunny-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Plate of Easter cookies — large pastel-striped egg cookies with piped detail, plus bunny faces, carrots and sprinkle-topped chicks',
    caption: 'Easter cookies',
    category: 'Cookies',
  },
  {
    image: 'christmas-gingerbread-snowflake-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Gingerbread people with piped faces and icing trim alternating with pale blue iced snowflake cookies',
    caption: 'Gingerbread & snowflakes',
    category: 'Cookies',
  },
  {
    image: 'gold-pink-chocolate-cupcakes-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Box of chocolate cupcakes with swirled vanilla buttercream, gold pearls, gold sprinkles and pale pink beads',
    caption: 'Gold & blush cupcakes',
    category: 'Cakes & Cupcakes',
  },
  {
    image: 'halloween-eyeball-spider-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Halloween treats — white chocolate covered cookies piped as bloodshot eyeballs beside chocolate spiders with candy eyes',
    caption: 'Halloween eyeballs & spiders',
    category: 'Cookies',
  },
  {
    image: 'tiered-cookie-dessert-display-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Two white tiered dessert stands holding iced cookies in pink, green, blue and sprinkle-topped designs',
    caption: 'Tiered dessert display',
    category: 'Tables',
  },
  {
    image: 'valentines-heart-sugar-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Heap of heart-shaped sugar cookies iced in pink and white with sprinkles, including marbled pink-and-white hearts',
    caption: "Valentine's hearts",
    category: 'Cookies',
  },
  {
    image: 'pastel-meringue-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Tray of pastel meringue kisses swirled in pink, blue and cream',
    caption: 'Pastel meringues',
    category: 'Pastries',
  },
  {
    image: 'pink-gold-birthday-sheet-cake-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'White buttercream sheet cake with pink piped shell border, gold and pink sprinkles, and a gold glitter Happy Birthday topper',
    caption: 'Pink & gold birthday cake',
    category: 'Cakes & Cupcakes',
  },
  {
    image: 'rainbow-sprinkle-sugar-cookies-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Close-up of round white-iced sugar cookies covered in rainbow sprinkles, gold and silver dragees and star confetti',
    caption: 'Sprinkle sugar cookies',
    category: 'Cookies',
  },
  {
    image: 'halloween-chocolate-dipped-pretzel-rods-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'White chocolate dipped pretzel rods decorated with orange, purple and black Halloween sprinkles and candy bats',
    caption: 'Halloween pretzel rods',
    category: 'Pastries',
  },
  {
    image: 'rainbow-layer-cake-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Cut rainbow layer cake showing six coloured sponge layers under white frosting and rainbow sprinkles, with a slice on a plate',
    caption: 'Rainbow layer cake',
    category: 'Cakes & Cupcakes',
  },
  {
    image: 'baby-shower-dessert-table-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Styled shower dessert table with a tiered stand of cookies and wafers, melon stars in a jar, and a small cake with a gold crown and pink and blue ruffled frosting',
    caption: 'Styled shower table',
    category: 'Tables',
  },
  {
    image: 'gender-reveal-cupcake-cut-open-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Gender reveal cupcake cut in half showing a bright blue centre inside vanilla cake, in front of a box of frosted cupcakes with black and silver sprinkles',
    caption: 'The reveal, cut open',
    category: 'Cakes & Cupcakes',
  },
  {
    image: 'gender-reveal-cupcakes-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Clamshell box of vanilla cupcakes with swirled white buttercream and black and silver sprinkles, ready for a gender reveal',
    caption: 'Gender reveal cupcakes',
    category: 'Cakes & Cupcakes',
  },
  {
    image: 'gold-cupcakes-boxed-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Bakery box of chocolate cupcakes with gold and blush sprinkles beside a pink and gold decorated cake, packed for delivery',
    caption: 'Boxed and ready to go',
    category: 'Cakes & Cupcakes',
  },
  {
    image: 'chocolate-drizzled-sprinkle-treats-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'White chocolate covered treats drizzled with dark chocolate and topped with pink, gold and white sprinkles',
    caption: 'Chocolate-dipped treats',
    category: 'Pastries',
  },
  {
    image: 'gender-reveal-cupcake-tray-jennifer-mazer.jpg',
    dir: 'parties',
    alt: 'Tray of frosted vanilla cupcakes decorated with silver and black sprinkles for a gender reveal party',
    caption: 'Reveal tray',
    category: 'Cakes & Cupcakes',
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
// add any required label or disclosure text here. Flagged rather than guessed —
// getting it wrong is a real liability, not a design problem.
// ---------------------------------------------------------------------------
export const cottageFoodDisclosure = ''; // TODO if her state requires one
