
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
import ChatLicensePlateInput from './chat/ChatLicensePlateInput';

// Options de suivi après l'estimation
const followUpPrompts = [
  { text: "Comparer mon véhicule à des modèles similaires", icon: "📊" },
  { text: "Comprendre comment la valeur de mon véhicule évolue dans le temps", icon: "📈" },
  { text: "Savoir si c'est le bon moment pour vendre mon véhicule", icon: "⏰" },
  { text: "Générer une annonce pour LeBonCoin", icon: "📝" },
  { text: "Conseils pour vendre rapidement", icon: "💡" },
];

const Chatbot: React.FC = () => {
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bienvenue sur ArgusAI ! Pour estimer la valeur de votre véhicule, nous avons besoin de sa plaque d'immatriculation.",
      sender: 'bot',
      timestamp: new Date(),
      showLicensePlateInput: true // Indique qu'il faut afficher le champ de saisie plaque
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  
  // Initialize the session ID when the component mounts
  useEffect(() => {
    const currentSessionId = ChatService.getSessionId();
    setSessionId(currentSessionId);
    console.log("Session ID:", currentSessionId);
  }, []);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handlePromptClick = async (text: string) => {
    await handleSend(text);
  };

  const handleLicensePlateSubmit = async (licensePlate: string) => {
    await handleSend(licensePlate);
  };
  
  const handleSend = async (input: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
      sessionId: sessionId
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);
    
    try {
      // Use n8n integration if available, fallback to simulation
      const userId = user?.id || 'anonymous';
      let response;
      
      try {
        // Try with n8n first
        response = await ChatService.processMessageWithN8n(input, userId, sessionId);
      } catch (error) {
        console.error('N8n processing failed, falling back to simulation:', error);
        // Fallback to simulated response
        response = await ChatService.simulateResponse(input);
      }

      // Simuler le délai de frappe
      ChatService.simulateTyping(response.text, (text) => {
        // Vérifier si la réponse contient des informations sur un véhicule
        const hasVehicleInfo = ChatService.checkIfHasVehicleInfo(text);
        
        const botMessage: Message = {
          id: messages.length + 2,
          text,
          sender: 'bot',
          timestamp: new Date(),
          hasCarInfo: response.hasCarInfo || hasVehicleInfo,
          carInfo: response.carInfo,
          showPrompts: hasVehicleInfo, // Afficher les prompts uniquement après avoir montré les infos du véhicule
          sessionId: sessionId
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
        timestamp: new Date(),
        sessionId: sessionId
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
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-0">AssistantAI</h3>
          <p className="text-xs opacity-80 mb-0">En ligne</p>
        </div>
        <div className="text-xs opacity-70">
          Session ID: {sessionId.substring(0, 8)}...
        </div>
      </div>
      
      {/* Messages Container */}
      <ScrollArea className="flex-grow p-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="space-y-4">
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <ChatMessage message={message} />
              
              {/* Affichage du champ de saisie de plaque après le premier message bot */}
              {message.sender === 'bot' && message.showLicensePlateInput && (
                <ChatLicensePlateInput onSubmit={handleLicensePlateSubmit} />
              )}
              
              {/* Affichage des questions prédéfinies après avoir obtenu les infos du véhicule */}
              {message.sender === 'bot' && message.showPrompts && (
                <ChatPromptGroup 
                  prompts={followUpPrompts} 
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
