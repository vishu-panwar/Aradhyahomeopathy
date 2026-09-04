import React from 'react';
import { Link } from 'react-router-dom';
import './TopSellingProducts.css';

const TopSellingProducts = () => {
  const products = [
    {
      id: 'bp-care-medicine',
      title: 'BP Care Medicine',
      subtitle: '30 Tablets - Effective Formula',
      price: '₹750',
      image: '/product1.png',
      priceLabel: '/bottle'
    },
    {
      id: 'asthmaxx-relief',
      title: 'Asthmaxx Relief',
      subtitle: '30 Capsules - Natural Formula',
      price: '₹850',
      image: '/product2.png',
      priceLabel: '/pack'
    },
    {
      id: 'cervo-go-tablets',
      title: 'Cervo Go Tablets',
      subtitle: 'Pain Relief - 30 Tablets',
      price: '₹950',
      image: '/product3.png',
      priceLabel: '/bottle'
    },
    {
      id: 'immunity-booster',
      title: 'Immunity Booster',
      subtitle: 'Complete Wellness Pack',
      price: '₹1,200',
      image: '/product1.png',
      priceLabel: '/pack'
    },
    {
      id: 'hair-care-solution',
      title: 'Hair Care Solution',
      subtitle: 'Natural Growth Formula',
      price: '₹650',
      image: '/product2.png',
      priceLabel: '/bottle'
    },
    {
      id: 'digestive-care-drops',
      title: 'Digestive Care Drops',
      subtitle: 'Natural Comfort - 30 ml',
      price: '₹699',
      image: '/product3.png',
      priceLabel: '/bottle'
    },
    {
      id: 'family-immunity-support',
      title: 'Family Immunity Support',
      subtitle: 'Daily Wellness - 30 Tablets',
      price: '₹999',
      image: '/product1.png',
      priceLabel: '/pack'
    },
    {
      id: 'joint-comfort-formula',
      title: 'Joint Comfort Formula',
      subtitle: 'Natural Relief - 30 ml',
      price: '₹899',
      image: '/product3.png',
      priceLabel: '/bottle'
    },
    {
      id: 'stress-relief-drops',
      title: 'Stress Relief Drops',
      subtitle: 'Calm Care - 30 ml',
      price: '₹799',
      image: '/product2.png',
      priceLabel: '/bottle'
    },
    {
      id: 'complete-wellness-pack',
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
          <Link to="/shop" className="explore-link">
            Explore more →
          </Link>
        </div>

        <div className="products-scroll-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-card-link">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellingProducts;
