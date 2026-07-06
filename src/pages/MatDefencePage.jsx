import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "./MatDefencePage.css";

const disciplines = ["BJJ", "Judo", "Lucha", "MMA", "Grappling"];

const features = [
  { label: "Antibacterial", desc: "Ayuda a prevenir infecciones como tiña, impétigo y estafilococo." },
  { label: "Limpieza Profunda", desc: "Limpia sin resecar la piel, ideal para después de cada roll." },
  { label: "Ingredientes Naturales", desc: "Seleccionados para deportistas de contacto." },
  { label: "Sin Parabenos", desc: "Sin sulfatos ni colorantes artificiales." },
];

const athletes = [
  {
    id: 1,
    name: "Próximamente",
    discipline: "BJJ",
    weight: "—",
    instagram: null,
    image: "/mat_defence/cuervo.png",
  },
  {
    id: 2,
    name: "Próximamente",
    discipline: "MMA",
    weight: "—",
    instagram: null,
    image: "/mat_defence/cuervo.png",
  },
  {
    id: 3,
    name: "Próximamente",
    discipline: "Grappling",
    weight: "—",
    instagram: null,
    image: "/mat_defence/cuervo.png",
  },
];

function MatDefencePage() {
  const { title, body, benefits, image, logo } = site.matDefence;

  return (
    <>
      <Navbar />

      <main className="md-page">

        {/* Discipline strip */}
        <div className="md-page__strip">
          {disciplines.map((d, i) => (
            <span key={d}>
              {d}{i < disciplines.length - 1 && <span className="md-page__sep">·</span>}
            </span>
          ))}
        </div>

        {/* Hero block */}
        <div className="md-page__hero">
          <div className="md-page__hero-text">
            <Link to="/" className="md-page__back">← Volver</Link>
            <span className="md-page__eyebrow">Soap Co. · Est. 2024</span>
            <h1 className="md-page__title">Mat<br />Defence</h1>
            <p className="md-page__tagline">Hecho por grapplers, para grapplers.</p>
            <p className="md-page__body">{title}</p>
            <p className="md-page__body">{body}</p>
            <a
              className="md-page__cta"
              href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir por WhatsApp
            </a>
          </div>
          <div className="md-page__hero-image">
            <img src="/mat_defence/matdefence.png" alt="Jabón Mat Defence en el gym" />
          </div>
        </div>

        {/* Full-width fight image */}
        <div className="md-page__fight">
          <img src="/mat_defence/cuervo2.png" alt="Pelea Mat Defence" />
          <div className="md-page__fight-card">
            <span className="md-page__fight-card-eyebrow">Mat Defence Soap Co.</span>
            <h3 className="md-page__fight-card-title">El jabón para peleadores</h3>
            <p className="md-page__fight-card-body">
              Para quienes lo dan todo en el tatami. Elaborado artesanalmente con aceite de árbol de té y romero — dos de los agentes naturales más potentes contra hongos e infecciones cutáneas como tiña, estafilococo y molusco contagioso. Porque tu piel también entrena.
            </p>
            <div className="md-page__fight-card-tags">
              <span>Antibacterial</span>
              <span>Natural</span>
              <span>120g / 30g</span>
            </div>
          </div>
        </div>

        {/* Product cards */}
        <div className="md-page__section md-page__products">
          <p className="md-page__section-label">Productos</p>
          <div className="md-products__grid">
            <div className="md-product-card">
              <div className="md-product-card__image">
                <img src="/mat_defence/matdefencegrande.png" alt="Mat Defence Grande" />
              </div>
              <div className="md-product-card__body">
                <span className="md-product-card__size">120 g</span>
                <h3 className="md-product-card__name">Mat Defence Grande</h3>
                <p className="md-product-card__tagline">Barra completa para tu rutina de entrenamiento.</p>
                <div className="md-product-card__footer">
                  <span className="md-product-card__price">$15.000 COP</span>
                  <a
                    className="md-product-card__cta"
                    href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=Hola!%20Quiero%20pedir%20Mat%20Defence%20Grande%20120g`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>

            <div className="md-product-card">
              <div className="md-product-card__image">
                <img src="/mat_defence/matdefencemini.png" alt="Mat Defence Mini" />
              </div>
              <div className="md-product-card__body">
                <span className="md-product-card__size">30 g</span>
                <h3 className="md-product-card__name">Mat Defence Mini</h3>
                <p className="md-product-card__tagline">Tamaño viaje, ideal para tu bolso del gym.</p>
                <div className="md-product-card__footer">
                  <span className="md-product-card__price">$3.000 COP</span>
                  <a
                    className="md-product-card__cta"
                    href={`https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=Hola!%20Quiero%20pedir%20Mat%20Defence%20Mini%2030g`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width image */}
        <div className="md-page__full-image">
          <img src={image} alt="Jabón Mat Defence" />
          <div className="md-page__image-label">120G · Jabón Artesanal Antibacterial · For Grapplers</div>
        </div>

        {/* Ingredients */}
        <div className="md-page__section">
          <p className="md-page__section-label">Ingredientes Activos</p>
          <div className="md-page__benefits">
            {benefits.map((b) => (
              <div key={b} className="md-page__benefit">{b}</div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="md-page__section md-page__section--features">
          <p className="md-page__section-label">Después de cada roll</p>
          <div className="md-page__features">
            {features.map((f) => (
              <div key={f.label} className="md-page__feature">
                <h3>{f.label}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Athletes */}
        <div className="md-page__section md-athletes">
          <div className="md-athletes__header">
            <p className="md-page__section-label">Team Mat Defence</p>
            <h2 className="md-athletes__title">Deportistas<br />Patrocinados</h2>
          </div>
          <div className="md-athletes__grid">
            {athletes.map((athlete) => (
              <div key={athlete.id} className="md-athlete">
                <div className="md-athlete__image-wrap">
                  <img src={athlete.image} alt={athlete.name} />
                  <div className="md-athlete__overlay">
                    {athlete.instagram && (
                      <a
                        href={`https://instagram.com/${athlete.instagram.replace("@", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md-athlete__ig"
                      >
                        {athlete.instagram}
                      </a>
                    )}
                  </div>
                </div>
                <div className="md-athlete__info">
                  <h3 className="md-athlete__name">{athlete.name}</h3>
                  <div className="md-athlete__meta">
                    <span className="md-athlete__discipline">{athlete.discipline}</span>
                    {athlete.weight !== "—" && (
                      <span className="md-athlete__weight">{athlete.weight}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="md-page__footer-strip">
          La higiene también es parte del entrenamiento &nbsp;·&nbsp; Mat Defence Soap Co.
        </div>

      </main>

      <Footer />
    </>
  );
}

export default MatDefencePage;
