import { site } from "../data/site.js";
import "./Footer.css";

function Footer() {
  const { email, whatsapp, instagram } = site.contact;
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <div className="footer__brand">
        <h2>{site.name}</h2>
        <p>{site.tagline}</p>
      </div>

      <div className="footer__links">
        <a href={`mailto:${email}`} aria-label="Enviar email">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
          {email}
        </a>
        <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} aria-label="Escribir por WhatsApp">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1" />
            <path d="M21 3 17 11l-4-2" />
          </svg>
          {whatsapp}
        </a>
        <a
          href={`https://instagram.com/${instagram.replace("@", "")}`}
          aria-label="Visitar Instagram"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
          </svg>
          {instagram}
        </a>
      </div>

      <p className="footer__copy">
        © {year} {site.name}. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
