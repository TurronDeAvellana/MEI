import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./Catalogo.css";

function Catalogo() {
  const catalog = products.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="catalogo">
        <div className="catalogo__header">
          <Link to="/" className="catalogo__back">← Volver</Link>
          <h1>Colección Completa</h1>
          <p>Todos nuestros jabones artesanales elaborados con ingredientes naturales.</p>
        </div>
        <div className="catalogo__grid">
          {catalog.map((product) => (
            <Link to={`/producto/${product.slug}`} key={product.slug} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Catalogo;
