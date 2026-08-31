import React from 'react';
import './AboutPage.css';

const featureItems = [
  '100% Natural',
  'Safe & Gentle',
  'Expert Formulated',
  'Trusted by Thousands',
  'Holistic Healing'
];

const storyHighlights = [
  {
    title: 'Our Mission',
    text: 'To deliver natural, safe, and effective homeopathic solutions for everyday wellness.'
  },
  {
    title: 'Our Values',
    text: 'Integrity, compassion, and a commitment to helping people live healthier, happier lives.'
  },
  {
    title: 'Our Promise',
    text: 'To be a global leader in homeopathy, inspiring healthier living through nature.'
  }
];

const experts = [
  {
    name: 'Dr. Aashish Sharma',
    role: 'Chief Homeopathic Consultant',
    detail: 'Expert in classical homeopathy with 15+ years of experience.',
    image: '/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo-removebg-preview.png'
  },
  {
    name: 'Dr. Priya Verma',
    role: 'Homeopathic Physician',
    detail: 'Specializes in chronic conditions with a patient-first approach.',
    image: '/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo-removebg-preview.png'
  },
  {
    name: 'Amit Kumar',
    role: 'Wellness Expert',
    detail: 'Passionate about holistic wellness and natural lifestyle support.',
    image: '/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo-removebg-preview.png'
  }
];

const reasons = [
  {
    title: '100% Natural',
    text: 'Our products are made from natural ingredients with no harmful chemicals.'
  },
  {
    title: 'Backed by Science',
    text: 'Formulated using scientific principles of homeopathy and evidence-based care.'
  },
  {
    title: 'Trusted Quality',
    text: 'Every product goes through quality checks to ensure purity and safety.'
  },
  {
    title: 'Expert Guidance',
    text: 'Our team offers personalized support for your wellness and healing journey.'
  },
  {
    title: 'Affordable Wellness',
    text: 'Premium healthcare that is accessible, compassionate, and easy to trust.'
  }
];

const timeline = [
  {
    year: '2018',
    text: 'The beginning of our mission to bring natural healing to every home.'
  },
  {
    year: '2019',
    text: 'Launched our first range of homeopathic treatments.'
  },
  {
    year: '2020',
    text: '50,000+ happy customers and growing trust across India.'
  },
  {
    year: '2021',
    text: 'Expanded our product range for complete family wellness.'
  },
  {
    year: '2022',
    text: 'Trusted by 50,000+ customers and growing each day.'
  },
  {
    year: '2024 & Beyond',
    text: 'Expanding our reach to deliver natural wellness worldwide.'
  }
];

const trustBadges = [
  'GMP Certified',
  'ISO Certified',
  'AYUSH Approved',
  'Clinical Tested'
];

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero-shell">
        <div className="about-nav-label">Home <span>/</span> About Us</div>

        <div className="about-hero">
          <div className="about-copy">
            <div className="section-kicker">ABOUT US</div>
            <h1>Rooted in Nature,<br />Driven by Purpose</h1>
            <p>
              Aradhya Homeopathy is committed to delivering natural, safe, and
              effective solutions that promote long-term wellness for you and your family.
            </p>
            <button className="primary-button">Explore Our Products</button>
          </div>

          <div className="about-visual">
            <div className="hero-bottle-stack">
              <div className="leaf leaf-1" />
              <div className="leaf leaf-2" />
              <div className="leaf leaf-3" />
              <div className="leaf leaf-4" />
              <div className="leaf leaf-5" />
              <div className="product-bottle bottle-large">
                <img src="/product1.png" alt="homeopathy product" />
              </div>
              <div className="product-bottle bottle-mid">
                <img src="/product2.png" alt="homeopathy product" />
              </div>
              <div className="product-bottle bottle-small">
                <img src="/product3.png" alt="homeopathy product" />
              </div>
              <div className="hero-wood" />
            </div>
          </div>
        </div>

        <div className="feature-row">
          {featureItems.map((item) => (
            <div className="feature-pill" key={item}>
              <span className="feature-icon">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="story-section">
        <div className="story-visual">
          <div className="story-bowl">
            <div className="mini-bottle mini-one" />
            <div className="mini-bottle mini-two" />
            <div className="mini-bottle mini-three" />
          </div>
        </div>

        <div className="story-copy">
          <div className="section-kicker">OUR STORY</div>
          <h2>The Journey of Aradhya Homeopathy</h2>
          <p>
            Aradhya Homeopathy was born out of a simple belief — that nature has the
            power to heal. What started as a small initiative to offer gentle, natural
            care has evolved into a trusted wellness destination for families seeking
            safe and effective remedies.
          </p>
          <p>
            We combine traditional homeopathic principles with modern understanding to
            create remedies that are gentle, effective, and aligned with today’s health
            needs.
          </p>

          <div className="story-highlights">
            {storyHighlights.map((item) => (
              <div className="story-card" key={item.title}>
                <div className="story-card-icon">✦</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat-item">
          <strong>50,000+</strong>
          <span>Happy Customers</span>
        </div>
        <div className="stat-item">
          <strong>150+</strong>
          <span>Natural Products</span>
        </div>
        <div className="stat-item">
          <strong>25+</strong>
          <span>Expert Homeopaths</span>
        </div>
        <div className="stat-item">
          <strong>4.8/5</strong>
          <span>Customer Rating</span>
        </div>
      </div>

      <section className="experts-section">
        <div className="section-heading">
          <div className="section-kicker">OUR EXPERTS</div>
          <h2>The People Behind Aradhya</h2>
        </div>

        <div className="experts-grid">
          {experts.map((expert) => (
            <div className="expert-card" key={expert.name}>
              <div className="expert-photo-wrap">
                <img src={expert.image} alt={expert.name} />
              </div>
              <h3>{expert.name}</h3>
              <p className="expert-role">{expert.role}</p>
              <p className="expert-detail">{expert.detail}</p>
              <div className="expert-socials">
                <span>f</span>
                <span>in</span>
                <span>◎</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="why-us-section">
        <div className="section-heading center">
          <div className="section-kicker">WHY CHOOSE US</div>
          <h2>What Makes Us Different</h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-card" key={reason.title}>
              <div className="why-icon">✦</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="journey-section">
        <div className="section-heading center">
          <div className="section-kicker">OUR JOURNEY</div>
          <h2>Milestones of Trust & Growth</h2>
        </div>

        <div className="timeline-grid">
          {timeline.map((item) => (
            <div className="timeline-card" key={item.year}>
              <div className="timeline-badge">✦</div>
              <div className="timeline-year">{item.year}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-row">
          {trustBadges.map((badge) => (
            <div className="trust-item" key={badge}>
              <div className="trust-icon">✓</div>
              <span>{badge}</span>
            </div>
          ))}
          <button className="primary-button">Shop With Confidence</button>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-copy">
          <h2>Begin Your Natural Healing Journey Today</h2>
          <p>Explore our wide range of natural homeopathic products for you and your loved ones.</p>
        </div>
        <button className="primary-button">Shop Now</button>
        <div className="cta-product-stack">
          <img src="/product1.png" alt="natural remedy" />
          <img src="/product2.png" alt="natural remedy" />
          <img src="/product3.png" alt="natural remedy" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
