import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Diya from './Diya'

export default function Loader() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : ''
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [show])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-maroon-900 text-center"
          exit={{ opacity: 0, transition: { duration: 0.9 } }}
        >
          <div>
            <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="gold-text font-deva text-6xl">ॐ</motion.div>
            <Diya className="mt-4" size={52} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-4 font-serif text-gold-300 tracking-[0.3em] text-sm uppercase">Sagar &amp; Shrutika</motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
