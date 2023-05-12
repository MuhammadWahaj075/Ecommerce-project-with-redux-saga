import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";

export default combineReducers({
  cartDataState: cartData,
  productDataState: productData,
});
