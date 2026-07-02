import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import "./ProductGrid.css";

function ProductGrid() {
  const preview = products.filter((p) => !p.featured).slice(0, 3);

  return (
    <section id="productos" className="section products">
      <h2>Colección Principal</h2>
      <div className="products__grid products__grid--3col">
        {preview.map((product) => (
          <Link to={`/producto/${product.slug}`} key={product.slug} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
          </Link>
        ))}
      </div>
      <div className="products__more">
        <Link to="/catalogo" className="btn btn--outline">Ver más productos</Link>
      </div>
    </section>
  );
}

export default ProductGrid;
