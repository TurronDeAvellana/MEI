export const site = {
  name: "MEI MAGIC",
  tagline: "Rituales naturales para el cuidado diario",
  description:
    "Glicerina pura, ingredientes naturales, elaborados a mano en Colombia.",
  logo: "/mei/logo.png",
  contact: {
    email: "mei@meimagic.co",
    whatsapp: "+573123243726",
    instagram: "@meimagic.co",
  },
  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Esencia", href: "#esencia" },
    { label: "Productos", href: "#productos" },
    { label: "Amenities", href: "#amenities" },
    { label: "Mat Defence", href: "#mat-defence" },
    { label: "Contacto", href: "#footer" },
  ],
  hero: {
    eyebrow: "Rituales naturales para el cuidado diario",
    headline:
      "Jabones artesanales elaborados con ingredientes seleccionados para transformar tu rutina.",
    body:
      "Ingredientes naturales, procesos conscientes y una experiencia premium para el cuidado personal.",
    ctaPrimary: { label: "Ver Colección", href: "#productos" },
    ctaSecondary: { label: "Descubrir Mat Defence", href: "#mat-defence" },
    images: ["/mei/productos/hero1.png", "/mei/productos/hero2.png"],
  },
  essence: {
    title: "Nuestra Esencia",
    body: "MEI nace para convertir el cuidado diario en un ritual de bienestar.",
    image: "/src/assets/mei/essence.jpg",
    values: ["Natural", "Artesanal", "Bienestar", "Sostenible"],
  },
  ingredients: [
    { icon: "leaf", label: "Aceites Naturales" },
    { icon: "butter", label: "Mantecas Vegetales" },
    { icon: "sprout", label: "Extractos Botánicos" },
    { icon: "flower", label: "Aromas Naturales" },
  ],
  amenities: {
    title: "Amenities & Regalos Corporativos",
    body: "Soluciones personalizadas para hoteles, spas y eventos empresariales.",
    cta: { label: "Solicitar propuesta", href: "#footer" },
  },
  matDefence: {
    title: "La higiene también es parte del entrenamiento",
    body: "Jabón artesanal desarrollado para deportistas de contacto.",
    benefits: ["Carbón Activado", "Árbol de Té", "Aceite de Coco", "Vitamina E"],
    logo: "/mat_defence/logo.png",
    image: "/src/assets/mat-defence/mat-defence.jpg",
  },
};
