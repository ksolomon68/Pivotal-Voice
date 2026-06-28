-- Candidates Table Migration
CREATE TABLE IF NOT EXISTS public.candidates (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    party TEXT NOT NULL,
    bio TEXT,
    incumbent BOOLEAN DEFAULT false,
    office TEXT NOT NULL,
    office_level TEXT NOT NULL,
    district TEXT,
    campaign_website TEXT,
    photo TEXT,
    twitter TEXT,
    facebook TEXT,
    youtube TEXT,
    top_issues TEXT[] DEFAULT '{}',
    race_status TEXT DEFAULT 'active',
    election_type TEXT,
    election_date DATE,
    opponents TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read on candidates" ON public.candidates FOR SELECT USING (true);

-- Seed Data (Ellis County 2026 Primary)
INSERT INTO public.candidates (
    id, name, party, bio, incumbent, office, office_level, district, top_issues, election_type, election_date, opponents
) VALUES 
('live-gc-bailey-2026', 'Garrett Bailey', 'Republican', 'Candidate for Ellis County Commissioner, Precinct 2.', false, 'Ellis County Commissioner', 'county', 'Precinct 2', ARRAY['Infrastructure', 'Public Safety', 'County Growth'], 'primary', '2026-03-03', ARRAY['Roger Cole', 'John Paul Dineen III']),

('live-gc-cole-2026', 'Roger Cole', 'Republican', 'Candidate for Ellis County Commissioner, Precinct 2.', false, 'Ellis County Commissioner', 'county', 'Precinct 2', ARRAY['Fiscal Responsibility', 'Roads', 'Agricultural Interests'], 'primary', '2026-03-03', ARRAY['Garrett Bailey', 'John Paul Dineen III']),

('live-gc-dineen-2026', 'John Paul Dineen III', 'Republican', 'Candidate for Ellis County Commissioner, Precinct 2.', false, 'Ellis County Commissioner', 'county', 'Precinct 2', ARRAY['Community Development', 'Infrastructure', 'Local Business'], 'primary', '2026-03-03', ARRAY['Garrett Bailey', 'Roger Cole']),

('live-gc-jinadu-2026', 'Oyinkansola Jinadu', 'Democrat', 'Candidate for Ellis County Commissioner, Precinct 4.', false, 'Ellis County Commissioner', 'county', 'Precinct 4', ARRAY['Equity', 'Community Resources', 'Public Safety'], 'primary', '2026-03-03', ARRAY['Kyle Butler']),

('live-gc-butler-2026', 'Kyle Butler', 'Republican', 'Candidate for Ellis County Commissioner, Precinct 4.', false, 'Ellis County Commissioner', 'county', 'Precinct 4', ARRAY['Tax Relief', 'Infrastructure', 'Small Business'], 'primary', '2026-03-03', ARRAY['Oyinkansola Jinadu']),

('live-gc-adams-2026', 'Brandon Adams', 'Republican', 'Candidate for Justice of the Peace, Ellis County.', false, 'Justice of the Peace', 'county', 'Precinct 3 & 4', ARRAY['Law & Order', 'Community Justice', 'Local Courts'], 'primary', '2026-03-03', ARRAY['Pam Hampton']),

('live-gc-hampton-2026', 'Pam Hampton', 'Democrat', 'Candidate for Justice of the Peace, Ellis County.', false, 'Justice of the Peace', 'county', 'Precinct 3 & 4', ARRAY['Access to Justice', 'Community Safety', 'Fair Courts'], 'primary', '2026-03-03', ARRAY['Brandon Adams'])
ON CONFLICT (id) DO NOTHING;
