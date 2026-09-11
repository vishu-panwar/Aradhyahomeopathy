import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './ProductDetail.css';
import { getProductById, getRelatedProducts } from '../data/productsData';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('indications');

  useEffect(() => {
    const productData = getProductById(productId);
    if (productData) {
      setProduct(productData);
      setRelatedProducts(getRelatedProducts(productId));
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  }, [productId, navigate]);

  if (!product) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="product-detail-page-new">
      {/* Breadcrumb */}
      <div className="breadcrumbs-new">
        <div className="container-new">
          <Link to="/">🏠 Home</Link>
          <span className="separator">›</span>
          <Link to="/shop">Medicines</Link>
          <span className="separator">›</span>
          <Link to="/shop">Pain Relief</Link>
          <span className="separator">›</span>
          <span className="current">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="product-details-section-new">
        <div className="container-new">
          <div className="product-grid-new">
            
            {/* Left: Gallery */}
            <div className="gallery-container-new">
              <div className="main-image-card-new">
                <span className="badge-authentic">✓ CERTIFIED PHARMACOPEIAL QUALITY</span>
                <span className="badge-potency-corner">30C Potency</span>
                
                {/* Bottle Illustration */}
                <div className="medicine-bottle-art">
                  <div className="bottle-cap"></div>
                  <div className="bottle-neck"></div>
                  <div className="bottle-body">
                    <div className="bottle-label">
                      <div>
                        <div className="bottle-label-brand">Aradhya Homeopathy</div>
                        <div className="bottle-label-name">{product.name}</div>
                        <div className="bottle-label-potency">30C</div>
                      </div>
                      <div className="bottle-label-detail">
                        Pure Cane Sugar Pellets<br/>Hand-Succussed Dilution
                      </div>
                      <div className="bottle-label-meta">
                        HPI / HPUS Standard &bull; 30ml
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottle-desc">
                  Available in High-Grade Neutral Cane Globules or Pure Dispensing Liquid
                </div>
              </div>

              {/* Horizontal Thumbnails - Scrollable */}
              <div className="horizontal-thumb-gallery">
                <div className="thumb-card-horizontal active">
                  <div className="thumb-image-box">
                    <img 
                      src="/Aradhya Homeopathy  Utsav bhai/1.png" 
                      alt="Product Front View"
                      className="thumb-product-image"
                    />
                  </div>
                </div>
                <div className="thumb-card-horizontal">
                  <div className="thumb-image-box">
                    <img 
                      src="/Aradhya Homeopathy  Utsav bhai/2.png" 
                      alt="Product Back View"
                      className="thumb-product-image"
                    />
                  </div>
                </div>
                <div className="thumb-card-horizontal">
                  <div className="thumb-image-box">
                    <img 
                      src="/Aradhya Homeopathy  Utsav bhai/3.png" 
                      alt="Product with Globules"
                      className="thumb-product-image"
                    />
                  </div>
                </div>
                <div className="thumb-card-horizontal">
                  <div className="thumb-image-box leaves-bg">
                    <img 
                      src="/Aradhya Homeopathy  Utsav bhai/4.png" 
                      alt="Product with Natural Background"
                      className="thumb-product-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="product-info-card-new">
              <div className="top-badges-row">
                <span className="badge-green-small">✓ Pure Care</span>
                <span className="badge-green-small">✓ Natural Healing</span>
                <span className="badge-green-small">✓ Better Living</span>
              </div>

              <div className="category-tag-new">
                {product.category} &bull; NATURAL HOMEOPATHIC REMEDY
              </div>
              <h1 className="product-title-new">{product.name}</h1>
              <div className="scientific-name-new">{product.shortDescription}</div>

              {/* Rating */}
              <div className="rating-row-new">
                <div className="stars-new">★★★★★</div>
                <div className="rating-text-new">{product.rating} / 5.0</div>
                <div className="verified-count-new">({product.reviews} Verified Reviews)</div>
              </div>

              {/* Description */}
              <p className="product-description-text">
                {product.name} is a trusted homeopathic formulation that helps relieve pain naturally. Formulated with high-grade cane sugar pellets and hand-succussed dilution, it is safe, gentle, and effective for everyday use.
              </p>

              {/* Feature Icons Grid - Compact */}
              <div className="feature-icons-compact">
                <div className="compact-icon-item">
                  <div className="compact-icon">🌿</div>
                  <div className="compact-text">
                    <strong>100%</strong> Non-Toxic
                  </div>
                </div>
                <div className="compact-icon-item">
                  <div className="compact-icon">💉</div>
                  <div className="compact-text">
                    <strong>HPUS / HPI</strong> Standard
                  </div>
                </div>
                <div className="compact-icon-item">
                  <div className="compact-icon">👨‍⚕️</div>
                  <div className="compact-text">
                    <strong>Doctor</strong> Supervised
                  </div>
                </div>
                <div className="compact-icon-item">
                  <div className="compact-icon">✓</div>
                  <div className="compact-text">
                    <strong>High-Grade</strong> Quality
                  </div>
                </div>
              </div>

              {/* Availability Note - Compact */}
              <div className="availability-note-compact">
                <span className="check-icon">✓</span> Available in High-Grade Neutral Cane Globules or Pure Dispensing Liquid
              </div>

              {/* Product Options - Horizontal Layout */}
              <div className="product-options-horizontal">
                <div className="option-compact-item">
                  <div className="option-compact-label">POTENCY</div>
                  <div className="option-compact-value">
                    <span className="opt-icon">💧</span> 30C
                  </div>
                  <div className="option-compact-sub">Most Prescribed</div>
                </div>

                <div className="option-compact-item">
                  <div className="option-compact-label">FORM</div>
                  <div className="option-compact-value">
                    <span className="opt-icon">💊</span> Globules (Pills)
                  </div>
                  <div className="option-compact-sub">Sugar Cane Base</div>
                </div>

                <div className="option-compact-item">
                  <div className="option-compact-label">BOTTLE SIZE</div>
                  <div className="option-compact-value">
                    <span className="opt-icon">🧴</span> 30ml
                  </div>
                  <div className="option-compact-sub">~ 450 Globules</div>
                </div>
              </div>

              {/* Trust Badges - Horizontal Compact */}
              <div className="trust-badges-compact">
                <div className="trust-compact-item">
                  <strong>100% Non-Toxic</strong>
                  <span>Safe for all age groups with zero dependency</span>
                </div>
                <div className="trust-compact-item">
                  <strong>HPUS / HPI Standard</strong>
                  <span>Manufactured under strict GMP regulations</span>
                </div>
                <div className="trust-compact-item">
                  <strong>Doctor Supervised</strong>
                  <span>Verified by certified BHMS practitioners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Clinical Tabs */}
      <section className="details-tab-section-new">
        <div className="container-new">
          {/* Tab Navigation */}
          <div className="tab-nav-bar-new">
            <button
              className={`tab-btn-new ${activeTab === 'indications' ? 'active' : ''}`}
              onClick={() => setActiveTab('indications')}
            >
              Indications & Clinical Uses
            </button>
            <button
              className={`tab-btn-new ${activeTab === 'dosage' ? 'active' : ''}`}
              onClick={() => setActiveTab('dosage')}
            >
              Dosage & How to Take
            </button>
            <button
              className={`tab-btn-new ${activeTab === 'symptoms' ? 'active' : ''}`}
              onClick={() => setActiveTab('symptoms')}
            >
              Key Symptoms
            </button>
            <button
              className={`tab-btn-new ${activeTab === 'safety' ? 'active' : ''}`}
              onClick={() => setActiveTab('safety')}
            >
              Safety & Storage
            </button>
          </div>

          {/* Tab Content */}
          <div className="content-card-grid-new">
            <div className="tab-main-panel-new">
              {activeTab === 'indications' && (
                <>
                  <h2 className="panel-heading-new">Primary Clinical Indications</h2>
                  <p className="lead-paragraph-new">
                    <strong>{product.name}</strong> {product.fullDescription}
                  </p>

                  {/* Indication Cards */}
                  <div className="indication-grid-new">
                    {product.benefits.slice(0, 4).map((benefit, index) => (
                      <div key={index} className="indication-card-new">
                        <h4>✓ {benefit.split(' ').slice(0, 3).join(' ')}</h4>
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>

                  {/* All Benefits */}
                  <h3 className="sub-heading-new">Complete Health Benefits</h3>
                  <ul className="benefits-list-new">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'dosage' && (
                <>
                  <h2 className="panel-heading-new">Dosage & Administration</h2>
                  <div className="dosage-box-new">
                    <div className="dosage-title-new">
                      <span>⏱️</span> Standard Recommended Dosage Schedule
                    </div>
                    <ul className="dosage-list-new">
                      <li><strong>Dosage:</strong> {product.usage.dosage}</li>
                      <li><strong>Timing:</strong> {product.usage.timing}</li>
                      <li><strong>Duration:</strong> {product.usage.duration}</li>
                      <li><strong>Precautions:</strong> {product.usage.precautions}</li>
                      <li><strong>Touch-Free Application:</strong> Pour globules directly into the bottle cap and drop onto the tongue</li>
                    </ul>
                  </div>

                  <h3 className="sub-heading-new">Active Ingredients</h3>
                  <ul className="ingredients-list-styled">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'symptoms' && (
                <>
                  <h2 className="panel-heading-new">Key Symptoms (Materia Medica)</h2>
                  <p className="lead-paragraph-new">
                    This remedy is specially indicated for the following symptom patterns:
                  </p>
                  <ul className="symptoms-list-new">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'safety' && (
                <>
                  <h2 className="panel-heading-new">Safety & Storage</h2>
                  
                  <h3 className="sub-heading-new">Product Specifications</h3>
                  <table className="spec-table-new">
                    <tbody>
                      <tr>
                        <td className="spec-label-new">Quantity</td>
                        <td className="spec-value-new">{product.specifications.quantity}</td>
                      </tr>
                      <tr>
                        <td className="spec-label-new">Form</td>
                        <td className="spec-value-new">{product.specifications.form}</td>
                      </tr>
                      <tr>
                        <td className="spec-label-new">Packaging</td>
                        <td className="spec-value-new">{product.specifications.packaging}</td>
                      </tr>
                      <tr>
                        <td className="spec-label-new">Shelf Life</td>
                        <td className="spec-value-new">{product.specifications.shelfLife}</td>
                      </tr>
                      <tr>
                        <td className="spec-label-new">Storage</td>
                        <td className="spec-value-new">{product.specifications.storage}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="safety-alert-new">
                    <h5>Safety & Preservation Advice</h5>
                    <p>Store in a cool, dry place away from direct sunlight, electromagnetic radiation (microwaves/Wi-Fi routers), and intense aromatic oils. Always keep the bottle cap tightly sealed.</p>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="tab-sidebar-panel-new">
              {/* Doctor Widget */}
              <div className="doctor-callout-widget-new">
                <div className="doctor-avatar-new">🩺</div>
                <div className="doc-name-new">Dr. Aradhya Sharma</div>
                <div className="doc-role-new">Senior Homoeopathic Consultant &bull; BHMS, MD</div>
                <p className="doc-desc-new">
                  "Let our clinic evaluate your complete symptom picture to ensure precise potency matching."
                </p>
                <Link to="/contact" className="btn-doc-book-new">Schedule 1-on-1 Consultation</Link>
              </div>

              {/* Related Products */}
              {relatedProducts.length > 0 && (
                <div className="sidebar-widget-new">
                  <h4 className="sidebar-title-new">Frequently Prescribed Together</h4>
                  {relatedProducts.slice(0, 3).map(relProduct => (
                    <Link to={`/product/${relProduct.id}`} key={relProduct.id} className="related-mini-card">
                      <div className="related-mini-icon">{relProduct.name.substring(0, 4)}</div>
                      <div>
                        <div className="related-mini-name">{relProduct.name}</div>
                        <div className="related-mini-desc">{relProduct.shortDescription}</div>
                        <div className="related-mini-price">₹{relProduct.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* Quality Promise */}
              <div className="sidebar-widget-new quality-widget">
                <h4 className="sidebar-title-new">Aradhya Purity Promise</h4>
                <p>Every single remedy bottle is prepared strictly with pharmacopoeia-approved neutral globules and authentic mother tinctures. No industrial adulteration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
