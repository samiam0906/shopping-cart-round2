import React from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'


class ShoppingCart extends React.Component {

  constructor(props){
    super(props)
    this.state = { items: props.items}
  }

  handleItemAdded = (item) => {
    item.id = this.state.items.length
    this.setState({ items: [item,...this.state.items]})
  }

  render(){
    return (
      <div>
        <CartHeader />
        <AddItem products={this.props.products} itemAdded={ this.handleItemAdded } />
        <CartItems items={this.state.items}/>
        <CartFooter year={this.props.year}/>
      </div>
    )
  }
}

export default ShoppingCart
