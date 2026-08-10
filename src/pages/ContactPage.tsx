import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import TalkToSalesForm from '@/components/TalkToSalesForm'

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="glow-blue top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/12 animate-glow-pulse" />

        <div className="container-max container-px relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow justify-center mb-5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              Talk to Our Team
            </div>
            <h1 className="text-display-2xl font-display text-white">
              Let's build your digital
              <br />
              <span className="text-gradient">gift card business.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
              Whether you're looking for bulk gift cards, reseller pricing, rewards solutions, or
              API integration — tell us what you need and we'll help you find the right path.
            </p>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN: editorial + form */}
      <section className="relative pb-24 lg:pb-32 overflow-hidden">
        <div className="glow-blue top-20 right-0 w-[500px] h-[500px] bg-brand-500/8" />
        <div className="glow-blue bottom-0 left-0 w-[400px] h-[400px] bg-brand-700/8" />

        <div className="container-max container-px relative">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
            {/* LEFT — editorial */}
            <div className="lg:pt-4">
              <h2 className="text-display-xl font-display text-white leading-[1.08]">
                Let's talk.
              </h2>
              <p className="mt-5 text-display-md font-display text-white/30 leading-[1.15]">
                Tell us what you're building.
                <br />
                We'll help you figure out
                <br />
                what comes next.
              </p>
              <p className="mt-8 text-[15px] leading-relaxed text-white/50 max-w-md">
                From bulk gift card purchasing to API-powered distribution, our team can help you
                find the right solution for your business.
              </p>

              <div className="mt-10 space-y-3.5">
                {[
                  'Business pricing',
                  'Bulk purchasing',
                  'API integration',
                  'Reseller solutions',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/15 border border-brand-500/20">
                      <Check className="h-3 w-3 text-brand-500" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-medium text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — form panel */}
            <div className="relative">
              <div className="absolute inset-0 -inset-4 bg-brand-500/5 blur-3xl rounded-5xl" />
              <div className="relative glass-card rounded-4xl shadow-2xl">
                <TalkToSalesForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="relative py-20 lg:py-28 border-y border-white/[0.05] bg-ink-900/30">
        <div className="container-max container-px relative">
          <h2 className="text-center text-display-lg font-display text-white mb-16">
            What happens next?
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <NextStep
              num="01"
              title="Tell us about your business"
              description="Share what you're building and what you need."
            />
            <NextStep
              num="02"
              title="Our team reviews your requirements"
              description="We assess your needs and prepare the right options."
            />
            <NextStep
              num="03"
              title="We discuss the right solution"
              description="A real conversation about pricing, volume, and integration."
              last
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 lg:py-32">
        <div className="container-max container-px relative">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-display-lg font-display text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-center text-white/45 mb-12">
              Common questions from businesses evaluating ToYouCards.
            </p>
            <div className="space-y-3">
              <FaqItem
                question="Do you offer volume pricing?"
                answer="Yes. Business pricing scales with volume. The more you purchase, the better your rates. Talk to our team for a quote based on your expected volume."
              />
              <FaqItem
                question="Can I resell the gift cards?"
                answer="Yes. We support reseller and distributor arrangements with competitive margins and white-label options. Select 'Becoming a Reseller' in the form above to get started."
              />
              <FaqItem
                question="Can I integrate through API?"
                answer="Yes. ToYouCards provides a RESTful API with webhooks for order management, balance checks, and real-time fulfillment. A sandbox environment is available for testing."
              />
              <FaqItem
                question="What markets and products do you support?"
                answer="Our catalog spans 500+ brands across 140+ countries, covering retail, gaming, entertainment, food delivery, streaming, and more. Availability varies by region — our team can confirm specific products for your markets."
              />
              <FaqItem
                question="How does business onboarding work?"
                answer="Onboarding starts with a conversation with our sales team. We'll understand your requirements, configure your account, set up pricing, and provide API access and documentation if needed."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="glow-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/8" />
        <div className="container-max container-px relative text-center">
          <h2 className="text-display-lg font-display text-white">
            Still deciding?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50">
            Send us a message with what you're thinking about. No commitment required.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Talk to Sales
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>
      </section>
    </>
  )
}

function NextStep({ num, title, description, last }: { num: string; title: string; description: string; last?: boolean }) {
  return (
    <div className="relative text-center md:text-left">
      {!last && (
        <div className="hidden md:block absolute top-6 left-[55%] w-full h-px bg-gradient-to-r from-brand-500/25 to-transparent" />
      )}
      <div className="relative inline-flex">
        <span className="font-display text-4xl font-bold text-brand-500">{num}</span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/45">{description}</p>
      <div className="md:hidden flex justify-center mt-4">
        <ArrowRight className="h-4 w-4 text-brand-500/40 rotate-90" />
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group glass-card glass-card-hover rounded-2xl px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center justify-between cursor-pointer py-1">
        <span className="text-[15px] font-semibold text-white pr-4">{question}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white/40 transition-transform duration-200 group-open:rotate-45">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-white/50 pb-1">{answer}</p>
    </details>
  )
}
