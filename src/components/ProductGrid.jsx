import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import { formatPrice } from "../utils/formatPrice.js";
import Sprig from "./Sprig.jsx";
import "./ProductGrid.css";

function ProductGrid() {
  const preview = products.filter((p) => !p.featured).slice(0, 3);

  return (
    <section id="productos" className="section products">
      <div className="section-label">
        <Sprig className="section-label__sprig" />
        <span className="eyebrow">Colección</span>
      </div>
      <h2>Jabones <em>Artesanales</em></h2>
      <div className="products__grid products__grid--3col">
        {preview.map((product) => (
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
      <div className="products__more">
        <Link to="/catalogo" className="btn--outline">Ver colección completa</Link>
      </div>
    </section>
  );
}

export default ProductGrid;
