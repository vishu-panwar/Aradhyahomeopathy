import React from 'react';
import './HomoeopathicApproach.css';

const HomoeopathicApproach = () => {
  return (
    <section className="homoeopathic-approach">
      <div className="approach-container">
        <div className="approach-content">
          <h2 className="approach-title">HOMOEOPATHIC<br/>APPROACH</h2>
          <p className="approach-description">
            At Sai, we believe there's a better way to feel better with homoeopathic. Discover 
            this holistic system of medicine and all the benefits it can offer to you.
          </p>
          <button className="approach-learn-btn">Learn About Homeopathy</button>
        </div>
        
        <div className="approach-doctor-section">
          <div className="doctor-circle-outline">
            <div className="circular-text">
              <svg viewBox="0 0 200 200" className="circular-text-svg">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  />
                </defs>
                <text className="circular-text-path">
                  <textPath href="#circlePath" startOffset="0%">
                    ARADHYA.HOMEOPATHY.MEDICINES.
                  </textPath>
                </text>
              </svg>
            </div>
            <img 
              src="/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo-removebg-preview.png" 
              alt="Doctor" 
              className="doctor-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomoeopathicApproach;
