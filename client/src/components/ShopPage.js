import React from 'react';
import './ShopPage.css';

const categories = [
  { name: 'All Products', count: 48 },
  { name: 'Skin Care', count: 12 },
  { name: 'Hair Care', count: 10 },
  { name: 'Baby Care', count: 8 },
  { name: 'Health Care', count: 8 },
  { name: 'Immunity Booster', count: 6 },
  { name: 'Combo Packs', count: 4 }
];

const priceRanges = ['₹0', '₹2,000+'];

const productCards = [
  { name: 'Immunity Booster Tablets', category: 'Health Care', subtitle: 'Best For', price: '₹650', badge: 'BEST FOR', image: '/product1.png' },
  { name: 'Skin Care Cream', category: 'Skin Care', subtitle: 'Popular', price: '₹450', badge: 'POPULAR', image: '/product2.png' },
  { name: 'Hair Nourish Oil', category: 'Hair Care', subtitle: 'Top Rated', price: '₹550', badge: 'TOP RATED', image: '/product3.png' },
  { name: 'Cold & Cough Syrup', category: 'Wellness', subtitle: 'Home Remedy', price: '₹350', badge: 'HOME REMEDY', image: '/product1.png' },
  { name: 'Digestive Drops', category: 'Health Care', subtitle: 'Daily Use', price: '₹299', badge: 'DAILY USE', image: '/product2.png' },
  { name: 'Stress Relief Drops', category: 'Wellness', subtitle: 'Stress', price: '₹299', badge: 'STRESS', image: '/product3.png' },
  { name: 'Baby Care Drops', category: 'Baby Care', subtitle: 'Gentle', price: '₹320', badge: 'GENTLE', image: '/product1.png' },
  { name: 'Women Wellness', category: 'Wellness', subtitle: 'Balanced', price: '₹399', badge: 'BALANCED', image: '/product2.png' },
  { name: 'Combo Pack', category: 'Combo Packs', subtitle: 'Save 20%', price: '₹1,499', badge: 'SAVE 20%', image: '/product3.png' },
  { name: 'Family Wellness Combo Pack', category: 'Combo Packs', subtitle: 'Save 18%', price: '₹1,299', badge: 'SAVE 18%', image: '/product1.png' },
  { name: 'Skin & Hair Care Combo Pack', category: 'Combo Packs', subtitle: 'Save 22%', price: '₹1,299', badge: 'SAVE 22%', image: '/product2.png' },
  { name: 'Complete Wellness Mega Pack', category: 'Combo Packs', subtitle: 'Save 20%', price: '₹1,999', badge: 'SAVE 20%', image: '/product3.png' }
];

const tags = ['Immunity', 'Skin', 'Hair', 'Digestion', 'Stress & Anxiety'];

const ShopPage = () => {
  return (
    <div className="shop-page">
      <section className="shop-hero">
        <div className="shop-left">
          <div className="crumb">Home &gt; Shop</div>
          <h1>Shop Natural<br />Homeopathic<br />Products</h1>
          <p>Safe, effective and 100% natural solutions for you and your family.</p>

          <div className="hero-tags">
            <span>🌿 100% Natural</span>
            <span>🛡️ Safe &amp; Effective</span>
            <span>👨‍👩‍👧 Trusted by Thousands</span>
          </div>
        </div>

        <div className="shop-right">
          <img
            src="/shop%20image.png"
            alt="Aradhya shop products"
            className="shop-hero-image"
          />
        </div>
      </section>

      <div className="shop-pills">
        <div className="pill-item">🚚 Free Shipping</div>
        <div className="pill-item">💳 Secure Payment</div>
        <div className="pill-item">↩️ Easy Returns</div>
        <div className="pill-item">💬 Online Support</div>
      </div>

      <section className="shop-content">
        <aside className="shop-sidebar">
          <div className="filter-block">
            <div className="filter-header">
              <h3>Categories</h3>
            </div>
            <ul>
              {categories.map((category) => (
                <li key={category.name}>
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-block">
            <div className="filter-header">
              <h3>Price Range</h3>
            </div>
            <div className="price-slider">
              <div className="range-track" />
              <div className="range-thumb left" />
              <div className="range-thumb right" />
            </div>
            <div className="price-value-row">
              {priceRanges.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <button className="apply-btn">Apply Filter</button>
          </div>

          <div className="filter-block">
            <div className="filter-header">
              <h3>Form</h3>
            </div>
            <div className="check-list">
              {['Drops', 'Tablets', 'Syrup', 'Cream', 'Powder'].map((form, idx) => (
                <label key={form}>
                  <input type="checkbox" defaultChecked={idx === 0} />
                  <span>{form}</span>
                  <span className="count">{[18, 12, 10, 6, 2][idx]}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="filter-block">
            <div className="filter-header">
              <h3>Best For</h3>
            </div>
            <div className="check-list">
              {tags.map((tag, idx) => (
                <label key={tag}>
                  <input type="checkbox" defaultChecked={idx < 2} />
                  <span>{tag}</span>
                  <span className="count">{[16, 14, 10, 8, 6][idx]}</span>
                </label>
              ))}
            </div>
            <button className="clear-btn">Clear All Filters</button>
          </div>
        </aside>

        <div className="shop-main">
          <div className="shop-toolbar">
            <div className="toolbar-left">Showing 1-12 of 48 products</div>
            <div className="toolbar-right">
              <span>Sort by: Popularity</span>
              <div className="sort-icon">⌄</div>
            </div>
          </div>

          <div className="product-grid">
            {productCards.map((product, index) => (
              <div className="product-card" key={`${product.name}-${index}`}>
                <span className="product-badge">{product.badge}</span>

                <div className="product-image-wrap">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>

                <div className="product-meta">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">
                    {product.category} • {product.subtitle}
                  </p>
                </div>

                <div className="product-price-row">
                  <span className="product-price">{product.price}</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-pagination">
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
            <button className="page">4</button>
            <button className="page next">›</button>
          </div>
        </div>
      </section>

      <section className="shop-banner">
        <div className="banner-emoji">🗓️</div>
        <div className="banner-copy">Special Offers for You!</div>
        <div className="banner-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>

      <section className="benefit-strip">
        {[
          'Natural Ingredients',
          'No Side Effects',
          'Doctor Recommended',
          'Holistic Healing'
        ].map((item, idx) => (
          <div key={item} className="benefit-item">
            <div className="benefit-icon">{['🌿', '✅', '🩺', '🌱'][idx]}</div>
            <div>
              <strong>{item}</strong>
              <p>
                {[
                  'Made with 100% natural homeopathic ingredients.',
                  'Gentle on the body with no harmful side effects.',
                  'Trusted and recommended by experienced homeopaths.',
                  'Treats the root cause and promotes overall well-being.'
                ][idx]}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ShopPage;
