import React from 'react'
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductDetail from './components/ProductDetail' // المكون الديناميكي الجديد
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
        {/* مسار ديناميكي لكل المنتجات */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;