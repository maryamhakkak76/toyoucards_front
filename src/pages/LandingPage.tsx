import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown, Check, LayoutGrid, Zap, Globe, ShieldCheck, Wallet, Package, TrendingUp } from 'lucide-react'
import { GiftCard, type GiftCardVariant } from '@/components/GiftCard'
import { CardOrbit } from '@/components/CardOrbit'
import TalkToSalesForm from '@/components/TalkToSalesForm'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CatalogSection />
      <InlineCta
        prompt="Need volume pricing for hundreds or thousands of cards?"
        action="Talk to Sales"
      />
      <ValueSection />
      <ApiSection />
      <InlineCta
        prompt="Building something at scale with the API?"
        action="Talk to our team"
      />
      <DashboardPreview />
      <ContactSection />
      <FinalCta />
    </>
  )
}

/* ──────────────────────────── HERO ──────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-32 sm:pt-40">
      {/* hero atmospheric light source */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(22,193,232,0.18), rgba(19,93,169,0.05) 55%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-in-up text-center lg:text-left">
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_#16c1e8]" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-white/50">
              DIGITAL GIFT CARDS · BUILT FOR BUSINESS
            </span>
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Power Your Business With{' '}
            <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(22,193,232,0.35)]">
              Digital Gift Cards
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-white/55 lg:mx-0 lg:text-lg">
            Buy, distribute, and automate digital gift cards through one premium
            platform and a developer-first API — engineered for businesses that
            move value at scale.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-[#ffffff] shadow-[0_10px_40px_-8px_rgba(22,193,232,0.55)] transition-all hover:brightness-110"
            >
              Contact us now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#catalog"
              className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-brand-400/40 hover:text-brand-400"
            >
              Explore Gift Cards??
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-white/40 lg:justify-start">
            <span>Global coverage</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Instant delivery</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>API-first</span>
          </div>
        </div>

        <div className="animate-fade-in-up animate-delay-200">
          <CardOrbit />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── CATALOG ──────────────────────────── */

type CatalogItem = {
  variant: GiftCardVariant
  amount: string
  label: string
  category: string
  rotate: string
}

function CatalogSection() {
  const items: CatalogItem[] = [
    { variant: 'cyan', amount: '$50', label: 'DIGITAL VALUE', category: 'Shopping', rotate: '-rotate-3' },
    { variant: 'blue', amount: '$100', label: 'PREMIUM', category: 'Retail', rotate: 'rotate-2' },
    { variant: 'deep', amount: '$25', label: 'GAMING', category: 'Gaming', rotate: '-rotate-2' },
    { variant: 'dark', amount: '$75', label: 'STREAMING', category: 'Entertainment', rotate: 'rotate-3' },
    { variant: 'light', amount: '$200', label: 'CORPORATE', category: 'Rewards', rotate: '-rotate-1' },
  ]
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section id="catalog" className="relative overflow-hidden py-24">
      {/* deep blue glow bleeding from previous section */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(19,93,169,0.16), transparent 68%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-brand-400/80">
              THE CATALOG
            </p>
            <h2 className="mt-3 max-w-md text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A living catalog of digital value.
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-white/50">
            Hundreds of brands and denominations. Hover a card to bring it
            forward.
          </p>
        </div>
      </div>

      {/* flowing collection */}
      <div className="relative mt-14">
        <div className="flex gap-6 overflow-x-auto px-4 pb-16 pt-10 [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => {
            const isActive = activeId === i
            const isDimmed = activeId !== null && !isActive
            return (
              <button
                key={i}
                onMouseEnter={() => setActiveId(i)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(i)}
                onBlur={() => setActiveId(null)}
                className={`group relative w-[260px] shrink-0 origin-bottom cursor-pointer text-left transition-all duration-500 ease-out ${item.rotate} ${
                  isActive ? 'z-10 -translate-y-4 !rotate-0 scale-105' : ''
                } ${isDimmed ? 'scale-95 opacity-45 blur-[1px]' : ''}`}
              >
                <div
                  className={`transition-shadow duration-500 ${
                    isActive ? 'drop-shadow-[0_30px_60px_rgba(22,193,232,0.28)]' : ''
                  }`}
                >
                  <GiftCard
                    variant={item.variant}
                    amount={item.amount}
                    label={item.label}
                  />
                </div>
                <div
                  className={`mt-4 flex items-center justify-between transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="text-sm font-medium text-white">
                    {item.category}
                  </span>
                  <span className="text-xs text-brand-400">{item.amount} value</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── INLINE CTA ──────────────────────────── */

function InlineCta({ prompt, action }: { prompt: string; action: string }) {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-6">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 backdrop-blur-sm sm:flex-row">
        <p className="text-pretty text-center text-sm text-white/50 sm:text-left sm:text-base">
          {prompt}
        </p>
        <Link
          to="/contact"
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-400 transition-colors hover:text-white"
        >
          {action}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

/* ──────────────────────────── VALUE SECTION ──────────────────────────── */

function ValueSection() {
  const features = [
    {
      icon: LayoutGrid,
      title: 'Digital catalog',
      body: 'One integration unlocks hundreds of brands and denominations, always in sync.',
    },
    {
      icon: Zap,
      title: 'Instant delivery',
      body: 'Codes are provisioned and delivered in milliseconds — no manual fulfillment.',
    },
    {
      icon: Globe,
      title: 'Global by default',
      body: 'Purchase and distribute digital value across regions and currencies.',
    },
    {
      icon: ShieldCheck,
      title: 'Business controls',
      body: 'Budgets, roles, and audit trails engineered for finance and operations teams.',
    },
  ]

  return (
    <section id="platform" className="relative overflow-hidden py-24">
      {/* oversized background typography crossing the boundary */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-bold leading-none tracking-tighter text-white/[0.015]"
      >
        VALUE
      </p>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium tracking-[0.22em] text-brand-400/80">
              THE PLATFORM
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Everything your business needs to move digital value.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/50">
              ToYouCards replaces spreadsheets, manual purchasing, and
              fragmented vendors with a single, programmable platform for
              digital gift cards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/40 hover:bg-white/[0.04]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-400 transition-colors group-hover:border-brand-400/40">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── API SECTION ──────────────────────────── */

function ApiSection() {
  return (
    <section id="api" className="relative overflow-hidden py-24">
      {/* cyan line glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(22,193,232,0.14), transparent 65%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-brand-400/80">
            DEVELOPERS
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            An API built for digital value.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/50">
            Create orders, issue codes, and reconcile balances programmatically.
            Predictable endpoints, typed responses, and webhooks for every event
            in the lifecycle.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              'REST endpoints with typed SDKs',
              'Signed webhooks for every order event',
              'Sandbox environment with test value',
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-400">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-white/55">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* code window */}
        <div className="relative rounded-2xl border border-white/10 bg-[#080c12] shadow-[0_40px_90px_-40px_rgba(2,10,20,0.9)]">
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-xs text-white/50">
              orders.create
            </span>
          </div>

          <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-brand-500/15 px-1.5 py-0.5 text-[11px] font-semibold text-brand-400">
                  POST
                </span>
                <span className="text-white/90">/v1/orders</span>
              </div>
              <pre className="mt-3 text-white/55">
                <span className="text-white/40">{'{'}</span>
                {'\n  '}
                <span className="text-blue-300">"product"</span>
                <span className="text-white/40">: </span>
                <span className="text-brand-400">"gift-card"</span>
                <span className="text-white/40">,</span>
                {'\n  '}
                <span className="text-blue-300">"amount"</span>
                <span className="text-white/40">: </span>
                <span className="text-brand-400">50</span>
                {'\n'}
                <span className="text-white/40">{'}'}</span>
              </pre>
            </div>

            <div className="flex justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/10 text-brand-400">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="rounded-xl border border-brand-400/15 bg-brand-500/[0.04] p-4">
              <div className="flex items-center gap-2 text-brand-400">
                <Check className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-xs font-semibold tracking-wide">
                  ORDER CREATED
                </span>
              </div>
              <div className="mt-3 text-white/55">
                <span className="text-blue-300">"digital_code"</span>
                <span className="text-white/40">: </span>
                <span className="tracking-[0.3em] text-white/80">
                  ••••••••••••
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="relative mx-auto mt-6 max-w-6xl px-4 text-[11px] text-white/30">
        Illustrative example — endpoint shapes shown for demonstration.
      </p>
    </section>
  )
}

/* ──────────────────────────── DASHBOARD PREVIEW ──────────────────────────── */

function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-24">
      {/* blue ambient light beneath the window */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle at 50% 80%, rgba(22,132,214,0.22), transparent 68%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-brand-400/80">
          THE PRODUCT
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Your digital value, in one dashboard.
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-4xl px-4">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a121c]/90 shadow-[0_50px_120px_-40px_rgba(2,10,20,0.95)] backdrop-blur-xl">
          {/* browser chrome */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <div className="mx-auto flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              app.toyoucards.com
            </div>
          </div>

          <div className="p-5 sm:p-7">
            {/* stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Wallet, label: 'Balance', value: '$24,850' },
                { icon: Package, label: 'Orders', value: '1,284' },
                { icon: TrendingUp, label: 'Delivered', value: '99.9%' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/50">{s.label}</span>
                    <s.icon className="h-4 w-4 text-brand-400" strokeWidth={1.5} />
                  </div>
                  <p className="mt-2 font-mono text-2xl font-semibold tracking-tight text-white">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            {/* gift cards row */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-white">Recent gift cards</span>
              <span className="text-xs text-brand-400">View all</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <GiftCard variant="cyan" amount="$50" label="SHOPPING" />
              <GiftCard variant="blue" amount="$100" label="PREMIUM" />
              <GiftCard variant="deep" amount="$25" label="GAMING" />
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] text-white/30">
          Product preview — figures shown are illustrative.
        </p>
      </div>
    </section>
  )
}

/* ──────────────────────────── CONTACT SECTION ──────────────────────────── */

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(22,193,232,0.12), transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="lg:pt-8">
            <p className="text-xs font-medium tracking-[0.22em] text-brand-400/80">
              LET'S TALK
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              Bring digital gift cards
              <br />
              <span className="text-gradient-brand">
                into your business.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/50">
              Tell us what you're building and our team will help you find the
              right solution for your business.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-sm sm:p-7">
              <TalkToSalesForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── FINAL CTA ──────────────────────────── */

function FinalCta() {
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
      <div className="animate-float-slower-centered pointer-events-none absolute left-0 right-0 top-1/2 mx-auto w-[640px] max-w-[90vw] opacity-[0.14] blur-[2px]">
        <GiftCard variant="blue" amount="$50" label="DIGITAL VALUE" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-sm">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_#16c1e8]" />
          <span className="text-[10px] font-medium tracking-[0.2em] text-white/50">
            START IN MINUTES
          </span>
        </div>

        <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
          Ready to bring digital{' '}
          <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(22,193,232,0.4)]">
            gift cards
          </span>{' '}
          to your business?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/50">
          Tell us what you're building and our team will help you find the right
          solution — from bulk purchasing to API-powered distribution.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-[#04121a] shadow-[0_16px_50px_-10px_rgba(22,193,232,0.6)] transition-all hover:brightness-110"
          >
            Talk to Sales
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#catalog"
            className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-brand-400/40 hover:text-brand-400"
          >
            Explore Gift Cards
          </a>
        </div>
      </div>
    </section>
  )
}
