
import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import Chatbot from '@/components/Chatbot';

const ChatbotSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-teal-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0" 
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
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mb-4">
              Assistant virtuel
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 tracking-tight leading-tight">
              Posez vos questions à notre assistant
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
              Vous avez des questions sur l'estimation de votre véhicule ? Notre assistant virtuel est là pour vous aider 24/7.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mr-4 flex-shrink-0 mt-1 shadow">
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-gray-700 text-lg">Posez des questions en langage naturel</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white mr-4 flex-shrink-0 mt-1 shadow">
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-gray-700 text-lg">Obtenez des réponses précises et personnalisées</p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-white mr-4 flex-shrink-0 mt-1 shadow">
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-gray-700 text-lg">Disponible 24/7 pour vous accompagner</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2" 
            initial={{
              opacity: 0,
              x: 50
            }} 
            whileInView={{
              opacity: 1,
              x: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
          >
            <div className="chatbot-container bg-white p-6 rounded-2xl shadow-2xl border border-blue-100 backdrop-blur-sm relative overflow-hidden">
              {/* Élément décoratif */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-200/30 to-teal-200/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-indigo-200/30 to-cyan-200/30 rounded-full blur-2xl"></div>
              
              {/* Badge de statut */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-teal-500 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                En ligne
              </div>
              
              <Chatbot />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
