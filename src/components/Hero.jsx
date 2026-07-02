import { useState, useEffect } from "react";
import { site } from "../data/site.js";
import "./Hero.css";

function Hero() {
  const { eyebrow, headline, body, ctaPrimary, ctaSecondary, images } = site.hero;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">{eyebrow}</span>
        <h1 className="hero__headline">{headline}</h1>
        <p className="hero__body">{body}</p>
        <div className="hero__buttons">
          <a className="btn btn--primary" href={ctaPrimary.href}>
            {ctaPrimary.label}
          </a>
          <a className="btn btn--secondary" href={ctaSecondary.href}>
            {ctaSecondary.label}
          </a>
        </div>
      </div>
      <div className="hero__image">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${site.name} jabón artesanal ${i + 1}`}
            className={i === current ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
