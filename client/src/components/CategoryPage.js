import React from 'react';
import './CategoryPage.css';

const categories = [
  { name: 'All Categories', count: 48 },
  { name: 'Skin Care', count: 12 },
  { name: 'Hair Care', count: 10 },
  { name: 'Baby Care', count: 8 },
  { name: 'Health Care', count: 8 },
  { name: 'Immunity Care', count: 6 },
  { name: 'Digestive Care', count: 6 },
  { name: 'Stress Relief', count: 6 },
  { name: 'Joint Care', count: 5 },
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
  { name: 'Skin Care', title: 'Natural solutions for healthy glowing skin', count: 12, images: [['Face Care', '/product1.png'], ['Body Care', '/product2.png']] },
  { name: 'Hair Care', title: 'Strengthen & nourish your hair naturally', count: 10, images: [['Hair Oil', '/product3.png'], ['Hair Serum', '/product1.png']] },
  { name: 'Baby Care', title: 'Gentle & safe products for your baby', count: 8, images: [['Baby Oil', '/product2.png'], ['Baby Cream', '/product3.png']] },
  { name: 'Health Care', title: 'Complete wellness solutions for all ages', count: 8, images: [['Immunity', '/product1.png'], ['Digestion', '/product2.png']] },
  { name: 'Immunity Care', title: 'Everyday support for stronger natural immunity', count: 6, images: [['Immunity Drops', '/product1.png'], ['Seasonal Care', '/product3.png']] },
  { name: 'Digestive Care', title: 'Gentle remedies for comfortable digestion', count: 6, images: [['Digestive Drops', '/product3.png'], ['Acidity Care', '/product2.png']] },
  { name: 'Stress Relief', title: 'Calm and balanced care for modern lifestyles', count: 6, images: [['Sleep Support', '/product2.png'], ['Calm Care', '/product1.png']] },
  { name: 'Joint Care', title: 'Natural comfort for active everyday living', count: 5, images: [['Pain Relief', '/product3.png'], ['Mobility Care', '/product1.png']] },
  { name: 'Respiratory Care', title: 'Relief from cough, cold and breathing issues', count: 5, images: [['Breathing Care', '/product2.png'], ['Seasonal Relief', '/product3.png']] },
  { name: 'Pain Relief', title: 'Natural relief from pain and inflammation', count: 5, images: [['Pain Drops', '/product3.png'], ['Comfort Care', '/product1.png']] },
  { name: 'Mental Wellness', title: 'Support for stress, anxiety and better sleep', count: 4, images: [['Calm Support', '/product2.png'], ['Sleep Care', '/product1.png']] },
  { name: 'Detox & Cleanse', title: 'Detoxify and rejuvenate your body naturally', count: 4, images: [['Cleanse Care', '/product1.png'], ['Daily Detox', '/product3.png']] },
  { name: 'Heart Care', title: 'Support heart health and circulation', count: 3, images: [['Heart Support', '/product1.png'], ['Circulation Care', '/product2.png']] },
  { name: 'Diabetes Care', title: 'Help manage blood sugar levels naturally', count: 3, images: [['Sugar Care', '/product3.png'], ['Daily Support', '/product1.png']] },
  { name: 'Eye Care', title: 'Care for sharp and healthy vision', count: 2, images: [['Eye Support', '/product2.png'], ['Vision Care', '/product1.png']] },
  { name: 'Thyroid Care', title: 'Support thyroid function naturally', count: 2, images: [['Thyroid Support', '/product1.png'], ['Balance Care', '/product3.png']] },
  { name: 'Men’s Health', title: 'Improve vitality, stamina and wellness', count: 2, images: [['Energy Care', '/product1.png'], ['Daily Wellness', '/product2.png']] },
  { name: 'Elderly Care', title: 'Gentle support for everyday vitality', count: 2, images: [['Vitality Care', '/product2.png'], ['Gentle Care', '/product3.png']] }
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
            <span>Showing 1-18 of 18 categories</span>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="category-home-card" key={`${product.name}-${index}`}>
                <div className="category-home-card-header">
                  <h3>{product.name}</h3>
                  <p>{product.title}</p>
                </div>
                <div className="category-home-subcategories">
                  {product.images.map(([name, image]) => (
                    <div className="category-home-subcategory" key={name}>
                      <div className="category-home-image">
                        <img src={image} alt={name} />
                      </div>
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
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
