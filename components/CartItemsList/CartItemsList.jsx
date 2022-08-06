import React, { useState } from "react";
import { useSelector } from "react-redux";

import CartCard from "components/CartCard/CartCard";
import CartItemWithAlternativeCard from "components/CartItemWithAlternativeCard/CartItemWithAlternativeCard";

export default function CartItemsList({ cartItems }) {
  const [swaped, setSwaped] = useState(false);
  const cartAlternatives = useSelector((state) => state.cart.cartAlternatives);

  const handleSwap = () => {
    setSwaped(true);
  };

  //compare the Itmes with cartAlternative Items to get items without an alternative
  const itemsWithoutAlternatives = cartItems?.filter(
    ({ id: itemId }) =>
      !cartAlternatives.some(
        ({ item_id: alternativeId }) => alternativeId === itemId
      )
  );

  const itemsWithAlternatives = cartItems?.filter(({ id: itemId }) =>
    cartAlternatives.some(
      ({ item_id: alternativeId }) => alternativeId === itemId
    )
  );

  //compare the Items with cartAlternative and get items with alternatives and their alternative Item
  const itemsWithTheirAlts = [];
  const results = itemsWithAlternatives?.reduce((prev, current, index) => {
    const alternative = cartAlternatives?.filter(
      (item) => item.item_id === current.id
    );
    if (alternative?.length > 0) {
      itemsWithTheirAlts.push({ current, alternative });
    }
    return itemsWithTheirAlts;
  }, []);

  return (
    <>
      {itemsWithoutAlternatives?.map((item) => {
        return <CartCard key={item.id} item={item} />;
      })}

      {results?.map((item, key) => {
        return (
          <CartItemWithAlternativeCard
            onSwipe={handleSwap}
            swaped={swaped}
            setSwaped={setSwaped}
            key={key}
            mainItem={item?.current}
            alternativeItem={item?.alternative}
          />
        );
      })}
    </>
  );
}
