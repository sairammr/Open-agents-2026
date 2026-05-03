import Mosaic from '../../Mosaic'
import Tile from '../../Tile'

export default function SlideDemoTitle() {
  return (
    <Mosaic cols="1fr" rows="1fr" style={{ height: '100%' }}>
      <Tile pad={48}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(120px, 28vmin, 320px)',
              lineHeight: 0.9,
              margin: 0,
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-0.04em',
              color: 'var(--ink)',
            }}
          >
            demo
          </h1>
        </div>
      </Tile>
    </Mosaic>
  )
}
