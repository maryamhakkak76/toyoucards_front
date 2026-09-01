import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Loader as Loader2, CircleAlert as AlertCircle, Eye, EyeOff } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password) {
      setError('Please enter your email and password.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })

      if (signInError) {
        if (
          signInError.message.toLowerCase().includes('invalid login') ||
          signInError.message.toLowerCase().includes('invalid credentials')
        ) {
          setError('Incorrect email or password. Please try again.')
        } else {
          setError('Unable to sign in. Please check your credentials and try again.')
        }
        setLoading(false)
        return
      }

      navigate('/dashboard', { replace: true })
    } catch {
      setError('Something went wrong. Please check your connection and try again.')
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-50 px-5 py-12">
      <div className="glow-blue top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/8 animate-glow-pulse" />
      <div className="glow-blue bottom-0 right-0 w-[400px] h-[400px] bg-brand-700/5" />
      <div className="glow-blue top-1/3 left-0 w-[300px] h-[300px] bg-brand-500/4" />

      <AbstractCardShape />

      <div className="relative z-10 w-full max-w-[440px]">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center mb-8">
            <img
              src="/ToYoucardsLogo_Light-Logotype.svg"
              alt="ToYouCards"
              className="h-8 w-auto"
            />
          </Link>
          <h1 className="text-display-md font-display text-ink-900">Welcome back.</h1>
          <p className="mt-3 text-[15px] text-ink-500">Sign in to your business account.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -inset-3 bg-brand-500/5 blur-3xl rounded-4xl" />
          <div className="relative glass-card rounded-4xl p-7 sm:p-9 shadow-[0_30px_60px_-25px_rgba(19,93,169,0.2)]">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700">Email</label>
                <input
                  type="email"
                  className="field-input"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  disabled={loading}
                  autoComplete="email"
                  autoFocus
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-ink-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="field-input pr-11"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      if (error) setError('')
                    }}
                    disabled={loading}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-ink-400 hover:text-ink-600 transition-colors"
                    tabIndex={-1}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-brand-600 hover:text-brand-700 transition-colors"
                  onClick={() => setError('Password reset is not available in this demo. Contact your account manager.')}
                >
                  Forgot password?
                </button>
              </div>

              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3.5 animate-fade-in">
                  <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4.5 w-4.5 animate-spin" />
                    Signing in…
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4.5 w-4.5" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-7 pt-6 border-t border-ink-100 text-center">
              <p className="text-sm text-ink-400">
                Don't have an account?{' '}
                <Link to="/contact" className="link-arrow">
                  Talk to Sales
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-ink-400 hover:text-ink-600 transition-colors">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  )
}

function AbstractCardShape() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.03] pointer-events-none"
      viewBox="0 0 400 400"
      fill="none"
    >
      <rect x="80" y="140" width="240" height="150" rx="16" stroke="#16C1E8" strokeWidth="1.5" />
      <rect x="60" y="120" width="240" height="150" rx="16" stroke="#1677C8" strokeWidth="1.5" />
      <rect x="40" y="100" width="240" height="150" rx="16" stroke="#135DA9" strokeWidth="1.5" />
      <circle cx="160" cy="175" r="8" fill="#16C1E8" />
      <line x1="70" y1="205" x2="180" y2="205" stroke="#16C1E8" strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="220" x2="150" y2="220" stroke="#16C1E8" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}
