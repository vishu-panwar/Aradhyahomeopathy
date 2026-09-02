import React from 'react';
import './TopSellingProducts.css';

const TopSellingProducts = () => {
  const products = [
    {
      id: 1,
      title: 'BP Care Medicine',
      subtitle: '30 Tablets - Effective Formula',
      price: '₹750',
      image: '/product1.png',
      priceLabel: '/bottle'
    },
    {
      id: 2,
      title: 'Asthmaxx Relief',
      subtitle: '30 Capsules - Natural Formula',
      price: '₹850',
      image: '/product2.png',
      priceLabel: '/pack'
    },
    {
      id: 3,
      title: 'Cervo Go Tablets',
      subtitle: 'Pain Relief - 30 Tablets',
      price: '₹950',
      image: '/product3.png',
      priceLabel: '/bottle'
    },
    {
      id: 4,
      title: 'Immunity Booster',
      subtitle: 'Complete Wellness Pack',
      price: '₹1,200',
      image: '/product1.png',
      priceLabel: '/pack'
    },
    {
      id: 5,
      title: 'Hair Care Solution',
      subtitle: 'Natural Growth Formula',
      price: '₹650',
      image: '/product2.png',
      priceLabel: '/bottle'
    },
    {
      id: 6,
      title: 'Digestive Care Drops',
      subtitle: 'Natural Comfort - 30 ml',
      price: '₹699',
      image: '/product3.png',
      priceLabel: '/bottle'
    },
    {
      id: 7,
      title: 'Family Immunity Support',
      subtitle: 'Daily Wellness - 30 Tablets',
      price: '₹999',
      image: '/product1.png',
      priceLabel: '/pack'
    },
    {
      id: 8,
      title: 'Joint Comfort Formula',
      subtitle: 'Natural Relief - 30 ml',
      price: '₹899',
      image: '/product3.png',
      priceLabel: '/bottle'
    },
    {
      id: 9,
      title: 'Stress Relief Drops',
      subtitle: 'Calm Care - 30 ml',
      price: '₹799',
      image: '/product2.png',
      priceLabel: '/bottle'
    },
    {
      id: 10,
      title: 'Complete Wellness Pack',
      subtitle: 'Everyday Care - Combo Pack',
      price: '₹1200',
      image: '/product1.png',
      priceLabel: '/pack'
    }
  ];

  return (
    <section className="top-selling-section">
      <div className="top-selling-container">
        <div className="section-header">
          <div>
            <h2>Top Selling Products</h2>
          </div>
          <a href="#explore" className="explore-link">
            Explore more →
          </a>
        </div>

        <div className="products-scroll-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="product-card-image"
                />
              </div>

              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
              </div>

              <div className="product-footer">
                <div className="product-price-wrapper">
                  <span className="product-price">{product.price}</span>
                  <span className="price-label">{product.priceLabel}</span>
                </div>
                <button className="details-btn">Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
