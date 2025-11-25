import { useCart } from '../context/CartContext'
import './Cart.css'

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotal,
    isCartOpen,
    closeCart,
    openCheckout
  } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      <div className="cart-overlay" onClick={closeCart}></div>
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={closeCart}>✕</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🛒</span>
              <p>Your cart is empty</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">{item.image}</div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price.toLocaleString()}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">${getTotal().toLocaleString()}</span>
            </div>
            <button className="btn btn-checkout" onClick={openCheckout}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart

