import { m } from "framer-motion";

export default function Method() {
  return (
    <section className="relative overflow-hidden bg-[#F7A9B8]">
      {/* ===== Fondo: imagen + scrim/fade ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Desktop: imagen ocupa ~62% izquierda */}
        <div
  className="absolute inset-0 md:inset-y-0 md:left-0 md:w-[62%] method-img"
  style={{ backgroundImage: "url('/method-left.jpg')" }}
/>
        {/* Mobile: imagen full */}
        <div
          className="block md:hidden absolute inset-0 method-img"
          style={{
            backgroundImage: "url('/method-left-mobile.jpg')",
          }}
        />
        {/* Fade lateral hacia rosa (más suave y largo) */}
        <div className="absolute inset-0 method-fade-right" />
      </div>

      {/* ===== Contenido ===== */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 py-16 md:py-24">
        {/* Títulos: sólido + outline, con mismo ancho de columna que el ref */}
        <div className="max-w-[640px] md:ml-[45%]">
          <m.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="font-extrabold text-[#111] select-none leading-[1.03] title-shadow"
          >
            <span className="block title-xxl tracking-[-0.01em]">
              NUEVO & DIVERTIDO
            </span>
            <span className="block title-xxl title-outline tracking-[0.01em] mt-1">
              ENTRENAMIENTOS
            </span>
            <span className="block title-xxl title-outline tracking-[0.01em] -mt-1">
              CADA DÍA
            </span>
          </m.h2>
        </div>

        {/* Cinta diagonal full-bleed (cruza toda la pantalla) */}
        <div className="mt-8 md:mt-10">
          <div className="ribbon-full">
            <div className="flex items-center justify-between gap-4">
              <div className="text-white font-extrabold tracking-wide text-base md:text-xl">
                CONSÍGUELO AHORA
              </div>
              <a href="/register" className="ribbon-card">
                COMENZAR AHORA
              </a>
            </div>
            <div className="ribbon-line"></div>
            <div className="mt-1 text-xs md:text-sm opacity-80">
              Solo /mes · Cancela cuando quieras
            </div>
          </div>
        </div>

        {/* Copete/descrición debajo de la cinta */}
        <p className="mt-10 md:mt-12 text-[#111]/85 max-w-[620px] md:ml-[45%]">
          Frescos para casa y gym, comunidad inclusiva y plan de nutrición
          delicioso. No te aburras nunca más de tu programa de fitness.
        </p>
      </div>
    </section>
  );
}
