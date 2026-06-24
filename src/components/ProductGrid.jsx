import { products } from "../data/products.js";
import "./ProductGrid.css";

function ProductGrid() {
  const catalog = products.filter((product) => !product.featured);

  return (
    <section id="productos" className="section products">
      <h2>Colección Principal</h2>
      <div className="products__grid">
        {catalog.map((product) => (
          <article key={product.slug} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
