import React from 'react';

 const CartItem=(props)=>{
   return(
   <div className="collection-item">
    <div className="row">
       <div className="col s8">{props.theItem.product.name}</div>
       <div className="col s2">${(props.theItem.product.priceInCents/100).toFixed(2)}</div>
       <div className="col s2">{props.theItem.quantity}</div>
     </div>
   </div>
   )
 }

 export default CartItem;
