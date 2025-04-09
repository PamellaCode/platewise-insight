
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ChatbotSection from '@/components/sections/ChatbotSection';
import CtaSection from '@/components/sections/CtaSection';
import NewsletterSection from '@/components/sections/NewsletterSection';

const Index = () => {
  // Homepage structured data for rich results
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ArgusAI",
    "url": "https://argusai.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://argusai.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <MainLayout 
      title="ArgusAI - L'IA qui calcule la vraie valeur de votre voiture"
      description="Estimez instantanément et précisément la valeur de votre véhicule grâce à notre intelligence artificielle. Obtenez une évaluation fiable basée sur les données du marché."
      keywords="estimation voiture, valeur automobile, argus IA, prix véhicule, cote auto, estimation gratuite"
      canonicalUrl="https://argusai.com/"
      structuredData={homepageStructuredData}
    >
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
