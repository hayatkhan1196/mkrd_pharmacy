import React from "react";
import styles from "./PaymentMethodCash.module.scss";
import useLocalize from "i18n/i18n";

function PaymentMethodCash() {
    const { localize } = useLocalize();

  return (
    <div className={`${styles.SecondCard} row`}>
      <div className="col-lg-1">
        <div className="form-check">
          <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        </div>
      </div>
      <div className="col-lg-9">
        <h2> {localize("Cash-on-Delivery")} (COD)</h2>
      </div>
    </div>
  );
}

export default PaymentMethodCash;
