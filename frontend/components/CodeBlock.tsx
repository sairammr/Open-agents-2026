'use client'

import { useState } from 'react'
import { copyText } from '@/lib/copy'

const SRC = `import { saga, invariant, idempotent, receipted } from '@openacid/acid';

// kill -9 me. I won't double-spend.
const rebalance = receipted({ storage, signer },
  invariant({
    pre:  walletBalanceOK,
    post: noOrphanAllowances,
  },
  idempotent({
    key: (a) => \`rebalance:\${a.target}\`,
    onChainAware: { chain, waitForFinality: 1 },
  },
  saga({
    steps: [
      { id: 'approve', do: (c) => approve(USDC, router, c.amount) },
      { id: 'swap',    do: (c) => router.exactInput(c.args) },
    ],
    compensations: { approve: (c) => approve(USDC, router, 0n) },
  })
)));

await rebalance({ target: 0.6 });`

export default function CodeBlock() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    const ok = await copyText(SRC)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    }
  }

  const K = (t: string) => <span className="k">{t}</span>
  const F = (t: string) => <span className="f">{t}</span>
  const S = (t: string) => <span className="s">{t}</span>
  const N = (t: string) => <span className="n">{t}</span>
  const C = (t: string) => <span className="c">{t}</span>

  return (
    <pre className="code-block">
      <button className="code-copy" onClick={copy} aria-label="copy">
        {copied ? (
          <svg className="check-draw" width={16} height={16} viewBox="0 0 64 64" fill="none" stroke="var(--code-str)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 30 L 30 38 L 44 22" />
          </svg>
        ) : (
          <svg width={16} height={16} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <rect x={18} y={14} width={32} height={40} />
            <path d="M14 18 L 14 50 L 42 50" />
          </svg>
        )}
      </button>
      {K('import')} {'{ '}{F('saga')}{', '}{F('invariant')}{', '}{F('idempotent')}{', '}{F('receipted')}{' } '}{K('from')} {S("'@openacid/acid'")};{'\n\n'}
      {C("// kill -9 me. I won't double-spend.")}{'\n'}
      {K('const')} rebalance = {F('receipted')}{'({ storage, signer },\n  '}
      {F('invariant')}{'({\n    pre:  '}{F('walletBalanceOK')}{',\n    post: '}{F('noOrphanAllowances')}{',\n  },\n  '}
      {F('idempotent')}{'({\n    key: (a) => '}{S('`rebalance:${a.target}`')}{',\n    onChainAware: { chain, waitForFinality: '}{N('1')}{' },\n  },\n  '}
      {F('saga')}{'({\n    steps: [\n      { id: '}{S("'approve'")}{', do: (c) => '}{F('approve')}{'(USDC, router, c.amount) },\n      { id: '}{S("'swap'")}{',    do: (c) => router.'}{F('exactInput')}{'(c.args) },\n    ],\n    compensations: { '}{F('approve')}{': (c) => '}{F('approve')}{'(USDC, router, '}{N('0n')}{') },\n  })\n)));\n\n'}
      {K('await')} {F('rebalance')}{'({ target: '}{N('0.6')}{' });'}
    </pre>
  )
}
