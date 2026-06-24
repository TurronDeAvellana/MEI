import { site } from "../data/site.js";
import "./Hero.css";

function Hero() {
  const { eyebrow, headline, body, ctaPrimary, ctaSecondary, image } = site.hero;

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
        <img src={image} alt={`${site.name} jabón artesanal`} />
      </div>
    </section>
  );
}

export default Hero;
