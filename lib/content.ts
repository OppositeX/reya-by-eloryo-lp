/**
 * All page copy and data in one place.
 *
 * This used to live inside the design-tool export's inline <script>. Keeping it
 * here means copy changes never require touching markup, and it is the natural
 * seam to swap for a CMS later.
 */

import { BLOG_PATH } from './blog';

export type Residence = {
  name: string;
  tagline: string;
  area: string;
  beds: string;
  baths: string;
  deed: string;
  price: string;
  types: string[];
  /** Images cycled by the arrows on the residence card. */
  gallery: string[];
};

export const residences: Residence[] = [
  {
    name: 'Breeze · Sky · Horizon',
    tagline: 'Air',
    area: '95 - 112',
    beds: '2',
    baths: '2',
    deed: 'Freehold',
    price: 'From €307,000',
    types: [
      'Breeze · 2 bedroom · 95 m² · from €307,000',
      'Sky · 2 bedroom · 103 - 112 m² · from €324,000',
      'Horizon · 2 bedroom · 107 m² · from €337,000',
    ],
    gallery: [
      '/uploads/villa-courtyard-pool.webp',
      '/assets/photography/feat-bedrooms.webp',
      '/assets/photography/bento-kitchens.webp',
    ],
  },
  {
    name: 'Clay · Marble',
    tagline: 'Earth',
    area: '112 - 126',
    beds: '3',
    baths: '2-3',
    deed: 'Freehold',
    price: 'From €353,000',
    types: [
      'Clay · 3 bedroom · 112 m² · from €353,000',
      'Basalt · 3 bedroom · 116 - 126 m² · from €366,000',
      'Marble · 3 bedroom · 122 m² · from €384,000',
    ],
    gallery: [
      '/uploads/villas-olive-dusk.webp',
      '/assets/photography/feat-veranda.webp',
      '/assets/photography/bento-bathrooms.webp',
    ],
  },
  {
    name: 'Solstice',
    tagline: 'Sun',
    area: '146',
    beds: '4',
    baths: '3',
    deed: 'Freehold',
    price: 'From €446,000',
    types: ['Solstice · 4 bedroom · 146 m² · from €446,000'],
    gallery: [
      '/uploads/kitchen-evening-light.webp',
      '/assets/photography/feat-pool.webp',
      '/assets/photography/bento-outdoor.webp',
    ],
  },
];

export const residenceTabs = ['Air · 2 Bedroom', 'Earth · 3 Bedroom', 'Sun · 4 Bedroom'];

export type Gallery = { key: string; label: string; imgs: string[] };

export const galleries: Gallery[] = [
  {
    key: 'villas',
    label: 'The Homes',
    imgs: [
      '/assets/photography/villa-exterior-vertical.webp',
      '/assets/photography/standard-garden.webp',
      '/assets/photography/optional-pool.webp',
      '/assets/photography/bento-cladding.webp',
    ],
  },
  {
    key: 'coastline',
    label: 'The Coastline',
    imgs: [
      '/assets/photography/amenity-water-sports.webp',
      '/assets/photography/amenity-beach-club.webp',
      '/assets/photography/bridge-pervolia-dusk.webp',
      '/assets/photography/amenity-coastal-cycling.webp',
    ],
  },
  {
    key: 'village',
    label: 'The Village',
    imgs: [
      '/assets/photography/bridge-mountains-sea.webp',
      '/assets/photography/amenity-waterfront-dining.webp',
      '/assets/photography/bento-outdoor.webp',
    ],
  },
  {
    key: 'daily',
    label: 'Daily Life',
    imgs: [
      '/assets/photography/poolside-villa-vertical.webp',
      '/assets/photography/bento-kitchens.webp',
      '/assets/photography/patio-beams-vertical.webp',
    ],
  },
];

