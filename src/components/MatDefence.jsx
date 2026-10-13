import { Link } from "react-router-dom";
import { site } from "../data/site.js";
import { imgSize } from "../data/imageSizes.js";
import "./MatDefence.css";

function MatDefence() {
  const { body, image, logo } = site.matDefence;

  return (
    <section id="mat-defence" className="mat-defence-preview section">
      <div className="mat-defence-preview__layout">
        <div className="mat-defence-preview__info">
          <img src={logo} alt="Logo Mat Defence Soap Co., jabón artesanal para deportistas" className="mat-defence-preview__logo" {...imgSize(logo)} loading="lazy" decoding="async" />
          <h2>Mat Defence</h2>
          <p className="mat-defence-preview__sub">Soap Co. · For Grapplers</p>
          <p className="mat-defence-preview__body">{body}</p>
          <Link to="/mat-defence" className="btn btn--md">
            Conocer Mat Defence →
          </Link>
        </div>
        <div className="mat-defence-preview__image">
          <img src="/mat_defence/deportista-mat-defence-cuervo.webp" alt="Deportista de artes marciales con el jabón artesanal Mat Defence" {...imgSize("/mat_defence/deportista-mat-defence-cuervo.webp")} loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

export default MatDefence;
