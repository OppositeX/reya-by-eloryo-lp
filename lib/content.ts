/**
 * All page copy and data in one place.
 *
 * This used to live inside the design-tool export's inline <script>. Keeping it
 * here means copy changes never require touching markup, and it is the natural
 * seam to swap for a CMS later.
 */

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
    name: 'Clay · Basalt · Marble',
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
    label: 'The Residences',
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
  { href: '#villas', label: 'The Residences' },
  { href: '#location', label: 'Location' },
  { href: '#ownership', label: 'Ownership' },
  { href: '#gallery', label: 'Gallery' },
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
  { value: '106', label: 'Private Residences' },
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
  { id: 'airport', name: 'Larnaca Airport', detail: '10 min by car' },
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

export const salesSuite = [
  { label: 'Location', value: 'Pervolia, Larnaca · Cyprus' },
  { label: 'Open', value: 'Daily, 10:00 – 17:00' },
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
