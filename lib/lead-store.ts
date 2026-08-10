import type { LeadInput } from '@/lib/leads'

// Lightweight in-memory lead store.
// This is the single integration point for persistence: swap the body of
// `saveLead` for a database insert (Neon/Supabase/etc.) when the DB is wired,
// and the rest of the app keeps working unchanged.

export type StoredLead = LeadInput & {
  id: string
  createdAt: string
}

// Survives module reloads in dev via globalThis.
const globalForLeads = globalThis as unknown as { __leads?: StoredLead[] }
const leads: StoredLead[] = globalForLeads.__leads ?? []
if (!globalForLeads.__leads) globalForLeads.__leads = leads

export async function saveLead(input: LeadInput): Promise<StoredLead> {
  const lead: StoredLead = {
    ...input,
    id:
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `lead_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    createdAt: new Date().toISOString(),
  }

  // TODO: replace with a real database insert once a DB integration is added.
  leads.push(lead)

  return lead
}

export function listLeads(): StoredLead[] {
  return [...leads].reverse()
}
