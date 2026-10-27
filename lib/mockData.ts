export interface Venue {
  id: string;
  name: string;
  sportType: string;
  sportCategories: string[];
  area: string;
  fullAddress: string;
  distanceKm: number;
  rating: number;
  reviewCount: number;
  pricePerHour: number;
  images: string[];
  statusText: string;
  statusType: 'available' | 'few_left' | 'booked';
  badge?: string;
  isFastBook?: boolean;
  isFifaCertified?: boolean;
  isTopRated?: boolean;
  isCafeOnSite?: boolean;
  description: string;
  pitchDetails: string;
  amenities: { icon: string; title: string; subtitle: string }[];
  openingHours: string;
  openingDays: string;
  featuredReview: {
    author: string;
    avatar: string;
    sportTag: string;
    timeAgo: string;
    rating: number;
    text: string;
  };
  mapCoordinatesText: string;
}

export interface Booking {
  id: string;
  venueId: string;
  venueName: string;
  pitch: string;
  sport: string;
  date: string;
  timeSlot: string;
  durationHours: number;
  address: string;
  totalAmount: number;
  status: 'upcoming' | 'completed' | 'cancelled';
  statusBadge: string;
  paymentMethod: string;
  qrPasscode: string;
  qrCodeUrl?: string;
  image: string;
  leadPlayerName: string;
  phone: string;
  email: string;
  notes?: string;
}

export const LOGO_URL = '/logo.png';

export const USER_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH';

