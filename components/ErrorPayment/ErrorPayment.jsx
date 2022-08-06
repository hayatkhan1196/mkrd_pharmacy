import Image from "next/image";
import React from "react";
import styles from "./ErrorPayment.module.scss";
const ErrorPayment = ( props ) => {
    const {seterror} = props
  return (
    <div
      className={`${styles.Payment_Error} row d-flex-justify-content-between`}
    >
      <div className="col-lg-10  pt-1 pb-1 p-0">
        <div className="row d-flex-justify-content-between align-items-center">
          <div className={`col-lg-1 ms-4 ${styles.radio_size}`}>
              <Image width={36.67} height={36.67} src="/assets/error-icon.png" alt="" />
          </div>
          <div className="col-lg-9 p-0 ms-2">
            <h1>{props.title}</h1>
            {props?.subtitle && <h3>{props?.subtitle}</h3>}
          </div>
        </div>
      </div>
      {props?.img && (
        <div className="col-lg-2  pt-1 pb-1 p-0 text-end p-2 ">
          <Image onClick={() => seterror(false)} className="cursor-pointer" width={12.97} height={12.96}  src={props.img} alt="" />
        </div>
      )}
    </div>
  );
};

export default ErrorPayment;
