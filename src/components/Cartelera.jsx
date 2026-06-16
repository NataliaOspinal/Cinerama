import { useState } from "react";
import "../css/Cartelera.css";

const LOCALES = ["Lima - Javier Prado", "Lima - San Miguel", "Lima - Miraflores", "Lima - La Molina"];

const DIAS = ["Hoy, Lunes 18", "Mañana, Martes 19", "Miércoles 20", "Jueves 21", "Viernes 22", "Sábado 23", "Domingo 24"];

const PELICULAS = [
  { id: 1, titulo: "Batman Begins",      clasificacion: "PG-13", imagen: "/fondo.jpg" },
  { id: 2, titulo: "The Dark Knight",    clasificacion: "PG-13", imagen: "/fondo.jpg" },
  { id: 3, titulo: "Spider-Man",         clasificacion: "PG-13", imagen: "/fondo.jpg" },
  { id: 4, titulo: "Inception",          clasificacion: "PG-13", imagen: "/fondo.jpg" },
  { id: 5, titulo: "Interstellar",       clasificacion: "PG-13", imagen: "/fondo.jpg" },
  { id: 6, titulo: "The Matrix",         clasificacion: "R",     imagen: "/fondo.jpg" },
  { id: 7, titulo: "Avengers: Endgame",  clasificacion: "PG-13", imagen: "/fondo.jpg" },
  { id: 8, titulo: "Dune",               clasificacion: "PG-13", imagen: "/fondo.jpg" },
];

function Dropdown({ icono, valor, opciones, onChange, labelAria }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="dropdown">
      <button 
        type="button"
        className="dropdown__btn" 
        onClick={() => setAbierto((o) => !o)}
        /* 1. Visual/Cognitiva: Informa al lector de pantalla que esto abre un menú */
        aria-haspopup="listbox"
        aria-expanded={abierto}
        aria-label={`${labelAria}: ${valor}`}
      >
        <span className="dropdown__icono" aria-hidden="true">{icono}</span>
        {valor}
        <svg className="dropdown__chevron" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      
      {abierto && (
        /* 2. Semántica ARIA: Rol de caja de lista */
        <ul className="dropdown__menu" role="listbox">
          {opciones.map((op) => (
            <li key={op} role="presentation">
              <button
                type="button"
                className={`dropdown__opcion ${op === valor ? "activa" : ""}`}
                onClick={() => { onChange(op); setAbierto(false); }}
                /* 3. Indica qué opción está actualmente seleccionada */
                role="option"
                aria-selected={op === valor}
              >
                {op}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TarjetaPelicula({ titulo, clasificacion, imagen }) {
  return (
    <button type="button" className="tarjeta" aria-label={`Comprar entradas para ${titulo}`}>
      <div className="tarjeta__img-wrap" aria-hidden="true">
        <img src={imagen} alt="" className="tarjeta__img" />
        <span className="tarjeta__clasificacion">{clasificacion}</span>
      </div>
      <div className="tarjeta__info">
        <p className="tarjeta__titulo">{titulo}</p>
      </div>
    </button>
  );
}

function Cartelera() {
  const [local, setLocal]   = useState(LOCALES[0]);
  const [dia,   setDia]     = useState(DIAS[0]);

  return (
    <section className="cartelera" aria-labelledby="cartelera-titulo">
      <div className="cartelera__header">
        <h2 id="cartelera-titulo" className="cartelera__titulo">Películas</h2>
        <div className="cartelera__filtros">
          <Dropdown
          labelAria="Seleccionar local"
            icono={
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            }
            valor={local}
            opciones={LOCALES}
            onChange={setLocal}
          />
          <Dropdown
            labelAria="Seleccionar día"
            icono={
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8"  y1="2" x2="8"  y2="6" />
                <line x1="3"  y1="10" x2="21" y2="10" />
              </svg>
            }
            valor={dia}
            opciones={DIAS}
            onChange={setDia}
          />
        </div>
      </div>

      <div className="cartelera__grid">
        {PELICULAS.map((p) => (
          <TarjetaPelicula key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Cartelera;