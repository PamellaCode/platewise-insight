
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium text-sm mb-4">
            Processus simple
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Comment ça marche ?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre processus d'estimation est simple, rapide et efficace. Voici comment ça marche.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2" 
            initial={{
              opacity: 0,
              x: -50
            }} 
            whileInView={{
              opacity: 1,
              x: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              duration: 0.6
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80" 
              alt="Estimation de véhicule" 
              className="rounded-2xl shadow-2xl border-4 border-white" 
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 space-y-8" 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{
              once: true,
              amount: 0.2
            }}
          >
            <motion.div variants={fadeIn} className="flex items-start">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white mr-4 flex-shrink-0 shadow">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Entrez votre immatriculation</h3>
                <p className="text-gray-600">Saisissez simplement le numéro d'immatriculation de votre véhicule dans notre outil d'estimation.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-start">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white mr-4 flex-shrink-0 shadow">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Notre IA analyse votre véhicule</h3>
                <p className="text-gray-600">Notre intelligence artificielle analyse instantanément les données de votre véhicule et compare avec notre base de données.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-start">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-teal-500 text-white mr-4 flex-shrink-0 shadow">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Recevez une estimation détaillée</h3>
                <p className="text-gray-600">Obtenez une estimation précise de la valeur de votre véhicule avec des détails sur les facteurs qui influencent son prix.</p>
              </div>
            </motion.div>
            
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" size="lg" asChild>
                <Link to="/how-it-works">
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
