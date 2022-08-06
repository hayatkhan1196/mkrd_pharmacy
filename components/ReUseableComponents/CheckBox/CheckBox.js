import React from "react";

const CheckBox = ({ key, val }) => {
  return (
    <div key={key} className="check-box-filter flex-between-center">
      <div className="form-check flex-center-center">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {val.name}
        </label>
      </div>
      <h3>{val.val}</h3>
    </div>
  );
};

export default CheckBox;
