const brands = [
  { name: 'Xbox', category: 'Gaming' },
  { name: 'Nintendo', category: 'Gaming' },
  { name: 'PUBG', category: 'Gaming' },
  { name: 'Call of Duty', category: 'Gaming' },
  { name: 'FIFA', category: 'Gaming' },
  { name: 'Apple', category: 'Apps' },
  { name: 'Google', category: 'Apps' },
  { name: 'Amazon', category: 'Lifestyle' },
  { name: 'Noon', category: 'Lifestyle' },
  { name: 'Netflix', category: 'Streaming' },
]

export default function BrandsSection() {
  return (
    <section id="brands" className="relative overflow-hidden py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-brand-700/80">
            THE BRANDS
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-ink-900 sm:text-4xl">
            Brands your customers already know.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-ink-500 sm:text-base">
            Explore popular digital products available through ToYouCards.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-2xl border border-ink-100 bg-white/60 px-3 py-6 text-center backdrop-blur-sm transition-all duration-300 hover:border-brand-400/40 hover:bg-white hover:shadow-[0_8px_24px_-12px_rgba(0,99,180,0.15)] sm:py-8"
            >
              <p className="text-sm font-semibold tracking-tight text-ink-800 transition-colors group-hover:text-brand-700 sm:text-base">
                {brand.name}
              </p>
              <p className="text-[11px] tracking-wide text-ink-400">
                {brand.category}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-400 sm:mt-10">
          More brands available on request — contact us for the full list.
        </p>
      </div>
    </section>
  )
}
