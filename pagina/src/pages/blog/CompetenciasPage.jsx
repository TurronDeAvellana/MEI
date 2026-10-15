import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { blogSections, competencias, competenciasIntro } from "../../data/blog.js";
import { imgSize, SIZES } from "../../data/imageSizes.js";
import { Breadcrumbs, EventMeta, StoryCta } from "./BlogShared.jsx";
import "./Blog.css";

const section = blogSections.find((s) => s.slug === "competencias");

function CompetenciasPage() {
  return (
    <>
      <Navbar />
      <main className="blog">
        <header className="blog__header">
          <Breadcrumbs
            items={[
              { name: "Blog", path: "/blog" },
              { name: section.nombre, path: "/blog/competencias" },
            ]}
          />
          <span className="eyebrow">Competencias que patrocinamos</span>
          <h1 className="blog__title">{competenciasIntro.titulo}</h1>
          <p className="blog__lede">{section.descripcion}</p>
        </header>

        <h2 className="visually-hidden">Torneos</h2>
        <div className="blog__events">
          {competencias.map((c) => (
            <Link key={c.slug} to={`/blog/competencias/${c.slug}`} className="blog-event-card">
              {c.imagen && (
                <div className="blog-event-card__image">
                  <img src={c.imagen} alt="" {...imgSize(c.imagen, SIZES.grid3)} loading="lazy" decoding="async" />
                </div>
              )}
              <div className="blog-event-card__body">
                <h3 className="blog-event-card__title">{c.nombre}</h3>
                <EventMeta competencia={c} />
                {c.resumen && <p className="blog-event-card__summary">{c.resumen}</p>}
                <span className="blog-event-card__count">
                  {c.atletas.length
                    ? `${c.atletas.length} ${c.atletas.length === 1 ? "historia" : "historias"} de atletas`
                    : "Espacio abierto para atletas"}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <StoryCta />
      </main>
      <Footer />
    </>
  );
}

export default CompetenciasPage;
