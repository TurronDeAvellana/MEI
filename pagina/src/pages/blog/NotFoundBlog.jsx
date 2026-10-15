import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import "./Blog.css";

function NotFoundBlog() {
  return (
    <>
      <Navbar />
      <main className="blog">
        <header className="blog__header">
          <span className="eyebrow">Blog MEI</span>
          <h1 className="blog__title">No encontramos esta entrada</h1>
          <p className="blog__lede">
            Puede que se haya movido. Mira todas las <Link to="/blog/competencias">competencias</Link>.
          </p>
        </header>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundBlog;
