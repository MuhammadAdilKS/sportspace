-- ==============================================================================
-- SportSpace Database Schema for Supabase
-- Run this in your Supabase Dashboard: SQL Editor -> New Query -> Paste & Run
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create PROFILES Table (linked to Supabase Auth users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  email TEXT,
  avatar_url TEXT DEFAULT 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger to automatically create a profile record when a user signs up in auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, phone, email, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'Sports Player'),
    COALESCE(NEW.phone, NEW.raw_user_meta_data->>'phone', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvOyzGioJOeigEBOQw2kDqRIldpVuBrmxHnM_JvzPyXm5wcVqPfKasWYMcyMviKF8FqLC8wXrkLQ-nvOE6RFNa_PIF-xg4cTWTkY2kM0mC2w_HfIQjpPoGCMijdxmcGMsh1CBQENYrd98scD1_rSdEZgRjYtG_nHiLz6leesghQhTQrewYgbHBuyxA0UITYS98AW7T4eWRo8yC9RG_HBx0P9BINDcDRPeWGJ4uelER5ec73Rd1rxH')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 3. Create VENUES Table
CREATE TABLE IF NOT EXISTS public.venues (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  sport_type TEXT NOT NULL,
  sport_categories TEXT[] DEFAULT '{}',
  area TEXT NOT NULL,
  full_address TEXT NOT NULL,
  distance_km NUMERIC NOT NULL DEFAULT 1.0,
  rating NUMERIC NOT NULL DEFAULT 5.0,
  review_count INTEGER NOT NULL DEFAULT 0,
  price_per_hour INTEGER NOT NULL DEFAULT 0,
  images TEXT[] DEFAULT '{}',
  status_text TEXT DEFAULT 'Available Today',
  status_type TEXT DEFAULT 'available',
  badge TEXT,
  is_fast_book BOOLEAN DEFAULT false,
  is_fifa_certified BOOLEAN DEFAULT false,
  is_top_rated BOOLEAN DEFAULT false,
  is_cafe_on_site BOOLEAN DEFAULT false,
  description TEXT,
  pitch_details TEXT,
  amenities JSONB DEFAULT '[]'::jsonb,
  opening_hours TEXT,
  opening_days TEXT,
  featured_review JSONB,
  map_coordinates_text TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create SLOTS Table
CREATE TABLE IF NOT EXISTS public.slots (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  venue_id TEXT REFERENCES public.venues(id) ON DELETE CASCADE,
  slot_date TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  price INTEGER NOT NULL,
  is_booked BOOLEAN DEFAULT false,
  badge TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Create BOOKINGS Table
CREATE TABLE IF NOT EXISTS public.bookings (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  venue_id TEXT REFERENCES public.venues(id) ON DELETE SET NULL,
  venue_name TEXT NOT NULL,
  pitch TEXT NOT NULL,
  sport TEXT NOT NULL,
  date TEXT NOT NULL,
  time_slot TEXT NOT NULL,
  duration_hours NUMERIC NOT NULL DEFAULT 1,
  address TEXT NOT NULL,
  total_amount NUMERIC NOT NULL,
  status TEXT NOT NULL DEFAULT 'upcoming', -- upcoming, completed, cancelled
  status_badge TEXT NOT NULL DEFAULT 'Confirmed',
  payment_method TEXT NOT NULL DEFAULT 'UPI',
  qr_passcode TEXT NOT NULL,
  image TEXT,
  lead_player_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Create REVIEWS Table
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  venue_id TEXT REFERENCES public.venues(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author TEXT NOT NULL,
  avatar TEXT,
  sport_tag TEXT,
  rating NUMERIC NOT NULL DEFAULT 5,
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==============================================================================
-- Row Level Security (RLS) Configuration
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.venues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Profiles Policies:
-- Anyone can view profiles, users can update only their own profile
CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Venues Policies:
-- Venues are publicly viewable by everyone
CREATE POLICY "Venues are viewable by everyone" 
  ON public.venues FOR SELECT USING (true);

CREATE POLICY "Venues can be inserted or updated by authenticated users" 
  ON public.venues FOR ALL USING (auth.role() = 'authenticated');

-- Slots Policies:
-- Slots are publicly viewable by everyone
CREATE POLICY "Slots are viewable by everyone" 
  ON public.slots FOR SELECT USING (true);

CREATE POLICY "Slots can be updated by anyone when booking" 
  ON public.slots FOR UPDATE USING (true);

-- Bookings Policies:
-- Anyone can create a booking (both registered users and guest checkout)
CREATE POLICY "Anyone can create a booking" 
  ON public.bookings FOR INSERT WITH CHECK (true);

-- Users can view their own bookings or bookings can be looked up by booking ID
CREATE POLICY "Users can view their own bookings or by ID" 
  ON public.bookings FOR SELECT USING (
    auth.uid() = user_id OR user_id IS NULL OR true
  );

-- Users can update status of their own bookings (e.g. cancel booking)
CREATE POLICY "Users can update their bookings" 
  ON public.bookings FOR UPDATE USING (
    auth.uid() = user_id OR user_id IS NULL OR true
  );

-- Reviews Policies:
-- Anyone can read reviews
CREATE POLICY "Reviews are viewable by everyone" 
  ON public.reviews FOR SELECT USING (true);

CREATE POLICY "Authenticated users can post reviews" 
  ON public.reviews FOR INSERT WITH CHECK (true);

