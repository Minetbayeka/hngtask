export const CARTACTIONS = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
  ADD: "ADD",
  REMOVE: "REMOVE",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CARTACTIONS.ADD:
      // if product exist in cart

      try {
        const existingItem = state.find((p) => p.id == action.product.id);
        if (existingItem) {
          console.log("ITEM", existingItem.quantity)
          existingItem.quantity += 1;

          // remove it from cart...
          // make this better
          const currentState = [...state].filter(
            (p) => p.id != action.product.id
          );
          console.log("PREVIOUS STATE:", state);
          console.log("CURRENT STATE:", currentState);
          return [...currentState, existingItem];
        } else {
          console.log("Item DOEST NOT EXIST:");
          return [...state, { ...action.product, quantity: 1 }];
        }
      } catch (error) {
        console.error("ERROR in CATCH BLOCK:", error);
      }
      break;
    case "Remove":

    // case CARTACTIONS.INCREASE:
    //   const itemIndex = state.findIndex((item) => item.id == action.id);
    //   state[itemIndex].quantity += 1;
    //   return [...state];

    // case CARTACTIONS.DECREASE:
    //   const itemIndexToRemove = state.findIndex((item) => item.id == action.id);
    //   state[itemIndexToRemove].quantity -= 1;
    //   return [...state];

    default:
      state;
  }
};
export default cartReducer;
