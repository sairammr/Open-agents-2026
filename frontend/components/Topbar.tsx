import Wordmark from './Wordmark'

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Wordmark size={22} />
        <nav>
          <a href="#why">Why</a>
          <a href="#proof">Proof</a>
          <a href="#docs">Docs</a>
          <a href="https://github.com/romariokavin1/acid" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="pill ghost mono" style={{ whiteSpace: 'nowrap' }}>v0.2.0</span>

        </div>
      </div>
    </header>
  )
}
