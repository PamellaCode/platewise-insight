
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, BarChart, Shield, Clock } from 'lucide-react';

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

const FeaturesSection: React.FC = () => {
  const features = [{
    icon: <Zap className="h-12 w-12 text-teal-500" />,
    title: 'Estimation instantanée',
    description: 'Obtenez une estimation de la valeur de votre véhicule en quelques secondes',
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-200 border-blue-200"
  }, {
    icon: <BarChart className="h-12 w-12 text-blue-500" />,
    title: 'Analyse précise',
    description: 'Notre algorithme analyse des millions de données pour une estimation au plus juste',
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-300 border-blue-300"
  }, {
    icon: <Shield className="h-12 w-12 text-indigo-500" />,
    title: 'Données sécurisées',
    description: 'Vos informations personnelles sont protégées et jamais partagées',
    bgColor: "bg-gradient-to-br from-blue-200 to-blue-400 border-blue-400"
  }, {
    icon: <Clock className="h-12 w-12 text-cyan-500" />,
    title: 'Historique des prix',
    description: 'Accédez à l\'évolution des prix du marché pour mieux anticiper',
    bgColor: "bg-gradient-to-br from-blue-300 to-blue-500 border-blue-500"
  }];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-cyan-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            Pourquoi ArgusAI
          </span>
          <h2 className="section-title">
            Une estimation fiable en quelques clics
          </h2>
          <p className="section-description">
            Découvrez les avantages exclusifs de notre solution d'estimation de véhicules basée sur l'intelligence artificielle.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{
            once: true,
            amount: 0.2
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative border ${feature.bgColor}`} 
              variants={fadeIn} 
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-white/80 shadow-inner">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
