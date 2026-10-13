import { products } from "../data/products.js";

export const staticRoutes = ["/", "/catalogo", "/mat-defence", "/amenities", "/links"];

export function getAllRoutes() {
  return [...staticRoutes, ...products.map((p) => `/producto/${p.slug}`)];
}
