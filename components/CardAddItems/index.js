import Image from "next/image";
import React from "react";
import styles from "./Add_Items.module.scss";

const AddItems = () => {
  return (
    <>
      <div className="row mb-2 ms-1">
        <div className="col-1 m-0 p-0">
          <Image width={18.76} height={16.5} src="/assets/e_1.png" alt="" />
        </div>
        <div className="col-lg-10 m-0 p-0">
          <h3 className={styles.title}>
            Add items worth <b className="ms-1"> ₹ 298</b> to get free delivery
          </h3>
        </div>
      </div>
      <div className="row ms-1">
        <div className="col-1 m-0 p-0">
          <Image width={18.76} height={16.5} src="/assets/e_2.png" alt="" />
        </div>
        <div className="col-lg-10 m-0 p-0">
          <h3 className={styles.title}>
            Get it delivered <b className="ms-1">by 13th Nov</b>
          </h3>
        </div>
      </div>
    </>
  );
};

export default AddItems;
