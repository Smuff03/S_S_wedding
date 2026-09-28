import { motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section } from './Reveal'

const Group = ({ g }) => (
  <div className="text-center">
    <p className="text-xs uppercase tracking-[0.3em] text-saffron-600">{g.label}</p>
    {g.people.map((n) => <p key={n} className="mt-1 font-serif text-xl md:text-2xl text-maroon-800">{n}</p>)}
  </div>
)

export default function Family() {
  const sides = [data.family.groom, data.family.bride]
  return (
    <Section id="family" eyebrow="With Blessings Of" title="Our Families" className="bg-maroon-900 text-cream-50" light>
      <div className="grid gap-8 md:grid-cols-2">
        {sides.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ y: -4 }} className="rounded-2xl border border-gold-400/40 bg-white/95 p-7 md:p-9 space-y-6 shadow-2xl">
            <h3 className="text-center font-serif text-3xl gold-text">{s.title}</h3>
            <Group g={s.parents} /><div className="mx-auto h-px w-16 bg-gold-400/50" />
            <Group g={s.paternal} /><Group g={s.maternal} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
