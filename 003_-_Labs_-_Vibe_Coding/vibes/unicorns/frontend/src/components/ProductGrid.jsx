import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { productAPI } from '../services/api'
import ProductCard from './ProductCard'
import './ProductGrid.css'

const ProductGrid = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeFilter, setActiveFilter] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await productAPI.getAll()
      setProducts(response.data)
      setFilteredProducts(response.data)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching products:', err)
      setError('Failed to load products. Using sample data.')
      // Fallback to sample data if API fails
      const sampleProducts = getSampleProducts()
      setProducts(sampleProducts)
      setFilteredProducts(sampleProducts)
      setLoading(false)
    }
  }

  const getSampleProducts = () => [
    {
      id: 1,
      name: 'Sparkle Supreme',
      price: 9999,
      category: 'classic',
      image: '🦄',
      description: 'A classic white unicorn with a golden horn and the ability to grant wishes',
      features: ['Wish Granting', 'Night Vision', 'Gentle Temperament']
    },
    {
      id: 2,
      name: 'Rainbow Dash',
      price: 12999,
      category: 'rainbow',
      image: '🌈',
      description: 'Creates rainbows wherever it goes. Perfect for parties and special events',
      features: ['Rainbow Creation', 'Super Speed', 'Weather Control']
    },
    {
      id: 3,
      name: 'Celestial Star',
      price: 15999,
      category: 'celestial',
      image: '⭐',
      description: 'Born from stardust with cosmic powers. Glows beautifully at night',
      features: ['Starlight Aura', 'Teleportation', 'Cosmic Wisdom']
    },
    {
      id: 4,
      name: 'Mystic Moon',
      price: 14999,
      category: 'celestial',
      image: '🌙',
      description: 'Silver-maned beauty with lunar powers. Guards dreams and prevents nightmares',
      features: ['Dream Protection', 'Moonbeam', 'Peaceful Presence']
    },
    {
      id: 5,
      name: 'Fire Phoenix',
      price: 18999,
      category: 'rare',
      image: '🔥',
      description: 'Rare fire unicorn with phoenix-like abilities. Can be reborn from flames',
      features: ['Fire Immunity', 'Rebirth', 'Heat Generation']
    },
    {
      id: 6,
      name: 'Crystal Princess',
      price: 11999,
      category: 'classic',
      image: '💎',
      description: 'Adorned with magical crystals. Her mane sparkles like diamonds',
      features: ['Crystal Magic', 'Healing Powers', 'Royal Lineage']
    },
    {
      id: 7,
      name: 'Thunder Strike',
      price: 16999,
      category: 'rare',
      image: '⚡',
      description: 'Commands thunder and lightning. Protects against dark forces',
      features: ['Lightning Control', 'Storm Summoning', 'Electric Speed']
    },
    {
      id: 8,
      name: 'Bubble Bliss',
      price: 10999,
      category: 'rainbow',
      image: '🫧',
      description: 'Creates magical bubbles that carry joy and laughter. Perfect for children',
      features: ['Bubble Magic', 'Joy Aura', 'Gentle Nature']
    },
    {
      id: 9,
      name: 'Cherry Blossom',
      price: 13999,
      category: 'rainbow',
      image: '🌸',
      description: 'Spring unicorn that makes flowers bloom. Brings new life wherever she walks',
      features: ['Flower Growth', 'Spring Magic', 'Healing Touch']
    }
  ]

  const handleFilter = (category) => {
    setActiveFilter(category)
    if (category === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.category === category))
    }
  }

  if (loading) {
    return (
      <section className="products-section" id="products">
        <div className="container">
          <h2 className="section-title">Our Magical Collection</h2>
          <div className="loading">Loading magical unicorns... 🦄</div>
        </div>
      </section>
    )
  }

  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">Our Magical Collection</h2>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilter('all')}
          >
            All Unicorns
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'classic' ? 'active' : ''}`}
            onClick={() => handleFilter('classic')}
          >
            Classic
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'rainbow' ? 'active' : ''}`}
            onClick={() => handleFilter('rainbow')}
          >
            Rainbow
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'celestial' ? 'active' : ''}`}
            onClick={() => handleFilter('celestial')}
          >
            Celestial
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'rare' ? 'active' : ''}`}
            onClick={() => handleFilter('rare')}
          >
            Rare
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid

