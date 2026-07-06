import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import MatDefencePage from "./pages/MatDefencePage.jsx";
import Links from "./pages/Links.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:slug" element={<ProductoDetalle />} />
        <Route path="/mat-defence" element={<MatDefencePage />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  );
}

export default App;
