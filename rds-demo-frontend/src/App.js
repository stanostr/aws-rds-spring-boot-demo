import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [products, setProducts] = useState([])

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0.0)

  const postProduct = async (event) => {
    event.preventDefault()
    await Axios.post('http://localhost:8080/products', {
      productName: name,
      price: price
    })
    fetchProducts()
  }

  const fetchProducts = async () => {
    const { data } = await Axios.get('http://localhost:8080/products/all')
    const products = data
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const ProductList = ({ items }) => (
    <table style={{ border: '1px solid black' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={item.productId}>
            <td>{item.productId}</td>
            <td>{item.productName}</td>
            <td>{(Math.round(item.price * 100) / 100).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <div style={{ margin: 20 }}>
      <h2>Products:</h2>
      <ProductList items={products}></ProductList>

      <h2>Add New Product:</h2>
      <form onSubmit={postProduct} style={{ margin: 20 }}>
        <label>
          Product name:
          <input
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Product price:
          <input
            type='number'
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </label>
        <br />
        <input type='submit' />
      </form>
    </div>
  )
}

export default App
