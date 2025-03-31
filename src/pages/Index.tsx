import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Zap, Clock, ArrowRight, Shield, BarChart, Car, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import LicensePlateSearch from '@/components/LicensePlateSearch';
import Chatbot from '@/components/Chatbot';
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
const Index = () => {
  const features = [{
    icon: <Zap className="h-12 w-12 text-teal-500" />,
    title: 'Estimation instantanée',
    description: 'Obtenez une estimation de la valeur de votre véhicule en quelques secondes',
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200"
  }, {
    icon: <BarChart className="h-12 w-12 text-blue-500" />,
    title: 'Analyse précise',
    description: 'Notre algorithme analyse des millions de données pour une estimation au plus juste',
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
  }, {
    icon: <Shield className="h-12 w-12 text-indigo-500" />,
    title: 'Données sécurisées',
    description: 'Vos informations personnelles sont protégées et jamais partagées',
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200"
  }, {
    icon: <Clock className="h-12 w-12 text-cyan-500" />,
    title: 'Historique des prix',
    description: 'Accédez à l\'évolution des prix du marché pour mieux anticiper',
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200"
  }];
  return <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-white/20 translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-white/20"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div className="md:w-1/2 mb-10 md:mb-0" initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">L'IA qui calcule la vraie valeur de votre voiture</h1>
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
            <motion.div className="md:w-1/2" initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/20">
                <h2 className="text-2xl font-bold mb-4">Estimez votre véhicule</h2>
                <p className="mb-6 text-white/90">Entrez votre plaque d'immatriculation pour commencer</p>
                <LicensePlateSearch />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">Pourquoi AutoCote</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Une estimation fiable en quelques clics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages exclusifs de notre solution d'estimation de véhicules basée sur l'intelligence artificielle.
            </p>
          </div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            {features.map((feature, index) => <motion.div key={index} className={`rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative border ${feature.bgColor}`} variants={fadeIn} whileHover={{
            y: -5,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
                <div className="flex justify-center mb-6">
                  <div className="p-3 rounded-full bg-white/80 shadow-inner">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 font-medium text-sm mb-4">Processus simple</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Comment ça marche ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre processus d'estimation est simple, rapide et efficace. Voici comment ça marche.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div className="md:w-1/2" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80" alt="Estimation de véhicule" className="rounded-2xl shadow-2xl border-4 border-white" />
            </motion.div>
            
            <motion.div className="md:w-1/2 space-y-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }}>
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

      {/* Chatbot Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="md:w-1/2 mb-8 md:mb-0" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4">Assistant virtuel</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Posez vos questions à notre assistant</h2>
              <p className="text-lg text-gray-600 mb-8">
                Vous avez des questions sur l'estimation de votre véhicule ? Notre assistant virtuel est là pour vous aider 24/7.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-3 flex-shrink-0 mt-1 shadow">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">Posez des questions en langage naturel</p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white mr-3 flex-shrink-0 mt-1 shadow">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">Obtenez des réponses précises et personnalisées</p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white mr-3 flex-shrink-0 mt-1 shadow">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-gray-700">Disponible 24/7 pour vous accompagner</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="md:w-1/2" initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <div className="chatbot-container bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <Chatbot />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div className="max-w-3xl mx-auto" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à découvrir la valeur de votre véhicule ?</h2>
            <p className="text-xl mb-8 text-white/90">
              Estimez gratuitement votre véhicule en quelques secondes et obtenez une valorisation précise basée sur les données du marché.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" size="lg" asChild>
              <Link to="/register">
                Essayer gratuitement
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </MainLayout>;
};
export default Index;