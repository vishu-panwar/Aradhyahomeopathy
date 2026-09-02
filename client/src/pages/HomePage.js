import React from 'react';
import PropertiesSection from '../components/PropertiesSection';
import TopSellingProducts from '../components/TopSellingProducts';
import NewArrivals from '../components/NewArrivals';
import ProductShowcase from '../components/ProductShowcase';
import Categories from '../components/Categories';
import SpecialProducts from '../components/SpecialProducts';
import RationalFeatures from '../components/RationalFeatures';
import Testimonial from '../components/Testimonial';
import HomoeopathicApproach from '../components/HomoeopathicApproach';

const HomePage = () => {
  return (
    <>
      <PropertiesSection />
      <TopSellingProducts />
      <NewArrivals />
      <ProductShowcase />
      <Categories />
      <SpecialProducts />
      <RationalFeatures />
      <Testimonial />
      <HomoeopathicApproach />
    </>
  );
};

export default HomePage;
