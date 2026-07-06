import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import "./ProductGrid.css";

function ProductGrid() {
  const preview = products.filter((p) => !p.featured).slice(0, 3);

  return (
    <section id="productos" className="section products">
      <span className="eyebrow">Colección</span>
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
              <p>{product.tagline}</p>
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
