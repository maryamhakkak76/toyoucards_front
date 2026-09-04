import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-100 px-4 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl">
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
              A curated catalog of digital gift cards for businesses — fast fulfillment,
              secure delivery, and simple dashboard management.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.18em] text-ink-400">
              PRODUCT
            </h3>
            <ul className="mt-4 space-y-3">
              <li><Link to="/#catalog" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Catalog</Link></li>
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
              <li><Link to="/#catalog" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Gaming</Link></li>
              <li><Link to="/#catalog" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Apps</Link></li>
              <li><Link to="/#catalog" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Lifestyle</Link></li>
              <li><Link to="/#catalog" className="text-sm text-ink-600 transition-colors hover:text-brand-700">Streaming</Link></li>
            </ul>
          </div>

          {/* Company / Contact */}
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
          <p className="text-xs text-ink-400">
            Headquartered in Dubai, UAE
          </p>
        </div>
      </div>
    </footer>
  )
}
