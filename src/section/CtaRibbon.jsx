export default function CtaRibbon(){
  return (
    <section className="ribbon py-10">
      <div className="ribbon-inner container-outer flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3 text-white">
          <strong className="tracking-wide">GET IT NOW</strong>
          <span className="opacity-80">Tu reset de 90 días</span>
        </div>
        <a href="#planes" className="inline-block bg-white text-black font-extrabold px-5 py-3 rounded-xl">GET IT NOW</a>
      </div>
    </section>
  )
}
