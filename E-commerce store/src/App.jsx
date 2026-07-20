// E-commerce store
import React from 'react'
import Home from './components/Home'
import CheckOut from './components/CheckOut'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
