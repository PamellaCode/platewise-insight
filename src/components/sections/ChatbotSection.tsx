
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
              
              {/* Conversation illustration - Automotive themed */}
              <div className="absolute -bottom-24 -left-24 w-56 h-56">
                <div className="absolute inset-0 bg-gradient-to-tr from-argus-blue-300/30 to-auto-gold/20 rounded-full blur-2xl"></div>
                
                {/* Car message bubble */}
                <div className="absolute left-12 top-6 flex items-center">
                  <div className="bg-argus-blue-500/90 text-white px-4 py-2 rounded-2xl rounded-bl-none max-w-40 text-xs shadow-lg">
                    Quelle est la cote de ma voiture ?
                  </div>
                  <div className="w-3 h-3 -ml-1 -mt-5 bg-argus-blue-500/90 rotate-45"></div>
                </div>
                
                {/* Response message bubble with car icon */}
                <div className="absolute left-4 top-16 flex items-center space-x-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-auto-gold flex items-center justify-center text-xs font-bold text-white shadow-sm">
                    AC
                  </div>
                  <div className="bg-white border border-gray-200 px-3 py-2 rounded-2xl rounded-tl-none shadow-md max-w-36 text-xs">
                    <div className="font-semibold text-argus-blue-500 mb-1">Assistant AutoCote</div>
                    <div className="text-gray-700">Je peux vous aider! Veuillez saisir votre plaque d'immatriculation.</div>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="h-1.5 w-12 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full w-10 bg-auto-gold rounded-full"></div>
                      </div>
                      <svg className="h-3 w-3 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Car icon */}
                <div className="absolute right-4 top-28 opacity-10">
                  <svg className="h-14 w-14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 17H5V11.5C5 10.8 5.1 10.1 5.4 9.5L7 6H17L18.6 9.5C18.9 10.1 19 10.8 19 11.5V17ZM7 4C6.7 4 6.4 4.1 6.2 4.3C6 4.5 5.9 4.7 6 5L6.6 7H17.4L18 5C18 4.7 18 4.5 17.8 4.3C17.6 4.1 17.3 4 17 4H7ZM6 19.5C6 20.9 7.1 22 8.5 22C9.9 22 11 20.9 11 19.5V19H13V19.5C13 20.9 14.1 22 15.5 22C16.9 22 18 20.9 18 19.5V18C18.6 18 19 17.6 19 17V11.5C19 10.5 18.8 9.6 18.4 8.7L16.7 5C16.3 4.4 15.6 4 14.9 4H9.1C8.3 4 7.7 4.4 7.3 5L5.6 8.7C5.2 9.6 5 10.5 5 11.5V17C5 17.6 5.4 18 6 18V19.5ZM8.5 20C8.2 20 8 19.8 8 19.5V18H9V19.5C9 19.8 8.8 20 8.5 20ZM15.5 20C15.2 20 15 19.8 15 19.5V18H16V19.5C16 19.8 15.8 20 15.5 20Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              
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
