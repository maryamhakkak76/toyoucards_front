import Link from 'next/link'

const groups = [
  {
    title: 'Product',
    links: [
      { label: 'Gift Cards', href: '/#catalog' },
      { label: 'Platform', href: '/#platform' },
      { label: 'Dashboard', href: '/#dashboard' },
      { label: 'Login', href: '/login' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API', href: '/#api' },
      { label: 'Webhooks', href: '/#api' },
      { label: 'SDKs', href: '/#api' },
      { label: 'API access', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Talk to Sales', href: '/contact' },
      { label: 'Become a reseller', href: '/contact' },
      { label: 'Contact', href: '/contact' },
      { label: 'Login', href: '/login' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.08] px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-brand">
                <span className="h-2.5 w-2.5 rounded-[3px] bg-white/90" />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                ToYouCards
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Digital value, built to scale — for businesses that move money.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs font-medium tracking-[0.18em] text-muted-foreground">
                {g.title.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-cyan"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ToYouCards. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="transition-colors hover:text-cyan">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-cyan">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-cyan">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
