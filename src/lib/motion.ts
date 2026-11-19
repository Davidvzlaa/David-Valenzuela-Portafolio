import { useEffect, useState } from 'react'

/** true si el visitante pidió reducir el movimiento en su sistema. */
export function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)'
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

type TypewriterOptions = { typeMs?: number; deleteMs?: number; holdMs?: number }

/**
 * Escribe y borra cada palabra de la lista, en ciclo.
 * Con movimiento reducido devuelve la primera palabra fija.
 */
export function useTypewriter(words: string[], { typeMs = 70, deleteMs = 35, holdMs = 1800 }: TypewriterOptions = {}) {
  const reduced = usePrefersReducedMotion()
  const key = words.join('|')
  const [state, setState] = useState({ key, index: 0, length: 0, deleting: false })
  // Si cambian las palabras (por ejemplo, al cambiar de idioma) se empieza de cero
  const s = state.key === key ? state : { key, index: 0, length: 0, deleting: false }

  useEffect(() => {
    if (reduced || words.length === 0) return
    const word = words[s.index % words.length]
    const full = !s.deleting && s.length === word.length
    const wait = full ? holdMs : s.deleting ? deleteMs : typeMs

    const id = window.setTimeout(() => {
      if (full) setState({ ...s, deleting: true })
      else if (s.deleting && s.length === 0) setState({ ...s, deleting: false, index: (s.index + 1) % words.length })
      else setState({ ...s, length: s.length + (s.deleting ? -1 : 1) })
    }, wait)
    return () => window.clearTimeout(id)
  }, [reduced, words, s, typeMs, deleteMs, holdMs])

  if (reduced) return words[0] ?? ''
  return (words[s.index % words.length] ?? '').slice(0, s.length)
}

/** Cuenta de 0 a `total` una vez, para efectos de tecleo. Con movimiento reducido devuelve `total` directo. */
export function useTypedCount(total: number, { stepMs = 18, startDelay = 600 } = {}) {
  const reduced = usePrefersReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) return
    let id: number
    const start = window.setTimeout(() => {
      id = window.setInterval(() => {
        setCount((c) => {
          if (c >= total) {
            window.clearInterval(id)
            return c
          }
          return c + 1
        })
      }, stepMs)
    }, startDelay)
    return () => {
      window.clearTimeout(start)
      window.clearInterval(id)
    }
  }, [reduced, total, stepMs, startDelay])

  return reduced ? total : count
}
