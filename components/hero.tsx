import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CardOrbit } from '@/components/card-orbit'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-24 pt-32 sm:pt-40"
    >
      {/* hero atmospheric light source */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(22,193,232,0.18), rgba(19,93,169,0.05) 55%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise text-center lg:text-left">
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#16c1e8]" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground">
              DIGITAL GIFT CARDS · BUILT FOR BUSINESS
            </span>
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Digital value,
            <br />
            built to{' '}
            <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(22,193,232,0.35)]">
              scale.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground lg:mx-0 lg:text-lg">
            Buy, distribute, and automate digital gift cards through one premium
            platform and a developer-first API — engineered for businesses that
            move value at scale.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_10px_40px_-8px_rgba(22,193,232,0.55)] transition-all hover:brightness-110"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#catalog"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-cyan/40 hover:text-cyan"
            >
              Explore Gift Cards
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-muted-foreground lg:justify-start">
            <span>Global coverage</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Instant delivery</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>API-first</span>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <CardOrbit />
        </div>
      </div>
    </section>
  )
}
