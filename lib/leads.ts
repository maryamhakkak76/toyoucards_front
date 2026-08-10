// Shared lead-qualification config + validation.
// Used by both the client form and the server route so the schema stays in sync.

export const INTEREST_OPTIONS = [
  { value: 'buying', label: 'Buying Gift Cards' },
  { value: 'bulk', label: 'Bulk / Volume Purchasing' },
  { value: 'reseller', label: 'Becoming a Reseller' },
  { value: 'api', label: 'API Integration' },
  { value: 'rewards', label: 'Rewards / Loyalty' },
  { value: 'corporate', label: 'Corporate Gifting' },
  { value: 'other', label: 'Other' },
] as const

export type InterestValue = (typeof INTEREST_OPTIONS)[number]['value']

export const VOLUME_OPTIONS = [
  'Under $5k / month',
  '$5k – $25k / month',
  '$25k – $100k / month',
  '$100k+ / month',
  'Not sure yet',
] as const

export type LeadInput = {
  fullName: string
  company: string
  email: string
  interest: string
  phone?: string
  volume?: string
  country?: string
  message?: string
}

export type FieldErrors = Partial<Record<keyof LeadInput, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Free / personal inbox domains are discouraged for a B2B work-email field.
const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
])

export function validateLead(input: Partial<LeadInput>): {
  ok: boolean
  errors: FieldErrors
  data?: LeadInput
} {
  const errors: FieldErrors = {}

  const fullName = (input.fullName ?? '').trim()
  const company = (input.company ?? '').trim()
  const email = (input.email ?? '').trim().toLowerCase()
  const interest = (input.interest ?? '').trim()

  if (fullName.length < 2) errors.fullName = 'Please enter your full name.'
  if (company.length < 2) errors.company = 'Please enter your company name.'

  if (!email) {
    errors.email = 'A work email is required.'
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.'
  } else if (FREE_EMAIL_DOMAINS.has(email.split('@')[1])) {
    errors.email = 'Please use your work email so we can reach the right team.'
  }

  const validInterest = INTEREST_OPTIONS.some((o) => o.value === interest)
  if (!validInterest) errors.interest = 'Let us know what you are interested in.'

  const message = (input.message ?? '').trim()
  if (message.length > 2000) errors.message = 'Message is too long.'

  const ok = Object.keys(errors).length === 0

  return {
    ok,
    errors,
    data: ok
      ? {
          fullName,
          company,
          email,
          interest,
          phone: (input.phone ?? '').trim() || undefined,
          volume: (input.volume ?? '').trim() || undefined,
          country: (input.country ?? '').trim() || undefined,
          message: message || undefined,
        }
      : undefined,
  }
}
