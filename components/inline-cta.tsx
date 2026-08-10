import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function InlineCta({
  prompt,
  action,
  href = '/contact',
}: {
  prompt: string
  action: string
  href?: string
}) {
  return (
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 backdrop-blur-sm sm:flex-row">
        <p className="text-pretty text-center text-sm text-muted-foreground sm:text-left sm:text-base">
          {prompt}
        </p>
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-cyan transition-colors hover:text-foreground"
        >
          {action}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
