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

export function imgSize(src) {
  const [width, height] = sizes[src] || [];
  return width ? { width, height } : {};
}

export function productAlt(product) {
  const ing = (product.ingredients || []).map((i) => i.toLowerCase());
  const list = ing.length > 1 ? `${ing.slice(0, -1).join(", ")} y ${ing[ing.length - 1]}` : ing[0];
  return `${product.name} – jabón artesanal${list ? ` de ${list}` : ""} hecho a mano en Cali`;
}
