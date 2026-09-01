import React from 'react';
import './NewArrivals.css';

const NewArrivals = () => {
  const products = [
    {
      id: 1,
      name: 'Advanced Skin Serum',
      category: 'Skin Care',
      subtitle: 'New Launch',
      rating: 5,
      price: '₹899',
      image: '/product1.png',
      badge: 'NEW'
    },
    {
      id: 2,
      name: 'Kids Immunity Plus',
      category: 'Baby Care',
      subtitle: 'New Launch',
      rating: 5,
      price: '₹749',
      image: '/product2.png',
      badge: 'NEW'
    },
    {
      id: 3,
      name: 'Hair Growth Therapy',
      category: 'Hair Care',
      subtitle: 'New Launch',
      rating: 5,
      price: '₹999',
      image: '/product3.png',
      badge: 'NEW'
    },
    {
      id: 4,
      name: 'Wellness Combo Pack',
      category: 'Wellness',
      subtitle: 'New Launch',
      rating: 5,
      price: '₹1299',
      image: '/product1.png',
      badge: 'NEW'
    },
    {
      id: 5,
      name: 'Natural Glow Kit',
      category: 'Beauty',
      subtitle: 'New Launch',
      rating: 5,
      price: '₹849',
      image: '/product2.png',
      badge: 'NEW'
    },
    {
      id: 6,
      name: 'Digestive Care Drops',
      category: 'Health Care',
      subtitle: 'Popular',
      rating: 5,
      price: '₹699',
      image: '/product3.png',
      badge: 'NEW'
    },
    {
      id: 7,
      name: 'Gentle Baby Lotion',
      category: 'Baby Care',
      subtitle: 'Fresh',
      rating: 5,
      price: '₹799',
      image: '/product1.png',
      badge: 'NEW'
    },
    {
      id: 8,
      name: 'Holistic Stress Relief',
      category: 'Wellness',
      subtitle: 'New Launch',
      rating: 5,
      price: '₹1099',
      image: '/product2.png',
      badge: 'NEW'
    }
  ];

  return (
    <section className="new-arrivals">
      <div className="arrivals-container">
        <div className="arrivals-header">
          <div>
            <h2 className="arrivals-title">New Arrivals</h2>
          </div>
          <a href="#view-all" className="arrivals-link">
            Explore more →
          </a>
        </div>

        <div className="arrivals-grid">
          {products.map((product) => (
            <div key={product.id} className="arrival-card">
              {product.badge && (
                <span className="arrival-badge">{product.badge}</span>
              )}
              
              <div className="arrival-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="arrival-image"
                />
              </div>

              <div className="arrival-content">
                <h3 className="arrival-name">{product.name}</h3>
                <p className="arrival-category">
                  {product.category} • {product.subtitle}
                </p>
              </div>

              <div className="arrival-footer">
                <div className="arrival-price">{product.price}</div>
                <button className="arrival-details-btn">
                  Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
