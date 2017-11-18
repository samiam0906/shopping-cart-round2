import React from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'


const ShoppingCart = ({items, year}) => {
  // console.log('CartItems props:', items)
  // console.log('ShoppingCart props:', props)
  return (
    <div>
      <CartHeader />
      <CartItems items={items}/>
      <CartFooter year={year}/>
    </div>
  )
}

export default ShoppingCart
