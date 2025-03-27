
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CompanyOverview from '@/components/about/CompanyOverview';
import FounderProfiles from '@/components/about/FounderProfiles';
import CoreValues from '@/components/about/CoreValues';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CompanyOverview />
        <FounderProfiles />
        <CoreValues />
      </main>
      <Footer />
    </div>
  );
};

export default About;
