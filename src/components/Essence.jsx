import { site } from "../data/site.js";
import "./Essence.css";

function Essence() {
  const { title, body, image, values } = site.essence;

  return (
    <section id="esencia" className="section essence">
      <div className="essence__image">
        <img src={image} alt="Proceso artesanal de elaboración MEI" />
      </div>
      <div className="essence__content">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="essence__values">
          {values.map((value) => (
            <span key={value} className="essence__pill">
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Essence;
