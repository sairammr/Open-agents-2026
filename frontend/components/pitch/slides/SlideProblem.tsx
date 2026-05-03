import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'

const FAILURES = [
  {
    code: 'A',
    tone: 'sage' as const,
    title: 'Process crash mid-broadcast',
    body: 'Agent re-broadcasts on restart → duplicate transaction.',
    cost: '2× gas + 2× slippage',
  },
  {
    code: 'C',
    tone: 'lavender' as const,
    title: 'Concurrent retries',
    body: 'Two parts of the agent race for the same action.',
    cost: 'double execution',
  },
  {
    code: 'I',
    tone: 'peach' as const,
    title: 'LLM-loop replay',
    body: 'Planner re-emits the same tool call after a timeout.',
    cost: 'wasted tokens + double tx',
  },
  {
    code: 'D',
    tone: 'butter' as const,
    title: 'Multi-step partial failure',
    body: 'Step 2 fails after step 1 mined; orphan state on chain.',
    cost: 'standing approvals · phishing exposure',
  },
]

export default function SlideProblem() {
  return (
    <Mosaic cols="1.1fr 1fr 1fr" rows="auto 1fr 1fr" style={{ height: '100%' }}>
      <Tile pad={40} style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 16,
                color: 'var(--ink-mute)',
                marginBottom: 16,
                letterSpacing: '0.02em',
              }}
            >
              ¶ the bug class
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 5.2vw, 78px)',
                lineHeight: 0.98,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.015em',
                maxWidth: '22ch',
              }}
            >
              Agents that hold value <span style={{ fontStyle: 'italic' }}>silently</span> lose money.
            </h2>
          </div>
          <Pill tone="ghost" mono>the bug class</Pill>
        </div>
      </Tile>

      <Tile vlabel="war stories" pad={36} style={{ gridRow: '2 / 4' }}>
        <div
          style={{
            paddingLeft: 28,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 26,
              lineHeight: 1.4,
              color: 'var(--ink-soft)',
              margin: 0,
            }}
          >
            The gap is <span style={{ fontStyle: 'italic' }}>agent-shaped durability semantics</span> — exactly-once execution, atomic multi-step, invariant enforcement, signed receipts — exposed as a small library, not a workflow engine.
          </p>

          <div className="rule" />

          <div>
            <span className="it" style={{ fontSize: 13, letterSpacing: '0.06em' }}>
              ¶ existing landscape · the gap
            </span>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '16px 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                fontFamily: 'var(--font-mono)',
                fontSize: 15,
                color: 'var(--ink-soft)',
              }}
            >
              <li>p-retry · <span style={{ color: 'var(--ink-mute)' }}>no idempotency · no chain</span></li>
              <li>bullmq, inngest · <span style={{ color: 'var(--ink-mute)' }}>heavy infra · no sagas</span></li>
              <li>temporal · <span style={{ color: 'var(--ink-mute)' }}>not adapted to agents</span></li>
              <li>langfuse · <span style={{ color: 'var(--ink-mute)' }}>flat traces · no enforcement</span></li>
            </ul>
          </div>
        </div>
      </Tile>

      {FAILURES.map((f, i) => {
        const row = i < 2 ? 2 : 3
        const col = (i % 2) + 2
        return (
          <Tile key={f.code} tone={f.tone} pad={28} style={{ gridRow: row, gridColumn: col }}>
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 14,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 44,
                    lineHeight: 1,
                    fontStyle: 'italic',
                    opacity: 0.55,
                  }}
                >
                  {f.code}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    lineHeight: 1.15,
                    fontWeight: 500,
                  }}
                >
                  {f.title}
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 16,
                  lineHeight: 1.4,
                  margin: 0,
                  opacity: 0.88,
                }}
              >
                {f.body}
              </p>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  letterSpacing: '0.04em',
                  color: 'currentColor',
                  opacity: 0.75,
                }}
              >
                → {f.cost}
              </span>
            </div>
          </Tile>
        )
      })}
    </Mosaic>
  )
}
