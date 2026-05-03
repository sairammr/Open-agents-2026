import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'
import CodeBlock from '../../CodeBlock'

export default function SlideCode() {
  return (
    <Mosaic cols="1fr 1.4fr" rows="auto 1fr" style={{ height: '100%' }}>
      <Tile pad={40} style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 16,
                color: 'var(--ink-mute)',
                marginBottom: 14,
                letterSpacing: '0.02em',
              }}
            >
              ¶ multi-step Uniswap V4 rebalance · 60/40 ETH/USDC on Base
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(44px, 4.8vw, 72px)',
                lineHeight: 0.98,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.015em',
                maxWidth: '22ch',
              }}
            >
              Four primitives. <span style={{ fontStyle: 'italic' }}>One</span> nested call.
            </h2>
          </div>
          <Pill tone="ghost" mono>the api</Pill>
        </div>
      </Tile>

      <Tile pad={40} style={{ gridRow: 2 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 22 }}>
          <div>
            <span className="it" style={{ fontSize: 13, letterSpacing: '0.06em' }}>
              ¶ key insight
            </span>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 26,
                lineHeight: 1.4,
                color: 'var(--ink-soft)',
                margin: '14px 0 0',
              }}
            >
              Higher-order functions that wrap functions and return functions. They <span style={{ fontStyle: 'italic' }}>compose freely</span>.
            </p>
          </div>

          <div className="rule" />

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {[
              ['receipted', 'outermost — every call gets a signed receipt, including failures'],
              ['invariant', 'pre/post predicates fire at action boundaries'],
              ['idempotent', 'in-flight tracking + chain-aware dedup'],
              ['saga', 'approve → swap → stake, compensations in reverse'],
            ].map(([fn, body]) => (
              <li key={fn} style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <code
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 14,
                    background: 'var(--paper)',
                    padding: '4px 12px',
                    borderRadius: 4,
                    minWidth: 116,
                    textAlign: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {fn}()
                </code>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 17,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.4,
                  }}
                >
                  {body}
                </span>
              </li>
            ))}
          </ul>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--ink-mute)',
              letterSpacing: '0.04em',
              borderTop: '1px solid var(--ink-faint)',
              paddingTop: 14,
            }}
          >
            // composition order matters · validated at construction
          </div>
        </div>
      </Tile>

      <Tile tone="code" pad={0} style={{ gridRow: 2 }}>
        <CodeBlock />
      </Tile>
    </Mosaic>
  )
}
