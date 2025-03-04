import shoe from "../../../../public/assets/images/shoe.png";
import useCart from "@hooks/useCart";
import { AppProvider,  CartContext } from "@providers";
import cartReducer, { CARTACTIONS, subtotal, totalPrice } from "@providers/cartReducer";
import { useContext, useState } from "react";


export function CartItem({product}) {
  const {dispatch,} = useCart()
  // const Subtotal = subtotal(product)
  // const Total = totalPrice(product)
  // console.log("subtotal", Subtotal)
  // console.log("totalPrice", Total)
  return (
    <>
    <div className="flex justify-between items-center p-3 border rounded-md my-2 gap-3">
      {/* First */}
      <div className="flex  flex-col sm:flex-row gap-2 items-center">
        <div className="flex items-center  bg-tertiary p-3 rounded-lg">
          <img className="w-20" src={shoe} alt="shoe" />
        </div>
        <div className="flex flex-col">
          <h1>{product.name}</h1>
          {/* Brown Eco Shoe */}
          <p className="hidden md:block">{product?.description}</p>
        </div>
      </div>
      {/* Middle */}
      <div className="flex gap-3  items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          className="cursor-pointer"
          onClick={_=>dispatch({action: CARTACTIONS.DECREASE , id: product.id})}
        >
          <g clip-path="url(#clip0_207_1967)">
            <path
              d="M5.0107 10.4086H15.6558V11.5914H5.0107V10.4086ZM3.82791 0.946289H16.8386C17.7797 0.946289 18.6822 1.32013 19.3477 1.98558C20.0131 2.65103 20.387 3.55357 20.387 4.49466V17.5053C20.387 18.4464 20.0131 19.349 19.3477 20.0144C18.6822 20.6799 17.7797 21.0537 16.8386 21.0537H3.82791C2.88682 21.0537 1.98428 20.6799 1.31883 20.0144C0.653386 19.349 0.279541 18.4464 0.279541 17.5053V4.49466C0.279541 3.55357 0.653386 2.65103 1.31883 1.98558C1.98428 1.32013 2.88682 0.946289 3.82791 0.946289ZM3.82791 2.12908C3.20052 2.12908 2.59882 2.37831 2.15519 2.82194C1.71156 3.26557 1.46233 3.86727 1.46233 4.49466V17.5053C1.46233 18.1327 1.71156 18.7344 2.15519 19.1781C2.59882 19.6217 3.20052 19.8709 3.82791 19.8709H16.8386C17.466 19.8709 18.0677 19.6217 18.5113 19.1781C18.9549 18.7344 19.2042 18.1327 19.2042 17.5053V4.49466C19.2042 3.86727 18.9549 3.26557 18.5113 2.82194C18.0677 2.37831 17.466 2.12908 16.8386 2.12908H3.82791Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_207_1967">
              <rect
                width="20.1074"
                height="20.1074"
                fill="white"
                transform="translate(0.279541 0.946289)"
              />
            </clipPath>
          </defs>
        </svg>
        {/* <p>{product?.quantity??1}</p> */}
        <p>{product.quantity}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          className="cursor-pointer"

          onClick={_=>dispatch({type: CARTACTIONS.ADD, product})}
        >
          <g clip-path="url(#clip0_207_1971)">
            <path
              d="M5.34395 10.4086H10.0751V5.67745H11.2579V10.4086H15.9891V11.5914H11.2579V16.3226H10.0751V11.5914H5.34395V10.4086ZM4.16116 0.946289H17.1718C18.1129 0.946289 19.0155 1.32013 19.6809 1.98558C20.3464 2.65103 20.7202 3.55357 20.7202 4.49466V17.5053C20.7202 18.4464 20.3464 19.349 19.6809 20.0144C19.0155 20.6799 18.1129 21.0537 17.1718 21.0537H4.16116C3.22008 21.0537 2.31753 20.6799 1.65209 20.0144C0.986638 19.349 0.612793 18.4464 0.612793 17.5053V4.49466C0.612793 3.55357 0.986638 2.65103 1.65209 1.98558C2.31753 1.32013 3.22008 0.946289 4.16116 0.946289ZM4.16116 2.12908C3.53377 2.12908 2.93208 2.37831 2.48844 2.82194C2.04481 3.26557 1.79558 3.86727 1.79558 4.49466V17.5053C1.79558 18.1327 2.04481 18.7344 2.48844 19.1781C2.93208 19.6217 3.53377 19.8709 4.16116 19.8709H17.1718C17.7992 19.8709 18.4009 19.6217 18.8446 19.1781C19.2882 18.7344 19.5374 18.1327 19.5374 17.5053V4.49466C19.5374 3.86727 19.2882 3.26557 18.8446 2.82194C18.4009 2.37831 17.7992 2.12908 17.1718 2.12908H4.16116Z"
              fill="#C80001"
            />
          </g>
          <defs>
            <clipPath id="clip0_207_1971">
              <rect
                width="20.1074"
                height="20.1074"
                fill="white"
                transform="translate(0.612793 0.946289)"
              />
            </clipPath>
          </defs>
        </svg>
      
      </div>
      
      {/* Last */}

      <div className="flex gap-2 items-center">
        <p className="flex items-center gap-1 font-bold">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
            >
              <path
                d="M0 5.25H1.5V0.75H3L5.565 5.25H9V0.75H10.5V5.25H12V6.75H10.5V8.25H12V9.75H10.5V14.25H9L6.4275 9.75H3V14.25H1.5V9.75H0V8.25H1.5V6.75H0V5.25ZM3 5.25H3.8475L3 3.7725V5.25ZM3 6.75V8.25H5.565L4.71 6.75H3ZM9 11.25V9.75H8.1375L9 11.25ZM6.42 6.75L7.2825 8.25H9V6.75H6.42Z"
                fill="black"
              />
            </svg>
          </span>
          <span>{product.price}, 00 </span>
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 28 30"
          fill="none"
          className="cursor-pointer"
          onClick={_=>dispatch({type: CARTACTIONS.REMOVE, product})} 
        >
          <path
            d="M5.66663 30C4.74996 30 3.96551 29.6739 3.31329 29.0217C2.66107 28.3694 2.3344 27.5844 2.33329 26.6667V5H0.666626V1.66667H8.99996V0H19V1.66667H27.3333V5H25.6666V26.6667C25.6666 27.5833 25.3405 28.3683 24.6883 29.0217C24.0361 29.675 23.2511 30.0011 22.3333 30H5.66663ZM22.3333 5H5.66663V26.6667H22.3333V5ZM8.99996 23.3333H12.3333V8.33333H8.99996V23.3333ZM15.6666 23.3333H19V8.33333H15.6666V23.3333Z"
            fill="#000"
            className="hover:fill-primary"
          />
        </svg>
      </div>
    

    </div>
  
   </>
    

  );
}


