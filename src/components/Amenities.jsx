import { site } from "../data/site.js";
import Sprig from "./Sprig.jsx";
import "./Amenities.css";

function Amenities() {
  const { title, body, cta } = site.amenities;

  const titleWords = title.trim().split(" ");
  const titleAccent = titleWords.pop();
  const titleStart = titleWords.join(" ");

  return (
    <section id="amenities" className="section amenities">
      <div className="section-label">
        <Sprig className="section-label__sprig" />
        <span className="eyebrow">Empresas & Hoteles</span>
      </div>
      <h2>
        {titleStart && `${titleStart} `}
        <em>{titleAccent}</em>
      </h2>
      <p>{body}</p>
      <a className="btn btn--primary" href={cta.href}>
        {cta.label}
      </a>
    </section>
  );
}

export default Amenities;
