import { useEffect } from "react";
import { site } from "../data/site.js";
import "./PropuestaModal.css";

function PropuestaModal({ onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const whatsappHref = `https://wa.me/${site.contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola! Quiero solicitar una propuesta de amenities / regalos corporativos para mi hotel, spa o evento."
  )}`;
  const emailHref = `mailto:meijabones@gmail.com?subject=${encodeURIComponent(
    "Solicitud de propuesta - Amenities"
  )}&body=${encodeURIComponent(
    "Hola equipo MEI MAGIC,\n\nMe gustaría recibir una propuesta para mi hotel/spa/evento.\n\nCuéntenme más:\n- Tipo de proyecto o evento:\n- Cantidad aproximada:\n- Fecha estimada:\n\nGracias!"
  )}`;

  return (
    <div className="propuesta-modal__overlay" onClick={onClose}>
      <div
        className="propuesta-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="propuesta-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="propuesta-modal__close" onClick={onClose} aria-label="Cerrar">
          &times;
        </button>

        <span className="eyebrow">Empresas & Hoteles</span>
        <h3 id="propuesta-modal-title">
          Una experiencia hecha <em>a tu medida</em>
        </h3>
        <p>
          Nos adaptamos a hoteles, spas, eventos corporativos y celebraciones,
          creando amenities y regalos que acompañan cada experiencia que
          quieras ofrecer a tus huéspedes o invitados.
        </p>
        <p>
          Cada cotización se elabora según el proyecto o evento a realizar:
          cantidad, empaque, aromas y tiempos se ajustan a lo que necesites.
          Cuéntanos tu idea y armamos una propuesta a la medida.
        </p>

        <div className="propuesta-modal__actions">
          <a
            className="btn btn--primary"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
          <a className="btn btn--secondary" href={emailHref}>
            Escribir al correo
          </a>
        </div>
      </div>
    </div>
  );
}

export default PropuestaModal;
