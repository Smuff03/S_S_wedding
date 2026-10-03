import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import data from '../data/weddingData'
import { useLanguage, pick } from '../context/LanguageContext'

const links = [
  ['welcome', 'Blessings', 'आशीर्वाद'], ['journey', 'Our Journey', 'आमचा प्रवास'], ['couple', 'Bride & Groom', 'वधू-वर'], ['family', 'Family', 'कुटुंब'],
  ['events', 'Events', 'कार्यक्रम'], ['gallery', 'Gallery', 'छायाचित्रे'], ['info', 'Guest Info', 'पाहुण्यांसाठी माहिती'], ['rsvp', 'RSVP', 'उपस्थिती कळवा'], ['shagun', 'Shagun', 'शगुन'],
]

export default function Navbar() {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.6)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80 }} animate={{ y: solid ? 0 : -80 }} transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 bg-maroon-900/90 backdrop-blur-md border-b border-gold-500/30"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 h-14">
          <a href="#top" className="font-serif text-xl gold-text">{data.couple.groom.first} &amp; {data.couple.bride.first}</a>
          <nav className="hidden lg:flex gap-6 text-sm text-cream-100/90">
            {links.map(([id, l, lMr]) => <a key={id} href={`#${id}`} className="hover:text-gold-300 transition-colors">{pick(lang, l, lMr)}</a>)}
          </nav>
          <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden h-10 w-10 grid place-items-center text-gold-300 text-2xl">{open ? '✕' : '☰'}</button>
        </div>
        <motion.div style={{ scaleX: progress }} className="h-0.5 origin-left bg-gradient-to-r from-gold-400 to-saffron-500" />
      </motion.header>

      {/* Mobile: floating menu button while hero is visible */}
      {!solid && (
        <button aria-label="Menu" onClick={() => setOpen(true)} className="lg:hidden fixed top-4 right-4 z-50 h-11 w-11 rounded-full bg-maroon-900/60 backdrop-blur text-gold-300 text-xl">☰</button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-maroon-900/97 flex flex-col items-center justify-center gap-5 lg:hidden" style={{ backgroundColor: 'rgba(50,12,12,.97)' }}>
            <button aria-label="Close" onClick={() => setOpen(false)} className="absolute top-4 right-4 h-11 w-11 text-gold-300 text-2xl">✕</button>
            {links.map(([id, l, lMr], i) => (
              <motion.a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}
                className="font-serif text-3xl text-cream-100 active:text-gold-300">{pick(lang, l, lMr)}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}