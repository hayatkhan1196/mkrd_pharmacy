import React from "react";
import styles from "./SavedAddress.module.scss";

const SavedAddress = ({ title, className, index }) => {
  return (
    <div className={`${className} ${index === 1 && styles.box_active}`}>
      <div className="row d-flex align-items-center justify-content-space-between">
        <div className={`${styles.text_section} col-lg-6`}>
          <h4>{title}</h4>
          <p>
            Jasdeep Singh Saini <br /> 1208, Phoenix, Vijay Cross Road,
            <br /> Navrangpura, Ahmedabad
            <br /> 8209327572
          </p>
        </div>
        <div className={`${styles.check_address} col-lg-6`}>
          <div className="form-check">
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
