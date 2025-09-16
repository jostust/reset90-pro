import React from 'react'
import { createRoot } from 'react-dom/client'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Lenis from 'lenis'
import './index.css'

import Hero from './sections/Hero'
import Results from './sections/Results'
import CtaRibbon from './sections/CtaRibbon'
import OnTheGo from './sections/OnTheGo'
import Plans from './sections/Plans'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'

function App(){
  React.useEffect(()=>{
    const lenis = new Lenis({ smoothWheel: true, duration: 1.2 })
    function raf(time){ lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return ()=> lenis.destroy()
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <header className="sticky top-0 z-40 bg-[#0b0d0f]/90 backdrop-blur border-b border-line">
        <div className="container-outer flex items-center justify-between py-3">
          <div className="font-extrabold tracking-wide">א‑Reset</div>
          <a href="https://wa.me/XXXXXXXXXXX" target="_blank" className="btn btn-primary">JOIN NOW</a>
        </div>
      </header>

      <main>
        <Hero />
        <Results />
        <CtaRibbon />
        <OnTheGo />
        <Plans />
        <Newsletter />
      </main>

      <Footer />
    </LazyMotion>
  )
}

createRoot(document.getElementById('root')).render(<App />)
