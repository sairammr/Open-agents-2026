import type { CSSProperties, ReactNode } from 'react'

interface MosaicProps {
  cols?: string
  rows?: string
  gap?: number
  children: ReactNode
  style?: CSSProperties
}

export default function Mosaic({ cols = '1fr 1fr 1fr', rows = 'auto', gap = 6, children, style }: MosaicProps) {
  return (
    <div
      className="mosaic"
      style={{ gridTemplateColumns: cols, gridTemplateRows: rows, gap, ...style }}
    >
      {children}
    </div>
  )
}
