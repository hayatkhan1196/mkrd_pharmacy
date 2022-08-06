export const REQUEST_OTP = "REQUEST_OTP";
export const RECEIVED_OTP = "RECEIVED_OTP";
export const SET_ERROR_OTP = "SET_ERROR_OTP";
export const SET_USER = "SET_USER";
export const RECEIVED_USER = "RECEIVED_USER";
export const REQUEST_RESEND_OTP = "REQUEST_RESEND_OTP";
export const RESEND_OTP = "RESEND_OTP";
export const RESEND_OTP_ERROR = "RESEND_OTP_ERROR";
export const SET_ERROR_lOGIN_OTP = "SET_ERROR_lOGIN_OTP";
export const RECEIVED_CART = "RECEIVED_CART";
export const LOGGED_OUT = "LOGGED_OUT";
export const RESET_OTP = "RESET_OTP";
export const COUNT_OTP_RESEND = "COUNT_OTP_RESEND";
export const LOCK_UNLOCK_OTP_RESEND = "LOCK_UNLOCK_OTP_RESEND";

export const getOTP = (payload) => {
  return {
    type: REQUEST_OTP,
    payload,
  };
};

export const reSendOtp = (payload) => {
  return {
    type: REQUEST_RESEND_OTP,
    payload,
  };
};
export const reSendOtpErorr = (payload) => {
  return {
    type: RESEND_OTP_ERROR,
    payload,
  };
};
export const setOtpErorr = (payload) => {
  return {
    type: SET_ERROR_OTP,
    payload,
  };
};

export const setUserData = (payload) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const setLoginOtpErorr = (payload) => {
  return {
    type: SET_ERROR_lOGIN_OTP,
    payload,
  };
};

export const reset_otp = (payload) => {
  return {
    type: RESET_OTP,
    payload,
  };
};
export const setUserLoggedOut = (payload) => {
  return {
    type: LOGGED_OUT,
    payload,
  };
};

export const setCart = (payload) => {
  return {
    type: RECEIVED_CART,
    payload,
  };
};

export const counterLimit = (payload) => {
  return {
    type: COUNT_OTP_RESEND,
    payload,
  };
};
export const lockUnlockResendOtpTimer = (payload) => {
  return {
    type: LOCK_UNLOCK_OTP_RESEND,
    payload,
  };
};
