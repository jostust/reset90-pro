/* src/section/Method.jsx */
import { motion } from "framer-motion";

export default function Method() {
  return (
    <section className="m2 relative overflow-hidden">
      {/* Fondo full-bleed con <picture> */}
      <picture className="absolute inset-0 block">
        <source media="(max-width: 767px)" srcSet="/method-mobile.jpg" />
        <img
          src="/method-desktop.jpg"
          alt="Entrenamientos diarios"
          className="m2-bg"
          loading="lazy"
        />
      </picture>

      {/* Gradiente/fade al estilo Alexia */}
      <div className="m2-fade absolute inset-0 pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <div className="m2-grid">
          <div className="m2-copy">
            <h2 className="m2-h1">
              <span className="block">NUEVO &amp; DIVERTIDO</span>
              <span className="m2-h1-outline">ENTRENAMIENTOS</span>
              <span className="m2-h1-outline">CADA DÍA</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Ribbon diagonal (un único bloque superpuesto) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="m2-ribbon"
      >
        <div className="m2-ribbon-inner">
          <div className="m2-ribbon-left">
            <div className="m2-ribbon-title">CONSÍGUelo ahora</div>
            <div className="m2-ribbon-sub">Desde $250/sesión · Cancela cuando quieras</div>
          </div>
          <button className="m2-ribbon-cta">COMENZAR AHORA</button>
        </div>
      </motion.div>

      {/* Texto de apoyo debajo del ribbon */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 pt-16 pb-24 md:pt-20 md:pb-28">
        <p className="m2-body">
          Entrena, aliméntate y transforma tus hábitos con un método diseñado para que cada día avances hacia la mejor versión de ti misma.
        </p>
      </div>
    </section>
  );
}
