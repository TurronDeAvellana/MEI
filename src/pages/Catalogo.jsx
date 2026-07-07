import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Catalogo.css";

const filters = [
  { key: "todos", label: "Todos" },
  { key: "masculina", label: "Línea masculina" },
  { key: "femenina", label: "Línea femenina" },
  { key: "bienestar", label: "Bienestar general" },
];

function Catalogo() {
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
              <span className="eyebrow">MEI Magic</span>
              <h1>Colección Completa</h1>
            </div>
            <p className="catalogo__lede">
              Jabones artesanales elaborados con ingredientes naturales seleccionados. Nos
              preocupamos por las necesidades únicas de cada piel, por eso creamos líneas inspiradas
              en la mitología griega y nórdica, donde cada jabón lleva el nombre y el carácter de un
              dios o una diosa para acompañar tu ritual de cuidado diario.
            </p>
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
        <div className="catalogo__grid">
          {catalog.map((product) => (
            <Link to={`/producto/${product.slug}`} key={product.slug} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.name} className="product-card__img product-card__img--main" />
                {product.image2 && (
                  <img src={product.image2} alt="" className="product-card__img product-card__img--hover" />
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
      </main>
      <Footer />
    </>
  );
}

export default Catalogo;
