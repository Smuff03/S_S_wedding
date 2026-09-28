import { motion } from 'framer-motion'

/* Illustrated Maharashtrian groom & bride (pure SVG, no image files needed).
   You can replace these with your own PNG illustrations later. */

const bob = { animate: { y: [0, -4, 0] }, transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } }
const skin = '#E7B084'

export function Groom({ className = '' }) {
    return (
        <svg viewBox="0 0 120 300" className={className} role="img" aria-label="Animated groom">
            <ellipse cx="60" cy="292" rx="38" ry="5" fill="#000" opacity=".25" />
            <motion.g {...bob}>
                {/* dhoti */}
                <path d="M27 196h66l7 88H64l-4-44-4 44H20z" fill="#FFF8E7" />
                <path d="M20 274h80v10H20z" fill="#C39A2F" />
                <path d="M20 284h36v6H20zM64 284h36v6H64z" fill="#4E1414" />
                {/* kurta */}
                <path d="M28 96q32-16 64 0l8 104H20z" fill="#FCE9B8" />
                <path d="M60 92v108" stroke="#C39A2F" strokeWidth="2" />
                {[112, 130, 148].map((y) => <circle key={y} cx="60" cy={y} r="2.5" fill="#C39A2F" />)}
                {/* uparna (stole) */}
                <path d="M34 96l16-4 42 108-16 3z" fill="#B5391B" />
                <path d="M34 96l16-4 42 108-16 3z" fill="none" stroke="#EBCB7A" strokeWidth="2" strokeDasharray="4 3" />
                {/* neck + head */}
                <rect x="52" y="78" width="16" height="18" rx="6" fill={skin} />
                <circle cx="60" cy="58" r="22" fill={skin} />
                <circle cx="52" cy="60" r="2" fill="#320C0C" /><circle cx="68" cy="60" r="2" fill="#320C0C" />
                <path d="M50 70q10 6 20 0" stroke="#7A2E1D" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M49 66q11-5 22 0" stroke="#320C0C" strokeWidth="3" fill="none" strokeLinecap="round" />
                <rect x="59" y="44" width="2" height="6" rx="1" fill="#C0392B" />
                {/* pheta (turban) */}
                <path d="M34 50C32 20 88 20 86 50c-8-8-44-8-52 0z" fill="#EE8B1B" />
                <path d="M36 44q24-10 48 0" stroke="#C39A2F" strokeWidth="4" fill="none" />
                <path d="M82 42q22 10 14 34-4-14-16-20z" fill="#D9730D" />
                {/* namaste hands */}
                <path d="M32 100q-8 30 14 46l14-6" fill="none" stroke="#FCE9B8" strokeWidth="14" strokeLinecap="round" />
                <path d="M88 100q8 30-14 46l-14-6" fill="none" stroke="#FCE9B8" strokeWidth="14" strokeLinecap="round" />
                <motion.ellipse cx="60" cy="140" rx="8" ry="11" fill={skin} animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.4, repeat: Infinity }} />
            </motion.g>
        </svg>
    )
}

export function Bride({ className = '' }) {
    return (
        <svg viewBox="0 0 120 300" className={className} role="img" aria-label="Animated bride">
            <ellipse cx="60" cy="292" rx="40" ry="5" fill="#000" opacity=".25" />
            <motion.g {...bob} transition={{ ...bob.transition, delay: 0.8 }}>
                {/* nauvari saree lower */}
                <path d="M24 190h72l14 96H10z" fill="#1E7B57" />
                <path d="M10 272h100v14H10z" fill="#C39A2F" />
                {[34, 48, 62, 76, 90].map((x) => <path key={x} d={`M${x} 196q-3 40-10 76`} stroke="#EBCB7A" strokeWidth="1.5" fill="none" />)}
                <path d="M60 190l50 96H70z" fill="#B5391B" opacity=".9" />
                {/* blouse + pallu */}
                <path d="M30 96q30-14 60 0l6 96H24z" fill="#7A1E2B" />
                <path d="M34 96l14-4 46 98-18 4z" fill="#1E7B57" />
                <path d="M34 96l14-4 46 98-18 4z" fill="none" stroke="#EBCB7A" strokeWidth="3" />
                {/* hair + bun with gajra */}
                <circle cx="60" cy="22" r="13" fill="#1A0B0B" />
                {[-10, -4, 2, 8].map((dx, i) => <circle key={i} cx={52 + dx + 8} cy={30 + (i % 2)} r="2.5" fill="#FFF8E7" />)}
                <circle cx="60" cy="56" r="26" fill="#1A0B0B" />
                {/* neck + face */}
                <rect x="52" y="78" width="16" height="18" rx="6" fill={skin} />
                <ellipse cx="60" cy="60" rx="20" ry="22" fill={skin} />
                <path d="M40 50q20-16 40 0" stroke="#1A0B0B" strokeWidth="6" fill="none" />
                {/* mundavalya pearls + bindi */}
                <path d="M41 50q19 8 38 0" stroke="#FFF8E7" strokeWidth="3" strokeDasharray="1 4" strokeLinecap="round" fill="none" />
                <circle cx="60" cy="52" r="2.500" fill="#C0392B" />
                <circle cx="52" cy="61" r="2" fill="#320C0C" /><circle cx="68" cy="61" r="2" fill="#320C0C" />
                <path d="M54 72q6 4 12 0" stroke="#B5391B" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* nath */}
                <circle cx="66" cy="67" r="3.500" fill="none" stroke="#C39A2F" strokeWidth="1.500" />
                <path d="M66 67q10 4 12-6" stroke="#C39A2F" strokeWidth="1" fill="none" />
                {/* necklace */}
                <path d="M46 96q14 20 28 0" stroke="#EBCB7A" strokeWidth="3" fill="none" />
                {/* namaste hands */}
                <path d="M34 102q-10 26 12 44l14-6" fill="none" stroke="#7A1E2B" strokeWidth="13" strokeLinecap="round" />
                <path d="M86 102q10 26-12 44l-14-6" fill="none" stroke="#7A1E2B" strokeWidth="13" strokeLinecap="round" />
                <motion.ellipse cx="60" cy="140" rx="8" ry="11" fill={skin} animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }} />
                <path d="M34 128h12M74 128h12" stroke="#C39A2F" strokeWidth="3" strokeDasharray="2 3" />
            </motion.g>
        </svg>
    )
}