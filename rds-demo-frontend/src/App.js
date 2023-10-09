import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [products, setProducts] = useState([])

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
      <h2>Product List:</h2>
      <ProductList items={products}></ProductList>
    </div>
  )
}

export default App
