import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Light-weight floating petals (fewer on mobile, none if reduced-motion)
export default function Petals() {
  const reduce = useReducedMotion()
  const petals = useMemo(() => {
    const n = typeof window !== 'undefined' && window.innerWidth < 768 ? 6 : 12
    return Array.from({ length: n }, (_, i) => ({
      id: i, left: Math.random() * 100, size: 10 + Math.random() * 12,
      dur: 14 + Math.random() * 12, delay: -Math.random() * 20, sway: 30 + Math.random() * 60,
      color: ['#F6A035', '#EBCB7A', '#F4B6A0', '#D9730D'][i % 4],
    }))
  }, [])
  if (reduce) return null
  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <motion.span
          key={p.id}
          className="absolute top-0 block rounded-[60%_0_60%_0] opacity-70 will-change-transform"
          style={{ left: `${p.left}%`, width: p.size, height: p.size, background: p.color }}
          initial={{ y: '-10vh' }}
          animate={{ y: '110vh', x: [0, p.sway, -p.sway, 0], rotate: [0, 200, 400] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}
