import React from 'react';
import './PropertiesSection.css';

const PropertiesSection = () => {
  return (
    <section className="properties-section">
      <div className="properties-container">
        <div className="properties-content">
          <div className="properties-left">
            <h2 className="properties-title">
              Find Natural Healing
            </h2>
            <h2 className="properties-title-green">
              With Homeopathy
            </h2>
            <p className="properties-description">
              Connect with India's top-rated <span className="highlight-green">homeopathy experts</span>.<br />
              Zero side effects. <span className="highlight-green">100% natural</span> medicines.
            </p>
            <div className="properties-buttons">
              <button className="btn-primary-green">
                Book Consultation Free
              </button>
              <button className="btn-secondary-white">
                Order Medicines
              </button>
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
