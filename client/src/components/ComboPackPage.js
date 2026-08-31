import React from 'react';
import './ComboPackPage.css';

const productItems = [
  {
    name: 'Cough Syrup',
    size: '200 ml',
    accent: 'green'
  },
  {
    name: 'Digestive Drops',
    size: '30 ml',
    accent: 'blue'
  },
  {
    name: 'Immunity Booster',
    size: '60 Tablets',
    accent: 'purple'
  },
  {
    name: 'Skin Care Cream',
    size: '50 g',
    accent: 'yellow'
  },
  {
    name: 'Stress Relief Drops',
    size: '30 ml',
    accent: 'pink'
  },
  {
    name: 'Skin Care Cream',
    size: '25 g',
    accent: 'teal'
  },
  {
    name: 'Digestive Drops',
    size: '10 ml',
    accent: 'orange'
  }
];

const benefits = [
  {
    title: 'Complete Care',
    text: 'All essential remedies for common health concerns in one pack.'
  },
  {
    title: 'Natural & Safe',
    text: 'Made with 100% natural ingredients, safe for the whole family.'
  },
  {
    title: 'Holistic Wellness',
    text: 'Supports immunity, digestion, skin health, and overall well-being.'
  },
  {
    title: 'Value for Money',
    text: 'Save more with this thoughtfully curated combo pack.'
  }
];

const testimonials = [
  {
    quote: 'This combo pack is amazing! It has everything my family needs for everyday health issues. Highly recommended!',
    name: 'Priya Sharma',
    place: 'Delhi',
    avatar: 'P'
  },
  {
    quote: 'Great quality products. The immunity booster and stress relief drops really worked well for me and my family.',
    name: 'Rohit Verma',
    place: 'Lucknow',
    avatar: 'R'
  },
  {
    quote: 'Natural, effective and safe. I love that all essential remedies come together in one combo pack.',
    name: 'Anjali Mehta',
    place: 'Bangalore',
    avatar: 'A'
  }
];

const ComboPackPage = () => {
  return (
    <div className="combo-page">
      <div className="combo-shell">
        <section className="combo-product-section">
          <div className="combo-left">
            <div className="crumbs">Home &gt; Combo Pack &gt; Complete Wellness Combo Pack</div>

            <h1>Complete Wellness<br />Combo Pack</h1>
            <div className="tagline">Natural Care for You &amp; Your Family</div>

            <p>
              A complete homeopathic care solution for everyday health concerns. Made with 100% natural ingredients to support immunity, skin health, stress relief, digestion and overall well-being.
            </p>

            <div className="feature-badges">
              <span>🌿 Natural</span>
              <span>🛡️ Safe &amp; Effective</span>
              <span>👨‍👩‍👧‍👦 Trusted by Families</span>
            </div>

            <div className="price-row">
              <div className="price-value">₹2,499</div>
              <div className="old-price">₹3,499</div>
              <div className="discount">29% OFF</div>
            </div>

            <div className="cta-row">
              <button className="primary-btn">Add to Cart</button>
              <button className="secondary-btn">Buy Now</button>
            </div>

            <div className="delivery-row">
              <div className="mini-info">🚚 Free Shipping</div>
              <div className="mini-info">🔒 Secure Payment</div>
              <div className="mini-info">↩️ Easy Return</div>
            </div>
          </div>

          <div className="combo-right">
            <div className="brand-badge">Complete<br />Family<br />Wellness</div>

            <div className="showcase-box">
              <div className="pack-hero">
                <div className="hero-pack-title">Aradhya</div>
                <div className="hero-pack-sub">Complete Wellness<br />Combo Pack</div>
                <div className="hero-pack-small">Natural Care for You &amp; Your Family</div>
              </div>

              <div className="mini-bottle bottle-1"><span>Aradhya</span></div>
              <div className="mini-bottle bottle-2"><span>Aradhya</span></div>
              <div className="mini-bottle bottle-3"><span>Aradhya</span></div>
              <div className="mini-bottle bottle-4"><span>Aradhya</span></div>
              <div className="mini-bottle bottle-5"><span>Aradhya</span></div>
            </div>
          </div>
        </section>

        <section className="inside-pack">
          <div className="section-heading with-arrow">
            <span className="arrow-left">→</span>
            <h2>What's Inside the Combo Pack?</h2>
            <span className="arrow-right">←</span>
          </div>

          <div className="product-grid">
            {productItems.map((item, index) => (
              <div className="pack-item" key={`${item.name}-${index}`}>
                <div className={`mini-visual ${item.accent}`}>
                  <div className="mini-cap" />
                  <div className="mini-body" />
                </div>
                <h3>{item.name}</h3>
                <div className="pack-meta">
                  <span>{item.size}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-heading compact">
            <h2>Benefit's of the Combo Pack</h2>
          </div>

          <div className="benefit-grid">
            {benefits.map((item) => (
              <div className="benefit-card" key={item.title}>
                <div className="benefit-icon">✦</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="ingredients-section">
          <div className="ingredient-header">
            <div className="ingredient-visual">
              <div className="mortar" />
              <div className="green-leaf leaf-a" />
              <div className="green-leaf leaf-b" />
            </div>
            <div className="ingredient-grid">
              <div className="ingredient-item">
                <div className="ingredient-icon">🌿</div>
                <h4>Natural Ingredients</h4>
              </div>
              <div className="ingredient-item">
                <div className="ingredient-icon">🧪</div>
                <h4>Homeopathic Formulation</h4>
              </div>
              <div className="ingredient-item">
                <div className="ingredient-icon">✅</div>
                <h4>ISO Certified</h4>
              </div>
              <div className="ingredient-item">
                <div className="ingredient-icon">🏅</div>
                <h4>GMP Quality Assured</h4>
              </div>
            </div>
          </div>

          <p className="ingredients-copy">
            Our products are made with the finest natural ingredients and follow strict quality standards to ensure safety, purity and effectiveness.
          </p>
        </section>

        <section className="testimonials-section">
          <div className="section-heading compact center">
            <h2>What Our Customers Say</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.name}>
                <div className="stars">★★★★★</div>
                <p>“{testimonial.quote}”</p>
                <div className="reviewer">
                  <div className="avatar">{testimonial.avatar}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.place}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComboPackPage;
