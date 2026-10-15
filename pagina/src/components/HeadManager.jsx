import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getHead } from "../seo/getHead.js";

// Attribute shared with scripts/prerender.mjs so tags emitted at build time are
// replaced (not duplicated) on client-side navigation.
export const HEAD_ATTR = "data-head";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (content == null || content === "") {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(HEAD_ATTR, "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    el.setAttribute(HEAD_ATTR, "");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applyHead(head) {
  if (!head) return;
  if (head.title) document.title = head.title;
  upsertMeta("name", "description", head.description);
  upsertMeta("name", "robots", head.robots);
  upsertCanonical(head.canonical);

  upsertMeta("property", "og:title", head.title);
  upsertMeta("property", "og:description", head.description);
  upsertMeta("property", "og:url", head.canonical);
  upsertMeta("property", "og:image", head.image);
  upsertMeta("property", "og:type", head.ogType || "website");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", head.title);
  upsertMeta("name", "twitter:description", head.description);
  upsertMeta("name", "twitter:image", head.image);

  document.head
    .querySelectorAll(`script[type="application/ld+json"][${HEAD_ATTR}]`)
    .forEach((s) => s.remove());
  for (const obj of head.jsonLd || []) {
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.setAttribute(HEAD_ATTR, "");
    s.textContent = JSON.stringify(obj);
    document.head.appendChild(s);
  }
}

export default function HeadManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    applyHead(getHead(pathname));
  }, [pathname]);
  return null;
}
