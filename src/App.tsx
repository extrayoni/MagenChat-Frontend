import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import LiveStats from './components/LiveStats';
import Problem from './components/Problem';
import Features from './components/Features';
import ContentCoverage from './components/ContentCoverage';
import LiveDemo from './components/LiveDemo';
import Beta from './components/Beta';
import Voices from './components/Voices';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [page, setPage] = useState<Page>('home');

  if (page === 'privacy') return <PrivacyPolicy onNavigate={setPage} />;
  if (page === 'terms') return <TermsOfService onNavigate={setPage} />;

  return (
    <div style={{ fontFamily: "'Assistant', sans-serif", overflowX: 'hidden' }}>
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <LiveStats />
        <Problem />
        <Features />
        <ContentCoverage />
        <LiveDemo />
        <Beta />
        <Voices />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
