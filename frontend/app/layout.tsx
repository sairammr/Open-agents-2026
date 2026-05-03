import type { Metadata } from 'next'
import { Instrument_Serif, JetBrains_Mono, Inter, Italiana } from 'next/font/google'
import './globals.css'
import 'lenis/dist/lenis.css'
import SmoothScroll from '@/components/SmoothScroll'

const display = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const ui = Inter({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

const letter = Italiana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-letter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'acid.ai — four functions. agents stop losing money.',
  description:
    'Atomicity · Consistency · Isolation · Durability — for AI agents. Wrap your agent action in four nested primitives. It becomes crash-safe, dedup\'d, invariant-enforced, and signs its own audit trail.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${ui.variable} ${letter.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
