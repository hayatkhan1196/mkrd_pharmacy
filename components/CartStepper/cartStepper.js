import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import "./cartStepper.scss";

import styles from "./cartStepper.module.scss";

function CartStepper() {
  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.stepper}>
          <div className={styles.progres}></div>
          <div className={`${styles.screen} ${styles.completed} `}>1</div>
          <div className={styles.screen}>2</div>
          <div className={styles.screen}>3</div>
          <div className={styles.screen}>4</div>
        </div>
      </div> 
    </div>
  );
}

export default CartStepper;
