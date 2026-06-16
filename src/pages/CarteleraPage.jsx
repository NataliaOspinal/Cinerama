import NavBar from "../components/NavBar";
import CarteleraBanner from "../components/CarteleraBanner";
import CarteleraPeliculas from "../components/CarteleraPeliculas.jsx";
import Footer from "../components/Footer";

function CarteleraPage() {
  return (
    <>
      <NavBar />
      <main>
        <CarteleraBanner />
        <CarteleraPeliculas />
      </main>
      <Footer />
    </>
  );
}

export default CarteleraPage;