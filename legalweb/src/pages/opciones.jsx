import React from "react";

const Opciones = () => {
  const handleOptionClick = (option) => {
    alert(`Has seleccionado la opción: ${option}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Opciones Disponibles</h1>
      <div>
        <button
          onClick={() => handleOptionClick("Opción 1")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          Opción 1
        </button>
        <button
          onClick={() => handleOptionClick("Opción 2")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          Opción 2
        </button>
        <button
          onClick={() => handleOptionClick("Opción 3")}
          style={{ margin: "10px", padding: "10px 20px" }}
        >
          Opción 3
        </button>
      </div>
    </div>
  );
};

export default Opciones;
