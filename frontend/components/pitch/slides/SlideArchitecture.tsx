import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'

export default function SlideArchitecture() {
  return (
    <Mosaic cols="1fr" rows="auto 1fr auto" style={{ height: '100%' }}>
      <Tile pad={32}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 15,
                color: 'var(--ink-mute)',
                marginBottom: 10,
                letterSpacing: '0.02em',
              }}
            >
              ¶ the architecture
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4.6vmin, 60px)',
                lineHeight: 0.98,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.015em',
                maxWidth: '28ch',
              }}
            >
              Four wrappers nest around your action — each layer hands off to a real primitive.
            </h2>
          </div>
          <Pill tone="ghost" mono>how it composes</Pill>
        </div>
      </Tile>

      <Tile pad={16}>
        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ArchDiagram />
        </div>
      </Tile>

      <Tile tone="ink" pad={20}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 18,
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(10px, 1.3vmin, 12px)',
              color: 'var(--code-mute)',
              letterSpacing: '0.1em',
            }}
          >
            ¶ DATA FLOW
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(13px, 1.9vmin, 19px)',
              color: 'var(--paper)',
              letterSpacing: '-0.005em',
            }}
          >
            action <span className="tilde">~</span> saga checkpoint <span className="tilde">~</span> invariant check <span className="tilde">~</span> idempotency claim <span className="tilde">~</span>{' '}
            <span style={{ color: 'var(--acc-butter)' }}>signed receipt to 0G Storage</span>
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(10px, 1.3vmin, 12px)',
              color: 'var(--code-mute)',
              letterSpacing: '0.08em',
              fontStyle: 'italic',
            }}
          >
            crash · resume · verify
          </span>
        </div>
      </Tile>
    </Mosaic>
  )
}

