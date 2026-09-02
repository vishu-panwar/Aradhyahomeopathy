import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Skin Care',
      description: 'Natural solutions for healthy glowing skin',
      subcategories: [
        { name: 'Face Care', image: '/product1.png' },
        { name: 'Body Care', image: '/product2.png' }
      ],
      link: 'Explore more →'
    },
    {
      id: 2,
      title: 'Hair Care',
      description: 'Strengthen & nourish your hair naturally',
      subcategories: [
        { name: 'Hair Oil', image: '/product3.png' },
        { name: 'Hair Serum', image: '/product1.png' }
      ],
      link: 'Explore more →'
    },
    {
      id: 3,
      title: 'Baby Care',
      description: 'Gentle & safe products for your baby',
      subcategories: [
        { name: 'Baby Oil', image: '/product2.png' },
        { name: 'Baby Cream', image: '/product3.png' }
      ],
      link: 'Explore more →'
    },
    {
      id: 4,
      title: 'Health Care',
      description: 'Complete wellness solutions for all ages',
      subcategories: [
        { name: 'Immunity', image: '/product1.png' },
        { name: 'Digestion', image: '/product2.png' }
      ],
      link: 'Explore more →'
    },
    {
      id: 5,
      title: 'Immunity Care',
      description: 'Everyday support for stronger natural immunity',
      subcategories: [
        { name: 'Immunity Drops', image: '/product1.png' },
        { name: 'Seasonal Care', image: '/product3.png' }
      ],
      link: 'Explore more →'
    },
    {
      id: 6,
      title: 'Digestive Care',
      description: 'Gentle remedies for comfortable digestion',
      subcategories: [
        { name: 'Digestive Drops', image: '/product3.png' },
        { name: 'Acidity Care', image: '/product2.png' }
      ],
      link: 'Explore more →'
    },
    {
      id: 7,
      title: 'Stress Relief',
      description: 'Calm and balanced care for modern lifestyles',
      subcategories: [
        { name: 'Sleep Support', image: '/product2.png' },
        { name: 'Calm Care', image: '/product1.png' }
      ],
      link: 'Explore more →'
    },
    {
      id: 8,
      title: 'Joint Care',
      description: 'Natural comfort for active everyday living',
      subcategories: [
        { name: 'Pain Relief', image: '/product3.png' },
        { name: 'Mobility Care', image: '/product1.png' }
      ],
      link: 'Explore more →'
    }
  ];

  return (
    <section className="categories-section">
      <div className="categories-wrapper">
        <div className="categories-header">
          <h2 className="categories-title">Categories</h2>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <button type="button" className="category-link">{category.link}</button>
              </div>
              
              <div className="category-subcategories">
                {category.subcategories.map((sub, index) => (
                  <div key={index} className="subcategory-item">
                    <div className="subcategory-image">
                      <img src={sub.image} alt={sub.name} />
                    </div>
                    <p className="subcategory-name">{sub.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
