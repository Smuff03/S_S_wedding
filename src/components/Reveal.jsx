import { motion } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

export const Reveal = ({ children, delay = 0, y = 28, x = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay, ease }}
  >
    {children}
  </motion.div>
)

export const Divider = ({ light }) => (
  <div className="flex items-center justify-center gap-3 mt-4" aria-hidden>
    <span className={`h-px w-12 md:w-20 bg-gradient-to-r from-transparent ${light ? 'to-gold-300' : 'to-gold-500'}`} />
    <span className="text-gold-500 text-lg">❁</span>
    <span className={`h-px w-12 md:w-20 bg-gradient-to-l from-transparent ${light ? 'to-gold-300' : 'to-gold-500'}`} />
  </div>
)

export const Section = ({ id, eyebrow, title, children, className = '', light }) => (
  <section id={id} className={`relative px-5 py-20 md:py-28 scroll-mt-4 ${className}`}>
    <div className="mx-auto max-w-6xl">
      <Reveal className="text-center mb-12 md:mb-16">
        <p className={`text-xs md:text-sm uppercase tracking-[0.35em] ${light ? 'text-gold-300' : 'text-saffron-600'}`}>{eyebrow}</p>
        <h2 className={`font-serif text-4xl md:text-6xl mt-3 ${light ? 'text-cream-50' : 'text-maroon-800'}`}>{title}</h2>
        <Divider light={light} />
      </Reveal>
      {children}
    </div>
  </section>
)
