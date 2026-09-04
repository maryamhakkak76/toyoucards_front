const items = [
  'RESELLERS',
  'REWARDS PROGRAMS',
  'EMPLOYEE INCENTIVES',
  'CUSTOMER REWARDS',
  'PROMOTIONS',
  'BUSINESS GIFTING',
]

export default function BuiltForMarquee() {
  return (
    <section className="relative border-y border-ink-100 bg-white/40 py-5 sm:py-6">
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-6 whitespace-nowrap pr-6 sm:gap-8 sm:pr-8">
          <span className="text-xs font-medium tracking-[0.22em] text-brand-700 sm:text-sm">
            BUILT FOR
          </span>
          <span className="h-1 w-1 rounded-full bg-brand-400" />
          {items.map((item) => (
            <span key={item} className="flex items-center gap-6 sm:gap-8">
              <span className="text-xs font-medium tracking-[0.18em] text-ink-400 sm:text-sm">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-brand-400/60" />
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="animate-marquee flex shrink-0 items-center gap-6 whitespace-nowrap pr-6 sm:gap-8 sm:pr-8" aria-hidden="true">
          <span className="text-xs font-medium tracking-[0.22em] text-brand-700 sm:text-sm">
            BUILT FOR
          </span>
          <span className="h-1 w-1 rounded-full bg-brand-400" />
          {items.map((item) => (
            <span key={item} className="flex items-center gap-6 sm:gap-8">
              <span className="text-xs font-medium tracking-[0.18em] text-ink-400 sm:text-sm">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-brand-400/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
