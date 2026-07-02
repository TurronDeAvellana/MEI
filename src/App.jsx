import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import ProductoDetalle from "./pages/ProductoDetalle.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/producto/:slug" element={<ProductoDetalle />} />
    </Routes>
  );
}

export default App;
