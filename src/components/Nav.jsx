import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { brand, nav, visit } from '../content'
import { scrollToId } from '../hooks/useLenis'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // When the page has scrolled a little, give the bar a frosted background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    // tiny delay so the mobile menu can close first
    setTimeout(() => scrollToId(href), open ? 250 : 0)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-creme/85 backdrop-blur-md border-b border-plum/10' : ''
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            onClick={(e) => go(e, '#top')}
            className={`display text-2xl transition-colors ${
              scrolled || open ? 'text-plum' : 'text-creme'
            }`}
          >
            {brand.name}<span className="text-flame">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-flame ${
                    scrolled ? 'text-plum' : 'text-creme'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={visit.cta.href}
              className="hidden rounded-full bg-flame px-5 py-2.5 font-mono text-xs font-bold tracking-widest text-creme uppercase transition-transform hover:scale-105 md:block"
            >
              Réserver
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className={`rounded-full p-2 md:hidden ${
                open ? 'text-creme' : scrolled ? 'text-plum' : 'text-creme'
              }`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-flame px-8 md:hidden"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="display py-3 text-5xl text-creme"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.p
              className="mt-10 font-mono text-xs tracking-widest text-creme/80 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {brand.tag} — {brand.city}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
