// src/section/Method.jsx
export default function Method() {
  return (
    <section className="m2">
      <picture className="m2-media">
        <source media="(max-width: 767px)" srcSet="/method-mobile.jpg" />
        <img className="m2-bg" src="/method-desktop.jpg" alt="Programa de 90 días" />
      </picture>

      <div className="m2-fade" />

      <div className="m2-inner">
        <div className="m2-grid">
          <div className="m2-copy">
            <h2 className="m2-h1">
              NUEVO &amp; DIVERTIDO
              <span className="m2-h1-outline">
                <br />
                ENTRENAMIENTOS
                <br />
                CADA DÍA
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Cinta diagonal */}
      <div className="m2-ribbon">
        <div className="m2-ribbon-inner">
          <div>
            <div className="m2-ribbon-title">Consíguelo ahora</div>
            <div className="m2-ribbon-sub">Desde $250/sesión · Cancela cuando quieras</div>
          </div>
          <a className="m2-ribbon-cta" href="/register">COMENZAR AHORA</a>
        </div>
      </div>

      {/* Texto corto debajo */}
      <p className="m2-body">
        Entrena, aliméntate y transforma tus hábitos con un método diseñado para que cada día avances
        hacia la mejor versión de ti misma.
      </p>
    </section>
  );
}
