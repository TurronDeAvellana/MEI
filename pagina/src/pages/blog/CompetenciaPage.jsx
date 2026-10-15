import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { findCompetencia, paragraphs } from "../../data/blog.js";
import { imgSize, SIZES } from "../../data/imageSizes.js";
import { AthleteStory, Breadcrumbs, EventMeta, Instagram, StoryCta } from "./BlogShared.jsx";
import NotFoundBlog from "./NotFoundBlog.jsx";
import "./Blog.css";

function CompetenciaPage() {
  const { evento } = useParams();
  const c = findCompetencia(evento);
  if (!c) return <NotFoundBlog />;
  const org = c.organizador;

  return (
    <>
      <Navbar />
      <main className="blog">
        <header className="blog__header">
          <Breadcrumbs
            items={[
              { name: "Blog", path: "/blog" },
              { name: "Competencias", path: "/blog/competencias" },
              { name: c.nombre, path: `/blog/competencias/${c.slug}` },
            ]}
          />
          <span className="eyebrow">{c.patrocinio}</span>
          <h1 className="blog__title">{c.nombre}</h1>
          <EventMeta competencia={c} />
          {c.resumen && <p className="blog__lede">{c.resumen}</p>}
        </header>

        {c.imagen && (
          <div className="blog__cover">
            <img src={c.imagen} alt={`Torneo ${c.nombre}`} {...imgSize(c.imagen, SIZES.full)} fetchpriority="high" decoding="async" />
          </div>
        )}

        {org && (
          <section className="blog-organizer" aria-labelledby="organizador">
            <span className="eyebrow">La voz del organizador</span>
            <h2 id="organizador" className="blog__h2">Así se vivió el torneo</h2>
            <div className="blog-organizer__grid">
              <div>
                <h3 className="blog-organizer__label">El torneo</h3>
                {paragraphs(org.torneo).map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div>
                <h3 className="blog-organizer__label">Los kits MEI en la premiación</h3>
                {paragraphs(org.kits).map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <p className="blog-organizer__sign">
              <strong>{org.nombre}</strong>
              {org.rol && <span> · {org.rol}</span>}
              {org.instagram && <> · <Instagram handle={org.instagram} /></>}
            </p>
          </section>
        )}

        <section className="blog__athletes" aria-labelledby="atletas">
          <span className="eyebrow">Historias de atletas</span>
          <h2 id="atletas" className="blog__h2">Quienes compitieron</h2>
          <div className="blog__stories">
            {c.atletas.map((a) => (
              <AthleteStory key={a.id} competencia={c} atleta={a} />
            ))}
            <div className="blog-story blog-story--open">
              <p className="blog-story--open__title">Este espacio puede ser tuyo</p>
              <p className="blog-story--open__body">
                Si competiste en {c.nombre}, cuéntanos tu experiencia y aparece aquí.
              </p>
            </div>
          </div>
        </section>

        <StoryCta competencia={c} />
      </main>
      <Footer />
    </>
  );
}

export default CompetenciaPage;
