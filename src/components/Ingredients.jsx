import { site } from "../data/site.js";
import "./Ingredients.css";

const icons = {
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 19c8-1 13-6 14-14-8 1-13 6-14 14Z" />
      <path d="M5 19c0-5 2-9 5-12" />
    </svg>
  ),
  butter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="9" width="16" height="10" rx="2" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  sprout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21V11" />
      <path d="M12 11c0-4-3-6-7-6 0 4 3 6 7 6Z" />
      <path d="M12 11c0-3 3-5 6-5 0 3-3 5-6 5Z" />
    </svg>
  ),
  flower: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
    </svg>
  ),
};

function Ingredients() {
  return (
    <section id="ingredientes" className="section ingredients">
      <span className="eyebrow">Lo que usamos</span>
      <h2>Ingredientes Naturales</h2>
      <div className="ingredients__grid">
        {site.ingredients.map((ingredient) => (
          <div key={ingredient.label} className="ingredient-card">
            <span className="ingredient-card__icon">{icons[ingredient.icon]}</span>
            <p>{ingredient.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ingredients;
