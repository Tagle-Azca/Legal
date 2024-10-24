import { height } from "@mui/system";
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
    { nombre: "Opción 1", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 2", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 3", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 4", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 5", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 6", img: "https://via.placeholder.com/100" },
  ];

  // Estilos generales
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const gridContainerStyle = {
    display: "grid",
    gap: isMobile ? "20px " : "2rem",
    justifyContent: "center",
    alignItems: "center",
    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
    maxWidth: isMobile ? "100%" : "100vh",
    margin: "0 auto",
  };

  const gridItemStyle = {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: "120px",
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
      <h1>Opciones de asesoría</h1>
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
