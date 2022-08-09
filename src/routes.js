import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Conta from "./Pages/Conta";
import Contratos from "./Pages/Contratos";
import Home from "./Pages/Home";
import Duvidas from "./Pages/Duvidas";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
