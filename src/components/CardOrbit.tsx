import { GiftCard } from '@/components/GiftCard'

export function CardOrbit() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(22,193,232,0.14), rgba(19,93,169,0.04) 55%, transparent 72%)',
        }}
      />

      <svg
        aria-hidden="true"
        className="animate-orbit-spin absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 560 560"
        fill="none"
      >
        <defs>
          <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#16c1e8" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#1677c8" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#135da9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse
          cx="280"
          cy="280"
          rx="250"
          ry="150"
          stroke="url(#orbit-stroke)"
          strokeWidth="1"
        />
        <ellipse
          cx="280"
          cy="280"
          rx="185"
          ry="255"
          stroke="url(#orbit-stroke)"
          strokeWidth="1"
          transform="rotate(28 280 280)"
        />
        <circle cx="30" cy="215" r="2.5" fill="#16c1e8" />
        <circle cx="520" cy="330" r="2" fill="#1677c8" />
        <circle cx="360" cy="40" r="2" fill="#16c1e8" />
      </svg>

      <div className="animate-float-slower absolute left-[2%] top-[16%] w-[38%] -rotate-12 opacity-80 blur-[1.5px]">
        <GiftCard variant="deep" amount="$25" label="GAMING" />
      </div>
      <div className="animate-float-slow-orbit absolute right-[1%] top-[20%] w-[40%] rotate-12 opacity-85 blur-[1px]">
        <GiftCard variant="cyan" amount="$100" label="SHOPPING" />
      </div>
      <div className="animate-float-slow-orbit absolute bottom-[10%] left-[10%] w-[34%] -rotate-6 opacity-70 blur-[2px]">
        <GiftCard variant="dark" amount="$10" label="STREAMING" />
      </div>

      <div className="animate-float-slow-orbit relative z-10 w-[58%] drop-shadow-[0_40px_60px_rgba(19,93,169,0.25)]">
        <GiftCard variant="blue" amount="$50" label="DIGITAL VALUE" />
      </div>
    </div>
  )
}
