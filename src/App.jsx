import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import useLenis from './hooks/useLenis'

import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Story from './components/Story'
import Dishes from './components/Dishes'
import MenuReceipt from './components/MenuReceipt'

/* Three.js is the heaviest thing on the page, so we load the 3D
   section "lazily": the site shows up instantly, and the 3D code
   downloads quietly in the background. */
const Market3D = lazy(() => import('./components/Market3D'))
import Gallery from './components/Gallery'
import { Visit, Footer } from './components/Visit'

export default function App() {
  const [loading, setLoading] = useState(true)

  useLenis() // buttery smooth scrolling everywhere

  // Show the intro for 1.8s, then lift the curtain
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  // Freeze scrolling while the intro plays
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Dishes />
        <Suspense fallback={<div className="min-h-[95svh] bg-plum" />}>
          <Market3D />
        </Suspense>
        <MenuReceipt />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
