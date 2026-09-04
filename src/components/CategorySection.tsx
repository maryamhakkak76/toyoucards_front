import { Gamepad2, Smartphone, ShoppingBag, Tv } from 'lucide-react'

const categories = [
  { label: 'Gaming', icon: Gamepad2 },
  { label: 'Apps', icon: Smartphone },
  { label: 'Lifestyle', icon: ShoppingBag },
  { label: 'Streaming', icon: Tv },
]

export default function CategorySection() {
  return (
    <section id="categories" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
            CATEGORIES
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
            Explore by category
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-ink-500 sm:text-base">
            Find popular digital products across the categories your customers already use.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white/60 px-3 py-7 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_8px_24px_-12px_rgba(0,99,180,0.15)] sm:px-4 sm:py-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-100 bg-ink-50/50 text-brand-700 transition-all duration-300 group-hover:border-brand-400/40 group-hover:bg-brand-500/5">
                <cat.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="text-sm font-medium tracking-tight text-ink-800 transition-colors group-hover:text-brand-700">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
