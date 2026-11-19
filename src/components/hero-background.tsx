import { useEffect, useRef } from 'react'

import { usePrefersReducedMotion } from '@/lib/motion'

/**
 * Fondo del inicio: cuadrícula de puntos con un brillo azul que sigue al cursor.
 * En pantallas táctiles o con movimiento reducido el brillo queda fijo.
 */
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    const host = el?.parentElement
    if (!el || !host || reduced || !window.matchMedia('(pointer: fine)').matches) return

    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const r = host.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
        el.style.setProperty('--spot', '1')
      })
    }
    const onLeave = () => el.style.setProperty('--spot', '0')

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [reduced])

  return (
    <div ref={ref} aria-hidden className="hero-bg pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* brillo fijo de fondo */}
      <div
        className="absolute -top-40 right-0 h-[720px] w-[75%] opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--brand) 45%, transparent), transparent)' }}
      />
      {/* puntos tenues en toda el área */}
      <div className="hero-dots absolute inset-0 opacity-[0.22]" />
      {/* puntos iluminados alrededor del cursor */}
      <div className="hero-dots hero-dots-lit absolute inset-0" />
      {/* halo del cursor */}
      <div className="hero-halo absolute inset-0" />
    </div>
  )
}
