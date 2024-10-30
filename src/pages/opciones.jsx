import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OpcionesConImagen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const opciones = [
    {
      nombre: "Mercantil",
      img: require("../IMG/Mercantil.png"),
      ruta: "/AsesoriaMercantil",
    },
    {
      nombre: "Civil",
      img: require("../IMG/Civil.png"),
      ruta: "/AsesoriaCivil",
    },
    {
      nombre: "Penal",
      img: require("../IMG/Penal.png"),
      ruta: "/AsesoriaPenal",
    },
    {
      nombre: "Laboral",
      img: require("../IMG/Laboral.png"),
      ruta: "/AsesoriaLaboral",
    },
    {
      nombre: "Amparo",
      img: require("../IMG/Amparo.png"),
      ruta: "/AsesoriaAmparo",
    },
    {
      nombre: "otros",
      img: require("../IMG/Otros.png"),
      ruta: "/AsesoriaOtros",
    },
  ];

  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

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
    height: isMobile ? "120px" : "200px",
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

  const handleOptionClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontFamily: "" }}>Opciones de asesoría</h1>
      <div style={gridContainerStyle}>
        {opciones.map((opcion, index) => (
          <div
            key={index}
            style={gridItemStyle}
            onClick={() => handleOptionClick(opcion.ruta)}
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
