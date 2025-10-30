import { useCart } from '../context/CartContext'
import './Navbar.css'

const Navbar = () => {
  const { openCart, getItemCount } = useCart()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <span className="unicorn-icon">🦄</span>
          <span className="brand-text">Unicorn Emporium</span>
        </div>
        <div className="nav-links">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('products')} className="nav-link">Unicorns</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button className="cart-btn" onClick={openCart}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{getItemCount()}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

