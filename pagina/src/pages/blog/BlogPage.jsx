import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { blogSections, competencias } from "../../data/blog.js";
import "./Blog.css";

const sectionCount = {
  competencias: competencias.length,
};

function BlogPage() {
  const sections = blogSections.filter((s) => sectionCount[s.slug] > 0);

  return (
    <>
      <Navbar />
      <main className="blog">
        <header className="blog__header">
          <Link to="/" className="blog__back">← Inicio</Link>
          <span className="eyebrow">Blog MEI</span>
          <h1 className="blog__title">Historias, rituales y comunidad</h1>
          <p className="blog__lede">
            Lo que pasa alrededor de nuestros jabones: los torneos que patrocinamos y las personas que los viven.
          </p>
        </header>

        <div className="blog__sections">
          {sections.map((s) => (
            <Link key={s.slug} to={`/blog/${s.slug}`} className="blog-section-card">
              <span className="blog-section-card__count">
                {sectionCount[s.slug]} {sectionCount[s.slug] === 1 ? "entrada" : "entradas"}
              </span>
              <h2 className="blog-section-card__title">{s.nombre}</h2>
              <p className="blog-section-card__body">{s.descripcion}</p>
              <span className="blog-section-card__more">Ver sección →</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
