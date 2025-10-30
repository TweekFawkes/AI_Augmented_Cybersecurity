import { useCart } from '../context/CartContext'
import './SuccessModal.css'

const SuccessModal = () => {
  const { isSuccessOpen, closeSuccess, orderNumber } = useCart()

  if (!isSuccessOpen) return null

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="success-content">
          <div className="success-icon">✨🦄✨</div>
          <h2>Order Successful!</h2>
          <p>Your magical unicorn(s) will be delivered soon via rainbow portal!</p>
          <p className="order-number">Order #{orderNumber}</p>
          <button className="btn btn-primary" onClick={closeSuccess}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal

