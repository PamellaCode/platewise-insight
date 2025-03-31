
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import LicensePlateSearch from '@/components/LicensePlateSearch';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white/20 translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/20"></div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0" 
            initial={{
              opacity: 0,
              x: -50
            }} 
            animate={{
              opacity: 1,
              x: 0
            }} 
            transition={{
              duration: 0.6
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              L'IA qui calcule la vraie valeur de votre voiture
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-lg">
              Obtenez une estimation précise et instantanée de la valeur de votre véhicule grâce à notre technologie d'intelligence artificielle avancée.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-auto-blue-500 hover:bg-blue-50" asChild>
                <Link to="/how-it-works">
                  Comment ça marche <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-auto-blue-500 border-white hover:bg-white/10" asChild>
                <Link to="/pricing">
                  Voir les abonnements
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2" 
            initial={{
              opacity: 0,
              x: 50
            }} 
            animate={{
              opacity: 1,
              x: 0
            }} 
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
          >
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20">
              <h2 className="text-2xl font-bold mb-4">Estimez votre véhicule</h2>
              <p className="mb-6 text-white/90">Entrez votre plaque d'immatriculation pour commencer</p>
              <LicensePlateSearch />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
