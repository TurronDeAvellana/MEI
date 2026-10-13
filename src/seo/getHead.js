import { products } from "../data/products.js";
import { siteUrl, defaultImage, routeMeta, notFoundMeta, productMeta } from "../data/seo.js";
import {
  abs,
  businessSchema,
  websiteSchema,
  productSchema,
  breadcrumbSchema,
  itemListSchema,
  generalFaqSchema,
  matDefenceFaqSchema,
} from "./schema.js";

const compact = (arr) => arr.filter(Boolean);

export function getHead(pathname = "/") {
  let path = String(pathname || "/").split(/[?#]/)[0];
  if (!path.startsWith("/")) path = "/" + path;
  if (path.length > 1) path = path.replace(/\/+$/, "");
  const canonicalOf = (p) => (p === "/" ? siteUrl + "/" : siteUrl + p);
  const base = (meta, p, extra = {}) => ({
    title: meta.title,
    description: meta.description,
    canonical: canonicalOf(p),
    image: abs(defaultImage),
    ogType: "website",
    robots: meta.noindex ? "noindex,follow" : "index,follow",
    jsonLd: [],
    ...extra,
  });

  const slugMatch = path.match(/^\/producto\/([^/]+)$/);
  if (slugMatch) {
    const product = products.find((p) => p.slug === slugMatch[1]);
    if (!product) return base(notFoundMeta, "/", { robots: "noindex,follow" });
    const meta = productMeta(product);
    const img = product.image && !product.image.startsWith("/src/") ? product.image : defaultImage;
    return base(meta, path, {
      image: abs(img),
      ogType: "product",
      jsonLd: [
        productSchema(product),
        breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Catálogo", path: "/catalogo" },
          { name: product.name, path },
        ]),
      ],
    });
  }

  const meta = routeMeta[path];
  if (!meta) return base(notFoundMeta, "/", { robots: "noindex,follow" });

  let jsonLd = [];
  if (path === "/") jsonLd = compact([businessSchema(), websiteSchema(), generalFaqSchema()]);
  else if (path === "/catalogo")
    jsonLd = [
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Catálogo", path: "/catalogo" },
      ]),
      itemListSchema(),
    ];
  else if (path === "/mat-defence") {
    jsonLd = compact([
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Mat Defence", path: "/mat-defence" },
      ]),
      matDefenceFaqSchema(),
    ]);
  } else if (path === "/amenities")
    jsonLd = [
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Amenities", path: "/amenities" },
      ]),
    ];
  return base(meta, path, { jsonLd });
}
