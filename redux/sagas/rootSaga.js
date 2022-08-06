import { takeLatest, all } from "redux-saga/effects";
import {
  DELETE_SEARCH_KEYWORD,
  GET_SEARCH_KEYWORD,
  GET_SEARCH_RESULT,
  GET_TRENDING_PRODUCT,
  SAVE_SEARCH_KEYWORD,
} from "redux/action/searchAction";
import {
  handleDeleteSearchKeyword,
  handleGetSearchKeyword,
  handleGetSearchResult,
  handleGetTrendingProduct,
  handleSaveSearchKeyword,
} from "redux/sagas/handlers/searchHandlers";
import {
  getLoginHandler,
  getOtpHandler,
  getResendHandler,
} from "redux/sagas/handlers/userHandlers";
import {
  addAddressHandler,
  getAddressHandler,
} from "redux/sagas/handlers/addressHandler";

import {
  REQUEST_OTP,
  REQUEST_RESEND_OTP,
  SET_USER,
} from "redux/action/userAction";
import { ADD_ADDRESS, GET_ADDRESS } from "redux/action/AddressAction";
import {
  handleGetGenericAlternate,
  handleGetProductDetails,
} from "./handlers/productHandlers";
import {
  GET_GENERIC_ALTERNATE,
  GET_PRODUCT_DETAILS,
} from "redux/action/productAction";
import {
  GET_CART_ALTERNATIVE,
  GET_CART_DETAILS,
  UPDATE_CART_DETAILS,
  DELETE_CART_ITEM,
  GET_CART_SIMILAR_PRODUCTS,
  ADD_CART_ITEM,
} from "redux/action/cartAction";
import {
  handleCartItemAlternative,
  handleGetCartDetails,
  handleCartItemUpdate,
  handleCartItemDelete,
  handleCartSimilarProducts,
  handleAddCartItem,
} from "./handlers/cartHandlers";

export function* watcherSaga() {
  yield all([
    // search Handlers
    yield takeLatest(GET_TRENDING_PRODUCT, handleGetTrendingProduct),
    yield takeLatest(GET_SEARCH_RESULT, handleGetSearchResult),
    yield takeLatest(SAVE_SEARCH_KEYWORD, handleSaveSearchKeyword),
    yield takeLatest(GET_SEARCH_KEYWORD, handleGetSearchKeyword),
    yield takeLatest(DELETE_SEARCH_KEYWORD, handleDeleteSearchKeyword),
    yield takeLatest(GET_ADDRESS, getAddressHandler),
    yield takeLatest(REQUEST_OTP, getOtpHandler),
    yield takeLatest(SET_USER, getLoginHandler),

    // Product handlers
    yield takeLatest(GET_PRODUCT_DETAILS, handleGetProductDetails),
    yield takeLatest(GET_GENERIC_ALTERNATE, handleGetGenericAlternate),

    //Cart handlers
    yield takeLatest(GET_CART_DETAILS, handleGetCartDetails),
    yield takeLatest(UPDATE_CART_DETAILS, handleCartItemUpdate),
    yield takeLatest(DELETE_CART_ITEM, handleCartItemDelete),
    yield takeLatest(GET_CART_ALTERNATIVE, handleCartItemAlternative),
    yield takeLatest(GET_CART_SIMILAR_PRODUCTS, handleCartSimilarProducts),
    yield takeLatest(ADD_CART_ITEM, handleAddCartItem),

    yield takeLatest(REQUEST_RESEND_OTP, getResendHandler),

    yield takeLatest(ADD_ADDRESS, addAddressHandler),
  ]);
}
