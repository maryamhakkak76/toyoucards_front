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
  Gamepad2,
  Smartphone,
  Music,
  ShoppingBag,
  Tv,
} from 'lucide-react'
import { GiftCard } from '@/components/GiftCard'
import { CardOrbit } from '@/components/CardOrbit'
import TalkToSalesForm from '@/components/TalkToSalesForm'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <CatalogBrandsSection />
      <InlineCta
        prompt="Need volume pricing for hundreds or thousands of cards?"
        action="Talk to Sales"
      />
      <ValueSection />
      <OrderProcessSection />
      <InlineCta
        prompt="Building something at scale with the API?"
        action="Talk to our team"
      />
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
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(22,193,232,0.12), rgba(19,93,169,0.04) 55%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_#16c1e8]" />
            <span className="text-[10px] font-medium tracking-[0.2em] text-ink-400">
              DIGITAL GIFT CARDS · BUILT FOR BUSINESS
            </span>
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Power Your Business With{' '}
            <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(22,193,232,0.2)]">
              Digital Gift Cards
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-500 lg:mx-0 lg:text-lg">
            Buy, distribute, and automate digital gift cards through one premium
            platform and a developer-first API — engineered for businesses that
            move value at scale.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(22,119,200,0.45)] transition-all hover:brightness-110"
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#catalog"
              className="rounded-full border border-ink-200 bg-white/60 px-5 py-3 text-sm font-medium text-ink-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-600"
            >
              Explore Gift Cards
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-ink-400 lg:justify-start">
            <span>Global coverage</span>
            <span className="h-1 w-1 rounded-full bg-ink-300" />
            <span>Instant delivery</span>
            <span className="h-1 w-1 rounded-full bg-ink-300" />
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

/* ──────────────────── MERGED CATALOG + BRANDS ──────────────────── */

type BrandEntry = {
  name: string
  category: string
  initials: string
  accent: string
}

const brandEntries: BrandEntry[] = [
  { name: 'Xbox', category: 'Gaming', initials: 'XB', accent: 'from-emerald-500 to-emerald-700' },
  { name: 'PlayStation', category: 'Gaming', initials: 'PS', accent: 'from-blue-500 to-blue-700' },
  { name: 'Steam', category: 'Gaming', initials: 'ST', accent: 'from-slate-500 to-slate-700' },
  { name: 'Nintendo', category: 'Gaming', initials: 'NT', accent: 'from-rose-500 to-rose-700' },
  { name: 'PUBG', category: 'Gaming', initials: 'PB', accent: 'from-amber-500 to-amber-700' },
  { name: 'FIFA', category: 'Gaming', initials: 'FI', accent: 'from-teal-500 to-teal-700' },
  { name: 'App Store', category: 'Apps', initials: 'AP', accent: 'from-blue-400 to-blue-600' },
  { name: 'Google Play', category: 'Apps', initials: 'GP', accent: 'from-emerald-400 to-emerald-600' },
  { name: 'Apple', category: 'Apps', initials: 'AP', accent: 'from-slate-400 to-slate-600' },
  { name: 'Netflix', category: 'Streaming', initials: 'NF', accent: 'from-rose-600 to-rose-800' },
  { name: 'Amazon', category: 'Shopping', initials: 'AZ', accent: 'from-amber-400 to-amber-600' },
  { name: 'Noon', category: 'Shopping', initials: 'NO', accent: 'from-amber-500 to-amber-700' },
  { name: 'Spotify', category: 'Music', initials: 'SP', accent: 'from-emerald-500 to-emerald-700' },
  { name: 'Apple Music', category: 'Music', initials: 'AM', accent: 'from-rose-400 to-rose-600' },
  { name: 'Call of Duty', category: 'Gaming', initials: 'CD', accent: 'from-slate-600 to-slate-800' },
  { name: 'Google One', category: 'Apps', initials: 'G1', accent: 'from-blue-500 to-blue-700' },
]

const categories = [
  { label: 'Gaming', icon: Gamepad2 },
  { label: 'Apps', icon: Smartphone },
  { label: 'Streaming', icon: Tv },
  { label: 'Shopping', icon: ShoppingBag },
  { label: 'Music', icon: Music },
]

