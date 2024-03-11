import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import ColorForm from "./components/ColorForm";
import ColorGrid from "./components/ColorGrid";

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const savedColors = JSON.parse(localStorage.getItem("colors")) || [];
    setColors(savedColors);
  }, []);

  const addColor = (color) => {
    const updatedColors = [...colors, color];
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors));
  };

  const deleteColor = (colorToDelete) => {
    const updatedColors = colors.filter((color) => color !== colorToDelete);
    setColors(updatedColors);
    localStorage.setItem("colors", JSON.stringify(updatedColors));
  };

  return (
    <section className="container-fluid bg-dark-subtle">
      <div className="bg-dark text-bg-dark text-center p-3 mb-2">
        <h1>Color Palette</h1>
      </div>
      <div className="container d-flex justify-content-center card card-body shadow">
        <div className="my-2">
          <span>Administrar colores</span>
        </div>
        <ColorForm addColor={addColor} />
        <hr />
        {colors.length > 0 ? (
          <ColorGrid colors={colors} deleteColor={deleteColor} />
        ) : (
          <p>No hay colores guardados.</p>
        )}
      </div>
    </section>
  );
};

export default App;
