import { m } from "framer-motion";

export default function HeroTop() {
  return (
    <section id="home" className="relative bg-black pb-24 md:pb-0">
      {/* FONDO: versión desktop */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: "url('/hero-home-desktop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      {/* FONDO: versión móvil (si NO tienes aún hero-home-mobile.jpg, puedes duplicar el mismo nombre de desktop) */}
      <div
        className="block md:hidden absolute inset-0"
        style={{
          backgroundImage: "url('/hero-home-desktop.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* Overlay degradado para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000088] to-[#0a0d10]"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 pt-24 pb-16 text-center text-white">
        {/* chevrons arriba (solo estética) */}
        <div className="flex justify-between max-w-[950px] mx-auto mb-8 opacity-80">
          <div className="chev -rotate-135"></div>
          <div className="chev -rotate-135"></div>
        </div>

        {/* Subtítulo */}
        <m.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.45}}
             className="text-white/85 text-sm sm:text-base mb-3 tracking-wide">
          Recupera tu energía y confianza
        </m.p>

        {/* Título principal */}
        <div className="space-y-1 mb-6">
          <m.h1
            initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.05,duration:.55}}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide"
          >
            <span className="text-white">90 DÍAS</span> <span className="text-white">PARA</span><br className="hidden sm:block" />
            <span className="text-[#F7A9B8]">REINICIAR</span> <span className="text-white">TU CUERPO</span>
          </m.h1>
        </div>

        {/* Texto secundario */}
        <m.p initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.15,duration:.45}}
             className="text-white/85 text-sm sm:text-base mb-8">
          Entrenamientos dinámicos · Hábitos saludables · Resultados reales
        </m.p>

        {/* CTA */}
        <m.a
          initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.2}}
          href="https://wa.me/XXXXXXXXXXX" target="_blank"
          className="inline-flex items-center justify-center bg-[#F7A9B8] text-black font-extrabold rounded-xl px-6 py-3"
        >
          Comenzar ahora
        </m.a>

        {/* chevron abajo */}
        <div className="mt-10 flex justify-center">
          <div className="chev rotate-45"></div>
        </div>
      </div>

      {/* franja inferior */}
      <div className="h-16 w-full bg-[#0f1417] border-t border-line"></div>
    </section>
  );
}
