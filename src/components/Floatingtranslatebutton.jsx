import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Fixed floating button, bottom-left corner, above everything else.
// Tap to toggle the whole site between English and Marathi.
export default function FloatingTranslateButton() {
    const { lang, toggleLang } = useLanguage()

    return (
        <motion.button
            onClick={toggleLang}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.92 }}
            aria-label={lang === 'en' ? 'Translate to Marathi' : 'इंग्रजीमध्ये भाषांतर करा'}
            className="fixed bottom-5 left-4 md:bottom-8 md:left-6 z-[100] flex items-center gap-2 rounded-full border border-gold-400/60 bg-maroon-800/95 px-4 py-2.5 shadow-[0_8px_24px_-6px_rgba(0,0,0,.5)] backdrop-blur-sm"
        >
            <span className="text-base">🌐</span>
            <span className="font-serif text-sm tracking-wide text-gold-300">
                {lang === 'en' ? 'मराठी' : 'English'}
            </span>
        </motion.button>
    )
}