import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewAboutPage.css';

const NewAboutPage = () => {
  const impactNumbers = [
    { count: '50,000+', label: 'Happy Customers' },
    { count: '150+', label: 'Natural Products' },
    { count: '25+', label: 'Expert Homeopaths' },
    { count: '4.8/5', label: 'Customer Rating' }
  ];

  const experts = [
    {
      avatar: '🩺',
      name: 'Dr. Aashish Sharma',
      designation: 'Chief Homeopathic Consultant',
      bio: 'Expert in classical homeopathy with 15+ years of clinical experience in root-cause medicine.'
    },
    {
      avatar: '👩‍⚕️',
      name: 'Dr. Priya Verma',
      designation: 'Homeopathic Physician',
      bio: 'Specializes in chronic conditions with a dedicated, compassionate, patient-first approach.'
    },
    {
      avatar: '👨‍⚕️',
      name: 'Amit Kumar',
      designation: 'Wellness Expert',
      bio: 'Passionate about holistic preventive wellness and customized natural lifestyle support.'
    }
  ];

  const differences = [
    {
      icon: '✦',
      title: '100% Natural',
      desc: 'Our products are made from natural ingredients with no harmful chemicals.'
    },
    {
      icon: '✦',
      title: 'Backed by Science',
      desc: 'Formulated using scientific principles of homeopathy and evidence-based care.'
    },
    {
      icon: '✦',
      title: 'Trusted Quality',
      desc: 'Every product goes through quality checks to ensure purity and safety.'
    },
    {
      icon: '✦',
      title: 'Expert Guidance',
      desc: 'Our team offers personalized support for your wellness and healing journey.'
    },
    {
      icon: '✦',
      title: 'Affordable Wellness',
      desc: 'Premium healthcare that is accessible, compassionate, and easy to trust.'
    }
  ];

  const milestones = [
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

  return (
    <div className="new-about-page">
      {/* Breadcrumbs */}
      <div className="container breadcrumbs">
        <Link to="/">Home</Link> &gt;{' '}
        <span style={{ color: 'var(--primary-dark)', fontWeight: 700 }}>About Us</span>
      </div>

      {/* Hero Header Section */}
      <section className="container about-hero">
        <div className="hero-split-grid">
          <div>
            <span className="section-eyebrow">About Us</span>
            <h1 className="hero-main-title">
              Rooted in Nature,
              <br />
              Driven by Purpose
            </h1>
            <p className="hero-main-desc">
              Aradhya Homeopathy is committed to delivering natural, safe, and effective solutions
              that promote long-term wellness for you and your family.
            </p>
            <Link to="/shop" className="btn-hero-explore">
              Explore Our Products
            </Link>
          </div>

          {/* Right Artwork Box */}
          <div className="hero-artwork-frame">
            <div className="hero-remedy-strip">
              <div className="hero-mock-pack p-1">
                <span style={{ fontSize: '16px' }}>💧</span>
                <span style={{ fontSize: '7px', fontWeight: 800, marginTop: '4px' }}>BP Care</span>
              </div>
              <div className="hero-mock-pack p-2">
                <span style={{ fontSize: '18px' }}>🌿</span>
                <span style={{ fontSize: '7px', fontWeight: 800, marginTop: '4px' }}>
                  Asthamax
                </span>
              </div>
              <div className="hero-mock-pack p-3">
                <span style={{ fontSize: '16px' }}>💊</span>
                <span style={{ fontSize: '7px', fontWeight: 800, marginTop: '4px' }}>
                  Cervo Go
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Pillar Assurance Badges Bar */}
      <section className="container">
        <div className="assurance-pills-row">
          <div className="assurance-pill-box">
            <span>✓</span> 100% Natural
          </div>
          <div className="assurance-pill-box">
            <span>✓</span> Safe & Gentle
          </div>
          <div className="assurance-pill-box">
            <span>✓</span> Expert Formulated
          </div>
          <div className="assurance-pill-box">
            <span>✓</span> Trusted by Thousands
          </div>
          <div className="assurance-pill-box">
            <span>✓</span> Holistic Healing
          </div>
        </div>
      </section>

      {/* "Our Story" Split Section */}
      <section className="container story-section">
        <div className="story-grid">
          {/* Left Visual Illustration */}
          <div className="story-visual-side">🥣</div>

          {/* Right Content Details */}
          <div>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="story-heading">The Journey of Aradhya Homeopathy</h2>
            <p className="story-lead-p">
              Aradhya Homeopathy was born out of a simple belief — that nature has the power to
              heal. What started as a small initiative to offer gentle, natural care has evolved
              into a trusted wellness destination for families seeking safe and effective remedies.
              <br />
              <br />
              We combine traditional homeopathic principles with modern understanding to create
              remedies that are gentle, effective, and aligned with today's health needs.
            </p>

            {/* Principles Blocks */}
            <div className="principles-stack">
              <div className="principle-box">
                <div className="principle-icon-wrap">+</div>
                <div>
                  <h4 className="principle-title">Our Mission</h4>
                  <p className="principle-desc">
                    To deliver natural, safe, and effective homeopathic solutions for everyday
                    wellness.
                  </p>
                </div>
              </div>
              <div className="principle-box">
                <div className="principle-icon-wrap">+</div>
                <div>
                  <h4 className="principle-title">Our Values</h4>
                  <p className="principle-desc">
                    Integrity, compassion, and a commitment to helping people live healthier,
                    happier lives.
                  </p>
                </div>
              </div>
              <div className="principle-box">
                <div className="principle-icon-wrap">+</div>
                <div>
                  <h4 className="principle-title">Our Promise</h4>
                  <p className="principle-desc">
                    To be a global leader in homeopathy, inspiring healthier living through nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Impact Numbers Bar */}
      <section className="container">
        <div className="impact-numbers-bar">
          {impactNumbers.map((item, index) => (
            <div key={index} className="impact-item">
              <div className="impact-count">{item.count}</div>
              <div className="impact-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* "The People Behind Aradhya" */}
      <section className="container experts-section">
        <div className="section-center-head">
          <span className="section-eyebrow">Our Experts</span>
          <h2>The People Behind Aradhya</h2>
        </div>
        <div className="experts-grid-3">
          {experts.map((expert, index) => (
            <div key={index} className="expert-profile-card">
              <div className="expert-avatar-circle">{expert.avatar}</div>
              <h3 className="expert-name">{expert.name}</h3>
              <div className="expert-designation">{expert.designation}</div>
              <p className="expert-bio">{expert.bio}</p>
              <div className="expert-social-links">
                <a href="#" className="expert-social-btn">
                  f
                </a>
                <a href="#" className="expert-social-btn">
                  in
                </a>
                <a href="#" className="expert-social-btn">
                  🌐
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "What Makes Us Different" (5 Cards) */}
      <section className="container differences-section">
        <div className="section-center-head">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2>What Makes Us Different</h2>
        </div>
        <div className="diff-grid-5">
          {differences.map((diff, index) => (
            <div key={index} className="diff-card">
              <div className="diff-star-icon">{diff.icon}</div>
              <h3 className="diff-title">{diff.title}</h3>
              <p className="diff-desc">{diff.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* "Milestones of Trust & Growth" (6 Cards) */}
      <section className="container milestones-section">
        <div className="section-center-head">
          <span className="section-eyebrow">Our Journey</span>
          <h2>Milestones of Trust & Growth</h2>
        </div>
        <div className="milestones-grid-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="milestone-card">
              <div className="milestone-dot-badge">+</div>
              <div className="milestone-year">{milestone.year}</div>
              <p className="milestone-text">{milestone.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Certification Assurance Bar */}
      <section className="container">
        <div className="cert-assurance-bar">
          <div className="cert-badges-left">
            <span className="cert-badge-tag">✓ GMP Certified</span>
            <span className="cert-badge-tag">✓ ISO Certified</span>
            <span className="cert-badge-tag">✓ AYUSH Approved</span>
            <span className="cert-badge-tag">✓ Clinical Tested</span>
          </div>
          <Link to="/shop" className="btn-cert-shop">
            Shop With Confidence
          </Link>
        </div>
      </section>

      {/* Healing Journey CTA Banner */}
      <section className="container">
        <div className="healing-cta-banner">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Begin Your Natural Healing Journey Today</h2>
            <p className="cta-banner-desc">
              Explore our wide range of natural homeopathic products for you and your loved ones.
            </p>
            <Link to="/shop" className="btn-banner-shop">
              Shop Now
            </Link>
          </div>
          <div className="cta-bottles-row">
            <div className="hero-mock-pack p-1">
              <span style={{ fontSize: '16px' }}>💧</span>
              <span style={{ fontSize: '7px', fontWeight: 800, marginTop: '4px' }}>BP Care</span>
            </div>
            <div className="hero-mock-pack p-2">
              <span style={{ fontSize: '18px' }}>🌿</span>
              <span style={{ fontSize: '7px', fontWeight: 800, marginTop: '4px' }}>Asthamax</span>
            </div>
            <div className="hero-mock-pack p-3">
              <span style={{ fontSize: '16px' }}>💊</span>
              <span style={{ fontSize: '7px', fontWeight: 800, marginTop: '4px' }}>Cervo Go</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewAboutPage;
