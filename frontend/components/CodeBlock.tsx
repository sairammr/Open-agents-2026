'use client'

import { useState } from 'react'

const SRC = `import { atomic, consistent, isolated, durable } from 'acid';

// kill -9 me. I won't double-spend.
await atomic(
  consistent(invariants,
    isolated(lockKey,
      durable(auditLog, async () => {
        await rotatePosition();
      })
    )
  )
);`

export default function CodeBlock() {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard?.writeText(SRC)
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  const K = (t: string) => <span className="k">{t}</span>
  const F = (t: string) => <span className="f">{t}</span>
  const S = (t: string) => <span className="s">{t}</span>
  const C = (t: string) => <span className="c">{t}</span>

  return (
    <pre className="code-block">
      <button className="code-copy" onClick={copy} aria-label="copy">
        {copied ? (
          <svg width={16} height={16} viewBox="0 0 64 64" fill="none" stroke="var(--code-str)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 30 L 30 38 L 44 22" />
          </svg>
        ) : (
          <svg width={16} height={16} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <rect x={18} y={14} width={32} height={40} />
            <path d="M14 18 L 14 50 L 42 50" />
          </svg>
        )}
      </button>
      {K('import')} {'{ '}{F('atomic')}{', '}{F('consistent')}{', '}{F('isolated')}{', '}{F('durable')}{' } '}{K('from')} {S("'acid'")};{'\n\n'}
      {C("// kill -9 me. I won't double-spend.")}{'\n'}
      {K('await')} {F('atomic')}{'(\n  '}
      {F('consistent')}{'(invariants,\n    '}
      {F('isolated')}{'(lockKey,\n      '}
      {F('durable')}{'(auditLog, '}{K('async')}{' () => {\n        '}
      {K('await')} {F('rotatePosition')}{'();\n      })\n    )\n  )\n);'}
    </pre>
  )
}
