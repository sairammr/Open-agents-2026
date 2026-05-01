'use client'

import { useState } from 'react'
import { agents as initialAgents } from '@/lib/dummy-data'
import type { Agent } from '@/components/AgentCard'

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>(initialAgents)

  const toggleAgent = (id: string) => {
    setAgents((prev) =>
      prev.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a))
    )
  }

  const activeCount = agents.filter((a) => a.enabled && a.status === 'active').length
  const sleepingCount = agents.filter((a) => a.enabled && a.status === 'sleeping').length
  const disabledCount = agents.filter((a) => !a.enabled).length

  return { agents, toggleAgent, activeCount, sleepingCount, disabledCount }
}
