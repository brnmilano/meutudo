import React from "react";
import AuthProvider from "./Contexts/AuthProvider";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Conta from "./Pages/Conta";
import Contratos from "./Pages/Contratos";
import Duvidas from "./Pages/Duvidas";
import Home from "./Pages/Home";
import Espera from "./Pages/Espera";
import BemVindo from "./Pages/BemVindo";

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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
