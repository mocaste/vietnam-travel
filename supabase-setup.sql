CREATE TABLE contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE preregistrations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  travel_dates TEXT,
  group_size TEXT,
  special_requests TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE preregistrations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for preregistrations" ON preregistrations;
DROP POLICY IF EXISTS "Enable select for contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Enable select for preregistrations" ON preregistrations;

-- Create comprehensive policies for contact submissions
CREATE POLICY "Enable insert for contact submissions" ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Enable select for contact submissions" ON contact_submissions
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create comprehensive policies for preregistrations
CREATE POLICY "Enable insert for preregistrations" ON preregistrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Enable select for preregistrations" ON preregistrations
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT, SELECT ON contact_submissions TO anon, authenticated;
GRANT INSERT, SELECT ON preregistrations TO anon, authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;