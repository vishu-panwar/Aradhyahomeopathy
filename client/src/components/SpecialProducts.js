import React from 'react';
import './SpecialProducts.css';

const SpecialProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Skin Combo',
      category: 'Special Offer',
      location: 'Limited Edition',
      rating: 5,
      price: '₹1499',
      originalPrice: '₹2499',
      discount: '40% OFF',
      image: '/product1.png',
      badge: 'SPECIAL'
    },
    {
      id: 2,
      name: 'Baby Care Complete Kit',
      category: 'Special Offer',
      location: 'Limited Edition',
      rating: 5,
      price: '₹1299',
      originalPrice: '₹1999',
      discount: '35% OFF',
      image: '/product2.png',
      badge: 'SPECIAL'
    },
    {
      id: 3,
      name: 'Hair Revival Package',
      category: 'Special Offer',
      location: 'Limited Edition',
      rating: 5,
      price: '₹1799',
      originalPrice: '₹2999',
      discount: '40% OFF',
      image: '/product3.png',
      badge: 'SPECIAL'
    },
    {
      id: 4,
      name: 'Family Wellness Bundle',
      category: 'Special Offer',
      location: 'Limited Edition',
      rating: 5,
      price: '₹2499',
      originalPrice: '₹3999',
      discount: '38% OFF',
      image: '/product1.png',
      badge: 'SPECIAL'
    },
    {
      id: 5,
      name: 'Complete Beauty Set',
      category: 'Special Offer',
      location: 'Limited Edition',
      rating: 5,
      price: '₹1899',
      originalPrice: '₹2999',
      discount: '37% OFF',
      image: '/product2.png',
      badge: 'SPECIAL'
    }
  ];

  return (
    <section className="special-products">
      <div className="special-container">
        <div className="special-header">
          <div>
            <h2 className="special-title">Special Products</h2>
          </div>
          <a href="#view-all" className="special-link">
            View All Offers →
          </a>
        </div>

        <div className="special-grid">
          {products.map((product) => (
            <div key={product.id} className="special-card">
              {product.badge && (
                <span className="special-badge">{product.badge}</span>
              )}
              {product.discount && (
                <span className="special-discount">{product.discount}</span>
              )}
              
              <div className="special-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="special-image"
                />
              </div>

              <div className="special-content">
                <h3 className="special-name">{product.name}</h3>
                <p className="special-category">
                  {product.category} • {product.location}
                </p>
              </div>

              <div className="special-footer-section">
                <div className="special-pricing">
                  <span className="special-original-price">{product.originalPrice}</span>
                  <span className="special-price">{product.price}</span>
                </div>
                <button className="special-details-btn">
                  Grab Deal →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialProducts;
