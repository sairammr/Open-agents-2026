import Mosaic from '../Mosaic'
import Tile from '../Tile'
import CopyableCode from '../CopyableCode'
import { PACKAGES } from '@/lib/openacid'

const ALL_INSTALL = `pnpm add ${PACKAGES.map((p) => p.name).join(' ')}`

export default function PackagesIndex() {
  return (
    <Mosaic cols="1fr 1fr" rows="auto">
      <Tile pad={32}>
        <div className="docs-prose">
          <div className="eyebrow">install everything</div>
          <h2 className="heading">One command for the full kit.</h2>
          <p>
            Use this when you want the four primitives plus every adapter ready in one go. In
            production, prefer installing only the adapters you actually wire.
          </p>
        </div>
        <CopyableCode code={ALL_INSTALL} label="all 5 packages" />
      </Tile>

      <Tile tone="paper" pad={32}>
        <div className="docs-prose">
          <div className="eyebrow">what changed in 0.2.0</div>
          <h2 className="heading">Newest release.</h2>
          <ul>
            <li>
              <strong>recipientWhitelist</strong> — built-in invariant that flags any tx whose
              recipient is not in your allowlist. Critical-severity rejection by default.
            </li>
            <li>
              <strong>withTimeout</strong> — top-level wrapper that races the wrapped fn against a
              hard deadline. Throws <code>TimeoutError</code> with the configured label.
            </li>
            <li>
              See the <a href="/docs#recipes" style={{ color: 'var(--ink)' }}>recipes</a> for both.
            </li>
          </ul>
          <h3 className="subheading">Earlier releases</h3>
          <ul>
            <li>
              <strong>0.1.2</strong> — <code>getCompositionLabel(fn)</code> renders a chain like{' '}
              <code>receipted→invariant→idempotent→saga</code>.
            </li>
            <li>
              <strong>0.1.1</strong> — <code>Error.cause</code> propagation; saga errors carry{' '}
              <code>{'{ sagaId, attempt }'}</code> meta.
            </li>
            <li>
              <strong>0.1.0</strong> — first publish across all five packages.
            </li>
          </ul>
        </div>
      </Tile>
    </Mosaic>
  )
}
