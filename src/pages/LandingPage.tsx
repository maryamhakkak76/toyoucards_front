import { Link } from 'react-router-dom'
import {
  ArrowRight,
  LayoutGrid,
  ShieldCheck,
  Wallet,
  Download,
  CreditCard,
  MousePointerClick,
  Gift,
  Zap,
  Headphones,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { GiftCard } from '@/components/GiftCard'
import { CardOrbit } from '@/components/CardOrbit'
import CatalogSection from '@/components/CatalogSection'
import TalkToSalesForm from '@/components/TalkToSalesForm'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CatalogSection />
      <InlineCta prompt="Need gift cards in bulk for your business?" action="Contact Us" />
      <ValueSection />
      <OrderProcessSection />
      <WhyToYouCardsSection />
      <DashboardPreview />
      <ContactSection />
      <FinalCta />
    </>
  )
}

/* ──────────────────────────── HERO ──────────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 sm:h-[700px]"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(28,228,243,0.1), rgba(0,99,180,0.04) 55%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_8px_#1CE4F3]" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-ink-400">
              DIGITAL GIFT CARDS FOR BUSINESS
            </span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Sell, send, and manage{' '}
            <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(28,228,243,0.15)]">
              digital gift cards
            </span>{' '}
            from one simple platform.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500 lg:mx-0 lg:text-lg">
            A curated catalog of popular brands for businesses that need fast,
            reliable digital gift card fulfillment.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(0,99,180,0.45)] transition-all hover:brightness-110 sm:w-auto"
            >
              Start Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#catalog"
              className="w-full rounded-full border border-ink-200 bg-white/60 px-5 py-3 text-center text-sm font-medium text-ink-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-700 sm:w-auto"
            >
              Browse Catalog
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-400 lg:justify-start sm:gap-x-6">
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-brand-600/60" /> Fast fulfillment
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:block" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-600/60" /> Secure delivery
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:block" />
            <span className="flex items-center gap-1.5">
              <Headphones className="h-3.5 w-3.5 text-brand-600/60" /> Business support
            </span>
          </div>
        </div>

        <div className="animate-fade-in-up animate-delay-200">
          <CardOrbit />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── INLINE CTA ──────────────────────────── */

function InlineCta({ prompt, action }: { prompt: string; action: string }) {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white/60 px-5 py-5 backdrop-blur-sm shadow-[0_4px_20px_-8px_rgba(0,99,180,0.1)] sm:flex-row sm:px-6">
        <p className="text-pretty text-center text-sm text-ink-500 sm:text-left sm:text-base">
          {prompt}
        </p>
        <Link
          to="/contact"
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors hover:text-ink-900"
        >
          {action}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

/* ──────────────────────────── KEY BENEFITS SECTION ──────────────────────────── */

function BenefitIcon({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
    >
      {children}
    </span>
  )
}

function ValueSection() {
  const features = [
    { icon: Gift, color: '#087AC7', title: 'Curated Brand Catalog', body: 'A hand-picked selection of popular gaming, app, lifestyle, and streaming brands your customers actually want.' },
    { icon: LayoutGrid, color: '#10B981', title: 'Bulk Ordering', body: 'Place large-volume orders with a few clicks. Built for businesses that need gift cards at scale.' },
    { icon: ShieldCheck, color: '#F43F5E', title: 'Secure Code Delivery', body: 'Digital codes are delivered securely so only the intended recipient can access and redeem them.' },
    { icon: LayoutGrid, color: '#8B5CF6', title: 'Easy Dashboard Management', body: 'Track orders, manage balances, and view history from one clean, intuitive dashboard.' },
    { icon: CreditCard, color: '#F59E0B', title: 'Flexible Payment Options', body: 'Pay using wallet balance or available online payment methods — whatever works for your business.' },
    { icon: Download, color: '#087AC7', title: 'Export & Reporting', body: 'Export structured data for accounting, reporting, and operational workflows.' },
  ]

  return (
    <section id="platform" className="relative overflow-hidden py-20 sm:py-24">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[18vw] font-bold leading-none tracking-tighter text-ink-900/[0.025] sm:text-[22vw]"
      >
        BENEFITS
      </p>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
              KEY BENEFITS
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Everything you need to manage{' '}
              <span className="text-gradient-brand">digital gift cards</span> at scale.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              ToYouCards replaces spreadsheets, manual purchasing, and fragmented vendors
              with one simple platform for digital gift cards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-ink-100 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_12px_30px_-15px_rgba(0,99,180,0.18)] sm:p-6"
              >
                <BenefitIcon color={f.color}>
                  <f.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: f.color }} />
                </BenefitIcon>
                <h3 className="mt-4 text-base font-medium tracking-tight text-ink-900 sm:text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
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

/* ──────────────────────────── ORDER PROCESS ──────────────────────────── */

