'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [rpcUrl, setRpcUrl] = useState('https://mainnet.infura.io/v3/your-key')
  const [pollInterval, setPollInterval] = useState('15')

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Configure your wallet and agent behavior</p>
      </div>
      <div className="max-w-xl space-y-6">
        <section className="bg-gray-900 border border-gray-800 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-300 mb-4">Wallet Configuration</h2>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-500 block mb-1">RPC Endpoint</label>
              <input
                value={rpcUrl}
                onChange={(e) => setRpcUrl(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">Poll Interval (seconds)</label>
              <input
                type="number"
                value={pollInterval}
                onChange={(e) => setPollInterval(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </section>
        <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  )
}
