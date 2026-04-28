'use client'

import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Dashboard' },
  { href: '/agents', label: 'Agents' },
  { href: '/activity', label: 'Activity' },
  { href: '/settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-56 bg-gray-900 border-r border-gray-800 flex flex-col p-4">
      <div className="mb-8">
        <h1 className="text-lg font-bold text-indigo-400">Open Agents</h1>
        <p className="text-xs text-gray-500">EVM Reactive Platform</p>
      </div>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
