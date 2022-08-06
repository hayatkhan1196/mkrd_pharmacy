import React from "react";
// import { Input } from "reactstrap";
import styles from "./Select.module.scss";

const SelectCopen = () => {
  return (
    <div className={`${styles.select_copen} mt-3 ps-3`}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-2 d-flex p-0">
          <div className="form-check">
            <input
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
        </div>
        <div className="col-md-10 p-0 m-0 ">
          <h3 className={`${styles.offer_code} p-0 m-0`}>
            Get 50% OFF up to ₹100 on order value <br /> ₹100 or above{" "}
          </h3>
          <h5 className={`${styles.code} p-0 m-0`}>Code: MEDKARTFIRST</h5>
        </div>
      </div>
    </div>
  );
};

export default SelectCopen;
