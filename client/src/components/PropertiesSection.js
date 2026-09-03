import React, { useEffect, useState } from 'react';
import './PropertiesSection.css';

const promotionalImages = [1, 2, 3, 4].map(
  (imageNumber) => `/Aradhya Homeopathy  Utsav bhai/${imageNumber}.png`
);
const mobilePromotionalImages = [
  'Screenshot 2026-09-03 121949.png',
  'Screenshot 2026-09-03 122021.png',
  'Screenshot 2026-09-03 122041.png',
  'Screenshot 2026-09-03 122110.png'
].map((imageName) => `/mobile banner image/${imageName}`);

const PropertiesSection = () => {
  const [activePromotion, setActivePromotion] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePromotion((current) => (current + 1) % promotionalImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="properties-section">
      <div className="promotion-banner" aria-label="Homeopathy promotions">
        <div
          className="promotion-track"
          style={{ transform: `translateX(-${activePromotion * 100}%)` }}
        >
          {promotionalImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Aradhya Homeopathy promotion ${index + 1}`}
            />
          ))}
        </div>
        <div
          className="promotion-track mobile-promotion-track"
          style={{ transform: `translateX(-${(activePromotion % mobilePromotionalImages.length) * 100}%)` }}
        >
          {mobilePromotionalImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Aradhya Homeopathy mobile promotion ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="properties-container">
        <div className="properties-content">
          <div className="properties-left">
            <h1 className="properties-title">Find Natural Healing</h1>
            <h2 className="properties-title-green">With Homeopathy</h2>
            <div className="properties-description">
              <p>Connect with India's top-rated <span className="highlight-green">homeopathy experts.</span></p>
              <p>Zero side effects. <span className="highlight-green">100% natural</span> medicines.</p>
            </div>
            <div className="properties-buttons">
              <button className="btn-primary-green">Book Consultation Free</button>
              <button className="btn-secondary-white">Order Medicines</button>
            </div>
          </div>

          <div className="properties-logo">
            <img 
              src="/ChatGPT_Image_Aug_20__2026__10_12_48_PM-removebg-preview.png" 
              alt="Aradhya Homeopathy Medical Symbol" 
              className="medical-symbol-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
