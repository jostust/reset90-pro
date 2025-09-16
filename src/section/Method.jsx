import { m } from "framer-motion";

export default function Method() {
  return (
    <section className="relative overflow-hidden bg-[#F7A9B8]">
      {/* Contenedor principal */}
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-16 md:py-24">

        {/* Imagen izquierda: desktop + mobile */}
        <div className="relative">
          <div
            className="hidden md:block rounded-2xl overflow-hidden border border-black/10 min-h-[520px]"
            style={{
              backgroundImage: "url('/method-left.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            aria-label="Aleph Motion entrenamiento"
          />
          <div
            className="block md:hidden rounded-2xl overflow-hidden border border-black/10 min-h-[320px]"
            style={{
              backgroundImage: "url('/method-left-mobile.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            aria-label="Aleph Motion entrenamiento"
          />
        </div>

        {/* Texto + Cinta */}
        <div className="relative">
          {/* Título estilo Alexia */}
          <m.h2
            initial={{opacity:0, y:12}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:.4}}
            transition={{duration:.5}}
            className="text-[#111] leading-[1.05] font-extrabold"
          >
            <span className="block text-4xl md:text-6xl tracking-wide">
              NUEVO & DIVERTIDO
            </span>
            <span className="block outline-text text-4xl md:text-6xl tracking-wide">
              ENTRENAMIENTO
            </span>
            <span className="block outline-text text-4xl md:text-6xl tracking-wide">
              CADA DÍA
            </span>
          </m.h2>

          {/* Cinta diagonal con CTA */}
          <div className="relative mt-8 md:mt-10">
            <div className="ribbon">
              <div className="flex items-center justify-between gap-4">
                <div className="text-white font-extrabold tracking-wide text-lg md:text-xl">
                  CONSÍGUELO AHORA
                </div>
                <a href="/register" className="ribbon-card">
                  COMENZAR AHORA
                </a>
              </div>
              <div className="ribbon-line"></div>
              <div className="mt-1 text-xs md:text-sm opacity-80">
                Solo $29.99/mes · Cancela cuando quieras
              </div>
            </div>
          </div>

          {/* Texto pequeño de apoyo (como en el ref) */}
          <p className="mt-8 text-[#111]/85 max-w-[520px]">
            Frescos para casa y gym, comunidad inclusiva y plan de nutrición
            delicioso. No te aburras nunca más de tu programa de fitness.
          </p>
        </div>
      </div>
    </section>
  );
}
