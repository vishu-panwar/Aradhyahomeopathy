import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewBlogPage.css';

const NewBlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [email, setEmail] = useState('');

  const articles = [
    {
      id: 1,
      image: '/featured1.png',
      category: 'Homeopathy Basics',
      title: 'What is Homeopathy and How Does It Work?',
      snippet: 'Understand the principles of homeopathy and how it helps the body heal naturally.',
      date: 'May 20, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      image: '/featured2.png',
      category: 'Health Tips',
      title: '5 Natural Ways to Boost Your Immunity',
      snippet: 'Simple and effective homeopathic ways to strengthen your immune system.',
      date: 'May 18, 2025',
      readTime: '4 min read'
    },
    {
      id: 3,
      image: '/featured3.png',
      category: 'Natural Remedies',
      title: 'Homeopathic Treatment for Allergies',
      snippet: 'How homeopathy can provide long-term relief from seasonal allergies naturally.',
      date: 'May 15, 2025',
      readTime: '6 min read'
    },
    {
      id: 4,
      image: '/product1.png',
      category: 'Lifestyle',
      title: 'Managing Stress and Anxiety Naturally',
      snippet: 'Safe and natural homeopathic remedies to manage stress and improve well-being.',
      date: 'May 12, 2025',
      readTime: '5 min read'
    },
    {
      id: 5,
      image: '/product2.png',
      category: 'Product Guide',
      title: 'Arnica 30: Uses, Benefits & Dosage',
      snippet: 'Complete guide to Arnica 30 and its benefits for pain, inflammation and recovery.',
      date: 'May 10, 2025',
      readTime: '4 min read'
    },
    {
      id: 6,
      image: '/product3.png',
      category: 'Homeopathy Basics',
      title: 'Is Homeopathy Safe for Children?',
      snippet: 'Everything you need to know about homeopathy for kids and their growing health.',
      date: 'May 8, 2025',
      readTime: '5 min read'
    },
    {
      id: 7,
      image: '/featured1.png',
      category: 'Natural Remedies',
      title: 'Top 7 Homeopathic Remedies for Common Cough & Cold',
      snippet: 'Effective and natural remedies to relieve cough, cold, and throat discomfort.',
      date: 'May 5, 2025',
      readTime: '6 min read'
    },
    {
      id: 8,
      image: '/featured2.png',
      category: 'Health Tips',
      title: 'Breathe Easy: Natural Remedies for Asthma',
      snippet: 'Homeopathic solutions to manage asthma and improve lung health naturally.',
      date: 'May 2, 2025',
      readTime: '5 min read'
    },
    {
      id: 9,
      image: '/featured3.png',
      category: 'Product Guide',
      title: 'Nux Vomica 30: Benefits and When to Use',
      snippet: 'Uses, benefits and dosage guidance for Nux Vomica 30 in daily wellness.',
      date: 'Apr 30, 2025',
      readTime: '4 min read'
    }
  ];

  const categories = [
    { id: 'all', label: '📁 All Articles', count: 24 },
    { id: 'basics', label: '✦ Homeopathy Basics', count: 24 },
    { id: 'remedies', label: '✦ Natural Remedies', count: 6 },
    { id: 'health', label: '✦ Health Tips', count: 5 },
    { id: 'lifestyle', label: '✦ Lifestyle', count: 4 },
    { id: 'guide', label: '✦ Product Guide', count: 4 }
  ];

  const popularArticles = [
    'What is Homeopathy and How Does It Work?',
    '5 Natural Ways to Boost Your Immunity',
    'Homeopathic Treatment for Allergies',
    'Managing Stress and Anxiety Naturally',
    'Arnica 30: Uses, Benefits & Dosage'
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed successfully to Aradhya Wellness Newsletter!');
    setEmail('');
  };

  return (
    <div className="new-blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-badge-tag">Our Blog</span>
            <h1 className="hero-title">Knowledge for a Healthier You</h1>
            <p className="hero-desc">
              Expert insights, natural health tips, and homeopathic guidance to help you live a better, healthier life.
            </p>

            {/* Search Input */}
            <form className="search-wrap" onSubmit={handleSearch}>
              <input
                type="text"
                className="search-input"
                placeholder="Search articles, symptoms, or remedies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn-search" aria-label="Search Articles">
                🔍
              </button>
            </form>
          </div>

          {/* Hero Artwork: Blog Image */}
          <div className="hero-art-side">
            <img 
              src="/blog image.png" 
              alt="Aradhya Homeopathy Blog" 
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </section>

      {/* Category Filter Pills Bar */}
      <section className="container">
        <div className="category-pills-row">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Articles & Sidebar Grid Section */}
      <section className="container">
        <div className="blog-layout-grid">
          {/* Left: Articles Stream (3x3 Grid) */}
          <div>
            <div className="articles-header-bar">
              <h2 className="articles-heading">Latest Articles</h2>
              <span className="count-indicator">Showing 1-9 of 24 articles</span>
            </div>

            <div className="article-cards-grid">
              {articles.map(article => (
                <div key={article.id} className="article-card">
                  <div className="card-thumb-art">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <span className="article-category-tag">{article.category}</span>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-snippet">{article.snippet}</p>
                    <div className="card-meta-row">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-row">
              <a href="#" className="page-btn active">1</a>
              <a href="#" className="page-btn">2</a>
              <a href="#" className="page-btn">3</a>
              <a href="#" className="page-btn">4</a>
              <a href="#" className="page-btn">›</a>
            </div>
          </div>

          {/* Right: Detailed Sticky Sidebar Stack */}
          <aside className="sidebar-stack">
            {/* Widget 1: About Our Blog */}
            <div className="sidebar-card">
              <h3 className="sidebar-heading">About Our Blog</h3>
              <p className="sidebar-desc">
                At Aradhya Homeopathy, we believe knowledge is the first step towards a healthier life. Our blog brings expert insights, natural remedies, and evidence-based guidance to support better living.
              </p>
              <Link to="/about" className="btn-sidebar-cta">Learn More</Link>
            </div>

            {/* Widget 2: Popular Articles */}
            <div className="sidebar-card">
              <h3 className="sidebar-heading">Popular Articles</h3>
              <ul className="popular-list">
                {popularArticles.map((title, index) => (
                  <li key={index} className="popular-item">
                    <span className="popular-rank">{String(index + 1).padStart(2, '0')}</span>
                    <a href="#" className="popular-title">{title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 3: Categories Directory */}
            <div className="sidebar-card">
              <h3 className="sidebar-heading">Categories</h3>
              <ul className="category-dir-list">
                <li className="category-dir-item">
                  <a href="#" className="cat-dir-link">Homeopathy Basics</a>
                  <span className="cat-dir-count">24</span>
                </li>
                <li className="category-dir-item">
                  <a href="#" className="cat-dir-link">Natural Remedies</a>
                  <span className="cat-dir-count">6</span>
                </li>
                <li className="category-dir-item">
                  <a href="#" className="cat-dir-link">Health Tips</a>
                  <span className="cat-dir-count">5</span>
                </li>
                <li className="category-dir-item">
                  <a href="#" className="cat-dir-link">Lifestyle</a>
                  <span className="cat-dir-count">4</span>
                </li>
                <li className="category-dir-item">
                  <a href="#" className="cat-dir-link">Product Guide</a>
                  <span className="cat-dir-count">4</span>
                </li>
              </ul>
            </div>

            {/* Widget 4: Need Personal Advice? Consultation CTA */}
            <div className="sidebar-card consultation-widget">
              <h3 className="sidebar-heading">Need Personal Advice?</h3>
              <p className="sidebar-desc">
                Book a free consultation with our expert homeopath for personalized root-cause guidance.
              </p>
              <Link to="/contact#consultation-form" className="btn-sidebar-cta">Book Consultation</Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Newsletter Subscription Strip */}
      <section className="container">
        <div className="newsletter-strip">
          <div className="news-left">
            <div className="news-icon">📅</div>
            <h3 className="news-heading">Stay Updated with Natural Health Tips</h3>
          </div>
          <form className="news-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              className="news-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-news-submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewBlogPage;
