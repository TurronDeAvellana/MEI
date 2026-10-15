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
  sportsEventSchema,
} from "./schema.js";
import { findCompetencia, hasContent } from "../data/blog.js";

const compact = (arr) => arr.filter(Boolean);

const blogCrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Blog", path: "/blog" },
];

function clip(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:\s]+$/, "") + "…";
}

function blogHead(eventSlug, path, base) {
  const c = findCompetencia(eventSlug);
  if (!c) return base(notFoundMeta, "/", { robots: "noindex,follow" });

  const description = clip(
    c.resumen ||
      `${c.nombre}: torneo patrocinado por MEI. El organizador y los atletas cuentan cómo se vivió el torneo y qué les parecieron los kits MEI.`,
    160
  );
  return base({ title: clip(`${c.nombre}: historias de atletas | Blog MEI`, 60), description }, path, {
    image: abs(c.imagen || defaultImage),
    robots: hasContent(c) ? "index,follow" : "noindex,follow",
    jsonLd: compact([
      sportsEventSchema(c),
      breadcrumbSchema([
        ...blogCrumbs,
        { name: "Competencias", path: "/blog/competencias" },
        { name: c.nombre, path },
      ]),
    ]),
  });
}

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

  const blogMatch = path.match(/^\/blog\/competencias\/([^/]+)$/);
  if (blogMatch) return blogHead(blogMatch[1], path, base);

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
  } else if (path === "/blog") jsonLd = [breadcrumbSchema(blogCrumbs)];
  else if (path === "/blog/competencias")
    jsonLd = [breadcrumbSchema([...blogCrumbs, { name: "Competencias", path }])];
  else if (path === "/amenities")
    jsonLd = [
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Amenities", path: "/amenities" },
      ]),
    ];
  return base(meta, path, { jsonLd });
}
