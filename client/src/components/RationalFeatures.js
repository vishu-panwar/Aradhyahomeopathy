import React, { useState, useEffect } from 'react';
import './RationalFeatures.css';

const RationalFeatures = () => {
  const [currentCenter, setCurrentCenter] = useState(3); // Index 3 = center position

  // Product images that will loop
  const productImages = [
    '/featured1.png',
    '/featured2.png',
    '/featured3.png'
  ];

  const products = [
    {
      id: 1,
      name: 'Skin Care Solution',
      description: 'Natural homeopathic treatment for skin health, acne and overall complexion improvement.',
      benefits: ['Natural Ingredients', 'No Side Effects', 'Long-term Relief'],
      date: '15 Jan 2026',
      color: '#3498db',
      image: productImages[0]
    },
    {
      id: 2,
      name: 'Baby Care Products',
      description: 'Safe and effective homeopathic solutions specially designed for babies and young children.',
      benefits: ['Gentle Formula', 'Safe for Babies', 'Trusted by Parents'],
      date: '22 Feb 2026',
      color: '#2ecc71',
      image: productImages[1]
    },
    {
      id: 3,
      name: 'Hair Care Solution',
      description: 'Natural homeopathic treatment for hair fall, dandruff and overall hair health.',
      benefits: ['Prevents Hair Fall', 'Promotes Growth', 'Natural Shine'],
      date: '20 Aug 2026',
      color: '#f39c12',
      image: productImages[2]
    },
    {
      id: 4,
      name: 'Skin Rejuvenation',
      description: 'Advanced homeopathic formula for skin rejuvenation and anti-aging care.',
      benefits: ['Anti-Aging', 'Skin Brightening', 'Wrinkle Reduction'],
      date: '10 Mar 2026',
      color: '#9b59b6',
      image: productImages[0]
    },
    {
      id: 5,
      name: 'Infant Care Range',
      description: 'Complete range of homeopathic products for infant health and wellness.',
      benefits: ['Chemical Free', 'Pediatrician Approved', 'Easy to Use'],
      date: '05 Apr 2026',
      color: '#e74c3c',
      image: productImages[1]
    },
    {
      id: 6,
      name: 'Wellness Collection',
      description: 'Comprehensive wellness products for complete health and vitality.',
      benefits: ['Holistic Care', 'Natural Healing', 'Family Wellness'],
      date: '25 May 2026',
      color: '#1abc9c',
      image: productImages[2]
    },
    {
      id: 7,
      name: 'Beauty Essentials',
      description: 'Natural beauty products for radiant and healthy skin.',
      benefits: ['Glow Enhancement', 'Deep Nourishment', 'Age Defense'],
      date: '12 Jun 2026',
      color: '#e67e22',
      image: productImages[0]
    },
    {
      id: 8,
      name: 'Digestive Wellness',
      description: 'Gentle homeopathic support for comfortable digestion and daily wellness.',
      benefits: ['Gentle Formula', 'Daily Comfort', 'Natural Support'],
      date: '18 Jul 2026',
      color: '#16a085',
      image: productImages[1]
    },
    {
      id: 9,
      name: 'Joint Comfort Care',
      description: 'Natural care to support comfortable movement and active everyday living.',
      benefits: ['Mobility Support', 'Natural Care', 'Long-term Relief'],
      date: '02 Aug 2026',
      color: '#2980b9',
      image: productImages[2]
    },
    {
      id: 10,
      name: 'Family Immunity Care',
      description: 'Everyday homeopathic wellness support for the entire family.',
      benefits: ['Family Friendly', 'Natural Ingredients', 'Easy to Use'],
      date: '25 Aug 2026',
      color: '#27ae60',
      image: productImages[0]
    }
  ];

  // Auto-slide effect - Clockwise (right to left)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCenter((prev) => (prev - 1 + products.length) % products.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  // Get position index for each card
  const getCardPosition = (index) => {
    const diff = (index - currentCenter + products.length) % products.length;
    
    if (diff === 0) return 3; // center
    if (diff === 1) return 4; // right-1
    if (diff === 2) return 5; // right-2
    if (diff === 3) return 6; // far right
    if (diff === products.length - 1) return 2; // left-1
    if (diff === products.length - 2) return 1; // left-2
    if (diff === products.length - 3) return 0; // far left
    
    return -1; // hidden
  };

  const selectedProductData = products[currentCenter];

  return (
    <section className="rational-features">
      <div className="rational-container">
        <h2 className="rational-title">Aradhya Product Expo</h2>

        <div className="products-flow">
          {/* Curved Product Cards with Images */}
          <div className="products-arc">
            {products.map((product, index) => {
              const position = getCardPosition(index);
              if (position === -1) return null;

              return (
                <div 
                  key={product.id}
                  className={`product-card position-${position} ${currentCenter === index ? 'active' : ''}`}
                  onClick={() => setCurrentCenter(index)}
                  style={{ 
                    '--card-color': product.color
                  }}
                >
                  <div className="product-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Curved Details Box */}
          {selectedProductData && (
            <div className="details-curved-box">
              <div className="detail-item">
                <span className="detail-label">Product Title</span>
                <span className="detail-value">{selectedProductData.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">About Product</span>
                <span className="detail-value">{selectedProductData.description}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Benefit of Product</span>
                <div className="detail-value">
                  {selectedProductData.benefits.map((benefit, index) => (
                    <div key={index}>• {benefit}</div>
                  ))}
                </div>
              </div>
              <div className="detail-item">
                <span className="detail-label">Usage Date</span>
                <span className="detail-value">{selectedProductData.date}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RationalFeatures;
