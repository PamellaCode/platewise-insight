
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

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant AutoCote. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date()
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
      
      // Simulate typing effect with the received text
      ChatService.simulateTyping(response.text, (text) => {
        const botMessage: Message = {
          id: messages.length + 2,
          text,
          sender: 'bot',
          timestamp: new Date(),
          hasCarInfo: response.hasCarInfo,
          carInfo: response.carInfo
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
            <ChatMessage key={message.id} message={message} />
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
