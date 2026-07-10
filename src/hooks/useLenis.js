import { useEffect } from 'react'
import Lenis from 'lenis'

/* Lenis = the library that makes scrolling feel buttery instead of jumpy.
   We start it once when the app loads, and give it a heartbeat
   (requestAnimationFrame) so it can update the scroll position
   ~60 times per second. */
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })

    // Let other components (like the nav) trigger smooth scrolls
    window.__lenis = lenis

    let frame
    const beat = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(beat)
    }
    frame = requestAnimationFrame(beat)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])
}

/* Smoothly scroll to an anchor like "#menu".
   Falls back to normal browser scrolling if Lenis isn't ready. */
export function scrollToId(href) {
  const el = document.querySelector(href)
  if (!el) return
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: -70, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
