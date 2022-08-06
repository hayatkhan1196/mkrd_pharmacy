export const GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';
export const GET_GENERIC_ALTERNATE = 'GET_GENERIC_ALTERNATE';
export const SET_GENERIC_ALTERNATE = 'SET_GENERIC_ALTERNATE';


export const getProductDetails = (payload) => {
    return {
        type: GET_PRODUCT_DETAILS,
        payload
    };
};

export const setProductDetails = (payload) => {
    return {
        type: SET_PRODUCT_DETAILS,
        payload
    };
};


export const getGenericAlternate = (payload) => {
    return {
        type: GET_GENERIC_ALTERNATE,
        payload
    };
};

export const setGenericAlternate = (payload) => {
    return {
        type: SET_GENERIC_ALTERNATE,
        payload
    };
};