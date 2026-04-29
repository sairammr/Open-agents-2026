'use client'

import { useWallet } from '@/hooks/useWallet'

export default function WalletStatus() {
  const { address, isConnected, balance, network, connect, disconnect } = useWallet()

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-300">Wallet</h2>
        <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400' : 'bg-gray-600'}`} />
      </div>
      {isConnected ? (
        <div className="space-y-2">
          <p className="text-xs text-gray-500 font-mono">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
          <p className="text-lg font-bold text-white">{balance} ETH</p>
          <p className="text-xs text-gray-600">{network}</p>
          <button
            onClick={disconnect}
            className="mt-2 w-full text-xs py-1.5 rounded-lg border border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300 transition-colors"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connect}
          className="w-full py-2 text-sm rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
        >
          Connect Wallet
        </button>
      )}
    </div>
  )
}
