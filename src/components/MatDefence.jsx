import { site } from "../data/site.js";
import "./MatDefence.css";

function MatDefence() {
  const { title, body, benefits, image, logo } = site.matDefence;

  return (
    <section id="mat-defence" className="section mat-defence">
      <div className="mat-defence__hero">
        <div className="mat-defence__logo">
          <img src={logo} alt="Mat Defence" />
        </div>
        <div className="mat-defence__intro">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>

      <div className="mat-defence__image">
        <img src={image} alt="Jabón Mat Defence" />
      </div>

      <div className="mat-defence__benefits">
        {benefits.map((benefit) => (
          <div key={benefit} className="mat-defence__benefit">
            {benefit}
          </div>
        ))}
      </div>

      <a className="btn btn--primary" href="#footer">
        Contactar para pedidos
      </a>
    </section>
  );
}

export default MatDefence;
