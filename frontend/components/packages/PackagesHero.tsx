import Mosaic from '../Mosaic'
import Tile from '../Tile'
import { NPM_ORG, NPM_ORG_PAGE, NPM_PROFILE, PACKAGES } from '@/lib/openacid'

const totalVersions = PACKAGES.reduce((acc, p) => acc + p.versions.length, 0)

export default function PackagesHero() {
  return (
    <Mosaic cols="1.4fr 1fr" rows="auto">
      <Tile brand pad={32} style={{ minHeight: 320 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 28,
            gap: 28,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 14,
                color: 'var(--ink-mute)',
                marginBottom: 18,
              }}
            >
              packages <span className="tilde">~</span> @{NPM_ORG} on npm
            </div>
            <h1
              className="tile-title"
              style={{ fontSize: 'clamp(38px, 4.4vw, 60px)', lineHeight: 1.02, maxWidth: '14ch' }}
            >
              {PACKAGES.length} packages.{' '}
              <span style={{ fontStyle: 'italic' }}>{totalVersions} versions.</span>
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 16,
                lineHeight: 1.45,
                color: 'var(--ink-soft)',
                maxWidth: 540,
                margin: 0,
              }}
            >
              The four primitives plus four adapters, all published under one scope. Every package
              ships ESM + CJS dual builds and full <code>.d.ts</code> typings. MIT-licensed.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a
                href={NPM_ORG_PAGE}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button className="btn primary">npm org dashboard ↗</button>
              </a>
              <a
                href={NPM_PROFILE}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button className="btn ghost">@{NPM_ORG} profile ↗</button>
              </a>
            </div>
          </div>
        </div>
      </Tile>

      <Tile tone="ink" pad={28} style={{ minHeight: 320 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'var(--paper)',
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--code-mute)',
                letterSpacing: '0.1em',
              }}
            >
              ¶ release matrix
            </div>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 3.4vw, 44px)',
              lineHeight: 1.1,
              color: 'var(--paper)',
            }}
          >
            <span style={{ color: 'var(--acc-butter)' }}>0.1.0</span>
            <span style={{ color: 'var(--code-mute)', margin: '0 0.4em' }}>→</span>
            <span style={{ color: 'var(--acc-butter)' }}>0.1.1</span>
            <span style={{ color: 'var(--code-mute)', margin: '0 0.4em' }}>→</span>
            <span style={{ color: 'var(--acc-butter)' }}>0.1.2</span>
            <span style={{ color: 'var(--code-mute)', margin: '0 0.4em' }}>→</span>
            <span style={{ color: 'var(--acc-sage)' }}>0.2.0</span>
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--code-mute)',
              lineHeight: 1.7,
              letterSpacing: '0.02em',
            }}
          >
            <div>0.1.0 — first publish</div>
            <div>0.1.1 — Error.cause chain · saga meta</div>
            <div>0.1.2 — getCompositionLabel(fn)</div>
            <div>0.2.0 — recipientWhitelist · withTimeout</div>
          </div>
        </div>
      </Tile>
    </Mosaic>
  )
}
