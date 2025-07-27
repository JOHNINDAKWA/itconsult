// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import Navbar from './layouts/Navbar/Navbar';
import Footer from './layouts/Footer/Footer';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Articles from './pages/Articles/Articles';
import ArticleDetail from './pages/Articles/ArticleDetail';
import { ArticleProvider } from './pages/Articles/ArticleContext';

// Import the new ScrollToTop component
import ScrollToTop from './components/ScrollToTop'; // Adjust path if needed

function App() {
  return (
    <Router>
      {/* ScrollToTop component must be rendered inside the Router */}
      <ScrollToTop />

      <Navbar />
      {/* Wrap Routes with ArticleProvider to make article data available to all nested components */}
      <ArticleProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/articles" element={<Articles />} />
          {/* Add the route for individual article details */}
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ArticleProvider>

      <Footer />
    </Router>
  );
}

export default App;