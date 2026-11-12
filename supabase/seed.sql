-- ==============================================================================
-- SportSpace Initial Seed Data
-- Run this in your Supabase Dashboard: SQL Editor -> New Query -> Paste & Run
-- ==============================================================================

INSERT INTO public.venues (
  id, name, sport_type, sport_categories, area, full_address, distance_km,
  rating, review_count, price_per_hour, images, status_text, status_type,
  is_fast_book, is_fifa_certified, is_top_rated, is_cafe_on_site,
  description, pitch_details, amenities, opening_hours, opening_days,
  featured_review, map_coordinates_text
) VALUES
(
  'greenfield-arena',
  'Greenfield Arena & Turf',
  '7v7 Synthetic Turf',
  ARRAY['Football', 'Cricket'],
  'Moodbidri, Mangalore',
  'Main Road, Near Alva''s Campus, Moodbidri, Mangalore',
  1.2,
  4.8,
  128,
  800,
  ARRAY[
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC6VewcbJl_Lmk33VydVwJvn-r5lKiDCUxAtb7s62BNFud6sM01ihX-vTC1fSMlm1AKvL85ryS-WtLIolzseSojxEPjweWC5zRLfDrxTBtX3qBNYM_hYdi8HQNNhbToNCy2wvLG5QcEtI5a120-ZPCkAby3ayanN9Xff4SksKnUSwxIVa2ROescRJbOy_htjRjrwOkLO_yMgSasxCkJHMxWhFaMGJjyn-UPXRnV4ACehHAoAbCmdxvN',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD_hjdaSiUf-hdBfj93VdxIvasvY0uLxNFX8TFLvJ9ykU1xIW4J4QzOEzDFaQSHEPvPXgaAu2dCICEg0jycvQY7Nq6lUTdLRCohK9_2ZvJDYZ062-ci_lwg1tQXuiVjHdDZ9xCbLPhvRTtL7HIAVSTgXLunVVQzswuuppV0ick9e_Lclm4tjd4Qq1rjr1XTEmfCl2_nwtarigU5sIGusX9MZePe3nwXNABiPaAm5gixHvPd5_9tQndm',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAZBGNN6v5SBUuoyW6Qh2iL266U1STZ2mUzXfuKP9kBUfsj4p_WMB0cEp4_T6PjHu6U1VggXjni2sAHBHcF6NFsmrE467w6sYgC3w68g300tru9OgmV42QIItWvFvjee4O7u_eNfqqAHTRpXo8YFhR6Zj0B8Nxp5YqG7E4IEM-5OLxRgENqwp7Td6kfBjvojbdHRQge635Fpy9JsHqGoLuNqtr1eX_jKXIcup4nq9r5tVhmHJJ9rFra',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDeMgEsiJlsfg_YMwLcxCh7QN_2L2Iiabf1xjcn_lT_soV1Se3Gk87FAsL3zQuij9OSV6XQY7rNSPCRjZNT5dbf-u4R9SYKbnx_XaT7-V3wIzEUz3mUs3Yjk3-bDer2BQzOhdJ19x7fmMPQSU2g8xqEC8jvC_E4tk0SXuBuYGTFJviwNbUiFOK0iT5t8xPqJACPZluiBTA9SZDDsubRMitGku7kbpSgmuKfDiBZjvG3jcoh8SL9xVPs'
  ],
  'Available Today',
  'available',
  true,
  false,
  false,
  false,
  'Mangalore region''s top-rated 7-a-side floodlit football turf featuring FIFA Pro certified monofilament artificial grass, professional LED floodlighting with zero blind spots, and covered dugout.',
  'Pitch A (7v7 Synthetic Grass)',
  '[
    {"icon": "light_mode", "title": "Floodlights", "subtitle": "200 Lux Pro LED"},
    {"icon": "local_parking", "title": "Free Parking", "subtitle": "Cars & 2-Wheelers"},
    {"icon": "shower", "title": "Clean Showers", "subtitle": "Hygienic restrooms"},
    {"icon": "water_drop", "title": "RO Drinking Water", "subtitle": "Chilled refilling point"},
    {"icon": "checkroom", "title": "Changing Rooms", "subtitle": "Secure key lockers"},
    {"icon": "chair", "title": "Covered Seating", "subtitle": "Spectator stands"},
    {"icon": "medical_services", "title": "First Aid", "subtitle": "Defibrillator ready"},
    {"icon": "sports_volleyball", "title": "Bibs & Match Ball", "subtitle": "Complimentary gear"}
  ]'::jsonb,
  'Mon - Sun: 06:00 AM - 11:30 PM',
  'All 7 Days',
  '{
    "author": "Rohit Sharma",
    "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ290cXKO4yYY_3qePBNWRIpGw1GjIBG8h46mKWyLEtnTCm4mXl7KShln0iSf0lg5aTLKYVaRLX_94-XsWDjiAk9R0woMqGkc0dG1PlqlCnZCKVSeQKpGmwYWytEpEG-qAePAByRCDoO_lBB03zyxXaidx4y908nrG-WEy7Dhs4lKOwYIM6oAszURkFyJzkSDR4KpDAR_RK4ZgBXGMSXGAFB8CLM77jcmbIMWoHBfSSjVeowc5Wq4o",
    "sportTag": "Played 7-a-side Football",
    "timeAgo": "2 days ago",
    "rating": 5,
    "text": "Awesome turf quality and polite management. Bright floodlights for night games, absolutely no glare or blind zones. Locker rooms were sparkling clean!"
  }'::jsonb,
  'Main Road, Near Alva''s Campus, Moodbidri, Mangalore'
),
(
  'kickzone-sports',
  'KickZone Sports Park',
  '5v5 & 7v7 FIFA Certified Turf',
  ARRAY['Football', 'Cricket'],
  'Puttur, Mangalore',
  'Kombettu Junction, Main Road, Puttur, Mangalore',
  2.1,
  4.7,
  95,
  750,
  ARRAY[
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBOJvenHm_XvX85eYzzbpz4EBQGU3MUt_gaGn7BF0QohSDD1S1hTPpagfJj49RDAXA8yH3wws62hbAXSF93UwHgPmprfjhQ6vEdzrmMJzZVgmLY_XznEU-uPO96dCyIzNTGics6vrrDdMavF3EdoggsM7smErU1Arht2QZKJyHmEe8YhketrUjsAddumIIu--vD9KHvHO07URprO_QL6a6_8-gi5W6GVkW4NV7s7nqF1h4sANXi3khS'
  ],
  '2 slots left',
  'few_left',
  false,
  true,
  false,
  false,
  'Dynamic FIFA standard multi-sport box cricket and football arena illuminated by crisp LED sports lighting with dedicated coaching sessions.',
  'Pitch B (5v5 Indoor Net)',
  '[
    {"icon": "light_mode", "title": "Floodlights", "subtitle": "High lumen LEDs"},
    {"icon": "local_parking", "title": "Free Parking", "subtitle": "Available"},
    {"icon": "water_drop", "title": "Drinking Water", "subtitle": "Filtered cold water"},
    {"icon": "sports_cricket", "title": "Cricket Bats & Balls", "subtitle": "Rental available"}
  ]'::jsonb,
  'Mon - Sun: 06:00 AM - 12:00 AM',
  'All 7 Days',
  '{
    "author": "Karthik Gowda",
    "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH",
    "sportTag": "Played Box Cricket",
    "timeAgo": "4 days ago",
    "rating": 5,
    "text": "Great bounce on the pitch and tight net enclosure. Very reasonable rates for evening games!"
  }'::jsonb,
  'Kombettu Junction, Puttur, Mangalore'
),
(
  'chamundi-premier',
  'Sahyadri Premier Turf',
  'Multi-Sport Arena',
  ARRAY['Football', 'Cricket'],
  'Belthangady, Mangalore',
  'Ujire Road, Near Town Square, Belthangady, Mangalore',
  3.5,
  4.9,
  214,
  950,
  ARRAY[
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDWht86Ufsz4m0V4M0oAouT_AhHRTHxCuv8IIvomah66YWJOCDBT7JNPz-iqP5g47RCwjVlurMflzTkB0xLO9ccgC9wjuKdSVua12ZBhEh9MkmVRc65D1u4yblH4HB-CELjqZWGOSjB95JxEPdeAZk0NRHJYrEkBYXD5lPZNaU8yOGMk-P0HMQUjB7g4_-2s4HUDY1Omx4m1-msrgaLVJH1RFA5QCAvsQSIsI8npnVKUoLMfjjJa2iB'
  ],
  'Available Today',
  'available',
  false,
  false,
  true,
  false,
  'Pristine outdoor sports facility with plush artificial grass soccer ground, high perimeter safety netting, and scenic Western Ghats skyline view.',
  'Pitch A - Floodlit Synthetic',
  '[
    {"icon": "light_mode", "title": "Floodlights", "subtitle": "Pro Night Vision"},
    {"icon": "local_parking", "title": "Car Valet", "subtitle": "Spacious lot"},
    {"icon": "shower", "title": "Locker & Shower", "subtitle": "Hot water enabled"},
    {"icon": "sports_volleyball", "title": "Match Bibs", "subtitle": "Included"}
  ]'::jsonb,
  'Mon - Sun: 05:30 AM - 11:00 PM',
  'All 7 Days',
  '{
    "author": "Vikas Rao",
    "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ290cXKO4yYY_3qePBNWRIpGw1GjIBG8h46mKWyLEtnTCm4mXl7KShln0iSf0lg5aTLKYVaRLX_94-XsWDjiAk9R0woMqGkc0dG1PlqlCnZCKVSeQKpGmwYWytEpEG-qAePAByRCDoO_lBB03zyxXaidx4y908nrG-WEy7Dhs4lKOwYIM6oAszURkFyJzkSDR4KpDAR_RK4ZgBXGMSXGAFB8CLM77jcmbIMWoHBfSSjVeowc5Wq4o",
    "sportTag": "Played 7v7 Football",
    "timeAgo": "1 week ago",
    "rating": 5,
    "text": "One of the best football pitches in Mangalore & Belthangady region. Smooth turf that protects your knees during slides!"
  }'::jsonb,
  'Ujire Road, Belthangady, Mangalore'
),
(
  'urban-kickers',
  'Urban Kickers Turf & Cafe',
  'Rooftop Turf with Floodlights',
  ARRAY['Football'],
  'Karkala, Mangalore',
  'Terrace Level, Coastal View Complex, Anekere, Karkala',
  4.2,
  4.6,
  76,
  650,
  ARRAY[
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBcqTGUhuTj65HUnILjQn6sOhR5qJedXSxXRpdyB2W48Odab_oK98XtLjHvB2YaamL96DWlPCAvtpXbY1HuDS-P4rRpVWUfTvr9UVXFe6CwqarPRWWhdJj9OSxI3WTdrzSSusEEf-CawOoA2tGIATtFtnXopI2x3jIrlcc5glnRaAQZ52xaW8pdGuCMeuO38tsd2HDd-_8lhM4YlEokysaBs9mIqZAIw4gQn6uR-09bzxElaNW9Tt9B'
  ],
  'Fully Booked',
  'booked',
  false,
  false,
  false,
  true,
  'Rooftop football turf arena with overhead netting and glowing night lamps alongside an adjacent outdoor lounge cafe with cozy seating.',
  'Rooftop 5v5 Turf',
  '[
    {"icon": "local_cafe", "title": "On-site Cafe", "subtitle": "Smoothies & snacks"},
    {"icon": "light_mode", "title": "LED Floodlights", "subtitle": "Even coverage"},
    {"icon": "chair", "title": "Lounge Seating", "subtitle": "Terrace view"}
  ]'::jsonb,
  'Mon - Sun: 06:00 AM - 11:30 PM',
  'All 7 Days',
  '{
    "author": "Tanvi Nair",
    "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH",
    "sportTag": "Regular player",
    "timeAgo": "3 days ago",
    "rating": 4.5,
    "text": "The rooftop vibe at night is unmatched. Grab a cold shake right after a sweaty 5v5 match!"
  }'::jsonb,
  'Anekere, Karkala'
),
(
  'smashzone-arena',
  'SmashZone Arena',
  'Wooden 4 Courts',
  ARRAY['Badminton'],
  'Kadri, Mangalore',
  'Near Kadri Park, Mallikatte, Mangalore',
  2.4,
  4.9,
  88,
  450,
  ARRAY[
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA9KWXT-GEB8xRVFyH8Q9X45lM6j5i4CKpKvQpxKlLsynkCBz3Znj_KWBzw9gQEFeMSHyKrkfAdQTqhs6HEQgwMc60aOq9V5o8jgQsY_vgQ0-xez85qWXqCStDYqK8Xa9Va8y2gQ2siddNxhNwUqKHQvztpj6kv91XJvx-5GU5r7DHx3TDQ2gNsQ-U8A0dOcMTT99m_ZH_M95Y5aKDX6uqATxA047RWLj_TrZu3y8P3zWo9YR6hJ5qp'
  ],
  'Filling Fast',
  'few_left',
  false,
  false,
  false,
  false,
  'High-ceiling indoor badminton court facility with four pristine wooden courts, professional bright court lines, and LED glare-free lighting.',
  'Court 1 & 2 (Teakwood)',
  '[
    {"icon": "ac_unit", "title": "Air Cooled", "subtitle": "Well-ventilated"},
    {"icon": "sports_tennis", "title": "Racket Stringing", "subtitle": "Pro shop"},
    {"icon": "shower", "title": "Hot Shower", "subtitle": "Fresh towel service"}
  ]'::jsonb,
  'Mon - Sun: 05:00 AM - 10:30 PM',
  'All 7 Days',
  '{
    "author": "Arjun Mehta",
    "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ290cXKO4yYY_3qePBNWRIpGw1GjIBG8h46mKWyLEtnTCm4mXl7KShln0iSf0lg5aTLKYVaRLX_94-XsWDjiAk9R0woMqGkc0dG1PlqlCnZCKVSeQKpGmwYWytEpEG-qAePAByRCDoO_lBB03zyxXaidx4y908nrG-WEy7Dhs4lKOwYIM6oAszURkFyJzkSDR4KpDAR_RK4ZgBXGMSXGAFB8CLM77jcmbIMWoHBfSSjVeowc5Wq4o",
    "sportTag": "Badminton doubles",
    "timeAgo": "5 days ago",
    "rating": 5,
    "text": "Pristine wooden courts with great grip. Racket rental is top grade Yonex gear."
  }'::jsonb,
  'Kadri, Mangalore'
),
(
  'dribble-kings',
  'Dribble Kings Park',
  'FIBA Acrylic Court',
  ARRAY['Basketball'],
  'Surathkal, Mangalore',
  'Near Beach Road, Surathkal, Mangalore',
  3.1,
  4.7,
  52,
  600,
  ARRAY[
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBhCXZMJ95Un76mPp3dgTBpEpgcq6cElBADEVN1cP4L169jToXxSoaKaD52ZYT2RIWn3QYiW9jtEA4zc2MLCoPCWaApgr6BbB3pFrjZW-KU7KvySD5QxLLs8ra2UZmDQiPita-h51WO1jNxREgVO8b7bp8d5IBEHpdkZ9lZPm0NscIP51hPPa6l0qdpM7KGhLsot6e532a41cZbL75CioShNAfrAqcC8oY4vLUyLsajwprH2iGPmzYM'
  ],
  'Available Today',
  'available',
  false,
  false,
  false,
  false,
  'Outdoor FIBA approved acrylic blue basketball court with pristine markings, spring-loaded glass backboards, and perimeter lights.',
  'Full Court (Acrylic Blue)',
  '[
    {"icon": "light_mode", "title": "Stadium Lighting", "subtitle": "Clear night vision"},
    {"icon": "sports_basketball", "title": "Spalding Balls", "subtitle": "Free use"},
    {"icon": "water_drop", "title": "Hydration Station", "subtitle": "Chilled water"}
  ]'::jsonb,
  'Mon - Sun: 06:00 AM - 10:00 PM',
  'All 7 Days',
  '{
    "author": "Pranav K",
    "avatar": "https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH",
    "sportTag": "Half-court 3x3",
    "timeAgo": "1 week ago",
    "rating": 5,
    "text": "Breakaway rims and clean acrylic paint. The lighting is very even for late night pickup games."
  }'::jsonb,
  'Surathkal, Mangalore'
)
ON CONFLICT (id) DO NOTHING;

