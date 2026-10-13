import { site } from "../data/site.js";
import Sprig from "./Sprig.jsx";
import { imgSize } from "../data/imageSizes.js";
import "./Essence.css";

function Essence() {
  const { title, body, image, values, local } = site.essence;

  const titleWords = title.trim().split(" ");
  const lastWord = titleWords.pop();
  const titleStart = titleWords.join(" ");

  const [lede, ...restSentences] = body.split(/(?<=\.)\s+/);
  const rest = restSentences.join(" ");

  return (
    <section id="esencia" className="section essence">
      <div className="essence__image">
        <img src={image} alt="Elaboración artesanal de jabones de glicerina a mano con mortero en Cali" {...imgSize(image)} loading="lazy" decoding="async" />
      </div>
      <div className="essence__content">
        <Sprig className="essence__sprig" />
        <h2>
          {titleStart && `${titleStart} `}
          <em>{lastWord}</em>
        </h2>
        <p className="essence__lede">{lede}</p>
        {rest && <p className="essence__body">{rest}</p>}
        {local && (
          <p className="essence__local">
            <strong>{local.title}.</strong> {local.body}
          </p>
        )}
        <div className="essence__values">
          {values.map((value) => (
            <span key={value} className="essence__value">
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Essence;
