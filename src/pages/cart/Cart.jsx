
import { useContext, useEffect } from "react";
import { CartFooter, CartHeader, CartItem } from "./components";
import { CartContext } from "@providers";
import useCart from "@hooks/useCart";

export function Cart() {
  const {cartItems}  = useCart()
  
  useEffect(()=>{
    console.log(cartItems)
  }, [cartItems])

  return (
  
    <div className="p-10">
      <CartHeader />
      {cartItems?.map((item, index) => (
        <CartItem product={item} key={index} />
      ))}
      <CartFooter />
    </div>
  );
}
