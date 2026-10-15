import { Link } from "react-router-dom";
import { site } from "../../data/site.js";
import { competenciasIntro, storyWhatsappText, instagramUrl, formatDate, paragraphs } from "../../data/blog.js";
import { imgSize, SIZES } from "../../data/imageSizes.js";

const waNumber = site.contact.whatsapp.replace(/\D/g, "");
export const storyHref = (competencia) =>
  `https://wa.me/${waNumber}?text=${encodeURIComponent(storyWhatsappText(competencia))}`;

export function Breadcrumbs({ items }) {
  return (
    <nav className="blog__crumbs" aria-label="Ruta de navegación">
      <ol>
        {items.map((item, i) => (
          <li key={item.path}>
            {i < items.length - 1 ? <Link to={item.path}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Instagram({ handle, className = "" }) {
  const url = instagramUrl(handle);
  if (!url) return null;
  return (
    <a className={`blog__ig ${className}`} href={url} target="_blank" rel="noopener noreferrer">
      @{handle.replace(/^@/, "")}
    </a>
  );
}

export function EventMeta({ competencia }) {
  const items = [formatDate(competencia.fecha), competencia.lugar, competencia.disciplina].filter(Boolean);
  if (!items.length) return null;
  return (
    <ul className="blog__event-meta">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function KitBadge({ recibioKit }) {
  return (
    <span className={`blog__kit ${recibioKit ? "blog__kit--yes" : ""}`}>
      {recibioKit ? "Recibió kit MEI" : "Sin kit MEI"}
    </span>
  );
}

// Testimonio completo de un atleta, dentro de la página de la competencia.
export function AthleteStory({ competencia, atleta: a }) {
  return (
    <article id={a.id} className="blog-story">
      {a.foto && (
        <div className="blog-story__photo">
          <img src={a.foto} alt={`${a.nombre} en ${competencia.nombre}`} {...imgSize(a.foto, SIZES.grid3)} loading="lazy" decoding="async" />
        </div>
      )}
      <div className="blog-story__body">
        <header className="blog-story__header">
          <h3 className="blog-story__name">{a.nombre}</h3>
          <Instagram handle={a.instagram} />
          <div className="blog-story__tags">
            <span className="tag-badge">{a.categoria}</span>
            {a.resultado && <span className="tag-badge blog__result">{a.resultado}</span>}
            {a.academia && <span className="blog-story__academy">{a.academia}</span>}
          </div>
        </header>

        <h4 className="blog-story__label">Cómo se sintió en el evento</h4>
        {paragraphs(a.experiencia).map((p, i) => <p key={i}>{p}</p>)}

        <div className={`blog-story__kit ${a.recibioKit ? "blog-story__kit--yes" : ""}`}>
          <KitBadge recibioKit={a.recibioKit} />
          {a.recibioKit && a.opinionKit && (
            <>
              <h4 className="blog-story__label">Qué le pareció el kit</h4>
              {paragraphs(a.opinionKit).map((p, i) => <p key={i}>{p}</p>)}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export function StoryCta({ competencia, compact = false }) {
  const { titulo, cuerpo, pasos } = competenciasIntro;
  return (
    <aside className={`blog-cta ${compact ? "blog-cta--compact" : ""}`}>
      <div className="blog-cta__text">
        <span className="eyebrow">Iniciativa MEI</span>
        <h2 className="blog-cta__title">{competencia ? `¿Competiste en ${competencia.nombre}?` : titulo}</h2>
        <p className="blog-cta__body">{cuerpo}</p>
      </div>
      {!compact && (
        <ol className="blog-cta__steps">
          {pasos.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
      )}
      <a className="btn btn--primary blog-cta__btn" href={storyHref(competencia)} target="_blank" rel="noopener noreferrer">
        Cuéntanos tu historia
      </a>
    </aside>
  );
}
