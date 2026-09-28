import { motion } from 'framer-motion'
import data from '../data/weddingData'
import Diya from './Diya'
import { Divider, Reveal } from './Reveal'

export default function Thanks() {
  const { couple, thanks } = data
  return (
    <section id="thanks" className="relative overflow-hidden bg-gradient-to-b from-maroon-800 to-maroon-900 px-6 py-24 md:py-32 text-center text-cream-50">
      <motion.div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-saffron-500/20 blur-3xl" animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />
      <div className="relative">
        <Reveal><p className="font-deva text-2xl gold-text">॥ श्री गणेशाय नमः ॥</p></Reveal>
        <Reveal delay={0.15}><h2 className="mt-8 font-serif text-5xl md:text-8xl">{couple.groom.first} <span className="gold-text italic">&amp;</span> {couple.bride.first}</h2></Reveal>
        <Reveal delay={0.25}><p className="mx-auto mt-6 max-w-xl text-lg text-cream-100/85">{thanks.message}</p></Reveal>
        <Reveal delay={0.35}>
          <motion.p whileHover={{ scale: 1.05 }} className="mt-8 inline-block rounded-full border border-gold-400/60 px-8 py-3 font-serif text-2xl md:text-3xl gold-text">{couple.hashtag}</motion.p>
        </Reveal>
        <Reveal delay={0.45}><div className="mt-10 flex justify-center gap-6"><Diya /><Diya size={56} /><Diya /></div></Reveal>
        <Divider light />
        <p className="mt-6 text-sm tracking-widest uppercase text-gold-300">With love, {thanks.families}</p>
        <p className="mt-10 text-xs text-cream-100/50">© {new Date().getFullYear()} {couple.groom.full} &amp; {couple.bride.full}</p>
      </div>
    </section>
  )
}
