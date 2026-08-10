const steps = [
  {
    n: '01',
    title: 'Tell us about your business',
    body: 'Share what you\u2019re building and what you need from digital gift cards.',
  },
  {
    n: '02',
    title: 'Our team reviews your requirements',
    body: 'We look at volume, markets, and integration needs to find the right fit.',
  },
  {
    n: '03',
    title: 'We discuss the right solution',
    body: 'Together we map out pricing, onboarding, and the path to going live.',
  },
]

export function WhatsNext() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-medium tracking-[0.22em] text-cyan/80">
          WHAT HAPPENS NEXT?
        </p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#070b10] p-6">
              <span className="font-mono text-sm text-cyan">{s.n}</span>
              <h3 className="mt-4 text-base font-medium tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
