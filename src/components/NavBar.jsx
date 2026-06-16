import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

const LINKS = [
  { label: "Cartelera", to: "/cartelera" },
  { label: "Locales",   to: "/locales"   },
  { label: "Confitería",to: "/confiteria" },
  { label: "Contacto",  to: "/contacto"  },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/*  Etiqueta ARIA para identificar la navegación principal */}
      <nav className="navbar" aria-label="Navegación principal">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo--red">CINE</span>
          <span className="navbar__logo--blue">RAMA</span>
        </Link>

        <ul className="navbar__links">
          {LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`navbar__link ${pathname === to ? "navbar__link--active" : ""}`}
                aria-current={pathname === to ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__icon-btn" aria-label="Buscar películas">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
          </button>
          <button className="navbar__icon-btn" aria-label="Mi perfil">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </button>

          <button
            className="navbar__hamburger"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7"  x2="21" y2="7"  />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Conexión ARIA con el botón mediante ID */}
      <div id="mobile-menu" className={`navbar__mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="navbar__mobile-links">
          {LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={pathname === to ? "navbar__link--active" : ""}
                aria-current={pathname === to ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}


export default NavBar;