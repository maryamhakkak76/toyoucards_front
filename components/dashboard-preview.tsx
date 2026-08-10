import { GiftCard } from '@/components/gift-card'
import { TrendingUp, Wallet, Package } from 'lucide-react'

export function DashboardPreview() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-24">
      {/* blue ambient light beneath the window */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle at 50% 80%, rgba(22,132,214,0.22), transparent 68%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-cyan/80">
          THE PRODUCT
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
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
            <div className="mx-auto flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
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
                    <span className="text-xs text-muted-foreground">
                      {s.label}
                    </span>
                    <s.icon
                      className="h-4 w-4 text-cyan"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="mt-2 font-mono text-2xl font-semibold tracking-tight">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            {/* gift cards row */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium">Recent gift cards</span>
              <span className="text-xs text-cyan">View all</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <GiftCard variant="cyan" amount="$50" label="SHOPPING" />
              <GiftCard variant="blue" amount="$100" label="PREMIUM" />
              <GiftCard variant="deep" amount="$25" label="GAMING" />
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] text-muted-foreground/60">
          Product preview — figures shown are illustrative.
        </p>
      </div>
    </section>
  )
}
