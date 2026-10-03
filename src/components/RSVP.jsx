import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import data from '../data/weddingData'
import { Section } from './Reveal'
import { useLanguage, pick } from '../context/LanguageContext'

const Success = ({ name, attending, onReset, lang }) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
    <svg viewBox="0 0 100 100" className="mx-auto h-28 w-28">
      <motion.circle cx="50" cy="50" r="44" fill="none" stroke="#C39A2F" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
      <motion.path d="M30 52l14 14 27-30" fill="none" stroke="#EE8B1B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 0.7 }} />
    </svg>
    {[...Array(8)].map((_, i) => (
      <motion.span key={i} className="absolute left-1/2 top-24 text-xl" initial={{ opacity: 1, x: 0, y: 0 }} animate={{ opacity: 0, x: Math.cos(i * 0.785) * 120, y: Math.sin(i * 0.785) * 120 }} transition={{ duration: 1.4, delay: 1 }}>🌸</motion.span>
    ))}
    <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-4 font-serif text-4xl">
      {pick(lang, `Thank you, ${name}!`, `धन्यवाद, ${name}!`)}
    </motion.h3>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-2 text-maroon-800/80">
      {attending
        ? pick(lang, 'We’re overjoyed you’ll be there. See you soon! 🙏', 'तुम्ही येणार याचा आम्हाला खूप आनंद आहे. लवकरच भेटू! 🙏')
        : pick(lang, 'We’ll miss you, but you’ll be in our hearts. 🙏', 'तुमची उणीव भासेल, पण तुम्ही आमच्या मनात असाल. 🙏')}
    </motion.p>
    <button onClick={onReset} className="btn btn-ghost mt-6">{pick(lang, 'Submit another response', 'आणखी एक प्रतिसाद पाठवा')}</button>
  </motion.div>
)

export default function RSVP() {
  const { lang } = useLanguage()
  const r = data.rsvp
  const [f, setF] = useState({ name: '', attending: 'yes', guests: 1, message: '' })
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const set = (k, v) => setF((s) => ({ ...s, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    if (!f.name.trim()) return setErr(pick(lang, 'Please enter your name.', 'कृपया तुमचे नाव टाका.'))
    setErr(''); setBusy(true)
    try {
      if (r.endpoint) {
        const res = await fetch(r.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) })
        if (!res.ok) throw new Error('Request failed')
      } else {
        const list = JSON.parse(localStorage.getItem('rsvp') || '[]'); list.push({ ...f, at: new Date().toISOString() })
        localStorage.setItem('rsvp', JSON.stringify(list))
      }
      setSent(true)
    } catch { setErr(pick(lang, 'Something went wrong. Please try WhatsApp below.', 'काहीतरी चूक झाली. कृपया खालील व्हॉट्सॲप वापरून पहा.')) } finally { setBusy(false) }
  }

  const wa = `https://wa.me/${r.whatsapp}?text=${encodeURIComponent(`RSVP — ${f.name || 'Guest'}: ${f.attending === 'yes' ? 'Attending' : 'Not attending'}, guests: ${f.guests}. ${f.message}`)}`

  const eyebrow = pick(lang, `Kindly reply by ${r.deadline}`, `कृपया ${r.deadline} पर्यंत कळवा`)
  const title = pick(lang, 'RSVP', 'उपस्थिती कळवा')

  return (
    <Section id="rsvp" eyebrow={eyebrow} title={title} className="bg-cream-100 mandala-bg">
      <div className="relative mx-auto max-w-xl card p-6 md:p-10">
        <AnimatePresence mode="wait">
          {sent ? <Success key="ok" name={f.name.split(' ')[0]} attending={f.attending === 'yes'} lang={lang} onReset={() => { setSent(false); setF({ name: '', attending: 'yes', guests: 1, message: '' }) }} /> : (
            <motion.form key="form" onSubmit={submit} exit={{ opacity: 0, y: -10 }} className="space-y-5">
              <label className="block"><span className="text-sm text-maroon-700">{pick(lang, 'Your Name *', 'तुमचे नाव *')}</span>
                <input className="input mt-1" value={f.name} onChange={(e) => set('name', e.target.value)} placeholder={pick(lang, 'e.g. Anita Deshmukh', 'उदा. अनिता देशमुख')} autoComplete="name" /></label>
              <div>
                <span className="text-sm text-maroon-700">{pick(lang, 'Will you attend?', 'तुम्ही उपस्थित राहणार का?')}</span>
                <div className="mt-1 grid grid-cols-2 gap-3">
                  {[['yes', pick(lang, '🙏 Joyfully Accept', '🙏 आनंदाने स्वीकार')], ['no', pick(lang, '💐 Regretfully Decline', '💐 दिलगिरीसह नकार')]].map(([v, l]) => (
                    <motion.button type="button" key={v} whileTap={{ scale: 0.96 }} onClick={() => set('attending', v)} aria-pressed={f.attending === v}
                      className={`rounded-xl border px-3 py-3 text-sm transition ${f.attending === v ? 'border-saffron-500 bg-saffron-500 text-white shadow-md' : 'border-gold-400/50 bg-cream-50'}`}>{l}</motion.button>
                  ))}
                </div>
              </div>
              {f.attending === 'yes' && (
                <div>
                  <span className="text-sm text-maroon-700">{pick(lang, 'Number of guests (including you)', 'पाहुण्यांची संख्या (तुमच्यासह)')}</span>
                  <div className="mt-1 flex items-center gap-4">
                    <motion.button type="button" whileTap={{ scale: 0.85 }} onClick={() => set('guests', Math.max(1, f.guests - 1))} className="h-12 w-12 rounded-full border border-gold-500 text-2xl" aria-label={pick(lang, 'Fewer', 'कमी करा')}>−</motion.button>
                    <AnimatePresence mode="popLayout"><motion.span key={f.guests} initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} className="w-10 text-center font-serif text-3xl">{f.guests}</motion.span></AnimatePresence>
                    <motion.button type="button" whileTap={{ scale: 0.85 }} onClick={() => set('guests', Math.min(r.maxGuests, f.guests + 1))} className="h-12 w-12 rounded-full border border-gold-500 text-2xl" aria-label={pick(lang, 'More', 'वाढवा')}>+</motion.button>
                  </div>
                </div>
              )}
              <label className="block"><span className="text-sm text-maroon-700">{pick(lang, 'Message / dietary needs (optional)', 'निरोप / आहारविषयक गरजा (ऐच्छिक)')}</span>
                <textarea className="input mt-1 min-h-28" value={f.message} onChange={(e) => set('message', e.target.value)} placeholder={pick(lang, 'Your blessings for the couple…', 'जोडप्यासाठी तुमचे आशीर्वाद…')} /></label>
              {err && <p role="alert" className="text-sm text-red-700">{err}</p>}
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} disabled={busy} className="btn btn-gold w-full !py-4 text-base disabled:opacity-60">{busy ? pick(lang, 'Sending…', 'पाठवत आहे…') : pick(lang, 'Send RSVP', 'RSVP पाठवा')}</motion.button>
              <div className="text-center text-sm text-maroon-800/70 space-y-1">
                <a href={wa} target="_blank" rel="noreferrer" className="underline decoration-gold-500">{pick(lang, 'Or reply on WhatsApp', 'किंवा व्हॉट्सॲपवर कळवा')}</a>
                <p>{r.phone} · {r.email}</p>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}