import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "react-feather";
import { useSelector } from "react-redux";
import styles from "./SidebarCartAction.module.scss";

export default function SidebarCartAction() {
  const cartDetails = useSelector((state) => state.cart.cartDetails);
  const numberOfCartItems = cartDetails?.items?.length;
  return (
    <>
      <div className="card p-3">
        <div className="d-flex justify-content-between">
          <span className={`${styles.cart_item_text}`}>
            {numberOfCartItems} Items <br />
            <span className={`${styles.cart_item_subtext} mt-1`}>
              in your Cart
            </span>
          </span>
          <div className={`${styles.medicine_container} `}>
            <Image
              width={100}
              height={100}
              src={"/assets/product-details/Medicine.png"}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        <div className="mt-4">
          <Link href="/cart">
            <button
              className={`${styles.view_cart_btn} d-flex justify-content-between align-items-center`}
            >
              <span>View Cart</span> <ChevronRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
