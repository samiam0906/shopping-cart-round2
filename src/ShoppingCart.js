import React from 'react'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'


class ShoppingCart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items: [],
      products: []
    }
  }

  handleItemAdded = (item) => {
    item.id = this.state.items.length
    this.setState({ items: [item,...this.state.items]})
    return item;
  }

  handleProductAdded = (product) => {
    product.id = this.state.products.length
    this.setState({ products: [...this.state.products, product] })
  }

  componentDidMount() {
    const urlProducts = 'http://localhost:8000/products'
    const urlItems = 'http://localhost:8000/items'

    const requestProducts = fetch(urlProducts)
      .then(response => response.json())

    const requestItems = fetch(urlItems)
      .then(response => response.json())

    Promise.all([requestProducts, requestItems])
      .then(values => {
        const products = values[0]
        const items = values[1]
        let populatedItems = items.map(item => {
          products.map(product => {
            if(item.product_id === product.id) {
              item.product = product;
            }
          })
          return item;
        })
        this.setState({
          items: populatedItems,
          products: products
        })
      })
  }

  createProduct = (product) => {
    console.log(product)
    const postUrl = 'http://localhost:8000/products';
    let postResponse = fetch(postUrl, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState({ products: data }))
  }

  render(){
    return (
      <div>
        <CartHeader />
        <AddItem products={this.state.products} handleItemAdded={ this.handleItemAdded} handleProductAdded={this.handleProductAdded} createProduct={this.createProduct} />
        <CartItems items={this.state.items}/>
        <CartFooter year={this.props.year}/>
      </div>
    )
  }
}

export default ShoppingCart
