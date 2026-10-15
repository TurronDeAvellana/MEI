import { products } from "../data/products.js";
import { competencias } from "../data/blog.js";

export const staticRoutes = ["/", "/catalogo", "/mat-defence", "/amenities", "/links", "/blog", "/blog/competencias"];

export function getAllRoutes() {
  const blog = competencias.map((c) => `/blog/competencias/${c.slug}`);
  return [...staticRoutes, ...products.map((p) => `/producto/${p.slug}`), ...blog];
}
