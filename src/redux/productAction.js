import { PRODUCT_LIST, PRODUCT_SEARCH } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};



// export const setProductList = (data) => {
//   console.log("set action");
//   return {
//     type: SET_PRODUCT_LIST,
//    data,
//   };
// };
