import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Key Benefits', href: '/#platform' },
  { label: 'Gift Cards', href: '/#catalog' },
  { label: 'How It Works', href: '/#order-process' },
  { label: 'API', href: '/#api' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isLanding = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-6xl rounded-3xl border transition-all duration-300 ${
          isLanding
            ? scrolled || open
              ? 'border-cyan-300/20 bg-[#070d27]/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
              : 'border-white/10 bg-[#070d27]/35 backdrop-blur-md'
            : scrolled || open
              ? 'border-ink-200 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(19,93,169,0.15)]'
              : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/ToYoucardsLogo_Light-Logotype.svg"
              alt="ToYouCards"
              className="h-7 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-500 transition-colors hover:text-brand-600"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden rounded-full px-3.5 py-2 text-sm text-ink-500 transition-colors hover:text-ink-900 sm:block"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(22,119,200,0.5)] transition-all hover:brightness-110 sm:flex"
            >
              Talk to Sales
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-700 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="flex flex-col gap-1 border-t border-ink-100 px-3 py-3 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-ink-500 transition-colors hover:bg-ink-50 hover:text-brand-600"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-1 flex flex-col gap-2 border-t border-ink-100 pt-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="rounded-full border border-ink-200 px-4 py-2.5 text-center text-sm text-ink-700"
              >
                Login
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-medium text-white"
              >
                Talk to Sales
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
