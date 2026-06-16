import "../css/InicioBanner.css";

function InicioBanner({ titulo, descripcion }) {
  return (
    <section className="banner" aria-labelledby="banner-title">
      <div className="banner__bg" style={{ backgroundImage: "url('/fondo.jpg')" }} aria-hidden="true" />
      <div className="banner__overlay" aria-hidden="true" />
      <div className="banner__content">
        {/* ID conectado a la sección para fácil lectura */}
        <h1 id="banner-title" className="banner__title">{titulo}</h1>
        <p className="banner__description">{descripcion}</p>
        <div className="banner__ctas">
          
          {/* Cambio de <a> a <button> para acciones sin URL real */}
          <button type="button" className="btn-primary" aria-label={`Ver horarios de ${titulo}`}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <polygon points="4,2 14,8 4,14" />
            </svg>
            Ver Horarios
          </button>
          
          <button type="button" className="btn-secondary" aria-label={`Ver tráiler de ${titulo}`}>
            Ver Trailer
          </button>

        </div>
      </div>
    </section>
  );
}

export default InicioBanner;