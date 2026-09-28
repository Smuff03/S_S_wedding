import { useState } from 'react'
import { motion } from 'framer-motion'
import data from '../data/weddingData'
import { Reveal, Section } from './Reveal'

// Deterministic fake QR pattern (placeholder only — NOT scannable)
const cells = Array.from({ length: 225 }, (_, i) => ((i * 7 + (i >> 3) * 13 + (i % 5) * 3) % 5 < 2))
const Finder = ({ x, y }) => (<g transform={`translate(${x} ${y})`}><rect width="7" height="7" fill="#320C0C" /><rect x="1" y="1" width="5" height="5" fill="#fff" /><rect x="2" y="2" width="3" height="3" fill="#320C0C" /></g>)

export default function Shagun() {
  const s = data.shagun
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(s.upiId); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* ignore */ } }
  return (
    <Section id="shagun" eyebrow="Shagun" title="Blessings & Gifts" className="bg-cream-50">
      <Reveal className="mx-auto max-w-3xl">
        <p className="mb-8 text-center font-serif italic text-xl md:text-2xl text-maroon-700">{s.note}</p>
        <div className="mb-6 rounded-xl border border-dashed border-red-400 bg-red-50 px-4 py-2 text-center text-sm text-red-800">
          ⚠️ EDITABLE DUMMY DATA — replace in <code>src/data/weddingData.js</code> before sharing.
        </div>
        <div className="card grid gap-8 p-6 md:grid-cols-[auto_1fr] md:p-10 items-center">
          <motion.div whileHover={{ rotate: 2, scale: 1.03 }} className="mx-auto">
            {s.qrImage ? <img src={s.qrImage} alt="UPI QR" className="h-48 w-48 rounded-xl" loading="lazy" /> : (
              <svg viewBox="-1 -1 17 17" className="h-48 w-48 rounded-xl bg-white p-1 shadow" role="img" aria-label="Dummy QR placeholder">
                {cells.map((on, i) => on && <rect key={i} x={i % 15} y={Math.floor(i / 15)} width="1" height="1" fill="#320C0C" opacity=".85" />)}
                <Finder x={0} y={0} /><Finder x={8} y={0} /><Finder x={0} y={8} />
                <rect x="4.500" y="6" width="6" height="3" fill="#fff" /><text x="7.500" y="8" fontSize="1.500" textAnchor="middle" fill="#A47D1F">DUMMY</text>
              </svg>
            )}
          </motion.div>
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-saffron-600">UPI ID</p>
            <p className="font-serif text-2xl md:text-3xl break-all">{s.upiId}</p>
            <motion.button whileTap={{ scale: 0.95 }} onClick={copy} className="btn btn-gold !py-2.5">{copied ? '✓ Copied' : 'Copy UPI ID'}</motion.button>
            <div className="pt-3 text-sm text-maroon-800/80 space-y-0.5">
              <p>Payee: {s.payee} · {s.phone}</p>
              <p>A/c: {s.bank.account} · IFSC: {s.bank.ifsc}</p>
              <p>{s.bank.bankName}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
