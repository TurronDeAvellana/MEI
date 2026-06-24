import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Essence from "../components/Essence.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Ingredients from "../components/Ingredients.jsx";
import Amenities from "../components/Amenities.jsx";
import MatDefence from "../components/MatDefence.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Essence />
      <ProductGrid />
      <Ingredients />
      <Amenities />
      <MatDefence />
      <Footer />
    </>
  );
}

export default Home;
