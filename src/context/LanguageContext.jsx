import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import translations from '../data/translations.js'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem('sfh-lang') || 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('sfh-lang', lang)
    } catch { /* noop */ }
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en'
    document.documentElement.setAttribute('data-lang', lang)
  }, [lang])

  const setLang = useCallback((l) => setLangState(l), [])

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'bn' : 'en'))
  }, [])

  // Translate a key → returns the current-language string.
  const t = useCallback(
    (key) => {
      const entry = translations[key]
      if (!entry) return key
      return entry[lang] || entry.en || key
    },
    [lang],
  )

  // Helper for bilingual content objects { en: "...", bn: "..." }
  const ct = useCallback(
    (obj) => {
      if (!obj) return ''
      if (typeof obj === 'string') return obj
      return obj[lang] || obj.en || ''
    },
    [lang],
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, ct }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
