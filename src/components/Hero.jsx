import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import data from '../data/weddingData'
import Diya from './Diya'
import { ease } from './Reveal'

const fmt = (d) => new Intl.DateTimeFormat('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(d))
const fmtTime = (d) => new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }).format(new Date(d))

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.22])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const { hero, couple } = data

  const item = (i) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 2.3 + i * 0.25, duration: 1, ease } })

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden grid place-items-center text-center text-cream-50">
      {/* HERO BACKGROUND: your temple photo (falls back to gradient if file missing) */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, scale }}
      >
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${hero.image}), linear-gradient(160deg,#F6A035 0%,#B5560F 45%,#320C0C 100%)`,
            backgroundSize: 'cover', backgroundPosition: 'center',
          }}
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: [1.1, 1.2, 1.1], opacity: 1 }}
          transition={{ scale: { duration: 25, repeat: Infinity, ease: 'linear' }, opacity: { duration: 2.2 } }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/70 via-maroon-900/40 to-maroon-900/85" />
      <motion.div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(246,160,53,.35),transparent_70%)]" animate={{ opacity: [0.6, 1, 0.7] }} transition={{ duration: 6, repeat: Infinity }} />

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 px-6 py-24 max-w-3xl">
        <motion.p {...item(0)} className="font-deva text-2xl md:text-4xl gold-text drop-shadow">{hero.shloka}</motion.p>
        <motion.p {...item(1)} className="mt-8 text-xs md:text-sm uppercase tracking-[0.4em] text-gold-300">The Wedding Of</motion.p>
        <motion.h1 {...item(2)} className="mt-3 font-serif text-6xl sm:text-7xl md:text-9xl leading-[0.95] text-cream-50 drop-shadow-lg">
          {couple.groom.first}
          <span className="block text-3xl md:text-5xl gold-text italic my-1 md:my-2">&amp;</span>
          {couple.bride.first}
        </motion.h1>
        <motion.p {...item(3)} className="mt-6 font-serif italic text-2xl md:text-4xl text-gold-300">{hero.tagline}</motion.p>
        <motion.div {...item(4)} className="mt-6 text-sm md:text-lg tracking-wide text-cream-100">
          <p>{fmt(hero.date)} · {fmtTime(hero.date)}</p>
          <p className="opacity-80">{hero.place}</p>
        </motion.div>
        <motion.div {...item(5)} className="mt-9">
          <motion.a href="#welcome" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-gold px-9 py-4 text-base">
            Enter Invitation <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>↓</motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-10"><Diya size={40} /></div>
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-10"><Diya size={40} /></div>
    </section>
  )
}
