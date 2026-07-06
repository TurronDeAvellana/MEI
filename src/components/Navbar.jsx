import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../data/site.js";
import "./Navbar.css";

function NavLink({ item, onClick }) {
  const isPage = !item.href.includes("#");
  if (isPage) {
    return <Link to={item.href} onClick={onClick}>{item.label}</Link>;
  }
  return <a href={item.href} onClick={onClick}>{item.label}</a>;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isDark = pathname === "/mat-defence";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${isDark ? "navbar--dark" : ""}`}>
        <Link className="navbar__logo" to="/" onClick={close}>
          <img src={site.logo} alt={site.name} />
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <NavLink item={item} />
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__burger ${open ? "navbar__burger--open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? "navbar__drawer--open" : ""}`} aria-hidden={!open}>
        <ul className="navbar__drawer-links">
          {site.nav.map((item) => (
            <li key={item.href}>
              <NavLink item={item} onClick={close} />
            </li>
          ))}
        </ul>
      </div>

      {open && <div className="navbar__backdrop" onClick={close} />}
    </>
  );
}

export default Navbar;
