import React, { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import ContentCoverage from './components/ContentCoverage';
import LiveDemo from './components/LiveDemo';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

const TRIAL_DAYS = 14;

function App() {
  const [page, setPage] = useState<Page>('home');

  if (page === 'privacy') return <PrivacyPolicy onNavigate={setPage} />;
  if (page === 'terms') return <TermsOfService onNavigate={setPage} />;

  return (
    <div style={{ fontFamily: "'Assistant', sans-serif", overflowX: 'hidden' }}>
      <Nav trialDays={TRIAL_DAYS} />
      <main>
        <Hero trialDays={TRIAL_DAYS} />
        <ValueStrip />
        <Problem />
        <HowItWorks />
        <Features />
        <ContentCoverage />
        <LiveDemo />
        <Pricing trialDays={TRIAL_DAYS} />
        <FAQ />
        <FinalCTA trialDays={TRIAL_DAYS} />
      </main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
