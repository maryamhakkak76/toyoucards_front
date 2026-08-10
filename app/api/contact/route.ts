import { type NextRequest, NextResponse } from 'next/server'
import { validateLead } from '@/lib/leads'
import { saveLead } from '@/lib/lead-store'

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

  // Honeypot: bots fill hidden fields, humans do not.
  if (body && typeof body === 'object' && 'website' in body) {
    const hp = (body as Record<string, unknown>).website
    if (typeof hp === 'string' && hp.trim() !== '') {
      // Silently accept to avoid tipping off bots.
      return NextResponse.json({ ok: true })
    }
  }

  const { ok, errors, data } = validateLead(
    (body ?? {}) as Record<string, string>,
  )

  if (!ok || !data) {
    return NextResponse.json(
      { ok: false, error: 'Please review the highlighted fields.', errors },
      { status: 422 },
    )
  }

  try {
    const lead = await saveLead(data)
    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 })
  } catch (err) {
    console.error('[v0] Failed to save lead:', err)
    // Never expose raw internal errors to the client.
    return NextResponse.json(
      {
        ok: false,
        error: 'Something went wrong on our end. Please try again shortly.',
      },
      { status: 500 },
    )
  }
}
