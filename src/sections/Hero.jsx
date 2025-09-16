import { m } from 'framer-motion'

const fadeUp = { hidden:{opacity:0, y:20}, visible:(i=0)=>({opacity:1,y:0,transition:{delay:0.15*i,duration:.6,ease:[0.22,1,0.36,1]}}) }

export default function Hero(){
  return (
    <section className="grid lg:grid-cols-2 border-b border-line">
      <div className="order-1 lg:order-none">
        <img src="/hero-left.jpg" alt="Coach" className="h-[55vh] lg:h-[85vh] w-full object-cover" />
      </div>
      <div className="flex items-center bg-gradient-to-r from-[#0b0d0f] to-[#101316]">
        <div className="container-outer py-12">
          <m.p className="tracking-[.2em] text-muted mb-1" variants={fadeUp} initial="hidden" animate="visible">HI! I'M</m.p>
          <m.h1 className="text-5xl lg:text-7xl font-extrabold mb-3" variants={fadeUp} custom={1} initial="hidden" animate="visible">
            ALE<span className="bg-gradient-to-r from-[#FF7A9E] to-[#FFD7E5] text-transparent bg-clip-text">PH</span>
          </m.h1>
          <m.p className="text-muted max-w-prose" variants={fadeUp} custom={2} initial="hidden" animate="visible">
            Fitness coach certificada. Con א‑Reset te acompaño 90 días para construir hábitos sostenibles, entrenar con técnica segura y lograr resultados visibles.
          </m.p>
          <m.div className="mt-6" variants={fadeUp} custom={3} initial="hidden" animate="visible">
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" className="btn btn-primary">WORKOUT WITH ME</a>
          </m.div>
        </div>
      </div>
    </section>
  )
}
