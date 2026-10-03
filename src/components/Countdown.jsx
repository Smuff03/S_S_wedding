import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section } from './Reveal'
import { useLanguage, pick } from '../context/LanguageContext'

const calc = () => {
  const diff = Math.max(0, new Date(data.hero.date) - Date.now())
  return { Days: Math.floor(diff / 864e5), Hours: Math.floor(diff / 36e5) % 24, Minutes: Math.floor(diff / 6e4) % 60, Seconds: Math.floor(diff / 1e3) % 60 }
}

const labelMr = { Days: 'दिवस', Hours: 'तास', Minutes: 'मिनिटे', Seconds: 'सेकंद' }

const Digit = ({ label, value }) => (
  <div className="text-center">
    <div className="relative grid h-20 w-16 sm:h-28 sm:w-24 md:h-32 md:w-28 place-items-center overflow-hidden rounded-2xl border border-gold-400/50 bg-white/10 backdrop-blur">
      <AnimatePresence mode="popLayout">
        <motion.span key={value} initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ duration: 0.35 }}
          className="absolute font-serif text-4xl sm:text-6xl gold-text tabular-nums">{String(value).padStart(2, '0')}</motion.span>
      </AnimatePresence>
    </div>
    <p className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-300">{label}</p>
  </div>
)

export default function Countdown() {
  const { lang } = useLanguage()
  const [t, setT] = useState(calc)
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id) }, [])

  const eyebrow = pick(lang, 'The Big Day Is Near', 'तो खास दिवस जवळ आला')
  const title = pick(lang, 'Counting Every Moment', 'प्रत्येक क्षणांची मोजणी')
  const footer = pick(lang, 'until we say “I do” ✦', 'आम्ही एकमेकांचे होईपर्यंत ✦')

  return (
    <Section id="countdown" eyebrow={eyebrow} title={title} light className="bg-gradient-to-b from-maroon-800 to-maroon-900">
      <div className="flex justify-center gap-2.5 sm:gap-6">
        {Object.entries(t).map(([k, v]) => <Digit key={k} label={pick(lang, k, labelMr[k])} value={v} />)}
      </div>
      <p className="mt-10 text-center font-serif italic text-xl text-cream-100/80">{footer}</p>
    </Section>
  )
}