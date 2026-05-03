import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'
import Asterisk from '../../Asterisk'

const BUILDERS = [
  {
    name: 'Sairam X',
    handle: '@sairammr1',
    role: 'systems · primitives',
    accent: 'sage' as const,
  },
  {
    name: 'Romario Kavin',
    handle: '@romariokavin',
    role: 'protocol · agent',
    accent: 'lavender' as const,
  },
]

export default function SlideTeam() {
  return (
    <Mosaic cols="1fr 1fr" rows="auto 1fr auto" style={{ height: '100%' }}>
      {/* Header — close vibe */}
      <Tile pad={44} style={{ gridColumn: '1 / -1' }}>
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
              ¶ shipped by
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 6vmin, 88px)',
                lineHeight: 0.96,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                maxWidth: '20ch',
              }}
            >
              Two engineers. <span style={{ fontStyle: 'italic' }}>One</span> small library.
            </h2>
          </div>
          <Pill tone="ghost" mono>thanks</Pill>
        </div>
      </Tile>

      {/* Builder cards */}
      {BUILDERS.map((b) => (
        <Tile key={b.handle} pad={32} style={{ gridRow: 2, minHeight: 0 }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 'clamp(14px, 2vh, 24px)',
              minHeight: 0,
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                background: `var(--acc-${b.accent})`,
                position: 'relative',
                overflow: 'hidden',
                border: '2px solid var(--ink)',
              }}
              role="img"
              aria-label={`${b.name} portrait placeholder`}
            >
              <svg
                viewBox="0 0 200 150"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: '100%', height: '100%', display: 'block' }}
                aria-hidden
              >
                <defs>
                  <pattern id={`hatch-${b.accent}`} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="var(--ink)" strokeWidth="1" opacity="0.18" />
                  </pattern>
                </defs>
                <rect width="200" height="150" fill={`url(#hatch-${b.accent})`} />
                <circle cx="100" cy="62" r="22" fill="var(--ink)" opacity="0.85" />
                <path d="M 60 130 Q 100 92, 140 130 Z" fill="var(--ink)" opacity="0.85" />
                <text
                  x="100"
                  y="146"
                  textAnchor="middle"
                  fontFamily="var(--font-mono), monospace"
                  fontSize="7"
                  fill="var(--ink)"
                  opacity="0.5"
                  letterSpacing="0.2em"
                >
                  PORTRAIT · PLACEHOLDER
                </text>
              </svg>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(30px, 3.4vw, 48px)',
                  lineHeight: 1,
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                {b.name}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  color: 'var(--ink-mute)',
                  textTransform: 'uppercase',
                }}
              >
                {b.role}
              </div>
              <a
                href={`https://x.com/${b.handle.replace(/^@/, '')}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 14,
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                  borderBottom: '1px solid var(--ink-faint)',
                  paddingBottom: 1,
                }}
              >
                {b.handle} ↗
              </a>
            </div>
          </div>
        </Tile>
      ))}

      {/* Closing strip — install · github · ens · questions */}
      <Tile tone="ink" pad={36} style={{ gridColumn: '1 / -1', gridRow: 3 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Asterisk size={20} reverse />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(24px, 2.8vmin, 36px)',
                  color: 'var(--paper)',
                  letterSpacing: '-0.005em',
                  lineHeight: 1.1,
                }}
              >
                questions?
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--code-mute)',
                  marginTop: 4,
                  letterSpacing: '0.06em',
                }}
              >
                ETHGLOBAL · OPEN AGENTS · MMXXVI
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 28,
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              color: 'var(--code-fg)',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span>
              <span style={{ color: 'var(--code-mute)' }}>$</span> npm i @openacid/acid
            </span>
            <span style={{ color: 'var(--code-mute)' }}>~</span>
            <span>github.com/romariokavin1/acid</span>
            <span style={{ color: 'var(--code-mute)' }}>~</span>
            <span>openacid.eth</span>
          </div>
        </div>
      </Tile>
    </Mosaic>
  )
}
