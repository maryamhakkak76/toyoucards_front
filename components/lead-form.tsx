'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import {
  INTEREST_OPTIONS,
  VOLUME_OPTIONS,
  validateLead,
  type FieldErrors,
  type LeadInput,
} from '@/lib/leads'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const inputBase =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-cyan/50 focus:ring-2 focus:ring-cyan/25'

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string
  children: React.ReactNode
  optional?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 flex items-center gap-2 text-xs font-medium tracking-wide text-foreground/80"
    >
      {children}
      {optional && (
        <span className="text-[10px] font-normal text-muted-foreground/60">
          Optional
        </span>
      )}
    </label>
  )
}

export function LeadForm() {
  const [interest, setInterest] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)

    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      interest,
      fullName: String(fd.get('fullName') ?? ''),
      company: String(fd.get('company') ?? ''),
      email: String(fd.get('email') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      volume: String(fd.get('volume') ?? ''),
      country: String(fd.get('country') ?? ''),
      message: String(fd.get('message') ?? ''),
      website: String(fd.get('website') ?? ''), // honeypot
    }

    // Client-side validation mirrors the server for instant feedback.
    const local = validateLead(payload as Partial<LeadInput>)
    if (!local.ok) {
      setErrors(local.errors)
      setStatus('error')
      return
    }
    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        setInterest('')
        return
      }

      const data = (await res.json().catch(() => null)) as
        | { error?: string; errors?: FieldErrors }
        | null
      if (data?.errors) setErrors(data.errors)
      setFormError(data?.error ?? 'Something went wrong. Please try again.')
      setStatus('error')
    } catch {
      setFormError(
        'We could not reach the server. Check your connection and try again.',
      )
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/[0.04] px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-cyan">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h3 className="mt-6 text-xl font-semibold tracking-tight">
          Thanks — your request is on its way.
        </h3>
        <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Our team will review your request and get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-cyan transition-colors hover:text-foreground"
        >
          Send another request
        </button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-sm sm:p-7"
    >
      {/* Honeypot — hidden from real users */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Do not fill this field</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Step 1 — qualification */}
      <fieldset>
        <legend className="mb-3 text-xs font-medium tracking-wide text-foreground/80">
          What can we help you with?
        </legend>
        <div className="flex flex-wrap gap-2">
          {INTEREST_OPTIONS.map((o) => {
            const active = interest === o.value
            return (
              <button
                key={o.value}
                type="button"
                onClick={() => setInterest(o.value)}
                className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
                  active
                    ? 'border-cyan/50 bg-cyan/10 text-cyan'
                    : 'border-white/10 bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-foreground'
                }`}
                aria-pressed={active}
              >
                {o.label}
              </button>
            )
          })}
        </div>
        {errors.interest && (
          <p className="mt-2 text-xs text-destructive">{errors.interest}</p>
        )}
      </fieldset>

      {/* Step 2 — details, revealed once an interest is chosen */}
      <div
        className={`grid gap-4 overflow-hidden transition-all duration-500 ${
          interest
            ? 'mt-6 max-h-[1400px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="fullName">Full name</Label>
            <input
              id="fullName"
              name="fullName"
              autoComplete="name"
              placeholder="Jane Doe"
              className={inputBase}
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-destructive">
                {errors.fullName}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="company">Business / Company</Label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Acme Inc."
              className={inputBase}
            />
            {errors.company && (
              <p className="mt-1.5 text-xs text-destructive">
                {errors.company}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email">Work email</Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputBase}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="phone" optional>
              Phone / WhatsApp
            </Label>
            <input
              id="phone"
              name="phone"
              autoComplete="tel"
              placeholder="+1 555 000 0000"
              className={inputBase}
            />
          </div>
          <div>
            <Label htmlFor="country" optional>
              Country / Market
            </Label>
            <input
              id="country"
              name="country"
              placeholder="United States"
              className={inputBase}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="volume" optional>
            Estimated monthly volume
          </Label>
          <select
            id="volume"
            name="volume"
            defaultValue=""
            className={`${inputBase} appearance-none`}
          >
            <option value="" disabled>
              Select a range
            </option>
            {VOLUME_OPTIONS.map((v) => (
              <option key={v} value={v} className="bg-[#0a121c]">
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="message" optional>
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us a little about what you're building."
            className={`${inputBase} resize-none`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
          )}
        </div>

        {formError && (
          <div
            role="alert"
            className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            {formError}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="group mt-1 flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_12px_40px_-10px_rgba(22,193,232,0.6)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Request
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] leading-relaxed text-muted-foreground/60">
          By submitting, you agree to be contacted by our sales team about your
          request.
        </p>
      </div>
    </form>
  )
}
