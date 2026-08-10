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
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-950 px-5 py-12">
      {/* Atmospheric blue glow */}
      <div className="glow-blue top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-500/12 animate-glow-pulse" />
      <div className="glow-blue bottom-0 right-0 w-[400px] h-[400px] bg-brand-700/8" />
      <div className="glow-blue top-1/3 left-0 w-[300px] h-[300px] bg-brand-500/6" />

      {/* Abstract gift card shape */}
      <AbstractCardShape />

      <div className="relative z-10 w-full max-w-[440px]">
        {/* Logo + heading */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="7" fill="#0A1320" stroke="rgba(22,193,232,0.3)" />
              <path
                d="M8 11.5C8 10.67 8.67 10 9.5 10H20.5C21.33 10 22 10.67 22 11.5V18.5C22 19.33 21.33 20 20.5 20H9.5C8.67 20 8 19.33 8 18.5V11.5Z"
                stroke="#16C1E8"
                strokeWidth="1.8"
              />
              <path d="M10 22H22" stroke="#1677C8" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="15" cy="15" r="1.5" fill="#16C1E8" />
            </svg>
            <span className="font-display text-xl font-semibold tracking-tight text-white">
              ToYouCards
            </span>
          </Link>
          <h1 className="text-display-md font-display text-white">Welcome back.</h1>
          <p className="mt-3 text-[15px] text-white/50">Sign in to your business account.</p>
        </div>

        {/* Form panel */}
        <div className="relative">
          <div className="absolute inset-0 -inset-3 bg-brand-500/5 blur-3xl rounded-4xl" />
          <div className="relative glass-card rounded-4xl p-7 sm:p-9 shadow-2xl">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Email</label>
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

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Password</label>
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/30 hover:text-white/60 transition-colors"
                    tabIndex={-1}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                  </button>
                </div>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm text-brand-500 hover:text-brand-400 transition-colors"
                  onClick={() => setError('Password reset is not available in this demo. Contact your account manager.')}
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-start gap-3 rounded-xl border border-red-500/25 bg-red-500/[0.06] px-4 py-3.5 animate-fade-in">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              )}

              {/* Submit */}
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

            {/* Divider */}
            <div className="mt-7 pt-6 border-t border-white/[0.06] text-center">
              <p className="text-sm text-white/45">
                Don't have an account?{' '}
                <Link to="/contact" className="link-arrow">
                  Talk to Sales
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back to site */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-white/35 hover:text-white/60 transition-colors">
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
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.04] pointer-events-none"
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
