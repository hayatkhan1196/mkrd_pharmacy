import React from "react";
import { useSelector } from "react-redux";
import styles from "./CheckOut.module.scss";
import CircularProgress from '@mui/material/CircularProgress';
const CartCheckout = (props) => {
  const { onClick, isLoading } = props;
 
  const cartDetails = useSelector((state) => state.cart.cartDetails);

  return (
    <div className={styles.CheckOut}>
      <div className={`row `}>
        <div className={`col-lg-6`}>
          <h3 className={`${styles.checkout_headings} pb-2`}>Item Total</h3>
          <h3 className={`${styles.checkout_headings}`}>Delivery Charges</h3>
        </div>
        <div className={`col-lg-6 ${styles.content_container}`}>
          <h4 className={`${styles.price}`}>
            <span className={`${styles.subPricing} me-1 `}> ₹33 </span>₹ 34
          </h4>
          <h4 className={`${styles.price} mt-2`}>
            ₹ {cartDetails && cartDetails.delivery_charges}
          </h4>
        </div>
      </div>
      <hr className={`${styles.border} m-0 mt-2 mb-4`} />
      <div className={`row `}>
        <div className={`col-lg-6`}>
          <h3 className={`${styles.final_headings} pb-2  mb-4`}>
            Total savings
          </h3>
          <h3 className={`${styles.payment_amounts} `}>Amount to be paid</h3>
        </div>
        <div className={`col-lg-6 ${styles.content_container}`}>
          <h4 className={`${styles.final_headings}  mb-4`}>
            ₹ {cartDetails && cartDetails.total_savings}
          </h4>
          <h4 className={`${styles.payment_amounts} mt-2`}>
            ₹ {cartDetails && cartDetails.total_amount}
          </h4>
        </div>
        <div className="btn">
          <button onClick={onClick} className={`${styles.btn} mt-2 border-0`}>
            {" "}
            {isLoading ? (
              <CircularProgress size={17} style={{ color: "#ffff" }} />
            ) : (
              "Proceed"
            )}
          </button>
        </div>
     
      </div>
    </div>
  );
};

export default CartCheckout;
