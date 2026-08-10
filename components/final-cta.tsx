import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GiftCard } from '@/components/gift-card'

export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden py-32">
      {/* strongest brand glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(22,193,232,0.22), rgba(19,93,169,0.08) 45%, transparent 70%)',
        }}
      />

      {/* huge abstract card in the background */}
      <div className="animate-float-slower pointer-events-none absolute left-1/2 top-1/2 w-[640px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] opacity-[0.14] blur-[2px]">
        <GiftCard variant="blue" amount="$50" label="DIGITAL VALUE" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#16c1e8]" />
          <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground">
            START IN MINUTES
          </span>
        </div>

        <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Ready to bring digital{' '}
          <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(22,193,232,0.4)]">
            gift cards
          </span>{' '}
          to your business?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
          Tell us what you&apos;re building and our team will help you find the
          right solution — from bulk purchasing to API-powered distribution.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_16px_50px_-10px_rgba(22,193,232,0.6)] transition-all hover:brightness-110"
          >
            Talk to Sales
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#catalog"
            className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-cyan/40 hover:text-cyan"
          >
            Explore Gift Cards
          </a>
        </div>
      </div>
    </section>
  )
}
