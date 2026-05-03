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
              ¶ five scripted scenes · real <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>@openacid/*</code> symbols · no mocks
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

      <Tile vlabel="3 min · two commands" pad={40} style={{ gridRow: 2 }}>
        <div
          style={{
            paddingLeft: 28,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 22,
          }}
        >
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}
          >
            {[
              { t: '0:00', tag: 'A', cmd: 'demo:a',    k: 'saga rollback',       v: 'step 2 throws → compensations run in reverse' },
              { t: '0:50', tag: 'C', cmd: 'demo:c',    k: 'invariant violation', v: 'noOrphanAllowances rejects mechanical "success"' },
              { t: '1:25', tag: 'I', cmd: 'demo:i',    k: 'idempotent dedup',    v: 'two concurrent calls · one execution · one receipt' },
              { t: '1:55', tag: 'D', cmd: 'demo:d',    k: 'kill -9 + reconcile', v: 'restart reads 0G · signature still verifies' },
              { t: '2:25', tag: '~', cmd: 'demo:live', k: 'live tick',           v: 'real V4 → 0G blob → openacid.eth resolver returns the callId' },
            ].map((s) => (
              <li key={s.tag} style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--ink-mute)',
                    letterSpacing: '0.04em',
                    width: 36,
                    flexShrink: 0,
                  }}
                >
                  {s.t}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 22,
                    color: 'var(--ink-mute)',
                    width: 22,
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {s.tag}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 10,
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 19,
                        lineHeight: 1.3,
                        color: 'var(--ink)',
                      }}
                    >
                      {s.k}
                    </span>
                    <code
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: 'var(--ink-mute)',
                        background: 'rgba(0,0,0,0.05)',
                        padding: '2px 8px',
                        borderRadius: 3,
                        letterSpacing: '0.02em',
                      }}
                    >
                      {s.cmd}
                    </code>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
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
              fontSize: 21,
              color: 'var(--acc-peach-ink)',
              borderLeft: '3px solid var(--acc-peach)',
              paddingLeft: 16,
              lineHeight: 1.4,
            }}
          >
            real RPC. real wallet. real V4 swap.
            <br />
            <span style={{ fontStyle: 'normal', color: 'var(--ink)' }}>capped at 0.001 ETH · so a tick can&rsquo;t drain the wallet.</span>
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
