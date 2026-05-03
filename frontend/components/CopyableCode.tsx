'use client'

import { useState } from 'react'
import { copyText } from '@/lib/copy'

interface Props {
  code: string
  label?: string
  inline?: boolean
}

export default function CopyableCode({ code, label, inline = false }: Props) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    const ok = await copyText(code)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1400)
    }
  }

  if (inline) {
    return (
      <button
        onClick={copy}
        className="copyable-inline"
        title="click to copy"
      >
        <code>{code}</code>
        <span className="copyable-cue">{copied ? '✓' : '⧉'}</span>
      </button>
    )
  }

  return (
    <div className="copyable-block">
      {label && <div className="copyable-label">{label}</div>}
      <pre className="copyable-pre">
        <code>{code}</code>
        <button className="copyable-btn" onClick={copy} aria-label="copy">
          {copied ? '✓ copied' : 'copy'}
        </button>
      </pre>
    </div>
  )
}
