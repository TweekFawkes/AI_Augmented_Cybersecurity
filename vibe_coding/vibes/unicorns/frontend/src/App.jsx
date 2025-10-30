import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import Cart from './components/Cart'
import CheckoutModal from './components/CheckoutModal'
import SuccessModal from './components/SuccessModal'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <ProductGrid />
                <About />
              </>
            } />
          </Routes>
          <Cart />
          <CheckoutModal />
          <SuccessModal />
          <Footer />
        </div>
      </CartProvider>
    </Router>
  )
}

export default App

