import { useEffect, useState } from "react";
import { site } from "../data/site.js";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a className="navbar__logo" href="#hero">
        <img src={site.logo} alt={site.name} />
      </a>
      <ul className="navbar__links">
        {site.nav.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
