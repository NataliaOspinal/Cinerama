import { useState } from "react";
import "../css/Estrenos.css";

const ESTRENOS = [
  { id: 1, titulo: "Deadpool 3",        genero: "Acción",  fecha: "26 Jul 2024", imagen: "/fondo.jpg" },
  { id: 2, titulo: "Joker: Folie à Deux", genero: "Drama", fecha: "4 Oct 2024",  imagen: "/fondo.jpg" },
  { id: 3, titulo: "Gladiator II",       genero: "Acción",  fecha: "22 Nov 2024", imagen: "/fondo.jpg" },
  { id: 4, titulo: "Wicked",             genero: "Musical", fecha: "22 Nov 2024", imagen: "/fondo.jpg" },
];

function TarjetaEstreno({ titulo, genero, fecha, imagen }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      type="button"
      className="estreno"
      aria-label={`Ver detalles del estreno: ${titulo}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className="estreno__img-wrap" aria-hidden="true">
        <img src={imagen} alt="" className="estreno__img" />
        {hover && (
          <div className="estreno__overlay">
            <svg className="estreno__cal-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8"  y1="2" x2="8"  y2="6" />
              <line x1="3"  y1="10" x2="21" y2="10" />
            </svg>
            <span className="estreno__fecha">{fecha}</span>
          </div>
        )}
      </div>
      <p className="estreno__titulo">{titulo}</p>
      <p className="estreno__genero">{genero}</p>
    </button>
  );
}

function Estrenos() {
  return (
    <section className="estrenos" aria-labelledby="estrenos-titulo">
      <h2 id="estrenos-titulo" className="estrenos__titulo">Próximos Estrenos</h2>
      <div className="estrenos__grid">
        {ESTRENOS.map((e) => (
          <TarjetaEstreno key={e.id} {...e} />
        ))}
      </div>
    </section>
  );
}

export default Estrenos;