import React from "react";
import ColorCard from "./ColorCard";

const ColorGrid = ({ colors, deleteColor }) => {
  return (
    <div className="row">
      {colors.map((color, index) => (
        <div key={index} className="col-md-4 mb-3">
          <ColorCard color={color} deleteColor={deleteColor} />
        </div>
      ))}
    </div>
  );
};

export default ColorGrid;
