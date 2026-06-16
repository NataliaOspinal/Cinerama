import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import CarteleraPage from "./pages/CarteleraPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<Inicio />} />
        <Route path="/cartelera" element={<CarteleraPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;