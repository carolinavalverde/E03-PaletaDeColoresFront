import React from "react";

const ColorCard = ({ color, deleteColor }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{ backgroundColor: color, height: "100px" }}></div>
        <p className="card-text text-uppercase text-center fw-bold">{color}</p>
        <button onClick={() => deleteColor(color)} className="btn btn-danger">
          Borrar
        </button>
      </div>
    </div>
  );
};

export default ColorCard;
