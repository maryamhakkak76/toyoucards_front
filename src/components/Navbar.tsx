import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Solutions', to: '/#solutions' },
  { label: 'Gift Cards', to: '/#catalog' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'API', to: '/#api' },
  { label: 'Resources', to: '/#resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-max container-px flex h-16 items-center justify-between lg:h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <Logo />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            ToYouCards
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="px-3.5 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="btn-ghost">
            Login
          </Link>
          <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
            Talk to Sales
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ink-950/95 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="container-max container-px py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to}
                className="px-3 py-3 text-base font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="h-px bg-white/[0.06] my-2" />
            <Link
              to="/login"
              className="px-3 py-3 text-base font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="btn-primary mt-2 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Talk to Sales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="shrink-0">
      <rect width="32" height="32" rx="7" fill="#0A1320" stroke="rgba(22,193,232,0.3)" />
      <path
        d="M8 11.5C8 10.67 8.67 10 9.5 10H20.5C21.33 10 22 10.67 22 11.5V18.5C22 19.33 21.33 20 20.5 20H9.5C8.67 20 8 19.33 8 18.5V11.5Z"
        stroke="#16C1E8"
        strokeWidth="1.8"
      />
      <path d="M10 22H22" stroke="#1677C8" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="15" cy="15" r="1.5" fill="#16C1E8" />
    </svg>
  )
}
