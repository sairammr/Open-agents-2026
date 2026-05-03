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
          <a href="#github">GitHub ↗</a>
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="pill ghost mono" style={{ whiteSpace: 'nowrap' }}>v1.0.0</span>
          <button className="btn primary">npm install acid</button>
        </div>
      </div>
    </header>
  )
}
