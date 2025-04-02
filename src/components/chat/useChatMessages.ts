
import { useState, useEffect } from 'react';
import { Message } from './types';
import { ChatService } from './ChatService';
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/lib/auth';
import Cookies from 'js-cookie';

// Constante pour le nom du cookie
const CHAT_HISTORY_COOKIE = 'argus_chat_history';

export const useChatMessages = () => {
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { user } = useAuth();

  // Initialize the session ID and load chat history when the component mounts
  useEffect(() => {
    const currentSessionId = ChatService.getSessionId();
    setSessionId(currentSessionId);
    console.log("Session ID:", currentSessionId);
    
    // Charger l'historique depuis les cookies
    loadChatHistory();
  }, []);

  // Sauvegarde l'historique de chat dans un cookie
  const saveChatHistory = (updatedMessages: Message[]) => {
    try {
      // Ne stockez que les 50 derniers messages pour éviter de dépasser la limite de taille des cookies
      const messagesToSave = updatedMessages.slice(-50);
      Cookies.set(CHAT_HISTORY_COOKIE, JSON.stringify(messagesToSave), { expires: 7 }); // Expire après 7 jours
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'historique:', error);
    }
  };

  // Charge l'historique de chat depuis les cookies
  const loadChatHistory = () => {
    try {
      const savedHistory = Cookies.get(CHAT_HISTORY_COOKIE);
      
      if (savedHistory) {
        const parsedHistory = JSON.parse(savedHistory) as Message[];
        setMessages(parsedHistory);
      } else {
        // Si pas d'historique, afficher le message d'accueil
        setMessages([{
          id: 1,
          text: "Bienvenue sur ArgusAI ! Pour estimer la valeur de votre véhicule, nous avons besoin de sa plaque d'immatriculation.",
          sender: 'bot',
          timestamp: new Date(),
          showLicensePlateInput: true
        }]);
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'historique:', error);
      // En cas d'erreur, afficher le message d'accueil par défaut
      setMessages([{
        id: 1,
        text: "Bienvenue sur ArgusAI ! Pour estimer la valeur de votre véhicule, nous avons besoin de sa plaque d'immatriculation.",
        sender: 'bot',
        timestamp: new Date(),
        showLicensePlateInput: true
      }]);
    }
  };

  // Efface l'historique de chat
  const clearChatHistory = () => {
    try {
      // Supprimer le cookie
      Cookies.remove(CHAT_HISTORY_COOKIE);
      
      // Réinitialiser les messages
      const initialMessage = {
        id: 1,
        text: "Bienvenue sur ArgusAI ! Pour estimer la valeur de votre véhicule, nous avons besoin de sa plaque d'immatriculation.",
        sender: 'bot',
        timestamp: new Date(),
        showLicensePlateInput: true
      };
      
      setMessages([initialMessage]);
      
      // Notification de succès
      toast({
        title: "Historique effacé",
        description: "Votre historique de conversation a été effacé avec succès.",
      });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'historique:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'effacer l'historique pour le moment.",
        variant: "destructive",
      });
    }
  };

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
    
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    // Sauvegarder l'historique après chaque message utilisateur
    saveChatHistory(updatedMessages);
    
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
        
        const finalMessages = [...updatedMessages, botMessage];
        setMessages(finalMessages);
        // Sauvegarder l'historique après chaque réponse du bot
        saveChatHistory(finalMessages);
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
      
      const finalMessages = [...updatedMessages, errorMessage];
      setMessages(finalMessages);
      saveChatHistory(finalMessages);
      
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
    handleLicensePlateSubmit,
    clearChatHistory
  };
};
