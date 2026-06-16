import "../css/CarteleraBanner.css";

function CarteleraBanner() {
  return (
    /* Semántica: Uso de <header> en lugar de <div> y vinculación ARIA */
    <header className="cbanner" aria-labelledby="cbanner-titulo">
      {/* Visual: Ocultamos el elemento puramente visual/decorativo */}
      <div className="cbanner__bg" aria-hidden="true" />
      <div className="cbanner__content">
        <h1 id="cbanner-titulo" className="cbanner__titulo">Cartelera</h1>
        <p className="cbanner__subtitulo">Encuentra tu película perfecta</p>
      </div>
    </header>
  );
}

export default CarteleraBanner;