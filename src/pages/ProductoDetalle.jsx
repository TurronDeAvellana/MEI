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
  const hasMini = Boolean(product.miniPrice);
  const [size, setSize] = useState("normal");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setActiveImage(images[0]);
    setSize("normal");
    setQuantity(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const unitPrice = size === "mini" ? product.miniPrice : product.price;
  const formattedPrice = formatPrice(unitPrice);
  const sizeLabel = size === "mini" ? "Mini 30g" : "Tamaño original";

  const whatsappMessage = hasMini
    ? `Hola! Quiero pedir el jabón ${product.name}, tamaño ${sizeLabel}, ${quantity} unidad${quantity > 1 ? "es" : ""}.`
    : `Hola! Quiero pedir el jabón ${product.name}, ${quantity} unidad${quantity > 1 ? "es" : ""}.`;
  const whatsappHref = `https://wa.me/573123243726?text=${encodeURIComponent(whatsappMessage)}`;

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
            {product.tipo && (
              <span className="tag-badge detalle__tag">{product.tipo}</span>
            )}
            <p className="detalle__tagline">{product.tagline}</p>

            {hasMini && (
              <div className="detalle__size-selector">
                <span className="detalle__option-label">Tamaño</span>
                <div className="detalle__size-options">
                  <button
                    type="button"
                    className={`detalle__size-option ${size === "normal" ? "detalle__size-option--active" : ""}`}
                    onClick={() => setSize("normal")}
                  >
                    Original
                  </button>
                  <button
                    type="button"
                    className={`detalle__size-option ${size === "mini" ? "detalle__size-option--active" : ""}`}
                    onClick={() => setSize("mini")}
                  >
                    Mini 30g
                  </button>
                </div>
              </div>
            )}

            <p className="detalle__price">{formattedPrice}</p>

            <div className="detalle__quantity">
              <span className="detalle__option-label">Cantidad</span>
              <div className="detalle__quantity-control">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Disminuir cantidad"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>
            </div>

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
              href={whatsappHref}
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
