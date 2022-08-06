import Image from "next/image";
import React from "react";

import styles from "./similarItemCard.module.scss";

export default function SimilarItemCard(props) {
  return (
    <>
      <div className={`pb-3`}>
        <div className="d-flex justify-content-center">
          <div className={`${styles.slider_img}`}>
            {props.image && (
              <Image
                width="100%"
                height="100%"
                src={props?.image}
                alt={props.image?.name}
                layout="responsive"
                objectFit="contain"
              />
            )}
          </div>
        </div>
        <div className={`mt-4 =`}>
          <div
            className={`${styles.item_name} font-weight-bold fs_20 ${styles.title_box_height}`}
          >
            {props.name}
          </div>
          <div className={`${styles.manufacturer_name} fw_400 fs_16`}>
            {props.manufacturer}
          </div>
          <div className={`${styles.sales_price} font-weight-bold mb-1`}>
            ₹ {props.salePrice}
            <span
              className={`${styles.cost_per_tablet} font-weight-bold fs_16`}
            >
              {" "}
              <del>{props.mrp}</del>
            </span>
            <span className={`${styles.discount_text} font-weight-bold fs_16`}>
              {" "}
              {props.discount}
            </span>
          </div>
        </div>
        <button className={`${styles.alternat_addbtn} w-100`}>Add +</button>
      </div>
    </>
  );
}