function CatalogBrandsSection() {
  return (
    <section id="catalog" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(19,93,169,0.08), transparent 68%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-brand-600/80">
            THE CATALOG
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
            A living catalog of digital value.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-ink-500">
            Hundreds of brands and denominations across gaming, streaming, shopping, and more —
            all in one place.
          </p>
        </div>

        {/* Category filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/50 hover:bg-white hover:shadow-[0_4px_16px_-6px_rgba(19,93,169,0.15)]"
            >
              <cat.icon className="h-3.5 w-3.5 text-ink-400 transition-colors group-hover:text-brand-600" strokeWidth={1.5} />
              <span className="text-xs font-medium text-ink-500 transition-colors group-hover:text-brand-600">
                {cat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Brand tiles grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brandEntries.map((brand) => (
            <div
              key={brand.name}
              className="group/brand relative flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_16px_40px_-15px_rgba(19,93,169,0.2)]"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${brand.accent} text-white shadow-sm transition-transform duration-300 group-hover/brand:scale-110`}
              >
                <span className="text-sm font-bold tracking-tight">{brand.initials}</span>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-ink-800 transition-colors group-hover/brand:text-brand-600">
                  {brand.name}
                </p>
                <p className="mt-0.5 text-[11px] text-ink-400">{brand.category}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-400">
          …and hundreds more brands available on request.
        </p>
      </div>
    </section>
  )
}

/* ──────────────────────────── INLINE CTA ──────────────────────────── */

function InlineCta({ prompt, action }: { prompt: string; action: string }) {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-6">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white/60 px-6 py-5 backdrop-blur-sm shadow-[0_4px_20px_-8px_rgba(19,93,169,0.1)] sm:flex-row">
        <p className="text-pretty text-center text-sm text-ink-500 sm:text-left sm:text-base">
          {prompt}
        </p>
        <Link
          to="/contact"
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-600 transition-colors hover:text-ink-900"
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
    { icon: ShieldCheck, title: 'Confidential Gift Code Delivery', body: 'Gift codes are securely encrypted so only the intended recipient can access and use them.' },
    { icon: CreditCard, title: 'Flexible Access', body: 'Manage everything through a real-time dashboard or integrate seamlessly with our API. No technical expertise is required for dashboard-based management.' },
    { icon: Download, title: 'Export Options', body: 'Export structured data for accounting, reporting, and operational workflows.' },
    { icon: Code2, title: 'Developer Friendly', body: 'Access comprehensive API documentation for seamless integration, while keeping the platform simple for non-technical teams.' },
  ]

  return (
    <section id="platform" className="relative overflow-hidden py-24">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-bold leading-none tracking-tighter text-ink-900/[0.025]"
      >
        BENEFITS
      </p>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium tracking-[0.22em] text-brand-600/80">
              KEY BENEFITS
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              Everything you need to manage digital gift cards at scale.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              ToYouCards replaces spreadsheets, manual purchasing, and fragmented vendors
              with a single, programmable platform for digital gift cards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-ink-100 bg-white/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_12px_30px_-15px_rgba(19,93,169,0.2)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-200 bg-white text-brand-600 transition-colors group-hover:border-brand-400/40">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink-900">
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
    <section id="order-process" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(22,193,232,0.08), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-brand-600/80">
            ORDER PROCESS
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
            Get started in three simple steps.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-ink-100 bg-white/70 p-7 backdrop-blur-sm transition-all duration-300 hover:border-brand-400/40 hover:shadow-[0_12px_30px_-15px_rgba(19,93,169,0.2)]"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-[-24px] top-1/2 hidden h-px w-12 bg-gradient-to-r from-brand-400/30 to-transparent sm:block" />
              )}
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-200 bg-white text-brand-600 transition-colors group-hover:border-brand-400/40">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-3xl font-bold text-ink-200">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-ink-900">
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
    <section id="api" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(22,193,232,0.08), transparent 65%)' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-brand-600/80">
            DEVELOPERS
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
            An API built for digital value.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-500">
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
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-600">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-ink-600">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-2xl border border-ink-200 bg-white shadow-[0_30px_60px_-30px_rgba(19,93,169,0.25)]">
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
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand-400/30 bg-brand-500/10 text-brand-600">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="rounded-xl border border-brand-400/20 bg-brand-500/[0.04] p-4">
              <div className="flex items-center gap-2 text-brand-600">
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

      <p className="relative mx-auto mt-6 max-w-6xl px-4 text-[11px] text-ink-400">
        Illustrative example — endpoint shapes shown for demonstration.
      </p>
    </section>
  )
}

