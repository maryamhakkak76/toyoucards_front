import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowDown,
  Check,
  LayoutGrid,
  ShieldCheck,
  Wallet,
  Download,
  Code as Code2,
  MousePointerClick,
  CreditCard,
  Lock,
  Globe,
  Zap,
  Sparkles,
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
      <InlineCta prompt="Need volume pricing for hundreds or thousands of cards?" action="Talk to Sales" />
      <ValueSection />
      <OrderProcessSection />
      <InlineCta prompt="Building something at scale with the API?" action="Talk to our team" />
      <ApiSection />
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
              DIGITAL GIFT CARDS · BUILT FOR BUSINESS
            </span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Power Your Business With{' '}
            <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(28,228,243,0.15)]">
              Digital Gift Cards
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500 lg:mx-0 lg:text-lg">
            Buy, distribute, and automate digital gift cards through one premium
            platform and a developer-first API — engineered for businesses that
            move value at scale.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(0,99,180,0.45)] transition-all hover:brightness-110 sm:w-auto"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#catalog"
              className="w-full rounded-full border border-ink-200 bg-white/60 px-5 py-3 text-center text-sm font-medium text-ink-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-700 sm:w-auto"
            >
              Explore Gift Cards
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-400 lg:justify-start sm:gap-x-6">
            <span className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-brand-600/60" /> Global coverage
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:block" />
            <span className="flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-brand-600/60" /> Instant delivery
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-300 sm:block" />
            <span className="flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-brand-600/60" /> API-first
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

function ValueSection() {
  const features = [
    { icon: LayoutGrid, title: 'Group Issuance', body: 'Issue and distribute large volumes of gift cards effortlessly.' },
    { icon: Wallet, title: 'Competitive Pricing', body: 'Access competitive bulk rates tailored to your business needs.' },
    { icon: ShieldCheck, title: 'Confidential Code Delivery', body: 'Gift codes are securely encrypted so only the intended recipient can access and use them.' },
    { icon: CreditCard, title: 'Flexible Access', body: 'Manage everything through a real-time dashboard or integrate seamlessly with our API.' },
    { icon: Download, title: 'Export Options', body: 'Export structured data for accounting, reporting, and operational workflows.' },
    { icon: Code2, title: 'Developer Friendly', body: 'Access comprehensive API documentation for seamless integration.' },
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
              with a single, programmable platform for digital gift cards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-ink-100 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_12px_30px_-15px_rgba(0,99,180,0.18)] sm:p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white text-brand-700 transition-all group-hover:border-brand-400/40 group-hover:bg-brand-500/5">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
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
    { icon: MousePointerClick, title: 'Choose Product', body: 'Select from a wide range of digital gift cards suited to your business needs.' },
    { icon: CreditCard, title: 'Make Payment', body: 'Pay securely using your wallet balance or available online payment methods.' },
    { icon: Lock, title: 'Confidential Code Delivery', body: 'Receive encrypted gift codes instantly, accessible only to the intended recipient.' },
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
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-200 bg-white text-brand-700 transition-all group-hover:border-brand-400/40 group-hover:bg-brand-500/5">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
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

/* ──────────────────────────── API SECTION ──────────────────────────── */

function ApiSection() {
  return (
    <section id="api" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(0,99,180,0.07), transparent 65%)' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
            DEVELOPERS
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            An API built for{' '}
            <span className="text-gradient-brand">digital value.</span>
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500">
            Create orders, issue codes, and reconcile balances programmatically.
            Predictable endpoints, typed responses, and webhooks for every event
            in the lifecycle.
          </p>

          <ul className="mt-7 space-y-3">
            {[
              'REST endpoints with typed SDKs',
              'Signed webhooks for every order event',
              'Sandbox environment with test value',
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-700">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-ink-600">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-2xl border border-ink-200 bg-white shadow-[0_30px_60px_-30px_rgba(0,99,180,0.2)]">
          <div className="flex items-center gap-2 border-b border-ink-100 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="ml-3 font-mono text-xs text-ink-400">orders.create</span>
          </div>

          <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-brand-500/15 px-1.5 py-0.5 text-[11px] font-semibold text-brand-700">POST</span>
                <span className="text-ink-800">/v1/orders</span>
              </div>
              <pre className="mt-3 text-ink-600">
                <span className="text-ink-400">{'{'}</span>
                {'\n  '}
                <span className="text-brand-700">"product"</span>
                <span className="text-ink-400">: </span>
                <span className="text-brand-600">"gift-card"</span>
                <span className="text-ink-400">,</span>
                {'\n  '}
                <span className="text-brand-700">"amount"</span>
                <span className="text-ink-400">: </span>
                <span className="text-brand-600">50</span>
                {'\n'}
                <span className="text-ink-400">{'}'}</span>
              </pre>
            </div>

            <div className="flex justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/10 text-brand-700">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="rounded-xl border border-brand-400/20 bg-brand-500/[0.04] p-4">
              <div className="flex items-center gap-2 text-brand-700">
                <Check className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-xs font-semibold tracking-wide">ORDER CREATED</span>
              </div>
              <div className="mt-3 text-ink-600">
                <span className="text-brand-700">"digital_code"</span>
                <span className="text-ink-400">: </span>
                <span className="tracking-[0.3em] text-ink-800">••••••••••••</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="relative mx-auto mt-6 max-w-6xl px-4 text-[11px] text-ink-400 sm:px-6">
        Illustrative example — endpoint shapes shown for demonstration.
      </p>
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
              Built for businesses{' '}
              <span className="text-gradient-brand">expanding across borders.</span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              Headquartered in Dubai, ToYouCards is a global B2B platform built to
              help businesses scale their digital gift card operations. Access an
              extensive catalog of international gift cards through seamless,
              plug-and-play infrastructure.
            </p>
            <p className="mt-4 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              Focus on growing your sales and reaching new markets while ToYouCards
              handles distribution and instant automated digital delivery.
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="animate-float-slower w-full max-w-[320px] sm:max-w-[380px]">
              <GiftCard variant="blue" amount="$50" label="GLOBAL VALUE" />
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
                { icon: LayoutGrid, label: 'Orders', value: '1,284' },
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
              <div className="hidden sm:block"><GiftCard variant="teal" amount="$50" label="SHOPPING" /></div>
              <div className="hidden sm:block"><GiftCard variant="emerald" amount="$100" label="PREMIUM" /></div>
              <div className="hidden sm:block"><GiftCard variant="rose" amount="$25" label="GAMING" /></div>
              <div className="sm:hidden"><GiftCard variant="teal" amount="$50" label="SHOPPING" /></div>
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
              Tell us what you're building and our team will help you find the
              right solution for your business.
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
          Tell us what you're building and our team will help you find the right
          solution — from bulk purchasing to API-powered distribution.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
          <Link
            to="/contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_50px_-10px_rgba(0,99,180,0.5)] transition-all hover:brightness-110 sm:w-auto"
          >
            Talk to Sales
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#catalog"
            className="w-full rounded-full border border-ink-200 bg-white/60 px-6 py-3.5 text-center text-sm font-medium text-ink-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-700 sm:w-auto"
          >
            Explore Gift Cards
          </a>
        </div>
      </div>
    </section>
  )
}
