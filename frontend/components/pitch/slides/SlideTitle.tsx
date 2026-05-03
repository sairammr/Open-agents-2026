import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Asterisk from '../../Asterisk'

export default function SlideTitle() {
  return (
    <Mosaic cols="1fr" rows="1fr auto" style={{ height: '100%' }}>
      <Tile pad={44}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 'clamp(16px, 2vh, 28px)',
            minHeight: 0,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Asterisk size={22} />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 16,
                  color: 'var(--ink-mute)',
                  letterSpacing: '0.02em',
                }}
              >
                Atomicity <span className="tilde">~</span> Consistency <span className="tilde">~</span> Isolation <span className="tilde">~</span> Durability
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--ink-mute)',
                letterSpacing: '0.08em',
              }}
            >
              ETHGLOBAL · OPEN AGENTS · MMXXVI
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
              alignItems: 'flex-start',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(96px, 22vmin, 224px)',
                lineHeight: 0.86,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.04em',
              }}
            >
              <span style={{ color: 'var(--ink-mute)' }}>open</span>acid
            </h1>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4.4vmin, 52px)',
                lineHeight: 0.92,
                color: 'var(--ink-soft)',
                letterSpacing: '0.02em',
                display: 'flex',
                gap: 'clamp(16px, 2.4vmin, 32px)',
                alignItems: 'baseline',
                flexWrap: 'wrap',
              }}
            >
              {['atomic', 'consistent', 'isolated', 'durable'].map((w, i) => (
                <span key={w} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 'clamp(16px, 2.4vmin, 32px)' }}>
                  <span style={{ fontStyle: 'italic' }}>
                    <span style={{ color: 'var(--ink)' }}>{w[0]}</span>
                    <span style={{ color: 'var(--ink-mute)' }}>{w.slice(1)}</span>
                  </span>
                  {i < 3 && <span style={{ color: 'var(--ink-faint)' }}>·</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="rule" />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(16px, 2.4vmin, 26px)',
                lineHeight: 1.3,
                color: 'var(--ink-soft)',
                margin: 0,
                maxWidth: '36ch',
              }}
            >
              Postgres taught your backend ACID semantics.
              <br />
              <span style={{ fontStyle: 'normal', color: 'var(--ink)' }}>openacid</span> teaches your agents.
            </p>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--ink-mute)',
                lineHeight: 1.7,
                textAlign: 'right',
              }}
            >
              <div>npm i openacid</div>
              <div style={{ opacity: 0.7 }}>github.com/openacid</div>
            </div>
          </div>
        </div>
      </Tile>

      <Tile tone="ink" pad={28}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--code-mute)',
              letterSpacing: '0.1em',
            }}
          >
            ¶ DURABLE EXECUTION FOR AI AGENTS THAT HOLD REAL MONEY
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 16,
              color: 'var(--paper)',
              opacity: 0.75,
            }}
          >
            press → to begin
          </span>
        </div>
      </Tile>
    </Mosaic>
  )
}
