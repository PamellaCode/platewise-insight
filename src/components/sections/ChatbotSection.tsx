import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import ChatMessage from '@/components/chat/ChatMessage';
import { Card } from '@/components/ui/card';

const ChatbotSection: React.FC = () => {
  // Mock messages for the illustration
  const mockMessages = [
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant AutoCote. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date()
    },
    {
      id: 2,
      text: "Bonjour, je voudrais estimer la valeur de ma voiture.",
      sender: 'user',
      timestamp: new Date()
    },
    {
      id: 3,
      text: "Avec plaisir ! Pouvez-vous me communiquer la plaque d'immatriculation de votre véhicule ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ];

  return <section className="py-24 bg-gradient-to-r from-blue-50 to-teal-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
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
            <Card className="flex flex-col h-[500px] w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="flex items-center p-4 border-b bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white">
                <div className="bg-white rounded-full p-2 mr-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white">
                    <img 
                      src="/lovable-uploads/2da57f4b-a186-4187-8eac-43f7b77087c3.png" 
                      alt="ArgusAI Logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-0">AssistantAI</h3>
                  <p className="text-xs opacity-80 mb-0">En ligne</p>
                </div>
              </div>
              
              <div className="flex-grow p-4 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="space-y-4">
                  {mockMessages.map((message) => (
                    <ChatMessage key={message.id} message={message as any} />
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex space-x-2">
                  <input 
                    className="flex-grow px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-argus-blue-400" 
                    placeholder="Écrivez votre message ici..."
                    readOnly
                  />
                  <button className="bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white p-2 rounded-md">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default ChatbotSection;
