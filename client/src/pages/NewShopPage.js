import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewShopPage.css';

const NewShopPage = () => {
  const [priceRange, setPriceRange] = useState(2500);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    form: [],
    bestFor: []
  });

  // Complete 24 Products Array
  const allProducts = [
    { id: 1, name: 'Arnica Montana 30C', category: 'Single Remedies', price: 145, oldPrice: 180, badge: 'ESSENTIAL', badgeColor: '', emoji: '🌼', color: '#d97706', label: 'Arnica', form: 'Drops', bestFor: 'Pain', desc: 'Trauma, Bruises & Muscle Soreness' },
    { id: 2, name: 'Nux Vomica 30C', category: 'Single Remedies', price: 145, oldPrice: 180, badge: 'POPULAR', badgeColor: 'badge-orange', emoji: '🌱', color: '#15803d', label: 'Nux Vom', form: 'Tablets', bestFor: 'Digestion', desc: 'Indigestion, Acidity & Constipation' },
    { id: 3, name: 'BP Care Medicine', category: 'Health Care', price: 750, oldPrice: 900, badge: 'BEST FOR', badgeColor: '', emoji: '❤️', color: '#dc2626', label: 'BP Care', form: 'Tablets', bestFor: 'Pain', desc: 'Health Care • Natural Circulation' },
    { id: 4, name: 'Asthmaxx Relief', category: 'Health Care', price: 850, oldPrice: 980, badge: 'CERTIFIED', badgeColor: 'badge-green', emoji: '🫁', color: '#059669', label: 'Asthamax', form: 'Tablets', bestFor: 'Immunity', desc: 'Respiratory Comfort & Allergy Relief' },
    { id: 5, name: 'Cervo Go Tablets', category: 'Health Care', price: 950, oldPrice: 1100, badge: 'TOP RATED', badgeColor: '', emoji: '⚡', color: '#2563eb', label: 'Cervo Go', form: 'Tablets', bestFor: 'Pain', desc: 'Cervical & Neck Stiffness Relief' },
    { id: 6, name: 'Berberis Aquifolium Q', category: 'Single Remedies', price: 210, oldPrice: 250, badge: 'GLOW CARE', badgeColor: 'badge-orange', emoji: '✨', color: '#ea580c', label: 'Berberis', form: 'Drops', bestFor: 'Skin', desc: 'Acne, Complexion & Clear Skin' },
    { id: 7, name: 'Rhus Tox 200C', category: 'Single Remedies', price: 145, oldPrice: 180, badge: 'ACUTE RELIEF', badgeColor: 'badge-blue', emoji: '🦴', color: '#0284c7', label: 'Rhus Tox', form: 'Drops', bestFor: 'Pain', desc: 'Joint Pain, Stiffness & Rain Aggravation' },
    { id: 8, name: 'Hair Nourish Oil', category: 'Hair Care', price: 550, oldPrice: 680, badge: 'HERBAL', badgeColor: '', emoji: '🌿', color: '#047857', label: 'Hair Oil', form: 'Oil', bestFor: 'Hair', desc: 'Jaborandi & Arnica Hair Fall Control' },
    { id: 9, name: 'Skin Care Cream', category: 'Skin Care', price: 450, oldPrice: 550, badge: 'POPULAR', badgeColor: 'badge-orange', emoji: '🧴', color: '#ea580c', label: 'Skin Cream', form: 'Cream', bestFor: 'Skin', desc: 'Calendula & Aloe Antiseptic Healing' },
    { id: 10, name: 'Cold & Cough Syrup', category: 'Wellness', price: 350, oldPrice: 420, badge: 'SOOTHING', badgeColor: '', emoji: '🍯', color: '#2563eb', label: 'Cough', form: 'Syrup', bestFor: 'Immunity', desc: 'Non-Drowsy Chest & Throat Formula' },
    { id: 11, name: 'Digestive Drops', category: 'Health Care', price: 299, oldPrice: 380, badge: 'DAILY USE', badgeColor: 'badge-orange', emoji: '🌱', color: '#16a34a', label: 'Digest', form: 'Drops', bestFor: 'Digestion', desc: 'Carbo Veg & China Flatulence Drops' },
    { id: 12, name: 'Stress Relief Drops', category: 'Wellness', price: 299, oldPrice: 360, badge: 'CALM CARE', badgeColor: '', emoji: '🌙', color: '#9333ea', label: 'Calm', form: 'Drops', bestFor: 'Stress', desc: 'Passiflora & Avena Sativa Relaxation' },
    { id: 13, name: 'Baby Care Drops', category: 'Baby Care', price: 320, oldPrice: 400, badge: 'GENTLE', badgeColor: 'badge-orange', emoji: '👶', color: '#0284c7', label: 'Baby', form: 'Drops', bestFor: 'Immunity', desc: 'Chamomilla Infant Teething & Colic' },
    { id: 14, name: 'Thuja Occidentalis 30C', category: 'Single Remedies', price: 145, oldPrice: 180, badge: 'WARTS & GROWTHS', badgeColor: '', emoji: '🌲', color: '#047857', label: 'Thuja', form: 'Drops', bestFor: 'Skin', desc: 'Skin Tags, Warts & Fungal Overgrowths' },
    { id: 15, name: 'Hair Growth Therapy Serum', category: 'Hair Care', price: 999, oldPrice: 1299, badge: 'INTENSIVE', badgeColor: '', emoji: '💧', color: '#059669', label: 'Serum', form: 'Oil', bestFor: 'Hair', desc: 'Wiesbaden & Arnica Scalp Activation' },
    { id: 16, name: 'Gentle Baby Lotion', category: 'Baby Care', price: 799, oldPrice: 950, badge: 'NEW LAUNCH', badgeColor: 'badge-orange', emoji: '🍼', color: '#f59e0b', label: 'Baby Lotion', form: 'Cream', bestFor: 'Skin', desc: 'Calendula Natural Barrier Cream' },
    { id: 17, name: 'Withania Somnifera (Ashwagandha) Q', category: 'Single Remedies', price: 220, oldPrice: 270, badge: 'PURE TINCTURE', badgeColor: 'badge-green', emoji: '🪵', color: '#b45309', label: 'Ashwagandha', form: 'Drops', bestFor: 'Stress', desc: 'Nerve Weakness, Stamina & Deep Rest' },
    { id: 18, name: 'Women Wellness Tablets', category: 'Wellness', price: 399, oldPrice: 480, badge: 'BALANCED', badgeColor: 'badge-orange', emoji: '🌸', color: '#db2777', label: 'Women', form: 'Tablets', bestFor: 'Stress', desc: 'Sepia & Pulsatilla Hormonal Balance' },
    { id: 19, name: 'Advanced Skin Serum', category: 'Skin Care', price: 899, oldPrice: 1150, badge: 'CLINICAL', badgeColor: '', emoji: '💎', color: '#065f46', label: 'Serum', form: 'Drops', bestFor: 'Skin', desc: 'Hyaluronic & Homeopathic Botanical Blend' },
    { id: 20, name: 'Allium Cepa 30C', category: 'Single Remedies', price: 145, oldPrice: 180, badge: 'COLD & SNEEZING', badgeColor: 'badge-blue', emoji: '🧅', color: '#0284c7', label: 'Allium', form: 'Drops', bestFor: 'Immunity', desc: 'Watery Eyes, Runny Nose & Sneezing' },
    { id: 21, name: 'Premium Skin Combo', category: 'Combo Packs', price: 1499, oldPrice: 2499, badge: 'SAVE 40%', badgeColor: 'badge-orange', emoji: '📦', color: '#dc2626', label: 'Skin Kit', form: 'Combo', bestFor: 'Skin', desc: 'Cream + Serum + Berberis Drops' },
    { id: 22, name: 'Family Wellness Pack', category: 'Combo Packs', price: 1299, oldPrice: 1999, badge: 'SAVE 38%', badgeColor: 'badge-orange', emoji: '👨‍👩‍👧', color: '#2563eb', label: 'Family', form: 'Combo', bestFor: 'Immunity', desc: 'Immunity + Cough + Digestion Starter' },
    { id: 23, name: 'Hair Revival Package', category: 'Combo Packs', price: 1799, oldPrice: 2999, badge: 'SAVE 40%', badgeColor: 'badge-orange', emoji: '💆', color: '#059669', label: 'Hair Kit', form: 'Combo', bestFor: 'Hair', desc: 'Hair Oil + Serum + Wiesbaden 30' },
    { id: 24, name: 'Complete Wellness Combo Pack', category: 'Combo Packs', price: 2499, oldPrice: 3499, badge: 'BEST VALUE', badgeColor: 'badge-orange', emoji: '🏆', color: '#d97706', label: 'All-in-1', form: 'Combo', bestFor: 'Immunity', desc: '7 Full Size Remedies in Family Casket' }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'Single Remedies', name: 'Classical Single Remedies', count: 6 },
    { id: 'Health Care', name: 'Health Care', count: 4 },
    { id: 'Skin Care', name: 'Skin Care', count: 3 },
    { id: 'Hair Care', name: 'Hair Care', count: 2 },
    { id: 'Wellness', name: 'Wellness & Stress', count: 3 },
    { id: 'Baby Care', name: 'Baby Care', count: 2 },
    { id: 'Combo Packs', name: 'Combo Packs', count: 4 }
  ];


  // Filter Products Logic
  const getFilteredProducts = () => {
    return allProducts.filter(product => {
      // Search filter
      const matchSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.form.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Price filter
      const matchPrice = product.price <= priceRange;
      
      // Form filter
      const matchForm = filters.form.length === 0 || filters.form.includes(product.form);
      
      // Best For filter
      const matchBestFor = filters.bestFor.length === 0 || filters.bestFor.includes(product.bestFor);
      
      return matchSearch && matchCategory && matchPrice && matchForm && matchBestFor;
    });
  };

  // Sort Products Logic
  const getSortedProducts = (products) => {
    const sorted = [...products];
    if (sortBy === 'price_low') {
      return sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_high') {
      return sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'title') {
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted; // popularity (default order)
  };

  const filteredProducts = getSortedProducts(getFilteredProducts());

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const currentValues = prev[filterType];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [filterType]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [filterType]: [...currentValues, value]
        };
      }
    });
  };

  const clearAllFilters = () => {
    setFilters({ form: [], bestFor: [] });
    setPriceRange(2500);
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('popularity');
  };

  const handleOfferSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed to Aradhya special offers!');
  };

  return (
    <div className="new-shop-page">
      {/* Breadcrumbs */}
      <div className="container breadcrumbs">
        <Link to="/">Home</Link> &gt; <span style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Shop All Remedies</span>
      </div>

      {/* Hero Header Section */}
      <section className="container shop-hero">
        <div className="hero-split-grid">
          <div>
            <h1 className="shop-heading">Shop Natural Homeopathic Products</h1>
            <p className="shop-desc">Browse our complete A to Z formulary — classical potentized dilutions, authentic mother tinctures, pediatric comfort solutions, and targeted wellness kits.</p>
            <div className="trust-pills-row">
              <span className="trust-pill">🌿 100% Natural</span>
              <span className="trust-pill">🛡️ Safe & Effective</span>
              <span className="trust-pill">👥 Trusted by Thousands</span>
            </div>
          </div>

          {/* Right Visual Strip - CSS Bottles */}
          <div className="hero-banner-visual">
            <div className="hero-bottles-strip">
              <div className="banner-bottle bb-1">
                <span className="mock-top">💧</span>
                <span className="mock-title">Drops</span>
              </div>
              <div className="banner-bottle bb-2">
                <span className="mock-top">🌱</span>
                <span className="mock-title">Herbal</span>
              </div>
              <div className="banner-bottle bb-3">
                <span className="mock-top">❤️</span>
                <span className="mock-title">Care</span>
              </div>
              <div className="banner-bottle bb-4">
                <span className="mock-top">✨</span>
                <span className="mock-title">Pure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights Bar */}
      <section className="container">
        <div className="service-bar-grid">
          <div className="service-box"><span>🚚</span> Free Shipping</div>
          <div className="service-box"><span>💳</span> Secure Payment</div>
          <div className="service-box"><span>↩️</span> Easy Returns</div>
          <div className="service-box"><span>💬</span> Online Support</div>
        </div>
      </section>

      {/* Main Catalog Area: Sidebar + 4-Column Product Grid */}
      <section className="container catalog-layout">
        {/* Left Filter Sidebar */}
        <aside className="filter-sidebar">
          {/* Category Filter */}
          <div className="filter-card">
            <h3 className="filter-title">Categories</h3>
            <ul className="category-filter-list">
              {categories.map(cat => (
                <li
                  key={cat.id}
                  className={`cat-filter-item ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.name}</span>
                  <span className="cat-filter-count">{cat.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Filter */}
          <div className="filter-card">
            <h3 className="filter-title">Price Range</h3>
            <div className="range-slider-wrap">
              <input
                type="range"
                className="range-slider"
                min="100"
                max="2500"
                value={priceRange}
                step="50"
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
            </div>
            <div className="price-limit-row">
              <span>₹100</span>
              <span style={{ color: 'var(--primary-dark)', fontWeight: 800 }}>₹{priceRange.toLocaleString('en-IN')}</span>
            </div>
            <button type="button" className="btn-clear-filters" style={{ marginTop: 0, background: 'var(--primary-dark)', color: '#fff' }}>
              Apply Price
            </button>
          </div>

          {/* Form Filter */}
          <div className="filter-card">
            <h3 className="filter-title">Form</h3>
            <ul className="checkbox-list">
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.form.includes('Drops')}
                    onChange={() => handleFilterChange('form', 'Drops')}
                  />
                  <span>Drops & Dilutions</span>
                </label>
                <span className="cat-filter-count">8</span>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.form.includes('Tablets')}
                    onChange={() => handleFilterChange('form', 'Tablets')}
                  />
                  <span>Tablets & Globules</span>
                </label>
                <span className="cat-filter-count">6</span>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.form.includes('Syrup')}
                    onChange={() => handleFilterChange('form', 'Syrup')}
                  />
                  <span>Syrups</span>
                </label>
                <span className="cat-filter-count">2</span>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.form.includes('Cream')}
                    onChange={() => handleFilterChange('form', 'Cream')}
                  />
                  <span>Creams & Gels</span>
                </label>
                <span className="cat-filter-count">2</span>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.form.includes('Oil')}
                    onChange={() => handleFilterChange('form', 'Oil')}
                  />
                  <span>Hair Oils</span>
                </label>
                <span className="cat-filter-count">2</span>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.form.includes('Combo')}
                    onChange={() => handleFilterChange('form', 'Combo')}
                  />
                  <span>Combo Kits</span>
                </label>
                <span className="cat-filter-count">4</span>
              </li>
            </ul>
          </div>

          {/* Best For / Health Concern Filter */}
          <div className="filter-card">
            <h3 className="filter-title">Health Concern</h3>
            <ul className="checkbox-list">
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.bestFor.includes('Immunity')}
                    onChange={() => handleFilterChange('bestFor', 'Immunity')}
                  />
                  <span>Immunity & Allergy</span>
                </label>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.bestFor.includes('Pain')}
                    onChange={() => handleFilterChange('bestFor', 'Pain')}
                  />
                  <span>Pain & Trauma</span>
                </label>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.bestFor.includes('Skin')}
                    onChange={() => handleFilterChange('bestFor', 'Skin')}
                  />
                  <span>Skin & Complexion</span>
                </label>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.bestFor.includes('Hair')}
                    onChange={() => handleFilterChange('bestFor', 'Hair')}
                  />
                  <span>Hair Care</span>
                </label>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.bestFor.includes('Digestion')}
                    onChange={() => handleFilterChange('bestFor', 'Digestion')}
                  />
                  <span>Digestion & Acidity</span>
                </label>
              </li>
              <li className="checkbox-item">
                <label className="checkbox-label-wrap">
                  <input
                    type="checkbox"
                    checked={filters.bestFor.includes('Stress')}
                    onChange={() => handleFilterChange('bestFor', 'Stress')}
                  />
                  <span>Stress, Sleep & Vitality</span>
                </label>
              </li>
            </ul>
            <button type="button" className="btn-clear-filters" onClick={clearAllFilters}>
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Right Product Catalog Area */}
        <div>
          {/* Live Search Box */}
          <div className="shop-search-card">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="product-search-input"
              placeholder="Search by remedy name (e.g., Arnica, Nux Vomica, BP Care, Hair, Drops, Gas)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Sorting & Counter Bar */}
          <div className="grid-top-bar">
            <span className="results-count">Showing {filteredProducts.length} of {allProducts.length} products</span>
            <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="popularity">Sort by: Popularity</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="title">Name: A to Z</option>
            </select>
          </div>

          {/* 4-Column Product Grid */}
          <div className="product-cards-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="shop-product-card">
                  <span className={`product-badge ${product.badgeColor}`}>{product.badge}</span>
                  <div className="card-img-box">
                    <div className="med-mock-bottle" style={{ borderTop: `4px solid ${product.color}` }}>
                      <span className="mock-top">{product.emoji}</span>
                      <span className="mock-title">{product.label}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="card-product-name">
                      {(product.id === 1 || product.id === 21 || product.id === 24) ? (
                        <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {product.name}
                        </Link>
                      ) : (
                        product.name
                      )}
                    </h4>
                    <div className="card-product-meta">{product.desc}</div>
                  </div>
                  <div className="card-bottom-row">
                    <span className="card-price">
                      ₹{product.price} <span>₹{product.oldPrice}</span>
                    </span>
                    {(product.id === 1 || product.id === 21 || product.id === 22 || product.id === 23 || product.id === 24) ? (
                      <Link to={product.category === 'Combo Packs' ? '/combo' : `/product/${product.id}`} className="btn-add-cart">
                        {product.category === 'Combo Packs' ? 'View Kit →' : 'Details →'}
                      </Link>
                    ) : (
                      <button type="button" className="btn-add-cart">Add to Cart</button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results-box" style={{ display: 'block' }}>
                <h3>No matching remedies found</h3>
                <p>Try searching with another remedy name, potency, or adjusting your price & category filters.</p>
                <button type="button" className="btn-reset-filters" onClick={clearAllFilters}>
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Special Offers Banner Strip */}
      <section className="container">
        <div className="special-offer-banner">
          <div className="offer-title-wrap">
            <span className="offer-icon">📅</span>
            <h3 className="offer-headline">Special Offers for You!</h3>
          </div>
          <form className="offer-form-wrap" onSubmit={handleOfferSubmit}>
            <input type="email" className="offer-input" placeholder="Enter your email" required />
            <button type="submit" className="btn-offer-submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 4 Trust Guarantee Pillars */}
      <section className="container">
        <div className="trust-pillars-grid">
          <div className="pillar-box">
            <div className="pillar-icon-wrap">🌿</div>
            <div>
              <h4 className="pillar-title">Natural Ingredients</h4>
              <p className="pillar-desc">Made with 100% natural homeopathic ingredients.</p>
            </div>
          </div>
          <div className="pillar-box">
            <div className="pillar-icon-wrap">✅</div>
            <div>
              <h4 className="pillar-title">No Side Effects</h4>
              <p className="pillar-desc">Gentle on the body with no harmful side effects.</p>
            </div>
          </div>
          <div className="pillar-box">
            <div className="pillar-icon-wrap">🩺</div>
            <div>
              <h4 className="pillar-title">Doctor Recommended</h4>
              <p className="pillar-desc">Trusted and recommended by experienced homeopaths.</p>
            </div>
          </div>
          <div className="pillar-box">
            <div className="pillar-icon-wrap">🌱</div>
            <div>
              <h4 className="pillar-title">Holistic Healing</h4>
              <p className="pillar-desc">Treats the root cause and promotes overall well-being.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewShopPage;
