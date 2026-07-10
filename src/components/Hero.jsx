import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { hero, brand } from '../content'
import { scrollToId } from '../hooks/useLenis'
import { MagneticButton } from './Bits'

export default function Hero() {
  const ref = useRef(null)

  // As you scroll past the hero, the video gently zooms and dims (parallax)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18])
  const videoOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120])

  const go = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToId(href)
    }
  }

  return (
    <section id="top" ref={ref} className="relative h-[100svh] overflow-hidden bg-plum">
      {/* ---------- THE VIDEO ---------- */}
      <motion.div style={{ scale: videoScale, opacity: videoOpacity }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={hero.video.poster}
        >
          {/* The browser tries these top to bottom, so extras are backups */}
          {hero.video.sources.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
        {/* Dark tint so the white text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/40 to-plum/30" />
      </motion.div>

      {/* ---------- THE WORDS ---------- */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex h-full flex-col justify-end px-5 pb-24 md:px-10 md:pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-creme/30 bg-plum/40 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-creme backdrop-blur-sm md:text-xs"
        >
          <span className="h-2 w-2 rounded-full bg-mango" />
          {hero.eyebrow}
        </motion.p>

        {/* Each line rises out of an invisible "mask" — a classic premium reveal */}
        <h1 className="display text-creme" style={{ fontSize: 'clamp(4.5rem, 16vw, 13rem)' }}>
          {hero.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '105%' }}
                animate={{ y: 0 }}
                transition={{ delay: 2.15 + i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === hero.headline.length - 1 ? (
                  <>
                    {line.replace('.', '')}
                    <span className="text-flame">.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="max-w-md text-base text-creme/85 md:text-lg"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.75, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <MagneticButton
              href={hero.ctaPrimary.href}
              onClick={(e) => go(e, hero.ctaPrimary.href)}
              className="inline-block cursor-pointer rounded-full bg-flame px-7 py-4 font-mono text-xs font-bold tracking-widest text-creme uppercase"
            >
              {hero.ctaPrimary.label}
            </MagneticButton>
            <MagneticButton
              href={hero.ctaSecondary.href}
              onClick={(e) => go(e, hero.ctaSecondary.href)}
              className="inline-block cursor-pointer rounded-full border border-creme/50 px-7 py-4 font-mono text-xs font-bold tracking-widest text-creme uppercase backdrop-blur-sm"
            >
              {hero.ctaSecondary.label}
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------- SPINNING BADGE (top right-ish) ---------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className="absolute top-24 right-6 z-10 hidden md:block"
        aria-hidden="true"
      >
        <svg viewBox="0 0 120 120" className="animate-spin-slow h-28 w-28">
          <defs>
            <path id="badge-circle" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
          </defs>
          <text className="fill-creme font-mono" style={{ fontSize: 11, letterSpacing: 3 }}>
            <textPath href="#badge-circle">
              {`${brand.name.toUpperCase()} • ${brand.city.toUpperCase()} • DEPUIS ${brand.since} • `}
            </textPath>
          </text>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-2xl">🌶️</span>
      </motion.div>

      {/* ---------- SCROLL HINT ---------- */}
      <motion.button
        onClick={() => scrollToId('#story')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-creme/70 md:block"
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown size={22} />
        </motion.span>
      </motion.button>
    </section>
  )
}
