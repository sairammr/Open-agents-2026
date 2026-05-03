import Topbar from '@/components/Topbar'
import Hero from '@/components/sections/Hero'
import WhySection from '@/components/sections/WhySection'
import ProofSection from '@/components/sections/ProofSection'
import NotSection from '@/components/sections/NotSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Page() {
  return (
    <div style={{ background: 'var(--ink)' }}>
      <Topbar />

      <main className="shell">
        <section style={{ padding: 6 }}>
          <Hero />
        </section>

        <section id="why" style={{ padding: '0 6px 6px' }}>
          <WhySection />
        </section>

        <section id="proof" style={{ padding: '0 6px 6px' }}>
          <ProofSection />
        </section>

        <section style={{ padding: '0 6px 6px' }}>
          <NotSection />
        </section>

        <section style={{ padding: '0 6px 6px' }}>
          <CTASection />
        </section>

        <footer style={{ padding: '0 6px 6px' }}>
          <Footer />
        </footer>
      </main>
    </div>
  )
}
