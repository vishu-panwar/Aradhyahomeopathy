import React from 'react';
import './CategoryPage.css';

const categories = [
  { name: 'All Categories', count: 48 },
  { name: 'Skin Care', count: 12 },
  { name: 'Hair Care', count: 10 },
  { name: 'Baby Care', count: 8 },
  { name: 'Health Care', count: 8 },
  { name: 'Immunity Booster', count: 6 },
  { name: 'Women Wellness', count: 6 },
  { name: 'Digestive Care', count: 6 },
  { name: 'Respiratory Care', count: 5 },
  { name: 'Pain Relief', count: 5 },
  { name: 'Mental Wellness', count: 4 },
  { name: 'Detox & Cleanse', count: 4 },
  { name: 'Heart Care', count: 3 },
  { name: 'Diabetes Care', count: 3 },
  { name: 'Eye Care', count: 2 },
  { name: 'Thyroid Care', count: 2 },
  { name: 'Men’s Health', count: 2 },
  { name: 'Elderly Care', count: 2 }
];

const products = [
  { name: 'Skin Care', title: 'Natural solutions for healthy skin', count: 12, accent: 'green' },
  { name: 'Hair Care', title: 'Strengthen, nourish and promote healthy hair.', count: 10, accent: 'gold' },
  { name: 'Baby Care', title: 'Gentle and safe care for your little ones.', count: 8, accent: 'pink' },
  { name: 'Health Care', title: 'Daily wellness and general health support.', count: 8, accent: 'blue' },
  { name: 'Immunity Booster', title: 'Boost immunity and stay protected naturally.', count: 6, accent: 'green2' },
  { name: 'Women Wellness', title: 'Care for every stage of a woman’s life.', count: 6, accent: 'purple' },
  { name: 'Digestive Care', title: 'Improve digestion and gut health naturally.', count: 6, accent: 'teal' },
  { name: 'Respiratory Care', title: 'Relief from cough, cold and breathing issues.', count: 5, accent: 'brown' },
  { name: 'Pain Relief', title: 'Natural relief from pain and inflammation.', count: 5, accent: 'pink2' },
  { name: 'Mental Wellness', title: 'Support for stress, anxiety and better sleep.', count: 4, accent: 'purple2' },
  { name: 'Detox & Cleanse', title: 'Detoxify and rejuvenate your body naturally.', count: 4, accent: 'sage' },
  { name: 'Heart Care', title: 'Support heart health and circulation.', count: 3, accent: 'amber' },
  { name: 'Diabetes Care', title: 'Help manage blood sugar levels naturally.', count: 3, accent: 'mint' },
  { name: 'Eye Care', title: 'Care for sharp and healthy vision.', count: 2, accent: 'teal2' },
  { name: 'Thyroid Care', title: 'Support thyroid function naturally.', count: 2, accent: 'orange' },
  { name: 'Men’s Health', title: 'Improve vitality, stamina and wellness.', count: 2, accent: 'navy' },
  { name: 'Elderly Care', title: 'Gentle support for everyday vitality.', count: 2, accent: 'olive' }
];

const CategoryPage = () => {
  return (
    <div className="category-page">
      <section className="category-hero">
        <div className="category-left">
          <div className="crumb">Home &gt; Category</div>
          <h1>Our Product Categories</h1>
          <p>Explore our wide range of natural and safe homeopathic solutions for every need.</p>

          <div className="hero-badges">
            <span>🌿 100% Natural</span>
            <span>🛡️ Safe &amp; Effective</span>
            <span>✅ Trusted by Thousands</span>
          </div>
        </div>

        <div className="category-right" aria-hidden="true">
          <div className="mix-scene">
            <div className="scene-bowl" />
            <div className="scene-bottle scene-bottle-lg" />
            <div className="scene-bottle scene-bottle-sm" />
            <div className="leaf leaf-1" />
            <div className="leaf leaf-2" />
            <div className="leaf leaf-3" />
            <div className="leaf leaf-4" />
            <div className="leaf leaf-5" />
          </div>
        </div>
      </section>

      <div className="category-pills">
        <div className="pill-item">🚚 Free Shipping</div>
        <div className="pill-item">💳 Secure Payment</div>
        <div className="pill-item">↩️ Easy Returns</div>
        <div className="pill-item">💬 Online Support</div>
      </div>

      <main className="category-layout">
        <aside className="category-sidebar">
          <div className="filter-card">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category) => (
                <li key={category.name} className={category.name === 'All Categories' ? 'active' : ''}>
                  <span>{category.name}</span>
                  <span className="count">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="consult-card">
            <p>Can't find what you're looking for?</p>
            <button>Book Consultation</button>
          </div>
        </aside>

        <div className="category-content">
          <div className="category-header">
            <h2>All Categories</h2>
            <span>Showing 1-16 of 16 categories</span>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={`${product.name}-${index}`}>
                <div className={`product-art ${product.accent}`}>
                  <div className="art-cap" />
                  <div className="art-bottle" />
                </div>
                <h3>{product.name}</h3>
                <p>{product.title}</p>
                <div className="card-more">
                  <span>{product.count} Products</span>
                  <button>→</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="consult-strip">
        <div className="calendar-icon">📅</div>
        <div className="consult-copy">
          <h3>Need Help Choosing the Right Product?</h3>
          <p>Book a free consultation with our expert homeopaths and get personalized recommendations.</p>
        </div>
        <button>Book Free Consultation →</button>
      </section>
    </div>
  );
};

export default CategoryPage;
