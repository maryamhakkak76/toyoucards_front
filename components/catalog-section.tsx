'use client'

import { useState } from 'react'
import { GiftCard, type GiftCardVariant } from '@/components/gift-card'

type Item = {
  variant: GiftCardVariant
  amount: string
  label: string
  category: string
  rotate: string
}

const items: Item[] = [
  { variant: 'cyan', amount: '$50', label: 'DIGITAL VALUE', category: 'Shopping', rotate: '-rotate-3' },
  { variant: 'blue', amount: '$100', label: 'PREMIUM', category: 'Retail', rotate: 'rotate-2' },
  { variant: 'deep', amount: '$25', label: 'GAMING', category: 'Gaming', rotate: '-rotate-2' },
  { variant: 'dark', amount: '$75', label: 'STREAMING', category: 'Entertainment', rotate: 'rotate-3' },
  { variant: 'light', amount: '$200', label: 'CORPORATE', category: 'Rewards', rotate: '-rotate-1' },
]

export function CatalogSection() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="catalog" className="relative overflow-hidden py-24">
      {/* deep blue glow bleeding from previous section */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[600px]"
        style={{
          background:
            'radial-gradient(circle, rgba(19,93,169,0.16), transparent 68%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-cyan/80">
              THE CATALOG
            </p>
            <h2 className="mt-3 max-w-md text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              A living catalog of digital value.
            </h2>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Hundreds of brands and denominations. Hover a card to bring it
            forward.
          </p>
        </div>
      </div>

      {/* flowing collection */}
      <div className="relative mt-14">
        <div className="flex gap-6 overflow-x-auto px-4 pb-16 pt-10 [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden">
          {items.map((item, i) => {
            const isActive = active === i
            const isDimmed = active !== null && !isActive
            return (
              <button
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className={`group relative w-[260px] shrink-0 origin-bottom cursor-pointer text-left transition-all duration-500 ease-out ${item.rotate} ${
                  isActive ? 'z-10 -translate-y-4 !rotate-0 scale-105' : ''
                } ${isDimmed ? 'scale-95 opacity-45 blur-[1px]' : ''}`}
              >
                <div
                  className={`transition-shadow duration-500 ${
                    isActive
                      ? 'drop-shadow-[0_30px_60px_rgba(22,193,232,0.28)]'
                      : ''
                  }`}
                >
                  <GiftCard
                    variant={item.variant}
                    amount={item.amount}
                    label={item.label}
                  />
                </div>
                <div
                  className={`mt-4 flex items-center justify-between transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <span className="text-sm font-medium text-foreground">
                    {item.category}
                  </span>
                  <span className="text-xs text-cyan">{item.amount} value</span>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
