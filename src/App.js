import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Opciones from "./pages/opciones.jsx";
import NOTFOUND from "./pages/404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Inicio" element={<LandingPage />} />
        <Route path="/Opciones" element={<Opciones />} />
        <Route path="*" element={<NOTFOUND />} />
      </Routes>
    </Router>
  );
};

export default App;
