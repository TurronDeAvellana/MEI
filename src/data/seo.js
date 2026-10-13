export const siteUrl = "https://mei.portafoliodev.com";
export const siteName = "MEI";
export const locale = "es_CO";
export const defaultImage = "/mei/og-image.jpg";

export const business = {
  name: "MEI Jabones Artesanales",
  legalName: "MEI MAGIC",
  telephone: "+573123243726",
  email: "mei@meimagic.co",
  instagram: "https://www.instagram.com/mei_magic_111/",
  logo: "/mei/logo-512.png",
  city: "Cali",
  region: "Valle del Cauca",
  country: "CO",
  areaServed: ["Cali", "Valle del Cauca", "Colombia"],
  priceRange: "$$",
  description:
    "Jabones artesanales de glicerina, naturales y hechos a mano en Cali, Colombia, inspirados en la mitología griega.",
};

export const routeMeta = {
  "/": {
    title: "Jabones artesanales naturales en Cali | MEI",
    description:
      "Jabones artesanales de glicerina hechos a mano en Cali. Ingredientes naturales, aromas únicos y diseños inspirados en la mitología para el cuidado de tu piel.",
  },
  "/catalogo": {
    title: "Catálogo de jabones naturales en Cali | MEI",
    description:
      "Explora la colección MEI: jabones artesanales faciales, corporales y de bienestar, hechos a mano en Cali con glicerina y extractos botánicos. Pide por WhatsApp.",
  },
  "/mat-defence": {
    title: "Mat Defence: jabón para BJJ y deportes de contacto",
    description:
      "Mat Defence: jabón artesanal para jiu-jitsu (BJJ), judo y MMA con carbón activado y árbol de té. Limpieza profunda tras entrenar. Hecho a mano en Cali.",
  },
  "/amenities": {
    title: "Amenities y regalos corporativos en Cali | MEI",
    description:
      "Jabones artesanales personalizados para hoteles, spas y eventos en Cali y Colombia. Amenities naturales y regalos corporativos con tu marca. Cotiza con MEI.",
  },
  "/links": {
    title: "Enlaces | MEI Jabones Artesanales",
    description:
      "Todos los enlaces de MEI Jabones Artesanales: catálogo, WhatsApp, Instagram y Mat Defence. Jabones naturales hechos a mano en Cali, Colombia.",
    noindex: true,
  },
};

export const notFoundMeta = {
  title: "Página no encontrada | MEI",
  description:
    "La página que buscas no existe. Conoce los jabones artesanales naturales de MEI, hechos a mano en Cali, Colombia.",
};

function join(list) {
  if (list.length <= 1) return list.join("");
  return list.slice(0, -1).join(", ") + " y " + list[list.length - 1];
}

function clip(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "") + "…";
}

export function productMeta(product) {
  const ings = (product.ingredients || []).map((i) => i.toLowerCase());
  if (product.slug === "mat-defence") {
    return {
      title: "Mat Defence: jabón antibacterial para entrenar | MEI",
      description:
        "Jabón artesanal de glicerina con carbón activado, árbol de té y vitamina E. Limpieza profunda tras entrenar jiu-jitsu, judo o MMA. Hecho a mano en Cali.",
    };
  }
  const ingText = ings.length ? ` de ${join(ings)}` : "";
  const title = clip(`${product.name}: jabón artesanal${ingText} | MEI`, 60);
  const tipo = product.tipo ? product.tipo.toLowerCase() : "cuidado de la piel";
  const withText = ings.length ? ` con ${join(ings)}` : "";
  const tag = product.tagline.charAt(0).toLowerCase() + product.tagline.slice(1);
  const head = `${product.name}: ${tag}. Jabón artesanal de glicerina${withText}, línea ${tipo}. Hecho a mano en Cali`;
  const long = `${head} con ingredientes naturales.`;
  const base = long.length <= 160 ? long : `${head}.`;
  return { title, description: clip(base, 160) };
}
