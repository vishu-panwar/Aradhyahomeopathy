import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewHomePage from './pages/NewHomePage';
import NewContactPage from './components/NewContactPage';
import NewBlogPage from './pages/NewBlogPage';
import NewShopPage from './pages/NewShopPage';
import NewComboPackPage from './pages/NewComboPackPage';
import NewCategoryPage from './pages/NewCategoryPage';
import NewAboutPage from './pages/NewAboutPage';
import ProductDetail from './components/ProductDetail';
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
          <Route path="/" element={<NewHomePage />} />
          <Route path="/contact" element={<NewContactPage />} />
          <Route path="/blog" element={<NewBlogPage />} />
          <Route path="/shop" element={<NewShopPage />} />
          <Route path="/combo-pack" element={<NewComboPackPage />} />
          <Route path="/category" element={<NewCategoryPage />} />
          <Route path="/about" element={<NewAboutPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
