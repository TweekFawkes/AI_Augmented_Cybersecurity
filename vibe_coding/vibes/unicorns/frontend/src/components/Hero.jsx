import './Hero.css'

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to the Unicorn Emporium</h1>
        <p className="hero-subtitle">Discover the most magical unicorns in the realm</p>
        <button onClick={scrollToProducts} className="btn btn-primary">
          Browse Collection
        </button>
      </div>
      <div className="hero-decoration">
        <span className="floating-unicorn">🦄</span>
        <span className="floating-star">⭐</span>
        <span className="floating-sparkle">✨</span>
      </div>
    </section>
  )
}

export default Hero

