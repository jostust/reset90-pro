import { m } from "framer-motion";

export default function Method() {
  return (
    <section className="relative overflow-hidden bg-[#F7A9B8]">
      {/* === CAPA DE FONDO: imagen a la izquierda + degradado a rosa === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop: imagen ocupa ~62% izquierda */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[62%]"
          style={{
            backgroundImage: "url('/method-left.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        {/* Mobile: imagen full background */}
        <div
          className="block md:hidden absolute inset-0"
          style={{
            backgroundImage: "url('/method-left-mobile.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        {/* Degradado para efecto fade hacia el rosa */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7A9B8]/0 via-[#F7A9B8]/55 to-[#F7A9B8]" />
      </div>

      {/* === CONTENIDO SOBRE EL FONDO === */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Título: relleno + outline como referencia */}
        <m.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-[#111] font-extrabold leading-[1.05]"
        >
          <span className="block text-4xl md:text-6xl tracking-wide">NUEVO & DIVERTIDO</span>
          <span className="block outline-light text-4xl md:text-6xl tracking-wide">ENTRENAMIENTOS</span>
          <span className="block outline-light text-4xl md:text-6xl tracking-wide">CADA DÍA</span>
        </m.h2>

        {/* Cinta diagonal full-bleed */}
        <div className="mt-8 md:mt-10">
          <div className="ribbon-full">
            <div className="flex items-center justify-between gap-4">
              <div className="text-white font-extrabold tracking-wide text-lg md:text-xl">
                CONSÍGUELO AHORA
              </div>
              <a href="/register" className="ribbon-card">COMENZAR AHORA</a>
            </div>
            <div className="ribbon-line"></div>
            <div className="mt-1 text-xs md:text-sm opacity-80">
              Solo $29.99/mes · Cancela cuando quieras
            </div>
          </div>
        </div>

        {/* Texto de apoyo como en el ref */}
        <p className="mt-8 text-[#111]/85 max-w-[560px]">
          Frescos para casa y gym, comunidad inclusiva y plan de nutrición delicioso.
          No te aburras nunca más de tu programa de fitness.
        </p>
      </div>
    </section>
  );
}
