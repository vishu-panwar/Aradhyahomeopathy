import React, { useState, useEffect } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Abhishek',
      role: 'Customer',
      avatar: '👨',
      text: 'Yes definitely, homeopathy has played an important role in fighting & curing this killing virus not only for me but for many others in my known. I would like to say a big thank you and my salute to my Doctor Shashank Mohta for help & supporting me in this diff...',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Customer',
      avatar: '👩',
      text: 'Aradhya Homeopathy has been a blessing for my family. The medicines are pure and effective. Dr. Mohta\'s personalized treatment helped me recover from chronic illness. Highly recommended for natural healing!',
      rating: 5
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Customer',
      avatar: '👨‍💼',
      text: 'Best homeopathy service I have experienced. The consultation was thorough and the medicines worked wonderfully. Their nationwide delivery is very convenient. Thank you Aradhya Homeopathy!',
      rating: 5
    },
    {
      id: 4,
      name: 'Sneha Patel',
      role: 'Customer',
      avatar: '👩‍⚕️',
      text: 'Amazing results with homeopathy treatment! I was skeptical at first, but the personalized care and quality medicines from Aradhya Homeopathy changed my perspective. Truly grateful for their support.',
      rating: 5
    }
  ];

  // Auto-play functionality - reviews change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="testimonial-title">Testimonial</h2>
        </div>

        <div className="testimonial-content">
          <div className="testimonial-left">
            <div className="quote-icon">❝</div>
            <div className="testimonial-text">
              <p>{testimonials[currentIndex].text}</p>
            </div>

            <div className="testimonial-author">
              <div className="author-info">
                <div className="author-avatar">{testimonials[currentIndex].avatar}</div>
                <div className="author-details">
                  <h4 className="author-name">{testimonials[currentIndex].name}</h4>
                  <p className="author-role">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              <div className="testimonial-controls">
                <button 
                  className="control-btn prev-testimonial" 
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button 
                  className="control-btn next-testimonial" 
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div className="testimonial-right">
            <img 
              src="/ChatGPT_Image_Aug_21__2026__11_10_13_AM-removebg-preview.png" 
              alt="Homeopathy medicines with mortar and pestle"
              className="testimonial-product-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
