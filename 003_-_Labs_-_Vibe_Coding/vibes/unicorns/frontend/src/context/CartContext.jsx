import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('unicornCart')
    if (saved) {
      setCartItems(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('unicornCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const openCheckout = () => {
    setIsCheckoutOpen(true)
    setIsCartOpen(false)
  }
  const closeCheckout = () => setIsCheckoutOpen(false)
  const openSuccess = (orderId) => {
    setOrderNumber(orderId)
    setIsSuccessOpen(true)
    setIsCheckoutOpen(false)
    clearCart()
  }
  const closeSuccess = () => setIsSuccessOpen(false)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal,
      getItemCount,
      isCartOpen,
      openCart,
      closeCart,
      isCheckoutOpen,
      openCheckout,
      closeCheckout,
      isSuccessOpen,
      openSuccess,
      closeSuccess,
      orderNumber
    }}>
      {children}
    </CartContext.Provider>
  )
}

