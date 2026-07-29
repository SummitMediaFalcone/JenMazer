// ---------------------------------------------------------------------------
// EVENT INQUIRY FORM — field options
//
// Kept out of the component so Jen can change what she offers without anyone
// touching markup. Every option here also lands in the email she receives.
//
// The two fields that matter most are guest count and budget. They're what
// turn a pile of inquiries into a list she can actually work through — an
// unqualified inquiry costs her an hour of back-and-forth to discover it was
// never a fit.
// ---------------------------------------------------------------------------

export const eventTypes = [
  'Birthday party',
  'Baby shower',
  'Bridal shower',
  'Wedding',
  'Gender reveal',
  'Graduation',
  'Anniversary',
  'Holiday party',
  'Communion / Christening',
  'Corporate event',
  'Something else',
];

export const guestCounts = [
  'Under 15',
  '15–30',
  '30–50',
  '50–100',
  '100–200',
  'Over 200',
  'Not sure yet',
];

// Ranges, not a blank box. People abandon forms rather than name a number, but
// they'll happily pick a bracket.
export const budgetRanges = [
  'Under $250',
  '$250 – $500',
  '$500 – $1,000',
  '$1,000 – $2,500',
  '$2,500 – $5,000',
  '$5,000+',
  'Not sure — help me figure it out',
];

export const servicesNeeded = [
  'Hand-painted banner',
  'Custom signage',
  'Dessert / pastry table',
  'Cupcakes',
  'Cannoli & cream puffs',
  'Custom cake',
  'Cookies & favors',
  'Table styling & decor',
  'Full party design',
  'Setup & breakdown',
  'Not sure yet — need ideas',
];

export const referralSources = [
  'Instagram',
  'Facebook',
  'Pinterest',
  'Google search',
  'A friend referred me',
  "I've seen her work at an event",
  'Other',
];
