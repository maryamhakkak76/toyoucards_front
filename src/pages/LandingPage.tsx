import { Link } from 'react-router-dom'
import {
  ArrowRight, Check, Zap, Globe, Layers, Shield, Code2,
  TrendingUp, Building2, Gift, Users, Sparkles, BarChart3,
  Plug, Award, Headphones,
} from 'lucide-react'
import TalkToSalesForm from '@/components/TalkToSalesForm'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <WhatWeDo />
      <Catalog />
      <CatalogCTA />
      <Benefits />
      <UseCases />
      <HowItWorks />
      <ApiSection />
      <ApiCTA />
      <PlatformPreview />
      <Trust />
      <ContactSection />
      <FinalCTA />
    </>
  )
}

/* ──────────────────────────── HERO ──────────────────────────── */

function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Atmospheric glow */}
      <div className="glow-blue top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/15 animate-glow-pulse" />
      <div className="glow-blue top-40 -right-20 w-[400px] h-[400px] bg-brand-700/10" />

      <div className="container-max container-px relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow justify-center mb-6 animate-fade-in-up">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500" />
            B2B Digital Gift Card Platform
          </div>
          <h1 className="text-display-2xl font-display text-white animate-fade-in-up animate-delay-100">
            Bring digital gift cards
            <br />
            <span className="text-gradient">into your business.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/55 animate-fade-in-up animate-delay-200">
            ToYouCards gives businesses access to a global catalog of digital gift cards through
            bulk purchasing, API integration, and reseller distribution — all from one platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              Talk to Sales
              <ArrowRight className="h-4.5 w-4.5" />
            </Link>
            <a href="#catalog" className="btn-secondary w-full sm:w-auto">
              Explore Gift Cards
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/40 animate-fade-in-up animate-delay-400">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-500" /> 500+ brands
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-500" /> 140+ countries
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand-500" /> API access
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── LOGO STRIP ──────────────────────────── */

