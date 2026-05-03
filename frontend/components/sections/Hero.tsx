import Mosaic from '../Mosaic'
import Tile from '../Tile'
import CodeBlock from '../CodeBlock'
import InstallCommand from '../InstallCommand'

export default function Hero() {
  return (
    <Mosaic cols="1.45fr 1fr" rows="auto 1fr">
      {/* Headline — left column, spans both rows */}
      <Tile brand="acid" pad={32} style={{ gridRow: 'span 2' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 28,
            gap: 28,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 14,
                color: 'var(--ink-mute)',
                marginBottom: 18,
              }}
            >
              Atomicity <span className="tilde">~</span> Consistency <span className="tilde">~</span> Isolation <span className="tilde">~</span> Durability
            </div>
            <h1
              className="tile-title"
              style={{ fontSize: 'clamp(38px, 4.2vw, 60px)', lineHeight: 1, maxWidth: '14ch' }}
            >
              The four functions your agent was missing.
            </h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 16,
                lineHeight: 1.45,
                color: 'var(--ink-soft)',
                maxWidth: 460,
                margin: 0,
              }}
            >
              Durable execution for AI agents that hold real money. Four primitives. One nested call.
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <InstallCommand />
              <button className="btn ghost">Read the docs</button>
            </div>
          </div>
        </div>
      </Tile>

      {/* Lavender accent — compact strip in right column row 1 */}
      <Tile tone="lavender" pad={24}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              className="pill mono"
              style={{
                background: 'var(--acc-lav-ink)',
                color: 'var(--acc-lavender)',
                fontSize: 11,
              }}
            >
              v 1.0
            </span>
            <span className="it" style={{ fontSize: 12, color: 'var(--acc-lav-ink)', opacity: 0.7 }}>
              just shipped
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 3.4vw, 48px)',
                lineHeight: 1,
                letterSpacing: '0.02em',
                color: 'var(--acc-lav-ink)',
              }}
            >
              A<span style={{ opacity: 0.5, margin: '0 0.15em' }}>·</span>
              C<span style={{ opacity: 0.5, margin: '0 0.15em' }}>·</span>
              I<span style={{ opacity: 0.5, margin: '0 0.15em' }}>·</span>
              D
            </div>
            <div
              className="tile-meta"
              style={{ color: 'var(--acc-lav-ink)', opacity: 0.7, fontSize: 12, marginTop: 8 }}
            >
              four primitives ~ one library
            </div>
          </div>
        </div>
      </Tile>

      {/* Code block — right column row 2 */}
      <Tile tone="code" pad={0}>
        <CodeBlock />
      </Tile>
    </Mosaic>
  )
}
