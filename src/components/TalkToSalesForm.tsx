import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Loader as Loader2, CircleAlert as AlertCircle, Sparkles } from 'lucide-react'
import { supabase } from '@/lib/supabase'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  full_name: string
  company: string
  work_email: string
  interest: string
  phone: string
  monthly_volume: string
  country: string
  message: string
}

const INTEREST_OPTIONS = [
  { value: 'Buying Gift Cards', label: 'Buying Gift Cards' },
  { value: 'Bulk / Volume Purchasing', label: 'Bulk / Volume Purchasing' },
  { value: 'Becoming a Reseller', label: 'Becoming a Reseller' },
  { value: 'API Integration', label: 'API Integration' },
  { value: 'Rewards / Loyalty', label: 'Rewards / Loyalty' },
  { value: 'Corporate Gifting', label: 'Corporate Gifting' },
  { value: 'Other', label: 'Other' },
]

const VOLUME_OPTIONS = [
  'Under $5K / month',
  '$5K – $25K / month',
  '$25K – $100K / month',
  '$100K+ / month',
  'Not sure yet',
]

const emptyForm: FormData = {
  full_name: '',
  company: '',
  work_email: '',
  interest: '',
  phone: '',
  monthly_volume: '',
  country: '',
  message: '',
}

export default function TalkToSalesForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (status === 'error') setStatus('idle')
  }

  const validate = (): string | null => {
    if (!form.full_name.trim()) return 'Please enter your full name.'
    if (!form.company.trim()) return 'Please enter your company name.'
    if (!form.work_email.trim()) return 'Please enter your work email.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.work_email))
      return 'Please enter a valid email address.'
    if (!form.interest) return "Please select what you're interested in."
    return null
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setStatus('error')
      setErrorMsg(validationError)
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const { error } = await supabase.from('sales_leads').insert({
        full_name: form.full_name.trim(),
        company: form.company.trim(),
        work_email: form.work_email.trim(),
        interest: form.interest,
        phone: form.phone.trim() || null,
        monthly_volume: form.monthly_volume || null,
        country: form.country.trim() || null,
        message: form.message.trim() || null,
      })

      if (error) throw error

      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong sending your request. Please try again.')
    }
  }

  if (status === 'success') {
    return <SuccessState onReset={() => setStatus('idle')} />
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative ${compact ? '' : 'p-6 sm:p-8 lg:p-10'}`}
      noValidate
    >
      {!compact && (
        <div className="mb-7 flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 border border-brand-500/20">
            <Sparkles className="h-4.5 w-4.5 text-brand-500" />
          </div>
          <span className="text-sm font-semibold text-white/80">Request a Quote</span>
        </div>
      )}

      <div className={`grid gap-5 ${compact ? '' : 'sm:grid-cols-2'}`}>
        <Field label="Full Name" required>
          <input
            type="text"
            className="field-input"
            placeholder="Jane Smith"
            value={form.full_name}
            onChange={(e) => update('full_name', e.target.value)}
            disabled={status === 'loading'}
          />
        </Field>

        <Field label="Business / Company Name" required>
          <input
            type="text"
            className="field-input"
            placeholder="Acme Inc."
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            disabled={status === 'loading'}
          />
        </Field>

        <Field label="Work Email" required className={compact ? '' : 'sm:col-span-2'}>
          <input
            type="email"
            className="field-input"
            placeholder="jane@acme.com"
            value={form.work_email}
            onChange={(e) => update('work_email', e.target.value)}
            disabled={status === 'loading'}
          />
        </Field>

        <Field label="What are you interested in?" required className={compact ? '' : 'sm:col-span-2'}>
          <div className="relative">
            <select
              className="field-input appearance-none pr-10 cursor-pointer"
              value={form.interest}
              onChange={(e) => update('interest', e.target.value)}
              disabled={status === 'loading'}
            >
              <option value="" className="bg-ink-850">Select an option…</option>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-ink-850">
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </Field>

        <Field label="Phone / WhatsApp" optional>
          <input
            type="tel"
            className="field-input"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            disabled={status === 'loading'}
          />
        </Field>

        <Field label="Estimated Monthly Volume" optional>
          <div className="relative">
            <select
              className="field-input appearance-none pr-10 cursor-pointer"
              value={form.monthly_volume}
              onChange={(e) => update('monthly_volume', e.target.value)}
              disabled={status === 'loading'}
            >
              <option value="" className="bg-ink-850">Select range…</option>
              {VOLUME_OPTIONS.map((v) => (
                <option key={v} value={v} className="bg-ink-850">{v}</option>
              ))}
            </select>
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </Field>

        <Field label="Country / Market" optional className={compact ? '' : 'sm:col-span-2'}>
          <input
            type="text"
            className="field-input"
            placeholder="United States, UAE, etc."
            value={form.country}
            onChange={(e) => update('country', e.target.value)}
            disabled={status === 'loading'}
          />
        </Field>

        <Field label="Message" optional className={compact ? '' : 'sm:col-span-2'}>
          <textarea
            className="field-input min-h-[110px] resize-y"
            placeholder="Tell us about your business and what you're looking for…"
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            disabled={status === 'loading'}
          />
        </Field>
      </div>

      {status === 'error' && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-500/25 bg-red-500/[0.06] px-4 py-3.5">
          <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-sm text-red-300">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        className="btn-primary mt-6 w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4.5 w-4.5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Request
            <ArrowRight className="h-4.5 w-4.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs text-white/35">
        By submitting, you agree to be contacted by ToYouCards about your inquiry.
      </p>
    </form>
  )
}

function Field({
  label,
  required,
  optional,
  children,
  className = '',
}: {
  label: string
  required?: boolean
  optional?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-white/70">
        {label}
        {required && <span className="text-brand-500">*</span>}
        {optional && <span className="text-xs font-normal text-white/30">(optional)</span>}
      </label>
      {children}
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center text-center py-12 px-6 animate-fade-in-up">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-brand-500/20 blur-2xl rounded-full" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/15 border border-brand-500/30">
          <Check className="h-8 w-8 text-brand-500" strokeWidth={2.5} />
        </div>
      </div>
      <h3 className="font-display text-2xl font-semibold text-white mb-3">
        Thanks — your request is on the way.
      </h3>
      <p className="text-white/50 max-w-md leading-relaxed mb-8">
        Our team will review your request and get back to you shortly. Keep an eye on your inbox.
      </p>
      <button onClick={onReset} className="btn-secondary">
        Send another request
      </button>
    </div>
  )
}
