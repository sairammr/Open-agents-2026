import Mosaic from '../Mosaic'
import Tile from '../Tile'
import IconButton from '../IconButton'
import Wordmark from '../Wordmark'

export default function Footer() {
  return (
    <Mosaic cols="1.4fr 1fr 1fr" rows="auto">
      <Tile pad={24}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Wordmark size={20} />
          <span className="it" style={{ fontSize: 13 }}>~ © MMXXVI · MIT</span>
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
      </Tile>

      <Tile pad={24}>
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
          <a href="#" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Quickstart →</a>
          <a href="#" style={{ color: 'var(--ink)', textDecoration: 'none' }}>API reference →</a>
          <a href="#" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Cookbook →</a>
        </div>
      </Tile>

      <Tile tone="butter" pad={24} corner={<IconButton icon="github" />}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span className="it" style={{ color: 'var(--acc-butter-ink)', opacity: 0.8 }}>★ on github</span>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 36,
                lineHeight: 1,
                color: 'var(--acc-butter-ink)',
              }}
            >
              2.1k
            </div>
            <div className="tile-meta" style={{ color: 'var(--acc-butter-ink)', opacity: 0.7 }}>
              stars ~ this week +312
            </div>
          </div>
        </div>
      </Tile>
    </Mosaic>
  )
}
