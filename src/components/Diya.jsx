import { motion } from 'framer-motion'

// Flickering diya — transform/opacity only
export default function Diya({ size = 44, className = '' }) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }} aria-hidden>
      <motion.span
        className="absolute inset-0 rounded-full bg-saffron-400/50 blur-xl"
        animate={{ opacity: [0.5, 0.9, 0.6, 1, 0.55], scale: [1, 1.15, 1.03, 1.2, 1] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 64 64" className="relative w-full h-full">
        <motion.path
          d="M32 6c6 8 9 13 6 19-1.5 3-4 4.5-6 4.5s-4.5-1.500-6-4.500C23 19 26 14 32 6z"
          fill="#FFB53A" style={{ originX: '50%', originY: '90%', transformBox: 'fill-box' }}
          animate={{ scaleY: [1, 1.12, 0.95, 1.08, 1], scaleX: [1, 0.94, 1.04, 0.97, 1], rotate: [0, -2, 2, -1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <path d="M8 38h48c0 10-9 18-24 18S8 48 8 38z" fill="#C39A2F" />
        <path d="M8 38h48" stroke="#EBCB7A" strokeWidth="2.500" />
      </svg>
    </div>
  )
}
