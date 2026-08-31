import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import ComboPackPage from './components/ComboPackPage';
import ShopPage from './components/ShopPage';
import CategoryPage from './components/CategoryPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/combo-pack" element={<ComboPackPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
