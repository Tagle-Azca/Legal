import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Opciones from "./pages/opciones.jsx";
import NOTFOUND from "./pages/404";
import AsesoriaMercantil from "./pages/Mercantil.jsx";
import AsesoriaCivil from "./pages/Civil.jsx";
import AsesoriaPenal from "./pages/Penal.jsx";
import AsesoriaLaboral from "./pages/Laboral.jsx";
import AsesoriaOtros from "./pages/Otros.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Inicio" element={<LandingPage />} />
        <Route path="/Opciones" element={<Opciones />} />
        <Route path="/AsesoriaMercantil" element={<AsesoriaMercantil />} />
        <Route path="/AsesoriaCivil" element={<AsesoriaCivil />} />
        <Route path="/AsesoriaPenal" element={<AsesoriaPenal />} />
        <Route path="/AsesoriaLaboral" element={<AsesoriaLaboral />} />
        <Route path="/AsesoriaOtros" element={<AsesoriaOtros />} />
        <Route path="*" element={<NOTFOUND />} />
      </Routes>
    </Router>
  );
};

export default App;
