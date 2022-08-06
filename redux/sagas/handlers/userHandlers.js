import { call, delay, put } from "redux-saga/effects";
import {
  RECEIVED_OTP,
  SET_ERROR_lOGIN_OTP,
  SET_ERROR_OTP,
  RECEIVED_USER,
  RESEND_OTP,
  RECEIVED_CART,
  RECEIVED_SINGLE_USER,
  RECEIVED_TOKEN,
} from "redux/action/userAction";
import {
  getLoggedInApi,
  getOtpApi,
  getResenOtpdApi,
} from "../requests/userRequests";
import { getAccessToken, getCookie, setCookie } from "commonjs/common";
import api from "redux/api";

// Handle get otp request
export function* getOtpHandler(action) {
  try {
    const response = yield call(getOtpApi, action.payload);
    const requestOtpData = response.data["otp"] ?? undefined;
    if (requestOtpData && response.data.code === 200) {
      yield put({ type: RECEIVED_OTP, payload: requestOtpData });
    }
  } catch (error) {
    yield put({
      type: SET_ERROR_OTP,
      payload: error.response.data.errors,
    });
  }
}

// Handle get login request
export function* getLoginHandler(action) {
  try {
    const response = yield call(getLoggedInApi, action.payload);
    // Set user login data
    const requestLoginData = response.data.user ?? undefined;

    if (requestLoginData && response.status === 200) {
      localStorage.setItem("accessToken", requestLoginData.token)
      yield api.defaults.headers.common = {'Authorization': `Bearer ${getAccessToken()}`} // reset default header
      yield put({ type: RECEIVED_USER, payload: requestLoginData });
      yield put({ type: RECEIVED_CART, payload: requestLoginData.cart });
    }
  } catch (error) {
    yield put({
      type: SET_ERROR_lOGIN_OTP,
      payload: error.response.data.errors,
    });
  }
}

// Handle RESEND OTP
export function* getResendHandler(action) {
  try {
    yield delay(1000);
    const response = yield call(getResenOtpdApi, action.payload);

    // Set user login data
    const reSendOtpData = response.data["otp"] ?? undefined;
    if (reSendOtpData && response.data.code === 200) {
      yield put({ type: RESEND_OTP, payload: reSendOtpData });
    }
  } catch (error) {
    yield put({
      type: RESEND_OTP_ERROR,
      payload: error.response.data.errors,
    });
  }
}