function LogoStrip() {
  const segments = ['Retail', 'E-commerce', 'Marketplaces', 'Loyalty', 'Gaming', 'Corporate Gifting', 'Rewards']
  return (
    <section className="border-y border-white/[0.05] bg-ink-900/40">
      <div className="container-max container-px py-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.15em] text-white/30 mb-5">
          Built for businesses across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {segments.map((s) => (
            <span key={s} className="text-sm font-semibold text-white/35">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── WHAT WE DO ──────────────────────────── */

function WhatWeDo() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="container-max container-px relative">
        <SectionHeader
          eyebrow="What ToYouCards Does"
          title="One platform for digital gift card distribution."
          subtitle="Whether you're buying in bulk, integrating via API, or building a reseller business, ToYouCards provides the infrastructure to make it work at scale."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<TrendingUp className="h-6 w-6" />}
            title="Bulk Purchasing"
            description="Access volume pricing on 500+ digital gift card brands with dedicated account management and flexible fulfillment."
          />
          <FeatureCard
            icon={<Code2 className="h-6 w-6" />}
            title="API Integration"
            description="A RESTful API and webhook system that lets you embed gift card purchasing, balance checks, and fulfillment directly into your product."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Reseller Distribution"
            description="Become a distributor with white-label options, competitive margins, and access to our full global catalog."
          />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── CATALOG ──────────────────────────── */

function Catalog() {
  const categories = [
    { name: 'Retail & Shopping', count: '180+ brands', icon: <Building2 className="h-5 w-5" /> },
    { name: 'Gaming & Entertainment', count: '95+ brands', icon: <Zap className="h-5 w-5" /> },
    { name: 'Food & Delivery', count: '70+ brands', icon: <Gift className="h-5 w-5" /> },
    { name: 'Streaming & Music', count: '45+ brands', icon: <Layers className="h-5 w-5" /> },
    { name: 'Travel & Mobility', count: '30+ brands', icon: <Globe className="h-5 w-5" /> },
    { name: 'Fashion & Lifestyle', count: '60+ brands', icon: <Sparkles className="h-5 w-5" /> },
  ]

  return (
    <section id="catalog" className="relative py-24 lg:py-32">
      <div className="glow-blue top-20 right-0 w-[400px] h-[300px] bg-brand-500/8" />
      <div className="container-max container-px relative">
        <SectionHeader
          eyebrow="Gift Card Catalog"
          title="A global catalog your business can rely on."
          subtitle="Access hundreds of digital gift card brands across categories and regions — all available for bulk purchase and API distribution."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/15 text-brand-500">
                  {cat.icon}
                </div>
                <span className="text-xs font-medium text-white/35">{cat.count}</span>
              </div>
              <h3 className="text-base font-semibold text-white">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CatalogCTA() {
  return (
    <section className="py-6">
      <div className="container-max container-px">
        <div className="glass-card rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-display-md font-display text-white">Need volume pricing?</h3>
            <p className="mt-2 text-white/50">
              Get custom business pricing on bulk gift card orders.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Talk to Sales
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── BENEFITS ──────────────────────────── */

function Benefits() {
  const benefits = [
    { icon: <TrendingUp className="h-5 w-5" />, title: 'Business Pricing', description: 'Volume-based rates that scale with your business — not retail prices.' },
    { icon: <Globe className="h-5 w-5" />, title: 'Global Coverage', description: 'Gift cards available across 140+ countries and multiple currencies.' },
    { icon: <Plug className="h-5 w-5" />, title: 'API Integration', description: 'Embed the full catalog into your product with a clean RESTful API.' },
    { icon: <Shield className="h-5 w-5" />, title: 'Secure Infrastructure', description: 'Enterprise-grade security, fraud prevention, and audit trails.' },
    { icon: <Headphones className="h-5 w-5" />, title: 'Dedicated Support', description: 'A real sales team that understands your business — not a chatbot.' },
    { icon: <Award className="h-5 w-5" />, title: 'Reseller Margins', description: 'Competitive distributor margins with white-label options.' },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-ink-900/30 border-y border-white/[0.05]">
      <div className="container-max container-px relative">
        <SectionHeader
          eyebrow="Business Benefits"
          title="Built for serious B2B operations."
          subtitle="ToYouCards isn't a consumer store. Every part of the platform is designed for businesses that need reliability, scale, and support."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/15 text-brand-500 mb-4">
                {b.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{b.title}</h3>
              <p className="text-sm leading-relaxed text-white/45">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── USE CASES ──────────────────────────── */

function UseCases() {
  const cases = [
    { title: 'E-commerce & Marketplaces', description: 'Offer gift cards as a payment method or product in your checkout flow.', icon: <Building2 className="h-5 w-5" /> },
    { title: 'Loyalty & Rewards', description: 'Power your rewards program with a global catalog of digital gift cards.', icon: <Award className="h-5 w-5" /> },
    { title: 'Gaming Platforms', description: 'Integrate game credits and gaming gift cards through a single API.', icon: <Zap className="h-5 w-5" /> },
    { title: 'Corporate Gifting', description: 'Send digital gift cards to employees and clients at scale.', icon: <Gift className="h-5 w-5" /> },
    { title: 'Employee Benefits', description: 'Add gift card options to your benefits or wellness platform.', icon: <Users className="h-5 w-5" /> },
    { title: 'Reseller & Distribution', description: 'Build a gift card reselling business with competitive margins.', icon: <TrendingUp className="h-5 w-5" /> },
  ]

  return (
    <section id="use-cases" className="relative py-24 lg:py-32">
      <div className="container-max container-px relative">
        <SectionHeader
          eyebrow="Use Cases"
          title="How businesses use ToYouCards."
          subtitle="From rewards platforms to corporate gifting programs, businesses build on ToYouCards to deliver digital gift cards at scale."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/15 text-brand-500">
                  {c.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{c.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-white/45">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── HOW IT WORKS ──────────────────────────── */

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Talk to our team', description: "Tell us what you're building. We'll help you choose the right approach — bulk purchasing, API, or reseller." },
    { num: '02', title: 'Get set up', description: 'We configure your account, pricing, and access. API customers get sandbox keys and documentation.' },
    { num: '03', title: 'Start distributing', description: 'Purchase gift cards in bulk or through the API. Track everything from your dashboard.' },
  ]
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-ink-900/30 border-y border-white/[0.05]">
      <div className="container-max container-px relative">
        <SectionHeader
          eyebrow="How It Works"
          title="From first conversation to first order."
          subtitle="Getting started with ToYouCards is a direct conversation with our sales team — not a self-service sign-up wall."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
              )}
              <div className="relative">
                <span className="font-display text-5xl font-bold text-brand-500/30">{step.num}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">{step.description}</p>
              </div>
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
    <section id="api" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="glow-blue top-1/2 -translate-y-1/2 left-0 w-[500px] h-[400px] bg-brand-700/10" />
      <div className="container-max container-px relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-5">
              <Code2 className="h-3.5 w-3.5" />
              API Integration
            </div>
            <h2 className="text-display-lg font-display text-white">
              Integrate gift cards
              <br />
              <span className="text-gradient">directly into your product.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              A clean RESTful API with webhooks, balance checks, and real-time fulfillment.
              Built for developers who need reliability and speed.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                'RESTful API with predictable, documented endpoints',
                'Webhooks for order status and fulfillment events',
                'Balance checks and real-time card delivery',
                'Sandbox environment for safe testing',
                'API keys with scoped permissions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/65">
                  <Check className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code preview */}
          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-ink-900/50">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                </div>
                <span className="ml-2 text-xs font-medium text-white/35">POST /v1/orders</span>
              </div>
              <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto font-mono">{`curl -X POST \
  https://api.toyoucards.com/v1/orders \
  -H "Authorization: Bearer sk_live_…" \
  -H "Content-Type: application/json" \
  -d '{
    "product_code": "AMZN-US-25",
    "quantity": 100,
    "recipient_email": "orders@acme.com"
  }'`}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ApiCTA() {
  return (
    <section className="py-6">
      <div className="container-max container-px">
        <div className="glass-card rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-display-md font-display text-white">Building something at scale?</h3>
            <p className="mt-2 text-white/50">
              Talk to our team about API access, volume, and custom integration.
            </p>
          </div>
          <Link to="/contact" className="btn-primary shrink-0">
            Talk to our team
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── PLATFORM PREVIEW ──────────────────────────── */

function PlatformPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink-900/30 border-y border-white/[0.05]">
      <div className="container-max container-px relative">
        <SectionHeader
          eyebrow="Platform Preview"
          title="Manage everything from one dashboard."
          subtitle="Orders, catalog, API keys, billing, and reporting — all in one place. Here's a glimpse of what your team gets access to."
        />
        <div className="mt-16 glass-card rounded-3xl overflow-hidden">
          {/* Mock dashboard */}
          <div className="grid lg:grid-cols-[200px_1fr] min-h-[420px]">
            {/* Sidebar */}
            <div className="hidden lg:flex flex-col gap-1 p-4 border-r border-white/[0.06] bg-ink-950/40">
              {['Dashboard', 'Orders', 'Catalog', 'API Keys', 'Billing', 'Reports'].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm ${
                    i === 0 ? 'bg-brand-500/10 text-brand-400 border border-brand-500/15' : 'text-white/40'
                  }`}
                >
                  <BarChart3 className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>
            {/* Main */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-base font-semibold text-white">Recent Orders</h4>
                  <p className="text-xs text-white/35 mt-0.5">Last 30 days</p>
                </div>
                <div className="hidden sm:flex gap-2">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/40">Filter</div>
                  <div className="rounded-lg bg-brand-500/15 border border-brand-500/20 px-3 py-1.5 text-xs text-brand-400">Export</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Total Orders', value: '1,284' },
                  { label: 'Volume', value: '$48.2K' },
                  { label: 'Active Cards', value: '892' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <p className="text-xs text-white/35 mb-1">{stat.label}</p>
                    <p className="text-xl font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {['AMZN-US-25', 'AAPL-US-50', 'GGL-US-10', 'XBOX-US-25'].map((code, i) => (
                  <div
                    key={code}
                    className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-white/[0.01] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-7 w-7 rounded-md bg-brand-500/10 border border-brand-500/15" />
                      <span className="text-sm font-medium text-white/70">{code}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-white/40">×{[100, 50, 200, 75][i]}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">Delivered</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── TRUST ──────────────────────────── */

function Trust() {
  return (
    <section id="resources" className="relative py-24 lg:py-32">
      <div className="container-max container-px relative">
        <SectionHeader
          eyebrow="Trust & Security"
          title="Enterprise-grade infrastructure."
          subtitle="Security, reliability, and compliance are built into the platform from the ground up."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Shield className="h-5 w-5" />, title: 'Fraud Prevention', description: 'Multi-layer fraud detection on every transaction.' },
            { icon: <Globe className="h-5 w-5" />, title: 'Global Coverage', description: '140+ countries with local currency support.' },
            { icon: <Headphones className="h-5 w-5" />, title: 'Dedicated Sales Team', description: 'Real humans who understand your business.' },
            { icon: <Award className="h-5 w-5" />, title: 'Audit Trails', description: 'Full transaction history and reporting.' },
          ].map((item) => (
            <div key={item.title} className="glass-card glass-card-hover rounded-2xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/15 text-brand-500 mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── CONTACT SECTION ──────────────────────────── */

function ContactSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Atmospheric blue glow */}
      <div className="glow-blue top-1/3 left-1/4 w-[600px] h-[500px] bg-brand-500/10 animate-glow-pulse" />
      <div className="glow-blue bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-700/8" />

      <div className="container-max container-px relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: editorial content */}
          <div className="lg:pt-8">
            <div className="eyebrow mb-5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              Let's Talk
            </div>
            <h2 className="text-display-xl font-display text-white">
              Bring digital gift cards
              <br />
              <span className="text-gradient">into your business.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/55">
              Tell us what you're building and our team will help you find the right solution —
              whether that's bulk purchasing, API integration, or reseller distribution.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                'Business pricing',
                'Bulk purchasing',
                'API integration',
                'Dedicated sales support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/15 border border-brand-500/20">
                    <Check className="h-3 w-3 text-brand-500" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form panel */}
          <div className="relative">
            <div className="absolute inset-0 -inset-4 bg-brand-500/5 blur-3xl rounded-5xl" />
            <div className="relative glass-card rounded-4xl shadow-2xl">
              <TalkToSalesForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── FINAL CTA ──────────────────────────── */

function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="glow-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/10 animate-glow-pulse" />
      <div className="container-max container-px relative text-center">
        <h2 className="text-display-xl font-display text-white mx-auto max-w-3xl">
          Ready to bring digital gift cards
          <br />
          <span className="text-gradient">to your business?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/55">
          Talk to our team. We'll help you figure out the right path — no pressure, no signup wall.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary w-full sm:w-auto">
            Talk to Sales
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
          <a href="#catalog" className="btn-secondary w-full sm:w-auto">
            Explore Gift Cards
          </a>
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────── SHARED ──────────────────────────── */

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="eyebrow justify-center mb-5">
        <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </div>
      <h2 className="text-display-xl font-display text-white">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/50">{subtitle}</p>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/15 text-brand-500 mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2.5">{title}</h3>
      <p className="text-[15px] leading-relaxed text-white/45">{description}</p>
    </div>
  )
}
