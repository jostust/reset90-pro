// src/section/Method.jsx
export default function Method() {
  return (
    <section className="m2" aria-label="Nuevo y divertido">
      {/* Media */}
      <div className="m2-media">
        <picture>
          {/* móvil primero */}
          <source
            srcSet="/method-mobile.jpg"
            type="image/webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet="/method-desktop.jpg"
            type="image/webp"
            media="(min-width: 769px)"
          />
          <img
            className="m2-img"
            src="/method-left.jpg"
            alt="Programa de entrenamiento para mujeres"
            fetchpriority="high"
          />
        </picture>
        {/* overlay/fade */}
        <div className="m2-overlay" />
      </div>

      {/* Contenido */}
      <div className="m2-content">
        <h3 className="m2-eyebrow">NUEVO &amp; DIVERTIDO</h3>

        <h2 className="m2-outline">
          <span>ENTRENAMIENTOS</span>
          <span>CADA DÍA</span>
        </h2>

        {/* Ribbon diagonal */}
        <div className="m2-ribbon">
          <div className="m2-ribbon-line">
            <strong>CONSÍGUELO AHORA</strong>
            <small>Desde $250/sesión · Cancela cuando quieras</small>
          </div>
          <button
            className="m2-cta"
            onClick={() => (window.location.href = "/register")}
          >
            COMENZAR AHORA
          </button>
        </div>

        <p className="m2-body">
          Entrena, aliméntate y transforma tus hábitos con un método diseñado
          para que cada día avances hacia la mejor versión de ti misma.
        </p>
      </div>
    </section>
  );
}
