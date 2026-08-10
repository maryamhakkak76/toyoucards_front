'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Solutions', href: '/#platform' },
  { label: 'Gift Cards', href: '/#catalog' },
  { label: 'How It Works', href: '/#dashboard' },
  { label: 'API', href: '/#api' },
  { label: 'Contact', href: '/contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`w-full max-w-6xl rounded-3xl border transition-all duration-300 ${
          scrolled || open
            ? 'border-white/10 bg-[#070b10]/80 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-brand">
              <span className="h-2.5 w-2.5 rounded-[3px] bg-white/90" />
            </span>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              ToYouCards
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-cyan"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Existing customers — quiet action */}
            <Link
              href="/login"
              className="hidden rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Login
            </Link>
            {/* New / potential customers — primary conversion */}
            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_8px_30px_-8px_rgba(22,193,232,0.6)] transition-all hover:brightness-110 sm:flex"
            >
              Talk to Sales
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-foreground md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col gap-1 border-t border-white/[0.06] px-3 py-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-cyan"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-1 flex flex-col gap-2 border-t border-white/[0.06] pt-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-4 py-2.5 text-center text-sm text-foreground"
              >
                Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2.5 text-sm font-medium text-primary-foreground"
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
