import Topbar from '@/components/Topbar'
import Footer from '@/components/sections/Footer'
import PackagesHero from '@/components/packages/PackagesHero'
import PackageGrid from '@/components/packages/PackageGrid'
import PackagesIndex from '@/components/packages/PackagesIndex'

export const metadata = {
  title: 'packages · openacid',
  description:
    '5 published packages under @openacid on npm. 4 versions each. Real install commands, real version history, real npm links.',
}

export default function PackagesPage() {
  return (
    <div style={{ background: 'var(--ink)' }}>
      <Topbar />
      <main className="shell">
        <section style={{ padding: 6 }}>
          <PackagesHero />
        </section>
        <section style={{ padding: '0 6px 6px' }}>
          <PackageGrid />
        </section>
        <section style={{ padding: '0 6px 6px' }}>
          <PackagesIndex />
        </section>
        <footer style={{ padding: '0 6px 6px' }}>
          <Footer />
        </footer>
      </main>
    </div>
  )
}
