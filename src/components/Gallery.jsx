import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section } from './Reveal'
import { useLanguage, pick } from '../context/LanguageContext'

const hMap = { tall: 'aspect-[4/5]', mid: 'aspect-[10/9.5]', short: 'aspect-[10/7]' }

export default function Gallery() {
  const { lang } = useLanguage()
  const [idx, setIdx] = useState(null)
  const imgs = data.gallery
  const go = useCallback((d) => setIdx((i) => (i + d + imgs.length) % imgs.length), [imgs.length])

  useEffect(() => {
    if (idx === null) return
    const k = (e) => { if (e.key === 'Escape') setIdx(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) }
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [idx, go])

  const eyebrow = pick(lang, 'Moments', 'आठवणी')
  const title = pick(lang, 'Our Gallery', 'आमचे छायाचित्र')
  const swipeHint = pick(lang, 'swipe to browse', 'पाहण्यासाठी सरकवा')

  return (
    <Section id="gallery" eyebrow={eyebrow} title={title} className="bg-cream-100">
      <div className="columns-2 md:columns-3 gap-3 md:gap-4">
        {imgs.map((im, i) => (
          <motion.button key={im.src} layoutId={`g-${i}`} onClick={() => setIdx(i)} aria-label={`Open ${im.alt}`}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="mb-3 md:mb-4 block w-full overflow-hidden rounded-xl shadow-md break-inside-avoid">
            <img loading="lazy" decoding="async" src={im.src} alt={im.alt} className={`w-full object-cover ${hMap[im.h] || ''}`} />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div className="fixed inset-0 z-[70] grid place-items-center bg-black/90 p-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIdx(null)}>
            <button aria-label="Close" className="absolute top-4 right-4 z-10 h-11 w-11 rounded-full bg-white/15 text-white text-xl">✕</button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); go(-1) }} className="hidden md:grid absolute left-4 h-12 w-12 place-items-center rounded-full bg-white/15 text-white text-2xl">‹</button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); go(1) }} className="hidden md:grid absolute right-4 h-12 w-12 place-items-center rounded-full bg-white/15 text-white text-2xl">›</button>
            <AnimatePresence mode="wait">
              <motion.img
                key={idx} src={imgs[idx].src} alt={imgs[idx].alt}
                className="max-h-[85vh] max-w-full rounded-lg object-contain touch-pan-y"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}
                drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.6}
                onDragEnd={(_, { offset, velocity }) => { if (offset.x < -80 || velocity.x < -500) go(1); else if (offset.x > 80 || velocity.x > 500) go(-1) }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
            <p className="absolute bottom-5 text-sm text-white/70">{idx + 1} / {imgs.length} · {swipeHint}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}