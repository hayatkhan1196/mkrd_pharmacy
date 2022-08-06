import { call, put } from "redux-saga/effects";
import {
  SET_CART_DETAILS,
  SET_CART_ALTERNATIVE,
  SET_CART_SIMILAR_PRODUCTS,
} from "redux/action/cartAction";
import {
  deleteCartItemApi,
  getCartDetailsApi,
  getCartItemAlternativeApi,
  updateCartItemApi,
  getCartSimilarProductsApi,
  addCartItem,
} from "../requests/cartRequests";

// Handle GET Cart details
export function* handleGetCartDetails(action) {
  try {
    const response = yield call(getCartDetailsApi);
    // Set cartDetails data
    const cartDetails = response.data.cart ?? undefined;
    if (cartDetails && response.data.code === 200) {
      yield put({ type: SET_CART_DETAILS, payload: cartDetails });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* handleCartItemUpdate(action) {
  try {
    const response = yield call(updateCartItemApi, action.payload);
    // Set cartDetals data after update
    const newCartDetails = response.data.cart ?? undefined;
    if (newCartDetails && response.data.code === 200) {
      yield put({ type: SET_CART_DETAILS, payload: newCartDetails });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleCartItemDelete(action) {
  try {
    const response = yield call(deleteCartItemApi, action.payload);
    // Set cartDetals data after Delete
    const newCartDetails = response.data.cart ?? undefined;
    if (newCartDetails && response.data.code === 200) {
      yield put({ type: SET_CART_DETAILS, payload: newCartDetails });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleCartItemAlternative(action) {
  try {
    const response = yield call(getCartItemAlternativeApi);
    // Set cartAlternatives data
    const cartItemAlternatives =
      response.data["generic-alternative"] ?? undefined;
    if (cartItemAlternatives && response.data.code === 200) {
      yield put({ type: SET_CART_ALTERNATIVE, payload: cartItemAlternatives });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleCartSimilarProducts(action) {
  try {
    const response = yield call(getCartSimilarProductsApi, action.payload);
    const cartSimilarProducts = response.data.products ?? undefined;
    if (cartSimilarProducts && response.data.code === 200) {
      yield put({
        type: SET_CART_SIMILAR_PRODUCTS,
        payload: cartSimilarProducts,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export function* handleAddCartItem(action) {
  try {
    const response = yield call(addCartItem, action.payload);
    const newCartDetails = response.data.cart ?? undefined;
    if (newCartDetails && response.data.code === 201) {
      yield put({ type: SET_CART_DETAILS, payload: newCartDetails });
    }
  } catch (error) {
    console.log(error);
  }
}
