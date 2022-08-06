import { SET_ADDRESS, SET_ERROR_ADDRESS } from "../action/AddressAction";
// initial states
const initialState = {
  pinCodeAddress: {},
  error: "",
};

const addressRducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        pinCodeAddress: action.payload,
      };
    case SET_ERROR_ADDRESS:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addressRducer;
