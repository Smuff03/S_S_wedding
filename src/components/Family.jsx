import { motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section } from './Reveal'
import { useLanguage, pick } from '../context/LanguageContext'

// Labels here aren't stored per-wedding in weddingData.js, so they're
// translated with a small fixed dictionary instead. Names themselves are
// left as you typed them in weddingData.js (most families keep names in
// Latin/Devanagari script as-is rather than translating them).
const titleMr = { 'Family of the Groom': 'वराचे कुटुंब', 'Family of the Bride': 'वधूचे कुटुंब' }
const labelMr = { Parents: 'आई-वडील', 'Paternal Grandparents': 'आजोबा-आजी (वडिलांकडील)', 'Maternal Grandparents': 'आजोबा-आजी (आईकडील)' }

const Group = ({ g, lang }) => (
  <div className="text-center">
    <p className="text-xs uppercase tracking-[0.3em] text-saffron-600">{pick(lang, g.label, labelMr[g.label])}</p>
    {g.people.map((n) => <p key={n} className="mt-1 font-serif text-xl md:text-2xl text-maroon-800">{n}</p>)}
  </div>
)

export default function Family() {
  const { lang } = useLanguage()
  const sides = [data.family.groom, data.family.bride]
  const eyebrow = pick(lang, 'With Blessings Of', 'यांच्या आशीर्वादाने')
  const title = pick(lang, 'Our Families', 'आमची कुटुंबे')

  return (
    <Section id="family" eyebrow={eyebrow} title={title} className="bg-maroon-900 text-cream-50" light>
      <div className="grid gap-8 md:grid-cols-2">
        {sides.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.15 }}
            whileHover={{ y: -4 }} className="rounded-2xl border border-gold-400/40 bg-white/95 p-7 md:p-9 space-y-6 shadow-2xl">
            <h3 className="text-center font-serif text-3xl gold-text">{pick(lang, s.title, titleMr[s.title])}</h3>
            <Group g={s.parents} lang={lang} /><div className="mx-auto h-px w-16 bg-gold-400/50" />
            <Group g={s.paternal} lang={lang} /><Group g={s.maternal} lang={lang} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}