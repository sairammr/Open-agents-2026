import Wordmark from './Wordmark'
import { GITHUB, VERSION } from '@/lib/openacid'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Wordmark size={22} href="/" />
        <nav>
          <a href="/#why">Why</a>
          <a href="/#proof">Proof</a>
          <a href="/docs">Docs</a>
          <a href="/packages">Packages</a>
          <a href="/pitch">Pitch</a>
          <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="pill ghost mono" style={{ whiteSpace: 'nowrap' }}>v{VERSION}</span>
        </div>
      </div>
    </header>
  )
}
