import { Link } from 'react-router-dom'
import { BarChart3, ArrowRight, LogOut, Gift, Zap, Settings } from 'lucide-react'
import { useAuth } from '@/lib/auth'

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-ink-950">
      {/* Top bar */}
      <header className="border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
        <div className="container-max container-px flex h-16 items-center justify-between">
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
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-sm text-white/40">
              {user?.email}
            </span>
            <button onClick={signOut} className="btn-secondary !py-2 !px-4 text-sm">
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard body */}
      <main className="container-max container-px py-12 lg:py-16">
        <div className="mb-10">
          <h1 className="text-display-lg font-display text-white">Dashboard</h1>
          <p className="mt-2 text-white/45">
            Welcome back. This is your business account overview.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-3 mb-10">
          {[
            { label: 'Total Orders', value: '1,284', icon: <BarChart3 className="h-5 w-5" /> },
            { label: 'Active Gift Cards', value: '892', icon: <Gift className="h-5 w-5" /> },
            { label: 'API Calls (30d)', value: '24.6K', icon: <Zap className="h-5 w-5" /> },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/15 text-brand-500">
                  {stat.icon}
                </div>
              </div>
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-sm text-white/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quick links */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Orders', description: 'View and manage your gift card orders.', icon: <BarChart3 className="h-5 w-5" /> },
            { title: 'Catalog', description: 'Browse available gift card brands.', icon: <Gift className="h-5 w-5" /> },
            { title: 'API Keys', description: 'Manage your API credentials and webhooks.', icon: <Settings className="h-5 w-5" /> },
          ].map((item) => (
            <div key={item.title} className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/15 text-brand-500 mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/45 mb-4">{item.description}</p>
              <span className="link-arrow">
                Open
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <p className="text-white/40 text-sm">
            This is a protected dashboard preview. The full platform is accessible to authenticated
            ToYouCards business accounts.
          </p>
          <Link to="/" className="link-arrow mt-4 justify-center">
            Back to website
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </div>
  )
}
