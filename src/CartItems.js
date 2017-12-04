import React from 'react';
import CartItem from './CartItem';

const CartItems = ({items, products}) => (
  <div className="collection-item">
    <div className="row">
      <div className="col s8">Product</div>
      <div className="col s2">Price</div>
      <div className="col s2">Quantity</div>
    </div>
    { items.map( (item, i) => <CartItem key={ i } theItem={ item } />) }
  </div>
)

export default CartItems
