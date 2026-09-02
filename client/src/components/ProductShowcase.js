import React from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Featured Skin Care',
      image: '/featured1.png'
    },
    {
      id: 2,
      name: 'Featured Baby Care',
      image: '/featured2.png'
    },
    {
      id: 3,
      name: 'Featured Hair Care',
      image: '/featured3.png'
    },
    {
      id: 4,
      name: 'Featured Skin Care 2',
      image: '/featured1.png'
    },
    {
      id: 5,
      name: 'Featured Baby Care 2',
      image: '/featured2.png'
    },
    {
      id: 6,
      name: 'Featured Hair Care 2',
      image: '/featured3.png'
    },
    {
      id: 7,
      name: 'Featured Skin Care 3',
      image: '/featured1.png'
    },
    {
      id: 8,
      name: 'Featured Baby Care 3',
      image: '/featured2.png'
    }
  ];

  return (
    <section className="product-showcase">
      <div className="showcase-wrapper">
        <div className="showcase-header">
          <div>
            <h2 className="showcase-title">Featured Products</h2>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
