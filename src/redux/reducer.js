import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
  // here i using if statement ofr learning ..
  //   if (action.type === ADD_TO_CART) {
  //     console.log("reducer called======", action);
  //     return action.data;
  //   } else {
  //        return "no action data"
  //   }

  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer called======", action);
      return [action.data, ...data];

    case REMOVE_TO_CART:
      console.log("reducer called======", action);
      // data.length = data.length ? data.length - 1 : [];
      const remainItem = data.filter(
        (removeItemData) => removeItemData.id !== action.data
      );
      console.log("🚀 ~ file: reducer.js:23 ~ cartData ~ remainItem:", remainItem)
      return [...remainItem];

    // case EMPTY_CART:
    //   console.log("reducer called======", action);
    //   data = [];
    //   return [...data];

    default:
      return data;
  }
};
