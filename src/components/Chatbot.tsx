
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Car } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Message } from './chat/types';
import ChatMessage from './chat/ChatMessage';
import ChatTypingIndicator from './chat/ChatTypingIndicator';
import ChatInput from './chat/ChatInput';
import { ChatService } from './chat/ChatService';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth';
import ChatPromptGroup from './chat/ChatPromptGroup';

// Options principales pour guider l'utilisateur
const mainPrompts = [
  { text: "Obtenir la cote Argus de mon véhicule", icon: "📌" },
  { text: "Comparer mon véhicule à des modèles similaires", icon: "📌" },
  { text: "Comprendre comment la valeur de mon véhicule évolue dans le temps", icon: "📌" },
  { text: "Savoir si c'est le bon moment pour vendre mon véhicule", icon: "📌" },
  { text: "Accéder à l'historique des prix de mon véhicule", icon: "📌" },
];

// Options de suivi en fonction du contexte
const contextualPrompts = {
  estimation: [
    { text: "Entrer la plaque d'immatriculation", icon: "🚗" },
    { text: "Saisir les caractéristiques manuellement", icon: "✏️" }
  ],
  vente: [
    { text: "Générer une annonce pour LeBonCoin", icon: "📝" },
    { text: "Conseils pour vendre rapidement", icon: "💡" }
  ]
};

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bienvenue sur ArgusAI ! Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date(),
      showPrompts: true // Indique qu'il faut afficher les prompts principaux
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handlePromptClick = async (text: string) => {
    // Ajouter le message de l'utilisateur basé sur le prompt
    await handleSend(text);
  };
  
  const handleSend = async (input: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);
    
    try {
      // Use n8n integration if available, fallback to simulation
      const userId = user?.id || 'anonymous';
      let response;
      
      try {
        // Try with n8n first
        response = await ChatService.processMessageWithN8n(input, userId);
      } catch (error) {
        console.error('N8n processing failed, falling back to simulation:', error);
        // Fallback to simulated response
        response = await ChatService.simulateResponse(input);
      }
      
      // Déterminer si nous devons afficher des prompts contextuels basés sur la réponse ou l'input
      let showPrompts = false;
      let promptType = null;

      // Logique pour déterminer quels prompts contextuels afficher
      if (input.toLowerCase().includes('estimer') || 
          input.toLowerCase().includes('cote') || 
          input.toLowerCase().includes('valeur') ||
          input.toLowerCase().includes('véhicule')) {
        showPrompts = true;
        promptType = 'estimation';
      } else if (input.toLowerCase().includes('vendre') || 
                input.toLowerCase().includes('vente') ||
                input.toLowerCase().includes('annonce')) {
        showPrompts = true;
        promptType = 'vente';
      }

      // Simuler le délai de frappe
      ChatService.simulateTyping(response.text, (text) => {
        const botMessage: Message = {
          id: messages.length + 2,
          text,
          sender: 'bot',
          timestamp: new Date(),
          hasCarInfo: response.hasCarInfo,
          carInfo: response.carInfo,
          showPrompts, 
          promptType
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      });
    } catch (error) {
      console.error('Error processing message:', error);
      setIsTyping(false);
      
      // Add error message
      const errorMessage: Message = {
        id: messages.length + 2,
        text: "Une erreur est survenue, veuillez réessayer.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Erreur",
        description: "Impossible de traiter votre message pour le moment.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <Card className="flex flex-col h-[600px] w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex items-center p-4 border-b bg-gradient-to-r from-argus-blue-500 to-argus-teal-500 text-white">
        <div className="bg-white rounded-full p-2 mr-3">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-argus-blue-500">
            <Car className="h-5 w-5 text-white" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-0">AssistantAI</h3>
          <p className="text-xs opacity-80 mb-0">En ligne</p>
        </div>
      </div>
      
      {/* Messages Container */}
      <ScrollArea className="flex-grow p-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <ChatMessage message={message} />
              
              {message.sender === 'bot' && message.showPrompts && (
                message.promptType ? 
                  <ChatPromptGroup 
                    prompts={contextualPrompts[message.promptType as keyof typeof contextualPrompts]} 
                    onPromptClick={handlePromptClick} 
                  />
                : 
                  <ChatPromptGroup 
                    prompts={mainPrompts} 
                    onPromptClick={handlePromptClick} 
                  />
              )}
            </React.Fragment>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && <ChatTypingIndicator />}
          
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>
      
      {/* Input Area */}
      <ChatInput onSendMessage={handleSend} isTyping={isTyping} />
    </Card>
  );
};

export default Chatbot;
