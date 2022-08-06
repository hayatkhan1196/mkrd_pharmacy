import { getCookie } from "commonjs/common";
import api from "../../api";

export const getCartDetailsApi = () => {
  return api.get(`/cart?identifier=${getCookie("deviceId")}`);
};

export const getCartItemAlternativeApi = () => {
  return api.get(
    `/cart/generic-alternative?identifier=${getCookie("deviceId")}`
  );
};

export const updateCartItemApi = (data) => {
  return api.put(`/cart/items?identifier=${getCookie("deviceId")}`, data);
};

export const deleteCartItemApi = (data) => {
  return api.delete(`/cart/items/${data}?identifier=${getCookie("deviceId")}`);
};

export const swapCartItemWithAlternativeApi = (data) => {
  return api.post(
    `/cart/swap-alternative?identifier=${getCookie("deviceId")}`,
    data
  );
};

export const getCartSimilarProductsApi = (data) => {
  return api.get(`/products/${data}/related-products`);
};

export const addCartItem = (data) => {
  return api.post(`/cart/items?identifier=${getCookie("deviceId")}`, data);
};
