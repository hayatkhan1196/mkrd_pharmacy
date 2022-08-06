import Image from "next/image";
import React from "react";
import styles from "./CartAlternativeCard.module.scss";

const CartAlternativeCard = ({ item }) => {
  const { product } = item[0];
  return (
    <>
      <div className={`row ${styles.med_Card} pt-3 box-shadow-bg  mb-3`}>
        <div className="col-md-4">
          <a href={`/medicine/${product.id}`}>
            <Image
              src="/assets/medicane.svg"
              width={120}
              height={85}
              alt={product?.name}
            />
          </a>
        </div>
        <div className={`col-md-8 ${styles.generic_alternative_details}`}>
          <a href={`/medicine/${product.id}`}>
            <h5 className={styles.med_h5}>
              {product?.name_web}5D INJ 1000ML 10X7
            </h5>
          </a>
          <p className={styles.med_p}>
            By {product?.manufacturer_name}NIRLIFE Derrei
          </p>
          <h6 className={styles.med_h6}>₹35</h6>
        </div>
        <div className={`${styles.buttom_message_container}`}>
          <span className={`${styles.buttom_message}`}>
            Save ₹3000 with Generics (18% Cheaper)
          </span>
        </div>
      </div>
    </>
  );
};

export default CartAlternativeCard;
