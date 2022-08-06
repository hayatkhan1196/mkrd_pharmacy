import React from "react";
import AddItems from "components/CardAddItems";
import ApplyCopen from "components/CartApplyCopen";
import SelectCopen from "components/CartSelectCopen";
import CartCheckout from "components/CartCheckOut/CartCheckout";

const CartDetails = () => {
  return (
    <div className="h-100 ms-4">
      <div className="box-shadow-bg  p-4">
        <ApplyCopen />
        <SelectCopen />
      </div>
      <div className="box-shadow-bg p-2 mt-4 mb-4">
        <AddItems />
      </div>
      <div className="box-shadow-bg p-3 mt-4 mb-4">
        <CartCheckout />
      </div>
    </div>
  );
};

export default CartDetails;
