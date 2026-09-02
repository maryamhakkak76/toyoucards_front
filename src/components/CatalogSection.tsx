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
    <section id="catalog" className="landing-section relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[600px]"
        style={{ background: 'radial-gradient(circle, rgba(0,99,180,0.18), transparent 68%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(28,228,243,0.08), transparent 65%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-cyan-400/80">
            THE CATALOG
          </p>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
            A living catalog of{' '}
            <span className="landing-copy-gradient">digital value.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-sm leading-relaxed landing-muted">
            Hundreds of brands and denominations across gaming, streaming, shopping, and more —
            all in one place.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => {
            const isActive = active === cat.label
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActive(cat.label)}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm transition-all duration-300 ${
                  isActive
                    ? 'border-cyan-400/50 bg-cyan-400/10 shadow-[0_4px_20px_-6px_rgba(28,228,243,0.3)]'
                    : 'border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10'
                }`}
              >
                <cat.icon
                  className={`h-3.5 w-3.5 transition-colors ${isActive ? 'text-cyan-300' : 'text-white/40 group-hover:text-cyan-300'}`}
                  strokeWidth={1.5}
                />
                <span
                  className={`text-xs font-medium transition-colors ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white'}`}
                >
                  {cat.label}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((brand) => (
            <div
              key={brand.name}
              className="landing-panel group/brand relative flex flex-col gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHovered(brand.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-sm font-bold text-white ring-1 ring-white/10 transition-all duration-300 group-hover/brand:bg-cyan-400/15 group-hover/brand:ring-cyan-400/30">
                    {brand.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white transition-colors group-hover/brand:text-cyan-300">
                      {brand.name}
                    </p>
                    <p className="text-[11px] landing-muted">{brand.category}</p>
                  </div>
                </div>
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wider text-white/40 ring-1 ring-white/10 transition-colors group-hover/brand:text-cyan-300/70">
                  {brand.amount}
                </span>
              </div>

              <div
                className="overflow-hidden rounded-2xl transition-all duration-500"
                style={{
                  maxHeight: hovered === brand.name ? '240px' : '0px',
                  opacity: hovered === brand.name ? 1 : 0,
                }}
              >
                <GiftCard variant={brand.cardVariant} amount={brand.amount} label={brand.category.toUpperCase()} />
              </div>

              <div
                className="flex items-center gap-1.5 text-xs font-medium transition-all duration-300"
                style={{
                  color: hovered === brand.name ? 'rgba(28,228,243,0.9)' : 'rgba(255,255,255,0.35)',
                }}
              >
                View card
                <ArrowRight className="h-3 w-3 transition-transform group-hover/brand:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm landing-muted">
          …and hundreds more brands available on request.
        </p>
      </div>
    </section>
  )
}
