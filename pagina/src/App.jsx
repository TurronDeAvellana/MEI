import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HeadManager from "./components/HeadManager.jsx";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";
import MatDefencePage from "./pages/MatDefencePage.jsx";
import AmenitiesPage from "./pages/AmenitiesPage.jsx";
import Links from "./pages/Links.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import CompetenciasPage from "./pages/blog/CompetenciasPage.jsx";
import CompetenciaPage from "./pages/blog/CompetenciaPage.jsx";
function App() {
  return (
    <>
      <ScrollToTop />
      <HeadManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:slug" element={<ProductoDetalle />} />
        <Route path="/mat-defence" element={<MatDefencePage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/links" element={<Links />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/competencias" element={<CompetenciasPage />} />
        <Route path="/blog/competencias/:evento" element={<CompetenciaPage />} />      </Routes>
    </>
  );
}

export default App;
