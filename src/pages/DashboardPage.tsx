import { Link } from 'react-router-dom'
import { ChartBar as BarChart3, ArrowRight, LogOut, Gift, Zap, Settings } from 'lucide-react'
import { useAuth } from '@/lib/auth'

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-ink-50">
      <header className="border-b border-ink-100 bg-white/80 backdrop-blur-xl">
        <div className="container-max container-px flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="/ToYoucardsLogo_Light-Logotype.svg"
              alt="ToYouCards"
              className="h-7 w-auto"
            />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-sm text-ink-400">
              {user?.email}
            </span>
            <button onClick={signOut} className="btn-secondary !py-2 !px-4 text-sm">
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="container-max container-px py-12 lg:py-16">
        <div className="mb-10">
          <h1 className="text-display-lg font-display text-ink-900">Dashboard</h1>
          <p className="mt-2 text-ink-400">
            Welcome back. This is your business account overview.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-10">
          {[
            { label: 'Total Orders', value: '1,284', icon: <BarChart3 className="h-5 w-5" /> },
            { label: 'Active Gift Cards', value: '892', icon: <Gift className="h-5 w-5" /> },
            { label: 'API Calls (30d)', value: '24.6K', icon: <Zap className="h-5 w-5" /> },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/15 text-brand-600">
                  {stat.icon}
                </div>
              </div>
              <p className="text-2xl font-semibold text-ink-900">{stat.value}</p>
              <p className="text-sm text-ink-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Orders', description: 'View and manage your gift card orders.', icon: <BarChart3 className="h-5 w-5" /> },
            { title: 'Catalog', description: 'Browse available gift card brands.', icon: <Gift className="h-5 w-5" /> },
            { title: 'API Keys', description: 'Manage your API credentials and webhooks.', icon: <Settings className="h-5 w-5" /> },
          ].map((item) => (
            <div key={item.title} className="glass-card glass-card-hover rounded-2xl p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/15 text-brand-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-ink-900 mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-400 mb-4">{item.description}</p>
              <span className="link-arrow">
                Open
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <p className="text-ink-400 text-sm">
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
