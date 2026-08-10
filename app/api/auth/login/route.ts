import { type NextRequest, NextResponse } from 'next/server'
import { isValidEmail, verifyCredentials, SESSION_COOKIE } from '@/lib/auth'

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request format.' },
      { status: 400 },
    )
  }

  const email =
    body && typeof body === 'object' && 'email' in body
      ? String((body as Record<string, unknown>).email ?? '')
          .trim()
          .toLowerCase()
      : ''
  const password =
    body && typeof body === 'object' && 'password' in body
      ? String((body as Record<string, unknown>).password ?? '')
      : ''

  if (!isValidEmail(email) || password.length < 1) {
    return NextResponse.json(
      { ok: false, error: 'Please enter a valid email and password.' },
      { status: 422 },
    )
  }

  try {
    const user = await verifyCredentials(email, password)

    if (!user) {
      // Deliberately vague so we do not reveal whether the email exists.
      return NextResponse.json(
        { ok: false, error: 'Invalid email or password.' },
        { status: 401 },
      )
    }

    const res = NextResponse.json({ ok: true, redirectTo: '/dashboard' })
    res.cookies.set(SESSION_COOKIE, user.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  } catch (err) {
    console.error('[v0] Login failed:', err)
    return NextResponse.json(
      { ok: false, error: 'We could not sign you in right now. Please try again.' },
      { status: 500 },
    )
  }
}
