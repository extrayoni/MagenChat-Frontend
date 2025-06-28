import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/common/Header';
import Hero from './components/sections/Hero';
import DemoVideo from './components/sections/DemoVideo';
import Features from './components/sections/Features';
import Contact from './components/sections/Contact';
import Pricing from './components/sections/Pricing';
import Footer from './components/common/Footer';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onNavigate={setCurrentPage} />;
      case 'terms':
        return <TermsOfService onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Header />
            <main>
              <Hero />
              <DemoVideo />
              <Features />
              <Contact />
              <Pricing />
            </main>
            <Footer onNavigate={setCurrentPage} />
          </>
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        {renderPage()}
      </div>
    </LanguageProvider>
  );
}

export default App;