import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { CatalogSection } from '@/components/catalog-section'
import { InlineCta } from '@/components/inline-cta'
import { ValueSection } from '@/components/value-section'
import { ApiSection } from '@/components/api-section'
import { DashboardPreview } from '@/components/dashboard-preview'
import { ContactSection } from '@/components/contact-section'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="bg-app relative min-h-screen">
      <div className="noise" />
      <div className="relative">
        <SiteNav />
        <main>
          <Hero />
          <CatalogSection />
          <InlineCta
            prompt="Need volume pricing for hundreds or thousands of cards?"
            action="Talk to Sales"
          />
          <ValueSection />
          <ApiSection />
          <InlineCta
            prompt="Building something at scale with the API?"
            action="Talk to our team"
          />
          <DashboardPreview />
          <ContactSection />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
