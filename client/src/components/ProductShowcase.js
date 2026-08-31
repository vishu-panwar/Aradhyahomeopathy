import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'BP Care Medicine',
      category: '30 Tablets',
      subtitle: 'Effective Formula',
      price: '₹750',
      priceUnit: '/bottle',
      image: '/product1.png'
    },
    {
      id: 2,
      name: 'Asthmaxx Relief',
      category: '30 Capsules',
      subtitle: 'Natural Formula',
      price: '₹850',
      priceUnit: '/pack',
      image: '/product2.png'
    },
    {
      id: 3,
      name: 'Cervo Go Tablets',
      category: 'Pain Relief',
      subtitle: '30 Tablets',
      price: '₹950',
      priceUnit: '/bottle',
      image: '/product3.png'
    },
    {
      id: 4,
      name: 'Immunity Booster',
      category: 'Complete Wellness Pack',
      subtitle: '',
      price: '₹1,200',
      priceUnit: '/pack',
      image: '/product1.png'
    },
    {
      id: 5,
      name: 'Hair Care Solution',
      category: 'Natural Growth Formula',
      subtitle: '',
      price: '₹650',
      priceUnit: '/bottle',
      image: '/product2.png'
    }
  ];

  return (
    <section className="product-showcase">
      <div className="showcase-wrapper">
        <div className="showcase-header">
          <div>
            <h2 className="showcase-title">Top Selling Products</h2>
          </div>
          <a href="#explore" className="showcase-link">
            Explore more →
          </a>
        </div>

        <div className="showcase-grid">
          {products.map((product) => (
            <div key={product.id} className="showcase-card">
              <div className="showcase-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="showcase-image"
                />
              </div>

              <div className="showcase-content">
                <h3 className="showcase-name">{product.name}</h3>
                <p className="showcase-category">{product.category}</p>
              </div>

              <div className="showcase-footer">
                <div className="showcase-pricing">
                  <span className="showcase-price">{product.price}</span>
                  <span className="showcase-price-unit">{product.priceUnit}</span>
                </div>
                <button className="showcase-details-btn">
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

export default ProductShowcase;
