import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          <div className="contact-hero-content">
            <span className="contact-label">CONTACT US</span>
            <h1 className="contact-hero-title">We're Here to<br/>Help You Heal Naturally</h1>
            <p className="contact-hero-description">
              Have questions about our products or need personalized homeopathic advice?<br/>
              Our team is ready to assist you.
            </p>
            
            {/* Feature Icons */}
            <div className="contact-features">
              <div className="contact-feature">
                <div className="feature-icon-circle">💬</div>
                <p>Quick Response</p>
              </div>
              <div className="contact-feature">
                <div className="feature-icon-circle">🤝</div>
                <p>Expert Support</p>
              </div>
              <div className="contact-feature">
                <div className="feature-icon-circle">✅</div>
                <p>Trusted Care</p>
              </div>
              <div className="contact-feature">
                <div className="feature-icon-circle">💊</div>
                <p>Holistic Healing</p>
              </div>
            </div>
          </div>
          
          <div className="contact-hero-image">
            <img 
              src="/ChatGPT Image Aug 23, 2026, 12_08_09 PM.png" 
              alt="Aradhya Products" 
              className="hero-products-image"
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Left Side - Form */}
          <div className="contact-form-section">
            <h2 className="section-heading">Send Us a Message or<br/>Book a Free Consultation</h2>
            <p className="section-subheading">We'll get back to you as soon as possible.</p>
            
            <div className="form-actions">
              <button className="action-btn primary">📞 General Enquiry</button>
              <button className="action-btn secondary">📅 Book Consultation</button>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="👤 Your Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="✉️ Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="📞 Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Consultation Request</option>
                    <option>Order Support</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                📧 Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="contact-info-section">
            <h2 className="section-heading">Get in Touch</h2>
            <p className="section-subheading">We're always here to help!</p>

            <div className="contact-info-cards">
              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p className="info-highlight">+91 98765 43210</p>
                  <p className="info-time">Mon - Sat: 9:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p className="info-highlight">support@aradhyahomeopathy.in</p>
                  <p className="info-time">We reply within 24 hours</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Address</h4>
                  <p className="info-highlight">123, Green Street, Delhi,</p>
                  <p className="info-time">India - 110025</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">🕐</div>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <p className="info-highlight">Mon - Sat: 8:30 AM - 6:30 PM</p>
                  <p className="info-time">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-banner">
        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon-large">🌿</div>
            <h3>100% Natural</h3>
            <p>Pure & Safe homeopathic remedies</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon-large">🩺</div>
            <h3>Secure Consultation</h3>
            <p>Your information is safe & confidential</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon-large">📚</div>
            <h3>Easy Booking</h3>
            <p>Simple easy consultation process in just few clicks</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon-large">🎯</div>
            <h3>Expert Guidance</h3>
            <p>Get advice from experienced homeopaths always</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="consultation-cta">
        <div className="cta-content-wrapper">
          <div className="cta-image-wrap">
            <img src="/ChatGPT Image Aug 24, 2026, 07_26_35 PM.png" alt="Consultation" className="cta-image" />
          </div>
          <div className="cta-text">
            <h3>Book a Personalized Consultation</h3>
            <p>Connect with expert homeopaths and get a customized treatment plan for better wellness.</p>
          </div>
          <button className="cta-btn-book">Book Now →</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <a href="#" className="view-all">View All FAQs →</a>
        </div>
        <div className="faq-grid">
          <div className="faq-column">
            <div className="faq-item">
              <h4>What is homeopathy and how does it work? <span className="faq-toggle">−</span></h4>
            </div>
            <div className="faq-item">
              <h4>Are your products safe to use? <span className="faq-toggle">+</span></h4>
            </div>
            <div className="faq-item">
              <h4>How long does it take to see results? <span className="faq-toggle">+</span></h4>
            </div>
            <div className="faq-item">
              <h4>Can I consult a doctor online? <span className="faq-toggle">+</span></h4>
            </div>
          </div>
          <div className="faq-column">
            <div className="faq-item">
              <h4>Do you offer homeopathic consultations? <span className="faq-toggle">+</span></h4>
            </div>
            <div className="faq-item">
              <h4>How are your products different? <span className="faq-toggle">+</span></h4>
            </div>
            <div className="faq-item">
              <h4>Do you ship internationally? <span className="faq-toggle">+</span></h4>
            </div>
            <div className="faq-item">
              <h4>What's your return policy? <span className="faq-toggle">+</span></h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
