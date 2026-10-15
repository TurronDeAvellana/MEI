import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../data/site.js";
import { imgSize } from "../data/imageSizes.js";
import "./Navbar.css";

const waHref = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`;

function NavLink({ item, className, onClick }) {
  const isPage = !item.href.includes("#");
  if (isPage) {
    return <Link className={className} to={item.href} onClick={onClick}>{item.label}</Link>;
  }
  return <a className={className} href={item.href} onClick={onClick}>{item.label}</a>;
}

function Icon({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const { pathname } = useLocation();
  const isDark = pathname === "/mat-defence";

  // Escape solo escucha mientras el menú está abierto
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const glass = isDark ? "glass-dark" : "glass";

  return (
    <>
      <div className="navbar-spacer" data-dark={isDark || undefined} aria-hidden="true" />
      <nav className="navbar" data-dark={isDark || undefined} aria-label="Principal">
        <div className={`navbar__pill ${glass}`}>
          <Link className="navbar__logo" to="/" onClick={close} aria-label={`${site.name} – inicio`}>
            {logoFailed ? (
              <span className="navbar__brand">{site.name}</span>
            ) : (
              <img src={site.logo} alt="" {...imgSize(site.logo)} decoding="async" onError={() => setLogoFailed(true)} />
            )}
          </Link>

          <ul className="navbar__links">
            {site.nav.map((item) => (
              <li key={item.href}><NavLink item={item} className="navbar__link" /></li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a className="navbar__cta navbar__cta--desktop" href={waHref} target="_blank" rel="noopener noreferrer">
              Pedir por WhatsApp
            </a>
            <button
              type="button"
              className="navbar__burger"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon open={open} />
            </button>
          </div>

          <div
            id="mobile-menu"
            className={`navbar__menu ${glass}`}
            data-open={open}
            inert={open ? undefined : ""}
          >
            <ul className="navbar__menu-list">
              {site.nav.map((item) => (
                <li key={item.href}><NavLink item={item} className="navbar__menu-link" onClick={close} /></li>
              ))}
            </ul>
            <a className="navbar__cta navbar__cta--menu" href={waHref} target="_blank" rel="noopener noreferrer" onClick={close}>
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
