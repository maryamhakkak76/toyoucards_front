import { Check } from 'lucide-react'
import { LeadForm } from '@/components/lead-form'

const benefits = [
  'Business pricing',
  'Bulk purchasing',
  'API integration',
  'Dedicated sales support',
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* subtle blue atmospheric glow behind the section */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(22,119,200,0.18), rgba(19,93,169,0.05) 55%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-medium tracking-[0.22em] text-cyan/80">
            LET&apos;S TALK
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Bring digital gift cards into your business.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
            Tell us what you&apos;re building and our team will help you find the
            right solution for your business.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-cyan">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <LeadForm />
      </div>
    </section>
  )
}
