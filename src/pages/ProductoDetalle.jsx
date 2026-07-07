import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { products } from "../data/products.js";
import { ingredientBenefits } from "../data/ingredientBenefits.js";
import { formatPrice } from "../utils/formatPrice.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Sprig from "../components/Sprig.jsx";
import "./ProductoDetalle.css";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function IconDroplet() {
  return (
    <svg {...iconProps}>
      <path d="M12 3c0 0-6 7.5-6 12a6 6 0 0 0 12 0c0-4.5-6-12-6-12Z" />
    </svg>
  );
}

function IconDish() {
  return (
    <svg {...iconProps}>
      <rect x="3.5" y="9.5" width="17" height="6.5" rx="3.25" />
      <path d="M8 9.5v6.5M12 9.5v6.5M16 9.5v6.5" />
    </svg>
  );
}

function IconNoWater() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M6.5 12c1.4-1.4 2.8-1.4 4.2 0s2.8 1.4 4.2 0 2.8-1.4 4.2 0" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

function IconSun() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

function IconPerson() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="7.5" r="3.2" />
      <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </svg>
  );
}

function getUsageScopeNote(category = "") {
  const isFacial = category.includes("facial");
  const isCorporal = category.includes("corporal");
  if (isFacial && isCorporal) {
    return "Puedes usarlo tanto en el rostro como en el cuerpo, según lo necesites.";
  }
  if (isFacial) {
    return "Este jabón está formulado para uso facial: úsalo solo en el rostro.";
  }
  if (isCorporal) {
    return "Este jabón está formulado para uso corporal: úsalo solo en el cuerpo.";
  }
  return "Aplícalo sobre la zona específica que deseas tratar.";
}

function ProductoDetalle() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/catalogo" replace />;

  const images = [product.image, product.image2].filter(Boolean);
  const [activeImage, setActiveImage] = useState(images[0]);
  const hasMini = Boolean(product.miniPrice);
  const [size, setSize] = useState("normal");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setActiveImage(images[0]);
    setSize("normal");
    setQuantity(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const unitPrice = size === "mini" ? product.miniPrice : product.price;
  const formattedPrice = formatPrice(unitPrice);
  const sizeLabel = size === "mini" ? "Mini 30g" : "Tamaño original";

  const whatsappMessage = hasMini
    ? `Hola! Quiero pedir el jabón ${product.name}, tamaño ${sizeLabel}, ${quantity} unidad${quantity > 1 ? "es" : ""}.`
    : `Hola! Quiero pedir el jabón ${product.name}, ${quantity} unidad${quantity > 1 ? "es" : ""}.`;
  const whatsappHref = `https://wa.me/573123243726?text=${encodeURIComponent(whatsappMessage)}`;

  const careTips = [
    {
      icon: IconDroplet,
      title: "Déjalo secar entre cada uso",
      desc: "Así conserva mejor su aroma y su textura por más tiempo.",
    },
    {
      icon: IconDish,
      title: "Guárdalo en una jabonera con buen drenaje",
      desc: "Evita que se ablande o se deshaga antes de tiempo.",
    },
    {
      icon: IconNoWater,
      title: "Evita dejarlo sumergido en agua",
      desc: "El exceso de humedad reduce su duración.",
    },
    {
      icon: IconSun,
      title: "Consérvalo fresco, seco y protegido del sol",
      desc: "Así mantiene mejor sus propiedades naturales.",
    },
    {
      icon: IconPerson,
      title: "Respeta la zona de uso",
      desc: getUsageScopeNote(product.category),
    },
  ];

  return (
    <>
      <Navbar />
      <main className="detalle">
        <Link to="/catalogo" className="detalle__back">← Volver al catálogo</Link>

        <div className="detalle__layout">
          <div className="detalle__image-wrap">
            <img src={activeImage} alt={product.name} />
            {images.length > 1 && (
              <div className="detalle__thumbs">
                {images.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    className={`detalle__thumb ${activeImage === img ? "detalle__thumb--active" : ""}`}
                    onClick={() => setActiveImage(img)}
                    aria-label={`Ver foto ${i + 1} de ${product.name}`}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="detalle__info">
            <span className="detalle__category">{product.category}</span>
            <h1 className="detalle__name">{product.name}</h1>
            {product.tipo && (
              <span className="tag-badge detalle__tag">{product.tipo}</span>
            )}
            <p className="detalle__tagline">{product.tagline}</p>

            {hasMini && (
              <div className="detalle__size-selector">
                <span className="detalle__option-label">Tamaño</span>
                <div className="detalle__size-options">
                  <button
                    type="button"
                    className={`detalle__size-option ${size === "normal" ? "detalle__size-option--active" : ""}`}
                    onClick={() => setSize("normal")}
                  >
                    Original
                  </button>
                  <button
                    type="button"
                    className={`detalle__size-option ${size === "mini" ? "detalle__size-option--active" : ""}`}
                    onClick={() => setSize("mini")}
                  >
                    Mini 30g
                  </button>
                </div>
              </div>
            )}

            <p className="detalle__price">{formattedPrice}</p>

            <div className="detalle__quantity">
              <span className="detalle__option-label">Cantidad</span>
              <div className="detalle__quantity-control">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Disminuir cantidad"
                >
                  −
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>
            </div>

            <div className="detalle__meta">
              {product.scent && <span>Aroma: {product.scent}</span>}
              {product.color && <span>Color: {product.color}</span>}
              <span>Hecho a mano</span>
            </div>

            <p className="detalle__description">{product.description}</p>

            <a
              className="btn btn--primary detalle__cta"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        <nav className="detalle__jump" aria-label="Secciones del producto">
          <a href="#ingredientes">Ingredientes</a>
          <a href="#modo-de-uso">Modo de uso</a>
          <a href="#cuidados">Cuidados del jabón</a>
        </nav>

        <div className="detalle__deep">
          <section className="detalle__block" id="ingredientes">
            <div className="section-label">
              <Sprig className="section-label__sprig" />
              <span className="eyebrow">Ingredientes</span>
            </div>
            <h2>Lo que hay detrás de cada barra</h2>
            <div className="detalle__ingredient-grid">
              {product.ingredients.map((ing) => (
                <div className="detalle__ingredient-card" key={ing}>
                  <span className="detalle__ingredient-name">{ing}</span>
                  <p className="detalle__ingredient-benefit">
                    {ingredientBenefits[ing] ??
                      "Ingrediente natural seleccionado por su aporte al cuidado de la piel."}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {product.modoUso?.length > 0 && (
            <section className="detalle__block" id="modo-de-uso">
              <div className="section-label">
                <Sprig className="section-label__sprig" />
                <span className="eyebrow">Modo de uso</span>
              </div>
              <h2>Cómo sacarle el máximo provecho</h2>
              <ol className="detalle__steps">
                {product.modoUso.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>
          )}

          <section className="detalle__block" id="cuidados">
            <div className="section-label">
              <Sprig className="section-label__sprig" />
              <span className="eyebrow">Cuidados del jabón</span>
            </div>
            <h2>Un jabón bien cuidado dura más</h2>
            <p className="detalle__care-intro">
              Conserva mejor su aroma, mantiene su textura y te permite
              aprovechar al máximo sus ingredientes naturales.
            </p>
            <div className="detalle__care-grid">
              {careTips.map(({ icon: Icon, title, desc }) => (
                <div className="detalle__care-item" key={title}>
                  <span className="detalle__care-icon">
                    <Icon />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductoDetalle;
