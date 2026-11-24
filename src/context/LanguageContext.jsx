import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { WEDDING } from '@/data/weddingData';

// Context to hold language state and translation data
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('site-lang') || 'en';
  });

  // Persist language choice and set html lang attribute
  useEffect(() => {
    localStorage.setItem('site-lang', lang);
    document.documentElement.lang = lang === 'mr' ? 'mr' : 'en';
  }, [lang]);

  const toggleLang = () => setLang((l) => (l === 'en' ? 'mr' : 'en'));

  // Build translation object based on selected language
  const t = useMemo(() => {
    if (lang === 'mr' && WEDDING.mr) {
      // Merge base English data with Marathi overrides (deep merge for objects/arrays)
      return { ...WEDDING, ...WEDDING.mr };
    }
    return WEDDING;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to access the context
export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>');
  return ctx;
};

// Alias for backward compatibility
export const useLanguage = useLang;

// Helper to pick Marathi value when available
export function pick(lang, en, mr) {
  return lang === 'mr' && mr ? mr : en;
}
