import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider";

import BemVindo from "./Pages/BemVindo";
import Conta from "./Pages/Conta";
import Contratos from "./Pages/Contratos";
import Duvidas from "./Pages/Duvidas";
import Espera from "./Pages/Espera";
import Home from "./Pages/Home";
import Oportunidades from "./Pages/Oportunidades";
import Valores from "./Pages/Oportunidades/Valores";
import Periodo from "./Pages/Oportunidades/Valores/Periodo";
import Opcoes from "./Pages/Oportunidades/Valores/Periodo/Opcoes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<BemVindo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contratos" element={<Contratos />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/espera" element={<Espera />} />
          <Route path="/oportunidades" element={<Oportunidades />} />
          <Route path="/oportunidades/valores" element={<Valores />} />
          <Route path="/oportunidades/valores/periodo" element={<Periodo />} />
          <Route path="/oportunidades/valores/periodo/opcoes" element={<Opcoes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
