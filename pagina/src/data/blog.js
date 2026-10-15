// Blog de MEI. Cada sección tiene su propia ruta: /blog/<seccion>.
// Una sección solo aparece en el sitio cuando tiene contenido.
export const blogSections = [
  {
    slug: "competencias",
    nombre: "Competencias",
    descripcion:
      "Torneos que patrocinamos y las historias de los atletas que compiten en ellos. Un espacio de MEI para que los competidores cuenten quiénes son, cómo les fue y qué les pareció su kit.",
  },
];

// Texto de la iniciativa (encabezado de /blog/competencias y llamado a contar la historia).
export const competenciasIntro = {
  titulo: "Tu historia también compite",
  cuerpo:
    "Sabemos que muchos competidores sueñan con que una marca los patrocine algún día. Por eso abrimos este espacio en nuestra web: cuéntanos quién eres, cómo te fue en el torneo y, si ganaste un kit MEI, qué te pareció.",
  pasos: [
    "Tu nombre y tu @ de Instagram",
    "Una foto tuya (compitiendo o con tu medalla)",
    "La categoría en la que participaste",
    "Cómo te sentiste en el evento",
    "Si recibiste kit MEI y, si sí, qué te pareció",
  ],
};

// ── Competencias ────────────────────────────────────────────────
// Una entrada por torneo, en una sola página: /blog/competencias/<slug>
// Arriba va el comentario del organizador y debajo los testimonios de los atletas.
//
// Fotos: súbelas a public/blog/competencias/<slug>/ en .webp y agrega su tamaño
// en src/data/imageSizes.js para que se generen las versiones reducidas.
//
// Antes de publicar a un atleta, guarda su autorización para usar nombre, foto y
// testimonio (Ley 1581 de 2012). Si es menor de edad, la autoriza su acudiente.
//
// Plantilla de atleta (cada respuesta de la encuesta de Google):
// {
//   id: "nombre-apellido",               // ancla para compartir: …/sevilla-open#nombre-apellido
//   nombre: "Nombre Apellido",
//   instagram: "@usuario",
//   foto: "/blog/competencias/sevilla-open/nombre-apellido.webp",
//   categoria: "Cinturón azul · -76 kg",
//   resultado: "Oro",                    // opcional
//   academia: "Nombre de la academia",   // opcional
//   experiencia: "Cómo se sintió en el evento (puede tener varios párrafos separados por una línea en blanco).",
//   recibioKit: true,
//   opinionKit: "Qué le pareció el kit MEI (solo si recibioKit es true).",
//   autorizacion: "2026-10-18",          // fecha en que autorizó la publicación
// }
export const competencias = [
  {
    slug: "sevilla-open",
    // TODO: completar con los datos reales del torneo.
    nombre: "Sevilla Open",
    fecha: null, // "AAAA-MM-DD"
    lugar: null, // "Coliseo …, Sevilla, Valle del Cauca"
    disciplina: null, // "Jiu-jitsu brasileño"
    resumen: null, // Una o dos frases sobre el torneo.
    patrocinio: "Kits MEI como parte de la premiación",
    imagen: null, // "/blog/competencias/sevilla-open/portada.webp"
    organizador: null,
    // organizador: {
    //   nombre: "Nombre del organizador",
    //   rol: "Organizador del torneo",
    //   instagram: "@usuario",
    //   torneo: "Cómo se desenvolvió el torneo.",
    //   kits: "Qué pensó de los kits MEI como parte de la premiación.",
    // },
    atletas: [],
  },
];

// ── Utilidades ──────────────────────────────────────────────────
export const findCompetencia = (slug) => competencias.find((c) => c.slug === slug);

// Una competencia sin organizador ni atletas aún no tiene contenido: se muestra,
// pero con noindex y fuera del sitemap.
export const hasContent = (c) => Boolean(c.organizador) || c.atletas.length > 0;

export const instagramUrl = (handle) =>
  handle ? `https://www.instagram.com/${handle.replace(/^@/, "").replace(/\/$/, "")}/` : null;

export const paragraphs = (text) =>
  String(text || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

const dateFmt = new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
export const formatDate = (iso) => (iso ? dateFmt.format(new Date(iso + "T00:00:00Z")) : null);

// Mensaje de WhatsApp con los datos que pedimos para una entrada.
export function storyWhatsappText(competencia) {
  const torneo = competencia ? ` en ${competencia.nombre}` : "";
  return [
    `¡Hola MEI! Quiero contar mi historia${torneo} en el blog.`,
    "",
    "Nombre:",
    "Instagram (@):",
    "Categoría en la que participé:",
    "Resultado:",
    "¿Cómo me sentí en el evento?:",
    "¿Recibí kit MEI? (sí/no):",
    "Si sí, ¿qué me pareció el kit?:",
    "",
    "(Adjunto una foto mía)",
  ].join("\n");
}
