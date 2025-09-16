import React from "react";

export default function Method() {
  return (
    <section className="relative isolate overflow-hidden bg-[#171C1B]">
      {/* Fondo con imagen + overlay rosa */}
      <div className="relative">
        <picture>
          {/* móvil primero */}
          <source
            media="(max-width: 767px)"
            srcSet="/method-mobile.jpg"
          />
          <img
            src="/method-desktop.jpg"
            alt="Entrenamiento diario"
            className="method-bg"
          />
        </picture>

        {/* overlay rosa degradado derecha -> izquierda */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#F7A9B8]/85 via-[#F7A9B8]/65 to-transparent" />

        {/* contenedor del contenido */}
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
            {/* TITULARES */}
            <div className="max-w-[760px] ml-auto">
              <h2 className="title-fill">
                NUEVO & DIVERTIDO
              </h2>
              <p className="title-outline mt-3">
                ENTRENAMIENTOS
                <br className="hidden sm:block" />
                CADA DÍA
              </p>
            </div>

            {/* RIBBON DIAGONAL FULL-WIDTH */}
            <div className="relative mt-8 sm:mt-10">
              <div className="ribbon">
                <div className="ribbon-inner">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
                    <div className="text-white/95 text-[clamp(18px,3vw,22px)] font-extrabold tracking-[0.06em] uppercase">
                      Consíguelo ahora
                    </div>

                    <button
                      className="btn-white"
                      onClick={() => (window.location.href = "/register")}
                    >
                      COMENZAR AHORA
                    </button>
                  </div>

                  <div className="mt-3 text-sm sm:text-[15px] text-white/80">
                    Solo <span className="font-semibold">$29.99/mes</span> · Cancela cuando quieras
                  </div>
                </div>
              </div>
            </div>

            {/* DESCRIPCIÓN BAJO EL RIBBON */}
            <div className="max-w-[720px] ml-auto mt-10 sm:mt-12 text-[clamp(16px,2.1vw,18px)] leading-relaxed text-white/90">
              Frescos para casa y gym, comunidad inclusiva y plan de nutrición
              delicioso. No te aburras nunca más de tu programa de fitness.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
