import Mosaic from '../Mosaic'
import Tile from '../Tile'

const NOTS = [
  'Not a job queue',
  'Not a retry library',
  'Not a workflow engine',
  'Not an observability tool',
]

export default function NotSection() {
  return (
    <Mosaic cols="1fr 1fr 1fr 1fr" rows="auto">
      {NOTS.map((n) => (
        <Tile key={n} pad={28} style={{ minHeight: 160 }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 28,
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