/* ──────────────────────────── WHY TOYOUCARDS ──────────────────────────── */

function WhyToYouCardsSection() {
  return (
    <section id="why" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 70% 50%, rgba(22,193,232,0.06), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-brand-600/80">
              WHY TOYOUCARDS
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              Built for businesses expanding across borders.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-500">
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
            <div className="animate-float-slower w-full max-w-[380px]">
              <GiftCard variant="blue" amount="$50" label="GLOBAL VALUE" />
            </div>
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(22,193,232,0.06), transparent 65%)' }}
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
    <section id="dashboard" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2"
        style={{ background: 'radial-gradient(circle at 50% 80%, rgba(22,132,214,0.12), transparent 68%)' }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-brand-600/80">
          THE PRODUCT
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
          Your digital value, in one dashboard.
        </h2>
      </div>

      <div className="relative mx-auto mt-14 max-w-4xl px-4">
        <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white/90 shadow-[0_40px_80px_-35px_rgba(19,93,169,0.25)] backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-ink-100 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <span className="h-3 w-3 rounded-full bg-ink-200" />
            <div className="mx-auto flex items-center gap-2 rounded-md border border-ink-200 bg-ink-50 px-3 py-1 text-[11px] text-ink-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              app.toyoucards.com
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Wallet, label: 'Balance', value: '$24,850' },
                { icon: LayoutGrid, label: 'Orders', value: '1,284' },
                { icon: ArrowRight, label: 'Delivered', value: '99.9%' },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-ink-100 bg-ink-50/50 p-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-400">{s.label}</span>
                    <s.icon className="h-4 w-4 text-brand-600" strokeWidth={1.5} />
                  </div>
                  <p className="mt-2 font-mono text-2xl font-semibold tracking-tight text-ink-900">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-ink-800">Recent gift cards</span>
              <span className="text-xs text-brand-600">View all</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <GiftCard variant="teal" amount="$50" label="SHOPPING" />
              <GiftCard variant="emerald" amount="$100" label="PREMIUM" />
              <GiftCard variant="rose" amount="$25" label="GAMING" />
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] text-ink-400">
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
        style={{ background: 'radial-gradient(circle, rgba(22,193,232,0.08), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="lg:pt-8">
            <p className="text-xs font-medium tracking-[0.22em] text-brand-600/80">
              LET'S TALK
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              Bring digital gift cards
              <br />
              <span className="text-gradient-brand">into your business.</span>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-ink-500">
              Tell us what you're building and our team will help you find the
              right solution for your business.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-ink-100 bg-white/70 p-5 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(19,93,169,0.15)] sm:p-7">
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 55%, rgba(22,193,232,0.12), rgba(19,93,169,0.04) 45%, transparent 70%)' }}
      />

      <div className="animate-float-slower-centered pointer-events-none absolute left-0 right-0 top-1/2 mx-auto w-[640px] max-w-[90vw] opacity-[0.12] blur-[2px]">
        <GiftCard variant="blue" amount="$50" label="DIGITAL VALUE" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3.5 py-1.5 backdrop-blur-sm">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_#16c1e8]" />
          <span className="text-[10px] font-medium tracking-[0.2em] text-ink-400">
            START IN MINUTES
          </span>
        </div>

        <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl">
          Ready to bring digital{' '}
          <span className="text-gradient-brand [text-shadow:0_0_40px_rgba(22,193,232,0.2)]">
            gift cards
          </span>{' '}
          to your business?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-ink-500">
          Tell us what you're building and our team will help you find the right
          solution — from bulk purchasing to API-powered distribution.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-[0_16px_50px_-10px_rgba(22,119,200,0.5)] transition-all hover:brightness-110"
          >
            Talk to Sales
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#catalog"
            className="rounded-full border border-ink-200 bg-white/60 px-6 py-3.5 text-sm font-medium text-ink-700 backdrop-blur-sm transition-colors hover:border-brand-400/50 hover:text-brand-600"
          >
            Explore Gift Cards
          </a>
        </div>
      </div>
    </section>
  )
}
