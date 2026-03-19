import React from 'react';
import HeroSection from './components/HeroSection';
import CompanyGrid from './components/CompanyGrid';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import StickyCTA from './components/StickyCTA';
import LogoMarquee from './components/LogoMarquee';
import WhyAttend from './components/WhyAttend';
import PosterSection from './components/PosterSection';
import BackgroundBlobs from './components/BackgroundBlobs';
import BottomConversion from './components/BottomConversion';
import { eventConfig } from './data/eventConfig';
import './App.css';

function App() {
  const { event, stages, companies } = eventConfig;

  return (
    <div className="app">
      <BackgroundBlobs />
      <HeroSection 
        eventName={event.name} 
        dates={event.dates} 
        registrationLink={event.registrationLink} 
      />
      <PosterSection />
      <WhyAttend />
      <LogoMarquee />
      <CompanyGrid companies={companies} />
      <Timeline stages={stages} />
      <BottomConversion />
      <FAQ />
      <StickyCTA registrationLink={event.registrationLink} />
    </div>
  );
}

export default App;
