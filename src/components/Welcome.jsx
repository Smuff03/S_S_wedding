import { motion } from 'framer-motion'
import data from '../data/weddingData'
import { Reveal, Section } from './Reveal'

export default function Welcome() {
  const w = data.welcome
  return (
    <Section id="welcome" eyebrow="Ganpati Bappa Morya" title="Welcome & Blessings" className="mandala-bg bg-cream-100">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 5, repeat: Infinity }} className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full border border-gold-500/50 bg-white/60 shadow-[0_0_40px_rgba(246,160,53,.4)]">
            <span className="gold-text font-deva text-5xl">ॐ</span>
          </motion.div>
        </Reveal>
        <Reveal delay={0.1}>
          {w.shlokaLines.map((l) => <p key={l} className="font-deva text-xl md:text-2xl text-maroon-700 leading-relaxed">{l}</p>)}
        </Reveal>
        <Reveal delay={0.2}><h3 className="mt-8 font-serif italic text-3xl text-saffron-600">{w.title}</h3></Reveal>
        <Reveal delay={0.3}><p className="mt-4 text-lg leading-8 text-maroon-800/85">{w.blessing}</p></Reveal>
      </div>
    </Section>
  )
}
