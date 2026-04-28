'use client'

import { useState } from 'react'

export type WalletState = {
  address: string | null
  isConnected: boolean
  balance: string
  network: string
  connect: () => void
  disconnect: () => void
}

export function useWallet(): WalletState {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)

  const connect = () => {
    setIsConnected(true)
    setAddress('0x742d35Cc6634C0532925a3b8D4C9B4A2e8b12345')
  }

  const disconnect = () => {
    setIsConnected(false)
    setAddress(null)
  }

  return {
    address,
    isConnected,
    balance: isConnected ? '2.4182' : '0',
    network: 'Ethereum Mainnet',
    connect,
    disconnect,
  }
}
