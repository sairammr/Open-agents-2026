import Mosaic from '../Mosaic'
import Tile from '../Tile'
import CopyableCode from '../CopyableCode'
import { PACKAGES } from '@/lib/openacid'

const accentToInk: Record<string, string> = {
  sage: 'var(--acc-sage-ink)',
  lavender: 'var(--acc-lav-ink)',
  peach: 'var(--acc-peach-ink)',
  butter: 'var(--acc-butter-ink)',
}

export default function PackageGrid() {
  return (
    <Mosaic cols="1fr 1fr" rows="auto">
      {PACKAGES.map((p) => (
        <Tile key={p.name} tone={p.accent} pad={32}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              color: accentToInk[p.accent],
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 13,
                  letterSpacing: '0.04em',
                  opacity: 0.7,
                }}
              >
                ¶ {p.title}
              </span>
              <span
                className="pill mono"
                style={{
                  background: 'rgba(0,0,0,0.08)',
                  color: 'currentColor',
                  fontSize: 11,
                  border: '1px solid currentColor',
                }}
              >
                v{p.versions[p.versions.length - 1]}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 20,
                lineHeight: 1.2,
                margin: 0,
                fontWeight: 600,
                wordBreak: 'break-all',
              }}
            >
              {p.name}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14,
                lineHeight: 1.5,
                margin: 0,
                opacity: 0.92,
              }}
            >
              {p.description}
            </p>

            <CopyableCode code={p.install} />

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                opacity: 0.75,
                letterSpacing: '0.02em',
                lineHeight: 1.6,
                borderTop: '1px solid currentColor',
                paddingTop: 10,
              }}
            >
              <div style={{ marginBottom: 4, opacity: 0.6 }}>exports</div>
              {p.exports.map((e) => (
                <div key={e}>· {e}</div>
              ))}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                opacity: 0.7,
                letterSpacing: '0.04em',
              }}
            >
              versions: {p.versions.join(' · ')}
            </div>

            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 'auto' }}>
              <a
                href={p.npm}
                target="_blank"
                rel="noreferrer"
                className="pill ghost mono"
                style={{
                  color: 'currentColor',
                  borderColor: 'currentColor',
                  fontSize: 11,
                  textDecoration: 'none',
                }}
              >
                npm ↗
              </a>
              <span
                className="pill mono"
                style={{
                  background: 'rgba(0,0,0,0.06)',
                  color: 'currentColor',
                  fontSize: 11,
                  border: '1px solid currentColor',
                }}
              >
                {p.workspace}
              </span>
            </div>
          </div>
        </Tile>
      ))}
    </Mosaic>
  )
}
