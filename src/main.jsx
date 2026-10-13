import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Pages are prerendered at build time (scripts/prerender.mjs), which marks #root
// with data-prerendered="<pathname>". Hydrate only when that markup belongs to the
// current URL; otherwise (dev server, or an unknown path served by the SPA fallback
// with the home page's HTML) discard it and render from scratch.
const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
const prerendered = container.dataset.prerendered;

if (prerendered && normalize(prerendered) === normalize(window.location.pathname)) {
  ReactDOM.hydrateRoot(container, app);
} else {
  container.textContent = "";
  ReactDOM.createRoot(container).render(app);
}
