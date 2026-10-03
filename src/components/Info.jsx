import { motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section } from './Reveal'
import { useLanguage, pick } from '../context/LanguageContext'

export default function Info() {
  const { lang } = useLanguage()
  const eyebrow = pick(lang, 'For Our Guests', 'पाहुण्यांसाठी')
  const title = pick(lang, 'Wedding Information', 'विवाहाची माहिती')

  return (
    <Section id="info" eyebrow={eyebrow} title={title} className="bg-cream-50">
      <div className="grid gap-5 sm:grid-cols-2">
        {data.info.map((b, i) => {
          // Paired with data.mr.info by position, since the Marathi titles
          // read differently from the English ones.
          const mrB = data.mr?.info?.[i]
          const bTitle = pick(lang, b.title, mrB?.title)
          const items = pick(lang, b.items, mrB?.items)
          return (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: (i % 2) * 0.12, duration: 0.7 }} whileHover={{ y: -4 }} className="card p-6">
              <div className="flex items-center gap-3"><span className="text-3xl">{b.icon}</span><h3 className="font-serif text-2xl md:text-3xl">{bTitle}</h3></div>
              <ul className="mt-4 space-y-2 text-maroon-800/85">
                {items.map((it) => <li key={it} className="flex gap-2"><span className="text-gold-500">✦</span><span>{it}</span></li>)}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}