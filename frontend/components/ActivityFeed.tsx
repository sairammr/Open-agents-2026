import { walletEvents } from '@/lib/dummy-data'

export default function ActivityFeed() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h2 className="text-sm font-semibold text-gray-300 mb-3">Recent Activity</h2>
      <div className="space-y-3">
        {walletEvents.slice(0, 5).map((event) => (
          <div key={event.id} className="flex items-start gap-3">
            <div
              className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                event.type === 'transfer'
                  ? 'bg-blue-400'
                  : event.type === 'swap'
                  ? 'bg-green-400'
                  : 'bg-yellow-400'
              }`}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-300 truncate">{event.description}</p>
              <p className="text-xs text-gray-600">{event.timestamp}</p>
            </div>
            {event.agentTriggered && (
              <span className="text-xs text-indigo-400 flex-shrink-0">Agent fired</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
