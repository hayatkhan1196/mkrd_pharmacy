import {
  SET_CART_DETAILS,
  SET_CART_ALTERNATIVE,
  UPDATE_CART_DETAILS,
  SET_SWAPED_ITEM,
  SET_CART_SIMILAR_PRODUCTS,
} from "../action/cartAction";

const initialState = {
  cartDetails: [],
  cartAlternatives: [],
  cartSimilarProducts: [],
  swapedItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_DETAILS:
      return {
        ...state,
        cartDetails: action.payload,
      };
    case SET_CART_SIMILAR_PRODUCTS:
      return {
        ...state,
        cartSimilarProducts: action.payload,
      };
    case SET_CART_ALTERNATIVE:
      return {
        ...state,
        cartAlternatives: action.payload,
      };
    case SET_SWAPED_ITEM:
      return {
        ...state,
        swapedItems: action.payload,
      };
    case UPDATE_CART_DETAILS:
      return {
        ...state,
        cartDetails: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