export const VENUES: Venue[] = [
  {
    id: 'greenfield-arena',
    name: 'Greenfield Arena & Turf',
    sportType: '7v7 Synthetic Turf',
    sportCategories: ['Football', 'Cricket'],
    area: 'Moodbidri, Mangalore',
    fullAddress: "Main Road, Near Alva's Campus, Moodbidri, Mangalore",
    distanceKm: 1.2,
    rating: 4.8,
    reviewCount: 128,
    pricePerHour: 800,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC6VewcbJl_Lmk33VydVwJvn-r5lKiDCUxAtb7s62BNFud6sM01ihX-vTC1fSMlm1AKvL85ryS-WtLIolzseSojxEPjweWC5zRLfDrxTBtX3qBNYM_hYdi8HQNNhbToNCy2wvLG5QcEtI5a120-ZPCkAby3ayanN9Xff4SksKnUSwxIVa2ROescRJbOy_htjRjrwOkLO_yMgSasxCkJHMxWhFaMGJjyn-UPXRnV4ACehHAoAbCmdxvN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_hjdaSiUf-hdBfj93VdxIvasvY0uLxNFX8TFLvJ9ykU1xIW4J4QzOEzDFaQSHEPvPXgaAu2dCICEg0jycvQY7Nq6lUTdLRCohK9_2ZvJDYZ062-ci_lwg1tQXuiVjHdDZ9xCbLPhvRTtL7HIAVSTgXLunVVQzswuuppV0ick9e_Lclm4tjd4Qq1rjr1XTEmfCl2_nwtarigU5sIGusX9MZePe3nwXNABiPaAm5gixHvPd5_9tQndm',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZBGNN6v5SBUuoyW6Qh2iL266U1STZ2mUzXfuKP9kBUfsj4p_WMB0cEp4_T6PjHu6U1VggXjni2sAHBHcF6NFsmrE467w6sYgC3w68g300tru9OgmV42QIItWvFvjee4O7u_eNfqqAHTRpXo8YFhR6Zj0B8Nxp5YqG7E4IEM-5OLxRgENqwp7Td6kfBjvojbdHRQge635Fpy9JsHqGoLuNqtr1eX_jKXIcup4nq9r5tVhmHJJ9rFra',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeMgEsiJlsfg_YMwLcxCh7QN_2L2Iiabf1xjcn_lT_soV1Se3Gk87FAsL3zQuij9OSV6XQY7rNSPCRjZNT5dbf-u4R9SYKbnx_XaT7-V3wIzEUz3mUs3Yjk3-bDer2BQzOhdJ19x7fmMPQSU2g8xqEC8jvC_E4tk0SXuBuYGTFJviwNbUiFOK0iT5t8xPqJACPZluiBTA9SZDDsubRMitGku7kbpSgmuKfDiBZjvG3jcoh8SL9xVPs'
    ],
    statusText: 'Available Today',
    statusType: 'available',
    isFastBook: true,
    pitchDetails: 'Pitch A (7v7 Synthetic Grass)',
    description: "Mangalore region's top-rated 7-a-side floodlit football turf featuring FIFA Pro certified monofilament artificial grass, professional LED floodlighting with zero blind spots, and covered dugout.",
    amenities: [
      { icon: 'light_mode', title: 'Floodlights', subtitle: '200 Lux Pro LED' },
      { icon: 'local_parking', title: 'Free Parking', subtitle: 'Cars & 2-Wheelers' },
      { icon: 'shower', title: 'Clean Showers', subtitle: 'Hygienic restrooms' },
      { icon: 'water_drop', title: 'RO Drinking Water', subtitle: 'Chilled refilling point' },
      { icon: 'checkroom', title: 'Changing Rooms', subtitle: 'Secure key lockers' },
      { icon: 'chair', title: 'Covered Seating', subtitle: 'Spectator stands' },
      { icon: 'medical_services', title: 'First Aid', subtitle: 'Defibrillator ready' },
      { icon: 'sports_volleyball', title: 'Bibs & Match Ball', subtitle: 'Complimentary gear' }
    ],
    openingHours: 'Mon - Sun: 06:00 AM - 11:30 PM',
    openingDays: 'All 7 Days',
    featuredReview: {
      author: 'Rohit Sharma',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ290cXKO4yYY_3qePBNWRIpGw1GjIBG8h46mKWyLEtnTCm4mXl7KShln0iSf0lg5aTLKYVaRLX_94-XsWDjiAk9R0woMqGkc0dG1PlqlCnZCKVSeQKpGmwYWytEpEG-qAePAByRCDoO_lBB03zyxXaidx4y908nrG-WEy7Dhs4lKOwYIM6oAszURkFyJzkSDR4KpDAR_RK4ZgBXGMSXGAFB8CLM77jcmbIMWoHBfSSjVeowc5Wq4o',
      sportTag: 'Played 7-a-side Football',
      timeAgo: '2 days ago',
      rating: 5,
      text: 'Awesome turf quality and polite management. Bright floodlights for night games, absolutely no glare or blind zones. Locker rooms were sparkling clean!'
    },
    mapCoordinatesText: "Main Road, Near Alva's Campus, Moodbidri, Mangalore"
  },
  {
    id: 'kickzone-sports',
    name: 'KickZone Sports Park',
    sportType: '5v5 & 7v7 FIFA Certified Turf',
    sportCategories: ['Football', 'Cricket'],
    area: 'Puttur, Mangalore',
    fullAddress: 'Kombettu Junction, Main Road, Puttur, Mangalore',
    distanceKm: 2.1,
    rating: 4.7,
    reviewCount: 95,
    pricePerHour: 750,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOJvenHm_XvX85eYzzbpz4EBQGU3MUt_gaGn7BF0QohSDD1S1hTPpagfJj49RDAXA8yH3wws62hbAXSF93UwHgPmprfjhQ6vEdzrmMJzZVgmLY_XznEU-uPO96dCyIzNTGics6vrrDdMavF3EdoggsM7smErU1Arht2QZKJyHmEe8YhketrUjsAddumIIu--vD9KHvHO07URprO_QL6a6_8-gi5W6GVkW4NV7s7nqF1h4sANXi3khS'
    ],
    statusText: '2 slots left',
    statusType: 'few_left',
    isFifaCertified: true,
    pitchDetails: 'Pitch B (5v5 Indoor Net)',
    description: 'Dynamic FIFA standard multi-sport box cricket and football arena illuminated by crisp LED sports lighting with dedicated coaching sessions.',
    amenities: [
      { icon: 'light_mode', title: 'Floodlights', subtitle: 'High lumen LEDs' },
      { icon: 'local_parking', title: 'Free Parking', subtitle: 'Available' },
      { icon: 'water_drop', title: 'Drinking Water', subtitle: 'Filtered cold water' },
      { icon: 'sports_cricket', title: 'Cricket Bats & Balls', subtitle: 'Rental available' }
    ],
    openingHours: 'Mon - Sun: 06:00 AM - 12:00 AM',
    openingDays: 'All 7 Days',
    featuredReview: {
      author: 'Karthik Gowda',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH',
      sportTag: 'Played Box Cricket',
      timeAgo: '4 days ago',
      rating: 5,
      text: 'Great bounce on the pitch and tight net enclosure. Very reasonable rates for evening games!'
    },
    mapCoordinatesText: 'Kombettu Junction, Puttur, Mangalore'
  },
  {
    id: 'chamundi-premier',
    name: 'Sahyadri Premier Turf',
    sportType: 'Multi-Sport Arena',
    sportCategories: ['Football', 'Cricket'],
    area: 'Belthangady, Mangalore',
    fullAddress: 'Ujire Road, Near Town Square, Belthangady, Mangalore',
    distanceKm: 3.5,
    rating: 4.9,
    reviewCount: 214,
    pricePerHour: 950,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWht86Ufsz4m0V4M0oAouT_AhHRTHxCuv8IIvomah66YWJOCDBT7JNPz-iqP5g47RCwjVlurMflzTkB0xLO9ccgC9wjuKdSVua12ZBhEh9MkmVRc65D1u4yblH4HB-CELjqZWGOSjB95JxEPdeAZk0NRHJYrEkBYXD5lPZNaU8yOGMk-P0HMQUjB7g4_-2s4HUDY1Omx4m1-msrgaLVJH1RFA5QCAvsQSIsI8npnVKUoLMfjjJa2iB'
    ],
    statusText: 'Available Today',
    statusType: 'available',
    isTopRated: true,
    pitchDetails: 'Pitch A - Floodlit Synthetic',
    description: 'Pristine outdoor sports facility with plush artificial grass soccer ground, high perimeter safety netting, and scenic Western Ghats skyline view.',
    amenities: [
      { icon: 'light_mode', title: 'Floodlights', subtitle: 'Pro Night Vision' },
      { icon: 'local_parking', title: 'Car Valet', subtitle: 'Spacious lot' },
      { icon: 'shower', title: 'Locker & Shower', subtitle: 'Hot water enabled' },
      { icon: 'sports_volleyball', title: 'Match Bibs', subtitle: 'Included' }
    ],
    openingHours: 'Mon - Sun: 05:30 AM - 11:00 PM',
    openingDays: 'All 7 Days',
    featuredReview: {
      author: 'Vikas Rao',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ290cXKO4yYY_3qePBNWRIpGw1GjIBG8h46mKWyLEtnTCm4mXl7KShln0iSf0lg5aTLKYVaRLX_94-XsWDjiAk9R0woMqGkc0dG1PlqlCnZCKVSeQKpGmwYWytEpEG-qAePAByRCDoO_lBB03zyxXaidx4y908nrG-WEy7Dhs4lKOwYIM6oAszURkFyJzkSDR4KpDAR_RK4ZgBXGMSXGAFB8CLM77jcmbIMWoHBfSSjVeowc5Wq4o',
      sportTag: 'Played 7v7 Football',
      timeAgo: '1 week ago',
      rating: 5,
      text: 'One of the best football pitches in Mangalore & Belthangady region. Smooth turf that protects your knees during slides!'
    },
    mapCoordinatesText: 'Ujire Road, Belthangady, Mangalore'
  },
  {
    id: 'urban-kickers',
    name: 'Urban Kickers Turf & Cafe',
    sportType: 'Rooftop Turf with Floodlights',
    sportCategories: ['Football'],
    area: 'Karkala, Mangalore',
    fullAddress: 'Terrace Level, Coastal View Complex, Anekere, Karkala',
    distanceKm: 4.2,
    rating: 4.6,
    reviewCount: 76,
    pricePerHour: 650,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBcqTGUhuTj65HUnILjQn6sOhR5qJedXSxXRpdyB2W48Odab_oK98XtLjHvB2YaamL96DWlPCAvtpXbY1HuDS-P4rRpVWUfTvr9UVXFe6CwqarPRWWhdJj9OSxI3WTdrzSSusEEf-CawOoA2tGIATtFtnXopI2x3jIrlcc5glnRaAQZ52xaW8pdGuCMeuO38tsd2HDd-_8lhM4YlEokysaBs9mIqZAIw4gQn6uR-09bzxElaNW9Tt9B'
    ],
    statusText: 'Fully Booked',
    statusType: 'booked',
    isCafeOnSite: true,
    pitchDetails: 'Rooftop 5v5 Turf',
    description: 'Rooftop football turf arena with overhead netting and glowing night lamps alongside an adjacent outdoor lounge cafe with cozy seating.',
    amenities: [
      { icon: 'local_cafe', title: 'On-site Cafe', subtitle: 'Smoothies & snacks' },
      { icon: 'light_mode', title: 'LED Floodlights', subtitle: 'Even coverage' },
      { icon: 'chair', title: 'Lounge Seating', subtitle: 'Terrace view' }
    ],
    openingHours: 'Mon - Sun: 06:00 AM - 11:30 PM',
    openingDays: 'All 7 Days',
    featuredReview: {
      author: 'Tanvi Nair',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH',
      sportTag: 'Regular player',
      timeAgo: '3 days ago',
      rating: 4.5,
      text: 'The rooftop vibe at night is unmatched. Grab a cold shake right after a sweaty 5v5 match!'
    },
    mapCoordinatesText: 'Anekere, Karkala'
  },
  {
    id: 'smashzone-arena',
    name: 'SmashZone Arena',
    sportType: 'Wooden 4 Courts',
    sportCategories: ['Badminton'],
    area: 'Kadri, Mangalore',
    fullAddress: 'Near Kadri Park, Mallikatte, Mangalore',
    distanceKm: 2.4,
    rating: 4.9,
    reviewCount: 88,
    pricePerHour: 450,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9KWXT-GEB8xRVFyH8Q9X45lM6j5i4CKpKvQpxKlLsynkCBz3Znj_KWBzw9gQEFeMSHyKrkfAdQTqhs6HEQgwMc60aOq9V5o8jgQsY_vgQ0-xez85qWXqCStDYqK8Xa9Va8y2gQ2siddNxhNwUqKHQvztpj6kv91XJvx-5GU5r7DHx3TDQ2gNsQ-U8A0dOcMTT99m_ZH_M95Y5aKDX6uqATxA047RWLj_TrZu3y8P3zWo9YR6hJ5qp'
    ],
    statusText: 'Filling Fast',
    statusType: 'few_left',
    pitchDetails: 'Court 1 & 2 (Teakwood)',
    description: 'High-ceiling indoor badminton court facility with four pristine wooden courts, professional bright court lines, and LED glare-free lighting.',
    amenities: [
      { icon: 'ac_unit', title: 'Air Cooled', subtitle: 'Well-ventilated' },
      { icon: 'sports_tennis', title: 'Racket Stringing', subtitle: 'Pro shop' },
      { icon: 'shower', title: 'Hot Shower', subtitle: 'Fresh towel service' }
    ],
    openingHours: 'Mon - Sun: 05:00 AM - 10:30 PM',
    openingDays: 'All 7 Days',
    featuredReview: {
      author: 'Arjun Mehta',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ290cXKO4yYY_3qePBNWRIpGw1GjIBG8h46mKWyLEtnTCm4mXl7KShln0iSf0lg5aTLKYVaRLX_94-XsWDjiAk9R0woMqGkc0dG1PlqlCnZCKVSeQKpGmwYWytEpEG-qAePAByRCDoO_lBB03zyxXaidx4y908nrG-WEy7Dhs4lKOwYIM6oAszURkFyJzkSDR4KpDAR_RK4ZgBXGMSXGAFB8CLM77jcmbIMWoHBfSSjVeowc5Wq4o',
      sportTag: 'Badminton doubles',
      timeAgo: '5 days ago',
      rating: 5,
      text: 'Pristine wooden courts with great grip. Racket rental is top grade Yonex gear.'
    },
    mapCoordinatesText: 'Kadri, Mangalore'
  },
  {
    id: 'dribble-kings',
    name: 'Dribble Kings Park',
    sportType: 'FIBA Acrylic Court',
    sportCategories: ['Basketball'],
    area: 'Surathkal, Mangalore',
    fullAddress: 'Near Beach Road, Surathkal, Mangalore',
    distanceKm: 3.1,
    rating: 4.7,
    reviewCount: 52,
    pricePerHour: 600,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhCXZMJ95Un76mPp3dgTBpEpgcq6cElBADEVN1cP4L169jToXxSoaKaD52ZYT2RIWn3QYiW9jtEA4zc2MLCoPCWaApgr6BbB3pFrjZW-KU7KvySD5QxLLs8ra2UZmDQiPita-h51WO1jNxREgVO8b7bp8d5IBEHpdkZ9lZPm0NscIP51hPPa6l0qdpM7KGhLsot6e532a41cZbL75CioShNAfrAqcC8oY4vLUyLsajwprH2iGPmzYM'
    ],
    statusText: 'Available Today',
    statusType: 'available',
    pitchDetails: 'Full Court (Acrylic Blue)',
    description: 'Outdoor FIBA approved acrylic blue basketball court with pristine markings, spring-loaded glass backboards, and perimeter lights.',
    amenities: [
      { icon: 'light_mode', title: 'Stadium Lighting', subtitle: 'Clear night vision' },
      { icon: 'sports_basketball', title: 'Spalding Balls', subtitle: 'Free use' },
      { icon: 'water_drop', title: 'Hydration Station', subtitle: 'Chilled water' }
    ],
    openingHours: 'Mon - Sun: 06:00 AM - 10:00 PM',
    openingDays: 'All 7 Days',
    featuredReview: {
      author: 'Pranav K',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH',
      sportTag: 'Half-court 3x3',
      timeAgo: '1 week ago',
      rating: 5,
      text: 'Breakaway rims and clean acrylic paint. The lighting is very even for late night pickup games.'
    },
    mapCoordinatesText: 'Surathkal, Mangalore'
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: 'SS-2026-48291',
    venueId: 'greenfield-arena',
    venueName: 'Greenfield Arena & Turf',
    pitch: 'Pitch A • 7-a-side Synthetic Grass',
    sport: '7-a-side Football',
    date: 'Fri, 23 Oct 2026',
    timeSlot: '07:00 PM - 09:00 PM',
    durationHours: 2,
    address: "Near Alva's Campus, Moodbidri, Mangalore",
    totalAmount: 1608,
    status: 'upcoming',
    statusBadge: 'Confirmed • In 2 Days',
    paymentMethod: 'UPI (adil@okaxis)',
    qrPasscode: '4829',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXQiEwNd77VqW74_L_utRwQD5xQEfD3mcuzX__DAvSNYejA0Et3iRs4JzH_4g0pPp2fiHcx92MWXPJTgoOvG0iuc9JYZU7mgD-pXjgE6TJitlmKdSN_zUn71ABbrEve5U8H4YLuGipwY2rrRlZO0sr_y-snm8K5i0gtg0PCW5hjHJHb-XmobqeaGudZQGOlFxgN5FO1KDWD4nE045y0-Gxx5t79QU_tPgL-YXW7-TEzzSfueSU2q5B',
    leadPlayerName: 'Adil Farooq',
    phone: '+91 98765 43210',
    email: 'adil.sports@gmail.com',
    notes: 'Locker & Bibs included'
  },
  {
    id: 'SS-2026-39102',
    venueId: 'chamundi-premier',
    venueName: 'Sahyadri Premier Turf',
    pitch: '5v5 Box Cricket • Floodlit Pitch B',
    sport: '5v5 Box Cricket',
    date: '14 Oct 2026',
    timeSlot: '06:00 PM - 07:00 PM',
    durationHours: 1,
    address: 'Ujire Road, Belthangady, Mangalore',
    totalAmount: 900,
    status: 'completed',
    statusBadge: 'Completed on 14 Oct',
    paymentMethod: 'UPI',
    qrPasscode: '9102',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWht86Ufsz4m0V4M0oAouT_AhHRTHxCuv8IIvomah66YWJOCDBT7JNPz-iqP5g47RCwjVlurMflzTkB0xLO9ccgC9wjuKdSVua12ZBhEh9MkmVRc65D1u4yblH4HB-CELjqZWGOSjB95JxEPdeAZk0NRHJYrEkBYXD5lPZNaU8yOGMk-P0HMQUjB7g4_-2s4HUDY1Omx4m1-msrgaLVJH1RFA5QCAvsQSIsI8npnVKUoLMfjjJa2iB',
    leadPlayerName: 'Adil Farooq',
    phone: '+91 98765 43210',
    email: 'adil.sports@gmail.com'
  },
  {
    id: 'SS-2026-31844',
    venueId: 'kanteerava-hub',
    venueName: 'Puttur Sports Hub',
    pitch: 'Badminton Court 3',
    sport: 'Badminton',
    date: '02 Oct 2026',
    timeSlot: '08:00 AM - 10:00 AM',
    durationHours: 2,
    address: 'Kombettu, Puttur, Mangalore',
    totalAmount: 1200,
    status: 'completed',
    statusBadge: 'Completed on 02 Oct',
    paymentMethod: 'Credit Card',
    qrPasscode: '1844',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJxQEEnWmKJXe9RScy6U_K7Pv3vqXsiRhTUP32OvrUuTpwrh5ioGq9h3Y32fJiYytKgns79hc3txmF0IatoDZLIUC1kAzHdvot3abwYPLt_oAlqrWAacCb-dgGzabDt_x6OcKVeUEeYFPV17R_qQE_VuxCNYPnSOvkERMpWeuqp1QFytwkkrJ7hiQCw8kjxHAfrOiaZkw4gfaqrP7J8V15wRdUHGSmUp82umAM6DQQ_VPl9-sT193E',
    leadPlayerName: 'Adil Farooq',
    phone: '+91 98765 43210',
    email: 'adil.sports@gmail.com'
  },
  {
    id: 'SS-2026-28100',
    venueId: 'decathlon-play',
    venueName: 'Decathlon Play Mangalore',
    pitch: 'Futsal Turf',
    sport: 'Futsal',
    date: '28 Sep 2026',
    timeSlot: '05:00 PM - 07:00 PM',
    durationHours: 2,
    address: 'Kulai, Mangalore',
    totalAmount: 1400,
    status: 'cancelled',
    statusBadge: 'Cancelled • Refund Credited',
    paymentMethod: 'UPI',
    qrPasscode: '8100',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCJEo3JUZ3i4tMBz_1TX4awSPXuDBpb0woXe2fdl9POqBflilh2oYg1OoSY_NinpdxxfZsg_WwgADTsbv5bAzM7xxbVN_ZmHlVk7OCTbwoL1lotI0t6tQhKhy5ivZCafO_EPP5X9ksHJ9ajZbFmGg1wzIf9EE_eEsc6cHvEhYork4xACctD796RvryrQ6dqiEXrJLEwv83uZvv3ad2PYtyRhnHSiIAO0VgMJVM8Yr4QxQqaWH_ViVL',
    leadPlayerName: 'Adil Farooq',
    phone: '+91 98765 43210',
    email: 'adil.sports@gmail.com'
  }
];

