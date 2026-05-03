import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'
import KillNineDemo from '../../KillNineDemo'

export default function SlideDemo() {
  return (
    <Mosaic cols="1fr 1.5fr" rows="auto 1fr" style={{ height: '100%' }}>
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
              ¶ durability · receipted() reconciles via 0G Storage + chain query
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 5.6vw, 88px)',
                lineHeight: 0.96,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                maxWidth: '24ch',
              }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72em', verticalAlign: '0.05em' }}>kill -9</span> the agent. <span style={{ fontStyle: 'italic' }}>It heals.</span>
            </h2>
          </div>
          <Pill tone="ghost" mono>the proof</Pill>
        </div>
      </Tile>

      <Tile vlabel="proof" pad={40} style={{ gridRow: 2 }}>
        <div
          style={{
            paddingLeft: 28,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              counterReset: 'demo',
            }}
          >
            {[
              { k: 'agent observes', v: '60/40 ETH/USDC drift > 5%' },
              { k: 'saga begins',   v: 'approve → swap submitted to Base' },
              { k: 'kill -9',       v: 'mid-broadcast · pid 12871 · gone' },
              { k: 'restart',       v: 'receipted() reads 0G Storage' },
              { k: 'reconcile',     v: 'chain query → tx already mined' },
              { k: 'finish',        v: 'no re-broadcast · five txs, exactly five' },
            ].map((s, i) => (
              <li key={s.k} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    color: 'var(--ink-mute)',
                    letterSpacing: '0.06em',
                    width: 26,
                    flexShrink: 0,
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 20,
                      lineHeight: 1.3,
                      color: 'var(--ink)',
                    }}
                  >
                    {s.k}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 13,
                      color: 'var(--ink-mute)',
                      marginTop: 3,
                    }}
                  >
                    {s.v}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--acc-peach-ink)',
              borderLeft: '3px solid var(--acc-peach)',
              paddingLeft: 16,
              lineHeight: 1.4,
            }}
          >
            zero double-spend. zero orphan allowances. zero panic at 3am.
          </div>
        </div>
      </Tile>

      <Tile tone="code" pad={0} style={{ gridRow: 2, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 18,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--code-mute)',
            letterSpacing: '0.06em',
            zIndex: 2,
          }}
        >
          ~/agent · live
        </div>
        <KillNineDemo />
      </Tile>
    </Mosaic>
  )
}
