import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { story } from '../content'
import { FadeUp } from './Bits'

/* One word of the paragraph. Its opacity is tied to how far
   you've scrolled: word #1 lights up first, the last word last. */
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.14, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  )
}

export default function Story() {
  const ref = useRef(null)
  // 0 when the paragraph enters the screen, 1 when it's ~halfway up
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  })

  const words = story.text.split(' ')

  return (
    <section id="story" className="bg-creme px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_1.6fr] md:gap-10">
        {/* Left: label + two "polaroid" photos */}
        <div>
          <FadeUp>
            <span className="inline-block rounded-full bg-basil px-4 py-2 font-mono text-[10px] font-bold tracking-[0.2em] text-creme uppercase">
              {story.label}
            </span>
          </FadeUp>

          <div className="relative mt-12 h-80 md:h-[26rem]">
            {story.photos.map((photo, i) => (
              <FadeUp key={photo.src} delay={0.15 * i}>
                <motion.figure
                  whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                  className={`absolute w-52 rounded-lg bg-white p-2 pb-8 shadow-xl md:w-64 ${
                    i === 0 ? 'top-0 left-0 -rotate-6' : 'top-28 left-24 rotate-3 md:left-32'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-square w-full rounded object-cover"
                  />
                  <figcaption className="mt-2 text-center font-mono text-[10px] tracking-widest text-plum/60">
                    {photo.caption}
                  </figcaption>
                </motion.figure>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Right: the paragraph that lights up as you scroll */}
        <p
          ref={ref}
          className="display text-3xl leading-[1.15] text-plum md:text-[2.9rem]"
        >
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, Math.min(1, (i + 1.5) / words.length)]}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  )
}
