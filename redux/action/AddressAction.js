export const SET_ADDRESS = "SET_ADDRESS";
export const GET_ADDRESS = "GET_ADDRESS";
export const SET_ERROR_ADDRESS = "ERROR_ADDRESS";
export const ADD_ADDRESS = "ADD_ADDRESS";


export const getAddress = (payload) => {
  return {
    type: GET_ADDRESS,
    payload,
  };
};

export const setAddress = (payload) => {
  return {
    type: SET_ADDRESS,
    payload,
  };
};

export const setAddressErorr = (payload) => {
  return {
    type: SET_ERROR_ADDRESS,
    payload,
  };
};


export const addAddress = (payload) => {
  return {
    type: ADD_ADDRESS,
    payload,
  };
};
