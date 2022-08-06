import { call, delay, put } from "redux-saga/effects";
import { SET_ADDRESS, SET_ERROR_ADDRESS } from "redux/action/AddressAction";
import { addAddressApi, getAddressApi } from "../requests/addressRequest";

// Handle get trending products
export function* getAddressHandler(action) {
  try {
    yield delay(1000);
    const response = yield call(getAddressApi, action.payload);
    // Set user data
    const listData = response.data["pincode-details"] ?? undefined;
    if (listData && response.data.code === 200) {
      yield put({ type: SET_ADDRESS, payload: listData });
    }
  } catch (error) {
    const pincodeArrayError = error.response?.data?.errors?.pincode[0]
      ? error.response?.data?.errors?.pincode
      : error.response?.data?.message;
    yield put({
      type: SET_ERROR_ADDRESS,
      payload: pincodeArrayError,
    });
  }
}


export function* addAddressHandler(action) {
  try {
    const response = yield call(addAddressApi, action.payload);
    yield console.log(response)
    // Set user data
    // const listData = response.data["pincode-details"] ?? undefined;
    // if (listData && response.data.code === 200) {
    //   yield put({ type: SET_ADDRESS, payload: listData });
    // }
  } catch (error) {
    console.log(error)
  }
}
