import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'
import Asterisk from '../../Asterisk'

function DoubleTxGlyph() {
  return (
    <svg
      viewBox="0 0 220 120"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', maxWidth: 240, height: 'auto', display: 'block' }}
      fill="none"
      aria-hidden
    >
      <rect x="6" y="8" width="140" height="46" stroke="var(--acc-peach-ink)" strokeWidth="2" fill="var(--acc-peach)" />
      <rect x="32" y="34" width="140" height="46" stroke="var(--acc-peach-ink)" strokeWidth="2" fill="var(--acc-peach)" />
      <text x="14" y="28" fontFamily="var(--font-mono)" fontSize="11" fill="var(--acc-peach-ink)" letterSpacing="0.06em">
        TX 0x..a3f
      </text>
      <text x="14" y="46" fontFamily="var(--font-mono)" fontSize="9" fill="var(--acc-peach-ink)" opacity="0.7" letterSpacing="0.06em">
        nonce 42 · 0.4 ETH
      </text>
      <text x="40" y="54" fontFamily="var(--font-mono)" fontSize="11" fill="var(--acc-peach-ink)" letterSpacing="0.06em">
        TX 0x..a3f
      </text>
      <text x="40" y="72" fontFamily="var(--font-mono)" fontSize="9" fill="var(--acc-peach-ink)" opacity="0.7" letterSpacing="0.06em">
        nonce 42 · 0.4 ETH
      </text>
      <line x1="158" y1="20" x2="190" y2="34" stroke="var(--acc-peach-ink)" strokeWidth="2" />
      <line x1="178" y1="46" x2="190" y2="34" stroke="var(--acc-peach-ink)" strokeWidth="2" />
      <line x1="184" y1="42" x2="196" y2="32" stroke="var(--acc-peach-ink)" strokeWidth="1.4" />
      <line x1="184" y1="38" x2="200" y2="34" stroke="var(--acc-peach-ink)" strokeWidth="1.4" />
      <text
        x="110"
        y="106"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="0.22em"
        fill="var(--acc-peach-ink)"
      >
        ◢ DUPLICATE BROADCAST
      </text>
    </svg>
  )
}

export default function SlideHook() {
  return (
    <Mosaic cols="1.6fr 1fr" rows="auto 1fr auto" style={{ height: '100%' }}>
      <Tile brand="openacid" pad={48} style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 22 }}>
          <span className="it" style={{ fontSize: 15, color: 'var(--ink-mute)' }}>
            ¶ a recurring bug class with no productized solution
          </span>
          <Pill tone="ghost" mono>the bug</Pill>
        </div>
      </Tile>

      <Tile pad={56} style={{ gridRow: '2 / 4' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 28,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 17,
              color: 'var(--ink-mute)',
              letterSpacing: '0.02em',
            }}
          >
            $ kill <span style={{ color: 'var(--acc-peach-ink)' }}>-9</span> agent <span className="tilde">~</span> wallet keeps spending
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px, 8.5vmin, 108px)',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              margin: 0,
              fontWeight: 400,
            }}
          >
            Your AI agent
            <br />
            just <span style={{ fontStyle: 'italic', color: 'var(--acc-peach-ink)' }}>double-spent</span>.
            <br />
            <span style={{ color: 'var(--ink-mute)' }}>Again.</span>
          </h1>

          <div className="rule" style={{ margin: '4px 0' }} />

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(15px, 2.2vmin, 22px)',
              lineHeight: 1.35,
              color: 'var(--ink-soft)',
              maxWidth: '34ch',
              margin: 0,
            }}
          >
            Process crashes mid-broadcast. Two retries race the same nonce. The planner re-emits a tool call. Step 3 fails after step 1 mined.
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--ink)' }}>Every team running on-chain agents has hit at least three.</span>
          </p>
        </div>
      </Tile>

      <Tile tone="peach" pad={36}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span className="it" style={{ color: 'var(--acc-peach-ink)', fontSize: 14, letterSpacing: '0.06em', opacity: 0.75 }}>
              ¶ the cost
            </span>
            <DoubleTxGlyph />
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(40px, 6vmin, 80px)',
                lineHeight: 0.9,
                color: 'var(--acc-peach-ink)',
                letterSpacing: '-0.015em',
              }}
            >
              2× gas
              <br />
              <span style={{ fontStyle: 'italic' }}>2× slip</span>
            </div>
            <div
              className="tile-meta"
              style={{ color: 'var(--acc-peach-ink)', opacity: 0.8, fontSize: 16, marginTop: 16, lineHeight: 1.4 }}
            >
              over-rotated portfolio. standing approvals. silent invariant breaks.
            </div>
          </div>
        </div>
      </Tile>

      <Tile tone="ink" pad={36}>
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
            <Asterisk size={14} reverse />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--code-mute)', letterSpacing: '0.1em' }}>
              ETH · BASE · UNICHAIN · 0G
            </span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(14px, 2.1vmin, 19px)',
              lineHeight: 1.35,
              color: 'var(--paper)',
            }}
          >
            They quietly fix it with <span style={{ color: 'var(--acc-butter)' }}>Redis locks that don&rsquo;t survive restart</span>, hash-of-args caches, and &ldquo;fingers crossed&rdquo; exception handlers.
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--code-mute)', letterSpacing: '0.08em' }}>
            // nobody has shipped the obvious shared library
          </span>
        </div>
      </Tile>
    </Mosaic>
  )
}
