
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ChatbotSection from '@/components/sections/ChatbotSection';
import CtaSection from '@/components/sections/CtaSection';

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ChatbotSection />
      <CtaSection />
    </MainLayout>
  );
};

export default Index;
