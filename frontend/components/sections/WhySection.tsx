import Mosaic from '../Mosaic'
import Tile from '../Tile'
import Doodle from '../Doodle'
import type { ComponentProps } from 'react'

type Tone = 'sage' | 'lavender' | 'peach' | 'butter'
type DoodleName = ComponentProps<typeof Doodle>['name']

const ITEMS: { tone: Tone; letter: string; word: string; fn: string; doodle: DoodleName; copy: string }[] = [
  { tone: 'sage',     letter: 'A', word: 'Atomicity',   fn: 'saga()',       doodle: 'lock',     copy: 'Multi-step actions commit fully or roll back via compensations.' },
  { tone: 'lavender', letter: 'C', word: 'Consistency', fn: 'invariant()',  doodle: 'seeds',    copy: 'Pre/post predicates enforced at action boundaries.' },
  { tone: 'peach',    letter: 'I', word: 'Isolation',   fn: 'idempotent()', doodle: 'isolated', copy: 'In-flight tracking and dedup. No interleaving, no double-spend.' },
  { tone: 'butter',   letter: 'D', word: 'Durability',  fn: 'receipted()',  doodle: 'stack',    copy: 'Signed chained receipts in 0G Storage. Crash-recoverable.' },
]

const DOODLE_TONE: Record<Tone, Tone> = {
  sage: 'lavender',
  lavender: 'peach',
  peach: 'butter',
  butter: 'sage',
}

export default function WhySection() {
  return (
    <Mosaic cols="repeat(4, 1fr)" rows="auto">
      {ITEMS.map((it) => (
        <Tile
          key={it.letter}
          tone={it.tone}
          pad={28}
          corner={<Doodle name={it.doodle} tone={DOODLE_TONE[it.tone]} size={44} />}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              minHeight: 340,
              gap: 14,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(96px, 9vw, 132px)',
                lineHeight: 0.85,
                letterSpacing: '-0.03em',
              }}
            >
              {it.letter}
            </div>
            <h3
              className="tile-title"
              style={{ fontSize: 28, lineHeight: 1, margin: 0 }}
            >
              {it.word}
            </h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                opacity: 0.65,
                marginTop: 2,
              }}
            >
              {it.fn}
            </div>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 14,
                lineHeight: 1.5,
                margin: 0,
                color: 'currentColor',
                opacity: 0.78,
                maxWidth: '24ch',
              }}
            >
              {it.copy}
            </p>
          </div>
        </Tile>
      ))}
    </Mosaic>
  )
}
