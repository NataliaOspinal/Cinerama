import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer" aria-label="Pie de página">
      <div className="footer__inner">

        <div className="footer__brand">
          {/* Visual: Avisamos a dónde lleva el logo */}
          <a href="#" className="footer__logo" aria-label="Ir al inicio de Cinerama">
            <span className="footer__logo--red">CINE</span>
            <span className="footer__logo--blue">RAMA</span>
          </a>
          <p className="footer__copy">Copyright © 2026 Cinerama</p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">CINES</h4>
          <ul className="footer__links">
            <li><a href="#">Ubicaciones</a></li>
            <li><a href="#">Formatos</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">AYUDA Y CONTACTO</h4>
          <ul className="footer__links">
            <li><a href="#">Escríbenos</a></li>
            <li><a href="#">Trabaja con nosotros</a></li>
            <li><a href="#">Centro de ayuda</a></li>
            <li><a href="#">Boleto electrónico</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">ABOUT</h4>
          <ul className="footer__links">
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Política de protección de datos personales</a></li>
            <li>
              <a href="#" className="footer__reclamaciones">
                {/* 3. Visual: Escondemos el SVG decorativo */}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Libro de reclamaciones
              </a>
            </li>
          </ul>

          <div className="footer__redes">
            <a href="#" aria-label="Visitar nuestro perfil de X (Twitter)">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.858L2.25 2.25h6.921l4.261 5.638 5.812-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="Visitar nuestro perfil de Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Visitar nuestra página de Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;