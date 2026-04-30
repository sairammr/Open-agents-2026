'use client'

import { useState, useEffect } from 'react'
import AgentStatusBadge from './AgentStatusBadge'

export interface Agent {
  id: string
  name: string
  description: string
  status: 'active' | 'sleeping' | 'error'
  trigger: string
  lastTriggered: string | null
  enabled: boolean
}

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  const [enabled, setEnabled] = useState(agent.enabled)

  useEffect(() => {
    setEnabled(agent.enabled)
  }, [agent.id])

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-white">{agent.name}</h3>
          <p className="text-xs text-gray-500 mt-0.5">{agent.description}</p>
        </div>
        <AgentStatusBadge status={enabled ? agent.status : 'sleeping'} />
      </div>
      <div className="text-xs text-gray-500">
        <span className="text-gray-400">Trigger:</span> {agent.trigger}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">
          {agent.lastTriggered ? `Last: ${agent.lastTriggered}` : 'Never triggered'}
        </span>
        <button
          onClick={() => setEnabled(!enabled)}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
            enabled ? 'bg-indigo-600' : 'bg-gray-700'
          }`}
        >
          <span
            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
              enabled ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  )
}
