import Mosaic from '../Mosaic'
import Tile from '../Tile'
import Pill from '../Pill'
import KillNineDemo from '../KillNineDemo'

export default function ProofSection() {
  return (
    <Mosaic cols="1fr 1.2fr" rows="auto">
      {/* Left: editorial copy tile */}
      <Tile pad={40} vlabel="proof · kill -9" vlabelSide="left">
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: 28,
            gap: 36,
          }}
        >
          <div>
            <div className="it" style={{ fontSize: 14, marginBottom: 10 }}>
              Proof <span className="tilde">~</span> not a promise
            </div>
            <h2 className="tile-title" style={{ fontSize: 'clamp(40px, 4.4vw, 64px)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7em', letterSpacing: 0 }}>kill -9</span> the agent.<br />
              It restarts.<br />
              It does <em>not</em> double‑spend.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 16,
                lineHeight: 1.55,
                color: 'var(--ink-soft)',
                maxWidth: 420,
              }}
            >
              Every step inside <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>receipted()</code> is signed, persisted to 0G Storage, and mirrored to <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14 }}>openacid.eth</code>. On restart, the wrapper reconciles via chain query and skips anything already mined.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--ink-mute)',
                marginTop: 16,
                lineHeight: 1.6,
                letterSpacing: '0.02em',
              }}
            >
              <div>
                <span style={{ color: 'var(--ink-faint)' }}>$</span> cast call <span style={{ color: 'var(--ink)' }}>openacid.eth</span> &quot;text(...,&apos;receipt.latest&apos;)&quot;
              </div>
              <div style={{ opacity: 0.7 }}>// no library install · any ENS resolver</div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 18, flexWrap: 'wrap' }}>
              <Pill tone="lavender">crash-safe</Pill>
              <Pill tone="sage">idempotent</Pill>
              <Pill tone="peach">117 vitest · 8 forge</Pill>
              <Pill tone="butter">signed log</Pill>
            </div>
          </div>
        </div>
      </Tile>

      {/* Right: live terminal tile */}
      <Tile
        tone="code"
        pad={0}
        style={{ minHeight: 380 }}
        corner={<Pill tone="solid">live demo</Pill>}
      >
        <KillNineDemo />
      </Tile>
    </Mosaic>
  )
}
