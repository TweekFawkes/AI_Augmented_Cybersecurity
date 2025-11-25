import './About.css'

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to the Unicorn Emporium, where dreams come true and magic is real! 
              We've been breeding and caring for the finest unicorns in the realm for over 500 years.
            </p>
            <p>
              Each of our unicorns is hand-raised with love, fed only the finest rainbow hay, 
              and trained in the ancient arts of magic and sparkles.
            </p>
          </div>
          
          <div className="features">
            <div className="feature">
              <span className="feature-icon">🌟</span>
              <h3>Premium Quality</h3>
              <p>Only the finest magical creatures</p>
            </div>
            <div className="feature">
              <span className="feature-icon">💖</span>
              <h3>Ethically Raised</h3>
              <p>Free-range rainbow meadows</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🚀</span>
              <h3>Fast Delivery</h3>
              <p>Express rainbow portal shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

