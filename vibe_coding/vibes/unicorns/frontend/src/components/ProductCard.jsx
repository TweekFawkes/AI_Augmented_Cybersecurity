import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-emoji">{product.image}</span>
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-features">
          {product.features?.map((feature, index) => (
            <span key={index} className="feature-tag">✨ {feature}</span>
          ))}
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString()}</span>
          <button 
            className={`btn-add-to-cart ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? 'Added! ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

