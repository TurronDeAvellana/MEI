// Dimensiones intrínsecas (px) de las imágenes optimizadas en /public.
// Se usan como width/height para evitar CLS.
const sizes = {
  "/mei/productos/jabon-artesanal-hera-1.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-hera-2.webp": [1331, 1331],
  "/mei/productos/jabon-artesanal-eos-1.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-eos-2.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-zeus-1.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-zeus-2.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-hecate-1.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-hecate-2.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-hades-1.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-hades-2.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-artemisa-1.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-artemisa-2.webp": [1600, 1600],
  "/mei/productos/jabon-artesanal-eir-1.webp": [1504, 1504],
  "/mei/productos/jabon-artesanal-eir-2.webp": [1600, 1600],
  "/mei/productos/jabones-artesanales-mei-cali-1.webp": [1600, 898],
  "/mei/productos/jabones-artesanales-mei-cali-2.webp": [1600, 898],
  "/mei/productos/elaboracion-artesanal-jabones-mortero.webp": [1600, 1600],
  "/mei/productos/proximamente-jabon-artesanal.webp": [1254, 1254],
  "/mei/logo-mei.webp": [256, 249],
  "/mat_defence/deportista-mat-defence-cuervo.webp": [1254, 1254],
  "/mat_defence/pelea-mat-defence-cuervo.webp": [1600, 900],
  "/mat_defence/jabon-mat-defence-gimnasio.webp": [1254, 1254],
  "/mat_defence/jabon-mat-defence-chico.webp": [1254, 1254],
  "/mat_defence/jabon-mat-defence-grande.webp": [1280, 1280],
  "/mat_defence/proximamente-mat-defence.webp": [900, 1600],
  "/mat_defence/logo-mat-defence-blanco.webp": [247, 256],
};

// Anchos de las versiones reducidas que genera scripts/resize-images.mjs
// (archivo-480.webp, archivo-800.webp, …). Solo existen las menores que el original.
const VARIANT_WIDTHS = [160, 480, 800, 1200];
const MIN_WIDTH_FOR_VARIANTS = 600; // logos y gráficos pequeños se sirven tal cual

export const imageSources = Object.keys(sizes);

export function variantWidths(src) {
  const [width] = sizes[src] || [];
  if (!width || width < MIN_WIDTH_FOR_VARIANTS) return [];
  return VARIANT_WIDTHS.filter((w) => w < width);
}

export const variantSrc = (src, w) => src.replace(/.webp$/, `-${w}.webp`);

// Valores del atributo `sizes` según el ancho que ocupa la imagen en cada layout.
export const SIZES = {
  full: "100vw",
  half: "(min-width: 768px) 50vw, 100vw",
  hero: "(min-width: 992px) 55vw, 100vw",
  essence: "(min-width: 992px) 50vw, 100vw",
  grid4: "(min-width: 992px) 25vw, (min-width: 600px) 50vw, 100vw",
  grid3: "(min-width: 992px) 33vw, (min-width: 600px) 50vw, 100vw",
  thumb: "64px",
};

/**
 * width/height (evitan CLS) y, si se pasa `sizesAttr`, srcSet + sizes para que
 * el navegador descargue la versión del tamaño que realmente se muestra.
 */
export function imgSize(src, sizesAttr) {
  const [width, height] = sizes[src] || [];
  if (!width) return {};
  const widths = sizesAttr ? variantWidths(src) : [];
  if (!widths.length) return { width, height };
  const srcSet = [...widths.map((w) => `${variantSrc(src, w)} ${w}w`), `${src} ${width}w`].join(", ");
  return { width, height, srcSet, sizes: sizesAttr };
}

export function productAlt(product) {
  const ing = (product.ingredients || []).map((i) => i.toLowerCase());
  const list = ing.length > 1 ? `${ing.slice(0, -1).join(", ")} y ${ing[ing.length - 1]}` : ing[0];
  return `${product.name} – jabón artesanal${list ? ` de ${list}` : ""} hecho a mano en Cali`;
}
