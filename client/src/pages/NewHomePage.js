import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewHomePage.css';

const NewHomePage = () => {
  // Product data for different sections
  const topSellingProducts = [
    { id: 'bp-care-medicine', name: 'BP Care Medicine', spec: '30 Tablets • Effective Formula', price: '₹750', label: '/bottle', image: '/product1.png' },
    { id: 'asthmaxx-relief', name: 'Asthmaxx Relief', spec: '30 Capsules • Natural Formula', price: '₹850', label: '/pack', image: '/product2.png' },
    { id: 'cervo-go-tablets', name: 'Cervo Go Tablets', spec: 'Pain Relief • 30 Tablets', price: '₹950', label: '/bottle', image: '/product3.png' },
    { id: 'immunity-booster', name: 'Immunity Booster', spec: 'Complete Wellness Pack', price: '₹1,200', label: '/pack', image: '/product1.png' },
    { id: 'hair-care-solution', name: 'Hair Care Solution', spec: 'Natural Growth Formula', price: '₹650', label: '/bottle', image: '/product2.png' },
    { id: 'digestive-care-drops', name: 'Digestive Care Drops', spec: 'Natural Comfort • 30 ml', price: '₹699', label: '/bottle', image: '/product3.png' },
    { id: 'family-immunity-support', name: 'Family Immunity Support', spec: 'Daily Wellness • 30 Tablets', price: '₹999', label: '/pack', image: '/product1.png' },
    { id: 'joint-comfort-formula', name: 'Joint Comfort Formula', spec: 'Natural Relief • 30 ml', price: '₹899', label: '/bottle', image: '/product2.png' },
    { id: 'stress-relief-drops', name: 'Stress Relief Drops', spec: 'Calm Care • 30 ml', price: '₹799', label: '/bottle', image: '/product3.png' },
    { id: 'complete-wellness-pack', name: 'Complete Wellness Pack', spec: 'Everyday Care • Combo Pack', price: '₹1,200', label: '/pack', image: '/product1.png' },
  ];

  const newArrivals = [
    { id: 'advanced-skin-serum', name: 'Advanced Skin Serum', spec: 'Skin Care • New Launch', price: '₹899', image: '/product2.png' },
    { id: 'kids-immunity-plus', name: 'Kids Immunity Plus', spec: 'Baby Care • Fresh Batch', price: '₹749', image: '/product3.png' },
    { id: 'hair-growth-therapy', name: 'Hair Growth Therapy', spec: 'Hair Care • New Launch', price: '₹999', image: '/product1.png' },
    { id: 'wellness-combo-pack', name: 'Wellness Combo Pack', spec: 'Wellness • New Launch', price: '₹1,299', image: '/product2.png' },
    { id: 'natural-glow-kit', name: 'Natural Glow Kit', spec: 'Beauty • New Launch', price: '₹849', image: '/product3.png' },
    { id: 'digestive-care-drops-2', name: 'Digestive Care Drops', spec: 'Health Care • Popular', price: '₹699', image: '/product1.png' },
    { id: 'gentle-baby-lotion', name: 'Gentle Baby Lotion', spec: 'Baby Care • Fresh', price: '₹799', image: '/product2.png' },
    { id: 'holistic-stress-relief', name: 'Holistic Stress Relief', spec: 'Wellness • New Launch', price: '₹1,099', image: '/product3.png' },
    { id: 'digestive-wellness-drops', name: 'Digestive Wellness Drops', spec: 'Health Care • Fresh', price: '₹699', image: '/product1.png' },
    { id: 'daily-immunity-support', name: 'Daily Immunity Support', spec: 'Wellness • New Launch', price: '₹999', image: '/product2.png' },
  ];

  const specialProducts = [
    { name: 'Premium Skin Combo', spec: 'Special Offer • Limited Edition', originalPrice: '₹2,499', price: '₹1,499', discount: '40% OFF', image: '/product3.png' },
    { name: 'Baby Care Complete Kit', spec: 'Special Offer • Limited Edition', originalPrice: '₹1,999', price: '₹1,299', discount: '35% OFF', image: '/product1.png' },
    { name: 'Hair Revival Package', spec: 'Special Offer • Limited Edition', originalPrice: '₹2,999', price: '₹1,799', discount: '40% OFF', image: '/product2.png' },
    { name: 'Family Wellness Bundle', spec: 'Special Offer • Limited Edition', originalPrice: '₹3,999', price: '₹2,499', discount: '38% OFF', image: '/product3.png' },
    { name: 'Complete Beauty Set', spec: 'Special Offer • Limited Edition', originalPrice: '₹2,999', price: '₹1,899', discount: '37% OFF', image: '/product1.png' },
    { name: 'Immunity Care Combo', spec: 'Special Offer • Limited Edition', originalPrice: '₹2,399', price: '₹1,599', discount: '33% OFF', image: '/product2.png' },
    { name: 'Digestive Comfort Pack', spec: 'Special Offer • Limited Edition', originalPrice: '₹1,799', price: '₹1,199', discount: '33% OFF', image: '/product3.png' },
    { name: 'Stress Relief Collection', spec: 'Special Offer • Limited Edition', originalPrice: '₹2,199', price: '₹1,399', discount: '36% OFF', image: '/product1.png' },
    { name: 'Joint Comfort Bundle', spec: 'Special Offer • Limited Edition', originalPrice: '₹2,699', price: '₹1,699', discount: '37% OFF', image: '/product2.png' },
    { name: 'Family Protection Pack', spec: 'Special Offer • Limited Edition', originalPrice: '₹3,499', price: '₹2,299', discount: '34% OFF', image: '/product3.png' },
  ];

  const featuredProducts = [
    { tag: 'Aradhya Baby Care', heading: 'Nourish your baby\'s skin the natural way.', gradient: 'pink' },
    { tag: 'Gentle Pediatric Solutions', heading: 'Keep your baby\'s smile on with Aradhya products.', gradient: 'blue' },
    { tag: 'Botanical Hair Care', heading: 'Healthy Hairs, The Natural Solution.', gradient: 'green' },
    { tag: 'Holistic Dermatological Care', heading: 'Nourish your skin the natural way.', gradient: 'sand' },
  ];

  const categories = [
    { title: 'Skin Care', desc: 'Natural solutions for healthy glowing skin', items: [{ icon: '🧴', name: 'Face Care' }, { icon: '✨', name: 'Body Care' }] },
    { title: 'Hair Care', desc: 'Strengthen & nourish your hair naturally', items: [{ icon: '🌿', name: 'Hair Oil' }, { icon: '💧', name: 'Hair Serum' }] },
    { title: 'Baby Care', desc: 'Gentle & safe products for your baby', items: [{ icon: '🍼', name: 'Baby Oil' }, { icon: '🌸', name: 'Baby Cream' }] },
    { title: 'Health Care', desc: 'Complete wellness solutions for all ages', items: [{ icon: '🛡️', name: 'Immunity' }, { icon: '🌱', name: 'Digestion' }] },
    { title: 'Immunity Care', desc: 'Everyday support for natural vitality', items: [{ icon: '💧', name: 'Immunity Drops' }, { icon: '🍃', name: 'Seasonal Care' }] },
    { title: 'Digestive Care', desc: 'Gentle remedies for comfortable digestion', items: [{ icon: '🌿', name: 'Digestive Drops' }, { icon: '🍋', name: 'Acidity Care' }] },
    { title: 'Stress Relief', desc: 'Calm & balanced care for modern lives', items: [{ icon: '🌙', name: 'Sleep Support' }, { icon: '🧘', name: 'Calm Care' }] },
    { title: 'Joint Care', desc: 'Natural comfort for active everyday living', items: [{ icon: '🦴', name: 'Pain Relief' }, { icon: '🚶', name: 'Mobility Care' }] },
  ];

  return (
    <div className="new-homepage">
      {/* Top Ticker */}
      <div className="top-ticker">
        🌿 Certified Classical Pharmacopeia Formulations &bull; <span>Free Clinical Consultation on Orders Above ₹499</span>
      </div>

      {/* Seasonal Festivity Ribbon */}
      <section className="seasonal-ribbon">
        <div className="seasonal-inner">
          <div className="festive-bottles-strip">
            <div className="festive-bottle">
              <span style={{ fontSize: '14px' }}>💊</span>
              Cervo Go
            </div>
            <div className="festive-bottle">
              <span style={{ fontSize: '14px' }}>🌿</span>
              Asthamax
            </div>
            <div className="festive-bottle">
              <span style={{ fontSize: '14px' }}>❤️</span>
              B.P. Care
            </div>
          </div>
          <div className="festive-headline">रक्षाबंधन Special Wellness Offer</div>
          <div className="festive-badge">20% OFF &bull; Buy 1 Get 2 Free!</div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="new-home-container hero-grid">
          <div className="hero-content">
            <div className="hero-badge-tag">✦ Classical Holistic Healing Sanctuary</div>
            <h1 className="hero-title">
              Find Natural Healing
              <span>With Homeopathy</span>
            </h1>
            <p className="hero-lead">
              Connect with India's top-rated <strong>homeopathy experts</strong>. Individualized root-cause care, gentle constitutional evaluation, and <strong>100% natural</strong> certified medicines.
            </p>
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-hero-primary">Book Consultation Free</Link>
              <Link to="/shop" className="btn-hero-secondary">Order Medicines</Link>
            </div>
          </div>
          <div className="hero-art-frame">
            <div className="caduceus-glow-orb">
              <img 
                src="/homeopathy symbol .png" 
                alt="Homeopathy Symbol"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <div className="hero-stat-floating">
              <div className="stat-circle">★</div>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: 800, color: 'var(--primary-dark)' }}>4.9 / 5.0 Rating</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>25,000+ Verified Patient Consultations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Top Selling Products */}
      <section className="new-home-container" id="medicines">
        <div className="section-header-row">
          <div>
            <h2 className="section-title-new">Top Selling Products</h2>
          </div>
          <Link to="/shop" className="view-all-link-new">Explore More Remedies &rarr;</Link>
        </div>
        
        <div className="product-grid-5">
          {topSellingProducts.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index} className="product-card-new has-special-strip">
              <div className="badge-special-strip badge-green">
                <span>BESTSELLER</span>
                <span>TOP PICK</span>
              </div>
              <div className="product-image-container-new">
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '10px'
                  }}
                />
              </div>
              <div>
                <h3 className="product-name-new">{product.name}</h3>
                <p className="product-spec-new">{product.spec}</p>
              </div>
              <div className="product-bottom-new">
                <div className="product-price-new">
                  {product.price} <span>{product.label}</span>
                </div>
                <button className="btn-product-action">Details &rarr;</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 2: New Arrivals */}
      <section className="new-home-container">
        <div className="section-header-row">
          <div>
            <h2 className="section-title-new">New Arrivals</h2>
          </div>
          <Link to="/shop" className="view-all-link-new">Explore More &rarr;</Link>
        </div>
        
        <div className="product-grid-5">
          {newArrivals.map((product, index) => (
            <Link to={`/product/${product.id}`} key={index} className="product-card-new has-special-strip">
              <div className="badge-special-strip badge-green">
                <span>NEW</span>
                <span>FRESH</span>
              </div>
              <div className="product-image-container-new">
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '10px'
                  }}
                />
              </div>
              <div>
                <h3 className="product-name-new">{product.name}</h3>
                <p className="product-spec-new">{product.spec}</p>
              </div>
              <div className="product-bottom-new">
                <div className="product-price-new">{product.price}</div>
                <button className="btn-product-action">Details &rarr;</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: Featured Products */}
      <section className="new-home-container">
        <div className="section-header-row">
          <div>
            <h2 className="section-title-new">Featured Products</h2>
          </div>
          <Link to="/shop" className="view-all-link-new">Explore More &rarr;</Link>
        </div>
        
        <div className="featured-grid-4">
          {featuredProducts.map((item, index) => (
            <Link to="/shop" key={index} className="banner-poster-card">
              <div className={`poster-inner ${item.gradient}`}>
                <div>
                  <div className="poster-brand-tag">{item.tag}</div>
                  <h3 className="poster-heading">{item.heading}</h3>
                </div>
                <button className="btn-poster-cta">Shop Collection</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: Categories */}
      <section className="new-home-container" id="categories">
        <div className="section-header-row">
          <div>
            <h2 className="section-title-new">Categories</h2>
          </div>
        </div>
        
        <div className="category-grid-4">
          {categories.map((cat, index) => (
            <div key={index} className="category-box">
              <div className="cat-head-row">
                <div className="cat-title-text">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
                <Link to="/category" className="cat-pill-link">Explore &rarr;</Link>
              </div>
              <div className="cat-items-pair">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="cat-sub-item">
                    <div className="cat-sub-icon-box">{item.icon}</div>
                    <div className="cat-sub-name">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Special Products */}
      <section className="new-home-container" id="special">
        <div className="section-header-row">
          <div>
            <h2 className="section-title-new">Special Products</h2>
          </div>
          <Link to="/combo-pack" className="view-all-link-new">View All Combos &rarr;</Link>
        </div>
        
        <div className="product-grid-5">
          {specialProducts.map((product, index) => (
            <Link to="/combo" key={index} className="product-card-new has-special-strip">
              <div className="badge-special-strip badge-green">
                <span>SPECIAL</span>
                <span>{product.discount}</span>
              </div>
              <div className="product-image-container-new">
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '10px'
                  }}
                />
              </div>
              <div>
                <h3 className="product-name-new">{product.name}</h3>
                <p className="product-spec-new">{product.spec}</p>
              </div>
              <div className="product-bottom-new">
                <div className="product-price-new">
                  <span className="strike-price">{product.originalPrice}</span>
                  {product.price}
                </div>
                <button className="btn-product-action">Details &rarr;</button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 6: Product Expo */}
      <section className="expo-wrapper" id="expo">
        <div className="new-home-container">
          <div className="section-header-row" style={{ marginTop: 0 }}>
            <div>
              <h2 className="section-title-new">Aradhya Product Expo</h2>
            </div>
          </div>
          
          <div className="expo-cards-showcase">
            <div className="expo-flyer-card">
              <div className="expo-tag">Baby Care</div>
              <div className="expo-name">Gentle Pediatric Solutions</div>
              <div style={{ fontSize: '34px' }}>👶</div>
            </div>
            <div className="expo-flyer-card">
              <div className="expo-tag">Oral Wellness</div>
              <div className="expo-name">Keep Baby's Smile Natural</div>
              <div style={{ fontSize: '34px' }}>🍼</div>
            </div>
            <div className="expo-flyer-card highlight">
              <div className="expo-tag" style={{ color: 'var(--accent-green)' }}>Featured Star Formulation</div>
              <div className="expo-name" style={{ fontSize: '16px', fontWeight: 800 }}>Healthy Hairs, The Natural Solution</div>
              <div style={{ fontSize: '36px' }}>🌿</div>
            </div>
            <div className="expo-flyer-card">
              <div className="expo-tag">Dermato-Care</div>
              <div className="expo-name">Nourish Skin Naturally</div>
              <div style={{ fontSize: '34px' }}>✨</div>
            </div>
            <div className="expo-flyer-card">
              <div className="expo-tag">Herbal Extracts</div>
              <div className="expo-name">Pure Herbal Formulation</div>
              <div style={{ fontSize: '34px' }}>🧴</div>
            </div>
          </div>

          <div className="expo-table-card">
            <table className="expo-table">
              <tbody>
                <tr>
                  <td className="expo-cell-label">Product Title</td>
                  <td className="expo-cell-val">Hair Care Solution</td>
                </tr>
                <tr>
                  <td className="expo-cell-label">About Product</td>
                  <td className="expo-cell-val" style={{ color: '#475569', fontWeight: 500 }}>Natural homeopathic treatment for hair fall, dandruff, follicle nourishment and overall scalp health.</td>
                </tr>
                <tr>
                  <td className="expo-cell-label">Benefit of Product</td>
                  <td className="expo-cell-val">&bull; Prevents Chronic Hair Fall<br />&bull; Stimulates Micro-Capillary Growth<br />&bull; Restores Natural Luster &amp; Shine</td>
                </tr>
                <tr>
                  <td className="expo-cell-label">Standard Quality Batch</td>
                  <td className="expo-cell-val">HPI Certified &bull; Released 20 Aug 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 7: Patient Testimonial */}
      <section className="new-home-container">
        <div className="section-header-row">
          <div>
            <h2 className="section-title-new">Patient Testimonial</h2>
          </div>
        </div>
        
        <div className="testimonial-frame">
          <div className="testimonial-body">
            <div>
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">
                Very happy with the guidance and follow-up care. The medical team listens carefully and recommends simple, classical natural treatment options that treat the root cause without any side effects.
              </p>
            </div>
            <div className="testimonial-author-row">
              <div className="author-info-group">
                <div className="author-avatar">KS</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--primary-dark)' }}>Karan Singh</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Verified Patient &bull; New Delhi</div>
                </div>
              </div>
              <div className="carousel-nav-arrows">
                <button className="nav-arrow-btn green">&larr;</button>
                <button className="nav-arrow-btn">&rarr;</button>
              </div>
            </div>
          </div>
          <div className="testimonial-art-side">
            <div className="mortar-medallion">
              <div style={{ fontSize: '42px', marginBottom: '4px' }}>🥣</div>
              <div style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '1.5px', color: 'var(--primary-dark)' }}>ARADHYA</div>
              <div style={{ fontSize: '9px', fontWeight: 700, color: 'var(--accent-green)', letterSpacing: '1px' }}>100% PURITY</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Homoeopathic Approach */}
      <section className="new-home-container" id="approach">
        <div className="approach-card">
          <h2>
            Homoeopathic<br />
            Approach
          </h2>
          <div className="approach-line"></div>
          <p>
            At Aradhya, we believe there's a better way to feel better with homoeopathic. Discover this holistic system of medicine and all the transformative benefits it can offer to your lifestyle.
          </p>
          <Link to="/about" className="btn-hero-primary" style={{ display: 'inline-block' }}>Learn About Homeopathy</Link>
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;
