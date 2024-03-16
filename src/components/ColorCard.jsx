const ColorCard = ({ color, deleteColor }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{ backgroundColor: color.color, height: "100px" }}></div> {}
        <p className="card-text text-uppercase text-center fw-bold">
          {color.color}
        </p>{" "}
        {}
        <button
          onClick={() => deleteColor(color.id)}
          className="btn btn-danger"
        >
          {" "}
          {}
          Borrar
        </button>
      </div>
    </div>
  );
};

export default ColorCard;
