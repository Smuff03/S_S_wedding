import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

// Wrap your whole app in this once (see main.jsx / App.jsx instructions below).
export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        if (typeof window === 'undefined') return 'en'
        return localStorage.getItem('site-lang') || 'en'
    })

    useEffect(() => {
        localStorage.setItem('site-lang', lang)
        document.documentElement.lang = lang === 'mr' ? 'mr' : 'en'
    }, [lang])

    const toggleLang = () => setLang((l) => (l === 'en' ? 'mr' : 'en'))

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

// Use inside any component: const { lang, toggleLang } = useLanguage()
export function useLanguage() {
    const ctx = useContext(LanguageContext)
    if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
    return ctx
}

// Small helper: pick the Marathi value when active language is 'mr' and a
// Marathi value exists, otherwise fall back to English. Use this everywhere
// you show text that has an `mr` counterpart in weddingData.js.
export function pick(lang, en, mr) {
    return lang === 'mr' && mr ? mr : en
}