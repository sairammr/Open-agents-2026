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

      <main style={{ background: 'var(--ink)' }}>
        <section style={{ padding: 6, background: 'var(--ink)' }}>
          <Hero />
        </section>

        <section id="why" style={{ padding: '0 6px 6px', background: 'var(--ink)' }}>
          <WhySection />
        </section>

        <section id="proof" style={{ padding: '0 6px 6px', background: 'var(--ink)' }}>
          <ProofSection />
        </section>

        <section style={{ padding: '0 6px 6px', background: 'var(--ink)' }}>
          <NotSection />
        </section>

        <section style={{ padding: '0 6px 6px', background: 'var(--ink)' }}>
          <CTASection />
        </section>

        <footer style={{ padding: '0 6px 6px', background: 'var(--ink)' }}>
          <Footer />
        </footer>
      </main>
    </div>
  )
}
