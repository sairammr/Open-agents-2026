import AgentCard from '@/components/AgentCard'
import { agents } from '@/lib/dummy-data'

export default function AgentsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Agents</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your reactive wallet agents</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  )
}
