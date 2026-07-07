import { site } from "../data/site.js";
import Sprig from "./Sprig.jsx";
import "./Contact.css";

function Contact() {
  const { email, whatsapp, instagram } = site.contact;
  const whatsappHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}`;
  const instagramHref = `https://instagram.com/${instagram.replace("@", "")}`;

  return (
    <section id="contacto" className="section contact">
      <div className="section-label">
        <Sprig className="section-label__sprig" />
        <span className="eyebrow">Hablemos</span>
      </div>
      <h2>
        ¿Tienes alguna <em>pregunta</em>?
      </h2>
      <p>
        Escríbenos y te ayudamos a elegir el jabón ideal o a armar tu pedido.
      </p>
      <div className="contact__actions">
        <a
          className="btn btn--primary"
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Escribir por WhatsApp
        </a>
        <a className="btn btn--secondary" href={`mailto:${email}`}>
          Enviar un correo
        </a>
      </div>
      <a
        className="contact__instagram"
        href={instagramHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {instagram}
      </a>
    </section>
  );
}

export default Contact;
