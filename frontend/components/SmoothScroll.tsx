'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname?.startsWith('/pitch')) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function onAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      const a = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -92 })
    }

    document.addEventListener('click', onAnchorClick)

    let raf = 0
    function loop(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('click', onAnchorClick)
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [pathname])

  return null
}
