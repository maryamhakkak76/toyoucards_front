import { Globe, Zap, ShieldCheck, LayoutGrid } from 'lucide-react'

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

export function ValueSection() {
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
            <p className="text-xs font-medium tracking-[0.22em] text-cyan/80">
              THE PLATFORM
            </p>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
              Everything your business needs to move digital value.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
              ToYouCards replaces spreadsheets, manual purchasing, and
              fragmented vendors with a single, programmable platform for
              digital gift cards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.04]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan transition-colors group-hover:border-cyan/40">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
