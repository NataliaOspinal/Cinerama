import { useState } from "react";
import "../css/CarteleraPeliculas.css";


const CIUDADES  = ["Lima - Javier Prado", "Lima - San Miguel", "Lima - Miraflores", "Lima - La Molina"];
const CINES     = ["Todos los cines", "Cinerama Javier Prado", "Cinerama San Miguel", "Cinerama Miraflores"];
const FECHAS    = ["Hoy, Lunes 18", "Mañana, Martes 19", "Miércoles 20", "Jueves 21", "Viernes 22"];
const GENEROS   = ["Todos los géneros", "Acción", "Drama", "Comedia", "Terror", "Animación", "Musical"];
const IDIOMAS   = ["Todos los idiomas", "Español", "Inglés subtitulado", "Doblada"];
const CENSURAS  = ["Todas las clasificaciones", "G", "PG", "PG-13", "R"];

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

function FiltroSelect({ icono, label, opciones, valor, onChange }) {
  // Cognitiva/Visual: Generamos un ID único basado en el label (ej. "filtro-ciudad")
  const selectId = `filtro-${label.toLowerCase()}`;

  return (
    <div className="filtro">
      {/* Visual: Vinculamos el label al select mediante htmlFor */}
      <label htmlFor={selectId} className="filtro__label">
        <span className="filtro__icono" aria-hidden="true">{icono}</span>
        {label}
      </label>
      <div className="filtro__select-wrap">
        <select
          id={selectId}
          className="filtro__select"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
        >
          {opciones.map((op) => (
            <option key={op} value={op}>{op}</option>
          ))}
        </select>
        <svg className="filtro__chevron" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

/* Tarjeta de película */
function TarjetaPelicula({ titulo, clasificacion, imagen }) {
  return (
    /* Motora: Cambiamos <div> por <button> para habilitar navegación por teclado */
    <button type="button" className="cp-tarjeta" aria-label={`Ver detalles de ${titulo}`}>
      <div className="cp-tarjeta__img-wrap" aria-hidden="true">
        {/* Dejamos el alt vacío porque el título ya se lee en el texto de abajo */}
        <img src={imagen} alt="" className="cp-tarjeta__img" />
        <span className="cp-tarjeta__clasificacion">{clasificacion}</span>
      </div>
      <p className="cp-tarjeta__titulo">{titulo}</p>
    </button>
  );
}

/*  Componente principal  */
function CarteleraPeliculas() {
  const [ciudad,  setCiudad]  = useState(CIUDADES[0]);
  const [cine,    setCine]    = useState(CINES[0]);
  const [fecha,   setFecha]   = useState(FECHAS[0]);
  const [genero,  setGenero]  = useState(GENEROS[0]);
  const [idioma,  setIdioma]  = useState(IDIOMAS[0]);
  const [censura, setCensura] = useState(CENSURAS[0]);

  return (
    /* Semántica: Identificamos la región completa */
    <section className="cp" aria-label="Filtros y cartelera de películas">

      <div className="cp__filtros">
        <FiltroSelect
          label="Ciudad" valor={ciudad} onChange={setCiudad} opciones={CIUDADES}
          icono={<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>}
        />
        <FiltroSelect
          label="Cine" valor={cine} onChange={setCine} opciones={CINES}
          icono={<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
        />
        <FiltroSelect
          label="Fecha" valor={fecha} onChange={setFecha} opciones={FECHAS}
          icono={<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
        />
        <FiltroSelect
          label="Género" valor={genero} onChange={setGenero} opciones={GENEROS}
          icono={<svg viewBox="0 0 24 24"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/></svg>}
        />
        <FiltroSelect
          label="Idioma" valor={idioma} onChange={setIdioma} opciones={IDIOMAS}
          icono={<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>}
        />
        <FiltroSelect
          label="Censura" valor={censura} onChange={setCensura} opciones={CENSURAS}
          icono={<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
        />
      </div>

      {/* Grid de películas */}
      <div className="cp__grid">
        {PELICULAS.map((p) => (
          <TarjetaPelicula key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default CarteleraPeliculas;