import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-100">
      {/* CTA area */}
      <div className="border-b border-ink-100 bg-white/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 sm:py-10">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
              Ready to get started?
            </h3>
            <p className="mt-1 text-sm text-ink-500">
              Tell us what you need — we'll help you find the right fit.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(0,99,180,0.5)] transition-all hover:brightness-110 sm:w-auto"
          >
            Start Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center">
              <img
                src="/ToYoucardsLogo_Light-Logotype.svg"
                alt="ToYouCards"
                className="h-7 w-auto sm:h-8"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              Digital gift cards for businesses that want a simpler way to order,
              manage, and deliver digital products.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.18em] text-ink-400">
              PRODUCT
            </h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/#brands" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Catalog</Link></li>
              <li><Link to="/#platform" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Benefits</Link></li>
              <li><Link to="/#order-process" className="text-sm text-ink-600 transition-colors hover:text-brand-700">How It Works</Link></li>
              <li><Link to="/#dashboard" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Dashboard</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.18em] text-ink-400">
              CATEGORIES
            </h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/#categories" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Gaming</Link></li>
              <li><Link to="/#categories" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Apps</Link></li>
              <li><Link to="/#categories" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Lifestyle</Link></li>
              <li><Link to="/#categories" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Streaming</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.18em] text-ink-400">
              COMPANY
            </h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/contact" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Contact Us</Link></li>
              <li><Link to="/contact" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Reseller Inquiry</Link></li>
              <li><Link to="/login" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-6 sm:flex-row sm:mt-12">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} ToYouCards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
