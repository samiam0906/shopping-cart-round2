import React from 'react'
import { Row, Input, Button } from 'react-materialize'

const AddItem = ({ products, itemAdded}) => {
  const itemWasAdded = (e) => {
    e.preventDefault()
    itemAdded()
  }
  return (
    <form className="container" onSubmit={ itemWasAdded }>
    <Row>
      <Input s={12} label="Choose a Product" type='text' name="productId" >
        { products.map(product => <option key={product.id} value={product.id}>{ product.name }</option>)}
      </Input>
      </Row>
      <Row>
      <Button>Add Item</Button>
      </Row>
    </form>
  )

}



export default AddItem
