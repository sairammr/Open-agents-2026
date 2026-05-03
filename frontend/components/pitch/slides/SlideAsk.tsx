import Mosaic from '../../Mosaic'
import Tile from '../../Tile'
import Pill from '../../Pill'
import Asterisk from '../../Asterisk'

const ASKS = [
  {
    tone: 'sage' as const,
    head: 'integrators',
    body: 'ElizaOS · LangChain · CrewAI — wire openacid in as a first-class capability so every new agent ships with durability on day one.',
  },
  {
    tone: 'lavender' as const,
    head: 'pilots',
    body: 'protocol teams running production agents on Base / Unichain / 0G — partner with us to harden the kill-9 path against real workloads.',
  },
  {
    tone: 'butter' as const,
    head: 'contributors',
    body: 'adapters for ethers, Solana, redis · TEE-attested receipts · reorg-aware durability · the conformance suite is the contract.',
  },
]

export default function SlideAsk() {
  return (
    <Mosaic cols="1.3fr 1fr 1fr 1fr" rows="auto 1fr auto" style={{ height: '100%' }}>
      <Tile pad={48} style={{ gridColumn: '1 / -1' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 16,
                color: 'var(--ink-mute)',
                marginBottom: 14,
                letterSpacing: '0.02em',
              }}
            >
              ¶ what we need next
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(56px, 6vw, 96px)',
                lineHeight: 0.96,
                margin: 0,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                maxWidth: '22ch',
              }}
            >
              The boring, foundational primitive every agent installs <span style={{ fontStyle: 'italic' }}>once</span>.
            </h2>
          </div>
          <Pill tone="ghost" mono>what we need</Pill>
        </div>
      </Tile>

      <Tile pad={44} style={{ gridRow: 2 }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <span className="it" style={{ fontSize: 13, letterSpacing: '0.06em' }}>
            ¶ the artifact
          </span>

          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(38px, 4.4vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.015em',
            }}
          >
            <span>One npm</span>
            <br />
            <span style={{ fontStyle: 'italic' }}>library.</span>
            <br />
            <span style={{ color: 'var(--ink-mute)' }}>MIT-licensed.</span>
          </div>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              color: 'var(--ink-soft)',
            }}
          >
            <li>core/ <span style={{ color: 'var(--ink-mute)' }}>· four wrappers</span></li>
            <li>adapter-0g-storage <span style={{ color: 'var(--ink-mute)' }}>· receipts</span></li>
            <li>adapter-viem <span style={{ color: 'var(--ink-mute)' }}>· EVM chain</span></li>
            <li>adapter-ens <span style={{ color: 'var(--ink-mute)' }}>· receipt mirrors</span></li>
          </ul>
        </div>
      </Tile>

      {ASKS.map((a) => (
        <Tile key={a.head} tone={a.tone} pad={36} style={{ gridRow: 2 }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 24,
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '0.08em',
                opacity: 0.75,
              }}
            >
              ¶ ask
            </span>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 0.94,
                letterSpacing: '-0.01em',
              }}
            >
              {a.head}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 16,
                lineHeight: 1.4,
                margin: 0,
                opacity: 0.9,
              }}
            >
              {a.body}
            </p>
          </div>
        </Tile>
      ))}

      <Tile tone="ink" pad={36} style={{ gridColumn: '1 / -1', gridRow: 3 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 32,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Asterisk size={20} reverse />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 26,
                  color: 'var(--paper)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                openacid
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: 'var(--code-mute)',
                  marginTop: 2,
                }}
              >
                ACID for AI agents.
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 36,
              fontFamily: 'var(--font-mono)',
              fontSize: 14,
              color: 'var(--code-fg)',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <span>
              <span style={{ color: 'var(--code-mute)' }}>$</span> npm i @openacid/acid
            </span>
            <span style={{ color: 'var(--code-mute)' }}>~</span>
            <span>github.com/romariokavin1/acid</span>
            <span style={{ color: 'var(--code-mute)' }}>~</span>
            <span>openacid.eth</span>
          </div>
        </div>
      </Tile>
    </Mosaic>
  )
}
