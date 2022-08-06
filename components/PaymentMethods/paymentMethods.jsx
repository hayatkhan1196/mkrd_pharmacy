import React from "react";
import styles from "./paymentMethods.module.scss";
import Image from "next/image";

function PaymentMethods(props) {
  const { selected, setselected ,value} = props;
  console.log("🚀 ~ file: paymentMethods.jsx ~ line 7 ~ PaymentMethods ~ value", value,selected)
  
  return (
    <>
      <div
        onClick={() => setselected(props.active)}
        style={{ backgroundColor: selected === props.active && "#EBFEF2" }}
        className={`${styles.Payment_card} mt-0 row d-flex-justify-content-center align-items-center`}
      >
        <div className="col-lg-10  pt-2 pb-2 p-0">
          <div className="row">
            <div className={`col-lg-1 ${styles.radio_size}`}>
              <div className="form_check">
                <input
                  type="radio"
                  // name={selected}
                  id={selected}
                  value={selected}
                  checked={selected === props.active}
                />
              </div>
            </div>
            <div className="col-lg-9 p-0 ms-2">
              <h1 className={props.active === "cash" ? "mb-0" : ""}>
                {props.title}
              </h1>
              {props?.subtitle && <h3>{props?.subtitle}</h3>}
            </div>
          </div>
        </div>
        {props?.img && (
          <div className="col-lg-2  pt-2 pb-2 p-0">
            <Image src={props?.img} alt="Logo" width={110} height={32} />
          </div>
        )}
      </div>
    </>
  );
}

export default PaymentMethods;
