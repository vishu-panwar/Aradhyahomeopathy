import React, { useEffect, useState } from 'react';
import './PropertiesSection.css';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80',
    title: 'Natural Healing',
    subtitle: 'Complete care for a healthier lifestyle',
    tag: 'Homeopathy for modern living',
  },
  {
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    title: 'Expert Guidance',
    subtitle: 'Consult trusted specialists for personal wellness',
    tag: 'Personalized treatment plans',
  },
  {
    image:
      'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80',
    title: 'Better Everyday Care',
    subtitle: 'Safe, natural solutions for the whole family',
    tag: 'Zero side effects',
  },
];

const PropertiesSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="properties-section">
      <div className="hero-slider" aria-label="Promotional banner slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="slider-slide" key={slide.title}>
              <img src={slide.image} alt={slide.title} />
              <div className="slider-overlay" />
              <div className="slider-content">
                <span className="slider-tag">{slide.tag}</span>
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots" aria-label="Slider navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={index === activeSlide ? 'dot active' : 'dot'}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>

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
