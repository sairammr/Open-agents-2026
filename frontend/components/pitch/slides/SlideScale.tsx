import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'

function GrowthCurve() {
  return (
    <svg
      viewBox="0 0 320 140"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', maxWidth: 320, height: 'auto', display: 'block' }}
      fill="none"
      aria-hidden
    >
      <line x1="10" y1="124" x2="310" y2="124" stroke="var(--acc-lav-ink)" strokeWidth="1.2" opacity="0.4" />
      <line x1="10" y1="14" x2="10" y2="124" stroke="var(--acc-lav-ink)" strokeWidth="1.2" opacity="0.4" />
      {[28, 60, 92, 124, 156, 188, 220, 252, 284].map((x, i) => {
        const h = Math.min(108, Math.pow(i + 1, 1.65) * 3.6)
        return (
          <line
            key={x}
            x1={x}
            y1="124"
            x2={x}
            y2={124 - h}
            stroke="var(--acc-lav-ink)"
            strokeWidth="10"
            opacity={0.4 + i * 0.06}
          />
        )
      })}
      <path
        d="M 10 118 Q 90 114, 160 80 T 310 14"
        stroke="var(--acc-lav-ink)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.9"
      />
      <text x="14" y="26" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.12em" fill="var(--acc-lav-ink)" opacity="0.8">
        AGENTS · TVL
      </text>
      <text x="306" y="120" textAnchor="end" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.12em" fill="var(--acc-lav-ink)" opacity="0.8">
        +18mo
      </text>
      <circle cx="310" cy="14" r="4" fill="var(--acc-lav-ink)" />
    </svg>
  )
}

export default function SlideScale() {
  return (
    <Mosaic cols="1fr 1fr 1fr" rows="auto 1fr 1fr" style={{ height: '100%' }}>
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
              ¶ the next eighteen months
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 5.6vw, 84px)',
                lineHeight: 0.98,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.015em',
                maxWidth: '24ch',
              }}
            >
              The category-defining primitive every agent installs on <span style={{ fontStyle: 'italic' }}>day one</span>.
            </h2>
          </div>
          <Pill tone="ghost" mono>why now</Pill>
        </div>
      </Tile>

      <Tile tone="lavender" pad={32} style={{ gridRow: '2 / 4' }}>
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
            <span className="it" style={{ color: 'var(--acc-lav-ink)', fontSize: 14, letterSpacing: '0.06em', opacity: 0.75 }}>
              ¶ the wave
            </span>
            <GrowthCurve />
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(88px, 9vw, 152px)',
                lineHeight: 0.88,
                color: 'var(--acc-lav-ink)',
                letterSpacing: '-0.025em',
              }}
            >
              10–100×
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 22,
                color: 'var(--acc-lav-ink)',
                opacity: 0.88,
                marginTop: 14,
                lineHeight: 1.35,
              }}
            >
              increase in agents holding non-trivial value over the next 18 months.
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--acc-lav-ink)',
              opacity: 0.75,
              letterSpacing: '0.08em',
              borderTop: '1px solid var(--acc-lav-ink)',
              paddingTop: 14,
            }}
          >
            EIP-7702 · iNFT (ERC-7857) · CDP server wallets
          </div>
        </div>
      </Tile>

      <Tile tone="sage" pad={32}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span className="it" style={{ color: 'var(--acc-sage-ink)', fontSize: 14, letterSpacing: '0.06em', opacity: 0.75 }}>
            today · shipped
          </span>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(56px, 5.6vw, 88px)',
                lineHeight: 0.9,
                color: 'var(--acc-sage-ink)',
                letterSpacing: '-0.015em',
              }}
            >
              5 packages
            </div>
            <div
              className="tile-meta"
              style={{ color: 'var(--acc-sage-ink)', opacity: 0.85, marginTop: 10, fontSize: 15, lineHeight: 1.5 }}
            >
              @openacid/* · 4 versions on npm
              <br />
              117 vitest (10 live on 0G) · 8 forge
              <br />
              ReceiptRegistry on Galileo · openacid.eth on Sepolia
            </div>
          </div>
        </div>
      </Tile>

      <Tile tone="butter" pad={32}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span className="it" style={{ color: 'var(--acc-butter-ink)', fontSize: 14, letterSpacing: '0.06em', opacity: 0.75 }}>
            tomorrow
          </span>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(56px, 5.6vw, 88px)',
                lineHeight: 0.9,
                color: 'var(--acc-butter-ink)',
                letterSpacing: '-0.015em',
              }}
            >
              10,000 agents
            </div>
            <div
              className="tile-meta"
              style={{ color: 'var(--acc-butter-ink)', opacity: 0.8, marginTop: 10, fontSize: 16, lineHeight: 1.4 }}
            >
              each holding $10M · zero lost-tx incidents
            </div>
          </div>
        </div>
      </Tile>

      <Tile tone="peach" pad={32}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span className="it" style={{ color: 'var(--acc-peach-ink)', fontSize: 14, letterSpacing: '0.06em', opacity: 0.75 }}>
            why we win
          </span>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 26,
                lineHeight: 1.3,
                color: 'var(--acc-peach-ink)',
                fontStyle: 'italic',
              }}
            >
              No competitor has claimed the &ldquo;Stripe-style durability primitive for agents&rdquo; mental real estate.
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--acc-peach-ink)', opacity: 0.75, letterSpacing: '0.06em' }}>
            // the boring, foundational layer
          </span>
        </div>
      </Tile>

      <Tile tone="ink" pad={32}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--code-mute)', letterSpacing: '0.1em' }}>
            ¶ architecture
          </span>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--paper)', lineHeight: 1.3 }}>
              one library · four primitives · <span style={{ fontStyle: 'italic' }}>pluggable adapters</span>.
            </div>
            <div
              style={{
                marginTop: 16,
                fontFamily: 'var(--font-mono)',
                fontSize: 14,
                color: 'var(--code-fg)',
                lineHeight: 1.75,
              }}
            >
              <div><span style={{ color: 'var(--code-key)' }}>storage</span> → 0G · redis · memory</div>
              <div><span style={{ color: 'var(--code-key)' }}>chain</span>   → viem · ethers · solana</div>
              <div><span style={{ color: 'var(--code-key)' }}>signer</span>  → ens · CDP · LIT</div>
            </div>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--code-mute)', letterSpacing: '0.08em' }}>
            // not a workflow engine. a library.
          </span>
        </div>
      </Tile>
    </Mosaic>
  )
}
