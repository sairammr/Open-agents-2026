import type { Agent } from '@/components/AgentCard'

export type WalletEvent = {
  id: string
  type: 'transfer' | 'swap' | 'approval'
  description: string
  txHash: string
  timestamp: string
  agentTriggered: boolean
}

export const walletEvents: WalletEvent[] = [
  {
    id: '1',
    type: 'transfer',
    description: 'Received 0.5 ETH from 0xabc...def',
    txHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b',
    timestamp: '2 min ago',
    agentTriggered: false,
  },
  {
    id: '2',
    type: 'swap',
    description: 'Swapped 100 USDC → 0.035 ETH via Uniswap',
    txHash: '0x7f8e9d0c1b2a3c4d5e6f7a8b9c0d1e2f3a4b5c6d',
    timestamp: '14 min ago',
    agentTriggered: true,
  },
  {
    id: '3',
    type: 'approval',
    description: 'Approved USDC spending for Uniswap router',
    txHash: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d',
    timestamp: '1 hour ago',
    agentTriggered: false,
  },
  {
    id: '4',
    type: 'transfer',
    description: 'Sent 0.1 ETH to 0x123...456',
    txHash: '0x9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f',
    timestamp: '2 hours ago',
    agentTriggered: true,
  },
  {
    id: '5',
    type: 'swap',
    description: 'Swapped 0.2 ETH → 562 USDC via Uniswap',
    txHash: '0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f',
    timestamp: '5 hours ago',
    agentTriggered: true,
  },
  {
    id: '6',
    type: 'transfer',
    description: 'Received 200 USDC from 0xdef...abc',
    txHash: '0xb2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1',
    timestamp: '1 day ago',
    agentTriggered: false,
  },
  {
    id: '7',
    type: 'approval',
    description: 'Approved DAI for Aave lending pool',
    txHash: '0xd4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3',
    timestamp: '1 day ago',
    agentTriggered: false,
  },
  {
    id: '8',
    type: 'swap',
    description: 'Gas Optimizer batched 3 pending transactions',
    txHash: '0xf6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5',
    timestamp: '2 days ago',
    agentTriggered: true,
  },
]

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
