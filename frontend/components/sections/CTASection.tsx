import Mosaic from '../Mosaic'
import Tile from '../Tile'
import InstallCommand from '../InstallCommand'

export default function CTASection() {
  return (
    <Mosaic cols="1fr" rows="auto">
      <Tile
        tone="ink"
        pad={64}
        style={{ minHeight: 380 }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 36,
          }}
        >
          <div className="it" style={{ color: 'var(--ink-faint)', fontSize: 14 }}>
            <span style={{ fontFamily: 'var(--font-display)' }}>The library you keep meaning to write</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              color: 'var(--paper)',
              margin: 0,
              fontWeight: 400,
              maxWidth: '14ch',
            }}
          >
            Stop losing money to duplicate transactions.
          </h2>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginTop: 4 }}>
            <InstallCommand />
            <span className="it" style={{ color: 'var(--ink-faint)', fontSize: 13 }}>
              30 seconds. four wrappers. done.
            </span>
          </div>
        </div>
      </Tile>
    </Mosaic>
  )
}
