import { walletEvents } from '@/lib/dummy-data'

export default function ActivityPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Activity Log</h1>
        <p className="text-gray-500 text-sm mt-1">All wallet events and agent triggers</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl divide-y divide-gray-800">
        {walletEvents.map((event) => (
          <div key={event.id} className="p-4 flex items-center gap-4">
            <div
              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                event.type === 'transfer'
                  ? 'bg-blue-400'
                  : event.type === 'swap'
                  ? 'bg-green-400'
                  : 'bg-yellow-400'
              }`}
            />
            <div className="flex-1">
              <p className="text-sm text-gray-200">{event.description}</p>
              <p className="text-xs text-gray-600 mt-0.5 font-mono">{event.txHash}</p>
            </div>
            <div className="text-right flex-shrink-0">
              {event.agentTriggered && (
                <p className="text-xs text-indigo-400 mb-0.5">Agent fired</p>
              )}
              <p className="text-xs text-gray-500">{event.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
