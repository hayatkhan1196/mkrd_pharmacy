import { SET_GENERIC_ALTERNATE, SET_PRODUCT_DETAILS } from "redux/action/productAction"

// initial states
const initialState = {
   productDetails : [],
   genericAlternateList: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload
            }    
        case SET_GENERIC_ALTERNATE:
            return {
                ...state,
                genericAlternateList: action.payload
            }    
            
        default:
            return state;
    }
}

export default productReducer;