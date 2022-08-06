import Image from "next/image";
import React, { useState } from "react";
import styles from "./Apply.module.scss";
import ModalCoupen from "components/Modals/CopenModal/CoupenModal";

const ApplyCopen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className={`${styles.apply_for_copen}  d-flex align-items-center justify-content-between`}
    >
      <ModalCoupen handleClose={handleClose} show={show} />
      <div className="d-flex align-items-center p-2" onClick={handleShow}>
        <Image src="/assets/_icons.png" alt="image" width={24} height={24} />
        <h4 className={`${styles.apply_heading} ps-2 mt-2 `}>Apply Coupon</h4>
      </div>
      <div className="arrow_click me-4">
        <Image
          src="/assets/right_arrow.png"
          alt="image"
          width={7.41}
          height={12}
        />
      </div>
    </div>
  );
};

export default ApplyCopen;
