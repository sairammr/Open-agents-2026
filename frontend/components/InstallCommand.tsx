'use client'

import { useState } from 'react'

export default function InstallCommand() {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard?.writeText('npm install acid')
    setCopied(true)
    setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="install" role="group" aria-label="install command">
      <div className="prompt">
        <span className="dollar">$</span>
        <span>npm install acid</span>
      </div>
      <button className="copy" onClick={copy} aria-label="copy install command">
        {copied ? (
          <svg width={18} height={18} viewBox="0 0 64 64" fill="none" stroke="var(--acc-sage)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 30 L 30 38 L 44 22" />
          </svg>
        ) : (
          <svg width={16} height={16} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <rect x={18} y={14} width={32} height={40} />
            <path d="M14 18 L 14 50 L 42 50" />
          </svg>
        )}
      </button>
    </div>
  )
}
