import { useState } from 'react'
import {
  Gamepad2,
  Smartphone,
  Tv,
  ShoppingBag,
  Music,
  LayoutGrid,
  ArrowRight,
} from 'lucide-react'
import { GiftCard, type GiftCardVariant } from '@/components/GiftCard'

type Brand = {
  name: string
  category: string
  initials: string
  cardVariant: GiftCardVariant
  amount: string
}

const brands: Brand[] = [
  { name: 'Xbox', category: 'Gaming', initials: 'XB', cardVariant: 'emerald', amount: '$50' },
  { name: 'PlayStation', category: 'Gaming', initials: 'PS', cardVariant: 'blue', amount: '$100' },
  { name: 'Steam', category: 'Gaming', initials: 'ST', cardVariant: 'dark', amount: '$25' },
  { name: 'Nintendo', category: 'Gaming', initials: 'NT', cardVariant: 'rose', amount: '$35' },
  { name: 'PUBG', category: 'Gaming', initials: 'PB', cardVariant: 'amber', amount: '$10' },
  { name: 'FIFA', category: 'Gaming', initials: 'FI', cardVariant: 'teal', amount: '$20' },
  { name: 'App Store', category: 'Apps', initials: 'AP', cardVariant: 'blue', amount: '$25' },
  { name: 'Google Play', category: 'Apps', initials: 'GP', cardVariant: 'emerald', amount: '$15' },
  { name: 'Apple', category: 'Apps', initials: 'AP', cardVariant: 'slate', amount: '$50' },
  { name: 'Google One', category: 'Apps', initials: 'G1', cardVariant: 'cyan', amount: '$30' },
  { name: 'Netflix', category: 'Streaming', initials: 'NF', cardVariant: 'rose', amount: '$25' },
  { name: 'Amazon', category: 'Shopping', initials: 'AZ', cardVariant: 'amber', amount: '$50' },
  { name: 'Noon', category: 'Shopping', initials: 'NO', cardVariant: 'amber', amount: '$100' },
  { name: 'Spotify', category: 'Music', initials: 'SP', cardVariant: 'emerald', amount: '$30' },
  { name: 'Apple Music', category: 'Music', initials: 'AM', cardVariant: 'rose', amount: '$15' },
  { name: 'Call of Duty', category: 'Gaming', initials: 'CD', cardVariant: 'slate', amount: '$20' },
]

const categories = [
  { label: 'All', icon: LayoutGrid },
  { label: 'Gaming', icon: Gamepad2 },
  { label: 'Apps', icon: Smartphone },
  { label: 'Streaming', icon: Tv },
  { label: 'Shopping', icon: ShoppingBag },
  { label: 'Music', icon: Music },
]

export default function CatalogSection() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = active === 'All' ? brands : brands.filter((b) => b.category === active)

  return (
    <section id="catalog" className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[600px]"
        style={{ background: 'radial-gradient(circle, rgba(0,99,180,0.07), transparent 68%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(28,228,243,0.06), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
            THE CATALOG
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            A living catalog of{' '}
            <span className="text-gradient-brand">digital value.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed text-ink-500 sm:text-base">
            Hundreds of brands and denominations across gaming, streaming, shopping, and more —
            all in one place.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const isActive = active === cat.label
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActive(cat.label)}
                className={`group flex items-center gap-2 rounded-full border px-3.5 py-2 backdrop-blur-sm transition-all duration-300 sm:px-4 ${
                  isActive
                    ? 'border-brand-400/60 bg-brand-500/10 shadow-[0_4px_20px_-6px_rgba(28,228,243,0.25)]'
                    : 'border-ink-200 bg-white/60 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_4px_16px_-6px_rgba(0,99,180,0.12)]'
                }`}
              >
                <cat.icon
                  className={`h-3.5 w-3.5 transition-colors ${isActive ? 'text-brand-700' : 'text-ink-400 group-hover:text-brand-700'}`}
                  strokeWidth={1.5}
                />
                <span
                  className={`text-xs font-medium transition-colors ${isActive ? 'text-brand-700' : 'text-ink-500 group-hover:text-brand-700'}`}
                >
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {filtered.map((brand) => (
            <div
              key={brand.name}
              className="group/brand relative flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_16px_40px_-15px_rgba(0,99,180,0.18)]"
              onMouseEnter={() => setHovered(brand.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/8 text-sm font-bold text-brand-700 ring-1 ring-brand-400/15 transition-all duration-300 group-hover/brand:bg-brand-500/15 group-hover/brand:ring-brand-400/30">
                    {brand.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-800 transition-colors group-hover/brand:text-brand-700">
                      {brand.name}
                    </p>
                    <p className="text-[11px] text-ink-400">{brand.category}</p>
                  </div>
                </div>
                <span className="rounded-full bg-ink-50 px-2.5 py-1 text-[10px] font-medium tracking-wider text-ink-500 ring-1 ring-ink-100 transition-colors group-hover/brand:text-brand-700/70 group-hover/brand:ring-brand-400/20">
                  {brand.amount}
                </span>
              </div>

              <div
                className="overflow-hidden rounded-2xl transition-all duration-500 ease-out"
                style={{
                  maxHeight: hovered === brand.name ? '260px' : '0px',
                  opacity: hovered === brand.name ? 1 : 0,
                }}
              >
                <GiftCard variant={brand.cardVariant} amount={brand.amount} label={brand.category.toUpperCase()} />
              </div>

              <div
                className="flex items-center gap-1.5 text-xs font-medium transition-all duration-300"
                style={{
                  color: hovered === brand.name ? 'rgba(0,99,180,0.9)' : 'rgba(10,26,42,0.3)',
                }}
              >
                View card
                <ArrowRight className="h-3 w-3 transition-transform group-hover/brand:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-400 sm:mt-10">
          …and hundreds more brands available on request.
        </p>
      </div>
    </section>
  )
}
