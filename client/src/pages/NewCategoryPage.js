import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewCategoryPage.css';

const NewCategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sidebarCategories = [
    { id: 'all', name: 'All Categories', count: 48 },
    { id: 'skin-care', name: 'Skin Care', count: 12 },
    { id: 'hair-care', name: 'Hair Care', count: 10 },
    { id: 'baby-care', name: 'Baby Care', count: 8 },
    { id: 'health-care', name: 'Health Care', count: 8 },
    { id: 'immunity-care', name: 'Immunity Care', count: 6 },
    { id: 'digestive-care', name: 'Digestive Care', count: 6 },
    { id: 'stress-relief', name: 'Stress Relief', count: 6 },
    { id: 'joint-care', name: 'Joint Care', count: 5 },
    { id: 'respiratory-care', name: 'Respiratory Care', count: 5 },
    { id: 'pain-relief', name: 'Pain Relief', count: 5 },
    { id: 'mental-wellness', name: 'Mental Wellness', count: 4 },
    { id: 'detox-cleanse', name: 'Detox & Cleanse', count: 4 },
    { id: 'heart-care', name: 'Heart Care', count: 3 },
    { id: 'diabetes-care', name: 'Diabetes Care', count: 3 },
    { id: 'eye-care', name: 'Eye Care', count: 2 },
    { id: 'thyroid-care', name: 'Thyroid Care', count: 2 },
    { id: 'mens-health', name: "Men's Health", count: 2 },
    { id: 'elderly-care', name: 'Elderly Care', count: 2 }
  ];

  const categories = [
    {
      id: 'skin-care',
      title: 'Skin\nCare',
      desc: 'Natural solutions for healthy glowing skin',
      products: [
        { emoji: '🧴', label: 'Face Care', color: 'b-blue' },
        { emoji: '✨', label: 'Body Care', color: 'b-green' }
      ],
      count: 12
    },
    {
      id: 'hair-care',
      title: 'Hair\nCare',
      desc: 'Strengthen & nourish your hair naturally',
      products: [
        { emoji: '🌿', label: 'Hair Oil', color: 'b-red' },
        { emoji: '💧', label: 'Hair Serum', color: 'b-blue' }
      ],
      count: 10
    },
    {
      id: 'baby-care',
      title: 'Baby\nCare',
      desc: 'Gentle & safe products for your baby',
      products: [
        { emoji: '🍼', label: 'Baby Oil', color: 'b-green' },
        { emoji: '🌸', label: 'Baby Cream', color: 'b-yellow' }
      ],
      count: 8
    },
    {
      id: 'health-care',
      title: 'Health\nCare',
      desc: 'Complete wellness solutions for all ages',
      products: [
        { emoji: '🛡️', label: 'Immunity', color: 'b-blue' },
        { emoji: '🌱', label: 'Digestion', color: 'b-green' }
      ],
      count: 8
    },
    {
      id: 'immunity-care',
      title: 'Immunity\nCare',
      desc: 'Everyday support for stronger natural immunity',
      products: [
        { emoji: '💧', label: 'Immunity Drops', color: 'b-red' },
        { emoji: '🍃', label: 'Seasonal Care', color: 'b-green' }
      ],
      count: 6
    },
    {
      id: 'digestive-care',
      title: 'Digestive\nCare',
      desc: 'Gentle remedies for comfortable digestion',
      products: [
        { emoji: '🌿', label: 'Digestive Drops', color: 'b-blue' },
        { emoji: '🍋', label: 'Acidity Care', color: 'b-yellow' }
      ],
      count: 6
    },
    {
      id: 'stress-relief',
      title: 'Stress\nRelief',
      desc: 'Calm and balanced care for modern lifestyles',
      products: [
        { emoji: '🌙', label: 'Sleep Support', color: 'b-purple' },
        { emoji: '🧘', label: 'Calm Care', color: 'b-red' }
      ],
      count: 6
    },
    {
      id: 'joint-care',
      title: 'Joint\nCare',
      desc: 'Natural comfort for active everyday living',
      products: [
        { emoji: '🦴', label: 'Pain Relief', color: 'b-blue' },
        { emoji: '🚶', label: 'Mobility Care', color: 'b-red' }
      ],
      count: 5
    },
    {
      id: 'respiratory-care',
      title: 'Respiratory\nCare',
      desc: 'Relief from cold and breathing issues',
      products: [
        { emoji: '🫁', label: 'Breathing Care', color: 'b-green' },
        { emoji: '☕', label: 'Seasonal Relief', color: 'b-red' }
      ],
      count: 5
    },
    {
      id: 'pain-relief',
      title: 'Pain\nRelief',
      desc: 'Natural relief from pain and inflammation',
      products: [
        { emoji: '⚡', label: 'Pain Drops', color: 'b-blue' },
        { emoji: '🩹', label: 'Comfort Care', color: 'b-red' }
      ],
      count: 5
    },
    {
      id: 'mental-wellness',
      title: 'Mental\nWellness',
      desc: 'Support for stress, anxiety & better sleep',
      products: [
        { emoji: '🧠', label: 'Calm Support', color: 'b-green' },
        { emoji: '💤', label: 'Sleep Care', color: 'b-red' }
      ],
      count: 4
    },
    {
      id: 'detox-cleanse',
      title: 'Detox &\nCleanse',
      desc: 'Detoxify and rejuvenate your body naturally',
      products: [
        { emoji: '💧', label: 'Cleanse Care', color: 'b-blue' },
        { emoji: '🌿', label: 'Daily Detox', color: 'b-red' }
      ],
      count: 4
    },
    {
      id: 'heart-care',
      title: 'Heart\nCare',
      desc: 'Support heart health and circulation',
      products: [
        { emoji: '❤️', label: 'Heart Support', color: 'b-red' },
        { emoji: '🩺', label: 'Circulation', color: 'b-green' }
      ],
      count: 3
    },
    {
      id: 'diabetes-care',
      title: 'Diabetes\nCare',
      desc: 'Help manage blood sugar levels naturally',
      products: [
        { emoji: '🩸', label: 'Sugar Care', color: 'b-blue' },
        { emoji: '⚖️', label: 'Daily Support', color: 'b-red' }
      ],
      count: 3
    },
    {
      id: 'eye-care',
      title: 'Eye\nCare',
      desc: 'Care for sharp and healthy vision',
      products: [
        { emoji: '👁️', label: 'Eye Support', color: 'b-green' },
        { emoji: '👓', label: 'Vision Care', color: 'b-red' }
      ],
      count: 2
    },
    {
      id: 'thyroid-care',
      title: 'Thyroid\nCare',
      desc: 'Support thyroid function naturally',
      products: [
        { emoji: '🦋', label: 'Thyroid Support', color: 'b-red' },
        { emoji: '⚖️', label: 'Balance Care', color: 'b-blue' }
      ],
      count: 2
    },
    {
      id: 'mens-health',
      title: "Men's\nHealth",
      desc: 'Improve vitality, stamina and wellness',
      products: [
        { emoji: '💪', label: 'Energy Care', color: 'b-red' },
        { emoji: '🌟', label: 'Daily Wellness', color: 'b-green' }
      ],
      count: 2
    },
    {
      id: 'elderly-care',
      title: 'Elderly\nCare',
      desc: 'Gentle support for everyday vitality',
      products: [
        { emoji: '👴', label: 'Vitality Care', color: 'b-green' },
        { emoji: '🌿', label: 'Gentle Care', color: 'b-red' }
      ],
      count: 2
    }
  ];

  return (
    <div className="new-category-page">
      {/* Breadcrumbs */}
      <div className="container breadcrumbs">
        <Link to="/">Home</Link> &gt;{' '}
        <span style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>Category</span>
      </div>

      {/* Hero Header Section */}
      <section className="container category-hero">
        <div className="hero-split-grid">
          <div>
            <h1 className="cat-hero-heading">Our Product Categories</h1>
            <p className="cat-hero-desc">
              Explore our wide range of natural and safe homeopathic solutions for every need.
            </p>
            <div className="trust-pills-row">
              <span className="trust-pill">🌿 100% Natural</span>
              <span className="trust-pill">🛡️ Safe & Effective</span>
              <span className="trust-pill">👥 Trusted by Thousands</span>
            </div>
          </div>
          {/* Right Visual Strip */}
          <div className="hero-banner-visual">
            <div className="hero-leaves-art">🪴</div>
          </div>
        </div>
      </section>

      {/* 4-Box Service Highlights Bar */}
      <section className="container">
        <div className="service-bar-grid">
          <div className="service-box">
            <span>🚚</span> Free Shipping
          </div>
          <div className="service-box">
            <span>💳</span> Secure Payment
          </div>
          <div className="service-box">
            <span>↩️</span> Easy Returns
          </div>
          <div className="service-box">
            <span>💬</span> Online Support
          </div>
        </div>
      </section>

      {/* Main Catalog: Sidebar + 18-Category Matrix */}
      <section className="container category-layout">
        {/* Left Navigation Sidebar */}
        <aside className="sidebar-wrapper">
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Categories</h3>
            <ul className="sidebar-cat-list">
              {sidebarCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className={`sidebar-cat-item ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <span>{cat.name}</span>
                    <span className="sidebar-cat-count">{cat.count}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Left Sidebar Consultation Card */}
          <div className="sidebar-consult-card">
            <p>Can't find what you're looking for?</p>
            <Link to="/contact#consultation-form" className="btn-sidebar-consult">
              Book Consultation
            </Link>
          </div>
        </aside>

        {/* Right 18-Category Matrix (4 Columns) */}
        <div>
          <div className="catalog-header-row">
            <h2 className="catalog-main-title">All Categories</h2>
            <span className="catalog-counter-tag">Showing 1-18 of 18 categories</span>
          </div>

          <div className="category-cards-grid">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="category-card"
                id={category.id}
              >
                <div className="card-top-header">
                  <h4 className="card-cat-title">{category.title}</h4>
                  <div className="card-cat-desc">{category.desc}</div>
                </div>

                <div className="card-bottles-row">
                  {category.products.map((product, index) => (
                    <div key={index} className="preview-bottle-col">
                      <div className={`mini-bottle-graphic ${product.color}`}>{product.emoji}</div>
                      <span className="mini-bottle-label">{product.label}</span>
                    </div>
                  ))}
                </div>

                <div className="card-bottom-action">
                  <span className="card-product-count">{category.count} Products</span>
                  <span className="card-arrow-circle">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Choosing Banner */}
      <section className="container">
        <div className="consult-cta-banner">
          <div className="consult-banner-left">
            <span className="calendar-icon">📅</span>
            <div className="consult-banner-text">
              <h3>Need Help Choosing the Right Product?</h3>
              <p>
                Book a free consultation with our expert homeopaths and get personalized
                recommendations.
              </p>
            </div>
          </div>
          <Link to="/contact#consultation-form" className="btn-consult-action">
            Book Free Consultation &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NewCategoryPage;
