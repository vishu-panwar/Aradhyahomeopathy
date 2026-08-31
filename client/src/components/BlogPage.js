import React from 'react';
import './BlogPage.css';

const blogPosts = [
  {
    category: 'Homeopathy Basics',
    title: 'What is Homeopathy and How Does It Work?',
    excerpt: 'Understand the principles of homeopathy and how it helps the body heal naturally.',
    date: 'May 20, 2025',
    readTime: '5 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Homeopathy Basics'
  },
  {
    category: 'Health Tips',
    title: '5 Natural Ways to Boost Your Immunity',
    excerpt: 'Simple and effective homeopathic ways to strengthen your immune system.',
    date: 'May 18, 2025',
    readTime: '4 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Health Tips'
  },
  {
    category: 'Natural Remedies',
    title: 'Homeopathic Treatment for Allergies',
    excerpt: 'How homeopathy can provide long-term relief from seasonal allergies naturally.',
    date: 'May 15, 2025',
    readTime: '6 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Natural Remedies'
  },
  {
    category: 'Lifestyle',
    title: 'Managing Stress and Anxiety Naturally',
    excerpt: 'Safe and natural homeopathic remedies to manage stress and improve well-being.',
    date: 'May 12, 2025',
    readTime: '5 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Lifestyle'
  },
  {
    category: 'Product Guide',
    title: 'Arnica 30: Uses, Benefits & Dosage',
    excerpt: 'Complete guide to Arnica 30 and its benefits for pain, inflammation and recovery.',
    date: 'May 10, 2025',
    readTime: '4 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Product Guide'
  },
  {
    category: 'Homeopathy Basics',
    title: 'Is Homeopathy Safe for Children?',
    excerpt: 'Everything you need to know about homeopathy for kids and their growing health.',
    date: 'May 8, 2025',
    readTime: '5 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Homeopathy Basics'
  },
  {
    category: 'Natural Remedies',
    title: 'Top 7 Homeopathic Remedies for Common Cough & Cold',
    excerpt: 'Effective and natural remedies to relieve cough, cold, and throat discomfort.',
    date: 'May 5, 2025',
    readTime: '6 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Natural Remedies'
  },
  {
    category: 'Health Tips',
    title: 'Breathe Easy: Natural Remedies for Asthma',
    excerpt: 'Homeopathic solutions to manage asthma and improve lung health naturally.',
    date: 'May 2, 2025',
    readTime: '5 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Health Tips'
  },
  {
    category: 'Product Guide',
    title: 'Nux Vomica 30: Benefits and When to Use',
    excerpt: 'Uses, benefits and dosage guidance for Nux Vomica 30 in daily wellness.',
    date: 'Apr 30, 2025',
    readTime: '4 min read',
    image: '/Screenshot 2026-08-20 225622.png',
    tag: 'Product Guide'
  }
];

const categoryFilters = [
  'All Articles',
  'Homeopathy Basics',
  'Natural Remedies',
  'Health Tips',
  'Lifestyle',
  'Product Guide'
];

const popularArticles = [
  'What is Homeopathy and How Does It Work?',
  '5 Natural Ways to Boost Your Immunity',
  'Homeopathic Treatment for Allergies',
  'Managing Stress and Anxiety Naturally',
  'Arnica 30: Uses, Benefits & Dosage'
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <div className="blog-hero-text">
            <div className="eyebrow">OUR BLOG</div>
            <h1>Knowledge for a<br />Healthier You</h1>
            <p>
              Expert insights, natural health tips, and homeopathic guidance to help you live a better, healthier life.
            </p>

            <div className="blog-search-box">
              <input type="text" placeholder="Search articles..." />
              <button aria-label="Search">⌕</button>
            </div>
          </div>

          <div className="blog-hero-visual" aria-hidden="true">
            <div className="hero-bottle bottle-1" />
            <div className="hero-bottle bottle-2" />
            <div className="hero-bottle bottle-3" />
            <div className="hero-jar" />
            <div className="leaf leaf-1" />
            <div className="leaf leaf-2" />
            <div className="leaf leaf-3" />
            <div className="leaf leaf-4" />
            <div className="leaf leaf-5" />
          </div>
        </div>
      </section>

      <section className="blog-filters">
        {categoryFilters.map((filter, index) => (
          <button key={filter} className={index === 0 ? 'filter-pill active' : 'filter-pill'}>
            {index === 0 ? '🗂️ ' : '✦ '}
            {filter}
          </button>
        ))}
      </section>

      <main className="blog-main">
        <div className="blog-listing">
          <div className="blog-list-header">
            <h2>Latest Articles</h2>
            <span>Showing 1-9 of 24 articles</span>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.title} className="blog-card">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <span className="blog-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="blog-pagination">
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
            <button className="page">4</button>
            <button className="page next">›</button>
          </div>
        </div>

        <aside className="blog-sidebar">
          <div className="sidebar-card about-card">
            <h3>About Our Blog</h3>
            <p>
              At Aradhya Homeopathy, we believe knowledge is the first step towards a healthier life. Our blog brings expert
              insights, natural remedies, and evidence-based guidance to support better living.
            </p>
            <button>Learn More</button>
          </div>

          <div className="sidebar-card">
            <h3>Popular Articles</h3>
            <ul className="popular-list">
              {popularArticles.map((item, index) => (
                <li key={item}>
                  <span className="popular-index">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-card">
            <h3>Categories</h3>
            <ul className="category-list">
              {categoryFilters.slice(1).map((category, index) => (
                <li key={category}>
                  <span>{category}</span>
                  <strong>{[24, 6, 5, 4, 4][index]}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-card consult-card">
            <h3>Need Personal Advice?</h3>
            <p>Book a free consultation with our expert homeopath.</p>
            <button>Book Consultation</button>
          </div>
        </aside>
      </main>

      <section className="newsletter-strip">
        <div className="newsletter-icon">📅</div>
        <div className="newsletter-copy">Stay Updated with Natural Health Tips</div>
        <div className="newsletter-subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
