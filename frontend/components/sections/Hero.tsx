import Mosaic from '../Mosaic'
import Tile from '../Tile'
import IconButton from '../IconButton'
import Doodle from '../Doodle'
import CodeBlock from '../CodeBlock'
import InstallCommand from '../InstallCommand'

export default function Hero() {
  return (
    <Mosaic cols="1.4fr 1fr 1fr" rows="auto auto">
      {/* Big editorial headline tile */}
      <Tile
        brand="acid"
        corner={<IconButton icon="arrow-up" size="sm" />}
        style={{ gridRow: 'span 2', minHeight: 580 }}
        pad={36}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 32,
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 16,
                color: 'var(--ink-mute)',
                marginBottom: 22,
              }}
            >
              Atomicity <span className="tilde">~</span> Consistency <span className="tilde">~</span> Isolation <span className="tilde">~</span> Durability
            </div>
            <h1 className="tile-title" style={{ fontSize: 'clamp(40px, 4.6vw, 68px)', lineHeight: 1 }}>
              The four<br />functions<br />your agent<br />was missing.
            </h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 17,
                lineHeight: 1.5,
                color: 'var(--ink-soft)',
                maxWidth: 420,
                margin: 0,
              }}
            >
              Wrap your agent action in four nested primitives. It becomes crash‑safe, dedup'd, invariant‑enforced, and signs its own audit trail. <em>That's it.</em>
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <InstallCommand />
              <button className="btn ghost">Read the docs</button>
            </div>
          </div>
        </div>
      </Tile>

      {/* Top-right: hero number tile */}
      <Tile
        tone="lavender"
        vlabel="crash-safe by default"
        vlabelSide="right"
        corner={<IconButton icon="arrow-right" size="sm" />}
        pad={28}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingRight: 20,
          }}
        >
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span className="pill" style={{ background: 'var(--acc-lav-ink)', color: 'var(--acc-lavender)' }}>v 2.1</span>
            <span className="it" style={{ fontSize: 13, color: 'var(--acc-lav-ink)', opacity: 0.7 }}>just shipped</span>
          </div>
          <div>
            <div className="bignum" style={{ fontSize: 'clamp(64px, 7vw, 108px)', color: 'var(--acc-lav-ink)' }}>
              4<span style={{ fontStyle: 'italic', opacity: 0.55 }}>↑</span>
            </div>
            <div className="tile-meta" style={{ color: 'var(--acc-lav-ink)', opacity: 0.75 }}>
              primitives ~ one library
            </div>
          </div>
        </div>
      </Tile>

      {/* Right column row 1 right: doodle tile */}
      <Tile
        tone="peach"
        pad={0}
        corner={<IconButton icon="arrow-right" size="sm" />}
        style={{ display: 'flex' }}
      >
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 14,
            padding: 24,
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <Doodle name="seeds"  tone="sage"     size={56} />
          <Doodle name="lemon"  tone="butter"   size={56} />
          <Doodle name="leaf"   tone="lavender" size={56} />
          <Doodle name="bubble" tone="peach"    size={56} />
        </div>
      </Tile>

      {/* Bottom-right large tile: code block (spans both right columns) */}
      <Tile tone="code" pad={0} style={{ gridColumn: 'span 2', minHeight: 280 }}>
        <CodeBlock />
      </Tile>
    </Mosaic>
  )
}
