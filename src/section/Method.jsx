export default function Method() {
  return (
    <section className="m2" id="method">
      {/* Imagen de fondo */}
      <div className="m2-media">
        <picture>
          {/* versión móvil */}
          <source media="(max-width: 767px)" srcSet="/method-mobile.jpg" />
          {/* versión desktop */}
          <img
            src="/method-desktop.jpg"
            alt="Entrenamientos diarios del programa de 90 días"
            className="m2-bg"
          />
        </picture>
        <div className="m2-fade" />
      </div>

      {/* Contenido principal */}
      <div className="m2-inner">
        <div className="m2-grid">
          {/* columna izquierda (vacía, reservada a la imagen) */}
          <div />
          {/* columna derecha con texto */}
          <div className="m2-copy">
            <h2 className="m2-h1">
              NUEVO &amp; DIVERTIDO
              <br />
              <span className="m2-h1-outline">
                ENTRENAMIENTOS <br /> CADA DÍA
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
            <div className="m2-ribbon-sub">
              Desde $250/sesión · Cancela cuando quieras
            </div>
          </div>
          <a href="/register" className="m2-ribbon-cta">
            COMENZAR AHORA
          </a>
        </div>
      </div>

      {/* Texto de apoyo */}
      <p className="m2-body">
        Entrena, aliméntate y transforma tus hábitos con un método diseñado
        para que cada día avances hacia la mejor versión de ti misma.
      </p>
    </section>
  );
}
