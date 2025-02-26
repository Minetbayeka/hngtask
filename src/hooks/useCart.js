import { CartContext } from '@providers'
import { useContext } from 'react'

function useCart() {
  return  useContext(CartContext)
}

export default useCart
