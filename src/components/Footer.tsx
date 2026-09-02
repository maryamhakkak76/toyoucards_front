import { Link, useLocation } from 'react-router-dom'

const groups = [
  {
    title: 'Product',
    links: [
      { label: 'Gift Cards', href: '/#catalog' },
      { label: 'Key Benefits', href: '/#platform' },
      { label: 'How It Works', href: '/#order-process' },
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

export default function Footer() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <footer className={`relative border-t px-4 py-14 ${isLanding ? 'border-white/10 bg-[#05091f] text-white' : 'border-ink-100'}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center">
              <img
                src={isLanding ? '/modern-minimal-logo-for--kahan-tech---highly-creat_(1)_40.png' : '/ToYoucardsLogo_Light-Logotype.svg'}
                alt="ToYouCards"
                className={isLanding ? 'h-8 w-[178px] object-cover object-center' : 'h-7 w-auto'}
              />
            </Link>
            <p className={`mt-4 max-w-xs text-sm leading-relaxed ${isLanding ? 'text-white/55' : 'text-ink-500'}`}>
              Power your business with digital gift cards — built for businesses expanding across borders.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className={`text-xs font-medium tracking-[0.18em] ${isLanding ? 'text-white/45' : 'text-ink-400'}`}>
                {g.title.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className={`text-sm transition-colors hover:text-brand-400 ${isLanding ? 'text-white/60' : 'text-ink-600'}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row ${isLanding ? 'border-white/10' : 'border-ink-100'}`}>
          <p className={`text-xs ${isLanding ? 'text-white/40' : 'text-ink-400'}`}>
            © {new Date().getFullYear()} ToYouCards. All rights reserved.
          </p>
          <div className={`flex gap-6 text-xs ${isLanding ? 'text-white/40' : 'text-ink-400'}`}>
            <a href="#privacy" className={`transition-colors hover:text-brand-400 ${isLanding ? 'hover:text-cyan-300' : 'hover:text-brand-600'}`}>
              Privacy
            </a>
            <a href="#terms" className={`transition-colors ${isLanding ? 'hover:text-cyan-300' : 'hover:text-brand-600'}`}>
              Terms
            </a>
            <a href="#security" className={`transition-colors ${isLanding ? 'hover:text-cyan-300' : 'hover:text-brand-600'}`}>
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
