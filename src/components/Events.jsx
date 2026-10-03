import { motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section } from './Reveal'
import { useLanguage, pick } from '../context/LanguageContext'

const dEn = (s) => new Intl.DateTimeFormat('en-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(s))
const tEn = (s) => new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }).format(new Date(s))
const dMr = (s) => new Intl.DateTimeFormat('mr-IN', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(s))
const tMr = (s) => new Intl.DateTimeFormat('mr-IN', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' }).format(new Date(s))
const utc = (s) => new Date(s).toISOString().replace(/[-:]|\.\d{3}/g, '')

const gcal = (e) => `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${e.name} — Sagar & Shrutika`)}&dates=${utc(e.start)}/${utc(e.end)}&details=${encodeURIComponent(e.note)}&location=${encodeURIComponent(`${e.venue}, ${e.address}`)}`
const maps = (e) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.mapQuery)}`

function downloadIcs(e) {
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding//EN', 'BEGIN:VEVENT', `UID:${e.id}@wedding`, `DTSTAMP:${utc(new Date())}`, `DTSTART:${utc(e.start)}`, `DTEND:${utc(e.end)}`, `SUMMARY:${e.name} — Sagar & Shrutika`, `LOCATION:${e.venue}, ${e.address}`, `DESCRIPTION:${e.note}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n')
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  const a = Object.assign(document.createElement('a'), { href: url, download: `${e.id}.ics` })
  a.click(); URL.revokeObjectURL(url)
}

export default function Events() {
  const { lang } = useLanguage()
  const d = lang === 'mr' ? dMr : dEn
  const t = lang === 'mr' ? tMr : tEn
  const eyebrow = pick(lang, 'Celebrations', 'सोहळे')
  const title = pick(lang, 'Wedding Events', 'विवाह कार्यक्रम')
  const mapLabel = pick(lang, '📍 Map', '📍 नकाशा')
  const icsLabel = pick(lang, '⬇ .ics', '⬇ .ics')

  return (
    <Section id="events" eyebrow={eyebrow} title={title} className="bg-cream-50">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.events.map((e, i) => {
          const mrE = data.mr?.events?.[e.id]
          const name = pick(lang, e.name, mrE?.name)
          const note = pick(lang, e.note, mrE?.note)
          return (
            <motion.div key={e.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.7, delay: (i % 3) * 0.12 }}
              whileHover={{ y: -6 }} className={`card p-6 flex flex-col ${e.id === 'wedding' ? 'ring-2 ring-gold-400 lg:scale-[1.03]' : ''}`}>
              <motion.div whileHover={{ rotate: [0, -10, 10, 0] }} className="text-4xl">{e.icon}</motion.div>
              <h3 className="mt-3 font-serif text-3xl text-maroon-800">{name}</h3>
              <p className="mt-2 text-saffron-600 font-medium">{d(e.start)}</p>
              <p className="text-maroon-800/80">{t(e.start)} – {t(e.end)}</p>
              <p className="mt-3 font-serif text-xl">{e.venue}</p>
              <p className="text-sm text-maroon-800/70">{e.address}</p>
              <p className="mt-3 text-sm italic text-maroon-700 flex-1">{note}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <motion.a whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04 }} href={maps(e)} target="_blank" rel="noreferrer" className="btn btn-gold !py-2.5 !px-4">{mapLabel}</motion.a>
                <motion.a whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04 }} href={gcal(e)} target="_blank" rel="noreferrer" className="btn btn-ghost !py-2.5 !px-4">📅 Google</motion.a>
                <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04 }} onClick={() => downloadIcs(e)} className="btn btn-ghost !py-2.5 !px-4">{icsLabel}</motion.button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}