import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Reframe } from './components/Reframe';
import { Mechanism } from './components/Mechanism';
import { WhatWeBuild } from './components/WhatWeBuild';
import { Qualification } from './components/Qualification';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Reframe />
      <Mechanism />
      <WhatWeBuild />
      <Qualification />
      <Offer />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
