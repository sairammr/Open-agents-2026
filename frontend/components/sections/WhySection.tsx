import Mosaic from '../Mosaic'
import Tile from '../Tile'
import Pill from '../Pill'
import Doodle from '../Doodle'
import type { ComponentProps } from 'react'

type Tone = 'sage' | 'lavender' | 'peach' | 'butter'
type DoodleName = ComponentProps<typeof Doodle>['name']

const ITEMS: { tone: Tone; letter: string; word: string; tag: string; doodle: DoodleName; copy: string }[] = [
  { tone: 'sage',     letter: 'A', word: 'Atomicity',   tag: 'all-or-nothing',     doodle: 'lock',     copy: 'Either the whole agent action commits, or none of it does. No half-rotated positions.' },
  { tone: 'lavender', letter: 'C', word: 'Consistency', tag: 'invariants hold',    doodle: 'seeds',    copy: 'Pre/post invariants run inside the wrapper. Break one, the action aborts and rolls back.' },
  { tone: 'peach',    letter: 'I', word: 'Isolation',   tag: 'no concurrent dups', doodle: 'isolated', copy: 'A lock key dedups identical actions across processes. Two agents, one transfer.' },
  { tone: 'butter',   letter: 'D', word: 'Durability',  tag: 'kill -9 safe',       doodle: 'stack',    copy: 'Every step writes to a signed audit log. Restart from the exact step that crashed.' },
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
      {ITEMS.map((it, i) => (
        <Tile
          key={it.letter}
          tone={it.tone}
          vlabel={it.tag}
          vlabelSide="right"
          pad={24}
          corner={<Pill tone="solid">{`0${i + 1}`}</Pill>}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 320,
            }}
          >
            <Doodle name={it.doodle} tone={DOODLE_TONE[it.tone]} size={56} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 88, lineHeight: 0.9, letterSpacing: '-0.02em' }}>
                {it.letter}
              </div>
              <h3 className="tile-title" style={{ fontSize: 26, marginTop: 4 }}>{it.word}</h3>
              <p
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 14,
                  lineHeight: 1.45,
                  marginTop: 10,
                  color: 'currentColor',
                  opacity: 0.85,
                }}
              >
                {it.copy}
              </p>
            </div>
          </div>
        </Tile>
      ))}
    </Mosaic>
  )
}