export const navLinks = [
  { href: '#vision', label: 'The Vision' },
  { href: '#homes', label: 'The Development' },
  { href: '#villas', label: 'The Homes' },
  { href: '#location', label: 'Location' },
  { href: '#ownership', label: 'Ownership' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
  { href: BLOG_PATH, label: 'Blog' },
];

/** Rotating feature list + the image each one reveals. */
export const features = [
  { label: 'Contemporary homes, designed by renowned architects', img: '/assets/photography/feat-architects.webp' },
  { label: 'Open-plan living', img: '/assets/photography/bento-kitchens.webp' },
  { label: 'Solar - Photovoltaics', img: '/assets/photography/bento-structure.webp' },
  { label: 'Covered veranda & parking space', img: '/assets/photography/feat-veranda.webp' },
  { label: 'Swimming pool & AC system (optional)', img: '/assets/photography/feat-pool.webp' },
];

export const stats = [
  { value: '106', label: 'Private Homes' },
  { value: '42,000', label: 'm² of Land' },
  { value: '2-4', label: 'Bedrooms' },
];

export const bentoTiles = [
  {
    span: 'span 2 / span 2',
    img: '/assets/photography/bento-kitchens.webp',
    eyebrow: 'Kitchens',
    title: 'Designed to face outward',
    desc: 'Contemporary cabinetry, integrated storage, quartz worktops, with windows positioned to pull in light and frame the outdoor space beyond.',
  },
  {
    img: '/assets/photography/bento-bathrooms.webp',
    eyebrow: 'Bathrooms',
    title: 'Calm and unhurried',
    desc: 'Large-format travertine-look porcelain, wall-hung fittings, and a matte oval basin in the principal bathroom.',
  },
  {
    img: '/assets/photography/bento-wardrobes.webp',
    eyebrow: 'Wardrobes',
    title: 'Planned from the outset',
    desc: 'Fitted wardrobes in every bedroom.',
  },
  {
    colSpan: 2,
    img: '/assets/photography/bento-cladding.webp',
    eyebrow: 'External Cladding',
    title: 'A palette from the landscape',
    desc: 'Warm cladding to feature elevations.',
  },
  {
    colSpan: 2,
    img: '/assets/photography/bento-outdoor.webp',
    eyebrow: 'Outdoor Surfaces',
    title: 'Built for the climate',
    desc: "Natural & composite timber to terraces and hardscape. Warm tones that hold the day's heat well and age with integrity.",
  },
  {
    colSpan: 2,
    img: '/assets/photography/bento-structure.webp',
    eyebrow: 'Structure & Services',
    title: 'Solid & efficient.',
    desc: 'Reinforced concrete frame & energy-efficient insulation. Solar Photovoltaic (P.V).',
  },
];

export const locationRows = [
  { id: 'beach', name: 'The Beach', detail: '750 m along the coastal promenade' },
  { id: 'faros', name: 'Faros Lighthouse', detail: 'The 19th-century landmark at the peninsula’s tip' },
  { id: 'airport', name: 'Larnaca', detail: '20 min by car' },
  { id: 'cities', name: 'Nicosia & Limassol', detail: '45 min' },
];

export const amenities = [
  {
    img: '/assets/photography/amenity-beach-club.webp',
    title: 'Beach Club',
    desc: 'Afternoons with nowhere to be and nothing that asks anything of you.',
  },
  {
    img: '/assets/photography/amenity-coastal-cycling.webp',
    title: 'Coastal Cycling',
    desc: 'Open paths out to the lighthouse and back before work.',
  },
  {
    img: '/assets/photography/amenity-water-sports.webp',
    title: 'Water Sports',
    desc: 'Exhilarating and open, the kind of afternoon that reminds you why you chose to be here.',
  },
];

export const ownershipCards = [
  {
    eyebrow: 'Pricing',
    title: 'From €307,000',
    desc: 'Seven typologies · 3 elements.',
  },
  {
    eyebrow: 'Freehold Title',
    title: 'Your land. Your boundary.',
    desc: 'Every home on its own individual freehold plot with a separate title deed.',
  },
  {
    eyebrow: 'Legal Security',
    title: 'Registered at exchange',
    desc: 'Your Sale & Purchase Agreement (SPA) is registered at the Cyprus Land Registry under Specific Performance law from the moment of exchange.',
  },
  {
    eyebrow: 'VAT',
    title: 'A reduced rate may apply',
    desc: '5% VAT may apply. Eligibility and the applicable rate depend on the buyer’s circumstances.',
  },
  {
    eyebrow: 'Availability',
    title: 'Pre-Sales are Open',
    desc: 'Legal protection attaches from Land Registry registration. You do not wait to be protected.',
  },
];

export const residencyCards = [
  {
    title: 'Residency that comes with the keys',
    desc: '€300,000 qualifies non-EU buyers for Cyprus permanent residency, and the application usually covers your spouse and children too.',
  },
  {
    title: 'Seventeen years without tax on your investments',
    desc: 'Cyprus non-dom status means no tax on dividends, interest or rental income for seventeen years from the day you become a resident.',
  },
  {
    title: 'Nothing owed when it passes to your children',
    desc: 'Cyprus has no inheritance tax and no wealth tax. What you build here stays in the family.',
  },
  {
    title: 'You do not have to live here full time',
    desc: 'Sixty days a year is enough to be tax resident in Cyprus, as long as you are not tax resident somewhere else.',
  },
  {
    title: 'VAT at 5%',
    desc: 'The reduced rate applies to a first home purchase in Cyprus within the regulated caps, and the saving can run into tens of thousands.',
  },
];

export const CONTACT_PHONE = '+35795968718';
export const CONTACT_PHONE_DISPLAY = '+357 95 968718';
// wa.me takes the number as bare digits; a leading + makes WhatsApp reject it as invalid.
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, '')}`;
export const TEL_URL = `tel:${CONTACT_PHONE}`;

/** Footer social icons. An icon is shown only once its URL is filled in. */
export const socialLinks: { label: 'Instagram' | 'LinkedIn' | 'YouTube'; url: string }[] = [
  { label: 'Instagram', url: '' },
  { label: 'LinkedIn', url: '' },
  { label: 'YouTube', url: '' },
];

export const salesSuite: { label: string; value: string; href?: string }[] = [
  { label: 'Location', value: 'Pervolia, Larnaca · Cyprus' },
  { label: 'Open', value: 'Daily, 10:00 – 17:00' },
  { label: 'WhatsApp', value: 'Chat with us', href: WHATSAPP_URL },
  { label: 'Call', value: CONTACT_PHONE_DISPLAY, href: TEL_URL },
];

/** FAQ accordion. `lead` is the short verdict shown bold above the answer. */
export type FaqItem = { q: string; lead?: string; a: string[] };

export const faqItems: FaqItem[] = [
  {
    q: 'What is Reya?',
    a: [
      'Reya is the latest chapter in the Pervolia village story. 106 modern homes add a new neighbourhood to the coastal village in Larnaca, Cyprus.',
      'The site runs to 42,000 m², the beach is 750 m away, and every home sits on its own private plot. Construction has started and pre-sales are open.',
    ],
  },
  {
    q: 'Who is the developer, and what have you built before?',
    a: [
      'Eloryo is the developer breathing life into the Reya project and has been building residential property since 2011, across five countries including Cyprus, the United Kingdom, Spain & Greece, with roots back to 1998. www.eloryo.com',
      'Reya is designed by J+A Philippou Architects, Nicosia.',
    ],
  },
  {
    q: 'Are the homes freehold / full title?',
    lead: 'Yes.',
    a: [
      'Every home at Reya sits on its own individual plot and will hold its own separate full title deed. Not an apartment scheme, not a shared complex, no fractional ownership. Your land, your deed, your place to belong.',
    ],
  },
  {
    q: 'Do the prices include VAT?',
    lead: 'No.',
    a: [
      'Every price we publish excludes VAT.',
      'The standard rate on new-build property in Cyprus is 19%. A reduced rate of 5% may apply where the home will be your primary and permanent residence in Cyprus. Eligibility depends on your circumstances and is confirmed by your own tax adviser.',
    ],
  },
  {
    q: 'What is the process from enquiry to owning the home?',
    a: [
      '1. Enquire and visit, in person or remotely.',
      '2. Select your home, sign the reservation agreement & pay the reservation fee (1.5% of the purchase price, which forms part of the price, followed by a 7-day cooling-off period).',
      '3. Your own lawyer reviews the Sale and Purchase Agreement, you sign, and it is registered at the Cyprus Land Registry.',
      '4. The payment plan follows the construction programme. Funds flow with progress.',
      '5. Handover & move in.',
      'Your title deed follows from the Land Registry, with your ownership registered and enforceable from exchange in the meantime.',
    ],
  },
  {
    q: 'Is my money protected?',
    lead: 'Yes.',
    a: [
      'Your Sale and Purchase Agreement is registered at the Cyprus Land Registry under the Specific Performance law.',
      'This gives you an enforceable right to the property itself, not just a claim against a company — the strongest protection available to an off-plan buyer in Cyprus.',
    ],
  },
  {
    q: 'When do I get the title deed?',
    a: [
      'The deed follows once construction is certified and the plot surveyed. It works to the Land Registry’s timescale and can take several years.',
      'The delays you have heard about come from schemes where the plots were never divided. Ours are divided upfront.',
    ],
  },
  {
    q: 'Does buying at Reya qualify me for Cyprus Permanent Residency?',
    lead: 'It can.',
    a: [
      'Cyprus Permanent Residency via property acquisition is open to non-EU nationals buying a new-build property directly from a developer. The property threshold is €300,000 net of VAT, and every home at Reya clears it. A spouse and dependent children are usually included on the same application.',
      'Eligibility depends on your circumstances and the programme is subject to government policy.',
    ],
  },
  {
    q: 'Do I need to be in Cyprus to buy?',
    lead: 'No.',
    a: [
      'You can give power of attorney to a Cyprus lawyer to act for you and complete the purchase without you being in the country. Non-EU buyers apply for permission to acquire property, which your lawyer handles alongside the purchase.',
    ],
  },
  {
    q: 'Can I get a mortgage in Cyprus as a non-resident?',
    lead: 'Yes.',
    a: ['Several Cyprus banks lend to non-residents, with loan-to-value and rates depending on your profile.'],
  },
  {
    q: 'Can I rent the home out when I am not using it?',
    lead: 'Yes.',
    a: [
      'At the standard VAT rate, let it short or long term as you wish.',
      'At the reduced VAT rate you can still let it, but it has cost implications. The 5% VAT is tied to the home being your own primary residence for ten years. Letting it inside that period counts as a change of use & you will be required to repay the difference between the two rates for the years remaining.',
    ],
  },
  {
    q: 'How far is Reya from the beach and Larnaca, and is Pervolia a real village year round?',
    a: [
      'The beach is 750 m away. Larnaca is 20 minutes by car. Nicosia and Limassol are both about 45 minutes.',
      'Pervolia is a quaint village, not a resort strip. Shops, tavernas, a supermarket and a post office are within walking distance, and bustling Kiti is five minutes away by car.',
    ],
  },
  {
    q: 'Can I see it before it is built?',
    lead: 'Yes.',
    a: [
      'Our sales suite in Pervolia is open by appointment. Come for a coffee, walk the site, see the village and the coast, and view any home through our in-house platform. If you cannot travel, we will run a guided walkthrough remotely. Floor plans, the site plan and renders are all available. Enquire and we will confirm the same day.',
    ],
  },
];

/** Vision section collage, cross-faded on a timer. */
export const visionImages = [
  { src: '/uploads/villas-olive-dusk.webp', alt: 'Reya villas among olive trees at dusk' },
  { src: '/uploads/kitchen-evening-light.webp', alt: 'Warm marble kitchen at evening light' },
  { src: '/uploads/villa-courtyard-pool.webp', alt: 'Stone villa courtyard with pool and olive tree' },
];

export const HERO_VIDEO = '/uploads/hero-clouds.mp4';
export const FILM_VIDEO = '/uploads/reya-film.mp4';
export const HERO_POSTER = '/uploads/hero-poster.webp';
