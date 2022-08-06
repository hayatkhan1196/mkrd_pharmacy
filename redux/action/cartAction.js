export const GET_CART_DETAILS = "GET_CART_DETAILS";
export const SET_CART_DETAILS = "SET_CART_DETAILS";
export const GET_CART_ALTERNATIVE = "GET_CART_ALTERNATIVE";
export const SET_CART_ALTERNATIVE = "SET_CART_ALTERNATIVE";
export const UPDATE_CART_DETAILS = "UPDATE_CART_DETAILS";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const GET_CART_SIMILAR_PRODUCTS = "GET_SIMILAR_PRODUCTS";
export const SET_CART_SIMILAR_PRODUCTS = "SET_SIMILAR_PRODUCTS";
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const SWAP_CART_ITEM_WITH_ALTERNATIVE =
  "SWAP_CART_ITEM_WITH_ALTERNATIVE";
export const SET_SWAPED_ITEM = "SET_SWAPED_ITEM";

export const getCartSimilarProducts = (payload) => {
  return {
    type: GET_CART_SIMILAR_PRODUCTS,
    payload,
  };
};

export const setCartSimilarProducts = (payload) => {
  return {
    type: SET_CART_SIMILAR_PRODUCTS,
    payload,
  };
};

export const addCartItem = (payload) => {
  return {
    type: ADD_CART_ITEM,
    payload,
  };
};

export const getCartDetails = (payload) => {
  return {
    type: GET_CART_DETAILS,
    payload,
  };
};

export const updateCartDetails = (payload) => {
  return {
    type: UPDATE_CART_DETAILS,
    payload,
  };
};

export const swapCartItemWithAlternative = (payload) => {
  return {
    type: SWAP_CART_ITEM_WITH_ALTERNATIVE,
    payload,
  };
};

export const setCartDetails = (payload) => {
  console.log("called after Add");
  return {
    type: SET_CART_DETAILS,
    payload,
  };
};

export const deleteCartItem = (payload) => {
  return {
    type: DELETE_CART_ITEM,
    payload,
  };
};

export const getCartAlternative = (payload) => {
  return {
    type: GET_CART_ALTERNATIVE,
    payload,
  };
};

export const setCartAlternative = (payload) => {
  return {
    type: SET_CART_ALTERNATIVE,
    payload,
  };
};
