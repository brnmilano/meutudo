import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import Conta from "./Pages/Conta";
import Contratos from "./Pages/Contratos";
import Duvidas from "./Pages/Duvidas";
import Home from "./Pages/Home";
import Espera from "./Pages/Espera"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/espera" element={<Espera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
