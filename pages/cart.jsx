import React, { useEffect } from "react";
import SimilarItemsCarousel from "components/SimilarItemsCarousel/SimilarItemsCarousel";

import { getCartDetails, getCartAlternative } from "redux/action/cartAction";

import { useSelector, useDispatch } from "react-redux";
import CartDetails from "components/CartDetails/CartDetails";
import CartItemsList from "components/CartItemsList/CartItemsList";
export default function Cart() {
  const dispatch = useDispatch();
  const cartDetails = useSelector((state) => state.cart.cartDetails);

  useEffect(() => {
    dispatch(getCartDetails());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartAlternative());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row cart-header">
        <h5 className="item-cart p-0">
          {cartDetails?.items?.length ?? 0} Items In Cart
        </h5>
        <div className="col-lg-8">
          <CartItemsList cartItems={cartDetails?.items} />
        </div>
        <div className="col-lg-4">
          <CartDetails />
        </div>
      </div>
      <div className="row">
        <SimilarItemsCarousel cartItems={cartDetails?.items} />
      </div>
    </div>
  );
}
