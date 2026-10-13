import { useState, useEffect } from "react";
import { site } from "../data/site.js";
import { imgSize } from "../data/imageSizes.js";
import "./Hero.css";

function Hero() {
  const { h1, eyebrow, localNote, headline, body, ctaPrimary, ctaSecondary, images } = site.hero;
  const [current, setCurrent] = useState(0);

  const headlineWords = headline.trim().split(" ");
  const headlineAccent = headlineWords.pop();
  const headlineStart = headlineWords.join(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <h1 className="hero__eyebrow">{h1}</h1>
        <p className="hero__headline">
          {headlineStart && `${headlineStart} `}
          <em>{headlineAccent}</em>
        </p>
        <p className="hero__kicker">{eyebrow}</p>
        <p className="hero__body">{body}</p>
        <p className="hero__local">{localNote}</p>
        <div className="hero__buttons">
          <a className="btn btn--primary" href={ctaPrimary.href}>
            {ctaPrimary.label}
          </a>
          <a className="btn btn--secondary" href={ctaSecondary.href}>
            {ctaSecondary.label}
          </a>
        </div>
      </div>
      <div className="hero__image-frame">
        <div className="hero__image">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === 0 ? "Jabones artesanales de glicerina MEI hechos a mano en Cali, Colombia" : "Colección de jabones artesanales naturales MEI Magic"}
              {...imgSize(src)}
              {...(i === 0 ? { fetchPriority: "high" } : { loading: "lazy" })}
              decoding="async"
              className={i === current ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
