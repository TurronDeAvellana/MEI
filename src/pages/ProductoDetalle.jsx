import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { products } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./ProductoDetalle.css";

function ProductoDetalle() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/catalogo" replace />;

  const images = [product.image, product.image2].filter(Boolean);
  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const formattedPrice = formatPrice(product.price);

  return (
    <>
      <Navbar />
      <main className="detalle">
        <Link to="/catalogo" className="detalle__back">← Volver al catálogo</Link>

        <div className="detalle__layout">
          <div className="detalle__image-wrap">
            <img src={activeImage} alt={product.name} />
            {images.length > 1 && (
              <div className="detalle__thumbs">
                {images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    className={`detalle__thumb ${activeImage === img ? "detalle__thumb--active" : ""}`}
                    onClick={() => setActiveImage(img)}
                    aria-label={`Ver foto ${i + 1} de ${product.name}`}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="detalle__info">
            <span className="detalle__category">{product.category}</span>
            <h1 className="detalle__name">{product.name}</h1>
            <p className="detalle__tagline">{product.tagline}</p>

            <p className="detalle__price">{formattedPrice}</p>
            {product.miniPrice && (
              <p className="detalle__mini-price">
                También disponible en versión mini (30g): <strong>{formatPrice(product.miniPrice)}</strong>
              </p>
            )}
            <div className="detalle__meta">
              {product.scent && <span>Aroma: {product.scent}</span>}
              {product.color && <span>Color: {product.color}</span>}
              <span>Hecho a mano</span>
            </div>

            <p className="detalle__description">{product.description}</p>

            <div className="detalle__ingredients">
              <h2>Ingredientes</h2>
              <ul>
                {product.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </div>

            <a
              className="btn btn--primary detalle__cta"
              href="https://wa.me/573123243726"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductoDetalle;
