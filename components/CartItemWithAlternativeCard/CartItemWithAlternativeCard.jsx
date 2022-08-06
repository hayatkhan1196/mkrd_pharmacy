import React from "react";
import Image from "next/image";
import CartCard from "components/CartCard/CartCard";
import CartAlternativeCard from "components/CartAlternativeCard/CartAlternativeCard";
//import CartGenericAlternativeCard from "components/CartGenericAlternativeCard/CartGenericAlternativeCard";

import styles from "./CartItemWithAlternativeCard.module.scss";

import { useSelector } from "react-redux";
export default function CartItemWithAlternativeCard({
  mainItem,
  alternativeItem,
}) {
  const cartDetails = useSelector((state) => state.cart.cartDetails);

  const handleSwapItem = (mainItem, alternativeItem, cartDetails) => {
    let cart_Item_Id = cartDetails?.id;
    let main_item_id = mainItem?.product?.id;
    let alternativeItem_item_id = alternativeItem?.product?.id;
  };

  // if (swaped)
  //   return <CartGenericAlternativeCard handleUndo={setSwaped} item={medData} />;
  return (
    <div className={`row ${styles.main_container}`}>
      <div className="col-md-6">
        <div className={`${styles.in_cart_message_container}`}>
          <Image src="/assets/cart-dark.svg" width={20} height={20} />
          <p className={`${styles.in_cart_message}`}>In Cart</p>
        </div>
        <CartCard item={mainItem} />
      </div>
      <div
        onClick={() => {
          handleSwapItem();
        }}
        className={`${styles.switchBtn}`}
      ></div>
      <div className="col-md-6">
        <div className={`${styles.generic_message_container}`}>
          <Image src="/assets/genericIcon.svg" width={20} height={20} />
          <p className={`${styles.generic_item_message}`}>
            Swap with Generic and save more
          </p>
        </div>
        <CartAlternativeCard item={alternativeItem} />
      </div>
    </div>
  );
}
