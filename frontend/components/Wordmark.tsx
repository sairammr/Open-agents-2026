interface WordmarkProps {
  size?: number
  reverse?: boolean
  href?: string
}

export default function Wordmark({ size = 22, reverse = false, href = '#' }: WordmarkProps) {
  return (
    <a className="wordmark" href={href} style={{ color: reverse ? 'var(--paper)' : 'var(--ink)' }}>
      <img
        src="/asterisk.svg"
        width={size}
        height={size}
        style={{ filter: reverse ? 'invert(1) brightness(2)' : 'none' }}
        alt=""
      />
      <span style={{ fontSize: size * 1.05 }}>acid</span>
    </a>
  )
}
