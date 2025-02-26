// import { router } from "@router";
import { router } from "@router";
import { createContext, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import cartReducer from "./cartReducer";

export const CartContext = createContext();

const ContextProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer,[]);

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;

export const AppProvider = () => <RouterProvider router={router} />
