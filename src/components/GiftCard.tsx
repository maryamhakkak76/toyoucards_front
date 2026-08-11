export type GiftCardVariant = 'cyan' | 'blue' | 'deep' | 'dark' | 'light'

const surfaces: Record<GiftCardVariant, string> = {
  cyan: 'linear-gradient(135deg, #16c1e8 0%, #1798d6 55%, #135da9 100%)',
  blue: 'linear-gradient(135deg, #1c86d6 0%, #1677c8 50%, #124e8f 100%)',
  deep: 'linear-gradient(150deg, #135da9 0%, #103f78 60%, #0a2547 100%)',
  dark: 'linear-gradient(150deg, #0c1622 0%, #0a1119 55%, #070d15 100%)',
  light: 'linear-gradient(150deg, #eef4fb 0%, #d3e2f1 55%, #b9cee4 100%)',
}

const isLight = (v: GiftCardVariant) => v === 'light'

export function GiftCard({
  variant = 'blue',
  amount = '$50',
  label = 'DIGITAL VALUE',
  className,
  style,
}: {
  variant?: GiftCardVariant
  amount?: string
  label?: string
  className?: string
  style?: React.CSSProperties
}) {
  const light = isLight(variant)

  return (
    <div
      className={`relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl border shadow-[0_30px_80px_-30px_rgba(2,10,20,0.9)] ${
        light ? 'border-black/10' : 'border-white/12'
      } ${className ?? ''}`}
      style={{ background: surfaces[variant], ...style }}
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id={`glow-${variant}`} cx="78%" cy="22%" r="60%">
            <stop
              offset="0%"
              stopColor={light ? '#ffffff' : '#9fe6f7'}
              stopOpacity={light ? '0.9' : '0.5'}
            />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#glow-${variant})`} />
        <g
          stroke={light ? 'rgba(19,93,169,0.18)' : 'rgba(255,255,255,0.16)'}
          strokeWidth="1"
          fill="none"
        >
          <path d="M-20 150 C 80 90, 180 200, 340 120" />
          <path d="M-20 175 C 90 120, 200 220, 340 150" />
          <circle cx="250" cy="60" r="46" strokeDasharray="2 6" />
          <circle cx="250" cy="60" r="70" strokeDasharray="2 10" />
        </g>
      </svg>

      <div className="noise" />

      <div
        className={`relative flex h-full flex-col justify-between p-4 sm:p-5 ${
          light ? 'text-[#0a2547]' : 'text-white'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-[0.22em]">
            TOYOUCARDS
          </span>
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-[6px] border text-[10px] ${
              light ? 'border-black/20' : 'border-white/30'
            }`}
          >
            ◇
          </span>
        </div>

        <div className="space-y-0.5">
          <p
            className={`text-[9px] font-medium tracking-[0.24em] ${
              light ? 'text-[#135da9]/70' : 'text-white/60'
            }`}
          >
            {label}
          </p>
          <p className="font-mono text-2xl font-semibold tracking-tight sm:text-3xl">
            {amount}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span
            className={`text-[8px] font-medium tracking-[0.22em] ${
              light ? 'text-[#135da9]/70' : 'text-white/50'
            }`}
          >
            DIGITAL GIFT CARD
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1 w-3 rounded-full ${
                  light ? 'bg-[#135da9]/40' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
