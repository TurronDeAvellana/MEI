import { useState } from "react";
import { site } from "../data/site.js";
import Sprig from "./Sprig.jsx";
import PropuestaModal from "./PropuestaModal.jsx";
import "./Amenities.css";

function Amenities() {
  const { title, body, cta } = site.amenities;
  const [showModal, setShowModal] = useState(false);

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
      <button className="btn btn--primary" onClick={() => setShowModal(true)}>
        {cta.label}
      </button>
      {showModal && <PropuestaModal onClose={() => setShowModal(false)} />}
    </section>
  );
}

export default Amenities;
