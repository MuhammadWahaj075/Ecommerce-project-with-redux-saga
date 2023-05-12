import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const addToCart = (data) => {
  console.log("action called========", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = (data) => {
  console.log("action REMOVE called========", data);
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};

// export const emptyCart = () => {
//   console.log("action EMPTYCART========");
//   return {
//     type: EMPTY_CART,
//   };
// };
