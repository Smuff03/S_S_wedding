import { motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section, ease } from './Reveal'

function Profile({ p, from }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9, ease }}
      className="text-center"
    >
      <motion.div whileHover={{ scale: 1.03 }} className="relative mx-auto w-64 md:w-72">
        <div className="absolute -inset-2 rounded-t-full border border-gold-500/60" />
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
          <img loading="lazy" src={p.photo} alt={p.name} className="aspect-[4/5] w-full rounded-t-full object-cover shadow-xl" />
        </motion.div>
      </motion.div>
      <p className="mt-8 text-xs uppercase tracking-[0.35em] text-saffron-600">{p.role}</p>
      <h3 className="mt-1 font-serif text-4xl text-maroon-800">{p.name}</h3>
      <p className="mx-auto mt-3 max-w-sm text-maroon-800/80 leading-7">{p.bio}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {p.traits.map((t, i) => (
          <motion.span key={t} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="rounded-full border border-gold-400/50 bg-white/70 px-4 py-1 text-sm">{t}</motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Couple() {
  return (
    <Section id="couple" eyebrow="Meet The Couple" title="Bride & Groom" className="bg-cream-100 mandala-bg">
      <div className="grid gap-16 md:grid-cols-2 md:gap-10 items-start">
        <Profile p={data.profiles.groom} from={-60} />
        <Profile p={data.profiles.bride} from={60} />
      </div>
    </Section>
  )
}
