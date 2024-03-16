import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import ColorForm from "./components/ColorForm";
import ColorGrid from "./components/ColorGrid";
import { getColors, addColor, deleteColor } from "./helpers/queries";

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getColors();
      setColors(data);
    };
    fetchData();
  }, []);

  const updateColors = async () => {
    const data = await getColors();
    setColors(data);
  };

  const addColorHandler = async (color) => {
    await addColor(color);
    updateColors();
  };

  const deleteColorHandler = async (id) => {
    await deleteColor(id);
    updateColors();
  };

  return (
    <section className="container-fluid bg-dark-subtle">
      <div className="bg-dark text-bg-dark text-center p-3 mb-2">
        <h1>Paleta de Colores</h1>
      </div>
      <div className="container d-flex justify-content-center card card-body shadow">
        <div className="my-2">
          <span className="display-6">Ingrese un color:</span>
        </div>
        <ColorForm addColor={addColorHandler} />
        <hr />
        {colors.length > 0 ? (
          <ColorGrid colors={colors} deleteColor={deleteColorHandler} />
        ) : (
          <p>No hay colores guardados.</p>
        )}
      </div>
    </section>
  );
};

export default App;
