import { site } from "../data/site.js";
import "./Essence.css";

function Essence() {
  const { title, body, image, values } = site.essence;

  const titleWords = title.trim().split(" ");
  const lastWord = titleWords.pop();
  const titleStart = titleWords.join(" ");

  const [lede, ...restSentences] = body.split(/(?<=\.)\s+/);
  const rest = restSentences.join(" ");

  return (
    <section id="esencia" className="section essence">
      <div className="essence__image">
        <img src={image} alt="Proceso artesanal de elaboración MEI" />
      </div>
      <div className="essence__content">
        <span className="essence__rule" aria-hidden="true" />
        <h2>
          {titleStart && `${titleStart} `}
          <em>{lastWord}</em>
        </h2>
        <p className="essence__lede">{lede}</p>
        {rest && <p className="essence__body">{rest}</p>}
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