-- Initial Seed Bookings
INSERT INTO public.bookings (
  id, venue_id, venue_name, pitch, sport, date, time_slot, duration_hours,
  address, total_amount, status, status_badge, payment_method, qr_passcode,
  image, lead_player_name, phone, email, notes
) VALUES
(
  'SS-2026-48291',
  'greenfield-arena',
  'Greenfield Arena & Turf',
  'Pitch A • 7-a-side Synthetic Grass',
  '7-a-side Football',
  'Fri, 23 Oct 2026',
  '07:00 PM - 09:00 PM',
  2,
  'Near Alva''s Campus, Moodbidri, Mangalore',
  1608,
  'upcoming',
  'Confirmed • In 2 Days',
  'UPI (adil@okaxis)',
  '4829',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDXQiEwNd77VqW74_L_utRwQD5xQEfD3mcuzX__DAvSNYejA0Et3iRs4JzH_4g0pPp2fiHcx92MWXPJTgoOvG0iuc9JYZU7mgD-pXjgE6TJitlmKdSN_zUn71ABbrEve5U8H4YLuGipwY2rrRlZO0sr_y-snm8K5i0gtg0PCW5hjHJHb-XmobqeaGudZQGOlFxgN5FO1KDWD4nE045y0-Gxx5t79QU_tPgL-YXW7-TEzzSfueSU2q5B',
  'Adil Farooq',
  '+91 98765 43210',
  'adil.sports@gmail.com',
  'Locker & Bibs included'
),
(
  'SS-2026-39102',
  'chamundi-premier',
  'Sahyadri Premier Turf',
  '5v5 Box Cricket • Floodlit Pitch B',
  '5v5 Box Cricket',
  '14 Oct 2026',
  '06:00 PM - 07:00 PM',
  1,
  'Ujire Road, Belthangady, Mangalore',
  900,
  'completed',
  'Completed on 14 Oct',
  'UPI',
  '9102',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDWht86Ufsz4m0V4M0oAouT_AhHRTHxCuv8IIvomah66YWJOCDBT7JNPz-iqP5g47RCwjVlurMflzTkB0xLO9ccgC9wjuKdSVua12ZBhEh9MkmVRc65D1u4yblH4HB-CELjqZWGOSjB95JxEPdeAZk0NRHJYrEkBYXD5lPZNaU8yOGMk-P0HMQUjB7g4_-2s4HUDY1Omx4m1-msrgaLVJH1RFA5QCAvsQSIsI8npnVKUoLMfjjJa2iB',
  'Adil Farooq',
  '+91 98765 43210',
  'adil.sports@gmail.com',
  NULL
)
ON CONFLICT (id) DO NOTHING;
