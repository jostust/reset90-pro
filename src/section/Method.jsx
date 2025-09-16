import { m } from "framer-motion";

export default function Method() {
  return (
    <section id="metodo" className="bg-[#0f1417] text-white border-t border-line">
     <div className="relative">
  {/* Imagen desktop */}
  <div
    className="hidden md:block rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.45)] border border-white/5 min-h-[320px] md:min-h-[520px]"
    style={{
      backgroundImage: "url('/method-left.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    aria-label="Entrenamiento dinámico Aleph Motion"
  />

  {/* Imagen mobile */}
  <div
    className="block md:hidden rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.45)] border border-white/5 min-h-[280px]"
    style={{
      backgroundImage: "url('/method-left-mobile.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    aria-label="Entrenamiento dinámico Aleph Motion"
  />
</div>
        {/* Texto derecha */}
        <div>
          <m.h2
            initial={{opacity:0, y:10}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:.4}}
            transition={{duration:.5}}
            className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4"
          >
            Un método que <span className="text-[#F7A9B8]">transforma</span>
          </m.h2>

          <m.p
            initial={{opacity:0, y:8}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:.4}}
            transition={{delay:.05, duration:.45}}
            className="text-white/85 leading-relaxed mb-6"
          >
            Este programa de 90 días combina entrenamientos dinámicos, nutrición práctica
            y hábitos sostenibles. No es un plan genérico: se adapta a tu día y te ayuda a
            recuperar energía y confianza desde la primera semana.
          </m.p>

          <ul className="space-y-3 mb-8">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#F7A9B8]"></span>
              <span className="text-white/90">Resultados visibles desde la primera semana</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#F7A9B8]"></span>
              <span className="text-white/90">Rutinas pensadas para mujeres reales y ocupadas</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#F7A9B8]"></span>
              <span className="text-white/90">Sin dietas extremas ni horas de gimnasio</span>
            </li>
          </ul>

          <m.a
            href="/register"  /* si cambias a BrowserRouter, cámbialo a "/register" */
            initial={{opacity:0, y:8}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true, amount:.5}}
            transition={{delay:.1}}
            className="btn-pink"
          >
            Conoce cómo funciona
          </m.a>
        </div>
      </div>
    </section>
  );
}
