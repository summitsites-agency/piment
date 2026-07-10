import { motion } from 'framer-motion'
import { brand } from '../content'

/* A short, confident intro: the name pops in letter by letter,
   then the whole dark curtain slides up off the screen.
   App.jsx removes it after ~1.8 seconds. */
export default function Loader() {
  const letters = brand.name.toUpperCase().split('')

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-plum"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden="true"
    >
      <div className="flex overflow-hidden">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="display text-creme text-6xl md:text-8xl"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="display text-flame text-6xl md:text-8xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, type: 'spring', stiffness: 300, damping: 12 }}
        >
          .
        </motion.span>
      </div>
    </motion.div>
  )
}
