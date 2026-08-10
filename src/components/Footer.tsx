import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-950/60">
      <div className="container-max container-px py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="7" fill="#0A1320" stroke="rgba(22,193,232,0.3)" />
                <path
                  d="M8 11.5C8 10.67 8.67 10 9.5 10H20.5C21.33 10 22 10.67 22 11.5V18.5C22 19.33 21.33 20 20.5 20H9.5C8.67 20 8 19.33 8 18.5V11.5Z"
                  stroke="#16C1E8"
                  strokeWidth="1.8"
                />
                <path d="M10 22H22" stroke="#1677C8" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="15" cy="15" r="1.5" fill="#16C1E8" />
              </svg>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                ToYouCards
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/45 max-w-xs">
              B2B digital gift card infrastructure for bulk purchasing, API integration, and
              reseller distribution.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol title="Platform" links={[
              { label: 'Solutions', href: '/#solutions' },
              { label: 'Gift Cards', href: '/#catalog' },
              { label: 'How It Works', href: '/#how-it-works' },
              { label: 'API', href: '/#api' },
            ]} />
            <FooterCol title="Business" links={[
              { label: 'Talk to Sales', href: '/contact' },
              { label: 'Pricing', href: '/#pricing' },
              { label: 'Use Cases', href: '/#use-cases' },
              { label: 'Become a Reseller', href: '/contact' },
            ]} />
            <FooterCol title="Account" links={[
              { label: 'Login', href: '/login' },
              { label: 'Dashboard', href: '/dashboard' },
            ]} />
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white/80 mb-3">Ready to get started?</h4>
            <p className="text-sm text-white/45 mb-4">
              Tell us what you're building. Our team will help you find the right solution.
            </p>
            <Link to="/contact" className="btn-primary w-full">
              Talk to Sales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ToYouCards. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/35">
            <a href="/#privacy" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="/#terms" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="/#security" className="hover:text-white/60 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white/80 mb-3">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/45 hover:text-brand-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
