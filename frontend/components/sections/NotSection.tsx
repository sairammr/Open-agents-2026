import Mosaic from '../Mosaic'
import Tile from '../Tile'

const NOTS = [
  'Not a workflow engine',
  'Not a dashboard',
  'Not a monitoring tool',
  'Not an agent framework',
]

export default function NotSection() {
  return (
    <Mosaic cols="1fr 1fr 1fr 1fr" rows="auto">
      {NOTS.map((n, i) => (
        <Tile key={n} pad={22} style={{ minHeight: 140 }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <span
              className="it"
              style={{
                fontSize: 12,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-ui)',
                fontStyle: 'normal',
                fontWeight: 500,
              }}
            >
              0{i + 1} <span className="tilde">~</span> what it isn't
            </span>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 26,
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              {n}.
            </div>
          </div>
        </Tile>
      ))}
    </Mosaic>
  )
}
