
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductShowcase from '@/components/home/ProductShowcase';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
