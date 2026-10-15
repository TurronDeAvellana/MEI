import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getAllRoutes } from "../src/seo/routes.js";
import { getHead } from "../src/seo/getHead.js";
import { products } from "../src/data/products.js";
import { siteUrl, defaultImage } from "../src/data/seo.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lastmod = new Date().toISOString().slice(0, 10);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const abs = (p) => (/^https?:\/\//.test(p) ? p : siteUrl + p);

const urls = getAllRoutes()
  .map((route) => ({ route, head: getHead(route) }))
  .filter(({ head }) => !head.robots.startsWith("noindex"))
  .map(({ route, head }) => {
    const slug = route.startsWith("/producto/") ? route.split("/")[2] : null;
    const p = slug && products.find((x) => x.slug === slug);
    const imgs = p ? [p.image, p.image2].filter((i) => i && !i.startsWith("/src/")) : [];
    if (p && !imgs.length) imgs.push(defaultImage);
    const imageXml = imgs
      .map(
        (i) =>
          `    <image:image><image:loc>${esc(abs(i))}</image:loc><image:title>${esc(p.name)}</image:title></image:image>`
      )
      .join("\n");
    return `  <url>\n    <loc>${esc(head.canonical)}</loc>\n    <lastmod>${lastmod}</lastmod>${imageXml ? "\n" + imageXml : ""}\n  </url>`;
  });

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>
`;
const out = resolve(root, "dist");
mkdirSync(out, { recursive: true });
writeFileSync(resolve(out, "sitemap.xml"), xml);
console.log(`sitemap.xml: ${urls.length} URLs`);
