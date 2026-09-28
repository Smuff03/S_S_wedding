import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import data from '../data/weddingData'
import { Groom, Bride } from './Figures'
import { ease } from './Reveal'

// Scroll timeline: 0 → CURTAIN_END curtains open & characters walk in,
// then intro story, then each milestone gets an equal slice of the scroll.
const CURTAIN_END = 0.2
const STORY_START = 0.26

export default function Journey() {
  const ref = useRef(null)
  const rm = useReducedMotion()
  const [active, setActive] = useState(-1) // -1 = intro story
  const items = data.journey
  const n = items.length

  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  // Curtains
  const curL = useTransform(p, [0, CURTAIN_END], ['0%', '-102%'])
  const curR = useTransform(p, [0, CURTAIN_END], ['0%', '102%'])
  // Characters: walk in from opposite ends, then slowly drift toward each other
  const gx = useTransform(p, [0.04, CURTAIN_END + 0.05, 1], ['-40vw', '0vw', '5vw'])
  const bx = useTransform(p, [0.04, CURTAIN_END + 0.05, 1], ['40vw', '0vw', '-5vw'])
  // Thread of love between them (each half fills toward the centre)
  const thread = useTransform(p, [STORY_START, 0.98], [0, 1])
  const head = useTransform(p, [CURTAIN_END - 0.08, CURTAIN_END], [0, 1])
  const glow = useTransform(p, [0.9, 1], [0.4, 1])

  useMotionValueEvent(p, 'change', (v) => {
    const i = v < STORY_START + 0.02 ? -1 : Math.min(n - 1, Math.floor(((v - STORY_START) / (1 - STORY_START)) * n))
    setActive((cur) => (cur === i ? cur : i))
  })

  const go = (i) => {
    const el = ref.current
    const top = el.getBoundingClientRect().top + window.scrollY
    const range = el.offsetHeight - window.innerHeight
    const target = i < 0 ? 0.24 : STORY_START + ((i + 0.5) / n) * (1 - STORY_START)
    window.scrollTo({ top: top + target * range, behavior: rm ? 'auto' : 'smooth' })
  }

  const { groom, bride } = data.couple
  const intro = data.journeyIntro ?? 'Two souls, one destiny. From a chance hello to a lifetime of promises, our story has been written with laughter, chai and the blessings of Bappa. Scroll to walk through our memories.'
  const tags = data.journeyTags ?? ['Chai Lovers', 'Sunset Chasers', 'Ganpati Devotees']
  const m = items[active]

  return (
    <section id="journey" ref={ref} style={{ height: `${(n + 2) * 85}svh` }} className="relative bg-maroon-900">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[radial-gradient(ellipse_at_50%_35%,#6B1E1E_0%,#320C0C_65%,#1d0606_100%)]">
        <motion.div style={{ opacity: glow }} className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-30 mandala-bg" />

        {/* Heading */}
        <motion.div style={{ opacity: head }} className="absolute inset-x-0 top-5 md:top-8 z-20 text-center px-4">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold-300">Our Love Journey</p>
          <h2 className="mt-1 font-serif text-3xl md:text-5xl text-cream-50">{groom.first} <span className="gold-text italic">&amp;</span> {bride.first}</h2>
        </motion.div>

        {/* Story stage */}
        <div className="absolute inset-x-0 top-24 bottom-52 md:top-28 md:bottom-36 z-20 grid place-items-center px-4">
          <AnimatePresence mode="wait">
            {active < 0 ? (
              <motion.div key="intro" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.6, ease }} className="max-w-xl text-center">
                <p className="font-serif italic text-lg md:text-2xl leading-relaxed text-cream-100">{intro}</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {tags.map((t, i) => (
                    <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + i * 0.12 }} className="rounded-full border border-gold-400/60 bg-white/5 px-4 py-1.5 text-xs md:text-sm tracking-wide text-gold-300">{t}</motion.span>
                  ))}
                </div>
                <motion.p animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="mt-8 text-xs uppercase tracking-[0.3em] text-gold-300/80">Scroll ↓</motion.p>
              </motion.div>
            ) : (
              <motion.article key={active} initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -30, scale: 0.98 }} transition={{ duration: 0.55, ease }}
                className="w-full max-w-2xl overflow-hidden rounded-2xl border border-gold-400/50 bg-cream-50/95 shadow-[0_20px_60px_-10px_rgba(0,0,0,.6)] md:grid md:grid-cols-[1fr_1.1fr]">
                <div className="h-28 md:h-full md:min-h-[15rem] overflow-hidden">
                  <motion.img initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 1.4 }} src={m.image} alt={m.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-4 md:p-7 text-center md:text-left">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-saffron-600">{m.date} · {active + 1}/{n}</p>
                  <h3 className="mt-1 font-serif text-2xl md:text-4xl text-maroon-800">{m.title}</h3>
                  <p className="mt-1 text-sm md:text-base text-maroon-800/80">{m.short}</p>
                  <p className="mt-2 md:mt-3 border-gold-400 font-serif italic text-base md:text-lg text-maroon-700 md:border-l-2 md:pl-3">{m.story}</p>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>

        {/* Milestone dots (tap to jump) */}
        <div className="absolute inset-x-0 bottom-40 md:bottom-28 z-30 flex justify-center gap-2">
          {[-1, ...items.keys()].map((i) => (
            <button key={i} onClick={() => go(i)} aria-label={i < 0 ? 'Intro' : items[i].title} className="grid h-6 w-6 place-items-center">
              <span className={`block rounded-full transition-all duration-300 ${active === i ? 'h-2.5 w-6 bg-saffron-500' : 'h-2 w-2 bg-gold-300/50'}`} />
            </button>
          ))}
        </div>

        {/* Thread of love + characters at opposite ends */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between px-2 md:px-[4vw]">
          <motion.div style={{ x: rm ? 0 : gx }} className="flex w-[30vw] max-w-[9rem] md:max-w-[11rem] flex-col items-center will-change-transform">
            <Groom className="h-36 md:h-[42vh] md:max-h-[22rem] w-auto" />
            <span className="mt-1 font-serif text-sm md:text-lg text-gold-300">{groom.first}</span>
          </motion.div>

          <div className="mb-14 md:mb-16 flex flex-1 items-center px-2">
            <motion.div style={{ scaleX: thread }} className="h-0.5 flex-1 origin-left bg-gradient-to-r from-transparent to-gold-400" />
            <motion.span animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 1.4, repeat: Infinity }} className="mx-2 text-xl md:text-2xl">❤️</motion.span>
            <motion.div style={{ scaleX: thread }} className="h-0.5 flex-1 origin-right bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <motion.div style={{ x: rm ? 0 : bx }} className="flex w-[30vw] max-w-[9rem] md:max-w-[11rem] flex-col items-center will-change-transform">
            <Bride className="h-36 md:h-[42vh] md:max-h-[22rem] w-auto" />
            <span className="mt-1 font-serif text-sm md:text-lg text-gold-300">{bride.first}</span>
          </motion.div>
        </div>

        {/* Theatre curtains */}
        {[['left', curL], ['right', curR]].map(([side, x]) => (
          <motion.div key={side} style={{ x }} className={`absolute inset-y-0 z-40 w-1/2 will-change-transform ${side === 'left' ? 'left-0' : 'right-0'}`}>
            <div className="h-full w-full bg-[linear-gradient(90deg,#4E1414,#8B2323,#4E1414)]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,.28)_0_10px,transparent_10px_30px)]" />
            <div className={`absolute inset-y-0 w-1.5 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-300 ${side === 'left' ? 'right-0' : 'left-0'}`} />
            <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-b from-gold-400 to-transparent" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}