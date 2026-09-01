export type GiftCardVariant =
  | 'cyan'
  | 'blue'
  | 'deep'
  | 'dark'
  | 'light'
  | 'teal'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'slate'

const surfaces: Record<GiftCardVariant, string> = {
  cyan: 'linear-gradient(135deg, #0EA5E9 0%, #1677C8 50%, #135DA9 100%)',
  blue: 'linear-gradient(135deg, #2563EB 0%, #1677C8 50%, #0E477F 100%)',
  deep: 'linear-gradient(150deg, #135DA9 0%, #0A3260 60%, #061A38 100%)',
  dark: 'linear-gradient(150deg, #1E3A5F 0%, #15243A 55%, #0B1520 100%)',
  light: 'linear-gradient(150deg, #E0F2FE 0%, #BAE6FD 55%, #7DD3FC 100%)',
  teal: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 50%, #155E75 100%)',
  emerald: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #065F46 100%)',
  amber: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #92400E 100%)',
  rose: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 50%, #9F1239 100%)',
  slate: 'linear-gradient(150deg, #475569 0%, #334155 50%, #1E293B 100%)',
}

const glowColors: Record<GiftCardVariant, string> = {
  cyan: '#7DD3FC',
  blue: '#93C5FD',
  deep: '#60A5FA',
  dark: '#64748B',
  light: '#FFFFFF',
  teal: '#67E8F9',
  emerald: '#6EE7B7',
  amber: '#FCD34D',
  rose: '#FDA4AF',
  slate: '#94A3B8',
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
  const glow = glowColors[variant]
  const cardId = `gc-${variant}-${label.replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <div
      className={`group/gc relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl border shadow-[0_20px_50px_-20px_rgba(19,93,169,0.35)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-20px_rgba(22,193,232,0.4)] ${
        light ? 'border-black/10' : 'border-white/15'
      } ${className ?? ''}`}
      style={{ background: surfaces[variant], ...style }}
    >
      {/* Holographic sheen layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover/gc:opacity-90"
        style={{
          background: `linear-gradient(105deg, transparent 30%, ${light ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)'} 45%, ${light ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.22)'} 50%, ${light ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.12)'} 55%, transparent 70%)`,
        }}
      />

      {/* Radial glow + decorative lines */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 320 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id={`glow-${cardId}`} cx="75%" cy="25%" r="55%">
            <stop offset="0%" stopColor={glow} stopOpacity={light ? '0.95' : '0.45'} />
            <stop offset="100%" stopColor={glow} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`shine-${cardId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={light ? '#FFFFFF' : glow} stopOpacity={light ? '0.4' : '0.15'} />
            <stop offset="100%" stopColor={light ? '#FFFFFF' : glow} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#glow-${cardId})`} />
        <rect width="320" height="100" fill={`url(#shine-${cardId})`} />
        <g
          stroke={light ? 'rgba(19,93,169,0.15)' : 'rgba(255,255,255,0.12)'}
          strokeWidth="1"
          fill="none"
        >
          <path d="M-20 155 C 80 95, 180 205, 340 125" />
          <path d="M-20 180 C 90 125, 200 225, 340 155" />
          <circle cx="255" cy="55" r="42" strokeDasharray="2 6" />
          <circle cx="255" cy="55" r="65" strokeDasharray="2 10" />
        </g>
      </svg>

      <div className="noise" />

      {/* Content */}
      <div
        className={`relative flex h-full flex-col justify-between p-4 sm:p-5 ${
          light ? 'text-[#0A2547]' : 'text-white'
        }`}
      >
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-md ${
                light ? 'bg-[#135DA9]/10' : 'bg-white/15'
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect x="1" y="3" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" opacity="0.8" />
                <line x1="1" y1="5.5" x2="11" y2="5.5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              </svg>
            </span>
            <span className="text-[10px] font-semibold tracking-[0.2em]">TOYOUCARDS</span>
          </div>
          <span
            className={`rounded-full px-2 py-0.5 text-[8px] font-semibold tracking-wider ${
              light ? 'bg-[#135DA9]/10 text-[#135DA9]/70' : 'bg-white/15 text-white/70'
            }`}
          >
            SECURE
          </span>
        </div>

        {/* Middle — amount */}
        <div className="space-y-1">
          <p
            className={`text-[9px] font-medium tracking-[0.24em] ${
              light ? 'text-[#135DA9]/60' : 'text-white/55'
            }`}
          >
            {label}
          </p>
          <p className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
            {amount}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span
            className={`text-[8px] font-medium tracking-[0.22em] ${
              light ? 'text-[#135DA9]/60' : 'text-white/45'
            }`}
          >
            DIGITAL GIFT CARD
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1 w-3 rounded-full ${light ? 'bg-[#135DA9]/30' : 'bg-white/35'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
