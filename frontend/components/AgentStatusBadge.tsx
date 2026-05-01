type Status = 'active' | 'sleeping' | 'error'

interface AgentStatusBadgeProps {
  status: Status
}

const statusConfig = {
  active: { label: 'Active', color: 'bg-green-500/20 text-green-400 border-green-500/30', dotColor: 'bg-green-400 animate-pulse' },
  sleeping: { label: 'Sleeping', color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30', dotColor: 'bg-indigo-400' },
  error: { label: 'Error', color: 'bg-red-500/20 text-red-400 border-red-500/30', dotColor: 'bg-red-400' },
}

export default function AgentStatusBadge({ status }: AgentStatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border text-xs font-medium ${config.color}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor}`} />
      {config.label}
    </span>
  )
}
