import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Sprig from "../components/Sprig.jsx";
import PropuestaModal from "../components/PropuestaModal.jsx";
import "./AmenitiesPage.css";

function AmenitiesPage() {
  const page = site.amenitiesPage;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <main className="am-page">
        <header className="am-page__hero">
          <Link to="/" className="am-page__back">← Inicio</Link>
          <div className="section-label">
            <Sprig className="section-label__sprig" />
            <span className="eyebrow">{page.eyebrow}</span>
          </div>
          <h1>{page.h1}</h1>
          <p className="am-page__intro">{page.intro}</p>
          <button type="button" className="btn btn--primary" onClick={() => setShowModal(true)}>
            {page.cta.label}
          </button>
        </header>

        <section className="section am-page__cases" aria-labelledby="am-cases-title">
          <h2 id="am-cases-title">{page.useCasesTitle}</h2>
          <div className="am-page__grid">
            {page.useCases.map((c) => (
              <article key={c.title} className="am-page__card">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section am-page__custom" aria-labelledby="am-custom-title">
          <h2 id="am-custom-title">{page.customTitle}</h2>
          <ul className="am-page__custom-list">
            {page.custom.map((c) => (
              <li key={c.label}>
                <h3>{c.label}</h3>
                <p>{c.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section am-page__process" aria-labelledby="am-process-title">
          <h2 id="am-process-title">{page.processTitle}</h2>
          <ol className="am-page__steps">
            {page.process.map((step, i) => (
              <li key={step.title}>
                <span className="am-page__step-number" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section am-page__cta" aria-labelledby="am-cta-title">
          <h2 id="am-cta-title">{page.ctaTitle}</h2>
          <p>{page.ctaBody}</p>
          <button type="button" className="btn btn--primary" onClick={() => setShowModal(true)}>
            {page.cta.label}
          </button>
        </section>

        {showModal && <PropuestaModal onClose={() => setShowModal(false)} />}
      </main>
      <Footer />
    </>
  );
}

export default AmenitiesPage;
