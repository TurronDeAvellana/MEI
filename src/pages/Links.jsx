import { site } from "../data/site.js";
import "./Links.css";

const links = [
  {
    id: "web",
    label: "Página web",
    description: "meimagic.co",
    href: "/",
    emoji: "🌿",
    highlight: true,
  },
  {
    id: "catalogo",
    label: "Catálogo de jabones",
    description: "Conoce nuestra colección completa",
    href: "/catalogo",
    emoji: "🧼",
    highlight: false,
  },
  {
    id: "mat-defence",
    label: "Mat Defence",
    description: "Jabón para deportistas de contacto",
    href: "/mat-defence",
    emoji: "🥋",
    highlight: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    description: site.contact.instagram,
    href: `https://instagram.com/${site.contact.instagram.replace("@", "")}`,
    emoji: "📸",
    highlight: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Escríbenos directo",
    href: `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`,
    emoji: "💬",
    highlight: false,
  },
];

export default function Links() {
  const year = new Date().getFullYear();

  return (
    <div className="links-page">
      {/* Background blurred */}
      <div className="links-page__bg" aria-hidden="true">
        <img src="/mei/productos/hero1.jpg" alt="" />
      </div>
      <div className="links-page__overlay" aria-hidden="true" />

      {/* Card */}
      <div className="links-card">
        {/* Logo */}
        <img src={site.logo} alt={site.name} className="links-card__logo" />

        {/* Name & tagline */}
        <h1 className="links-card__name">{site.name}</h1>
        <p className="links-card__tagline">{site.tagline}</p>

        {/* Links */}
        <div className="links-card__links">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`links-card__link ${link.highlight ? "links-card__link--highlight" : ""}`}
            >
              <span className="links-card__emoji">{link.emoji}</span>
              <div className="links-card__link-text">
                <span className="links-card__link-label">{link.label}</span>
                {link.description && (
                  <span className="links-card__link-desc">{link.description}</span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Developer CTA */}
        <a
          href="https://portafoliodev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="links-card__dev-cta"
        >
          ✨ ¿Te gustaría tener una página como esta?
        </a>

        {/* Footer */}
        <footer className="links-card__footer">
          <p>© {year} {site.name}</p>
          <a
            href="https://portafoliodev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Desarrollado por Andres Aristizabal · Arquitecto de Software
          </a>
        </footer>
      </div>
    </div>
  );
}
