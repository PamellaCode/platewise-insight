import React from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowDown, Info, Settings, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layouts/MainLayout';

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

const HowItWorks = () => {
  const steps = [{
    icon: <HelpCircle className="h-12 w-12 text-pink-500" />,
    title: "Entrez votre immatriculation",
    description: "Saisissez simplement le numéro d'immatriculation de votre véhicule dans notre outil d'estimation.",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200"
  }, {
    icon: <Zap className="h-12 w-12 text-purple-500" />,
    title: "Notre IA analyse votre véhicule",
    description: "Notre intelligence artificielle analyse instantanément les données de votre véhicule et compare avec notre base de données.",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
  }, {
    icon: <Info className="h-12 w-12 text-blue-500" />,
    title: "Obtenez une estimation détaillée",
    description: "Recevez une estimation précise de la valeur de votre véhicule avec des détails sur les facteurs qui influencent son prix.",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
  }, {
    icon: <Settings className="h-12 w-12 text-teal-500" />,
    title: "Affinez votre estimation",
    description: "Ajustez les paramètres comme le kilométrage, l'état ou les options pour affiner l'estimation de votre véhicule.",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200"
  }];

  const features = [{
    title: "IA de pointe",
    description: "Notre technologie d'intelligence artificielle analyse des millions de données pour une estimation précise.",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
  }, {
    title: "Base de données complète",
    description: "Accès à une base de données de véhicules constamment mise à jour avec les dernières tendances du marché.",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
  }, {
    title: "Rapports détaillés",
    description: "Obtenez des rapports complets sur l'historique, la valeur et les perspectives de revente de votre véhicule.",
    bgColor: "bg-gradient-to-br from-violet-50 to-violet-100 border-violet-200"
  }, {
    title: "Interface intuitive",
    description: "Une expérience utilisateur simplifiée pour obtenir rapidement et facilement l'information dont vous avez besoin.",
    bgColor: "bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 border-fuchsia-200"
  }];

  const testimonials = [{
    text: "J'ai vendu ma voiture 15% plus cher grâce à l'estimation précise d'AutoCote. Je recommande vivement ce service !",
    author: "Marie D.",
    role: "Particulier"
  }, {
    text: "En tant que professionnel de l'automobile, AutoCote est devenu un outil indispensable pour notre concession.",
    author: "Thomas L.",
    role: "Concessionnaire automobile"
  }];

  return <MainLayout>
      <section className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white/20 translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-100" 
            initial={{opacity: 0, y: -20}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 0.5}}
          >
            Comment fonctionne AutoCote ?
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto mb-8 text-white/90" 
            initial={{opacity: 0}} 
            animate={{opacity: 1}} 
            transition={{delay: 0.2, duration: 0.5}}
          >
            Découvrez comment notre technologie d'intelligence artificielle vous aide à obtenir l'estimation la plus précise de la valeur de votre véhicule.
          </motion.p>
          <motion.div 
            initial={{opacity: 0, y: 20}} 
            animate={{opacity: 1, y: 0}} 
            transition={{delay: 0.4, duration: 0.5}}
          >
            <ArrowDown className="h-10 w-10 mx-auto mt-12 animate-bounce text-white/80" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">Processus Simple</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Une estimation en quelques étapes simples</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Obtenez rapidement une estimation précise de votre véhicule grâce à notre processus simplifié.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once: true, amount: 0.2}}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative border ${step.bgColor}`} 
                variants={fadeIn}
                whileHover={{y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-white/80 shadow-inner">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  {index < steps.length - 1 && <ArrowRight className="h-8 w-8 text-gray-400 rotate-0" />}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">Nos avantages</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Pourquoi choisir AutoCote ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre technologie avancée d'estimation de véhicules offre des avantages uniques.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8" 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{once: true, amount: 0.2}}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card" 
                variants={fadeIn}
                whileHover={{y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}
              >
                <Card className={`overflow-hidden border ${feature.bgColor}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                          <Check className="h-5 w-5" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
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

      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Technologie d'estimation de véhicules" 
                className="rounded-2xl shadow-2xl border-4 border-white" 
                initial={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
              />
            </div>
            <motion.div 
              className="md:w-1/2 md:pl-10" 
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4">Technologie avancée</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Une technologie de pointe à votre service</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white mr-3 flex-shrink-0 mt-1 shadow">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">Analyse en temps réel des données du marché automobile</p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white mr-3 flex-shrink-0 mt-1 shadow">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">Prise en compte de plus de 50 paramètres pour une estimation précise</p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white mr-3 flex-shrink-0 mt-1 shadow">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">Algorithmes d'apprentissage automatique constamment améliorés</p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white mr-3 flex-shrink-0 mt-1 shadow">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">Historique complet des transactions pour des comparaisons pertinentes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-800 font-medium text-sm mb-4">Témoignages</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Ce que nos utilisateurs disent</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de personnes qui ont utilisé AutoCote pour estimer leur véhicule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className={`bg-white p-6 rounded-2xl shadow-xl border border-${index === 0 ? 'pink' : 'blue'}-200 bg-gradient-to-br from-${index === 0 ? 'pink' : 'blue'}-50 to-white`}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: index * 0.2}}
                whileHover={{y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}
              >
                <div className="flex justify-end mb-4">
                  <div className="text-5xl text-gray-200 font-serif">"</div>
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-r from-${index === 0 ? 'pink' : 'blue'}-400 to-${index === 0 ? 'purple' : 'indigo'}-500 flex items-center justify-center text-white font-semibold shadow-md`}>
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto text-white"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt à découvrir la valeur de votre véhicule ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Estimez gratuitement votre véhicule en quelques secondes et obtenez une valorisation précise basée sur les données du marché.
            </p>
            <Button 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-blue-600"
              size="lg"
            >
              Estimer mon véhicule
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>;
};

export default HowItWorks;
