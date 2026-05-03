import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'

const BUILDERS = [
  {
    name: 'Sairam X',
    handle: '@sairammr1',
    accent: 'sage' as const,
  },
  {
    name: 'Romario Kavin',
    handle: '@romariokavin',
    accent: 'lavender' as const,
  },
]

export default function SlideTeam() {
  return (
    <Mosaic cols="1fr 1fr" rows="auto 1fr" style={{ height: '100%' }}>
      <Tile pad={48} style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div>
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
              ¶ the builders
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5.6vmin, 72px)',
                lineHeight: 0.98,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.015em',
                maxWidth: '20ch',
              }}
            >
              Two engineers shipping <span style={{ fontStyle: 'italic' }}>one</span> small library.
            </h2>
          </div>
          <Pill tone="ghost" mono>team of two</Pill>
        </div>
      </Tile>

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

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(34px, 3.6vw, 52px)',
                  lineHeight: 1,
                  margin: 0,
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}
              >
                {b.name}
              </h3>
              <a
                href={`https://x.com/${b.handle.replace(/^@/, '')}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  color: 'var(--ink-mute)',
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  alignSelf: 'flex-start',
                }}
              >
                {b.handle}
              </a>
            </div>
          </div>
        </Tile>
      ))}
    </Mosaic>
  )
}
