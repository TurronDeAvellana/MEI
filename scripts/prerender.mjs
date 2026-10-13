// Build-time prerender: renders every route from getAllRoutes() with the SSR
// bundle (dist-ssr/entry-server.js) and writes static HTML with per-route head tags.
//
//   "/"               -> dist/index.html
//   "/catalogo"       -> dist/catalogo.html
//   "/producto/hera"  -> dist/producto/hera.html
//
// Apache (public/.htaccess) maps /foo -> /foo.html, so URLs stay slash-free.
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

// Must match HEAD_ATTR in src/components/HeadManager.jsx.
const HEAD_ATTR = "data-head";

const escapeAttr = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeText = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const jsonLdString = (obj) =>
  JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

function headTags(head) {
  const tags = [];
  const meta = (attr, key, content) => {
    if (content == null || content === "") return;
    tags.push(`<meta ${attr}="${key}" content="${escapeAttr(content)}" ${HEAD_ATTR} />`);
  };
  tags.push(`<title>${escapeText(head.title)}</title>`);
  meta("name", "description", head.description);
  meta("name", "robots", head.robots);
  if (head.canonical) {
    tags.push(`<link rel="canonical" href="${escapeAttr(head.canonical)}" ${HEAD_ATTR} />`);
  }
  meta("property", "og:site_name", "MEI");
  meta("property", "og:locale", "es_CO");
  meta("property", "og:type", head.ogType || "website");
  meta("property", "og:title", head.title);
  meta("property", "og:description", head.description);
  meta("property", "og:url", head.canonical);
  meta("property", "og:image", head.image);
  meta("name", "twitter:card", "summary_large_image");
  meta("name", "twitter:title", head.title);
  meta("name", "twitter:description", head.description);
  meta("name", "twitter:image", head.image);
  for (const obj of head.jsonLd || []) {
    tags.push(`<script type="application/ld+json" ${HEAD_ATTR}>${jsonLdString(obj)}</script>`);
  }
  return tags.map((t) => `    ${t}`).join("\n");
}

function outFile(pathname) {
  const clean = pathname.replace(/\/+$/, "");
  if (clean === "") return join(distDir, "index.html");
  return join(distDir, `${clean.replace(/^\/+/, "")}.html`);
}

async function main() {
  process.env.NODE_ENV ??= "production";
  const entry = pathToFileURL(join(ssrDir, "entry-server.js")).href;
  const { render, getAllRoutes, getHead } = await import(entry);

  // Strip the template's static <title> and default description: per-route tags replace them.
  const template = (await readFile(join(distDir, "index.html"), "utf8"))
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/?>/i, "");

  if (!template.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html: <div id="root"></div> not found');
  }

  const routes = getAllRoutes();
  for (const pathname of routes) {
    const appHtml = render(pathname);
    const head = getHead(pathname);
    if (!head || !head.title) throw new Error(`getHead("${pathname}") returned no title`);

    const html = template
      .replace("</head>", `${headTags(head)}\n  </head>`)
      .replace(
        '<div id="root"></div>',
        () => `<div id="root" data-prerendered="${escapeAttr(pathname)}">${appHtml}</div>`
      );

    const file = outFile(pathname);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html, "utf8");
    console.log(`prerendered ${pathname.padEnd(28)} -> ${file.slice(root.length + 1)}`);
  }

  await rm(ssrDir, { recursive: true, force: true });
  console.log(`prerender: ${routes.length} routes`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
