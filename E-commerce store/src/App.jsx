import React, { useState } from 'react'
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductDetail from './components/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => String(item.id) === String(product.id))
      const currentQty = existing ? existing.quantity : 0

      if (currentQty + quantity > product.Stock) {
        return prevItems
      }

      if (existing) {
        return prevItems.map(item =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prevItems, { ...product, quantity }]
    })
  }

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (String(item.id) === String(id)) {
            const newQty = item.quantity + amount
            if (amount > 0 && newQty > item.Stock) {
              return item
            }
            return { ...item, quantity: newQty }
          }
          return item
        })
        .filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = id => {
    setCartItems(prevItems => prevItems.filter(item => String(item.id) !== String(id)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <Router>
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} cartItems={cartItems} />} />
        <Route
          path="/CheckOut"
          element={
            <CheckOut
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} cartItems={cartItems} updateQuantity={updateQuantity} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App