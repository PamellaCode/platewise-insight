
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTopButton from '../ScrollToTopButton';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title = "ArgusAI - L'IA qui calcule la vraie valeur de votre voiture",
  description = "Estimez instantanément la valeur réelle de votre véhicule avec ArgusAI. Notre IA analyse les données du marché pour une estimation précise.",
  keywords = "estimation automobile, valeur voiture, argus IA, intelligence artificielle, cote auto",
  canonicalUrl,
  structuredData
}) => {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://argusai.com${location.pathname}`;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ArgusAI",
    "url": "https://argusai.com",
    "logo": "https://argusai.com/logo.png",
    "description": "ArgusAI utilise l'intelligence artificielle pour estimer précisément la valeur des véhicules automobiles.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-1-23-45-67-89",
      "contactType": "customer service",
      "availableLanguage": "French"
    },
    "sameAs": [
      "https://www.facebook.com/ArgusAI",
      "https://www.twitter.com/ArgusAI",
      "https://www.linkedin.com/company/argusai"
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;
  
  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(finalStructuredData)}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.main>
        <Footer />
        <ScrollToTopButton />
        <Toaster />
      </div>
    </>
  );
};

export default MainLayout;
