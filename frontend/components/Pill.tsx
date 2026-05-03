import type { CSSProperties, ReactNode } from 'react'

type Tone = 'ghost' | 'solid' | 'sage' | 'lavender' | 'peach' | 'butter'

interface PillProps {
  tone?: Tone
  mono?: boolean
  children: ReactNode
  style?: CSSProperties
}

const TONE_STYLE: Record<Tone, CSSProperties> = {
  sage:     { background: 'var(--acc-sage)',     color: 'var(--acc-sage-ink)' },
  lavender: { background: 'var(--acc-lavender)', color: 'var(--acc-lav-ink)' },
  peach:    { background: 'var(--acc-peach)',    color: 'var(--acc-peach-ink)' },
  butter:   { background: 'var(--acc-butter)',   color: 'var(--acc-butter-ink)' },
  solid:    { background: 'var(--ink)',          color: 'var(--paper)' },
  ghost:    { background: 'transparent',         color: 'var(--ink)', border: '1.5px solid var(--ink)' },
}

export default function Pill({ tone = 'ghost', mono = false, children, style }: PillProps) {
  return (
    <span className={`pill ${mono ? 'mono' : ''}`} style={{ ...TONE_STYLE[tone], ...style }}>
      {children}
    </span>
  )
}
