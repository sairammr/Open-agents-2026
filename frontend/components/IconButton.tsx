import type { ButtonHTMLAttributes, ReactNode } from 'react'

type IconName = 'arrow-right' | 'arrow-left' | 'arrow-up' | 'plus' | 'check' | 'copy' | 'github'

interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  icon?: IconName
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'ghost'
  ariaLabel?: string
}

const PATHS: Record<IconName, ReactNode> = {
  'arrow-right': <><path d="M14 32 L 50 32" /><path d="M38 20 L 50 32 L 38 44" /></>,
  'arrow-left':  <><path d="M14 32 L 50 32" /><path d="M26 20 L 14 32 L 26 44" /></>,
  'arrow-up':    <><path d="M32 14 L 32 50" /><path d="M20 26 L 32 14 L 44 26" /></>,
  plus:          <><path d="M32 14 L 32 50" /><path d="M14 32 L 50 32" /></>,
  check:         <path d="M22 30 L 30 38 L 44 22" />,
  copy:          <><rect x={18} y={14} width={32} height={40} /><path d="M14 18 L 14 50 L 42 50" /></>,
  github:        <path d="M32 10 C 20 10, 10 20, 10 32 C 10 42, 16 50, 26 53 C 27 53, 27 52, 27 51 L 27 47 C 21 48, 20 44, 20 44 C 19 42, 18 41, 18 41 C 16 40, 18 40, 18 40 C 20 40, 21 42, 21 42 C 23 45, 26 44, 27 44 C 27 42, 28 41, 29 41 C 24 40, 19 38, 19 30 C 19 27, 20 25, 21 24 C 21 23, 20 21, 21 19 C 21 19, 23 19, 26 21 C 28 20, 30 20, 32 20 C 34 20, 36 20, 38 21 C 41 19, 43 19, 43 19 C 44 21, 43 23, 43 24 C 44 25, 45 27, 45 30 C 45 38, 40 40, 35 41 C 36 42, 37 43, 37 45 L 37 51 C 37 52, 37 53, 38 53 C 48 50, 54 42, 54 32 C 54 20, 44 10, 32 10 Z" />,
}

export default function IconButton({
  icon = 'arrow-right',
  size = 'md',
  variant = 'solid',
  ariaLabel,
  ...rest
}: IconButtonProps) {
  const cls = `icon-btn ${variant === 'ghost' ? 'ghost' : ''} ${size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : ''}`
  const stroke = variant === 'ghost' ? 'var(--ink)' : 'var(--paper)'
  const px = size === 'lg' ? 22 : size === 'sm' ? 14 : 18

  return (
    <button className={cls} data-icon={icon} aria-label={ariaLabel || icon} {...rest}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 64 64"
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {PATHS[icon]}
      </svg>
    </button>
  )
}
