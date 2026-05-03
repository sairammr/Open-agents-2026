'use client'

import { useCallback, useEffect, useState } from 'react'
import SlideTitle from './slides/SlideTitle'
import SlideTeam from './slides/SlideTeam'
import SlideHook from './slides/SlideHook'
import SlideProblem from './slides/SlideProblem'
import SlideSolution from './slides/SlideSolution'
import SlideArchitecture from './slides/SlideArchitecture'
import SlideCode from './slides/SlideCode'
import SlideDemoTitle from './slides/SlideDemoTitle'
import SlideDemo from './slides/SlideDemo'

const SLIDES = [
  { id: 'title',      label: 'title',            Component: SlideTitle },
  { id: 'team',       label: 'the builders',     Component: SlideTeam },
  { id: 'hook',       label: 'the bug',          Component: SlideHook },
  { id: 'problem',    label: 'the bug class',    Component: SlideProblem },
  { id: 'solution',   label: 'four functions',   Component: SlideSolution },
  { id: 'arch',       label: 'the architecture', Component: SlideArchitecture },
  { id: 'code',       label: 'the api',          Component: SlideCode },
  { id: 'demo-title', label: 'demo',             Component: SlideDemoTitle },
  { id: 'demo',       label: 'the proof',        Component: SlideDemo },
] as const

const TRANSITION_MS = 520

type Dir = 'fwd' | 'back'

export default function PitchDeck() {
  const [i, setI] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [dir, setDir] = useState<Dir>('fwd')
  const total = SLIDES.length

  const go = useCallback(
    (next: number) => {
      const target = Math.max(0, Math.min(total - 1, next))
      setI((cur) => {
        if (target === cur) return cur
        setDir(target > cur ? 'fwd' : 'back')
        setPrev(cur)
        return target
      })
    },
    [total],
  )

  useEffect(() => {
    if (prev === null) return
    const t = setTimeout(() => setPrev(null), TRANSITION_MS)
    return () => clearTimeout(t)
  }, [prev, i])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        go(i + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        go(i - 1)
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(total - 1)
      } else if (/^[1-9]$/.test(e.key)) {
        go(parseInt(e.key, 10) - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [i, go, total])

  const Current = SLIDES[i].Component
  const Prev = prev !== null ? SLIDES[prev].Component : null

  return (
    <div className="deck">
      <div className="deck-frame">
        {Prev && (
          <div
            key={`leave-${prev}-${i}`}
            className={`slide-layer leaving ${dir}`}
            aria-hidden
          >
            <Prev />
          </div>
        )}
        <div key={`enter-${i}`} className={`slide-layer entering ${dir}`}>
          <Current />
        </div>
      </div>

      <div className="deck-chrome">
        <div className="deck-chrome-left">
          <span className="deck-brand">openacid</span>
          <span className="deck-sep">/</span>
          <span className="deck-stage">{SLIDES[i].label}</span>
        </div>

        <div className="deck-chrome-center">
          {SLIDES.map((s, idx) => (
            <button
              key={s.id}
              className={`deck-dot ${idx === i ? 'active' : ''} ${idx < i ? 'past' : ''}`}
              onClick={() => go(idx)}
              aria-label={`go to slide ${idx + 1}: ${s.label}`}
            >
              <span className="deck-dot-mark">{String(idx + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>

        <div className="deck-chrome-right">
          <button
            className="deck-arrow"
            onClick={() => go(i - 1)}
            disabled={i === 0}
            aria-label="previous slide"
          >
            ←
          </button>
          <span className="deck-counter">
            {String(i + 1).padStart(2, '0')} <span className="deck-counter-sep">/</span>{' '}
            {String(total).padStart(2, '0')}
          </span>
          <button
            className="deck-arrow"
            onClick={() => go(i + 1)}
            disabled={i === total - 1}
            aria-label="next slide"
          >
            →
          </button>
        </div>
      </div>

      <div className="deck-edge left" onClick={() => go(i - 1)} aria-hidden />
      <div className="deck-edge right" onClick={() => go(i + 1)} aria-hidden />
    </div>
  )
}
