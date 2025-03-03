import { createContext, useReducer } from 'react';

export const CARTACTIONS = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
  ADD: "ADD",
  REMOVE: "REMOVE",
};

 export const subtotal = (cartItems) =>{
  if(!cartItems || cartItems==0){
    return cartItems.reduce((cartItems, product) =>product.price*cartItems.length, 0) 
  }
  return 0;
}
 export const totalPrice = (cartItems) =>{
  if(!cartItems || cartItems==0){
    return cartItems.reduce((total, product) => total + product.quantity*product.price, 0)
  }
 return 0;
}


export const cartReducer = (state, action) => {
  switch (action.type) {
    case CARTACTIONS.ADD:
      // if product exist i nn cart
const existingItem = state.find((p) =>p.id ==action.product);
if(existingItem){
  return state.map((item)=>item.id === action.product.id ? 
  {...item, quantity:item.quantity + 1} : item
 );
} else{
  return [...state, {...action.product, quantity:1}]
}

case CARTACTIONS.REMOVE:
  const removeItem  = state.find((p) =>p.id == action.product.id);
  if(removeItem){

  
  if(removeItem.quantty>1){
    return state.map((item) => item.id ==action.product.id?{ ...item, quantiy:item.quantity -1}
        :item
  );
  } else{
    return state.filter((item) =>item.id!==action.product.id)
  } 
} else{
    return state
  }





  

    //   try {
    //     const existingItem = state.find((p) => p.id == action.product.id);
    //     if (existingItem) {
    //       console.log("ITEM", existingItem.quantity)
    //       existingItem.quantity += 1;

    //       // remove it from cart...
    //       // make this better
    //       const currentState = [...state].filter(
    //         (p) => p.id != action.product.id
    //       );
    //       console.log("PREVIOUS STATE:", state);
    //       console.log("CURRENT STATE:", currentState);
    //       return [...currentState, existingItem];
    //     } else {
    //       console.log("Item DOEST NOT EXIST:");
    //       return [...state, { ...action.product, quantity: 1 }];
    //     }
    //   } catch (error) {
    //     console.error("ERROR in CATCH BLOCK:", error);
    //   }
    //   break;
    // case "Remove":

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
