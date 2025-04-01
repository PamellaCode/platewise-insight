import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Rocket, Star } from 'lucide-react';
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
  return <section className="py-24 bg-gradient-to-b from-blue-600 via-teal-500 to-cyan-500 relative overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white/30 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-green-300/40 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-blue-300/50 blur-md"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-medium text-sm mb-4 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Processus simple</span>
            <Sparkles className="h-4 w-4 text-yellow-300" />
          </motion.div>
          
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-3 text-white" initial={{
          opacity: 0,
          y: -20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }}>
            Comment ça marche ?
          </motion.h2>
          
          <motion.p className="text-xl text-white/90 max-w-3xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            Notre processus d'estimation est simple, rapide et efficace. Voici comment ça marche.
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div className="md:w-1/2 relative" initial={{
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
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-green-400 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80" alt="Estimation de véhicule" className="relative rounded-2xl shadow-2xl border-4 border-white/50 z-10 transform hover:scale-[1.02] transition-all duration-300" />
            
            <motion.div className="absolute -right-6 -bottom-6 bg-gradient-to-br from-teal-400 to-green-500 p-4 rounded-full shadow-xl z-20" initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -10
          }} whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.5
          }}>
              <Star className="h-10 w-10 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.div className="md:w-1/2 space-y-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            <motion.div variants={fadeIn} className="flex items-start p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group" whileHover={{
            y: -5,
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
          }}>
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-white mr-5 flex-shrink-0 shadow-lg group-hover:shadow-cyan-400/30">
                <span className="font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90">Entrez votre immatriculation</h3>
                <p className="text-white/80 text-lg">Saisissez simplement le numéro d'immatriculation de votre véhicule dans notre outil d'estimation.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-start p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group" whileHover={{
            y: -5,
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
          }}>
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-teal-400 to-green-500 text-white mr-5 flex-shrink-0 shadow-lg group-hover:shadow-green-400/30">
                <span className="font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90">Notre IA analyse votre véhicule</h3>
                <p className="text-white/80 text-lg">Notre intelligence artificielle analyse instantanément les données de votre véhicule et compare avec notre base de données.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex items-start p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group" whileHover={{
            y: -5,
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)'
          }}>
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 text-white mr-5 flex-shrink-0 shadow-lg group-hover:shadow-blue-400/30">
                <span className="font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white/90">Recevez une estimation détaillée</h3>
                <p className="text-white/80 text-lg">Obtenez une estimation précise de la valeur de votre véhicule avec des détails sur les facteurs qui influencent son prix.</p>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.6,
            duration: 0.5
          }} className="mt-12">
              <Button className="group bg-white hover:bg-white/90 text-blue-600 font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden" size="lg" asChild>
                <Link to="/how-it-works" className="flex items-center">
                  <span className="relative z-10 text-zinc-50">En savoir plus</span>
                  <motion.div animate={{
                  x: [0, 5, 0]
                }} transition={{
                  repeat: Infinity,
                  duration: 1.5
                }} className="ml-2 group-hover:ml-4 transition-all duration-300 relative z-10 bg-transparent rounded">
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                  <motion.div className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-100 to-cyan-100 group-hover:w-full transition-all duration-500" style={{
                  zIndex: 1
                }} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;