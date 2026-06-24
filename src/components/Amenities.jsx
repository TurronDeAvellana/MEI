import { site } from "../data/site.js";
import "./Amenities.css";

function Amenities() {
  const { title, body, cta } = site.amenities;

  return (
    <section id="amenities" className="section amenities">
      <h2>{title}</h2>
      <p>{body}</p>
      <a className="btn btn--primary" href={cta.href}>
        {cta.label}
      </a>
    </section>
  );
}

export default Amenities;
