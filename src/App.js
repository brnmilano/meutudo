import React from "react";
import AuthProvider from "./Contexts/AuthProvider";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Conta from "./Pages/Conta";
import Contratos from "./Pages/Contratos";
import Duvidas from "./Pages/Duvidas";
import Home from "./Pages/Home";
import Espera from "./Pages/Espera";
import BemVindo from "./Pages/BemVindo";
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
          <Route path="/valores" element={<Valores />} />
          <Route path="/periodo" element={<Periodo />} />
          <Route path="/opcoes" element={<Opcoes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
