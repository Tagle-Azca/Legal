import React from "react";

const OpcionesConImagen = () => {
  const handleOptionClick = (option) => {
    alert(`Has seleccionado la opción: ${option}`);
  };

  // Array con las opciones y las rutas de las imágenes
  const opciones = [
    { nombre: "Opción 1", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 2", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 3", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 4", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 5", img: "https://via.placeholder.com/100" },
    { nombre: "Opción 6", img: "https://via.placeholder.com/100" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Opciones de asesoria</h1>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {opciones.map((opcion, index) => (
          <div
            key={index}
            onClick={() => handleOptionClick(opcion.nombre)}
            style={{
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
              width: "120px",
            }}
          >
            <img
              src={opcion.img}
              alt={opcion.nombre}
              style={{ width: "100px", height: "100px", marginBottom: "5px" }}
            />
            <p>{opcion.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpcionesConImagen;
