import React from 'react'
import { Row, Input, Button } from 'react-materialize'

const AddItem = ({ products, handleItemAdded, handleProductAdded, createProduct}) => {
  const itemWasAdded = (e) => {
    e.preventDefault()
    handleItemAdded({
      quantity: e.target.quantity.value,
      product: products.find((product) => product.id === parseInt(e.target.productId.value, 10))
    })
    createProduct(handleProductAdded({
      product: products.find((product) => product.id === parseInt(e.target.productId.value, 10))
    }))
  }

  return (
    <form className="container" onSubmit={ itemWasAdded}>
    <Row>
      <Input s={12} label="Choose a Product" type='select' name="productId" >
        { products.map(product => <option key={product.id} value={product.id}>{ product.name }</option>)}
      </Input>
      </Row>
      <Row>
        <Input s={6} type='number' label='Quantity' defaultValue='1' name='quantity'></Input>
      </Row>
      <Row>
      <Button>Add Item</Button>
      </Row>
    </form>
  )

}



export default AddItem
