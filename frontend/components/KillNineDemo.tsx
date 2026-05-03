'use client'

import { useEffect, useState } from 'react'

type Who = 'mute' | 'ok' | 'err' | 'key'

const LINES: { who: Who; text: string }[] = [
  { who: 'mute', text: '$ node agent.js' },
  { who: 'ok',   text: '✓ acquired lock(rotate-eth-usdc)' },
  { who: 'ok',   text: '✓ swap submitted · tx 0x4a2…f1' },
  { who: 'err',  text: '⚠ kill -9 12871   ← you killed it' },
  { who: 'mute', text: '$ node agent.js' },
  { who: 'key',  text: '↻ resuming durable(rotate-eth-usdc)' },
  { who: 'ok',   text: '✓ tx 0x4a2…f1 already mined — skip' },
  { who: 'ok',   text: '✓ done. one swap. zero double-spend.' },
]

export default function KillNineDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % LINES.length), 1400)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="term">
      {LINES.slice(0, step + 1).map((l, i) => (
        <div key={i} className="line">
          <span className={l.who}>{l.text}</span>
        </div>
      ))}
      <span className="cursor" />
    </div>
  )
}
