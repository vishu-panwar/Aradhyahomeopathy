// Products Database - Aradhya Homeopathy

export const productsData = [
  {
    id: 'bp-care-medicine',
    name: 'BP Care Medicine',
    category: 'Blood Pressure',
    shortDescription: '30 Tablets - Effective Formula',
    price: 750,
    originalPrice: 900,
    discount: 17,
    image: '/product1.png',
    rating: 4.8,
    reviews: 156,
    inStock: true,
    featured: true,
    
    // Detailed Information
    fullDescription: 'Aradhya BP Care Medicine is a scientifically formulated homeopathic remedy designed to help maintain healthy blood pressure levels naturally. This effective formula combines traditional homeopathic ingredients to support cardiovascular health and overall wellbeing.',
    
    benefits: [
      'Helps maintain healthy blood pressure levels',
      'Supports cardiovascular health naturally',
      'No harmful side effects',
      'Gentle and effective formula',
      'Suitable for long-term use',
      'Made with premium quality ingredients'
    ],
    
    ingredients: [
      'Rauwolfia Serpentina Q',
      'Crataegus Oxyacantha Q',
      'Viscum Album Q',
      'Arnica Montana 3X',
      'Baryta Muriaticum 3X'
    ],
    
    usage: {
      dosage: 'Take 2 tablets twice daily or as directed by your physician',
      timing: 'Before meals with water',
      duration: 'Minimum 3 months for best results',
      precautions: 'Consult your doctor if symptoms persist'
    },
    
    specifications: {
      quantity: '30 Tablets',
      form: 'Tablet',
      packaging: 'Blister Pack',
      shelfLife: '3 Years',
      storage: 'Store in a cool, dry place'
    }
  },
  
  {
    id: 'asthmaxx-relief',
    name: 'Asthmaxx Relief',
    category: 'Respiratory Care',
    shortDescription: '30 Capsules - Natural Formula',
    price: 850,
    originalPrice: 1000,
    discount: 15,
    image: '/product2.png',
    rating: 4.7,
    reviews: 142,
    inStock: true,
    featured: true,
    
    fullDescription: 'Asthmaxx Relief is a powerful homeopathic solution for respiratory health. Specially formulated to provide relief from asthma symptoms and support easier breathing naturally.',
    
    benefits: [
      'Supports easier breathing',
      'Helps relieve asthma symptoms',
      'Reduces respiratory discomfort',
      'Natural and safe formula',
      'No drowsiness or addiction',
      'Suitable for all age groups'
    ],
    
    ingredients: [
      'Justicia Adhatoda Q',
      'Grindelia Robusta Q',
      'Lobelia Inflata Q',
      'Ipecacuanha 3X',
      'Antimonium Tartaricum 6X'
    ],
    
    usage: {
      dosage: '1-2 capsules twice daily',
      timing: 'Morning and evening',
      duration: '2-3 months recommended',
      precautions: 'Keep out of reach of children'
    },
    
    specifications: {
      quantity: '30 Capsules',
      form: 'Capsule',
      packaging: 'Bottle',
      shelfLife: '2 Years',
      storage: 'Keep away from direct sunlight'
    }
  },
  
  {
    id: 'cervo-go-tablets',
    name: 'Cervo Go Tablets',
    category: 'Pain Relief',
    shortDescription: 'Pain Relief - 30 Tablets',
    price: 950,
    originalPrice: 1100,
    discount: 14,
    image: '/product3.png',
    rating: 4.9,
    reviews: 203,
    inStock: true,
    featured: true,
    
    fullDescription: 'Cervo Go Tablets provide effective relief from cervical pain, neck stiffness, and related discomfort. This homeopathic formula targets pain at its source for lasting relief.',
    
    benefits: [
      'Relieves cervical and neck pain',
      'Reduces muscle stiffness',
      'Improves mobility',
      'Non-addictive pain relief',
      'Safe for daily use',
      'Fast-acting formula'
    ],
    
    ingredients: [
      'Rhus Toxicodendron 3X',
      'Bryonia Alba 3X',
      'Hypericum Perforatum Q',
      'Gelsemium Sempervirens 3X',
      'Kalmia Latifolia 3X'
    ],
    
    usage: {
      dosage: '2 tablets thrice daily',
      timing: 'After meals',
      duration: '4-6 weeks or as needed',
      precautions: 'Consult doctor for chronic pain'
    },
    
    specifications: {
      quantity: '30 Tablets',
      form: 'Tablet',
      packaging: 'Strip',
      shelfLife: '3 Years',
      storage: 'Room temperature'
    }
  },
  
  {
    id: 'immunity-booster',
    name: 'Immunity Booster',
    category: 'Wellness',
    shortDescription: 'Complete Wellness Pack',
    price: 1200,
    originalPrice: 1500,
    discount: 20,
    image: '/featured1.png',
    rating: 4.9,
    reviews: 287,
    inStock: true,
    featured: true,
    
    fullDescription: 'Boost your immune system naturally with our comprehensive Immunity Booster pack. A powerful blend of homeopathic remedies designed to strengthen your body\'s natural defenses.',
    
    benefits: [
      'Strengthens immune system',
      'Increases resistance to infections',
      'Supports overall health',
      'Rich in natural antioxidants',
      'Enhances energy levels',
      'Promotes faster recovery'
    ],
    
    ingredients: [
      'Echinacea Angustifolia Q',
      'Thuja Occidentalis Q',
      'Baptisia Tinctoria Q',
      'Ginseng Q',
      'Withania Somnifera Q'
    ],
    
    usage: {
      dosage: '10-15 drops twice daily',
      timing: 'Morning and evening before food',
      duration: '3-6 months for immunity building',
      precautions: 'Suitable for all ages above 5 years'
    },
    
    specifications: {
      quantity: '30ml Drops',
      form: 'Liquid Drops',
      packaging: 'Dropper Bottle',
      shelfLife: '3 Years',
      storage: 'Cool and dry place'
    }
  },
  
  {
    id: 'hair-care-solution',
    name: 'Hair Care Solution',
    category: 'Hair Care',
    shortDescription: 'Natural Growth Formula',
    price: 650,
    originalPrice: 800,
    discount: 19,
    image: '/featured2.png',
    rating: 4.6,
    reviews: 178,
    inStock: true,
    featured: true,
    
    fullDescription: 'Our Hair Care Solution is a comprehensive homeopathic treatment for hair fall, thinning, and premature graying. Promotes natural hair growth and strengthens hair from the roots.',
    
    benefits: [
      'Reduces hair fall significantly',
      'Promotes new hair growth',
      'Strengthens hair roots',
      'Prevents premature graying',
      'Improves hair texture',
      'Natural and chemical-free'
    ],
    
    ingredients: [
      'Arnica Montana Q',
      'Jaborandi Q',
      'Lycopodium Clavatum 3X',
      'Phosphorus 30',
      'Selenium 30'
    ],
    
    usage: {
      dosage: '10 drops twice daily',
      timing: 'Before breakfast and dinner',
      duration: '6 months minimum',
      precautions: 'External application also recommended'
    },
    
    specifications: {
      quantity: '50ml',
      form: 'Tonic',
      packaging: 'Glass Bottle',
      shelfLife: '2 Years',
      storage: 'Away from heat and light'
    }
  },
  
  {
    id: 'digestive-care-drops',
    name: 'Digestive Care Drops',
    category: 'Digestive Health',
    shortDescription: 'Stomach Relief Formula',
    price: 580,
    originalPrice: 700,
    discount: 17,
    image: '/featured3.png',
    rating: 4.7,
    reviews: 195,
    inStock: true,
    featured: false,
    
    fullDescription: 'Digestive Care Drops provide quick relief from indigestion, acidity, bloating, and other digestive issues. A gentle yet effective homeopathic solution for better gut health.',
    
    benefits: [
      'Relieves indigestion and acidity',
      'Reduces bloating and gas',
      'Improves digestion naturally',
      'Soothes stomach discomfort',
      'Regulates bowel movements',
      'No side effects'
    ],
    
    ingredients: [
      'Carbo Vegetabilis 3X',
      'Nux Vomica 3X',
      'Robinia Pseudacacia Q',
      'Chelidonium Majus Q',
      'Lycopodium 3X'
    ],
    
    usage: {
      dosage: '15-20 drops thrice daily',
      timing: 'Before or after meals',
      duration: '2-3 months',
      precautions: 'Avoid spicy food during treatment'
    },
    
    specifications: {
      quantity: '30ml',
      form: 'Liquid Drops',
      packaging: 'Dropper Bottle',
      shelfLife: '3 Years',
      storage: 'Room temperature'
    }
  },
  
  {
    id: 'family-immunity-support',
    name: 'Family Immunity Support',
    category: 'Family Pack',
    shortDescription: 'Complete Family Protection',
    price: 1450,
    originalPrice: 1800,
    discount: 19,
    image: '/combo page .png',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    featured: false,
    
    fullDescription: 'A comprehensive immunity support pack designed for the entire family. Protects against seasonal infections and builds long-term immunity naturally.',
    
    benefits: [
      'Suitable for all family members',
      'Complete immunity protection',
      'Prevents seasonal infections',
      'Boosts natural defenses',
      'Cost-effective family pack',
      'Trusted by thousands'
    ],
    
    ingredients: [
      'Mixed immunity-boosting herbs',
      'Echinacea complex',
      'Vitamin boosters',
      'Natural antioxidants',
      'Essential minerals'
    ],
    
    usage: {
      dosage: 'As per age group instructions',
      timing: 'With or before meals',
      duration: '3-6 months',
      precautions: 'Consult for children below 3 years'
    },
    
    specifications: {
      quantity: 'Family Pack (3 bottles)',
      form: 'Drops + Tablets',
      packaging: 'Combo Pack',
      shelfLife: '2 Years',
      storage: 'Cool place'
    }
  },
  
  {
    id: 'joint-comfort-formula',
    name: 'Joint Comfort Formula',
    category: 'Joint Care',
    shortDescription: 'Pain Relief & Flexibility',
    price: 890,
    originalPrice: 1050,
    discount: 15,
    image: '/product1.png',
    rating: 4.8,
    reviews: 167,
    inStock: true,
    featured: false,
    
    fullDescription: 'Joint Comfort Formula provides natural relief from joint pain, arthritis, and stiffness. Improves mobility and flexibility for an active lifestyle.',
    
    benefits: [
      'Relieves joint pain and stiffness',
      'Supports cartilage health',
      'Improves flexibility',
      'Reduces inflammation',
      'Natural pain management',
      'No side effects'
    ],
    
    ingredients: [
      'Rhus Tox 3X',
      'Bryonia 3X',
      'Calcarea Fluorica 6X',
      'Ruta Graveolens 3X',
      'Colchicum Autumnale 3X'
    ],
    
    usage: {
      dosage: '2 tablets twice daily',
      timing: 'Morning and evening',
      duration: '3-4 months',
      precautions: 'Mild exercise recommended'
    },
    
    specifications: {
      quantity: '60 Tablets',
      form: 'Tablet',
      packaging: 'Bottle',
      shelfLife: '3 Years',
      storage: 'Dry place'
    }
  },
  
  {
    id: 'stress-relief-drops',
    name: 'Stress Relief Drops',
    category: 'Mental Wellness',
    shortDescription: 'Calming & Relaxing',
    price: 720,
    originalPrice: 850,
    discount: 15,
    image: '/product2.png',
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: false,
    
    fullDescription: 'Natural stress relief drops that help calm your mind, reduce anxiety, and promote better sleep. A gentle solution for modern-day stress and tension.',
    
    benefits: [
      'Reduces stress and anxiety',
      'Promotes relaxation',
      'Improves sleep quality',
      'Calms nervous tension',
      'Non-sedative formula',
      'Safe for daily use'
    ],
    
    ingredients: [
      'Passiflora Incarnata Q',
      'Valeriana Officinalis Q',
      'Avena Sativa Q',
      'Ignatia Amara 30',
      'Kali Phosphoricum 6X'
    ],
    
    usage: {
      dosage: '10-15 drops thrice daily',
      timing: 'Before meals and bedtime',
      duration: '2-3 months',
      precautions: 'Avoid alcohol during treatment'
    },
    
    specifications: {
      quantity: '30ml',
      form: 'Liquid Drops',
      packaging: 'Dropper Bottle',
      shelfLife: '3 Years',
      storage: 'Cool, dark place'
    }
  },
  
  {
    id: 'complete-wellness-pack',
    name: 'Complete Wellness Pack',
    category: 'Combo Pack',
    shortDescription: 'All-in-One Health Solution',
    price: 2100,
    originalPrice: 2800,
    discount: 25,
    image: '/product3.png',
    rating: 4.9,
    reviews: 312,
    inStock: true,
    featured: true,
    
    fullDescription: 'The ultimate wellness package containing our top products for complete health coverage. Immunity, digestion, stress relief, and more - all in one pack!',
    
    benefits: [
      'Complete health solution',
      'Maximum value combo',
      'Covers all major health aspects',
      'Best seller package',
      '25% discount on bundle',
      'Trusted by healthcare professionals'
    ],
    
    ingredients: [
      'Multiple product combination',
      'Immunity boosters',
      'Digestive aids',
      'Stress relievers',
      'Pain management formulas'
    ],
    
    usage: {
      dosage: 'As per individual product instructions',
      timing: 'Staggered throughout the day',
      duration: '3-6 months',
      precautions: 'Detailed guide included'
    },
    
    specifications: {
      quantity: '5 Products',
      form: 'Mixed (Tablets, Drops, Capsules)',
      packaging: 'Premium Gift Box',
      shelfLife: '2-3 Years',
      storage: 'As per individual products'
    }
  }
];

// Helper functions
export const getProductById = (id) => {
  return productsData.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return productsData.filter(product => product.featured);
};

export const getProductsByCategory = (category) => {
  return productsData.filter(product => product.category === category);
};

export const getRelatedProducts = (productId, limit = 4) => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return productsData
    .filter(product => 
      product.id !== productId && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};
