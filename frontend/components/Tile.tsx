import type { CSSProperties, ReactNode } from 'react'

export type Tone = 'paper' | 'sage' | 'lavender' | 'peach' | 'butter' | 'ink' | 'code'

interface TileProps {
  tone?: Tone
  vlabel?: string
  vlabelSide?: 'left' | 'right'
  brand?: string | true
  corner?: ReactNode
  cornerPos?: 'tr' | 'br' | 'bl'
  pad?: number
  style?: CSSProperties
  className?: string
  children?: ReactNode
}

export default function Tile({
  tone = 'paper',
  vlabel,
  vlabelSide = 'left',
  brand,
  corner,
  cornerPos = 'tr',
  pad = 28,
  style,
  className = '',
  children,
}: TileProps) {
  const toneCls = tone === 'paper' ? '' : tone === 'code' ? 'ink' : tone

  return (
    <div
      className={`tile ${toneCls} ${className}`}
      style={{
        background: tone === 'code' ? 'var(--code-bg)' : undefined,
        color:      tone === 'code' ? 'var(--code-fg)' : undefined,
        ...style,
      }}
    >
      {vlabel && <div className={`tile-vlabel ${vlabelSide}`}>{vlabel}</div>}
      {brand && (
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--font-display)',
            fontSize: 14,
            color: 'currentColor',
          }}
        >
          <img
            src="/asterisk.svg"
            width={13}
            height={13}
            style={{ filter: tone === 'ink' || tone === 'code' ? 'invert(1) brightness(2)' : 'none' }}
            alt=""
          />
          <span>{brand === true ? 'acid' : brand}</span>
        </div>
      )}
      {corner && <div className={`tile-corner ${cornerPos}`}>{corner}</div>}
      <div className="tile-body" style={{ padding: pad }}>
        {children}
      </div>
    </div>
  )
}
