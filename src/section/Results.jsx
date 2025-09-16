import { m, useAnimationControls } from 'framer-motion'
import React from 'react'

const Slide = ({img, name, meta, quote}) => (
  <div className="carousel-slide">
    <div className="grid lg:grid-cols-2 gap-4 bg-[#0e0f10] border border-line rounded-2xl p-4">
      <img src={img} alt={name} className="rounded-xl border border-line" />
      <div className="text-[#cfd2d7] flex flex-col">
        <div className="flex gap-3 text-sm opacity-90 mb-1">
          {meta.map((t,i)=>(<span key={i}>{t}</span>))}
        </div>
        <p className="text-lg leading-relaxed">“{quote}”</p>
      </div>
    </div>
  </div>
)

export default function Results(){
  const ref = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  const slides = [
    { img:'/before-after-1.jpg', name:'Jamie', meta:['JAMIE','GYM WORKOUTS','9 MONTHS'], quote:'Me encanta el reto; progreso cada semana y entreno con confianza.' },
    { img:'/before-after-2.jpg', name:'Bridgette', meta:['BRIDGETTE','GYM WORKOUTS'], quote:'La variedad me mantiene motivada y los resultados hablan solos.' },
    { img:'/before-after-3.jpg', name:'Sarah', meta:['SARAH','16 WEEKS'], quote:'Recuperé energía y confianza sin extremos.' },
  ]

  React.useEffect(()=>{
    const el = ref.current
    const onKey = (e)=>{
      if(e.key === 'ArrowLeft') prev()
      if(e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  }, [])

  const next = ()=> setIndex((i)=> (i+1) % slides.length)
  const prev = ()=> setIndex((i)=> (i-1+slides.length)%slides.length)

  return (
    <section className="py-12">
      <div className="container-outer">
        <h2 className="text-center text-3xl lg:text-4xl font-extrabold tracking-wide">
          REAL PEOPLE <span className="text-accent-pink">REAL RESULTS</span>
        </h2>
      </div>

      <div className="relative max-w-[1200px] mx-auto mt-4" ref={ref}>
        <button onClick={prev} aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-accent-pink text-black font-extrabold z-10">‹</button>
        <div className="carousel-track px-12">
          {slides.map((s,i)=>(
            <m.div key={i}
              initial={{opacity:0, x: i<index?-40:40}}
              animate={{opacity: i===index?1:0.2, x:0}}
              transition={{duration:.5, ease:[0.22,1,0.36,1]}}
            >
              <Slide {...s} />
            </m.div>
          ))}
        </div>
        <button onClick={next} aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-accent-pink text-black font-extrabold z-10">›</button>
      </div>
    </section>
  )
}
