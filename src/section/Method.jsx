import { m } from "framer-motion";

export default function Method() {
  return (
    <section className="relative overflow-hidden bg-[#F7A9B8]">
      {/* ===== Fondo: imagen + fade ===== */}
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
        {/* Mobile: imagen full */}
        <div
          className="block md:hidden absolute inset-0"
          style={{
            backgroundImage: "url('/method-left-mobile.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        {/* Fade a rosa (más suave/bonito) */}
        <div className="absolute inset-0 method-fade-right" />
      </div>

      {/* ===== Contenido ===== */}
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 py-16 md:py-24">
        {/* Título */}
        <div className="title-shadow">
          <m.h2
            initial={{opacity:0, y:12}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:.4}}
            transition={{duration:.45}}
            className="font-extrabold text-[#111] leading-[1.03] select-none"
          >
            <span className="block title-xxl tracking-wide">NUEVO & DIVERTIDO</span>
            <span className="block title-xxl title-outline tracking-wide">ENTRENAMIENTOS</span>
            <span className="block title-xxl title-outline tracking-wide">CADA DÍA</span>
          </m.h2>
        </div>

        {/* Cinta diagonal full-bleed */}
        <div className="mt-7 md:mt-9">
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
              Solo $29.99/mes · Cancela cuando quieras
            </div>
          </div>
        </div>

        {/* Texto de apoyo (alineado como en el ref) */}
        <p className="mt-8 md:mt-10 text-[#111]/85 max-w-[620px]">
          Frescos para casa y gym, comunidad inclusiva y plan de nutrición delicioso.
          No te aburras nunca más de tu programa de fitness.
        </p>
      </div>
    </section>
  );
}
