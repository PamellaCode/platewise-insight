
import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowDown, Info, Settings, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layouts/MainLayout';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <HelpCircle className="h-12 w-12 text-auto-blue-500" />,
      title: "Entrez votre immatriculation",
      description: "Saisissez simplement le numéro d'immatriculation de votre véhicule dans notre outil d'estimation."
    },
    {
      icon: <Zap className="h-12 w-12 text-auto-blue-500" />,
      title: "Notre IA analyse votre véhicule",
      description: "Notre intelligence artificielle analyse instantanément les données de votre véhicule et compare avec notre base de données."
    },
    {
      icon: <Info className="h-12 w-12 text-auto-blue-500" />,
      title: "Obtenez une estimation détaillée",
      description: "Recevez une estimation précise de la valeur de votre véhicule avec des détails sur les facteurs qui influencent son prix."
    },
    {
      icon: <Settings className="h-12 w-12 text-auto-blue-500" />,
      title: "Affinez votre estimation",
      description: "Ajustez les paramètres comme le kilométrage, l'état ou les options pour affiner l'estimation de votre véhicule."
    }
  ];

  const features = [
    {
      title: "IA de pointe",
      description: "Notre technologie d'intelligence artificielle analyse des millions de données pour une estimation précise."
    },
    {
      title: "Base de données complète",
      description: "Accès à une base de données de véhicules constamment mise à jour avec les dernières tendances du marché."
    },
    {
      title: "Rapports détaillés",
      description: "Obtenez des rapports complets sur l'historique, la valeur et les perspectives de revente de votre véhicule."
    },
    {
      title: "Interface intuitive",
      description: "Une expérience utilisateur simplifiée pour obtenir rapidement et facilement l'information dont vous avez besoin."
    }
  ];

  const testimonials = [
    {
      text: "J'ai vendu ma voiture 15% plus cher grâce à l'estimation précise d'AutoCote. Je recommande vivement ce service !",
      author: "Marie D.",
      role: "Particulier"
    },
    {
      text: "En tant que professionnel de l'automobile, AutoCote est devenu un outil indispensable pour notre concession.",
      author: "Thomas L.",
      role: "Concessionnaire automobile"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-auto-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comment fonctionne AutoCote ?
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Découvrez comment notre technologie d'intelligence artificielle vous aide à obtenir l'estimation la plus précise de la valeur de votre véhicule.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ArrowDown className="h-10 w-10 mx-auto mt-12 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-auto-blue-500 mb-4">Une estimation en quelques étapes simples</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Obtenez rapidement une estimation précise de votre véhicule grâce à notre processus simplifié.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-center relative"
                variants={fadeIn}
              >
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-auto-blue-500">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  {index < steps.length - 1 && (
                    <ArrowDown className="h-8 w-8 text-auto-blue-300 rotate-[-90deg]" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-auto-blue-500 mb-4">Pourquoi choisir AutoCote ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre technologie avancée d'estimation de véhicules offre des avantages uniques.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                variants={fadeIn}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-auto-blue-100 text-auto-blue-500">
                          <Check className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-auto-blue-500">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Technologie d'estimation de véhicules" 
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
            </div>
            <motion.div 
              className="md:w-1/2 md:pl-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-auto-blue-500 mb-6">Une technologie de pointe à votre service</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-auto-gold mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Analyse en temps réel des données du marché automobile</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-auto-gold mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Prise en compte de plus de 50 paramètres pour une estimation précise</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-auto-gold mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Algorithmes d'apprentissage automatique constamment améliorés</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-auto-gold mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Historique complet des transactions pour des comparaisons pertinentes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-auto-blue-500 mb-4">Ce que nos utilisateurs disent</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de personnes qui ont utilisé AutoCote pour estimer leur véhicule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-auto-blue-100 flex items-center justify-center text-auto-blue-500 font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-auto-blue-500">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-auto-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à estimer votre véhicule ?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Utilisez notre outil d'estimation gratuit et obtenez une valeur précise en quelques secondes.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/" 
              className="inline-block bg-auto-gold text-auto-blue-500 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-auto-gold-600 transition-colors"
            >
              Estimer mon véhicule maintenant
            </a>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HowItWorks;
