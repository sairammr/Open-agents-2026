import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'

type Glyph = 'saga' | 'invariant' | 'idempotent' | 'receipted'

const ACID: {
  letter: string
  word: string
  tone: 'sage' | 'lavender' | 'peach' | 'butter'
  fn: string
  db: string
  body: string
  glyph: Glyph
}[] = [
  {
    letter: 'A',
    word: 'Atomicity',
    tone: 'sage',
    fn: 'saga()',
    db: 'transaction log · 2PC',
    body: 'multi-step actions either fully commit or roll back via compensating txs.',
    glyph: 'saga',
  },
  {
    letter: 'C',
    word: 'Consistency',
    tone: 'lavender',
    fn: 'invariant()',
    db: 'schema constraints',
    body: 'predicates enforced at action boundaries — pre and post.',
    glyph: 'invariant',
  },
  {
    letter: 'I',
    word: 'Isolation',
    tone: 'peach',
    fn: 'idempotent()',
    db: 'locking · MVCC',
    body: 'in-flight tracking, dedup, no interleaving across concurrent calls.',
    glyph: 'idempotent',
  },
  {
    letter: 'D',
    word: 'Durability',
    tone: 'butter',
    fn: 'receipted()',
    db: 'WAL · fsync · replication',
    body: 'signed chained receipts, persisted in 0G Storage, crash-recoverable.',
    glyph: 'receipted',
  },
]

function FnGlyph({ name }: { name: Glyph }) {
  const stroke = 'var(--ink)'
  const sw = 2
  const common = {
    width: 96,
    height: 96,
    viewBox: '0 0 60 60',
    fill: 'none' as const,
    stroke,
    strokeWidth: sw,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  if (name === 'saga') {
    return (
      <svg {...common} aria-hidden>
        <line x1="8" y1="20" x2="52" y2="20" />
        <circle cx="14" cy="20" r="3" fill="var(--ink)" />
        <circle cx="26" cy="20" r="3" fill="var(--ink)" />
        <circle cx="38" cy="20" r="3" fill="var(--ink)" />
        <circle cx="50" cy="20" r="3" fill="none" strokeDasharray="2 2" />
        <path d="M 50 28 Q 30 50, 8 30" />
        <path d="M 11 32 L 8 30 L 11 27" />
      </svg>
    )
  }

  if (name === 'invariant') {
    return (
      <svg {...common} aria-hidden>
        <line x1="8" y1="14" x2="52" y2="14" />
        <line x1="8" y1="46" x2="52" y2="46" />
        <path d="M 18 30 L 26 38 L 44 22" />
        <line x1="8" y1="14" x2="8" y2="46" strokeDasharray="2 3" />
        <line x1="52" y1="14" x2="52" y2="46" strokeDasharray="2 3" />
      </svg>
    )
  }

  if (name === 'idempotent') {
    return (
      <svg {...common} aria-hidden>
        <path d="M 8 14 Q 22 14, 30 30" />
        <path d="M 8 46 Q 22 46, 30 30" />
        <line x1="30" y1="30" x2="50" y2="30" />
        <path d="M 47 27 L 50 30 L 47 33" />
        <circle cx="8" cy="14" r="2.5" fill="var(--ink)" />
        <circle cx="8" cy="46" r="2.5" fill="var(--ink)" />
      </svg>
    )
  }

  // receipted
  return (
    <svg {...common} aria-hidden>
      <rect x="10" y="10" width="32" height="40" />
      <rect x="14" y="14" width="32" height="40" fill="var(--paper)" />
      <line x1="20" y1="24" x2="40" y2="24" />
      <line x1="20" y1="32" x2="40" y2="32" />
      <line x1="20" y1="40" x2="34" y2="40" />
      <circle cx="44" cy="46" r="6" fill="var(--ink)" />
      <path d="M 41 46 L 43.5 48.5 L 47 44.5" stroke="var(--paper)" strokeWidth="1.4" />
    </svg>
  )
}

export default function SlideSolution() {
  return (
    <Mosaic cols="1fr 1fr 1fr 1fr" rows="auto auto 1fr" style={{ height: '100%' }}>
      <Tile brand="openacid" pad={40} style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, gap: 24 }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 16,
              color: 'var(--ink-mute)',
              letterSpacing: '0.02em',
            }}
          >
            ¶ the four functions your agent was missing
          </div>
          <Pill tone="ghost" mono>four functions</Pill>
        </div>
      </Tile>

      <Tile pad={48} style={{ gridColumn: '1 / -1' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 6vw, 96px)',
            lineHeight: 0.98,
            margin: 0,
            fontWeight: 400,
            letterSpacing: '-0.02em',
            maxWidth: '26ch',
          }}
        >
          Durable execution for AI agents that hold <span style={{ fontStyle: 'italic' }}>real money</span>.
        </h2>
        <div
          style={{
            display: 'flex',
            gap: 36,
            marginTop: 28,
            fontFamily: 'var(--font-mono)',
            fontSize: 15,
            color: 'var(--ink-mute)',
            flexWrap: 'wrap',
          }}
        >
          <span>npm i @openacid/acid</span>
          <span>~</span>
          <span>4 primitives · 1 nested call</span>
          <span>~</span>
          <span>0G Storage · viem · ENS</span>
        </div>
      </Tile>

      {ACID.map((a) => (
        <Tile
          key={a.letter}
          tone={a.tone}
          pad={28}
          corner={<FnGlyph name={a.glyph} />}
          cornerPos="tr"
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 18,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(96px, 9.5vw, 156px)',
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
              }}
            >
              {a.letter}
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 26,
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                {a.word}
              </div>
              <code
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  background: 'rgba(0,0,0,0.08)',
                  padding: '3px 10px',
                  borderRadius: 4,
                }}
              >
                {a.fn}
              </code>
            </div>

            <div className="rule" style={{ opacity: 0.3 }} />

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                lineHeight: 1.4,
                opacity: 0.9,
              }}
            >
              {a.body}
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.06em',
                opacity: 0.7,
              }}
            >
              postgres: {a.db}
            </span>
          </div>
        </Tile>
      ))}
    </Mosaic>
  )
}
