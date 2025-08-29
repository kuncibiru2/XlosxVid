
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FAQPage from './components/FAQPage';
import SupportPage from './components/SupportPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-dark text-text-main">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
