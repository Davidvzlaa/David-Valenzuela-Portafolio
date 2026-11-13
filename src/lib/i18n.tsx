import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

import { content, getProjects, type Content, type Lang, type Project } from '@/data/portfolio'

type I18n = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Content
  projects: Project[]
}

const I18nContext = createContext<I18n | null>(null)

function detectLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang')
    if (fromUrl === 'en' || fromUrl === 'es') return fromUrl
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    /* almacenamiento no disponible */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* almacenamiento no disponible */
    }
  }, [])

  useEffect(() => {
    const t = content[lang]
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: content[lang], projects: getProjects(lang) }), [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>')
  return ctx
}
