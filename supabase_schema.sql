-- Pivotal Voice Database Schema

-- 1. Profiles Table (Linked to Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    display_name TEXT NOT NULL,
    city TEXT,
    bio TEXT,
    years_in_county INTEGER,
    is_business_owner BOOLEAN DEFAULT false,
    reputation INTEGER DEFAULT 0,
    topic_count INTEGER DEFAULT 0,
    reply_count INTEGER DEFAULT 0,
    is_admin BOOLEAN DEFAULT false,
    is_moderator BOOLEAN DEFAULT false,
    join_date TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Newsletter Subscribers
CREATE TABLE IF NOT EXISTS public.subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    city TEXT,
    interests TEXT[],
    status TEXT DEFAULT 'active', -- active, unsubscribed
    frequency TEXT DEFAULT 'weekly',
    opt_in_method TEXT,
    forum_user_id UUID REFERENCES public.profiles(id),
    consent_timestamp TIMESTAMPTZ DEFAULT NOW(),
    signup_date TIMESTAMPTZ DEFAULT NOW(),
    unsubscribe_token TEXT UNIQUE
);

-- 3. Forum Categories
CREATE TABLE IF NOT EXISTS public.forum_categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    color TEXT,
    "order" INTEGER,
    topic_count INTEGER DEFAULT 0
);

-- 4. Forum Topics
CREATE TABLE IF NOT EXISTS public.topics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    category_id TEXT REFERENCES public.forum_categories(id),
    author_id UUID REFERENCES public.profiles(id),
    author_name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    reply_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    is_pinned BOOLEAN DEFAULT false,
    is_locked BOOLEAN DEFAULT false,
    is_anonymous BOOLEAN DEFAULT false,
    tags TEXT[],
    last_reply_at TIMESTAMPTZ,
    last_reply_by TEXT
);

-- 5. Forum Replies
CREATE TABLE IF NOT EXISTS public.replies (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    topic_id UUID REFERENCES public.topics(id) ON DELETE CASCADE,
    parent_reply_id UUID REFERENCES public.replies(id) ON DELETE CASCADE,
    author_id UUID REFERENCES public.profiles(id),
    author_name TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    upvotes INTEGER DEFAULT 0,
    downvotes INTEGER DEFAULT 0,
    is_deleted BOOLEAN DEFAULT false,
    is_anonymous BOOLEAN DEFAULT false
);

-- 6. Civic Events (Calendar)
CREATE TABLE IF NOT EXISTS public.civic_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME,
    timezone TEXT DEFAULT 'America/Chicago',
    location_name TEXT,
    location_address TEXT,
    location_city TEXT,
    location_state TEXT DEFAULT 'TX',
    location_zip TEXT,
    event_type TEXT,
    governing_body TEXT,
    is_featured BOOLEAN DEFAULT false,
    is_recurring BOOLEAN DEFAULT false,
    rsvp_count INTEGER DEFAULT 0,
    tags TEXT[],
    approval_status TEXT DEFAULT 'approved', -- approved, pending, rejected
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Event RSVPs
CREATE TABLE IF NOT EXISTS public.event_rsvps (
    event_id UUID REFERENCES public.civic_events(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (event_id, user_id)
);

-- Enable RLS (simplified for now)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.civic_events ENABLE ROW LEVEL SECURITY;

-- Allow public read Access
CREATE POLICY "Allow public read on topics" ON public.topics FOR SELECT USING (true);
CREATE POLICY "Allow public read on replies" ON public.replies FOR SELECT USING (true);
CREATE POLICY "Allow public read on categories" ON public.forum_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read on events" ON public.civic_events FOR SELECT USING (true);

-- Functions
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_topics_updated_at BEFORE UPDATE ON public.topics FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_replies_updated_at BEFORE UPDATE ON public.replies FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE PROCEDURE update_updated_at_column();
