import Asterisk from './Asterisk'

interface WordmarkProps {
  size?: number
  reverse?: boolean
  href?: string
}

export default function Wordmark({ size = 22, reverse = false, href = '#' }: WordmarkProps) {
  return (
    <a className="wordmark" href={href} style={{ color: reverse ? 'var(--paper)' : 'var(--ink)' }}>
      <Asterisk size={size} reverse={reverse} />
      <span style={{ fontSize: size * 1.05 }}>acid.ai</span>
    </a>
  )
}
