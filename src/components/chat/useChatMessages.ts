
import { useState, useEffect } from 'react';
import { Message } from './types';
import { ChatService } from './ChatService';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth';

export const useChatMessages = () => {
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bienvenue sur ArgusAI ! Pour estimer la valeur de votre véhicule, nous avons besoin de sa plaque d'immatriculation.",
      sender: 'bot',
      timestamp: new Date(),
      showLicensePlateInput: true
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const { user } = useAuth();

  // Initialize the session ID when the component mounts
  useEffect(() => {
    const currentSessionId = ChatService.getSessionId();
    setSessionId(currentSessionId);
    console.log("Session ID:", currentSessionId);
  }, []);

  const handleLicensePlateSubmit = async (licensePlate: string) => {
    await handleSend(licensePlate);
  };

  const handlePromptClick = async (text: string) => {
    await handleSend(text);
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

  return {
    sessionId,
    messages,
    isTyping,
    handleSend,
    handlePromptClick,
    handleLicensePlateSubmit
  };
};
