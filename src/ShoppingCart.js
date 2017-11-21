import React from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'


// const ShoppingCart = ({items, year}) => {
//   // console.log('CartItems props:', items)
//   // console.log('ShoppingCart props:', props)
//   return (
//     <div>
//       <CartHeader />
//       <CartItems items={items}/>
//       <CartFooter year={year}/>
//     </div>
//   )
// }
const products = [
{ id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
{ id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
{ id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
{ id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
{ id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
{ id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
{ id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
{ id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
{ id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]
class ShoppingCart extends React.Component {

  constructor(props) {
    super(props)
    this.state = { items: props.items}
  }

  itemWasAdded = (item) => {
    console.log("This is the item: ", item)
  }
  render(){
    return (
      <div>
        <CartHeader />
        <AddItem products={products} itemAdded={ this.itemWasAdded } />
        <CartItems items={this.props.items}/>
        <CartFooter year={this.props.year}/>
      </div>
    )
  }
}

export default ShoppingCart
