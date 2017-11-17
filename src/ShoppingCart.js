import React from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'


const ShoppingCart = () => {
  return (
    <div>
      <CartHeader />
      <CartItems />
      <CartFooter />
    </div>
  )
}

export default ShoppingCart
