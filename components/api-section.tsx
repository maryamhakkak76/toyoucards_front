import { ArrowDown, Check } from 'lucide-react'

export function ApiSection() {
  return (
    <section id="api" className="relative overflow-hidden py-24">
      {/* cyan line glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2"
        style={{
          background:
            'radial-gradient(circle, rgba(22,193,232,0.14), transparent 65%)',
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-cyan/80">
            DEVELOPERS
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            An API built for digital value.
          </h2>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
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
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-cyan">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                <span className="text-muted-foreground">{t}</span>
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
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              orders.create
            </span>
          </div>

          <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-cyan/15 px-1.5 py-0.5 text-[11px] font-semibold text-cyan">
                  POST
                </span>
                <span className="text-foreground/90">/v1/orders</span>
              </div>
              <pre className="mt-3 text-muted-foreground">
                <span className="text-white/40">{'{'}</span>
                {'\n  '}
                <span className="text-blue-300">"product"</span>
                <span className="text-white/40">: </span>
                <span className="text-cyan">"gift-card"</span>
                <span className="text-white/40">,</span>
                {'\n  '}
                <span className="text-blue-300">"amount"</span>
                <span className="text-white/40">: </span>
                <span className="text-cyan">50</span>
                {'\n'}
                <span className="text-white/40">{'}'}</span>
              </pre>
            </div>

            <div className="flex justify-center">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
                <ArrowDown className="h-3.5 w-3.5" />
              </span>
            </div>

            <div className="rounded-xl border border-cyan/15 bg-cyan/[0.04] p-4">
              <div className="flex items-center gap-2 text-cyan">
                <Check className="h-4 w-4" strokeWidth={2.5} />
                <span className="text-xs font-semibold tracking-wide">
                  ORDER CREATED
                </span>
              </div>
              <div className="mt-3 text-muted-foreground">
                <span className="text-blue-300">"digital_code"</span>
                <span className="text-white/40">: </span>
                <span className="tracking-[0.3em] text-foreground/80">
                  ••••••••••••
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="relative mx-auto mt-6 max-w-6xl px-4 text-[11px] text-muted-foreground/60">
        Illustrative example — endpoint shapes shown for demonstration.
      </p>
    </section>
  )
}
