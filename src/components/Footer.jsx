import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import "./Footer.css";

function Footer() {
  const { email, whatsapp, instagram } = site.contact;
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer__grid">

        {/* Marca */}
        <div className="footer__brand">
          <img src={site.logo} alt={site.name} className="footer__logo" />
          <p className="footer__tagline">{site.tagline}</p>
          <div className="footer__socials">
            <a href={`mailto:${email}`} aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </a>
            <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1" />
                <path d="M21 3 17 11l-4-2" />
              </svg>
            </a>
            <a href={`https://instagram.com/${instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className="footer__col">
          <h4 className="footer__col-title">Navegación</h4>
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li><Link to="/catalogo">Catálogo completo</Link></li>
            <li><Link to="/mat-defence">Mat Defence</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contacto</h4>
          <ul>
            <li><a href={`mailto:${email}`}>{email}</a></li>
            <li><a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>{whatsapp}</a></li>
            <li>
              <a href={`https://instagram.com/${instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer">
                {instagram}
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="footer__bottom">
        <p>© {year} {site.name}. Todos los derechos reservados.</p>
        <a
          href="https://portafoliodev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__dev"
        >
          Desarrollado por Andres Aristizabal · Arquitecto de Software
        </a>
        <div className="footer__bottom-links">
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Productos</Link>
          <Link to="/mat-defence">Mat Defence</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
