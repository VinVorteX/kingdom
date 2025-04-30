
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import MarketplacePreview from '@/components/MarketplacePreview';
import WhyKingDom from '@/components/WhyKingDom';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <MarketplacePreview />
      <WhyKingDom />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
