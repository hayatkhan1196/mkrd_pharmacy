import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./ProductDisplay.module.scss";
import { useDispatch } from "react-redux";
import { addCartItem } from "redux/action/cartAction";

export default function ProductDisplay(props) {
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [imageList, setimageList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.image?.[0]) {
      setimageList(props.image);
      setCurrentImageUrl(props.image?.[0].url);
    }
  }, [props]);

  const handleAddItemToCart = (productId) => {
    let data = {};
    data.products = [{ product_id: productId, qty: 1 }];
    dispatch(addCartItem(data));
  };

  return (
    <>
      <div className="card">
        <div className="row d-flex align-items-center py-5 px-3">
          <div className="col-2">
            <div className="d-flex justify-content-around p-4">
              <div className="d-grid">
                {imageList.map((value, key) => {
                  return (
                    <Image
                      key={key}
                      src={value.url}
                      width={56}
                      height={57}
                      alt={value.name}
                      onClick={() => setCurrentImageUrl(value.url)}
                      className="cursor-pointer"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="row d-flex align-items-center">
              <div className="col-6 d-flex align-items-center">
                {currentImageUrl && (
                  <Image
                    src={currentImageUrl}
                    width={275}
                    height={275}
                    alt={props.image?.[0].name}
                  />
                )}
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <div className={`${styles.tablet_name}`}>{props.name}</div>
                  <span className={`mx-3`}>
                    <Image
                      className={`${styles.forward_img}`}
                      width={30}
                      height={30}
                      src="/assets/product-details/vector.png"
                      alt=""
                    />
                  </span>
                </div>
                <div className={`${styles.Laboratorie_name} mt-2`}>
                  By {props.manufacturer}
                </div>
                <div className="mt-2">
                  <span className={`${styles.current_price}`}>
                    ₹ {props.salePrice}
                  </span>
                  <span className={`${styles.previous_price}`}>
                    <del>₹ {props.mrp}</del>
                  </span>
                  <span className={`${styles.discount}`}>
                    {Number(
                      ((props.mrp - props.salePrice) * 100) / props.mrp
                    ).toFixed(0)}
                    % OFF
                  </span>
                </div>
                <button
                  onClick={() => {
                    handleAddItemToCart(props.id);
                  }}
                  className={`${styles.add_button} mt-2`}
                >
                  ADD +
                </button>
                {props.alternative > 0 && (
                  <div className="mt-2">
                    <a className="link-success">
                      {props.alternative} Alternative Availbale{" "}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
