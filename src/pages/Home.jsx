import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Essence from "../components/Essence.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import Ingredients from "../components/Ingredients.jsx";
import Amenities from "../components/Amenities.jsx";
import MatDefence from "../components/MatDefence.jsx";
import Faq from "../components/Faq.jsx";
import { faqs } from "../data/faq.js";
import { site } from "../data/site.js";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { useReveal } from "../hooks/useReveal.js";

function Home() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <Essence />
      <ProductGrid />
      <Ingredients />
      <Amenities />
      <MatDefence />
      <Faq id="faq" eyebrow={site.faq.eyebrow} title={site.faq.title} items={faqs.general} />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
