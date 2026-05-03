type DoodleName = 'plane' | 'leaf' | 'lemon' | 'seeds' | 'bubble' | 'lock' | 'isolated' | 'stack'
type DoodleTone = 'sage' | 'lavender' | 'peach' | 'butter'

interface DoodleProps {
  name?: DoodleName
  tone?: DoodleTone
  size?: number
}

export default function Doodle({ name = 'plane', tone = 'sage', size = 64 }: DoodleProps) {
  const bg = `var(--acc-${tone})`
  return (
    <div className="doodle" style={{ width: size, height: size, background: bg, color: 'var(--ink)' }}>
      <img src={`/doodles/${name}.svg`} width={size * 0.6} height={size * 0.6} alt="" />
    </div>
  )
}
