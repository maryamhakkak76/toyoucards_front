/*
# Create sales_leads table for B2B Talk-to-Sales form submissions

1. Purpose
   Stores inbound B2B sales inquiries submitted from the public website's
   "Talk to Sales" contact form (both the landing page section and the
   dedicated /contact page). This is a public-facing lead capture table:
   anonymous website visitors submit the form, so the anon role must be
   able to INSERT but never SELECT/UPDATE/DELETE.

2. New Tables
   - `sales_leads`
     - `id`            uuid, primary key
     - `full_name`     text, not null — submitter's full name
     - `company`       text, not null — business / company name
     - `work_email`    text, not null — work email (B2B qualification)
     - `interest`      text, not null — primary interest category
       (Buying Gift Cards, Bulk / Volume Purchasing, Becoming a Reseller,
        API Integration, Rewards / Loyalty, Corporate Gifting, Other)
     - `phone`         text, nullable — optional phone / WhatsApp
     - `monthly_volume` text, nullable — optional estimated monthly volume
     - `country`       text, nullable — optional country / market
     - `message`       text, nullable — optional free-form message
     - `status`        text, not null default 'new' — internal lead status
     - `created_at`    timestamptz, default now()

3. Indexes
   - `sales_leads_created_at_idx` on `created_at DESC` for admin review ordering
   - `sales_leads_status_idx` on `status` for filtering by lead status

4. Security (RLS)
   - RLS ENABLED on `sales_leads`.
   - INSERT policy for `anon, authenticated` — public form submission.
     No SELECT / UPDATE / DELETE policies: only service-role (admin)
     can read or manage leads. Visitors can submit but never read back.
   - This is intentionally a one-way write-only table from the client.
*/

CREATE TABLE IF NOT EXISTS sales_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  company text NOT NULL,
  work_email text NOT NULL,
  interest text NOT NULL,
  phone text,
  monthly_volume text,
  country text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE sales_leads ENABLE ROW LEVEL SECURITY;

CREATE INDEX IF NOT EXISTS sales_leads_created_at_idx ON sales_leads (created_at DESC);
CREATE INDEX IF NOT EXISTS sales_leads_status_idx ON sales_leads (status);

DROP POLICY IF EXISTS "anon_insert_sales_lead" ON sales_leads;
CREATE POLICY "anon_insert_sales_lead"
  ON sales_leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
