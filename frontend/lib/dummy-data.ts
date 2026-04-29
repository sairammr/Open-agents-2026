import type { Agent } from '@/components/AgentCard'

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Swap Watcher',
    description: 'Executes auto-swap when ETH drops below threshold',
    status: 'sleeping',
    trigger: 'ETH price < $2,800',
    lastTriggered: '2 hours ago',
    enabled: true,
  },
  {
    id: '2',
    name: 'Gas Optimizer',
    description: 'Batches transactions when gas is below target',
    status: 'active',
    trigger: 'Gas < 15 gwei',
    lastTriggered: '14 min ago',
    enabled: true,
  },
  {
    id: '3',
    name: 'Whale Alert',
    description: 'Notifies on large wallet movements in watched addresses',
    status: 'sleeping',
    trigger: 'Transfer > 100 ETH',
    lastTriggered: null,
    enabled: false,
  },
]
