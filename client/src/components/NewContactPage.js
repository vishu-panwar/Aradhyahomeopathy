import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewContactPage.css';

const NewContactPage = () => {
  const [formMode, setFormMode] = useState('enquiry'); // 'enquiry' or 'booking'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    consultationDate: '',
    consultationTime: '',
    message: ''
  });
  const [openFaqs, setOpenFaqs] = useState([]);

  const switchFormMode = (mode) => {
    setFormMode(mode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const type = formMode === 'booking' ? 'Book Consultation' : 'General Enquiry';
    alert(`Thank you! Your ${type} has been submitted successfully. Our medical coordinator will reach out shortly.`);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      consultationDate: '',
      consultationTime: '',
      message: ''
    });
    setFormMode('enquiry');
  };

  const toggleFaq = (index) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'What is homeopathy and how does it work?',
      answer: 'Homeopathy is a gentle holistic system of medicine based on the principle of "like cures like". Highly diluted natural micro-doses stimulate your body\'s inherent self-healing defenses to restore long-term equilibrium.'
    },
    {
      question: 'Do you offer homeopathic consultations online?',
      answer: 'Yes! We offer detailed online audio and video evaluations across India. After reviewing your symptom picture, prescribed remedies are delivered directly to your doorstep.'
    },
    {
      question: 'Are your products safe to use?',
      answer: '100% safe. All our remedies adhere to strict Homoeopathic Pharmacopoeia of India (HPI) regulations and are free from chemical preservatives, steroids, and habit-forming compounds.'
    },
    {
      question: 'How are your products different?',
      answer: 'We use genuine organic cane sugar globules, hand-succussed dilutions, and authentic mother tinctures handled under clean-room pharmaceutical standards.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Acute complaints (sprains, colds, fresh indigestion) typically show noticeable relief within 12 to 24 hours. Deep-seated chronic disorders take 2 to 6 weeks for complete root-cause healing.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Currently, our active dispatch network covers all pin codes across India with expedited delivery. Overseas orders can be arranged by contacting our support desk directly.'
    },
    {
      question: 'Can I consult a doctor online?',
      answer: 'Absolutely. Choose the "Book Consultation" tab above or click "Book Now" to reserve your convenient date and time with our senior medical officers.'
    },
    {
      question: 'What\'s your return policy?',
      answer: 'Due to clinical sterility guidelines, opened medicines cannot be returned. However, damaged or defective items during transit are replaced immediately with no questions asked.'
    }
  ];

  return (
    <div className="new-contact-page">
      {/* Hero Presentation Section */}
      <section className="contact-hero-new">
        <div className="container-new-contact hero-grid-new">
          <div>
            <span className="contact-badge-new">Contact Us</span>
            <h1 className="hero-title-new">We're Here to Help You Heal Naturally</h1>
            <p className="hero-desc-new">
              Have questions about our genuine homeopathic remedies or need individualized clinical guidance? Our panel of certified homeopaths is here to assist you.
            </p>
            
            {/* 4 Circular Icons Row */}
            <div className="hero-icons-row">
              <div className="hero-icon-item">
                <div className="hero-icon-circle">
                  <span style={{ fontSize: '24px' }}>💬</span>
                </div>
                <div className="hero-icon-label">Quick<br/>Response</div>
              </div>
              <div className="hero-icon-item">
                <div className="hero-icon-circle">
                  <span style={{ fontSize: '24px' }}>🤝</span>
                </div>
                <div className="hero-icon-label">Expert<br/>Support</div>
              </div>
              <div className="hero-icon-item">
                <div className="hero-icon-circle">
                  <span style={{ fontSize: '24px' }}>✅</span>
                </div>
                <div className="hero-icon-label">Trusted<br/>Care</div>
              </div>
              <div className="hero-icon-item">
                <div className="hero-icon-circle">
                  <span style={{ fontSize: '24px' }}>💊</span>
                </div>
                <div className="hero-icon-label">Holistic<br/>Healing</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Page Image */}
          <div className="hero-art-side">
            <img 
              src="/contact page.png" 
              alt="Aradhya Homeopathy Products" 
              style={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      </section>

      {/* Main Interaction Form & Office Contacts Grid */}
      <section className="interaction-section" id="consultation-form">
        <div className="container-new-contact interaction-grid">
          {/* Interactive Form Container */}
          <div className="form-card-new">
            <div className="form-head">
              <h2 className="form-title-new">
                {formMode === 'booking' 
                  ? 'Book a Free Consultation' 
                  : 'Send Us a Message or Book a Free Consultation'}
              </h2>
              <p className="form-sub-new">We'll get back to you as soon as possible via phone or WhatsApp.</p>
            </div>

            {/* Mode Toggle Tabs */}
            <div className="tabs-wrap">
              <button 
                type="button" 
                className={`tab-toggle-btn ${formMode === 'enquiry' ? 'active' : ''}`}
                onClick={() => switchFormMode('enquiry')}
              >
                📞 General Enquiry
              </button>
              <button 
                type="button" 
                className={`tab-toggle-btn ${formMode === 'booking' ? 'active' : ''}`}
                onClick={() => switchFormMode('booking')}
              >
                📅 Book Consultation
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              {/* Name & Email Row */}
              <div className="input-grid-2">
                <div className="input-field-wrap">
                  <span className="field-icon">👤</span>
                  <input 
                    type="text" 
                    className="form-input-new" 
                    name="name" 
                    placeholder="Your Full Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="input-field-wrap">
                  <span className="field-icon">✉️</span>
                  <input 
                    type="email" 
                    className="form-input-new" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              {/* Phone & Subject Row */}
              <div className="input-grid-2">
                <div className="input-field-wrap">
                  <span className="field-icon">📞</span>
                  <input 
                    type="tel" 
                    className="form-input-new" 
                    name="phone" 
                    placeholder="Your Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <select 
                    className="form-select-new" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="Chronic Allergy / Respiratory">Chronic Allergy / Respiratory</option>
                    <option value="Skin & Dermatological Care">Skin & Dermatological Care</option>
                    <option value="Digestive & Acidity Issues">Digestive & Acidity Issues</option>
                    <option value="Hair Fall & Follicle Therapy">Hair Fall & Follicle Therapy</option>
                    <option value="Joint & Muscular Pain">Joint & Muscular Pain</option>
                    <option value="Pediatric / Baby Wellness">Pediatric / Baby Wellness</option>
                    <option value="General Health Query">General Health Query</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Consultation Slot Picker (Revealed in Booking Mode) */}
              <div className={`consult-slot-box ${formMode === 'booking' ? 'visible' : ''}`}>
                <label className="slot-label">Preferred Appointment Slot</label>
                <div className="input-grid-2">
                  <input 
                    type="date" 
                    className="form-input-new" 
                    name="consultationDate" 
                    style={{ paddingLeft: '14px' }}
                    value={formData.consultationDate}
                    onChange={handleInputChange}
                  />
                  <select 
                    className="form-select-new" 
                    name="consultationTime"
                    value={formData.consultationTime}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select Time Slot</option>
                    <option value="Morning (9:30 AM - 12:30 PM)">Morning (9:30 AM - 12:30 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <textarea 
                className="form-textarea-new" 
                name="message" 
                placeholder="Your Message / Clinical Query (e.g. your symptoms, duration, current medicines)" 
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              {/* Submit Button */}
              <button type="submit" className="btn-submit-new">
                <span>✉️</span>
                <span>{formMode === 'booking' ? 'Confirm Consultation Slot' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Right Contact Info Stack */}
          <div className="info-cards-stack">
            <h2 className="info-stack-title">Get in Touch</h2>
            <p className="info-stack-desc">We're always here to help you restore holistic vitality!</p>

            {/* Phone Card */}
            <div className="info-box-new">
              <div className="info-icon-pill">📞</div>
              <div>
                <div className="info-title-new">Phone</div>
                <div className="info-highlight-new">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
                <div className="info-timing">Mon - Sat: 9:00 AM - 9:00 PM</div>
              </div>
            </div>

            {/* Email Card */}
            <div className="info-box-new">
              <div className="info-icon-pill">✉️</div>
              <div>
                <div className="info-title-new">Email</div>
                <div className="info-highlight-new">
                  <a href="mailto:support@aradhyahomeopathy.in">support@aradhyahomeopathy.in</a>
                </div>
                <div className="info-timing">We reply within 24 hours</div>
              </div>
            </div>

            {/* Address Card */}
            <div className="info-box-new">
              <div className="info-icon-pill">📍</div>
              <div>
                <div className="info-title-new">Address</div>
                <div className="info-highlight-new" style={{ fontSize: '14.5px' }}>123, Green Street, Delhi,</div>
                <div className="info-timing">India - 110025</div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="info-box-new">
              <div className="info-icon-pill">⏰</div>
              <div>
                <div className="info-title-new">Working Hours</div>
                <div className="info-highlight-new" style={{ fontSize: '14.5px', color: 'var(--accent-green)' }}>Mon - Sat: 8:30 AM - 6:30 PM</div>
                <div className="info-timing">Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="map-section">
        <div className="container-new-contact">
          <div className="map-container">
            <iframe
              title="Aradhya Homeopathy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.61812075706!2d77.04417267247064!3d28.52725287056997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4 Pillars of Holistic Care Strip */}
      <section className="container-new-contact">
        <div className="trust-four-grid">
          <div className="trust-card-new">
            <div className="trust-card-icon">🌿</div>
            <h3 className="trust-card-title">100% Natural</h3>
            <p className="trust-card-desc">Pure & safe homeopathic remedies crafted without synthetic adulterants.</p>
          </div>
          <div className="trust-card-new">
            <div className="trust-card-icon">🩺</div>
            <h3 className="trust-card-title">Secure Consultation</h3>
            <p className="trust-card-desc">Your clinical records and personal symptoms remain strictly confidential.</p>
          </div>
          <div className="trust-card-new">
            <div className="trust-card-icon">📑</div>
            <h3 className="trust-card-title">Easy Booking</h3>
            <p className="trust-card-desc">Simple scheduling procedure in just a few quick clicks with zero wait times.</p>
          </div>
          <div className="trust-card-new">
            <div className="trust-card-icon">🎯</div>
            <h3 className="trust-card-title">Expert Guidance</h3>
            <p className="trust-card-desc">Personalized remedies directed by experienced, certified practitioners.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner: Book Personalized Consultation */}
      <section className="container-new-contact">
        <div className="consult-banner">
          <div className="banner-flex">
            <div className="banner-left">
              <div className="banner-calendar-icon">📅</div>
              <div className="banner-text">
                <h3>Book a Personalized Consultation</h3>
                <p>Connect with expert homeopaths and receive an individualized treatment plan tailored for lasting wellness.</p>
              </div>
            </div>
            <button 
              className="btn-banner-white"
              onClick={() => {
                switchFormMode('booking');
                document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Now &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion Grid */}
      <section className="container-new-contact faq-section-new">
        <div className="faq-header-row">
          <h2 className="faq-title-new">Frequently Asked Questions</h2>
          <Link to="/blog" className="faq-all-link">View All FAQs &rarr;</Link>
        </div>
        
        <div className="faq-grid-2">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item-new ${openFaqs.includes(index) ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <button type="button" className="faq-trigger">
                <span>{faq.question}</span>
                <span className="faq-symbol">{openFaqs.includes(index) ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewContactPage;
