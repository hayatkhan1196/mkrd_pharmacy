import React, { useState } from "react";
import Image from "next/image";
import styles from "./CartCard.module.scss";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

import { useDispatch, useSelector } from "react-redux";

import { updateCartDetails, deleteCartItem } from "redux/action/cartAction";

import ConfirmDialogueModal from "components/Modals/ConfirmDilogueModal/ConfirmDialogueModal";
import Link from "next/link";

const CartCard = ({ item }) => {
  const [showDialogue, setShowDialogue] = useState(false);
  const dispatch = useDispatch();

  const handleQtyIncrease = (item) => {
    let value = item.qty + 1;
    let data = {};
    data.products = [{ product_id: item.product.id, qty: value }];
    dispatch(updateCartDetails(data));
  };

  const handleQtyDecrease = (item) => {
    let value = item.qty - 1;
    let data = {};
    data.products = [{ product_id: item.product.id, qty: value }];
    dispatch(updateCartDetails(data));
  };

  const handleComfirmDeleteItem = () => {
    setShowDialogue(true);
  };

  return (
    <>
      <div className={`row ${styles.med_Card} p-4 box-shadow-bg  mb-3`}>
        <div className="col-sm-3">
          <a href={`/medicine/${item.product.id}`}>
            <Image
              src={item?.product.images[0].url}
              width={101}
              height={101}
              alt={item?.product.images[0].name}
            />
          </a>
        </div>
        <div className="col-sm-6">
          <a href={`/medicine/${item.id}`}>
            <h5 className={styles.med_h5}>{item && item.product.name_web}</h5>
          </a>
          <p className={styles.med_p}>
            By {item && item.product.manufacturer_name}
          </p>
          <select>
            <option>14 Tablet</option>
            <option>12 Tablet </option>
            <option>10 Tablet</option>
            <option>8 Tablet</option>
          </select>
          <h6 className={styles.med_h6}>
            ₹{item && item.product.sales_price}
            <span className={`m-2 ${styles.price}`}>
              {item && item.product.mrp}
            </span>
            <span className={styles.priceOff}></span>
          </h6>
        </div>
        <div className="col-sm-3">
          <div className={styles.right_side}>
            <div>
              {!item.product.is_rx_required ?? (
                <OverlayTrigger
                  placement="left"
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      <strong>
                        prescription is required to order this item.
                      </strong>
                    </Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <Image
                      src="/assets/mdi_prescription.png"
                      alt="Nr"
                      width={15.82}
                      height={16.41}
                    />
                  </span>
                </OverlayTrigger>
              )}
              <a
                className={styles.Delete}
                onClick={() => {
                  handleComfirmDeleteItem();
                }}
              >
                <Image
                  src="/assets/Vector.png"
                  alt="delete-image"
                  width={14.25}
                  height={17.38}
                />
              </a>
            </div>
            <div>
              <div className={`${styles.counter}`}>
                <a
                  className={styles.a_tag}
                  onClick={() => handleQtyDecrease(item)}
                >
                  -
                </a>
                <div className={styles.count}>{item && item.qty}</div>
                <a
                  className={styles.a_tag}
                  onClick={() => handleQtyIncrease(item)}
                >
                  +
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDialogueModal
        show={showDialogue}
        setShow={setShowDialogue}
        item={item}
      />
    </>
  );
};

export default CartCard;