export const SPORTS_CATEGORIES = [
  {
    id: 'football',
    name: 'Football',
    countText: '34 Grounds available',
    icon: 'sports_soccer',
    tag: 'Fast',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDW0DhL4S2VwWH3u-AWhYTWwDbCtCFIsR-D4qCV4G6FOzV-Cd4oQyP0lTpcY1R0v3Xmsjjl_DEV0OXnzLvylMto1Xf_LWywKA8Ke8vgT6j9xt2lw41mY26UBgKKhFiEAK5aDif0572m8rW4tp5OOxEH2SINwWkj-6446pygNaivUWxGPIeGd4UDBvJNY7IrtYYW__qbFwtDNLb_jOAtPjKTL2586NNQPqjymyiHQoEqa0FVc96KgY7m'
  },
  {
    id: 'cricket',
    name: 'Box Cricket',
    countText: '26 Venues & Nets',
    icon: 'sports_cricket',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCi0yl3BK8zybTuNOK7djP46F38_Dk-JqTWcXHvpv8a_nsLjZz01FDOzznAd7Zl0Wp37Fq9GORm5UHDvgMQn5B68s0MM817n4Eu3e20kP4hnqLOazRRdf8bEq4hbdIFsUQnMjCQa0J_zA6EErNyq7NcV-4dv9Zht0ZCajziE_GF8qhVjAy_XZ-VYhF9IHWP7ALPw_vSZ7PFpLjQHhdLwuNId0UM50zm9vCH8ECI1QJI0Gq1M5XGCnRp'
  },
  {
    id: 'badminton',
    name: 'Badminton',
    countText: '19 Arenas (Indoor)',
    icon: 'sports_tennis',
    badge: 'Indoor AC',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJxQEEnWmKJXe9RScy6U_K7Pv3vqXsiRhTUP32OvrUuTpwrh5ioGq9h3Y32fJiYytKgns79hc3txmF0IatoDZLIUC1kAzHdvot3abwYPLt_oAlqrWAacCb-dgGzabDt_x6OcKVeUEeYFPV17R_qQE_VuxCNYPnSOvkERMpWeuqp1QFytwkkrJ7hiQCw8kjxHAfrOiaZkw4gfaqrP7J8V15wRdUHGSmUp82umAM6DQQ_VPl9-sT193E'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    countText: '12 Courts',
    icon: 'sports_basketball',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuCIS0xnVviKJ-QUPIJL4VkWa9SV-PEFKG8FCpsxbdatA32cvO04pVNL90vhr3m5ANlazgG9BFUM8y-zP2wiiunaoDuQSns778hXUEyMwj1DsEZik7DzbgfRJi9_BrQ-2X3WrBplN_njzbFSn76kTQNH-1hguyMmTyX4r3bFXo0bSeu-E3GEU5ycBPXowDu8Q6tFwCKmNqF7aXsPBXtxnmN5kR7Q7JF3xK6nEt91YOFybMZ4rnMeMz'
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    countText: '8 Courts (Sand & Turf)',
    icon: 'sports_volleyball',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAfm3zPvYGy7sjlxggKLfmdTH-g4WM_2ur4RGrZkfHU-1jftUc3TniqD-ryYDn2K-FhVuSyPJk_GLr51QuMOsgk5ItKlUuUnJTjpWPcO7njF29nGWaAc2KF0LMy0hPPqrgmJwbcmd3Wh1Az0V7aYcaFz7p2gPUpLFLsfSVWKkgRlyTythGxO4IRbfRQKF_XzoJke5Ifh-Ev8xTzjpY6MVZOhZ4zGf0MWlohfo8mQt9hho7ZqY_Q8YnS'
  },
  {
    id: 'tennis',
    name: 'Tennis',
    countText: '9 Clubs',
    icon: 'sports_tennis',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcFd6RieRnEVg0H11ZiH16M0HOPSZSowiH7OMUW0wiqaxJo-WX0QfAj1gcTAW16vhIx6rCczfcrxc_9u8cGOdGQR4dixzYEQV76KCxU0x76LjibjRqKI1DsrXvGfIFDDDGSyrXo4aThpZcEH6mx_wr6WLN4ONPb5Tm8lYqyb8NITewAKgbLnJ-tP4FZV6942MQroHBgG9sTJ-BsnoDPfWfjH8uA5JXbifRGX8mdEyQgYu9wzsNphk6'
  },
  {
    id: 'swimming',
    name: 'Swimming',
    countText: '7 Heated Pools',
    icon: 'pool',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKbL7XqTeUqT8Pfs44q0XTugloB4d6oUfbyBzfrmllNwomkrIehdVt_4y-IFnUEOivD4g2HhdDFRJenAfZQIFCrONfoPYyY9bcoAbx5DNTKxwqbGCh6bUs8myVER3E7AI6-Xwct5kckmlWwtnNBsjUzn0MqdNXbJafbebDJ_wwfXDWKeNj2ZCkVKWqkRQHAsfsb1vEUM6ru_IcRed1OewUyS5kjK5-2BsOoeyP5Pwsnn_q3Tu_BcEw'
  }
];