function ArchDiagram() {
  // Concentric rings around action(), each color-coded to ACID letter.
  // Right column: 0G primitives. Curved connector arrows show which wrapper hands off where.
  return (
    <svg
      viewBox="0 0 1100 620"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%', display: 'block' }}
      role="img"
      aria-label="Architecture diagram: receipted wraps invariant wraps idempotent wraps saga wraps action; receipted writes to 0G Storage; idempotent claims slots on 0G Chain; 0G Compute verifies receipt chains."
    >
      <defs>
        <marker id="arr-ink" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 11 6 L 0 12 Z" fill="var(--ink)" />
        </marker>
        <marker id="arr-mute" markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
          <path d="M 0 0 L 11 6 L 0 12 Z" fill="var(--ink)" opacity="0.55" />
        </marker>
        <pattern id="arch-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="var(--ink)" opacity="0.08" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="1100" height="620" fill="url(#arch-grid)" />

      {/* ── nested wrappers (left half) ───────────────────────────── */}

      {/* receipted — butter, outer ring (D) */}
      <rect x="40" y="80" width="500" height="480" fill="var(--acc-butter)" stroke="var(--ink)" strokeWidth="3" />
      <text x="60" y="60" fontFamily="var(--font-mono)" fontSize="26" fontWeight="600" fill="var(--ink)">
        receipted()
      </text>
      <text x="60" y="108" fontFamily="var(--font-mono)" fontSize="14" letterSpacing="0.14em" fill="var(--ink)" opacity="0.6">
        D · DURABILITY
      </text>

      {/* invariant — lavender (C) */}
      <rect x="100" y="148" width="380" height="380" fill="var(--acc-lavender)" stroke="var(--ink)" strokeWidth="3" />
      <text x="120" y="178" fontFamily="var(--font-mono)" fontSize="22" fontWeight="600" fill="var(--ink)">
        invariant()
      </text>
      <text x="120" y="200" fontFamily="var(--font-mono)" fontSize="13" letterSpacing="0.14em" fill="var(--ink)" opacity="0.6">
        C · CONSISTENCY
      </text>

      {/* idempotent — peach (I) */}
      <rect x="150" y="218" width="280" height="288" fill="var(--acc-peach)" stroke="var(--ink)" strokeWidth="3" />
      <text x="170" y="248" fontFamily="var(--font-mono)" fontSize="20" fontWeight="600" fill="var(--ink)">
        idempotent()
      </text>
      <text x="170" y="270" fontFamily="var(--font-mono)" fontSize="13" letterSpacing="0.14em" fill="var(--ink)" opacity="0.6">
        I · ISOLATION
      </text>

      {/* saga — sage (A) */}
      <rect x="190" y="288" width="200" height="200" fill="var(--acc-sage)" stroke="var(--ink)" strokeWidth="3" />
      <text x="210" y="318" fontFamily="var(--font-mono)" fontSize="18" fontWeight="600" fill="var(--ink)">
        saga()
      </text>
      <text x="210" y="338" fontFamily="var(--font-mono)" fontSize="12" letterSpacing="0.14em" fill="var(--ink)" opacity="0.6">
        A · ATOMICITY
      </text>

      {/* action() core */}
      <rect x="218" y="372" width="144" height="92" fill="var(--ink)" stroke="var(--ink)" strokeWidth="3" />
      <text x="290" y="408" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="22" fontWeight="600" fill="var(--paper)">
        action()
      </text>
      <text x="290" y="430" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" letterSpacing="0.2em" fill="var(--code-mute)">
        YOUR CODE
      </text>
      <text x="290" y="452" textAnchor="middle" fontFamily="var(--font-display)" fontStyle="italic" fontSize="13" fill="var(--paper)" opacity="0.65">
        signTransaction · swap · approve…
      </text>

      {/* small "wraps" arrows pointing inward, dotted */}
      <g stroke="var(--ink)" strokeWidth="1.8" fill="none" strokeDasharray="4 4" opacity="0.6">
        <path d="M 70 95 L 110 145" markerEnd="url(#arr-mute)" />
        <path d="M 130 165 L 160 215" markerEnd="url(#arr-mute)" />
        <path d="M 180 235 L 200 285" markerEnd="url(#arr-mute)" />
        <path d="M 220 305 L 240 365" markerEnd="url(#arr-mute)" />
      </g>

      <text x="70" y="594" fontFamily="var(--font-display)" fontStyle="italic" fontSize="16" fill="var(--ink-soft)">
        composition: receipted ∘ invariant ∘ idempotent ∘ saga (action)
      </text>

      {/* ── 0G primitives (right half) ────────────────────────────── */}

      {/* Storage — connected to receipted (butter accent) */}
      <g>
        <rect x="700" y="60" width="360" height="130" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
        <rect x="700" y="60" width="14" height="130" fill="var(--acc-butter)" stroke="var(--ink)" strokeWidth="2.5" />
        <text x="734" y="100" fontFamily="var(--font-display)" fontSize="36" fontWeight="400" letterSpacing="-0.01em" fill="var(--ink)">
          0G Storage
        </text>
        <text x="734" y="128" fontFamily="var(--font-display)" fontStyle="italic" fontSize="17" fill="var(--ink-soft)">
          chained · signed · merkle audit trail
        </text>
        <text x="734" y="172" fontFamily="var(--font-mono)" fontSize="13" letterSpacing="0.06em" fill="var(--ink-mute)">
          ⌑ receipt[n].prev = hash(receipt[n-1])
        </text>
      </g>
      {/* arrow: receipted → Storage (butter) */}
      <g>
        <path d="M 540 110 C 600 110, 640 110, 700 105" fill="none" stroke="var(--ink)" strokeWidth="2.6" markerEnd="url(#arr-ink)" />
        <circle cx="540" cy="110" r="5" fill="var(--ink)" />
        <text x="608" y="96" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--ink)" letterSpacing="0.04em">
          writes signed receipt
        </text>
      </g>

      {/* Chain — connected to idempotent (peach accent) */}
      <g>
        <rect x="700" y="240" width="360" height="130" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
        <rect x="700" y="240" width="14" height="130" fill="var(--acc-peach)" stroke="var(--ink)" strokeWidth="2.5" />
        <text x="734" y="280" fontFamily="var(--font-display)" fontSize="36" fontWeight="400" letterSpacing="-0.01em" fill="var(--ink)">
          0G Chain
        </text>
        <text x="734" y="308" fontFamily="var(--font-display)" fontStyle="italic" fontSize="17" fill="var(--ink-soft)">
          ReceiptRegistry · idempotency anchor
        </text>
        <text x="734" y="352" fontFamily="var(--font-mono)" fontSize="13" letterSpacing="0.06em" fill="var(--ink-mute)">
          ⌑ Galileo · chainId 16602
        </text>
      </g>
      {/* arrow: idempotent → Chain (lands in the gap between title and italic, mirroring the Storage arrow) */}
      <g>
        <path d="M 430 360 C 540 360, 620 320, 700 290" fill="none" stroke="var(--ink)" strokeWidth="2.6" markerEnd="url(#arr-ink)" />
        <circle cx="430" cy="360" r="5" fill="var(--ink)" />
        <text x="560" y="320" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="14" fill="var(--ink)" letterSpacing="0.04em">
          claims dedup slot
        </text>
      </g>

      {/* Compute — verifies storage post-hoc (lavender accent for verification) */}
      <g>
        <rect x="700" y="420" width="360" height="130" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
        <rect x="700" y="420" width="14" height="130" fill="var(--acc-lavender)" stroke="var(--ink)" strokeWidth="2.5" />
        <text x="734" y="460" fontFamily="var(--font-display)" fontSize="36" fontWeight="400" letterSpacing="-0.01em" fill="var(--ink)">
          0G Compute
        </text>
        <text x="734" y="488" fontFamily="var(--font-display)" fontStyle="italic" fontSize="17" fill="var(--ink-soft)">
          TEE verifier for receipt chains
        </text>
        <text x="734" y="532" fontFamily="var(--font-mono)" fontSize="13" letterSpacing="0.06em" fill="var(--ink-mute)">
          ⌑ replays · checks invariants · re-signs
        </text>
      </g>
      {/* dashed arrow: Storage ↓ Compute (verifies) */}
      <g>
        <path d="M 880 190 L 880 420" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="7 5" opacity="0.7" markerEnd="url(#arr-mute)" />
        <text x="892" y="312" fontFamily="var(--font-mono)" fontSize="14" fill="var(--ink-mute)" letterSpacing="0.04em">
          verifies
        </text>
      </g>

      {/* legend bottom-right */}
      <g transform="translate(700, 590)">
        <line x1="0" y1="0" x2="26" y2="0" stroke="var(--ink)" strokeWidth="2.4" markerEnd="url(#arr-ink)" />
        <text x="36" y="5" fontFamily="var(--font-mono)" fontSize="13" fill="var(--ink-mute)" letterSpacing="0.06em">
          live handoff
        </text>
        <line x1="180" y1="0" x2="206" y2="0" stroke="var(--ink)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" markerEnd="url(#arr-mute)" />
        <text x="216" y="5" fontFamily="var(--font-mono)" fontSize="13" fill="var(--ink-mute)" letterSpacing="0.06em">
          async verification
        </text>
      </g>

      {/* corner annotations like blueprint */}
      <g fontFamily="var(--font-mono)" fontSize="13" fill="var(--ink-mute)" letterSpacing="0.12em">
        <text x="1062" y="26" textAnchor="end" opacity="0.6">FIG · 01</text>
        <text x="38" y="26" opacity="0.6">¶ ARCHITECTURE</text>
      </g>
    </svg>
  )
}