function OrderProcessSection() {
  const steps = [
    { icon: MousePointerClick, color: '#087AC7', title: 'Choose a category or brand', body: 'Browse our curated catalog and pick the gift cards that fit your needs.' },
    { icon: CreditCard, color: '#10B981', title: 'Place your order', body: 'Submit your order with flexible payment options — wallet balance or online payment.' },
    { icon: Zap, color: '#F43F5E', title: 'Receive your digital codes', body: 'Get your digital gift codes delivered fast and securely, ready to use or distribute.' },
  ]

  return (
    <section id="order-process" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(28,228,243,0.07), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
            ORDER PROCESS
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Get started in <span className="text-gradient-brand">three simple steps.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-ink-100 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-[0_12px_30px_-15px_rgba(0,99,180,0.18)] sm:p-7"
            >
              {i < steps.length - 1 && (
                <div className="absolute right-[-24px] top-1/2 hidden h-px w-12 bg-gradient-to-r from-brand-400/30 to-transparent sm:block" />
              )}
              <div className="flex items-center gap-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.5} style={{ color: s.color }} />
                </span>
                <span className="font-mono text-3xl font-bold text-ink-200">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-medium tracking-tight text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── WHY TOYOUCARDS ──────────────────────────── */

function WhyToYouCardsSection() {
  return (
    <section id="why" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 70% 50%, rgba(28,228,243,0.06), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
              WHY TOYOUCARDS
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Built for businesses that need{' '}
              <span className="text-gradient-brand">reliable fulfillment.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              ToYouCards is a B2B platform built to help businesses manage their
              digital gift card operations. Access a curated catalog of popular
              brands through a simple, easy-to-use dashboard.
            </p>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              Focus on growing your sales while ToYouCards handles fast,
              secure digital delivery.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-5">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(0,99,180,0.45)] transition-all hover:brightness-110 sm:w-auto"
              >
                Start Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#catalog"
                className="rounded-full border border-ink-200 bg-white/60 px-5 py-3 text-center text-sm font-medium text-ink-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-700 sm:w-auto"
              >
                Browse Catalog
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="animate-float-slower w-full max-w-[300px] sm:max-w-[380px]">
              <GiftCard variant="blue" amount="$50" label="DIGITAL VALUE" />
            </div>
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(28,228,243,0.07), transparent 65%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── DASHBOARD PREVIEW ──────────────────────────── */

function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2"
        style={{ background: 'radial-gradient(circle at 50% 80%, rgba(0,99,180,0.1), transparent 68%)' }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
          THE PRODUCT
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
          Your digital value, in{' '}
          <span className="text-gradient-brand">one dashboard.</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-10 max-w-4xl px-4 sm:mt-14 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white/90 shadow-[0_40px_80px_-35px_rgba(0,99,180,0.2)] backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-ink-100 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <div className="mx-auto flex items-center gap-2 rounded-md border border-ink-200 bg-ink-50 px-3 py-1 text-[11px] text-ink-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              app.toyoucards.com
            </div>
          </div>

          <div className="p-4 sm:p-5 lg:p-7">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                { icon: Wallet, label: 'Balance', value: '$24,850' },
                { icon: TrendingUp, label: 'Orders', value: '1,284' },
                { icon: Sparkles, label: 'Delivered', value: '99.9%' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-ink-100 bg-ink-50/50 p-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-400">{s.label}</span>
                    <s.icon className="h-4 w-4 text-brand-700" strokeWidth={1.5} />
                  </div>
                  <p className="mt-2 font-mono text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between sm:mt-6">
              <span className="text-sm font-medium text-ink-800">Recent gift cards</span>
              <span className="text-xs text-brand-700">View all</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <GiftCard variant="teal" amount="$50" label="LIFESTYLE" />
              <GiftCard variant="emerald" amount="$100" label="GAMING" />
              <GiftCard variant="rose" amount="$25" label="STREAMING" />
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-ink-400 sm:mt-5">
          Product preview — figures shown are illustrative.
        </p>
      </div>
    </section>
  )
}

/* ──────────────────────────── CONTACT SECTION ──────────────────────────── */

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[600px]"
        style={{ background: 'radial-gradient(circle, rgba(28,228,243,0.07), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="lg:pt-8">
            <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
              LET'S TALK
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Bring digital gift cards
              <br />
              <span className="text-gradient-brand">into your business.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              Tell us what you're looking for and our team will help you find
              the right solution for your business.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-ink-100 bg-white/70 p-5 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,99,180,0.15)] sm:p-7">
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
    <section id="cta" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 55%, rgba(28,228,243,0.1), rgba(0,99,180,0.04) 45%, transparent 70%)' }}
      />

      <div className="animate-float-slower-centered pointer-events-none absolute left-0 right-0 top-1/2 mx-auto w-[640px] max-w-[90vw] opacity-[0.1] blur-[2px]">
        <GiftCard variant="blue" amount="$50" label="DIGITAL VALUE" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 backdrop-blur-sm">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-400 shadow-[0_0_8px_#1CE4F3]" />
          <span className="text-[10px] font-medium tracking-[0.2em] text-ink-400">
            START IN MINUTES
          </span>
        </div>

        <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
          Ready to bring digital{' '}
          <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(28,228,243,0.15)]">
            gift cards
          </span>{' '}
          to your business?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-ink-500">
          Tell us what you need and our team will help you find the right
          solution — from bulk purchasing to reliable fulfillment.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
          <Link
            to="/contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_50px_-10px_rgba(0,99,180,0.5)] transition-all hover:brightness-110 sm:w-auto"
          >
            Start Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#catalog"
            className="w-full rounded-full border border-ink-200 bg-white/60 px-6 py-3.5 text-center text-sm font-medium text-ink-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-700 sm:w-auto"
          >
            Browse Catalog
          </a>
        </div>
      </div>
    </section>
  )
}
