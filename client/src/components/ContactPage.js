import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import { initEmailJS, sendOwnerNotification, validateFormData } from '../utils/emailService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consultationSlot: ''
  });

  const [requestType, setRequestType] = useState('GENERAL ENQUIRY');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ show: false, type: '', message: '' });
  const [errors, setErrors] = useState({});

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRequestTypeChange = (type) => {
    setRequestType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmitStatus({
        show: true,
        type: 'error',
        message: '❌ Please fill all required fields correctly'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ show: false, type: '', message: '' });
    setErrors({});

    try {
      // Send email to owner
      await sendOwnerNotification(formData, requestType);
      
      // Show success message
      setSubmitStatus({
        show: true,
        type: 'success',
        message: requestType === 'BOOK A FREE CONSULTATION' 
          ? '✅ Thank you! Your consultation request has been received. We will contact you within 24 hours to schedule your appointment.'
          : '✅ Thank you for contacting us! We have received your inquiry and will respond shortly.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consultationSlot: ''
      });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setSubmitStatus({ show: false, type: '', message: '' });
      }, 6000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        show: true,
        type: 'error',
        message: '❌ Oops! Something went wrong. Please try again or contact us directly at support@aradhyahomeopathy.in'
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <button 
                type="button"
                className={`action-btn ${requestType === 'GENERAL ENQUIRY' ? 'primary' : 'secondary'}`}
                onClick={() => handleRequestTypeChange('GENERAL ENQUIRY')}
              >
                📞 General Enquiry
              </button>
              <button 
                type="button"
                className={`action-btn ${requestType === 'BOOK A FREE CONSULTATION' ? 'primary' : 'secondary'}`}
                onClick={() => handleRequestTypeChange('BOOK A FREE CONSULTATION')}
              >
                📅 Book Consultation
              </button>
            </div>

            {/* Status Message */}
            {submitStatus.show && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="👤 Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={errors.name ? 'error' : ''}
                    required
                  />
                  {errors.name && <span className="error-msg">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="✉️ Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error-msg">{errors.email}</span>}
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
                    disabled={isSubmitting}
                    className={errors.phone ? 'error' : ''}
                    required
                  />
                  {errors.phone && <span className="error-msg">{errors.phone}</span>}
                </div>
                <div className="form-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={errors.subject ? 'error' : ''}
                    required
                  >
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Product Information</option>
                    <option>Consultation Request</option>
                    <option>Chronic Allergy & Skin Consultation</option>
                    <option>Digestive Health Consultation</option>
                    <option>Respiratory Issues Consultation</option>
                    <option>Order Support</option>
                    <option>Other</option>
                  </select>
                  {errors.subject && <span className="error-msg">{errors.subject}</span>}
                </div>
              </div>

              {requestType === 'BOOK A FREE CONSULTATION' && (
                <div className="form-group">
                  <input
                    type="text"
                    name="consultationSlot"
                    placeholder="🕐 Preferred Time Slot (e.g., Tomorrow Morning 11:00 AM - 12:30 PM)"
                    value={formData.consultationSlot}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
              )}

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message / Clinical Query"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={errors.message ? 'error' : ''}
                  rows="5"
                  required
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? '⏳ Sending...' : '📧 Send Message'}
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
          <button type="button" className="view-all">View All FAQs →</button>
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
