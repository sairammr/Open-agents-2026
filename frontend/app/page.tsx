import WalletStatus from '@/components/WalletStatus'
import ActivityFeed from '@/components/ActivityFeed'
import { agents, walletEvents } from '@/lib/dummy-data'

export default function DashboardPage() {
  const activeAgents = agents.filter((a) => a.enabled && a.status === 'active').length
  const sleepingAgents = agents.filter((a) => a.enabled && a.status === 'sleeping').length
  const totalTriggers = walletEvents.filter((e) => e.agentTriggered).length

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Your agents wake up only when your wallet acts</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Active</p>
              <p className="text-3xl font-bold text-green-400">{activeAgents}</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Sleeping</p>
              <p className="text-3xl font-bold text-indigo-400">{sleepingAgents}</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Triggers</p>
              <p className="text-3xl font-bold text-white">{totalTriggers}</p>
            </div>
          </div>
          <ActivityFeed />
        </div>
        <div>
          <WalletStatus />
        </div>
      </div>
    </div>
  )
}
