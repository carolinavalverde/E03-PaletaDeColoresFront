import React, { useState } from "react";

const ColorForm = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
    setColor("");
    localStorage.setItem("colorTest", color);
  };

  return (
    <form
      className="container bg-success-subtle my-2 p-3"
      onSubmit={handleSubmit}
    >
      <div className="container d-flex">
        <div
          className="container card col-lg-3 col-md-3 col-sm-1 mx-0 my-4"
          style={{
            backgroundColor: `${color}`,
            height: "200px",
            width: "200px",
          }}
        ></div>
        <label className="container col-lg-7 col-md-7 col-sm-5 ms-3">
          <input
            className="rounded p-2 my-4 form-control"
            type="text"
            value={color}
            onChange={handleColorChange}
            placeholder="Ingrese un color en inglés o hexa"
          />
        </label>
      </div>
      <div className="container d-flex justify-content-end">
        <button className="btn btn-success p-3 my-2" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ColorForm;
