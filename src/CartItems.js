import React from 'react';
import CartItem from './CartItem';

// const CartItems = ({items}) => {
//   let itemList = items.map(item =><CartItem key={item.id} theItem={item}/>)
//   return (
//     <div className="collection-item">
//         <div className="row">
//           <div className="col s8">Product</div>
//           <div className="col s2">Price</div>
//           <div className="col s2">Quantity</div>
//         </div>
//         {itemList}
//       </div>
//     );
// }

const CartItems = ({items}) => (
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
