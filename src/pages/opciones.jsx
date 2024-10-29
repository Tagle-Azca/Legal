import React, { useEffect, useState } from "react";

const OpcionesConImagen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es un dispositivo móvil
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleOptionClick = (option) => {
    alert(`Has seleccionado la opción: ${option}`);
  };

  const opciones = [
    { nombre: "Mercantil", img: require("../IMG/Mercantil.png") },
    { nombre: "Civil", img: require("../IMG/Civil.png") },
    { nombre: "Penal", img: require("../IMG/Penal.png") },
    { nombre: "Laboral", img: require("../IMG/Laboral.png") },
    { nombre: "Amparo", img: require("../IMG/Amparo.png") },
    { nombre: "otros", img: require("../IMG/Otros.png") },
  ];

  // Estilos generales
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  // Estilos de la cuadrícula, ajustados para un 80% en computadora
  const gridContainerStyle = {
    display: "grid",
    marginTop: isMobile ? "20px" : "5rem",
    gap: isMobile ? "20px" : "2rem",
    justifyContent: "center",
    alignItems: "center",
    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
    width: isMobile ? "100%" : "80%",
    margin: "0 auto",
  };

  const gridItemStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: isMobile ? "120px" : "200px", // Altura más alta en computadoras
    cursor: "pointer",
    border: "1px solid #ccc",
    borderRadius: "8px",

    transition: "transform 0.3s",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    bottom: "-100%",
    left: "0",
    right: "0",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "bottom 0.3s ease-in-out",
    zIndex: 1,
  };

  const textStyle = {
    position: "relative",
    zIndex: 2,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "-30px",
  };

  // Estilo de hover para computadoras
  const handleMouseEnter = (e) => {
    if (!isMobile) {
      const overlay = e.currentTarget.querySelector(".hover-overlay");
      overlay.style.bottom = "0";
    }
  };

  const handleMouseLeave = (e) => {
    if (!isMobile) {
      const overlay = e.currentTarget.querySelector(".hover-overlay");
      overlay.style.bottom = "-100%";
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontFamily: "" }}>Opciones de asesoría</h1>
      <div style={gridContainerStyle}>
        {opciones.map((opcion, index) => (
          <div
            key={index}
            style={gridItemStyle}
            onClick={() => handleOptionClick(opcion.nombre)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hover-overlay" style={overlayStyle}></div>
            <img src={opcion.img} alt={opcion.nombre} style={imgStyle} />
            <p style={textStyle}>{opcion.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpcionesConImagen;
