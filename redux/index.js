import { combineReducers } from "redux";

// Reducers
import searchReducer from "./reducers/searchReducer";
import addressReducer from "./reducers/addressRducer";
import productReducer from "./reducers/productReducer";
import otpRducer from "./reducers/userReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  address: addressReducer,
  product: productReducer,
  user: otpRducer,
  cart: cartReducer,
});
// // for reseting root reducer on logout
// const rootReducer = (state, action) => {
//     if (action.type === 'RESET_ALL_DATA') {
//         return appReducers([], action)
//     }
//     return appReducers(state, action)
// }
export default rootReducer;
