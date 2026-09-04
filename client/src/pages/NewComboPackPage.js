import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewComboPackPage.css';

const NewComboPackPage = () => {
  const insideProducts = [
    { id: 1, emoji: '🌿', title: 'Cough Syrup', volume: '200 ml' },
    { id: 2, emoji: '💧', title: 'Digestive Drops', volume: '30 ml' },
    { id: 3, emoji: '🛡️', title: 'Immunity Booster', volume: '60 Tablets' },
    { id: 4, emoji: '✨', title: 'Skin Care Cream', volume: '50 g' },
    { id: 5, emoji: '🌙', title: 'Stress Relief Drops', volume: '30 ml' },
    { id: 6, emoji: '🧴', title: 'Skin Care Cream', volume: '25 g' },
    { id: 7, emoji: '🌱', title: 'Digestive Drops', volume: '10 ml' }
  ];

  const benefits = [
    {
      icon: '✦',
      title: 'Complete Care',
      description: 'All essential remedies for common health concerns in one convenient pack.'
    },
    {
      icon: '✦',
      title: 'Natural & Safe',
      description: 'Made with 100% natural ingredients, completely safe for the whole family.'
    },
    {
      icon: '✦',
      title: 'Holistic Wellness',
      description: 'Supports immunity, digestion, skin health, and overall well-being.'
    },
    {
      icon: '✦',
      title: 'Value for Money',
      description: 'Save significantly more with this thoughtfully curated holistic combo pack.'
    }
  ];

  const reviews = [
    {
      stars: 5,
      quote: 'This combo pack is amazing! It has everything my family needs for everyday health issues. Highly recommended!',
      name: 'Priya Sharma',
      city: 'Delhi',
      avatar: 'P'
    },
    {
      stars: 5,
      quote: 'Great quality products. The immunity booster and stress relief drops really worked well for me and my family.',
      name: 'Rohit Verma',
      city: 'Lucknow',
      avatar: 'R'
    },
    {
      stars: 5,
      quote: 'Natural, effective and safe. I love that all essential remedies come together in one single combo pack.',
      name: 'Anjali Mehta',
      city: 'Bangalore',
      avatar: 'A'
    }
  ];

  const handleAddToCart = () => {
    alert('Product added to cart!');
  };

  const handleBuyNow = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div className="new-combo-pack-page">
      {/* Breadcrumbs */}
      <div className="container breadcrumbs">
        <Link to="/">Home</Link> &gt; <Link to="/combo-pack">Combo Pack</Link> &gt;{' '}
        <span style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>
          Complete Wellness Combo Pack
        </span>
      </div>

      {/* Hero Section */}
      <section className="container combo-hero">
        <div className="hero-split-grid">
          {/* Left Details */}
          <div>
            <h1 className="combo-title">
              Complete Wellness
              <br />
              Combo Pack
            </h1>
            <div className="combo-subtitle">Natural Care for You & Your Family</div>
            <p className="combo-desc">
              A complete homeopathic care solution for everyday health concerns. Made with 100% natural ingredients to support immunity, skin health, stress relief, digestion and overall well-being.
            </p>

            {/* Feature Pills */}
            <div className="trait-pills-row">
              <span className="trait-pill">🌿 Natural</span>
              <span className="trait-pill">🛡️ Safe & Effective</span>
              <span className="trait-pill">👨‍👩‍👧‍👦 Trusted by Families</span>
            </div>

            {/* Price Breakdown */}
            <div className="price-row">
              <span className="current-price">₹2,499</span>
              <span className="original-price">₹3,499</span>
              <span className="discount-tag">29% OFF</span>
            </div>

            {/* CTA Buttons */}
            <div className="hero-btn-row">
              <button type="button" className="btn-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button type="button" className="btn-buy" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            {/* Micro Badges */}
            <div className="micro-badges-row">
              <span>🚚 Free Shipping</span>
              <span>🔒 Secure Payment</span>
              <span>↩️ Easy Return</span>
            </div>
          </div>

          {/* Right Presentation Frame */}
          <div className="hero-visual-no-bg">
            <img 
              src="/combo page .png" 
              alt="Complete Wellness Combo Pack" 
              style={{
                width: '100%',
                maxWidth: '650px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="container">
        <div className="section-title-wrap">
          <h2 className="section-title-main">
            <span className="section-arrow">&rarr;</span>
            What's Inside the Combo Pack?
            <span className="section-arrow">&larr;</span>
          </h2>
        </div>

        {/* Row 1: 4 Products */}
        <div className="inside-grid-4">
          {insideProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="inside-card">
              <div className="inside-img-placeholder">
                <span>{product.emoji}</span>
              </div>
              <h3 className="inside-item-title">{product.title}</h3>
              <div className="inside-item-volume">{product.volume}</div>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Products Centered */}
        <div className="inside-grid-3">
          {insideProducts.slice(4, 7).map((product) => (
            <div key={product.id} className="inside-card">
              <div className="inside-img-placeholder">
                <span>{product.emoji}</span>
              </div>
              <h3 className="inside-item-title">{product.title}</h3>
              <div className="inside-item-volume">{product.volume}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits of the Combo Pack */}
      <section className="container">
        <div className="section-title-wrap">
          <h2 className="section-title-main">Benefit's of the Combo Pack</h2>
        </div>
        <div className="benefits-grid-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-star-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-desc">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance Banner */}
      <section className="container">
        <div className="qa-banner-wrap">
          <div className="qa-mortar-frame">🥣</div>
          <div>
            <div className="qa-badges-grid">
              <div className="qa-pill-badge">
                <span>🌿</span> Natural Ingredients
              </div>
              <div className="qa-pill-badge">
                <span>🧪</span> Homeopathic Formulation
              </div>
              <div className="qa-pill-badge">
                <span>✅</span> ISO Certified
              </div>
              <div className="qa-pill-badge">
                <span>🏅</span> GMP Quality Assured
              </div>
            </div>
            <p className="qa-note-text">
              Our products are made with the finest natural ingredients and follow strict quality standards to ensure safety, purity, and clinical effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* What Our Customers Say */}
      <section className="container">
        <div className="section-title-wrap">
          <h2 className="section-title-main">What Our Customers Say</h2>
        </div>
        <div className="reviews-grid-3">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div>
                <div className="review-stars">{'★'.repeat(review.stars)}</div>
                <p className="review-quote">"{review.quote}"</p>
              </div>
              <div className="reviewer-row">
                <div className="reviewer-avatar">{review.avatar}</div>
                <div>
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-city">{review.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewComboPackPage;
