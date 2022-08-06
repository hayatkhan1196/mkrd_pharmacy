import {
  SET_ERROR_OTP,
  RECEIVED_USER,
  RESEND_OTP,
  REQUEST_OTP,
  SET_ERROR_lOGIN_OTP,
  RECEIVED_OTP,
  SET_USER,
  RECEIVED_CART,
  LOGGED_OUT,
  RECEIVED_SINGLE_USER,
  RECEIVED_TOKEN,
  LOCK_UNLOCK_OTP_RESEND,
  COUNT_OTP_RESEND,
} from "../action/userAction";

var dt = new Date();
dt.setMinutes(dt.getMinutes() + 30);

const initialState = {
  otp: {},
  user: {},
  singleUser: {},
  error: "",
  userError: "",
  reSendOtp: {},
  token: "",
  cart: {},
  isLoading: false,
  resendOtpTimeLimit:dt,
  resendOtpCount: 1,
 
};

const otpRducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_OTP:
      return {
        ...state,
        otp: action.payload,
        isLoading: true,
      };
    case RECEIVED_CART:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
      };

    case RECEIVED_OTP:
      return {
        ...state,
        error: null,
        otp: action.payload,
        isLoading: false,
      };
    case RESEND_OTP:
      return {
        ...state,
        reSendOtp: action.payload,
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: true,
      };
    case RECEIVED_TOKEN:
      return {
        ...state,
        token: action.payload,
      };

    case LOGGED_OUT:
      return {
        ...state,
        user: null,
        isLoading: false,
      };

    case RECEIVED_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };

    case RECEIVED_SINGLE_USER:
      return {
        ...state,
        singleUser: action.payload,
        isLoading: false,
      };

    case SET_ERROR_lOGIN_OTP:
      return {
        ...state,
        userError: action.payload,
        isLoading: false,
      };
    case SET_ERROR_OTP:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case COUNT_OTP_RESEND:
      return {
        ...state,
        resendOtpCount: action.payload,
        isLoading: false,
      };
    case LOCK_UNLOCK_OTP_RESEND:
      return {
        ...state,
        // resendOtpTimeLimit:,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default otpRducer;
