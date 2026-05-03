interface AsteriskProps {
  size?: number
  spin?: boolean
  reverse?: boolean
}

export default function Asterisk({ size = 16, spin = true, reverse = false }: AsteriskProps) {
  return (
    <span
      className={spin ? 'spin-asterisk' : undefined}
      style={{ width: size, height: size, color: reverse ? 'var(--paper)' : 'currentColor' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 C 32.5 18, 32 26, 32 32" />
        <path d="M32 32 C 32 38, 31.5 48, 32 56" />
        <path d="M8 20 C 18 24, 26 28, 32 32" />
        <path d="M32 32 C 38 36, 46 40, 56 44" />
        <path d="M8 44 C 18 40, 26 36, 32 32" />
        <path d="M32 32 C 38 28, 46 24, 56 20" />
      </svg>
    </span>
  )
}
