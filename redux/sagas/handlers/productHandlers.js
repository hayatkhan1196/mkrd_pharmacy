import {call, delay, put} from "redux-saga/effects"
import { SET_GENERIC_ALTERNATE, SET_PRODUCT_DETAILS } from "redux/action/productAction";
import { getGenericAlternateApi, getProductDetailsApi } from "../requests/productRequest";

// Handle get product details
export function* handleGetProductDetails(action) {
    try {
        const response = yield call(getProductDetailsApi, action.payload)
        // Set product data
        const productData = response.data.product ?? undefined;
        if(productData && response.data.code === 200) {
            yield put({ type: SET_PRODUCT_DETAILS, payload : productData})
        } 
    } catch (error) {
        console.log(error)
    } 
}



export function* handleGetGenericAlternate(action) {
    try {
        const response = yield call(getGenericAlternateApi, action.payload)
        // Set product data
        const productData = response.data.product ?? undefined;
        if(productData && response.data.code === 200) {
            yield put({ type: SET_GENERIC_ALTERNATE, payload : productData})
        } 
    } catch (error) {
        console.log(error)
    } 
}