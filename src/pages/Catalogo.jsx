import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import { products } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { imgSize, productAlt } from "../data/imageSizes.js";
import "./Catalogo.css";

const filters = [
  { key: "todos", label: "Todos" },
  { key: "masculina", label: "Línea masculina" },
  { key: "femenina", label: "Línea femenina" },
  { key: "bienestar", label: "Bienestar general" },
];

function Catalogo() {
  const { eyebrow, h1, intro, links } = site.catalogo;
  const [activeFilter, setActiveFilter] = useState("todos");
  const catalog = products
    .filter((p) => !p.featured)
    .filter((p) => activeFilter === "todos" || p.linea === activeFilter);

  return (
    <>
      <Navbar />
      <main className="catalogo">
        <div className="catalogo__header">
          <Link to="/" className="catalogo__back">← Inicio</Link>
          <div className="catalogo__header-top">
            <div className="catalogo__heading">
              <span className="eyebrow">{eyebrow}</span>
              <h1>{h1}</h1>
            </div>
            <p className="catalogo__lede">{intro}</p>
          </div>
        </div>
        <div className="catalogo__filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`catalogo__filter ${activeFilter === filter.key ? "catalogo__filter--active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <h2 className="visually-hidden">Catálogo de jabones</h2>
        <div className="catalogo__grid">
          {catalog.map((product) => (
            <Link to={`/producto/${product.slug}`} key={product.slug} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={productAlt(product)} className="product-card__img product-card__img--main" {...imgSize(product.image)} loading="lazy" decoding="async" />
                {product.image2 && (
                  <img src={product.image2} alt="" className="product-card__img product-card__img--hover" {...imgSize(product.image2)} loading="lazy" decoding="async" />
                )}
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                {product.tipo && (
                  <span className="tag-badge product-card__tag">{product.tipo}</span>
                )}
                <p className="product-card__tagline">{product.tagline}</p>
                <div className="product-card__footer">
                  <div className="product-card__prices">
                    <span className="product-card__price">{formatPrice(product.price)}</span>
                    {product.miniPrice && (
                      <span className="product-card__mini">Mini 30g: {formatPrice(product.miniPrice)}</span>
                    )}
                  </div>
                  <span className="product-card__cta">Ver más</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <nav className="catalogo__more" aria-label="Más de MEI">
          {links.map((l) => (
            <Link key={l.href} to={l.href}>{l.label} →</Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}

export default Catalogo;
