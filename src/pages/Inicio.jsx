import NavBar from "../components/NavBar";
import InicioBanner from "../components/InicioBanner";
import Cartelera from "../components/Cartelera";
import Estrenos from "../components/Estrenos";
import Footer from "../components/Footer";

function Inicio() {
  return (
    <>
      <NavBar />
      <main>
        <InicioBanner
          titulo="Barbie"
          descripcion="Únete a Barbie y Ken en una aventura épica llena de color, diversión y autodescubrimiento."
        />
        <Cartelera />
        <Estrenos />
      </main>
      <Footer />
    </>
  );
}

export default Inicio;