-- seed_data.sql
-- Run this in your Supabase SQL Editor to populate initial data

-- 1. Seed Forum Categories
INSERT INTO public.forum_categories (id, name, description, icon, color, "order")
VALUES 
('infrastructure', 'Infrastructure', 'Roads, utilities, and public works projects.', 'Truck', 'blue', 1),
('growth', 'Growth & Planning', 'New developments, zoning, and urban expansion.', 'Building', 'green', 2),
('taxes', 'Taxes & Finance', 'Budgeting, taxpayer funds, and local fiscal policy.', 'DollarSign', 'gold', 3),
('education', 'Education', 'School board updates, campus news, and policy.', 'BookOpen', 'purple', 4),
('safety', 'Public Safety', 'Police, fire, and emergency response services.', 'Shield', 'red', 5),
('economic', 'Economic Development', 'Job creation, small business support, and industry.', 'Briefcase', 'teal', 6),
('agriculture', 'Agriculture', 'Farming news, rural land use, and local production.', 'Leaf', 'emerald', 7),
('healthcare', 'Healthcare', 'Local clinics, hospitals, and community wellness.', 'Heart', 'pink', 8),
('quality', 'Quality of Life', 'Parks, recreation, arts, and community events.', 'Sun', 'orange', 9),
('environment', 'Environment', 'Water conservation, wildlife, and natural resources.', 'Droplets', 'cyan', 10)
ON CONFLICT (id) DO UPDATE SET 
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    "order" = EXCLUDED."order";

-- 2. Seed Initial Civic Events
INSERT INTO public.civic_events (title, description, date, start_time, end_time, location_name, location_city, event_type, governing_body, is_featured)
VALUES
('City Council Regular Meeting', 'Bi-monthly meeting to discuss city ordinances and budget updates.', CURRENT_DATE + INTERVAL '2 days', '18:30:00', '21:00:00', 'Waxahachie City Hall', 'Waxahachie', 'meeting', 'City Council', true),
('Ellis County Commissioners Court', 'Weekly meeting of the county commissioners regarding regional infrastructure.', CURRENT_DATE + INTERVAL '3 days', '09:00:00', '11:30:00', 'Ellis County Courts Building', 'Waxahachie', 'meeting', 'County Commission', false),
('Planning & Zoning Board', 'Reviewing new residential development proposals in the Midlothian area.', CURRENT_DATE + INTERVAL '5 days', '18:00:00', '20:00:00', 'Midlothian City Hall', 'Midlothian', 'hearing', 'P&Z Board', false),
('School Board Workshop', 'Discussion on upcoming academic year budget and facility expansions.', CURRENT_DATE + INTERVAL '7 days', '19:00:00', '21:30:00', 'WISD Administration Building', 'Waxahachie', 'workshop', 'School Board', true);

-- 3. Update Category Topic Counts (Will be handled by triggers in a real setup, but seeding here)
UPDATE public.forum_categories SET topic_count = (SELECT COUNT(*) FROM public.topics WHERE category_id = forum_categories.id);
