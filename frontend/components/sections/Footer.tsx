import Mosaic from '../Mosaic'
import Tile from '../Tile'
import Wordmark from '../Wordmark'
import { GITHUB } from '@/lib/openacid'

export default function Footer() {
  return (
    <Mosaic cols="1.4fr 1fr 1fr" rows="auto">
      <Tile pad={28}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <Wordmark size={20} href="/" />
          <span className="it" style={{ fontSize: 13, color: 'var(--ink-mute)' }}>~ © MMXXVI · MIT</span>
        </div>
        <div className="rule" style={{ margin: '14px 0' }} />
        <p
          style={{
            fontFamily: 'var(--font-display), serif',
            fontSize: 14,
            color: 'var(--ink-mute)',
            margin: 0,
          }}
        >
          Atomicity, Consistency, Isolation, Durability — for AI agents that hold real money.
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 14, flexWrap: 'wrap' }}>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="it" style={{ color: 'var(--ink)', fontSize: 13, textDecoration: 'none' }}>GitHub ↗</a>
          <a href="https://www.npmjs.com/~openacid" target="_blank" rel="noreferrer" className="it" style={{ color: 'var(--ink)', fontSize: 13, textDecoration: 'none' }}>npm ↗</a>
          <a href="https://sepolia.app.ens.domains/openacid.eth" target="_blank" rel="noreferrer" className="it" style={{ color: 'var(--ink)', fontSize: 13, textDecoration: 'none' }}>openacid.eth ↗</a>
        </div>
      </Tile>

      <Tile pad={28}>
        <span
          className="vlabel"
          style={{
            position: 'absolute',
            left: 14,
            top: '50%',
            transform: 'translateY(-50%) rotate(180deg)',
          }}
        >
          docs
        </span>
        <div
          style={{
            paddingLeft: 22,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            fontFamily: 'var(--font-display)',
            fontSize: 17,
          }}
        >
          <a href="/docs#install" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Quickstart →</a>
          <a href="/docs#primitives" style={{ color: 'var(--ink)', textDecoration: 'none' }}>API reference →</a>
          <a href="/docs#recipes" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Cookbook →</a>
          <a href="/docs#live" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Live deployment →</a>
          <a href="/packages" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Packages →</a>
        </div>
      </Tile>

      <Tile tone="butter" pad={28}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <span
            className="it"
            style={{ color: 'var(--acc-butter-ink)', opacity: 0.7, fontSize: 12, letterSpacing: '0.04em' }}
          >
            ¶ thesis
          </span>
          <p
            style={{
              fontFamily: 'var(--font-display), serif',
              fontStyle: 'italic',
              fontSize: 18,
              lineHeight: 1.3,
              color: 'var(--acc-butter-ink)',
              margin: 0,
            }}
          >
            Postgres taught your backend ACID semantics. <span style={{ fontStyle: 'normal' }}>openacid</span> teaches your agents.
          </p>
        </div>
      </Tile>
    </Mosaic>
  )
}
