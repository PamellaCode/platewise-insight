
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ChatbotSection from '@/components/sections/ChatbotSection';
import CtaSection from '@/components/sections/CtaSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ChatbotSection />
      <CtaSection />
      <div className="container mx-auto px-4 py-12">
        <NewsletterSection />
      </div>
    </MainLayout>
  );
};

export default Index;
